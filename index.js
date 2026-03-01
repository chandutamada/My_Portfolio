
// --- Data ---
const SKILL_CATEGORIES = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
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
            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        ]
    },
    {
        title: 'Android',
        skills: [
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
            { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
        ]
    },
    {
        title: 'Others',
        skills: [
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'Google AI Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
        ]
    }
];

const PROJECTS = [
    {
        title: 'EV Rental App',
        period: 'Mar 2024 - May 2024',
        description: 'A Comprehensive Learning Management System (LMS) designed for universities. Featuring student dashboards, course management, and grading systems.',
        tags: ['Kotlin', 'Node JS', 'MySQL', 'Android Studio', 'Java'],
        category: 'web',
        image: 'https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/Electric_Vehicles_Banner_Desktop-692f8d1d96466e69a219f621e1bb468ff9495cbcda7ff767a3085ce59871d2a8.webp',
        sourceCode: 'https://github.com/chandutamada/Ride-Ease'
    },
    {
        title: 'Database-Activity-Monitoring-and-Logging-System',
        period: 'Oct 2023 - Dec 2023',
        description: 'A comprehensive system designed to track, monitor, and log database activities in real-time, ensuring security and compliance.',
        tags: ['JavaScript', 'HTML', 'CSS', 'SQL', 'VS Code'],
        category: 'web',
        image: 'https://adivi.com/wp-content/uploads/2024/06/06d248fa-e236-4cd1-85d3-8ef09395aaa6.png',
        sourceCode: 'https://github.com/chandutamada/Database-Activity-Monitoring-and-Logging-System'
    },
    {
        title: 'CureCart App',
        period: 'Feb 2024 - Apr 2024',
        description: 'A comprehensive online pharmacy application built with Flutter and Firebase, providing a seamless experience for ordering medicines.',
        tags: ['Flutter', 'Dart', 'Android Studio', 'Firebase'],
        category: 'android',
        image: 'https://st4.depositphotos.com/1051355/24606/i/450/depositphotos_246068038-stock-photo-different-blisters-capsules-tablets-medicine.jpg',
        sourceCode: 'https://github.com/chandutamada/Curecart'
    },
    {
        title: 'Online Voting System',
        period: 'Jun 2022',
        description: 'A web-based voting system that ensures secure and transparent elections using PHP and MySQL.',
        tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
        category: 'web',
        image: 'https://electionbuddy.com/wp-content/uploads/2022/01/Voting-image-6-scaled.jpg',
        sourceCode: 'https://github.com/chandutamada/MY-VOTE'
    },
    {
        title: 'Expense Tracker App',
        period: 'Mar 2024',
        description: 'A mobile application for tracking daily expenses and managing personal finances, built with Flutter for a smooth user experience.',
        tags: ['Flutter', 'Dart', 'Android Studio'],
        category: 'android',
        image: 'https://www.guidingtech.com/wp-content/uploads/Best-Expense-Tracker-Apps-for-iPhone-and-Android.jpg',
        sourceCode: 'https://github.com/chandutamada/Expense-Tracker'
    },
    {
        title: 'Permanent-Shadowed-Regions-of-Lunar',
        period: 'Jun 2023',
        description: 'Analyzing Permanently Shadowed Regions (PSR) of the Moon using deep learning techniques and QGIS for mapping potentially water-ice-rich areas.',
        tags: ['Python', 'QGIS', 'Machine Learning', 'Deep Learning'],
        category: 'ml',
        image: 'https://scx2.b-cdn.net/gfx/news/2023/the-darkest-parts-of-t-1.jpg',
        sourceCode: 'https://github.com/chandutamada/Permanent-Shadowed-Regions-of-Lunar-ISRO-'
    }
];

const EDUCATION_DATA = [
    {
        institution: 'Centurion University of Technology and Management',
        degree: 'BTech in Computer Science and Engineering',
        period: 'Oct 2021 - June 2026',
        grade: 'Grade: 8.54 CGPA',
        description: 'I am currently pursuing a Bachelor\'s degree in CSE with specialization in Data Science. I have maintained a strong academic record and participated in various technical societies.',
        logo: 'https://image-upload.getmycollege.com/new-uploads/college/logo/centurion-university-logo-407.jpg'
    },
    {
        institution: 'Sri Chaitanya Junior College, Visakhapatnam',
        degree: 'Intermediate, Mathematics, Physics and Chemistry',
        period: 'May 2019 - May 2021',
        grade: 'Grade: 76%',
        description: 'Completed my senior secondary education with focus on STEM subjects, achieving high distinction in state board examinations.',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrUiQI4iuzQl1oDcjsQ_tUm2VO900YHThvg&s'
    },
    {
        institution: 'Kendriya Vidyalaya No.2, Visakhapatnam',
        degree: 'CBSE (Class X)',
        period: 'Apr 2019',
        grade: 'Grade: 79%',
        description: 'Graduated class 10 with nearly perfect scores, demonstrating excellence in both academics and extracurricular activities.',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLR1im89L8immmOPH5_pU_E7h_gfZc4XKC-Q&s'
    }
];

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initStars();
    initTyping();
    renderSkills();
    renderProjects('all');
    renderEducation();
    initScrollReveal();
    initMenu();
    initForm();
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.innerText = new Date().getFullYear().toString();

    // Project Filter Listeners
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active', 'bg-purple-600', 'text-white'));
            filterBtns.forEach(b => b.classList.add('text-purple-400', 'border-purple-500'));
            btn.classList.add('active', 'bg-purple-600', 'text-white');
            btn.classList.remove('text-purple-400', 'border-purple-500');

            const filter = (e.currentTarget).dataset.filter || 'all';
            renderProjects(filter);
        });
    });
});

