-- 36T Studios Foundry & Ecosystem Database Schema

-- 1. Project Inquiries & Intake
CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  scope TEXT NOT NULL,
  timeline TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  budget_estimate TEXT,
  ip_address TEXT,
  country TEXT,
  admin_notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Client Engineering Sprints & Milestones
CREATE TABLE IF NOT EXISTS client_projects (
  id TEXT PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_email TEXT,
  project_title TEXT NOT NULL,
  scope TEXT NOT NULL,
  tier TEXT DEFAULT 'SPRINT',
  current_milestone TEXT,
  milestone_status TEXT DEFAULT 'in_progress',
  sprint_budget REAL DEFAULT 0.0,
  paid_amount REAL DEFAULT 0.0,
  staging_url TEXT,
  repo_url TEXT,
  target_launch TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. J-Platforms SaaS Products & Subscriptions
CREATE TABLE IF NOT EXISTS platform_subscribers (
  id TEXT PRIMARY KEY,
  platform_id TEXT NOT NULL,
  platform_name TEXT NOT NULL,
  subscriber_name TEXT NOT NULL,
  subscriber_email TEXT NOT NULL,
  tier_name TEXT NOT NULL,
  mrr REAL DEFAULT 0.0,
  status TEXT DEFAULT 'active',
  api_key_prefix TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. Studio Audit & Telemetry Log
CREATE TABLE IF NOT EXISTS studio_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  actor TEXT DEFAULT 'system',
  details TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Initial seed data for immediate operational dashboard
INSERT OR IGNORE INTO client_projects (id, client_name, client_email, project_title, scope, tier, current_milestone, milestone_status, sprint_budget, paid_amount, staging_url, repo_url, target_launch)
VALUES 
('prj-001', 'Aura Media Group', 'ops@auramedia.io', 'Ultra-Low Latency Video Streaming Hub', 'Build Custom Software', 'ENGINEERING SPRINT', 'Sprint 2: WebRTC Ingestion Relay', 'staging_review', 12500.0, 6250.0, 'https://staging.player.auramedia.io', 'github.com/36tstudios/aura-player', 'Q1 2026'),
('prj-002', 'Veloce Logistics', 'engineering@veloce.dev', 'Dispatch Touch Screen Fleet Interface', 'Build Custom Software', 'ENGINEERING SPRINT', 'Sprint 3: Real-Time Telemetry Map', 'in_progress', 18000.0, 9000.0, 'https://dispatch.staging.veloce.dev', 'github.com/36tstudios/veloce-touch', 'Q2 2026'),
('prj-003', 'Nordic Event Collective', 'partnerships@nordicevents.se', 'White-Label JEvents Mobile Pass Engine', 'License Platform IP', 'PLATFORM LICENSE', 'Sprint 1: Core Pass Architecture', 'approved', 8500.0, 8500.0, 'https://jevents.online/nordic', 'github.com/36tstudios/nordic-pass', 'Q1 2026');

INSERT OR IGNORE INTO platform_subscribers (id, platform_id, platform_name, subscriber_name, subscriber_email, tier_name, mrr, status, api_key_prefix)
VALUES
('sub-001', 'jstreams', 'JStreams Live TV', 'StreamWorks Broadcast', 'billing@streamworks.tv', 'PRO ENTERPRISE', 499.0, 'active', 'sk_live_jstr_99x'),
('sub-002', 'jevents', 'JEvents Ticketing', 'Lagos Summit 2026', 'events@lagossummit.ng', 'SCALE SUITE', 149.0, 'active', 'sk_live_jevt_44a'),
('sub-003', 'whisppr', 'Whisppr Protocol', 'Apex Cryptographic Labs', 'dev@apexcrypto.org', 'FOUNDRY SDK', 299.0, 'active', 'sk_live_whsp_12c'),
('sub-004', 'jstreams_studio', 'JStreams Studio', 'Urban Broadcast Studio', 'producers@urbanbroadcast.net', 'CREATOR SUITE', 89.0, 'active', 'sk_live_jstu_77b');

INSERT OR IGNORE INTO inquiries (id, name, email, organization, scope, timeline, message, status, budget_estimate)
VALUES
('inq-demo-01', 'Marcus Vance', 'mvance@stratafoundry.com', 'Strata Foundry', 'Build Custom Software', 'Q1 2026 (Immediate)', 'Looking to engineer a low-latency WebRTC control room interface for streaming drone telemetry into a web dashboard.', 'new', '$15,000 - $25,000');
