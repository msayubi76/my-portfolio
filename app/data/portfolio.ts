export const siteUrl = 'https://salahuddin.pk'

export const profile = {
  name: 'Salah ud Din',
  title: 'Senior Laravel + Vue/Nuxt Developer',
  shortTitle: 'Laravel + Vue/Nuxt Developer',
  email: 'msayubi76@gmail.com',
  location: 'Islamabad, Pakistan',
  timezone: 'PKT (UTC+5)',
  hours: 'Flexible hours: can overlap with UK/EU or US teams',
  availability: 'Available immediately · full-time or contract',
  relocation: 'Remote, or relocation with visa sponsorship',
  linkedin: 'https://www.linkedin.com/in/msayubi76',
  github: 'https://github.com/msayubi76',
  resumePdf: '/Salah-ud-Din-Resume.pdf',
  // Drop a square photo (e.g. 800x800 .webp) into /public and set the path, e.g. '/salahuddin.webp'
  photo: '' as string
}

export interface Decision {
  title: string
  context: string
  decision: string
  tradeoff: string
}

export interface ArchitectureLayer {
  layer: string
  nodes: string[]
}

export interface Project {
  slug: string
  title: string
  kicker: string
  role: string
  summary: string
  result: string
  stack: string[]
  accent: 'cyan' | 'violet' | 'amber' | 'green'
  featured: boolean
  confidential?: boolean
  // Optional media: put files in /public/work/ and set e.g. '/work/munshi-wala.webp'
  image?: string
  imageAlt?: string
  video?: string
  imageWidth?: number
  imageHeight?: number
  gallery?: { src: string, alt: string, caption: string, width: number, height: number }[]
  challenge: string
  contribution: string
  highlights: string[]
  decisions: Decision[]
  architecture: ArchitectureLayer[]
}