// --- Logic ---
function initStars() {
    const container = document.getElementById('star-container');
    if (!container) return;
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
        container.appendChild(star);
    }
}

function initTyping() {
    const roles = ['UI/UX Designer', 'Data Analyst', 'Full Stack Developer', 'Android Developer'];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const target = document.getElementById('typing-text');
    if (!target) return;

    function type() {
        const currentRole = roles[roleIdx];
        if (isDeleting) {
            target.innerText = currentRole.substring(0, charIdx - 1);
            charIdx--;
        } else {
            target.innerText = currentRole.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 75 : 150;
        if (!isDeleting && charIdx === currentRole.length) {
            speed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            speed = 500;
        }
        setTimeout(type, speed);
    }
    type();
}

function renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;
    grid.innerHTML = SKILL_CATEGORIES.map(cat => `
    <div class="glass-card rounded-3xl p-8 reveal">
      <h3 class="text-2xl font-bold text-center mb-8 text-gray-200">${cat.title}</h3>
      <div class="flex flex-wrap justify-center gap-4">
        ${cat.skills.map(skill => `
          <div class="flex items-center gap-2 px-4 py-2 bg-[#030014] border border-gray-700/50 rounded-xl hover:bg-purple-900/20 transition-all group">
            <img src="${skill.icon}" alt="${skill.name}" class="w-5 h-5 group-hover:scale-110 transition-transform">
            <span class="text-gray-300 text-sm font-medium">${skill.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects(filter) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(proj => `
    <div class="group glass-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col reveal">
      <div class="relative h-48 overflow-hidden">
        <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all"></div>
      </div>
      <div class="p-6 flex flex-col flex-1">
        <div class="flex flex-wrap gap-2 mb-4">
          ${proj.tags.map(tag => `<span class="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-purple-900/30 text-purple-400 border border-purple-500/20">${tag}</span>`).join('')}
        </div>
        <h3 class="text-xl font-bold mb-1 text-white group-hover:text-purple-400 transition-colors">${proj.title}</h3>
        <p class="text-xs text-gray-500 mb-3 font-medium uppercase tracking-widest">${proj.period}</p>
        <p class="text-gray-400 text-sm line-clamp-3 mb-6">${proj.description}</p>
        <a href="${proj.sourceCode}" target="_blank" class="mt-auto text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors">Source Code &rarr;</a>
      </div>
    </div>
  `).join('');
    initScrollReveal();
}

function renderEducation() {
    const list = document.getElementById('education-list');
    if (!list) return;
    list.innerHTML = EDUCATION_DATA.map((item, idx) => {
        const isEven = idx % 2 === 0;
        return `
      <div class="relative flex flex-col lg:flex-row items-start ${isEven ? 'lg:flex-row-reverse' : ''}">
        <!-- Timeline Dot with reveal-scale -->
        <div class="absolute left-4 lg:left-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-[#030014] -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(147,51,234,0.5)] reveal-scale"></div>
        
        <!-- Large screen Date with reveal -->
        <div class="hidden lg:block lg:w-1/2 ${isEven ? 'text-left pl-12' : 'text-right pr-12'} py-8 reveal">
          <span class="text-gray-400 font-medium text-lg">${item.period}</span>
        </div>

        <!-- Card with reveal-left or reveal-right -->
        <div class="lg:w-1/2 pl-12 lg:pl-0 ${isEven ? 'reveal-left' : 'reveal-right'}">
          <div class="glass-card p-8 rounded-3xl transition-all duration-300 group hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]">
            <div class="flex items-center gap-4 mb-4">
              <img src="${item.logo}" alt="logo" class="w-12 h-12 rounded-xl object-contain bg-white p-1 group-hover:scale-110 transition-transform">
              <div>
                <h3 class="text-lg font-bold text-white leading-tight">${item.institution}</h3>
                <p class="text-xs text-gray-400 mt-1 lg:hidden">${item.period}</p>
              </div>
            </div>
            <h4 class="text-purple-400 font-semibold mb-2">${item.degree}</h4>
            <p class="text-sm font-bold text-gray-500 mb-3">${item.grade}</p>
            <p class="text-sm text-gray-400 leading-relaxed">${item.description}</p>
          </div>
        </div>
      </div>
    `;
    }).join('');
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach(el => observer.observe(el));
}

function initMenu() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
    // Close menu on link click
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.add('hidden'));
    });
}

function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message Sent Successfully!');
        form.reset();
    });
}
