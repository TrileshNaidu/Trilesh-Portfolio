import { Skill, Project, Education, Certification, ContactInfo, Experience } from '../types';

export const skills: { [key: string]: Skill[] } = {
  languages: [
    { name: 'JavaScript', category: 'Language', progress: 85 },
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
    { name: 'Docker', category: 'DevOps', progress: 70 },
  ]
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'GetItDone',
    description: 'Developed a platform linking clients with professionals based on specialization and ratings.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['Java', 'JDBC', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/TrileshNaidu',
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
    description: 'Designed a comprehensive data analytics dashboard using Tableau.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['Tableau Desktop', 'Tableau Prep', 'SQL', 'Data Analysis'],
    githubLink: 'https://github.com/TrileshNaidu',
    overview: 'Built a comprehensive Tableau dashboard for analyzing global salary trends, featuring interactive visualizations and detailed filtering options.',
    challenges: [
      'Ensuring accurate data cleaning and standardization.',
      'Integrating multiple data sources efficiently.',
      'Creating an intuitive interface for data exploration.'
    ],
    methodology: 'Used Tableau Prep for data cleaning and transformation, implemented advanced calculations in Tableau Desktop, and built interactive dashboards with dynamic filtering.',
    keyOutcomes: [
      'Enabled efficient salary analysis with 95% accuracy.',
      'Provided comprehensive filtering options for detailed insights.',
      'Achieved optimal performance with large datasets.'
    ]
  },
  {
    id: 3,
    title: 'Cricket Batting Performance Analysis',
    description: 'Built a classification system to evaluate cricket players\' batting performance.',
    image: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['R', 'KNN', 'Decision Tree', 'Naive Bayes', 'Linear Regression'],
    githubLink: 'https://github.com/TrileshNaidu',
    overview: 'Built a machine learning system for cricket performance analysis, featuring multiple classification models and comprehensive data visualization.',
    challenges: [
      'Ensuring accurate model selection and validation.',
      'Integrating multiple classification algorithms.',
      'Creating clear visualizations for complex metrics.'
    ],
    methodology: 'Used R for implementing machine learning algorithms, created comprehensive data preprocessing pipeline, and developed interactive visualizations for result analysis.',
    keyOutcomes: [
      'Enabled accurate performance prediction with 85% accuracy.',
      'Provided detailed insights through interactive visualizations.',
      'Achieved reliable analysis across diverse datasets.'
    ]
  },
  {
    id: 4,
    title: 'Number Guessing Game',
    description: 'Engineered an engaging number guessing challenge with error handling.',
    image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['Java'],
    githubLink: 'https://github.com/TrileshNaidu',
    overview: 'Built an interactive Java game with adaptive difficulty levels, featuring comprehensive error handling and progress tracking.',
    challenges: [
      'Ensuring robust error handling and validation.',
      'Integrating adaptive difficulty system.',
      'Creating an engaging user experience.'
    ],
    methodology: 'Used Java for core game logic, implemented comprehensive error handling, and built an adaptive scoring system with progress tracking.',
    keyOutcomes: [
      'Enabled smooth gameplay with 99.9% error handling.',
      'Provided engaging difficulty progression.',
      'Achieved positive user feedback and retention.'
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
    grade: 'CGPA: 7.3',
    logo: '/images/lpu logo.png'
  },
  {
    id: 2,
    degree: 'Intermediate (Science)',
    institution: 'Vidhya Vikas Junior College',
    location: 'Jangareddygudem, Andhra Pradesh',
    period: 'Mar 2020–May 2022',
    grade: 'Percentage: 74.3%',
    logo: '/images/Vidhya vikas logo.png'
  },
  {
    id: 3,
    degree: 'Matriculation',
    institution: 'Buds and Blossoms High School',
    location: 'Jangareddygudem, Andhra Pradesh',
    period: 'Mar 2019–May 2020',
    grade: 'Percentage: 92%',
    logo: '/images/Buds and Blossoms logo.png'
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
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verificationLink: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01384793829265408056164_shared/1-92a860ed-7955-4777-9a69-99c2e467516f.pdf"
  },
  {
    id: 2,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Oct 2024",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verificationLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S95690025604364961.pdf"
  },
  {
    id: 3,
    title: "Data Analysis with Tableau",
    issuer: "Coursera",
    date: "Dec 2024",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verificationLink: "https://www.coursera.org/account/accomplishments/verify/5OE9DK5M684W"
  },
  {
    id: 4,
    title: "Supervised Machine Learning",
    issuer: "Coursera",
    date: "Dec 2024",
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verificationLink: "https://www.coursera.org/account/accomplishments/verify/7FD14AMDYBPJ"
  },
  {
    id: 5,
    title: "Data Structures and Algorithms using C++",
    issuer: "Lovely Professional University",
    date: "Jun 2024",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
  image: '/images/profile.jpg',
  generalCV: 'https://drive.google.com/file/d/17_K2PYMnzfVsjWCH6xfXV4u5YJaV22Ov/view?usp=sharing',
  specializedCV: 'https://drive.google.com/file/d/15TNJKsJjmWda9vrrBtloskHx2CRJx38n/view?usp=sharing'
};

export const aboutContent = {
  description: 'I am a Computer Science and Engineering student passionate about data science and software development. Beyond coding, I\'m a problem solver who believes in the power of technology to make a difference. My academic journey has equipped me with strong analytical skills and a deep understanding of data science principles. I enjoy taking on complex challenges and turning them into elegant, user-friendly solutions. I aim to solve complex problems and drive innovation in technology.'
};