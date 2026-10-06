// ============================================================
// data/portfolio.js  —  Awais Mumtaz Developer Portfolio Data
// Full-Stack Developer (React, Node.js, AI Integrations)
// ============================================================

const PORTFOLIO = {
  resumeUrl: 'resume.pdf',

  // ── Personal Info ──────────────────────────────────────────
  personal: {
    name:     'Awais Mumtaz',
    handle:   'awais@dev',
    title:    'Full-Stack Developer',
    roleTag:  'React · Node.js · AI Integrations',
    tagline:  'Building responsive web applications, robust backend services, and practical AI tools.',
    bio:      'I build responsive web applications, robust backend services, and practical AI-powered tools. Focused on writing clean, scalable code that solves real problems.',
    avatar:   'assets/malikawais.png',
    location: 'Lahore, Pakistan',

    contact: {
      email:    'awaismumtaz1406@gmail.com',
      phone:    '+92 328 8421580',
    },

    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/awaismumtaz1406/', icon: 'linkedin' },
      { label: 'GitHub',   url: 'https://github.com/awaismumtaz1406',           icon: 'github'   },
      { label: 'Email',    url: 'mailto:awaismumtaz1406@gmail.com',             icon: 'mail'     },
    ],
  },

  // ── Client Work & Satisfaction (Featured) ──────────────────
  clientWork: {
    title:       'Client Learning & Resource Hub',
    client:      'Waseem Raza',
    clientRole:  'Tech Lead / Client',
    clientLoc:   'USA',
    liveUrl:     'https://waseemraza844.github.io/portfolio/learning.html',
    period:      'Completed 2026',
    command:     './view_client_project.sh --client waseem-raza',
    highlights: [
      'Built a fast, responsive educational resource website with clean navigation.',
      'Implemented organized modular course sections for self-paced technical learning.',
      'Optimized layouts and load performance across mobile and desktop devices.',
    ],
    testimonial: {
      quote: 'Awais delivered a clean, fast, and well-structured site on time. Great communication and solid frontend execution.',
      author: 'Waseem Raza',
      title: 'Tech Lead / Client, USA',
    },
  },

  // ── Campus Ambassadorship (Balanced Leadership Highlight) ──
  leadership: {
    role:     'Devsinc Campus Ambassador (Devstranauts 3.0)',
    period:   '2026 – 2027',
    campus:   'University of Management and Technology (UMT), Lahore',
    summary:  'Selected as the ambassador representing Devsinc at UMT Lahore, helping connect student developers with tech events and industry opportunities.',
    image:    'assets/devsinc-event.jpg',
    caption:  'Devstranauts 3.0 Launch Event at Devsinc HQ representing UMT Lahore.',
  },

  // ── Work Experience (Direct & Concise) ───────────────────────
  experience: [
    {
      id:          'flyrank',
      role:        'Frontend Developer Intern',
      company:     'FlyRank AI',
      period:      'Jun 2026 – Present',
      type:        'Remote',
      command:     'git log -n 1 --author "Awais"',
      description: 'Developing user interfaces and reusable components using React and modern CSS.',
    },
    {
      id:          'bigbrains',
      role:        'Software Quality Engineer Intern',
      company:     'Big Brains',
      period:      'Aug 2026',
      type:        'Remote',
      command:     'pytest -v --suite qa_workflows',
      description: 'Executed automated and manual test suites covering UI, authentication, and core workflows.',
    },
    {
      id:          'datacrumbs',
      role:        'ChangeMakers Ambassador',
      company:     'DataCrumbs',
      period:      'May 2026 – Present',
      type:        'Remote',
      command:     'datacrumbs --advocate',
      description: 'Supported technical initiatives and community learning sessions.',
    },
  ],

  // ── Flagship Projects (Only 2 strongest) ────────────────────
  projects: [
    {
      id:          'salesmatrix',
      title:       'SalesMatrix Studio',
      period:      '2026',
      badge:       'Full-Stack BI & AI',
      command:     './launch_salesmatrix.sh',
      description: 'BI analytics platform turning sales data into P&L statements, multi-dimensional charts, and AI-generated executive summaries.',
      stack:       ['React 19', 'TypeScript', 'Tailwind', 'Node.js', 'Supabase', 'Gemini API'],
      live:        'https://sales-matrix-d6vfs6wuo-awais-mumtaz.vercel.app/',
      github:      'https://github.com/awaismumtaz1406/SalesMatrix',
    },
    {
      id:          'studysync-ai',
      title:       'StudySync AI',
      period:      '2026',
      badge:       'Smart Academic Assistant',
      command:     'python3 -m studysync.agent',
      description: 'Smart academic assistant with slide-search RAG, natural task scheduling, and automated deadline reminders.',
      stack:       ['React', 'Node.js', 'Express', 'Supabase pgvector', 'Gemini API'],
      live:        'https://study-sync-ai-je9e.vercel.app/',
      github:      'https://github.com/awaismumtaz1406/StudySync-Ai',
    },
  ],

  // ── Technical Skills ───────────────────────────────────────
  skills: [
    {
      category: 'Frontend',
      items: ['React 19', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / Modern CSS'],
    },
    {
      category: 'Backend & APIs',
      items: ['Node.js', 'Express', 'Python', 'C++', 'RESTful APIs'],
    },
    {
      category: 'Databases & AI',
      items: ['Supabase / PostgreSQL', 'pgvector / Vector Search', 'Google Gemini API', 'MySQL', 'SQLite'],
    },
    {
      category: 'Tools & Testing',
      items: ['Git & GitHub', 'Automated QA / Testing', 'Linux / Bash', 'VS Code', 'Vercel'],
    },
  ],

  // ── Education & Certifications ─────────────────────────────
  education: [
    {
      institution: 'University of Management and Technology (UMT), Lahore',
      degree:      'BS Software Engineering',
      period:      '2024 – 2028',
      details:     'Focused on software architecture, algorithms, and practical web/AI engineering.',
    },
  ],

  certifications: [
    {
      id:     'XM6Z75V7J34J',
      title:  'AI for App Building',
      issuer: 'Google',
      date:   'Oct 2026',
    },
    {
      id:     'BO37C0OKD2CL',
      title:  'AI for App Deployment',
      issuer: 'Google',
      date:   'Oct 2026',
    },
  ],
};
