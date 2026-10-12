import profilePic from "../assets/reza-profile.jpg";

import {
  Certificate,
  Project,
  SkillCategory,
  StatItem,
} from "../types/portfolio";
export const PERSONAL_INFO = {
  name: "Reza Rizki Ramadhan",
  title: "Full Stack Developer | Quality Assurance Analyst | Business Analyst",
  tagline:
    "Bridging the gap between stakeholder business needs, rigorous test engineering, and high-performance system execution. I engineer end-to-end resilient web applications grounded in empirical software quality standards, structured requirements traceability, and modern distributed architecture.",
  status: "Available for Full-Time & Project Opportunities",
  email: "reza.ramadhan.dev@gmail.com",
  location: "Jakarta, Indonesia (Available for Remote Worldwide)",
  github: "https://github.com/ryzkyam",
  linkedin: "https://www.linkedin.com/in/reza-rizki-ramadhan/",
  university: "Information Systems Graduate - Gunadarma University",
  degree: "Information Systems",
  version: "v2.4.0-stable",
  profileImage: profilePic,
};

export const HERO_METRICS = [
  { value: "100%", label: "SRS Traceability", color: "text-on-surface" },
  { value: "99.4%", label: "E2E Pass Rate", color: "text-secondary" },
  { value: "3NF", label: "Relational Norm", color: "text-primary" },
];

export const TELEMETRY_CARDS = [
  {
    category: "Architecture",
    title: "Next.js + FastAPI",
    detail: "RESTful & Async",
    color: "text-secondary",
  },
  {
    category: "Security Tier",
    title: "Supabase RLS",
    detail: "Role RBAC Enforced",
    color: "text-primary",
  },
  {
    category: "Business Ops",
    title: "BPMN 2.0 & UML",
    detail: "E2E Flow Mapping",
    color: "text-on-surface-variant",
  },
  {
    category: "Predictive Mod",
    title: "Prophet Pipeline",
    detail: "7-Day Revenue Reg",
    color: "text-secondary",
  },
];

export const STATS_STRIP: StatItem[] = [
  {
    icon: "school",
    iconColor: "primary",
    label: "Alma Mater",
    value: "Gunadarma Univ.",
    subtext: "Information Systems",
  },
  {
    icon: "fact_check",
    iconColor: "secondary",
    label: "Verification",
    value: "15+ Suites",
    subtext: "Automated E2E & Regressions",
  },
  {
    icon: "api",
    iconColor: "primary",
    label: "Contract Testing",
    value: "30+ APIs",
    subtext: "Validated with Bruno & Postman",
  },
  {
    icon: "account_tree",
    iconColor: "secondary",
    label: "Architectures",
    value: "Multi-Branch",
    subtext: "High-Availability Deployments",
  },
];

