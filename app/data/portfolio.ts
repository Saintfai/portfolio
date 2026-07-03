export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  fullDescription: string;
  year: string;
  tags: string[];
  githubUrl: string;
  inProgress?: boolean;
  progress?: number;
}

export const portfolioData = {
  profile: {
    heroName: "The Heavy Ink",
    role: "Developer",
    description: "Building aggressive, high-contrast web experiences that break the grid and command attention.",
    alias: "Fairuz Sheva",
    University: "Politeknik Negeri Bandung",
    skills: ["Flutter", "React", "Next.js", "Figma"],
    roles: [
      "Mobile Developer",
      "System Analyst",
      "UI/UX Designer",
      "Web Developer",
    ],
    bio: [
      "I am a Computer Science student and Software Developer with a versatile interest in building and analyzing digital systems. My expertise spans Mobile Development (Flutter) and Web Development, where I focus on creating seamless, high-performance applications from the front to the backend.",
      "Beyond writing code, I have a strong passion for System Analysis. I enjoy the process of auditing requirements, designing domain models, and applying GRASP patterns to ensure every project is built on a solid, scalable architecture.",
      "With great power comes great responsibility. The responsibility to ensure perfect lighthouse scores, seamless animations, and accessibility for all citizens of the web."
    ]
  },
  projects: [
    {
      id: "5",
      title: "Space Invader",
      image: "",
      description: "A 2D arcade game where players control a spaceship to destroy incoming waves of alien enemies while managing resources and power-ups.",
      fullDescription: "Space Invaders is a desktop-based 2D arcade game that features progressive wave scaling mechanics, multiple enemy difficulty profiles, ammunition constraints, structural health tracking, randomized power-up supply spawns, responsive collision bounding blocks, an interactive soundscape engine, and a file-persistent dynamic leaderboard system.",
      year: "2025",
      tags: ["C", "SDL3", "SDL3_ttf", "SDL3_mixer", "MinGw", "Make"],
      githubUrl: "https://github.com/ihsan-ramadhan/space-invaders"
    },
    {
      id: "2",
      title: "Auto Notification Attendance",
      image: "",
      description: "An automated web scraper and notification bot built in Python to monitor and report academic attendance changes.",
      fullDescription: "An automation utility designed to continuously poll or manually check academic portal session histories. It logs into academic portals via HTTP requests, screens HTML structures using BeautifulSoup to calculate real-time percentage differentials, maintains localized cache snapshots to detect structural data deviations, and streams updates immediately over instant messaging channels.",
      year: "2026",
      tags: ["Python", "Requests", "BeautifulSoup", "Github Actions"],
      githubUrl: "https://github.com/Saintfai/Project-Auto-Notification-Attendance"
    },
    {
      id: "3",
      title: "Kegiatin",
      image: "/Kegiatin.png",
      description: "Offline-first event management app for PD Pemuda Persis Kab. Bandung.",
      fullDescription: "An offline-first event management application designed to digitalize event administration, resolve attendance tracking issues in areas with poor internet connection (blank spots), provide a systematic central repository for event materials, and integrate structured validation for official organization memberships.",
      year: "2026",
      tags: ["Flutter", "Riverpod", "PostgreSQL", "GoRouter", "NestJS", "Hive CE"],
      githubUrl: "https://github.com/ikhsan3adi/kegiatin"
    },
    {
      id: "4",
      title: "TTDJ",
      image: "/TTDJ.png",
      description: "Web application framework based on Laravel featuring an expressive, elegant syntax.",
      fullDescription: "A digital signature application built on top of the Laravel framework that streamlines web development overheads by utilizing standard routing mechanisms, robust dependency injection containers, intuitive database ORM, background queues, and customizable schema migrations.",
      year: "2026",
      tags: ["PHP", "Laravel", "PostgreSQL"],
      githubUrl: "https://github.com/Saintfai/Project-Aplikasi-Penandatanganan-Digital"
    },
    {
      id: "1",
      title: "GastroLog",
      image: "",
      description: "A smart journal web application specifically designed for GERD and acid reflux sufferers.",
      fullDescription: "GastroLog is a smart journal web application specifically designed for GERD (Gastroesophageal Reflux Disease) and acid reflux sufferers. It provides a comprehensive platform to track daily food and symptom intake, helping users understand their triggers and manage their condition more effectively. The app features an intuitive interface for logging meals, noting symptom severity, and reviewing historical data to identify patterns between food consumption and physical reactions.",
      year: "2026",
      tags: ["Nextjs", "Tailwind", "PostgreSql", "Prisma 5", "Typescript", "Shadcn UI"],
      githubUrl: "https://github.com/Saintfai/Project-GastroLog",
      inProgress: true,
      progress: 78
    },
    {
      id: "6",
      title: "Plasma Farmacy",
      image: "/PlasmaFarmacy.png",
      description: "Plasma Farmasi is a web-based real-time queue app that shows patient call status on hospital TV screens, complete with a management dashboard for admins and counter staff.",
      fullDescription: "Pharma Plasma is a digital solution for hospital queues that focuses on managing and making patient calls transparent in the pharmacy and clinic areas. This app solves the confusion of waiting in line by showing real-time queue data directly on TV screens (Plasma Monitors), so patients can keep track of their queue numbers without constantly asking the staff.",
      year: "2026",
      tags: ["React", "Supabase", "Tailwind"],
      githubUrl: "",
      inProgress: true,
      progress: 25
    }
  ] as Project[],
  contacts: {
    email: "shevafairuz10@gmail.com",
    github: "@Saintfai",
    Linkedin: "https://www.linkedin.com/in/fairuz-sheva-muhammad-61446b386/",
    instagram: "@saintfai_",
  },
  techStack: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "#02569B" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", color: "#0175C2" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
  ],
  techStackRow2: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", color: "#FF2D20" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", color: "#E0234E" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777BB4" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#A8B9CC" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
  ]
};
