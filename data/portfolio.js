// ============================================================
// data/portfolio.js  —  Awais Mumtaz Developer Portfolio Data
// Full-Stack Developer (React, Node.js, AI & ML Integrations)
// ============================================================

const PORTFOLIO = {
  resumeUrl: 'resume.pdf',

  // ── Personal Info ──────────────────────────────────────────
  personal: {
    name:     'Awais Mumtaz',
    title:    'Full-Stack Developer',
    roleTag:  'React 19 · Node.js · AI & ML Integrations',
    tagline:  'Building production web applications, robust backend services, and practical AI tools.',
    bio:      'I build responsive web applications, robust backend services, and practical AI-powered tools. Focused on writing clean, scalable code that solves real problems.',
    avatar:   'assets/profile.jpg',
    location: 'Lahore, Pakistan',

    contact: {
      email:    'awaismumtaz1406@gmail.com',
      phone:    '+92 328 8421580',
    },

    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/awaismumtaz1406/' },
      { label: 'GitHub',   url: 'https://github.com/awaismumtaz1406'           },
      { label: 'WhatsApp', url: 'https://wa.me/923288421580?text=Hi%20Awais,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!' },
      { label: 'Email',    url: 'mailto:awaismumtaz1406@gmail.com'             },
    ],
  },

  // ── Client Work & Satisfaction (Featured Deliverables) ─────
  clientWork: {
    title:       'Client Learning & Resource Hub',
    client:      'Waseem Raza',
    clientRole:  'Tech Lead / US-Based Client',
    liveUrl:     'https://waseemraza844.github.io/portfolio/learning.html',
    period:      'Completed 2026',
    highlights: [
      'Engineered a responsive technical education portal with modular course paths and instant search navigation.',
      'Built clean, reusable frontend components optimized for fast loading and cross-device readability.',
      'Delivered clean code and cross-browser compatibility matching strict client specifications.',
    ],
    testimonial: {
      quote: 'Awais delivered a clean, fast, and well-structured site on time. Great communication and solid frontend execution.',
      author: 'Waseem Raza',
      title: 'Tech Lead / Client, USA',
    },
  },

  // ── Flagship Projects (4 High-Value Apps) ──────────────────
  projects: [
    {
      id:            'salesmatrix',
      categoryBadge: 'ENTERPRISE ANALYTICS & BI',
      title:         'SalesMatrix Studio',
      badge:         'Enterprise BI & AI',
      tags:          ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Supabase', 'Gemini API'],
      description:   'Enterprise business intelligence dashboard converting raw transaction data into executive P&L views, dynamic pivot tables, and AI-driven financial briefings.',
      live:          'https://sales-matrix-d6vfs6wuo-awais-mumtaz.vercel.app/',
      github:        'https://github.com/awaismumtaz1406/SalesMatrix',
    },
    {
      id:            'studysync-ai',
      categoryBadge: 'AI COPILOT & REASONING AGENT',
      title:         'StudySync AI',
      badge:         'Academic Copilot & Slide RAG',
      tags:          ['React', 'Node.js', 'Express', 'Supabase pgvector', 'Gemini API'],
      description:   'Bilingual (Roman Urdu/English) academic assistant featuring lecture slide RAG with vector search, automated task scheduling, and deadline alerts.',
      live:          'https://study-sync-ai-je9e.vercel.app/',
      github:        'https://github.com/awaismumtaz1406/StudySync-Ai',
    },
    {
      id:            'churn-prediction',
      categoryBadge: 'PREDICTIVE MACHINE LEARNING',
      title:         'Customer Churn Prediction System',
      badge:         'Machine Learning Analytics',
      tags:          ['Machine Learning', 'Python', 'React', 'Scikit-Learn', 'REST API', 'Vercel'],
      description:   'End-to-end predictive analytics web app assessing customer attrition risk using trained classification algorithms. Features interactive real-time parameter tuning, churn probability scoring, and key risk-factor visualizations.',
      live:          'https://customer-churn-prediction-system-4lmui69xf-awais-mumtaz.vercel.app/',
      github:        'https://github.com/awaismumtaz1406/customer-churn-prediction-System',
    },
    {
      id:            'gigfair',
      categoryBadge: 'WEB3 & DECENTRALIZED MARKETPLACE',
      title:         'GigFair',
      badge:         'Web3 & Freelance Escrow',
      summary:       'Decentralized & Transparent Freelance Gig Marketplace',
      tags:          ['React', 'Next.js / Node.js', 'Tailwind CSS', 'REST API', 'Smart Contracts / Web3', 'Vercel'],
      description:   'Modern freelance collaboration and dispute-resolution platform engineered for fair milestone escrow, transparent contract handling, and direct client-talent communication.',
      live:          'https://gig-fair-ashy.vercel.app/',
      github:        'https://github.com/awaismumtaz1406/gig-fair',
    },
  ],

  // ── Work Experience ────────────────────────────────────────
  experience: [
    {
      role:        'Software Quality Engineer Intern',
      company:     'Big Brains',
      period:      'Aug 2026 – Sep 2026 (1 Month) | Remote / Lahore',
      description: 'Designed and executed Alpha, Beta, and functional test suites across production web applications. Authored automated Selenium testing scripts.',
      certificate: 'assets/cert-bigbrains-sqa.png',
      recommendation: 'assets/recommendation-letter-bigbrains.png',
    },
    {
      role:        'Mobile App Testing Intern',
      company:     'CodeWingz',
      period:      'Jul 2026 – Aug 2026 (1 Month) | Lahore',
      description: 'Conducted manual mobile application testing, UI responsiveness audits, and usability test cases. Identified and logged critical functional bugs.',
      certificate: 'assets/cert-codewingz-testing.pdf',
    },
    {
      role:        'ChangeMakers Ambassador & Intern',
      company:     'DataCrumbs',
      period:      'May 2026 – Jul 2026 (3 Months) | Remote',
      description: 'Selected for the 3-Month ChangeMakers leadership and technical development track. Facilitated technical workshops and developer community projects.',
      certificate: 'assets/cert-datacrumbs.pdf',
    },
  ],

  // ── Campus Ambassadorship (Leadership) ──────────────────────
  leadership: {
    role:        'Devsinc Campus Ambassador (Devstranauts 3.0)',
    institution: 'University of Management and Technology (UMT), Lahore (2026 – 2027)',
    detail:      'Official campus ambassador bridging UMT student engineering talent with Devsinc industry programs, hackathons, and corporate recruitment initiatives.',
    image:       'assets/devsinc-ambassador.jpg',
  },

  // ── Education & Certifications ─────────────────────────────
  education: [
    {
      institution: 'University of Management and Technology (UMT), Lahore',
      degree:      'Bachelor of Science in Software Engineering',
      period:      '2024 – 2028 · In Progress',
      cgpa:        '3.5 / 4.0',
      coursework:  [
        'Data Structures & Algorithms',
        'Full-Stack Architectures',
        'Database Systems',
        'Machine Learning Applications',
        'Software Quality Assurance',
      ],
      keyFocus:    'AI Systems Engineering, Distributed Architectures & High-Performance Web Applications.',
      detail:      'Core coursework in algorithms, data structures, full-stack web architectures, database systems, and practical machine learning applications.',
    },
  ],

  certifications: [
    {
      id:     'XM6Z75V7J34J',
      title:  'AI for App Building',
      issuer: 'Google',
      date:   'Oct 2026',
      file:   'assets/google-cert-building.pdf',
    },
    {
      id:     'BO37C0OKD2CL',
      title:  'AI for App Deployment',
      issuer: 'Google',
      date:   'Oct 2026',
      file:   'assets/google-cert-deployment.pdf',
    },
    {
      id:     'Verified Google Credential',
      title:  'AI Fundamentals',
      issuer: 'Google',
      date:   '2026',
      file:   'assets/google-cert-ai-fundamentals.pdf',
    },
  ],
};