export const projects: Project[] = [
  {
    slug: 'japan-uk-vehicle-exporter',
    title: 'Japan–UK Vehicle Exporter SaaS',
    kicker: 'Client project · In production',
    role: 'Solo full-stack: database, API, both front-ends, AI features, tests and deployment',
    summary: 'A multi-tenant platform for exporters who ship cars from Japanese auctions to UK buyers. It replaced spreadsheets for vehicles, shipping, costs and customer balances, and reads auction sheets and Bills of Lading with OpenAI.',
    result: 'One Laravel 12 API · two Nuxt 4 SSR apps + customer portal · OpenAI document extraction',
    stack: ['Laravel 12', 'Nuxt 4', 'TypeScript', 'MySQL 8', 'OpenAI API', 'Cloudflare R2'],
    accent: 'cyan',
    featured: true,
    confidential: true,
    image: '/work/japan-uk.webp',
    imageWidth: 860,
    imageHeight: 537,
    imageAlt: 'Bill of Lading read by OpenAI: vessel and ports extracted, 4 vehicles matched, 1 chassis not found and 1 conflict flagged (demo data)',
    gallery: [
      { src: '/work/japan-uk-bl-ai.webp', alt: 'Bill of Lading extraction dialog with matched vehicles, a not-found chassis and a BL conflict', caption: 'Bill of Lading AI: extracted shipping details, vehicles matched by BL and chassis, unknown chassis and conflicts flagged before anything is saved', width: 672, height: 868 },
      { src: '/work/japan-uk-auction-sheet.webp', alt: 'Auction sheet crop dialog before sending to AI', caption: 'Auction sheet upload: the user crops the sheet, and only the cropped, compressed image is sent to the AI', width: 1440, height: 900 },
      { src: '/work/japan-uk-auction-ai.webp', alt: 'Auction sheet fields extracted and pre-filled into the create-vehicle form', caption: 'Extracted auction fields pre-fill the create-vehicle form for review', width: 1440, height: 900 },
      { src: '/work/japan-uk-vehicle.webp', alt: 'Vehicle detail with status, customer, shipping and payable', caption: 'Vehicle detail: status, customer, auction, vessel, BL and ETA in one place', width: 1440, height: 900 },
      { src: '/work/japan-uk-costs.webp', alt: 'Cost summary with nine cost parts, supplier commission and customer payable', caption: 'Server-calculated costs: 9 cost parts + supplier commission = customer payable', width: 1440, height: 900 },
      { src: '/work/japan-uk-finance.webp', alt: 'Customer account with total due, paid, outstanding and JPY/GBP payments with rate', caption: 'Customer finance: JPY and GBP payments with the server-calculated rate and live outstanding balance', width: 1440, height: 900 },
      { src: '/work/japan-uk-invoice.webp', alt: 'Generated PDF invoice for four vehicles', caption: 'Generated PDF invoice', width: 620, height: 554 },
      { src: '/work/japan-uk-uk-app.webp', alt: 'UK app showing the same vehicle with a negotiated UK commission', caption: 'UK app: the same vehicle record with a negotiated UK commission, no duplicated data', width: 1440, height: 900 },
      { src: '/work/japan-uk-portal.webp', alt: 'Customer portal vehicle list with status, vessel and totals', caption: 'Read-only customer portal: the customer’s vehicles, status, vessel and totals', width: 1440, height: 900 }
    ],
    challenge: 'Exporters tracked hundreds of auction cars, shipments and customer balances across spreadsheets. The Japan team, UK partners and end customers each needed their own view of the same vehicle records, with money in both JPY and GBP, and no chance of one company seeing another company’s data.',
    contribution: 'I designed and built the whole system on my own: the data model, tenancy and permissions, the financial calculations, one Laravel API, two Nuxt SSR front-ends, the read-only customer portal, document storage, the OpenAI extraction features, the test suite and deployment.',
    highlights: [
      'Workspace-based tenancy with Spatie roles/permissions and Sanctum SPA auth; tenant context is resolved on the server, never taken from the client',
      'Full vehicle lifecycle: auction, costing across 9 cost parts plus supplier and UK commissions, vessel, BL, ETD/ETA and delivery',
      'Customer finance in JPY and GBP with server-calculated exchange rates, opening balances, live outstanding balances and PDF invoices and statements',
      'OpenAI extraction for Japanese auction sheets and Bills of Lading, using strict JSON schemas and a review step before anything is saved',
      'Bulk Excel import/export with per-column validation, soft deletes, audit trails and transactional writes',
      'Layered Laravel architecture (FormRequest → Service → API Resource) covered by PHPUnit tests and automated verification scripts'
    ],
    decisions: [
      {
        title: 'Tenant context comes from the server',
        context: 'One API serves the Japan app, the UK app and a customer portal. If the client sent its own tenant ID, a single tampered request could read another company’s vehicles.',
        decision: 'The tenant is resolved on the server from the signed-in user’s workspace, and every query goes through a supplier scope. The customer portal adds per-customer isolation on top of that.',
        tradeoff: 'Every new query has to go through the scope, so there is less freedom when writing ad-hoc queries. Feature tests check cross-tenant access so a mistake fails the build instead of leaking data.'
      },
      {
        title: 'AI suggests, the user confirms',
        context: 'Bill of Lading and auction-sheet data feeds shipping records and customer finance. A wrong chassis or BL number would put the wrong car on the wrong ship and the wrong invoice.',
        decision: 'The OpenAI response must match a strict JSON schema. The extracted BL and chassis numbers are then matched against the tenant’s existing vehicles, and conflicts (for example, a chassis already on a different BL) are flagged. Nothing is written until a person confirms.',
        tradeoff: 'It takes one extra review step, but the AI cannot quietly write bad data into financial records.'
      },
      {
        title: 'Money is calculated only on the server',
        context: 'Costs, commissions and JPY/GBP balances appear in two separate front-ends and on PDF invoices. If each screen calculated its own numbers, they would drift apart.',
        decision: 'Exchange rates, cost totals, commissions and outstanding balances are computed in Laravel services and returned through API resources. The Nuxt apps only display them.',
        tradeoff: 'It costs more API round-trips for live previews, in exchange for one source of truth for every number a customer sees.'
      }
    ],
    architecture: [
      { layer: 'Clients', nodes: ['Nuxt 4 SSR · Japan operations', 'Nuxt 4 SSR · UK business', 'Read-only customer portal'] },
      { layer: 'API', nodes: ['Laravel 12 REST API', 'Sanctum SPA auth', 'Spatie RBAC', 'Tenant scope'] },
      { layer: 'Services', nodes: ['Finance & costing', 'Excel import/export', 'PDF invoices', 'AI extraction'] },
      { layer: 'Data & external', nodes: ['MySQL 8', 'Cloudflare R2 files', 'OpenAI Responses API'] }
    ]
  },
  {
    slug: 'munshi-wala',
    title: 'Munshi Wala',
    kicker: 'Own product · Transport accounting SaaS',
    role: 'Founder and sole engineer: product, domain model, backend, frontend, desktop/mobile builds and tests',
    summary: 'A multi-tenant SaaS that replaces paper registers for goods transport companies: trips, fuel, partners, payroll and double-entry accounting. It runs on web, Windows and Android and keeps working offline.',
    result: '778+ Pest tests · Web + Windows + Android · Offline-first sync',
    stack: ['Laravel 12', 'Nuxt 4', 'MySQL', 'Tauri', 'Capacitor', 'Pest', 'IndexedDB'],
    accent: 'violet',
    featured: true,
    image: '/work/munshi-wala.webp',
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: 'Munshi Wala dashboard on desktop and on the mobile layout used by the Android app (demo data)',
    gallery: [
      { src: '/work/munshi-wala-ledger.webp', alt: 'Main Cash ledger with out, in and running balance columns', caption: 'Ledger built from source records: opening balance, every movement traced to a voucher, fuel slip or payment, and a running balance that reconciles', width: 1440, height: 900 },
      { src: '/work/munshi-wala-partnership.webp', alt: 'Vehicle ownership screen with partner shares, invested amount, earnings and settlements', caption: 'Vehicle partnership: share percentages, invested amount, earnings, withdrawals and settlement history per vehicle', width: 1440, height: 900 },
      { src: '/work/munshi-wala-vouchers.webp', alt: 'Trip vouchers list with vehicle, party, freight, diesel, expenses, profit and status', caption: 'Trip vouchers: freight, diesel, expenses and profit per trip, with draft and approval states', width: 1440, height: 900 },
      { src: '/work/munshi-wala-statement.webp', alt: 'Printable ledger statement PDF with totals', caption: 'One of 15+ printable statements, exported as a vector PDF', width: 595, height: 457 },
      { src: '/work/munshi-wala-urdu.webp', alt: 'Dashboard translated into Urdu', caption: 'Full English/Urdu localisation', width: 1440, height: 900 },
      { src: '/work/munshi-wala-dashboard.webp', alt: 'Operations dashboard with receivables, payables, advances and charts', caption: 'Operations dashboard with a live connection indicator (part of the offline-sync layer)', width: 1440, height: 900 }
    ],
    challenge: 'Transport businesses run on shared vehicle ownership, cash moving between partners and drivers, and unreliable internet. The users are not accountants, but the books still have to balance to the rupee.',
    contribution: 'I own the product end to end: domain modelling, permissions, ledger design, offline architecture, packaging for Windows and Android, reporting, localisation and the automated test suite.',
    highlights: [
      'Multi-tenant from day one: tenant_id with Laravel global scopes on a single shared database, plus subscription billing and a super-admin console',
      'Double-entry ledger built only from source records, so it can be rebuilt at any time and always reconciles',
      'Partnership accounting: date-ranged profit shares, the owner’s share as the remainder, exit settlements and a withdrawal reserve',
      'RBAC with a per-tenant permission ceiling, audit logs on every change, financial period locks and audited super-admin impersonation',
      'Windows (Tauri) and Android (Capacitor) apps from one codebase, with versioned releases and forced updates',
      '15+ printable statements with vector PDF export, CSV streaming for large exports and English/Urdu localisation'
    ],
    decisions: [
      {
        title: 'The ledger is derived, never hand-edited',
        context: 'In a hand-maintained ledger, every bug or manual correction is a reconciliation problem that someone finds months later.',
        decision: 'Every ledger entry is generated from a business record (a trip, a fuel slip, a payment) and points back to it, so the whole ledger can be rebuilt from source data.',
        tradeoff: 'Corrections must be made on the source record, not in the ledger. That is stricter for users but makes the books provably consistent.'
      },
      {
        title: 'Offline writes are idempotent',
        context: 'Users enter vouchers on Android phones and Windows PCs with patchy connections. A retried sync must never create a duplicate payment.',
        decision: 'Reads come from an IndexedDB cache and writes go into a queue. Each record carries a client-generated UUID, so replaying the queue is safe, and the server assigns voucher numbers on sync so two offline devices cannot collide.',
        tradeoff: 'An entry has no final voucher number until it syncs, so the UI has to show a pending state.'
      },
      {
        title: 'Row locks on partner withdrawals',
        context: 'Two partners withdrawing against the same vehicle at the same moment could each pass the balance check and overdraw the reserve.',
        decision: 'The withdrawal reserve check and write run inside a transaction with row-level locks.',
        tradeoff: 'Withdrawals for the same vehicle run one at a time. At this scale that cost is invisible, and it closes the race completely.'
      }
    ],
    architecture: [
      { layer: 'Clients', nodes: ['Nuxt 4 web app', 'Tauri · Windows', 'Capacitor · Android'] },
      { layer: 'Offline layer', nodes: ['IndexedDB read cache', 'Idempotent write queue', 'Versioned forced updates'] },
      { layer: 'API', nodes: ['Laravel 12 API', 'Tenant global scopes', 'RBAC + audit log', 'Period locks'] },
      { layer: 'Domain & data', nodes: ['Double-entry ledger', 'Partnership accounting', 'PDF / CSV reports', 'MySQL'] }
    ]
  },
  {
    slug: 'crypto-exchange',
    title: 'Real-Time Crypto Exchange',
    kicker: 'Digital Code · Web Team Lead',
    role: 'Led the web frontend team; built the most complex trading screens and the serverless chat feature',
    summary: 'The web frontend of a live crypto exchange with five trading modules (Spot, Margin, Futures, P2P and Copy Trade), real-time market data over WebSocket and a WhatsApp-style chat on serverless AWS.',
    result: '5 trading modules · WebSocket market data · Serverless AWS + GraphQL chat',
    stack: ['Vue.js', 'Nuxt.js', 'WebSocket', 'TradingView', 'AWS AppSync', 'Lambda', 'DynamoDB'],
    accent: 'amber',
    featured: true,
    confidential: true,
    challenge: 'Trading screens have to stay responsive while market data streams in on every tick, and five product modules built by several developers still need to look and behave like one product.',
    contribution: 'I led the web team: I built the TradingView charting module with the live order book, reviewed all frontend code, kept component standards consistent, mentored junior developers and agreed API contracts with the backend engineers.',
    highlights: [
      'TradingView charting with live order book and price feeds over WebSocket: the most complex screen in the product',
      'Frontend ownership across Spot, Margin, Futures, P2P and Copy Trade',
      'Render-performance tuning on data-heavy views that update on every market tick',
      'WhatsApp-style chat backed by AppSync (GraphQL), Lambda, DynamoDB, SES and IAM, with infrastructure in CloudFormation',
      'Code review for all frontend changes, shared component standards and mentoring'
    ],
    decisions: [
      {
        title: 'One review gate for the whole frontend',
        context: 'Five trading modules were moving in parallel. Without a single owner, each would drift into its own patterns for forms, tables and real-time state.',
        decision: 'All frontend code went through my review against shared component standards, and new screens reused the shared components instead of re-implementing them.',
        tradeoff: 'Review became a bottleneck at busy times, but the modules stayed consistent and easier to maintain.'
      },
      {
        title: 'Serverless for chat',
        context: 'The exchange needed in-app chat without the team running and scaling another always-on server.',
        decision: 'Chat runs on AWS Amplify/AppSync with a GraphQL API, DynamoDB storage, Lambda for logic, SES for notifications and IAM for access, all defined in CloudFormation.',
        tradeoff: 'It ties the feature closely to AWS services, in exchange for no servers to patch and automatic scaling.'
      }
    ],
    architecture: [
      { layer: 'Client', nodes: ['Vue.js / Nuxt.js app', 'TradingView charts', 'Shared component library'] },
      { layer: 'Real-time', nodes: ['WebSocket market feeds', 'Order book stream'] },
      { layer: 'Chat (serverless)', nodes: ['AppSync GraphQL', 'Lambda', 'DynamoDB', 'SES + IAM'] },
      { layer: 'Infrastructure', nodes: ['AWS Amplify', 'CloudFormation'] }
    ]
  },
  {
    slug: 'procurosis',
    title: 'B2B Procurement SaaS',
    kicker: 'Procurosis · Team Lead',
    role: 'Led the engineering team while building hands-on across backend, frontend and AWS',
    summary: 'Commercial procurement software for quotations, vendor workflows, purchase orders and real-time negotiation, sold on five subscription tiers.',
    result: 'Multi-tenant · 5 subscription tiers · Real-time chat',
    stack: ['Laravel', 'Vue.js', 'Vuex', 'MySQL', 'Laravel Echo', 'AWS'],
    accent: 'green',
    featured: false,
    image: '/work/procurosis.webp',
    imageWidth: 1366,
    imageHeight: 854,
    imageAlt: 'Procurosis quotation analysis: vendor quotes compared side by side and ranked, with discount, freight, GST and payment terms (demo data)',
    gallery: [
      { src: '/work/procurosis-quotation-analysis.webp', alt: 'Full quotation analysis screen with ranked vendor columns and cost charts', caption: 'Quotation analysis: vendors ranked per item, totals with freight and GST, payment terms and charts', width: 1366, height: 1956 },
      { src: '/work/procurosis-dashboard.webp', alt: 'Buyer dashboard with RFI, RFQ and PO counters, subscription plan usage and company stats', caption: 'Buyer dashboard: RFI/RFQ/PO pipeline and subscription-plan usage', width: 1366, height: 1200 },
      { src: '/work/procurosis-create-rfq.webp', alt: 'Create request for quotation form with vendors, items and payment terms', caption: 'Creating an RFQ: vendors (including non-registered companies), items, terms and attachments', width: 1366, height: 1450 },
      { src: '/work/procurosis-vendor-response.webp', alt: 'Vendor responding to an RFQ with per-item discounts, taxes and freight', caption: 'Vendor side: responding with per-item discount, GST and freight in a 3-step flow', width: 1366, height: 1460 },
      { src: '/work/procurosis-chat.webp', alt: 'Buyer and vendor chat attached to an RFQ', caption: 'Real-time buyer–vendor chat attached to the RFQ (Laravel Echo)', width: 1366, height: 673 }
    ],
    challenge: 'Buyers and vendors needed clear company boundaries, flexible quotation and purchase-order workflows, and a product that could be packaged into subscription tiers.',
    contribution: 'I led the engineering team and built hands-on: multi-tenant user management, quotation workflows, real-time chat, MySQL schemas, a shared Vue.js component library and AWS hosting.',
    highlights: [
      'Multi-tenant user management and permissions',
      'Quotation comparison and purchase-order workflows with analytics screens',
      'Real-time buyer–vendor chat over Laravel Echo',
      'MySQL schemas for purchase orders, quotation analytics and 5 subscription tiers',
      'Shared Vue.js component library with Vuex; AWS EC2, RDS and S3 infrastructure'
    ],
    decisions: [
      {
        title: 'Subscription tiers live in the data model',
        context: 'The business wanted to sell five plans with different limits without forking the code for each plan.',
        decision: 'Tiers and their limits were modelled in MySQL, and features check the tenant’s plan at runtime.',
        tradeoff: 'There is more schema to maintain, but new plans and limit changes need no new code.'
      },
      {
        title: 'Negotiation happens in real time',
        context: 'Quotation back-and-forth over email was slow and lost context.',
        decision: 'Buyer–vendor chat was built on Laravel Echo broadcasting, attached to the quotation it belongs to.',
        tradeoff: 'It adds a broadcasting service to run, but negotiations stay inside the product with full history.'
      }
    ],
    architecture: [
      { layer: 'Client', nodes: ['Vue.js + Vuex', 'Shared component library'] },
      { layer: 'API', nodes: ['Laravel', 'Multi-tenant auth', 'Laravel Echo'] },
      { layer: 'Infrastructure', nodes: ['MySQL on RDS', 'S3', 'EC2'] }
    ]
  }
]

