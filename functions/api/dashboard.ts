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
    const colo = context.request.headers.get("cf-ray")?.split("-")[1] || "EDGE";
    const country = context.request.headers.get("cf-ipcountry") || "US";

    if (context.env.DB) {
      const [inquiriesResult, projectsResult, subsResult, logsResult] = await Promise.all([
        context.env.DB.prepare("SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 50").all(),
        context.env.DB.prepare("SELECT * FROM client_projects ORDER BY created_at DESC").all(),
        context.env.DB.prepare("SELECT * FROM platform_subscribers ORDER BY created_at DESC").all(),
        context.env.DB.prepare("SELECT * FROM studio_logs ORDER BY created_at DESC LIMIT 20").all()
      ]);

      const inquiries = inquiriesResult.results || [];
      const projects = projectsResult.results || [];
      const subscribers = subsResult.results || [];
      const logs = logsResult.results || [];

      const totalPipeline = projects.reduce((acc: number, p: any) => acc + (Number(p.sprint_budget) || 0), 0);
      const totalPaid = projects.reduce((acc: number, p: any) => acc + (Number(p.paid_amount) || 0), 0);
      const totalMRR = subscribers.reduce((acc: number, s: any) => acc + (Number(s.mrr) || 0), 0);
      const newInquiriesCount = inquiries.filter((i: any) => i.status === "new").length;

      return Response.json({
        success: true,
        stats: {
          totalInquiries: inquiries.length,
          newInquiries: newInquiriesCount,
          activeProjects: projects.length,
          totalPipeline,
          totalPaid,
          totalSubscribers: subscribers.length,
          totalMRR,
          systemStatus: "OPERATIONAL",
          edgeRegion: "WEUR",
          edgeColo: colo,
          clientCountry: country,
          dbEngine: "Cloudflare D1 (SQLite Edge Engine)"
        },
        inquiries,
        projects,
        subscribers,
        logs
      });
    }

    // High-fidelity fallback for offline / mock testing
    return Response.json({
      success: true,
      stats: {
        totalInquiries: 1,
        newInquiries: 1,
        activeProjects: 3,
        totalPipeline: 39000,
        totalPaid: 23750,
        totalSubscribers: 4,
        totalMRR: 1036,
        systemStatus: "OPERATIONAL",
        edgeRegion: "WEUR",
        edgeColo: colo,
        clientCountry: country,
        dbEngine: "Cloudflare D1 Simulation Mode"
      },
      inquiries: [
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
      ],
      projects: [
        {
          id: "prj-001",
          client_name: "Aura Media Group",
          client_email: "ops@auramedia.io",
          project_title: "Ultra-Low Latency Video Streaming Hub",
          scope: "Build Custom Software",
          tier: "ENGINEERING SPRINT",
          current_milestone: "Sprint 2: WebRTC Ingestion Relay",
          milestone_status: "staging_review",
          sprint_budget: 12500,
          paid_amount: 6250,
          staging_url: "https://staging.player.auramedia.io",
          repo_url: "github.com/36tstudios/aura-player",
          target_launch: "Q1 2026"
        },
        {
          id: "prj-002",
          client_name: "Veloce Logistics",
          client_email: "engineering@veloce.dev",
          project_title: "Dispatch Touch Screen Fleet Interface",
          scope: "Build Custom Software",
          tier: "ENGINEERING SPRINT",
          current_milestone: "Sprint 3: Real-Time Telemetry Map",
          milestone_status: "in_progress",
          sprint_budget: 18000,
          paid_amount: 9000,
          staging_url: "https://dispatch.staging.veloce.dev",
          repo_url: "github.com/36tstudios/veloce-touch",
          target_launch: "Q2 2026"
        },
        {
          id: "prj-003",
          client_name: "Nordic Event Collective",
          client_email: "partnerships@nordicevents.se",
          project_title: "White-Label JEvents Mobile Pass Engine",
          scope: "License Platform IP",
          tier: "PLATFORM LICENSE",
          current_milestone: "Sprint 1: Core Pass Architecture",
          milestone_status: "approved",
          sprint_budget: 8500,
          paid_amount: 8500,
          staging_url: "https://jevents.online/nordic",
          repo_url: "github.com/36tstudios/nordic-pass",
          target_launch: "Q1 2026"
        }
      ],
      subscribers: [
        {
          id: "sub-001",
          platform_id: "jstreams",
          platform_name: "JStreams Live TV",
          subscriber_name: "StreamWorks Broadcast",
          subscriber_email: "billing@streamworks.tv",
          tier_name: "PRO ENTERPRISE",
          mrr: 499,
          status: "active",
          api_key_prefix: "sk_live_jstr_99x"
        },
        {
          id: "sub-002",
          platform_id: "jevents",
          platform_name: "JEvents Ticketing",
          subscriber_name: "Lagos Summit 2026",
          subscriber_email: "events@lagossummit.ng",
          tier_name: "SCALE SUITE",
          mrr: 149,
          status: "active",
          api_key_prefix: "sk_live_jevt_44a"
        },
        {
          id: "sub-003",
          platform_id: "whisppr",
          platform_name: "Whisppr Protocol",
          subscriber_name: "Apex Cryptographic Labs",
          subscriber_email: "dev@apexcrypto.org",
          tier_name: "FOUNDRY SDK",
          mrr: 299,
          status: "active",
          api_key_prefix: "sk_live_whsp_12c"
        },
        {
          id: "sub-004",
          platform_id: "jstreams_studio",
          platform_name: "JStreams Studio",
          subscriber_name: "Urban Broadcast Studio",
          subscriber_email: "producers@urbanbroadcast.net",
          tier_name: "CREATOR SUITE",
          mrr: 89,
          status: "active",
          api_key_prefix: "sk_live_jstu_77b"
        }
      ],
      logs: [
        {
          id: 1,
          action: "d1_initialized",
          entity_type: "system",
          entity_id: "36tstudios-db",
          actor: "wrangler",
          details: "Cloudflare D1 database initialized with 4 tables and seed records",
          created_at: new Date().toISOString()
        }
      ]
    });
  } catch (err: any) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
};
