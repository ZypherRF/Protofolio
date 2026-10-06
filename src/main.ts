import './style.css';

// Interface for modal project payload
interface ProjectData {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  externalUrl?: string;
  socialLabel?: string;
}

const projectsData: Record<string, ProjectData> = {
  robotics: {
    id: 'robotics',
    title: 'Robotics & Hardware Engineering',
    category: 'Engineering & Robotics',
    badge: '🤖 Robotics',
    image: '/src/assets/robotics.png',
    description: 'Active member of the school robotics extracurricular team, focusing on building, wiring, and programming autonomous and remote-controlled robotic hardware.',
    highlights: [
      'Designed and assembled chassis, sensor arrays, and motor controllers.',
      'Programmed logic using Arduino microcontrollers and Python scripts.',
      'Configured infrared, ultrasonic sensors, and PWM motor drivers for precision movement.',
      'Worked in collaborative team environments under competition pressure.'
    ],
    tags: ['Arduino', 'C/C++', 'Python', 'Electronics', 'Sensor Fusion', 'Robotics'],
    githubUrl: 'https://github.com/ZypherRF?',
    socialLabel: 'GitHub Projects'
  },
  video: {
    id: 'video',
    title: 'Video Editing & Creative Storytelling',
    category: 'Creative Media',
    badge: '🎬 Video Editing',
    image: '/src/assets/edit.png',
    description: 'Creating high-impact video content across short-form and long-form formats using professional tools like DaVinci Resolve and CapCut.',
    highlights: [
      'Crafted dynamic visual narratives with precise pacing, cuts, and transitions.',
      'Applied custom color grading and audio equalization for professional finish.',
      'Optimized content formats specifically tailored for TikTok, Reels, and YouTube.',
      'Managed end-to-end production workflow from footage selection to final export.'
    ],
    tags: ['DaVinci Resolve', 'CapCut', 'Color Grading', 'Audio Mastering', 'Storyboarding', 'Shorts/Reels'],
    externalUrl: 'https://www.tiktok.com/@zypher_rf?_r=1&_t=ZS-98cJCpbpOr7',
    socialLabel: 'Watch on TikTok'
  },
  coding: {
    id: 'coding',
    title: 'Full-Stack Web & Automation Development',
    category: 'Software Engineering',
    badge: '💻 Software',
    image: '/src/assets/code.png',
    description: 'Developing clean web applications and automated utility tools using PHP, Python, JavaScript/TypeScript, and modern UI frameworks.',
    highlights: [
      'Built responsive web interfaces styled with modern CSS & Tailwind CSS.',
      'Engineered backend logic and database connections in PHP.',
      'Created automation and data scripts in Python to streamline workflow tasks.',
      'Maintained version control and project repositories on GitHub.'
    ],
    tags: ['PHP', 'Python', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git', 'REST APIs'],
    githubUrl: 'https://github.com/ZypherRF?',
    socialLabel: 'View GitHub Repos'
  },
  business: {
    id: 'business',
    title: 'E-Commerce & Digital Business Ventures',
    category: 'Entrepreneurship',
    badge: '📈 Business',
    image: '/src/assets/code.png', // Fallback styled in modal
    description: 'Hands-on experience initiating, launching, and managing online business projects from initial concept validation to customer delivery.',
    highlights: [
      'Managed end-to-end product sourcing, store configuration, and digital presence.',
      'Executed digital promotion campaigns on social media platforms.',
      'Analyzed sales data and customer feedback to optimize store metrics.',
      'Developed practical skills in negotiation, customer service, and financial tracking.'
    ],
    tags: ['E-Commerce', 'Product Strategy', 'Digital Marketing', 'Customer Operations', 'Brand Growth'],
    externalUrl: 'https://www.instagram.com/revano.federico?igsh=dzg2M3RoaDh1OG9p',
    socialLabel: 'Instagram Business'
  },
  topsolusindo: {
    id: 'topsolusindo',
    title: 'Digital Marketing Intern — Top Solusindo',
    category: 'Work Experience',
    badge: '💼 3-Month Internship (11th Grade)',
    image: '/src/assets/edit.png',
    description: 'Served as a Digital Marketing Intern for 3 months during 11th grade at Top Solusindo. Responsible for capturing company photography, designing marketing posters, and editing social media video content.',
    highlights: [
      'Photographed company operations, facilities, and staff for marketing branding.',
      'Designed visual posters and promotional graphics tailored for social platforms.',
      'Edited short-form promotional videos and reel clips to drive online engagement.',
      'Collaborated on digital marketing strategy and content publishing.'
    ],
    tags: ['Digital Marketing', 'Photography', 'Poster Design', 'Video Editing', 'Social Media Strategy', '11th Grade Internship'],
    externalUrl: 'https://www.instagram.com/revano.federico?igsh=dzg2M3RoaDh1OG9p',
    socialLabel: 'Inquire Experience'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initRoleTyping();
  initScrollAnimations();
  initActiveNav();
  initProjectModals();
  initCopyEmail();
});

// --- 1. Theme Toggle ---
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('rf-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('rf-theme', isDark ? 'dark' : 'light');
  });
}