export const aiPipeline = [
  { step: 'Upload', text: 'A user uploads a Japanese auction sheet (image) or a Bill of Lading (PDF). The file is hashed.' },
  { step: 'Cache', text: 'If the same tenant already read the same file with the same schema and model, the saved result is reused and no new API call is made.' },
  { step: 'Extract', text: 'OpenAI Responses API with a strict JSON schema. Each feature has its own model tier, and auction sheets use market-specific profiles.' },
  { step: 'Match', text: 'BL and chassis numbers are matched against the tenant’s existing vehicles. Conflicts, such as a chassis already on another BL, are flagged.' },
  { step: 'Confirm', text: 'Results pre-fill the form for review. Nothing is written to shipping or finance records until a person confirms.' },
  { step: 'Audit', text: 'Every request logs its model, tokens, latency and estimated USD cost. Feature flags and a manual fallback keep work moving if AI is off.' }
] as const

export const experience = [
  {
    period: '2023 — Present',
    role: 'Freelance Full-Stack Laravel Developer',
    company: 'Self-employed',
    summary: 'Full-time freelance since May 2026. I build and run production SaaS products end to end.',
    points: ['Japan–UK vehicle export SaaS in production, with OpenAI document extraction', 'Munshi Wala: multi-tenant transport accounting SaaS on web, Windows and Android', 'Pluto Pakistan: multi-vendor marketplace, built and launched solo']
  },
  {
    period: 'May 2023 — Apr 2026',
    role: 'Full-Stack Developer & Web Team Lead',
    company: 'Digital Code Private Limited · Islamabad',
    summary: 'Led the web frontend of a live crypto exchange and built its serverless AWS chat.',
    points: ['5 trading modules: Spot, Margin, Futures, P2P, Copy Trade', 'TradingView + WebSocket real-time UI', 'Reviewed all frontend code and mentored junior developers']
  },
  {
    period: 'Sep 2022 — Apr 2023',
    role: 'Senior Full-Stack Developer',
    company: 'Signup Solution Pvt Ltd · Islamabad',
    summary: 'Built a Laravel admin panel and a Nuxt.js guest app for a hotel management SaaS.',
    points: ['Reworked invoice generation and fixed recurring billing errors', 'Hotel-level and user-level role-based access', 'AWS EC2, RDS and S3']
  },
  {
    period: 'Jun 2021 — Sep 2022',
    role: 'Full-Stack Software Engineer & Team Lead',
    company: 'Procurosis Pvt Ltd · Islamabad',
    summary: 'Led the team building a commercial B2B procurement SaaS, and built hands-on across the stack.',
    points: ['Multi-tenant architecture and 5 subscription tiers', 'Quotation and purchase-order workflows', 'Real-time chat with Laravel Echo']
  },
  {
    period: 'Jun 2020 — May 2021',
    role: 'Software Engineer',
    company: 'Global Gateway Services · Islamabad',
    summary: 'Delivered client software for public-sector bidding, auctions and currency exchange.',
    points: ['6 projects in 12 months', 'E-Bidding / E-Auction adopted by 4 KPK education boards', 'Owned client meetings through to deployment']
  }
]