export const PILLARS = [
  {
    domain: "Domain 01",
    title: "Business Analysis",
    icon: "schema",
    color: "primary",
    description:
      "Transforming ambiguous operational bottlenecks into structured technical documentation. Expert in stakeholder elicitation, drafting comprehensive BRD/SRS, mapping BPMN 2.0 flows, and defining executable Acceptance Criteria (Gherkin/UML).",
    tags: [
      "BRD / PRD /SRS Docs",
      "BPMN 2.0",
      "UML Class/Sequence",
      "User Stories",
    ],
  },
  {
    domain: "Domain 02",
    title: "Quality Assurance",
    icon: "flaky",
    color: "secondary",
    description:
      "Zero tolerance for untested regressions. Designing end-to-end test strategies, executing automated browser runs with Playwright and Selenium, carrying out rigorous boundary value testing, and validating idempotent API behavior.",
    tags: ["Playwright", "Selenium", "Boundary Analysis", "Regression Suites"],
  },
  {
    domain: "Domain 03",
    title: "Full-Stack Development",
    icon: "code_blocks",
    color: "primary",
    description:
      "Constructing scalable, decoupled web systems. Proficient across modern React ecosystems (Next.js, TypeScript), robust microservices with Python (FastAPI) and C#, along with relational database modeling (PostgreSQL / Supabase with RLS).",
    tags: [
      "Next.js & React",
      "TypeScript",
      "FastAPI & Python",
      "PostgreSQL / Supabase",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "steam-berkah",
    title: "Steam Berkah Management System",
    description:
      "Centralized multi-branch motorcycle wash operations management system with automated 60/40 revenue sharing, queue orchestration, and Prophet predictive analytics.",
    imageUrl:
      "https://skopxltcpbhgtsokdliy.supabase.co/storage/v1/object/public/project-assets/dashboard.png",
    imageAlt:
      "High tech software interface preview showing a multi-branch motorcycle management dashboard with dark purple telemetry charts and Prophet predictive line graphs",
    category: "fullstack",
    categoryMatch: ["all", "fullstack", "ba"],
    badges: [
      { label: "Flagship System", variant: "primary" },
      { label: "Next.js + FastAPI", variant: "secondary" },
    ],
    tagNote: "Multi-Branch Operations",
    tags: ["Next.js 14", "Supabase RLS", "FastAPI", "Prophet ML", "BPMN 2.0"],
    statusNote: "End-to-End Deployed",
    actionText: "View Analysis & System Details",

    // 9 Detailed Sections
    overview:
      "Steam Berkah Management System is a centralized enterprise web platform engineered for multi-branch motorcycle wash operations. It unifies customer bay queuing, service transaction logging, automated 60/40 revenue-sharing wage settlements, and predictive inventory analytics into a synchronized cloud interface.",
    background:
      "Berkah Steam Motor historically recorded operations, vehicle queues, and daily commission splits in paper ledgers across multiple physical wash stations. This caused a 12% monthly revenue discrepancy, delays in daily worker commission payments, and zero visibility into branch-level detergent inventory or peak wash hours.",
    objectives: [
      "Eliminate physical paper ledgers by establishing a centralized real-time wash queue and bay status tracker.",
      "Automate daily multi-worker wage settlements using a precise 60% business / 40% technician revenue-sharing rule.",
      "Enforce multi-tenant branch data isolation with strict Supabase Row-Level Security (RLS) policies.",
      "Integrate a machine learning predictive pipeline to forecast 7-day customer wash demand and supply restock needs.",
      "Provide owners with an executive telemetry dashboard accessible remotely from any smartphone or tablet.",
    ],
    roleAndContribution: [
      "Business Analyst: Conducted on-site stakeholder elicitation, observed cashier-to-technician handoffs, and authored comprehensive BRD, SRS, and BPMN 2.0 operational flowcharts.",
      "Full Stack Developer: Engineered the responsive Next.js 14 frontend using Tailwind CSS, developed the Python FastAPI analytics microservice, and modeled 3NF relational schemas in Supabase PostgreSQL.",
      "Quality Assurance Engineer: Authored automated Playwright regression suites verifying transaction concurrency, 60/40 math rounding precision, and RBAC security boundaries.",
    ],
    process: [
      "Phase 1 - Requirements Elicitation & Process Modeling: Analyzed pain points, mapped BPMN 2.0 swimlane diagrams from motorcycle entry to bay completion, and defined acceptance criteria.",
      "Phase 2 - Relational Schema & Security Architecture: Designed a 3NF normalized database schema and implemented PostgreSQL Row-Level Security (RLS) to enforce strict branch-level isolation.",
      "Phase 3 - Frontend & API Development: Built high-speed cashier and technician interfaces in Next.js 14 App Router, accompanied by asynchronous FastAPI background endpoints.",
      "Phase 4 - Predictive Analytics Engine: Integrated Meta Prophet time-series models to analyze historical seasonal peaks, weather conditions, and weekend surge patterns.",
      "Phase 5 - Rigorous Quality Validation: Conducted boundary value analysis on split calculations, multi-tab queue race conditions, and Playwright automated regression runs.",
    ],
    outputAndFeatures: [
      "Live Queue & Bay Orchestration: Real-time visual board indicating available wash bays, vehicle intake queues, and average washing turnaround times.",
      "Automated 60/40 Revenue Sharing Engine: Instant commission disbursement calculator that allocates 60% to business overhead and 40% directly to the technician without manual math.",
      "Executive Analytics Telemetry: Real-time revenue charts, peak hour heatmaps, customer vehicle category distributions, and daily branch summaries.",
      "Prophet 7-Day Forecasting Pipeline: Predictive curves displaying projected customer volume and recommended soap/chemical restock orders.",
      "Role-Based Access Control (RBAC): Dedicated portal views customized specifically for Cashiers, Wash Technicians, and General Ownership.",
    ],
    toolsUsed: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Supabase",
      "PostgreSQL",
      "Prophet ML",
      "Playwright",
      "BPMN 2.0",
      "Docker",
    ],
    keyLearnings: [
      "Database-level Row-Level Security (RLS) guarantees data privacy between business branches with virtually zero overhead compared to application-layer guards.",
      "Automating previously manual revenue-sharing formulas creates complete transparency, eliminating employee wage disputes from day one.",
      "Real-world operational forecasting must incorporate environmental factors (e.g., rainfall schedules in tropical climates) to avoid revenue projection false positives.",
    ],
    gallery: [
      "https://skopxltcpbhgtsokdliy.supabase.co/storage/v1/object/public/project-assets/dashboard.png",
      "https://skopxltcpbhgtsokdliy.supabase.co/storage/v1/object/public/project-assets/analitik.png",
      "https://skopxltcpbhgtsokdliy.supabase.co/storage/v1/object/public/project-assets/manage.png",
    ],
  },
  {
    id: "warjo-pos",
    title: "Warjo (Warung Hijau) POS & Accounting System",
    description:
      "High-performance retail Point of Sale (POS) and automated general ledger accounting software with real-time barcode scanning, FIFO COGS calculations, and financial statements.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAn3S-r_wsnOyGFhMKUET455HNm32MwpaQ7dWG7JFNVQgvByfYo4XFixXdJpRkNZ88SC88fSiWu8cSw6Rve477RJjpbFrxKtL9v5qGTR47ndEK5i8Sf4XaQtwV1QQftZ_hPyLdvwVGjBqdRKlOj3akOlvqZX1v58i7SZdae82pYAj4ogDi-EL2HRJm9p9P0RoTCqd4ZKFdScafgonRLIZyzaS6y7b3t9AGt4II5mvlPJxjj8ZJ9zLCi",
    imageAlt:
      "POS checkout interface and financial accounting report preview with clean ledger balance views, inventory stocks, and transaction summary analytics",
    category: "fullstack",
    categoryMatch: ["all", "fullstack", "ba"],
    badges: [
      { label: "Retail SME System", variant: "primary" },
      { label: "React + .NET Core", variant: "secondary" },
    ],
    tagNote: "POS & Financial Ledgers",
    tags: ["React", ".NET Core", "PostgreSQL", "Tailwind CSS", "UML Modeling"],
    statusNote: "Production Ready",
    actionText: "View Architecture & POS Specs",

    // 9 Detailed Sections
    overview:
      "Warjo (Warung Hijau) is an integrated Point of Sale (POS) and SME accounting system built to modernize small-to-medium retail and food outlets. The solution bridges everyday cashier barcode scanning with automated Cost of Goods Sold (COGS/HPP) calculation, supplier accounts payable tracking, and instant double-entry financial reporting.",
    background:
      "Warung Hijau operated with manual paper cash registers and physical supplier delivery notes. As product inventory scaled beyond 2,000 SKUs, store management struggled with unrecorded inventory shrinkage, delayed supplier payments, and an inability to calculate true monthly net margins or identify loss-making products.",
    objectives: [
      "Accelerate transaction checkout to under 3 seconds per customer with keyboard-first shortcut navigation and barcode reader integration.",
      "Automate real-time inventory deduction and Cost of Goods Sold (COGS) tracking utilizing the FIFO (First-In, First-Out) method.",
      "Generate automated double-entry accounting journals for every transaction without requiring accounting expertise from store clerks.",
      "Produce instant, compliant financial statements including Profit & Loss (Laba Rugi) and Balance Sheet (Neraca) statements.",
      "Track accounts payable and supplier consignment invoices with automatic reminder notifications for approaching due dates.",
    ],
    roleAndContribution: [
      "Full Stack Architect: Designed the decoupled .NET Core clean-architecture backend and implemented high-responsiveness React UI components with Tailwind CSS.",
      "Business Analyst: Conducted domain elicitation with store owners and suppliers, mapped retail inventory lifecycles, and drafted UML Class and Sequence diagrams.",
      "QA & Performance Analyst: Executed load testing with 10,000+ mock SKUs, validated penny-rounding consistency, and automated barcode scanning event regression scripts.",
    ],
    process: [
      "Phase 1 - Accounting & Domain Analysis: Modeled the accounting chart of accounts (COA) adhering to Indonesian SAK EMKM financial reporting guidelines.",
      "Phase 2 - Clean Architecture System Design: Built a 4-tier .NET Core backend separating Domain, Application, Infrastructure, and Web API layers with Entity Framework Core.",
      "Phase 3 - Keyboard-Optimized POS Frontend: Developed a lightweight React interface supporting hotkeys, barcode scanning event handlers, and thermal receipt printer drivers.",
      "Phase 4 - Automated Double-Entry Ledger Pipeline: Engineered event hooks ensuring checkout orders immediately generate synchronized debit/credit ledger records.",
      "Phase 5 - Comprehensive Acceptance & Stress Testing: Validated system stability under simulated 50 simultaneous transactions per second and zero database locking collisions.",
    ],
    outputAndFeatures: [
      "High-Speed Barcode Checkout Terminal: Keyboard-driven POS interface with instant product search, customer loyalty discounts, and thermal printer integration.",
      "Automated FIFO Inventory & COGS Tracker: Real-time stock decrement and reorder alerts triggered whenever critical inventory thresholds are reached.",
      "One-Click Financial Statement Generator: Automated generation of Income Statements (Laba Rugi), Balance Sheets (Neraca), and Cash Flow Reports.",
      "Supplier Accounts Payable & Consignment Ledger: Ledger tracking credit terms, invoice payment due dates, and supplier consignment reconciliation.",
      "Real-Time Owner Telemetry & Stock Valuation: Cloud analytics dashboard presenting gross margins, product profitability matrices, and hourly revenue curves.",
    ],
    toolsUsed: [
      "React",
      "TypeScript",
      "C# (.NET Core)",
      "Entity Framework Core",
      "PostgreSQL",
      "Tailwind CSS",
      "Selenium",
      "Postman",
      "UML 2.5",
      "BPMN 2.0",
    ],
    keyLearnings: [
      "In high-throughput retail environments, keyboard-first navigation and hotkeys provide dramatically higher cashier throughput than touch-only interfaces.",
      "Enforcing double-entry balancing rules at the database transaction boundary prevents ledger corruption and gives stakeholders complete financial audit confidence.",
      "Modular Clean Architecture in .NET Core allows new payment gateways and receipt printing protocols to be plugged in without destabilizing core accounting business rules.",
    ],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAn3S-r_wsnOyGFhMKUET455HNm32MwpaQ7dWG7JFNVQgvByfYo4XFixXdJpRkNZ88SC88fSiWu8cSw6Rve477RJjpbFrxKtL9v5qGTR47ndEK5i8Sf4XaQtwV1QQftZ_hPyLdvwVGjBqdRKlOj3akOlvqZX1v58i7SZdae82pYAj4ogDi-EL2HRJm9p9P0RoTCqd4ZKFdScafgonRLIZyzaS6y7b3t9AGt4II5mvlPJxjj8ZJ9zLCi",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTQEqN1soLVdlBZzuEC70_nLFgBqxCm9CXoftkrNSrUvVzP9EhGdp0IRnIs7G1y4IUc4sHodol-51A_JtWPAfCaH1khtz1h5IaHbPYEq7p1IXK_DcOu-dOwoIYx5BrL8-nwD9tbNiazpRgJMw1z7au5im45Aw62v_gNDw8N4S6oohggfoTXaIqYG7yoeHMfi2F2CcH-lRPRUipuvVsuIyW7XSO7DzLCDucUZRbgxkNWh9cYDB7TpyR",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5MN3MhdeFx1VTe2cMjlKjBGFgqzYXWvtv-hpYk-4LxKep8jSDML6DsI-sLHwvQ0lRGczOuEn9K1ixzuMaeNUK9ciT4wubMd2B4gejKDFsW1nzrVSxZm7K1rMbmMX7GqInZ6H2UO7HWnvT84i-dFJQY3E8zp6j259YZD-3PBnXHif9Ukoh5g05ryy4J-lyHrTICQxtBydk7SBdy2pN4ok5thkG4kbXg4JJAk8Bf2L1nlUODy97-VLh",
    ],
  },
  {
    id: "qa-suite",
    title: "E-Commerce Checkout & Inventory E2E QA Suite",
    description:
      "Extensive test automation suite verifying race conditions across checkout transactions, flash sale stock decrements, and coupon code stacking boundaries.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5MN3MhdeFx1VTe2cMjlKjBGFgqzYXWvtv-hpYk-4LxKep8jSDML6DsI-sLHwvQ0lRGczOuEn9K1ixzuMaeNUK9ciT4wubMd2B4gejKDFsW1nzrVSxZm7K1rMbmMX7GqInZ6H2UO7HWnvT84i-dFJQY3E8zp6j259YZD-3PBnXHif9Ukoh5g05ryy4J-lyHrTICQxtBydk7SBdy2pN4ok5thkG4kbXg4JJAk8Bf2L1nlUODy97-VLh",
    imageAlt:
      "Playwright and Selenium test runner console window with cyan test pass indicators showing coupon boundary conditions and automated assertion logs on dark terminal",
    category: "qa",
    categoryMatch: ["all", "qa"],
    badges: [
      { label: "QA Automation", variant: "secondary" },
      { label: "Playwright & Selenium", variant: "neutral" },
    ],
    tagNote: "60+ Edge Test Specs",
    tags: [
      "Playwright",
      "Selenium Webdriver",
      "Boundary Testing",
      "Allure Reports",
    ],
    statusNote: "99.4% Flakeless",
    actionText: "View Test Design & Matrix",

    // 9 Detailed Sections
    overview:
      "The E-Commerce Checkout & Inventory QA Suite is a robust, end-to-end automated testing harness designed to safeguard high-volume e-commerce transaction funnels against concurrency anomalies, coupon exploitation, and inventory discrepancies under heavy flash sale conditions.",
    background:
      "During promotional flash sales, simultaneous customer checkouts frequently triggered race conditions—resulting in negative stock inventory, unauthorized multi-voucher stacking, and orphaned inventory allocations caused by delayed or dropped payment gateway webhook callbacks.",
    objectives: [
      "Eliminate inventory overselling under high concurrency through deterministic multi-browser race-condition automation.",
      "Verify 100% of promotional coupon combinations to prevent stacked negative balance vulnerabilities and discount re-use.",
      "Achieve a flakeless test pass rate exceeding 99% integrated directly into GitHub Actions pull request CI checks.",
      "Provide instant diagnostic visual artifacts (step-by-step videos, network har traces, DOM snapshots) upon assertion failures.",
      "Standardize maintainable test suites utilizing modern Page Object Model (POM) architectural design patterns.",
    ],
    roleAndContribution: [
      "QA Automation Lead: Architected the end-to-end testing framework using TypeScript, Playwright, and Selenium Webdriver.",
      "Test Strategy Designer: Authored Equivalence Partitioning (EP) and Boundary Value Analysis (BVA) test case specifications.",
      "CI/CD Pipeline Engineer: Built containerized GitHub Actions workflows running automated parallel browser matrix execution with Allure report integration.",
    ],
    process: [
      "Phase 1 - Boundary & Risk Analysis: Formulated comprehensive test matrices covering coupon logic limits, multi-currency conversions, and tax calculation rounding.",
      "Phase 2 - Framework Architecture: Developed modular Page Object Models (POM), isolated test fixtures, and mock server handlers for payment gateway callbacks.",
      "Phase 3 - Concurrency Simulation: Scripted simulated simultaneous checkouts across isolated browser contexts targeting the final remaining inventory item.",
      "Phase 4 - Chaos & Gateway Timeout Testing: Injected simulated 504 Gateway Timeouts to verify that temporary stock locks are released cleanly without orphaned records.",
      "Phase 5 - Pipeline Hardening: Fine-tuned web-first assertions and retry policies to eliminate false positives and achieve a 99.4% flakeless CI pass rate.",
    ],
    outputAndFeatures: [
      "60+ Automated Edge-Case Test Scenarios: Comprehensive assertions covering discount limits, tax calculations, stock exhaustion, and payment rollbacks.",
      "Page Object Model (POM) Architecture: Cleanly decoupled test steps and selectors facilitating rapid maintenance as UI layouts evolve.",
      "Automated Allure Diagnostic Reports: Interactive dashboards providing visual traces, network logs, and step execution timelines.",
      "GitHub Actions Pre-Merge CI Gates: Automated regression smoke suites executing across Chromium, Firefox, and WebKit on every pull request.",
      "Idempotent Test Data Factories: Dynamic generation and teardown of mock customer accounts, cart states, and temporary voucher codes.",
    ],
    toolsUsed: [
      "Playwright",
      "Selenium Webdriver",
      "TypeScript",
      "Node.js",
      "Allure Reports",
      "GitHub Actions",
      "Docker",
      "Postman CLI",
    ],
    keyLearnings: [
      "Replacing arbitrary static sleep delays with Playwright web-first auto-waiting assertions eliminated 98% of false positive test failures.",
      "Simulating payment gateway network timeouts and verifying database rollback consistency is just as critical as testing the happy payment path.",
      "Maintaining isolated test data fixtures per test run prevents test interdependency and enables fully parallelized test runs.",
    ],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5MN3MhdeFx1VTe2cMjlKjBGFgqzYXWvtv-hpYk-4LxKep8jSDML6DsI-sLHwvQ0lRGczOuEn9K1ixzuMaeNUK9ciT4wubMd2B4gejKDFsW1nzrVSxZm7K1rMbmMX7GqInZ6H2UO7HWnvT84i-dFJQY3E8zp6j259YZD-3PBnXHif9Ukoh5g05ryy4J-lyHrTICQxtBydk7SBdy2pN4ok5thkG4kbXg4JJAk8Bf2L1nlUODy97-VLh",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAn3S-r_wsnOyGFhMKUET455HNm32MwpaQ7dWG7JFNVQgvByfYo4XFixXdJpRkNZ88SC88fSiWu8cSw6Rve477RJjpbFrxKtL9v5qGTR47ndEK5i8Sf4XaQtwV1QQftZ_hPyLdvwVGjBqdRKlOj3akOlvqZX1v58i7SZdae82pYAj4ogDi-EL2HRJm9p9P0RoTCqd4ZKFdScafgonRLIZyzaS6y7b3t9AGt4II5mvlPJxjj8ZJ9zLCi",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTQEqN1soLVdlBZzuEC70_nLFgBqxCm9CXoftkrNSrUvVzP9EhGdp0IRnIs7G1y4IUc4sHodol-51A_JtWPAfCaH1khtz1h5IaHbPYEq7p1IXK_DcOu-dOwoIYx5BrL8-nwD9tbNiazpRgJMw1z7au5im45Aw62v_gNDw8N4S6oohggfoTXaIqYG7yoeHMfi2F2CcH-lRPRUipuvVsuIyW7XSO7DzLCDucUZRbgxkNWh9cYDB7TpyR",
    ],
  },
  {
    id: "digital-lending",
    title: "Digital Lending & Credit Scoring System Analysis",
    description:
      "Complete Business Architecture study detailing applicant KYC verification, credit risk engine evaluation, and automated loan disbursement.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuYX4v7R6QEDBFquP_emIKxUt3o1AiMbA_csb-ZkmtFucKlrI6x-0I4u6zurLGZlZwfiKm8Fna-3fCjscTPukCEFbtxdGMsB4KWTk7LA7gb7319Q8n6kErKda7E3VCG6jvo1p9u-VTGlH4SICRdSSlWof8r9bzo-b7CQGzn5OtXn32H1gKqfwzhjE-bpLFphQRXCOg7wGCNELj9lThQm9SsVKp9U7a8irvU_Qn7iiXhNJkQl655fbK",
    imageAlt:
      "Fintech loan underwriting UML architecture and business process flow diagram rendered cleanly with purple node highlights and loan eligibility matrices",
    category: "ba",
    categoryMatch: ["all", "ba"],
    badges: [
      { label: "Business Analysis", variant: "primary" },
      { label: "BRD / SRS / UML", variant: "neutral" },
    ],
    tagNote: "Enterprise Financial Specs",
    tags: [
      "BRD & SRS",
      "BPMN 2.0 Workflows",
      "UML Sequence",
      "Risk Traceability",
    ],
    statusNote: "100% Traceability",
    actionText: "View Documentation Artifacts",

    // 9 Detailed Sections
    overview:
      "The Digital Lending & Credit Scoring System Analysis is an enterprise Business Architecture blueprint and Software Requirements Specification (SRS) for a digital loan underwriting and disbursement engine. It maps customer KYC identity onboarding, algorithmic risk classification, and core banking integration.",
    background:
      "Fintech lending operations must navigate stringent compliance mandates (OJK regulations, anti-fraud checks) and strict underwriting criteria. The client suffered from communication silos between credit underwriting officers, compliance auditors, and engineering teams—leading to frequent requirement rework and unverified edge-case loan states.",
    objectives: [
      "Author a comprehensive, single source of truth Business Requirements Document (BRD) and Software Requirements Specification (SRS).",
      "Map multi-lane BPMN 2.0 process flowcharts detailing happy paths, fraud detection rejections, and manual credit committee escalations.",
      "Establish a 100% bidirectional Requirements Traceability Matrix (RTM) linking 42 regulatory compliance mandates to technical user stories.",
      "Diagram UML Sequence and Component models specifying asynchronous API communication with external credit bureau bureaus and disbursement gateways.",
      "Formulate structured Gherkin (Given-When-Then) acceptance criteria ensuring seamless verification by QA engineering teams.",
    ],
    roleAndContribution: [
      "Lead Business Analyst: Directed stakeholder discovery workshops with credit risk heads, compliance attorneys, and backend architects.",
      "Systems Architect: Designed formal UML 2.5 Sequence, Class, and Activity models documenting distributed loan state transitions.",
      "Traceability Lead: Built the bidirectional RTM framework aligning regulatory governance with engineering delivery milestones.",
    ],
    process: [
      "Phase 1 - Stakeholder Elicitation & Discovery: Conducted in-depth interviews with credit underwriters, legal compliance teams, and operations managers.",
      "Phase 2 - Domain-Driven Ubiquitous Language Definition: Established clear domain terminologies, customer risk tiers, and loan state machine definitions.",
      "Phase 3 - Visual Process Engineering: Developed formal BPMN 2.0 swimlane workflows covering customer onboarding, credit engine queries, and disbursement triggers.",
      "Phase 4 - Technical Architecture Modeling: Created UML Sequence diagrams illustrating asynchronous webhook callbacks and third-party credit bureau fallbacks.",
      "Phase 5 - Traceability Matrix & Verification Sign-Off: Formulated RTM linking 42 statutory regulations directly to user stories and Playwright/Postman test criteria.",
    ],
    outputAndFeatures: [
      "80+ Page BRD & SRS Specification: Comprehensive documentation of business rules, loan calculation formulas, and edge-case exceptions.",
      "BPMN 2.0 Swimlane Process Models: Visual clarity covering Applicant, Risk Algorithm, Credit Committee, and Disbursement lanes.",
      "UML Sequence & Component Blueprints: Precise asynchronous API transaction flows including timeout, retry, and idempotent failure handling.",
      "Bidirectional Requirements Traceability Matrix (RTM): Complete compliance verification matrix guaranteeing zero untracked requirements.",
      "Executable Gherkin Acceptance Specifications: Ready-to-automate test scenarios bridging the gap directly between BA and QA teams.",
    ],
    toolsUsed: [
      "BPMN 2.0",
      "UML 2.5",
      "Jira & Confluence",
      "Enterprise Architect",
      "Draw.io",
      "Gherkin / Cucumber",
      "Git",
      "Postman",
    ],
    keyLearnings: [
      "Establishing a shared domain vocabulary between banking compliance officers and software engineers early prevents costly architectural refactoring.",
      "Interactive visual BPMN swimlanes eliminate ambiguity faster than text-heavy specifications by clearly assigning operational handoff ownership.",
      "Bidirectional traceability matrices guarantee that every regulatory compliance mandate has a corresponding automated test assertion.",
    ],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuYX4v7R6QEDBFquP_emIKxUt3o1AiMbA_csb-ZkmtFucKlrI6x-0I4u6zurLGZlZwfiKm8Fna-3fCjscTPukCEFbtxdGMsB4KWTk7LA7gb7319Q8n6kErKda7E3VCG6jvo1p9u-VTGlH4SICRdSSlWof8r9bzo-b7CQGzn5OtXn32H1gKqfwzhjE-bpLFphQRXCOg7wGCNELj9lThQm9SsVKp9U7a8irvU_Qn7iiXhNJkQl655fbK",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAn3S-r_wsnOyGFhMKUET455HNm32MwpaQ7dWG7JFNVQgvByfYo4XFixXdJpRkNZ88SC88fSiWu8cSw6Rve477RJjpbFrxKtL9v5qGTR47ndEK5i8Sf4XaQtwV1QQftZ_hPyLdvwVGjBqdRKlOj3akOlvqZX1v58i7SZdae82pYAj4ogDi-EL2HRJm9p9P0RoTCqd4ZKFdScafgonRLIZyzaS6y7b3t9AGt4II5mvlPJxjj8ZJ9zLCi",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTQEqN1soLVdlBZzuEC70_nLFgBqxCm9CXoftkrNSrUvVzP9EhGdp0IRnIs7G1y4IUc4sHodol-51A_JtWPAfCaH1khtz1h5IaHbPYEq7p1IXK_DcOu-dOwoIYx5BrL8-nwD9tbNiazpRgJMw1z7au5im45Aw62v_gNDw8N4S6oohggfoTXaIqYG7yoeHMfi2F2CcH-lRPRUipuvVsuIyW7XSO7DzLCDucUZRbgxkNWh9cYDB7TpyR",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Testing & QA",
    subtitle:
      "Defensive validation, automated regression, and edge identification.",
    icon: "bug_report",
    iconColor: "secondary",
    domainLabel: "QA & Verification",
    skills: [
      "Playwright",
      "Selenium Webdriver",
      "Postman / Bruno",
      "Boundary Value Anal.",
      "Regression Suites",
      "Equivalence Class",
    ],
    footerBadge: "End-to-End Automated",
  },
  {
    title: "Languages & UI",
    subtitle:
      "High-performance reactive user interfaces and strongly-typed codebases.",
    icon: "code",
    iconColor: "primary",
    domainLabel: "Frontend & Logic",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js & React",
      "C# (.NET Core)",
      "Tailwind CSS",
      "Python (FastAPI)",
    ],
    footerBadge: "Modern Full-Stack",
  },
  {
    title: "Data & Backend",
    subtitle: "Normalized schema design, role permissions, and REST APIs.",
    icon: "database",
    iconColor: "secondary",
    domainLabel: "Data & Persistence",
    skills: [
      "PostgreSQL",
      "Supabase",
      "Row-Level Security",
      "RESTful Microservices",
      "Prisma ORM",
      "Node.js Runtime",
    ],
    footerBadge: "3NF Normalized",
  },
  {
    title: "Analysis & Docs",
    subtitle:
      "Elicitation artifacts, process flows, and agile backlog prioritization.",
    icon: "account_tree",
    iconColor: "primary",
    domainLabel: "Business Strategy",
    skills: [
      "BRD / SRS Authoring",
      "BPMN 2.0 Modeling",
      "UML Diagrams",
      "Gherkin User Stories",
      "Jira & Confluence",
      "Git & GitHub Actions",
    ],
    footerBadge: "Traceability Certified",
  },
];

