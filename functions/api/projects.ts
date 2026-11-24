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
        "SELECT * FROM client_projects ORDER BY created_at DESC"
      ).all();
      return Response.json({ success: true, projects: results });
    }
    return Response.json({ success: true, projects: [] });
  } catch (err: any) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const data: any = await context.request.json();
    const { client_name, client_email, project_title, scope, sprint_budget, current_milestone, milestone_status } = data;

    if (!client_name || !project_title) {
      return Response.json({ success: false, error: "Client name and project title are required." }, { status: 400 });
    }

    const id = "prj-" + Date.now().toString(36);

    if (context.env.DB) {
      await context.env.DB.prepare(
        `INSERT INTO client_projects (id, client_name, client_email, project_title, scope, sprint_budget, current_milestone, milestone_status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        id,
        client_name,
        client_email || "",
        project_title,
        scope || "Build Custom Software",
        Number(sprint_budget) || 0,
        current_milestone || "Sprint 1: Architecture Blueprint",
        milestone_status || "scoping"
      ).run();

      return Response.json({ success: true, id, message: "Project created in D1." });
    }

    return Response.json({ success: true, id, message: "Project created locally." });
  } catch (err: any) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
};
