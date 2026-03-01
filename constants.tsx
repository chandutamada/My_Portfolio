
import { SkillCategory, Project, EducationItem } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    ]
  },
  {
    title: 'Android',
    skills: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'XML', icon: 'https://www.svgrepo.com/show/374189/xml.svg' },
      { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    ]
  },
  {
    title: 'Others',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Netlify', icon: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
      { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Google AI Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'LMS for University',
    period: 'Mar 2024 - May 2024',
    description: 'A Comprehensive Learning Management System (LMS) designed for universities. The...',
    tags: ['HTML', 'CSS', 'MySQL', 'PHP', 'JavaScript'],
    category: 'web',
    image: 'https://picsum.photos/seed/lms/600/400',
    sourceLink: 'https://github.com/chandutamada/Ride-Ease'
  },
  {
    title: 'Database-Activity-Monitoring-and-Logging-System',
    period: 'Oct 2023 - Dec 2023',
    description: 'A robust monitoring and logging system for database activities, providing detailed reports and real-time alerts.',
    tags: ['JavaScript', 'HTML', 'CSS', 'SQL', 'VS Code'],
    category: 'web',
    image: 'https://adivi.com/wp-content/uploads/2024/06/06d248fa-e236-4cd1-85d3-8ef09395aaa6.png',
    sourceLink: 'https://github.com/chandutamada/Database-Activity-Monitoring-and-Logging-System'
  },
  {
    title: 'CureCart App',
    period: 'Feb 2024 - Apr 2024',
    description: 'A Cure Cart app leveraging Firebase and Dart for the One app for the online pharmacy.',
    tags: ['Flutter', 'Dart', 'Android Studio', 'Firebase'],
    category: 'android',
    image: 'https://st4.depositphotos.com/1051355/24606/i/450/depositphotos_246068038-stock-photo-different-blisters-capsules-tablets-medicine.jpg',
    sourceLink: 'https://github.com/chandutamada/Curecart'
  },
  {
    title: 'Online Voting System',
    period: 'Jun 2022',
    description: 'Online Voting is a web-based voting system that will help you manage your elections easily and...',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    category: 'web',
    image: 'https://electionbuddy.com/wp-content/uploads/2022/01/Voting-image-6-scaled.jpg',
    sourceLink: 'https://github.com/chandutamada/MY-VOTE'
  },
  {
    title: 'Expense Tracker App',
    period: 'Mar 2024',
    description: 'A mobile application for tracking daily expenses and managing personal finances, built with Flutter and Dart.',
    tags: ['Flutter', 'Dart', 'Android Studio'],
    category: 'android',
    image: 'https://www.guidingtech.com/wp-content/uploads/Best-Expense-Tracker-Apps-for-iPhone-and-Android.jpg',
    sourceLink: 'https://github.com/chandutamada/Expense-Tracker'
  },
  {
    title: 'Permanent-Shadowed-Regions-of-Lunar',
    period: 'Jun 2023',
    description: 'A study on the Permanently Shadowed Regions of the Moon, utilizing deep learning and QGIS to analyze lunar surface data.',
    tags: ['Python', 'QGIS', 'Machine Learning', 'Deep Learning'],
    category: 'ml',
    image: 'https://scx2.b-cdn.net/gfx/news/2023/the-darkest-parts-of-t-1.jpg',
    sourceLink: 'https://github.com/chandutamada/Permanent-Shadowed-Regions-of-Lunar-ISRO-'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Centurion University of Technology and Management, Vizianagaram',
    degree: 'Bachelor of Technology - BTech, Computer Science and Engineering',
    period: 'Oct 2021 - June 2025',
    grade: 'Grade: 8.54 CGPA',
    description: 'I am currently pursuing a Bachelor\'s degree in Computer Science and Engineering with specialization in Data Science at Centurion University of Technology and Management...',
    logo: 'https://image-upload.getmycollege.com/new-uploads/college/logo/centurion-university-logo-407.jpg'
  },
  {
    institution: 'Sri Chaitanya Junior College, Steel Plant, Visakhapatnam',
    degree: 'Intermediate, Mathematics, Physics and Chemistry',
    period: 'May 2019 - May 2021',
    grade: 'Grade: 91%',
    description: 'I completed intermediate at Sri Chaitanya Junior College, Steel Plant, Visakhapatnam, where I studied Mathematics, Physics and Chemistry.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrUiQI4iuzQl1oDcjsQ_tUm2VO900YHThvg&s'
  },
  {
    institution: 'Chalapathi Public School, Gajuwaka, Visakhapatnam',
    degree: 'SSC (X)',
    period: 'Apr 2019',
    grade: 'Grade: 9.8 CGPA',
    description: 'I completed my class 10 education at Chalapathi Public School, Gajuwaka, Visakhapatnam',
    logo: 'https://picsum.photos/seed/school/100/100'
  }
];