export const CERTIFICATES: Certificate[] = [
  // {
  //   id: "cert-req-analysis",
  //   title: "Analyze Software Requirements",
  //   issuer: "Universitas Gunadarma",
  //   year: "2025",
  //   category: "Analysis",
  //   description:
  //     "Professional competency certification validating proficiency in software requirements elicitation, drafting comprehensive BRD/SRS, and modeling BPMN 2.0 system process workflows.",
  //   imageUrl: "../assets/sertificates/designingsoftware.png",
  //   pdfUrl:
  //     "https://e-sert.gunadarma.ac.id/cert/5631/signed_212ad3bb5754d4eff9e0dc2460735ee2.pdf.pdf",
  //   credentialId: "UG-REQ-2025-081",
  // },
  // },
  // {
  //   id: "cert-dev-fullstack",
  //   title: "Full Stack Web & Database Engineering",
  //   issuer: "FreeCodeCamp / DevCert",
  //   year: "2024",
  //   category: "Development",
  //   description:
  //     "Comprehensive accreditation covering modern full-stack web architectures, PostgreSQL relational schema modeling, RESTful microservices, and reactive TypeScript UI design.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1607969892193-270830612999?auto=format&fit=crop&w=1200&q=80",
  //   pdfUrl:
  //     "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //   credentialId: "FCC-FS-94022",
  // },
  // {
  //   id: "cert-sqa-testing",
  //   title: "Software Quality Assurance & Manual Testing",
  //   issuer: "Meta / Coursera",
  //   year: "2024",
  //   category: "Analysis",
  //   description:
  //     "Industry accreditation in systematic defect lifecycle tracking, boundary value analysis, regression matrix authoring, and acceptance criteria verification standards.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
  //   pdfUrl:
  //     "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //   credentialId: "META-SQA-8839",
  // },
  // {
  //   id: "cert-postman-expert",
  //   title: "Postman API Fundamentals Student Expert",
  //   issuer: "Postman Academy",
  //   year: "2024",
  //   category: "Development",
  //   description:
  //     "Evaluated mastery in REST API request workflows, automated collection runs via CLI, environment variables, dynamic assertion scripts, and JSON schema contract verification.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  //   pdfUrl:
  //     "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //   credentialId: "PST-EXPERT-2024",
  // },
  // {
  //   id: "cert-academic-degree",
  //   title: "Bachelor of Computer Science (Informatics Engineering)",
  //   issuer: "Universitas Gunadarma",
  //   year: "2024",
  //   category: "Academic",
  //   description:
  //     "Undergraduate academic degree in Informatics Engineering focusing on distributed software systems, algorithm complexity, database modeling, and software engineering standards.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  //   pdfUrl:
  //     "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //   credentialId: "UG-CS-2024-912",
  // },
  // {
  //   id: "cert-academic-database",
  //   title: "Relational Database Systems & 3NF Normalization",
  //   issuer: "Universitas Gunadarma",
  //   year: "2023",
  //   category: "Academic",
  //   description:
  //     "Academic certificate of distinction for advanced study in relational algebra, indexing optimization, query plan execution, and ACID-compliant transaction design.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=1200&q=80",
  //   pdfUrl:
  //     "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //   credentialId: "UG-DB-2023-401",
  // },
];