export const skillGroups = [
  { title: 'Backend', skills: ['PHP 8', 'Laravel 12', 'MySQL', 'REST APIs', 'GraphQL', 'Sanctum', 'Multi-tenancy', 'Queues + Horizon', 'Spatie RBAC', 'Audit trails'] },
  { title: 'Frontend', skills: ['Vue 3', 'Nuxt 4', 'TypeScript', 'Pinia', 'Tailwind CSS', 'SSR', 'WebSockets'] },
  { title: 'AI', skills: ['OpenAI API', 'Structured outputs (JSON schema)', 'Document extraction', 'Cost + token tracking'] },
  { title: 'Data & cloud', skills: ['PostgreSQL', 'DynamoDB', 'OpenSearch', 'AWS EC2 / RDS / S3', 'Lambda', 'AppSync', 'Cloudflare R2'] },
  { title: 'Quality & delivery', skills: ['Pest', 'PHPUnit', 'Vitest', 'Playwright', 'Docker', 'GitHub Actions', 'Code review'] },
  { title: 'Multi-platform', skills: ['Tauri', 'Capacitor', 'IndexedDB', 'Offline sync', 'PDF generation', 'Excel/CSV'] }
]

export interface Testimonial {
  quote: string
  name: string
  title: string
  relationship: string
}

// Paste LinkedIn recommendations here as text (not screenshots). The section stays hidden while empty.
export const testimonials: Testimonial[] = [
  {
    quote: 'Wonderful experience working with him. He is a responsible team lead, a hardworking developer, a very polite mentor and a wonderful person. Definitely a recommendation.',
    name: 'Huma Ismail',
    title: 'Full Stack Developer',
    relationship: 'Worked with Salah on the same team · April 2026'
  }
  // Waheed Ahmed's recommendation (Aug 2025) is left out on purpose: it is short and doesn't add specific evidence.
  // To show it, add: { quote: 'Salah is a passionate web developer and behaves well.', name: 'Waheed Ahmed', title: 'Full-Stack Flutter + Firebase Developer', relationship: 'Worked with Salah on the same team · August 2025' }
]
