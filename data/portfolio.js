// ============================================================
// data/portfolio.js  —  THE ONLY FILE YOU NEED TO EDIT
// Change your name, bio, skills, projects here.
// The site rebuilds itself automatically from this data.
// ============================================================

const PORTFOLIO = {

  // Path to your resume PDF — place the file at assets/resume.pdf
  resumeUrl: 'assets/resume.pdf',

  // ── Personal Info ──────────────────────────────────────────
  personal: {
    name:    'Awais Mumtaz',
    role:    'Python · C++ · Web Development · Databases',
    tagline: 'Building impactful software through logic, code & curiosity.',
    bio:     'BS Software Engineering student specialising in C++ (OOP & DSA), Python, and frontend development. I focus on logic building, academic software projects, and responsive web applications. Currently mastering Data Structures, DBMS, and React — while expanding into Python for AI and machine learning. Open to collaborations that bridge solid engineering with real-world impact.',
    avatar:  'assets/malikawais.png',

    contact: {
      email:    'awaismumtaz1406@gmail.com',
      phone:    '+92 328 8421580',
      location: 'Pakistan',
    },

    socials: [
      { label: 'GitHub',   url: 'https://github.com/awaismumtaz1406'           },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/awais-mumtaz-181a602a8' },
      { label: 'Facebook', url: 'https://facebook.com/malik.awais.ghallu.2025'  },
    ],
  },

  // ── Skills ────────────────────────────────────────────────
  // level: 1 = Beginner  2 = Intermediate  3 = Advanced  4 = Expert
  skills: [
    {
      category: 'Languages',
      items: [
        { name: 'Python',      level: 3, icon: '🐍' },
        { name: 'C++',         level: 3, icon: '⚙️' },
        { name: 'C',           level: 2, icon: '🔵' },
        { name: 'Java',        level: 2, icon: '☕' },
        { name: 'JavaScript',  level: 2, icon: '⚡' },
      ],
    },
    {
      category: 'Web & Frameworks',
      items: [
        { name: 'HTML5',     level: 3, icon: '🌐' },
        { name: 'CSS3',      level: 3, icon: '🎨' },
        { name: 'Bootstrap', level: 2, icon: '🅱️' },
        { name: 'Flask',     level: 2, icon: '🌶️' },
        { name: 'React',     level: 1, icon: '⚛️' },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL',      level: 2, icon: '🗄️' },
        { name: 'SQL Server', level: 2, icon: '💾' },
        { name: 'SQLite',     level: 2, icon: '📦' },
      ],
    },
    {
      category: 'Tools & IDEs',
      items: [
        { name: 'Git',           level: 2, icon: '🔀' },
        { name: 'VS Code',       level: 3, icon: '📝' },
        { name: 'IntelliJ IDEA', level: 2, icon: '🧠' },
        { name: 'Tkinter',       level: 3, icon: '🖥️' },
        { name: 'Java Swing',    level: 2, icon: '🪟' },
        { name: 'SSMS',          level: 2, icon: '🔧' },
      ],
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      id:          'fitness-app',
      title:       'Fitness Tracker App',
      period:      'Nov 2025 – Dec 2025',
      description: 'Desktop application that calculates BMI, daily calorie needs, and tracks health metrics across sessions. Features a multi-screen Tkinter GUI, session management, and full MySQL persistence.',
      stack:       ['Python', 'Tkinter', 'MySQL', 'SQLite'],
      highlights:  [
        'BMI & calorie calculator with user profiles',
        'Session-based tracking across multiple screens',
        'MySQL database integration with schema design',
      ],
      github:   'https://github.com/awaismumtaz1406/Python.git',
      live:     '',        // leave empty to hide Live Demo button
      image:    '',        // e.g. 'assets/projects/fitness-app.png'
      tags:     ['Desktop', 'Health', 'Python'],
      featured: true,      // shows as large 2-column card at top
    },
    {
      id:          'news-dashboard',
      title:       'Live News Dashboard',
      period:      'Jul 2025 – Aug 2025',
      description: 'Real-time tech news dashboard consuming the News API. Card-based layout with category filtering and auto-refresh.',
      stack:       ['HTML', 'CSS', 'JavaScript', 'News API'],
      highlights:  [],
      github:      'https://github.com/awaismumtaz1406/Webprojects.git',
      live:        '',
      image:       '',
      tags:        ['Web', 'API'],
      featured:    false,
    },
    {
      id:          'weather-dashboard',
      title:       'Weather Dashboard',
      period:      'Jul 2025 – Aug 2025',
      description: 'City-search weather app showing temperature, humidity, wind speed, and 5-day forecast using the OpenWeather API.',
      stack:       ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      highlights:  [],
      github:      'https://github.com/awaismumtaz1406/Webprojects.git',
      live:        '',
      image:       '',
      tags:        ['Web', 'API'],
      featured:    false,
    },
    {
      id:          'currency-converter',
      title:       'Live Currency Converter',
      period:      'Jul 2025 – Aug 2025',
      description: 'Real-time currency converter supporting 150+ currencies via a live exchange-rate API with instant conversion and clean UI.',
      stack:       ['HTML', 'CSS', 'JavaScript', 'Exchange Rate API'],
      highlights:  [],
      github:      'https://github.com/awaismumtaz1406/Webprojects.git',
      live:        '',
      image:       '',
      tags:        ['Web', 'Finance'],
      featured:    false,
    },

    // ── ADD NEW PROJECTS HERE ────────────────────────────────
    // {
    //   id:       'my-project',
    //   title:    'My New Project',
    //   period:   'Jan 2026 – Feb 2026',
    //   description: 'What it does.',
    //   stack:    ['React', 'Node.js', 'MongoDB'],
    //   highlights: ['Key feature 1', 'Key feature 2'],
    //   github:   'https://github.com/...',
    //   live:     'https://my-live-site.com',
    //   image:    'assets/projects/my-project.png',
    //   tags:     ['Full Stack', 'Web'],
    //   featured: false,
    // },
  ],

  // ── Services ──────────────────────────────────────────────
  services: [
    {
      icon:  '🐍',
      title: 'Python Desktop Applications',
      items: [
        'GUI apps with Python & Tkinter',
        'Fitness, medical & management systems',
        'BMI, calorie & health metric calculations',
        'Session-based data handling & user tracking',
        'MySQL / SQLite database integration',
        'REST API development & integration',
        'Role-based authentication & access control',
      ],
    },
    {
      icon:  '🌐',
      title: 'Full-Stack Web Development',
      items: [
        'Responsive frontends: HTML, CSS, JavaScript',
        'Backend: Flask / Django / Node.js',
        'End-to-end web application development',
        'Database design & optimisation',
        'REST API development & integration',
        'User authentication & session management',
        'Admin dashboards & analytics panels',
        'Deployment & hosting setup',
        'On-page SEO',
      ],
    },
  ],
};
