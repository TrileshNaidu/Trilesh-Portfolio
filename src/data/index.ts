import { Skill, Project, Education, Certification, ContactInfo, Experience } from '../types';

export const skills: { [key: string]: Skill[] } = {
  languages: [
    { name: 'JavaScript', category: 'Language', progress: 85 },
    { name: 'TypeScript', category: 'Language', progress: 80 },
    { name: 'Python', category: 'Language', progress: 85 },
    { name: 'Java', category: 'Language', progress: 90 },
    { name: 'C++', category: 'Language', progress: 75 },
    { name: 'SQL', category: 'Language', progress: 80 },
    { name: 'HTML', category: 'Language', progress: 95 },
    { name: 'CSS', category: 'Language', progress: 90 },
  ],
  frameworks: [
    { name: 'React', category: 'Framework', progress: 85 },
    { name: 'Spring Boot', category: 'Framework', progress: 80 },
    { name: 'Maven', category: 'Framework', progress: 75 },
    { name: 'Bootstrap', category: 'Framework', progress: 85 },
  ],
  tools: [
    { name: 'MySQL', category: 'Database', progress: 80 },
    { name: 'Tableau Desktop', category: 'Data Visualization', progress: 85 },
    { name: 'Tableau Prep', category: 'Data Preparation', progress: 80 },
    { name: 'Advanced Excel', category: 'Data Analysis', progress: 85 },
    { name: 'Git', category: 'Version Control', progress: 85 },
    { name: 'GitHub', category: 'Version Control', progress: 85 },
    { name: 'VS Code', category: 'IDE', progress: 90 },
    { name: 'Postman', category: 'API Tool', progress: 80 },
    { name: 'Docker', category: 'DevOps', progress: 70 },
    { name: 'Webpack', category: 'Build Tool', progress: 75 },
  ]
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'GetItDone',
    description: 'Developed a platform linking clients with professionals based on specialization and ratings.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['Java', 'JDBC', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/TrileshNaidu/getitdone',
    overview: 'Built GetItDone, a web platform to connect clients with professionals, featuring secure user authentication and payment options.',
    challenges: [
      'Ensuring secure user authentication and data validation.',
      'Integrating online and offline payment systems.',
      'Creating a responsive frontend for seamless user interaction.'
    ],
    methodology: 'Used JDBC and SQL for backend database management, implemented secure signup with validation, and built a responsive frontend with HTML, CSS, and JavaScript.',
    keyOutcomes: [
      'Enabled secure user access and transactions with 100% validation accuracy.',
      'Provided flexible payment options, improving user convenience.',
      'Achieved a responsive design compatible across devices.'
    ]
  },
  {
    id: 2,
    title: 'Data Science Salaries Dashboard',
    description: 'Designed a comprehensive data analytics dashboard using Tableau to analyze global compensation trends for data professionals, featuring interactive visualizations and detailed insights.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['Tableau Desktop', 'Tableau Prep', 'SQL', 'Data Analysis'],
    githubLink: 'https://github.com/TrileshNaidu/data-science-salaries',
    overview: 'Created an advanced analytics dashboard using Tableau Desktop and Prep to evaluate salary trends across different roles, experience levels, and locations. The project features interactive visualizations, detailed filtering capabilities, and comprehensive data preparation workflows.',
    challenges: [
      'Data cleaning and standardization across multiple sources using Tableau Prep',
      'Creating complex calculated fields for advanced analytics in Tableau Desktop',
      'Implementing interactive filters and parameters for dynamic data exploration',
      'Designing intuitive visualizations for complex salary distributions',
      'Optimizing dashboard performance with large datasets'
    ],
    methodology: 'Utilized Tableau Prep for data cleaning, joining, and transformation workflows. Leveraged Tableau Desktop for creating interactive dashboards with custom calculations, parameters, and advanced visualizations. Implemented SQL for initial data extraction and aggregation.',
    keyOutcomes: [
      'Built an automated data preparation workflow in Tableau Prep reducing manual processing time by 70%',
      'Created 10+ interactive visualizations including heat maps, scatter plots, and dynamic bar charts',
      'Implemented advanced filtering capabilities allowing users to analyze trends by role, location, and experience level',
      'Designed custom calculations for salary normalization across different currencies and regions',
      'Achieved fast dashboard performance through optimized data structure and efficient calculations'
    ]
  },
  {
    id: 3,
    title: 'Cricket Batting Performance Analysis',
    description: 'Built a classification system to evaluate cricket players\' batting performance.',
    image: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['R', 'KNN', 'Decision Tree', 'Naive Bayes', 'Linear Regression'],
    githubLink: 'https://github.com/TrileshNaidu/cricket-analysis',
    overview: 'Developed a system to analyze cricket players\' scoring patterns and efficiency using statistical models and machine learning.',
    challenges: [
      'Selecting appropriate machine learning algorithms for performance analysis.',
      'Visualizing complex performance data clearly.',
      'Ensuring model accuracy across diverse player profiles.'
    ],
    methodology: 'Applied KNN, Decision Tree, Naive Bayes, and Linear Regression in R, visualized insights using graphical representations.',
    keyOutcomes: [
      'Achieved accurate player performance classification with clear insights.',
      'Enabled better understanding of player strengths through visualizations.',
      'Improved analysis reliability across varied datasets.'
    ]
  },
  {
    id: 4,
    title: 'Number Guessing Game',
    description: 'Engineered an engaging number guessing challenge with error handling.',
    image: 'https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['Java'],
    githubLink: 'https://github.com/TrileshNaidu/number-guessing-game',
    overview: 'Created a Java-based game where players guess a hidden number with step-by-step guidance and attempt tracking.',
    challenges: [
      'Implementing effective error-handling for invalid inputs.',
      'Designing an intuitive user interface for guidance.',
      'Balancing game difficulty with user engagement.'
    ],
    methodology: 'Developed logic for number generation, user input processing, and error management in Java, with a clear attempt-based progression system.',
    keyOutcomes: [
      'Ensured smooth gameplay with robust error handling.',
      'Improved user engagement with clear directional hints.',
      'Achieved a balanced and interactive game experience.'
    ]
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Lovely Professional University',
    location: 'Punjab',
    period: 'Aug 2022–Present',
    grade: 'CGPA: 7.13',
    logo: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    degree: 'Intermediate (Science)',
    institution: 'Vidhya Vikas Junior College',
    location: 'Jangareddygudem, Andhra Pradesh',
    period: 'Mar 2020–May 2022',
    grade: 'Percentage: 74.3%',
    logo: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    degree: 'Matriculation',
    institution: 'Buds and Blossoms High School',
    location: 'Jangareddygudem, Andhra Pradesh',
    period: 'Mar 2019–May 2020',
    grade: 'Percentage: 92%',
    logo: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "Data Annotator",
    company: "Outlier AI",
    location: "Remote",
    period: "Nov 2024–Jan 2025",
    description: "Reviewed user responses, crafted high-quality prompts for math coding tasks, and developed evaluation frameworks, improving AI solution accuracy by 20% and reliability by 25%.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    companyLogo: "https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg"
  },
  {
    id: 2,
    role: "Agricultural Innovation Coordinator",
    company: "AgriTech Initiative",
    location: "Andhra Pradesh",
    period: "Jun 2023–Jul 2023",
    description: "Led a team of 20+ members to promote sustainable agriculture through modern technologies, organized workshops, and partnered with NGOs to support farmers.",
    technologies: ["Project Management", "Team Leadership", "Sustainable Agriculture"],
    companyLogo: "https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Oracle SQL - A Comprehensive Course",
    issuer: "Infosys Springboard",
    date: "Apr 2025",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
    verificationLink: "https://infosys.com/verify"
  },
  {
    id: 2,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Oct 2024",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
    verificationLink: "https://nptel.ac.in/verify"
  },
  {
    id: 3,
    title: "Data Analysis with Tableau",
    issuer: "Coursera",
    date: "Dec 2024",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    verificationLink: "https://coursera.org/verify"
  },
  {
    id: 4,
    title: "Supervised Machine Learning",
    issuer: "Coursera",
    date: "Dec 2024",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    verificationLink: "https://coursera.org/verify"
  },
  {
    id: 5,
    title: "Data Structures and Algorithms using C++",
    issuer: "Lovely Professional University",
    date: "Jun 2024",
    image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg",
    verificationLink: "https://lpu.in/verify"
  }
];

export const contactInfo: ContactInfo = {
  email: 'trileshnaidukatreddy@gmail.com',
  phone: '+91 9492973470',
  github: 'https://github.com/TrileshNaidu',
  linkedin: 'https://www.linkedin.com/in/trilesh-pavan-/'
};

export const aboutMe = {
  name: 'Trilesh Pavan Katreddy',
  title: 'Aspiring Data Scientist & Software Developer',
  description: 'Hi, I\'m Trilesh Pavan Katreddy, a Computer Science and Engineering student passionate about data science and software development. I specialize in building robust applications and insightful data visualizations. With expertise in Java, Python, SQL, Tableau, and machine learning, I aim to solve complex problems and drive innovation in technology.',
  image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  generalCV: 'https://drive.google.com/file/d/17_K2PYMnzfVsjWCH6xfXV4u5YJaV22Ov/view?usp=sharing',
  specializedCV: 'https://drive.google.com/file/d/15TNJKsJjmWda9vrrBtloskHx2CRJx38n/view?usp=sharing'
};