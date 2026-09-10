// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
  
    if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
  };
  
  // Burger
  const burger = document.querySelector('#burger');
  const navMenu = document.querySelector('#nav-menu');
  
  burger.addEventListener('click', function () {
    burger.classList.toggle('burger-active');
    navMenu.classList.toggle('hidden');
  });
  
  // Klik di luar hamburger
  window.addEventListener('click', function (e) {
    if (e.target != burger && e.target != navMenu) {
      burger.classList.remove('burger-active');
      navMenu.classList.add('hidden');
    }
  });

  // Carousel
  const root = document.getElementById('rp-carousel');
  if (root) {

  const slides = Array.from(root.querySelectorAll('.rp-carousel-slide'));
  const prevBtn = document.getElementById('rp-carousel-prev');
  const nextBtn = document.getElementById('rp-carousel-next');
  const dotsWrap = document.getElementById('rp-carousel-dots');
  const autoplayDelay = 10000;
  let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'rp-carousel-dot';
    dot.setAttribute('aria-label', 'Go to photo ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle('active', idx === index));
    dots.forEach((d, idx) => {
      d.classList.remove('active');
      if (idx === index) {
        d.classList.add('active');
      }
    });
  }

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));
  goTo(0);
  setInterval(() => goTo(index + 1), autoplayDelay);
  }

  const projectTabs = Array.from(document.querySelectorAll('[data-project-tab]'));
  const projectPanels = Array.from(document.querySelectorAll('[data-project-panel]'));

  projectTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selectedProject = tab.dataset.projectTab;
      projectTabs.forEach((item) => {
        const isSelected = item === tab;
        item.classList.toggle('active', isSelected);
        item.setAttribute('aria-selected', String(isSelected));
      });
      projectPanels.forEach((panel) => {
        const isSelected = panel.dataset.projectPanel === selectedProject;
        panel.classList.toggle('active', isSelected);
        panel.hidden = !isSelected;
      });
    });
  });