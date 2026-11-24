type D1Database = any;
type PagesFunction<T = any> = (context: {
  request: Request;
  env: T;
  params?: any;
  waitUntil?: (promise: Promise<any>) => void;
  next?: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  data?: Record<string, any>;
}) => Promise<Response> | Response;

interface Env {
  DB?: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    if (context.env.DB) {
      const { results } = await context.env.DB.prepare(
        "SELECT * FROM inquiries ORDER BY created_at DESC"
      ).all();
      return Response.json({ success: true, inquiries: results, source: "d1" });
    }

    // Fallback seed data if D1 binding is pending
    const fallback = [
      {
        id: "inq-demo-01",
        name: "Marcus Vance",
        email: "mvance@stratafoundry.com",
        organization: "Strata Foundry",
        scope: "Build Custom Software",
        timeline: "Q1 2026 (Immediate)",
        message: "Looking to engineer a low-latency WebRTC control room interface for streaming drone telemetry into a web dashboard.",
        status: "new",
        budget_estimate: "$15,000 - $25,000",
        created_at: new Date().toISOString()
      }
    ];
    return Response.json({ success: true, inquiries: fallback, source: "fallback" });
  } catch (err: any) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const data: any = await context.request.json();
    const { name, email, organization, scope, timeline, message } = data;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Name, email, and project message are required." },
        { status: 400 }
      );
    }

    const id = "inq-" + Date.now().toString(36) + "-" + Math.random().toString(36).substring(2, 6);
    const ip = context.request.headers.get("cf-connecting-ip") || "unknown";
    const country = context.request.headers.get("cf-ipcountry") || "unknown";

    if (context.env.DB) {
      await context.env.DB.prepare(
        `INSERT INTO inquiries (id, name, email, organization, scope, timeline, message, status, ip_address, country)
         VALUES (?, ?, ?, ?, ?, ?, ?, 'new', ?, ?)`
      ).bind(id, name, email, organization || "", scope || "General", timeline || "Flexible", message, ip, country).run();

      await context.env.DB.prepare(
        `INSERT INTO studio_logs (action, entity_type, entity_id, actor, details)
         VALUES ('inquiry_created', 'inquiry', ?, ?, ?)`
      ).bind(id, email, `New brief from ${name} (${organization || "Independent"})`).run();

      return Response.json({
        success: true,
        id,
        message: "Project brief successfully registered in Cloudflare D1.",
        source: "d1"
      });
    }

    return Response.json({
      success: true,
      id,
      message: "Project brief accepted.",
      source: "local"
    });
  } catch (err: any) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
};

export const onRequestPatch: PagesFunction<Env> = async (context) => {
  try {
    const data: any = await context.request.json();
    const { id, status, admin_notes } = data;

    if (!id) {
      return Response.json({ success: false, error: "Inquiry ID is required" }, { status: 400 });
    }

    if (context.env.DB) {
      await context.env.DB.prepare(
        `UPDATE inquiries 
         SET status = COALESCE(?, status), 
             admin_notes = COALESCE(?, admin_notes), 
             updated_at = CURRENT_TIMESTAMP 
         WHERE id = ?`
      ).bind(status || null, admin_notes || null, id).run();

      return Response.json({ success: true, message: "Inquiry updated successfully in D1." });
    }

    return Response.json({ success: true, message: "Updated locally." });
  } catch (err: any) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
};