// --- 2. Cycling Role Tagline ---
function initRoleTyping() {
  const roles = [
    'Robotics Enthusiast 🤖',
    'Video Editor & Storyteller 🎬',
    'PHP & Python Developer 💻',
    'Young Entrepreneur 📈'
  ];
  let roleIndex = 0;
  const roleEl = document.getElementById('cycling-role') as HTMLElement | null;
  if (!roleEl) return;

  const targetEl = roleEl;

  function cycleRole() {
    targetEl.style.opacity = '0';
    targetEl.style.transform = 'translateY(4px)';
    setTimeout(() => {
      targetEl.textContent = roles[roleIndex];
      targetEl.style.opacity = '1';
      targetEl.style.transform = 'translateY(0)';
      roleIndex = (roleIndex + 1) % roles.length;
    }, 250);
  }

  targetEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  cycleRole();
  setInterval(cycleRole, 2600);
}

// --- 3. Scroll Reveal Observer ---
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

// --- 4. Active Nav Highlight ---
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = (section as HTMLElement).offsetTop;
      const height = (section as HTMLElement).offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('text-violet-600', 'dark:text-violet-400', 'font-bold');
      if (currentId && link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('text-violet-600', 'dark:text-violet-400', 'font-bold');
      }
    });
  });
}

// --- 5. Modal Dialog Handler ---
function initProjectModals() {
  const dialog = document.getElementById('project-modal') as HTMLDialogElement | null;
  const closeBtn = document.getElementById('modal-close-btn');
  const triggerBtns = document.querySelectorAll('[data-open-modal]');

  if (!dialog) return;

  triggerBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const targetId = (e.currentTarget as HTMLElement).getAttribute('data-open-modal');
      if (targetId && projectsData[targetId]) {
        populateModal(projectsData[targetId]);
        dialog.showModal();
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    dialog?.close();
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Light dismiss backdrop click
  dialog.addEventListener('click', (e) => {
    const dialogBounds = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogBounds.left ||
      e.clientX > dialogBounds.right ||
      e.clientY < dialogBounds.top ||
      e.clientY > dialogBounds.bottom
    ) {
      closeModal();
    }
  });

  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
  });
}

function populateModal(data: ProjectData) {
  const titleEl = document.getElementById('modal-title');
  const badgeEl = document.getElementById('modal-badge');
  const imgEl = document.getElementById('modal-image') as HTMLImageElement | null;
  const descEl = document.getElementById('modal-desc');
  const highlightsEl = document.getElementById('modal-highlights');
  const tagsEl = document.getElementById('modal-tags');
  const actionsEl = document.getElementById('modal-actions');

  if (titleEl) titleEl.textContent = data.title;
  if (badgeEl) badgeEl.textContent = data.badge;
  if (descEl) descEl.textContent = data.description;

  if (imgEl) {
    if (data.id === 'business') {
      imgEl.src = '/src/assets/code.png'; // Alternative visual representation
      imgEl.alt = data.title;
    } else {
      imgEl.src = data.image;
      imgEl.alt = data.title;
    }
  }

  if (highlightsEl) {
    highlightsEl.innerHTML = data.highlights
      .map(
        (h) => `
        <li class="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
          <span class="text-violet-500 font-bold shrink-0">✓</span>
          <span>${h}</span>
        </li>
      `
      )
      .join('');
  }

  if (tagsEl) {
    tagsEl.innerHTML = data.tags
      .map(
        (tag) => `
        <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-300 border border-violet-200/50 dark:border-violet-800/50">
          ${tag}
        </span>
      `
      )
      .join('');
  }

  if (actionsEl) {
    let actionsHtml = '';

    if (data.githubUrl) {
      actionsHtml += `
        <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition-opacity">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          ${data.socialLabel || 'GitHub Repo'}
        </a>
      `;
    }

    if (data.externalUrl) {
      actionsHtml += `
        <a href="${data.externalUrl}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 text-white text-xs font-semibold hover:bg-violet-700 transition-colors shadow-md shadow-violet-500/20">
          <span>🌐</span>
          ${data.socialLabel || 'View Live'}
        </a>
      `;
    }

    actionsEl.innerHTML = actionsHtml;
  }
}

// --- 6. Copy Email to Clipboard ---
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-notification');
  const emailText = 'revano.federico@gmail.com';

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailText);
      showToast('Email copied to clipboard! 📋');
    } catch (err) {
      // Fallback
      showToast('revano.federico@gmail.com');
    }
  });

  function showToast(msg: string) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }, 2800);
  }
}
