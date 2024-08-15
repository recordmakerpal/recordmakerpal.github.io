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