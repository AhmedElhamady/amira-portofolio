$(document).ready(function () {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  const header = document.getElementById('main-header');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Toggle Mobile Menu
  const toggleMenu = () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  };

  menuBtn.addEventListener('click', toggleMenu);

  // Close Mobile Menu on link click
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) toggleMenu();
    });
  });

  // Handle Active Link State (Desktop)
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('text-slate-900', 'bg-slate-100', 'font-semibold'));
      navLinks.forEach(l => l.classList.add('text-slate-600', 'font-medium'));

      this.classList.remove('text-slate-600', 'font-medium');
      this.classList.add('text-slate-900', 'bg-slate-100', 'font-semibold');
    });
  });

  // Header Elevation on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-sm', 'border-slate-200/80');
    } else {
      header.classList.remove('shadow-sm', 'border-slate-200/80');
    }
  });

  // Featured Work Category Filter
  $('.work-filter-btn').on('click', function () {
    const filterValue = $(this).attr('data-filter');

    // Update active tab styles
    $('.work-filter-btn')
      .removeClass('bg-primary text-white shadow-sm font-semibold')
      .addClass('text-textSoft font-medium hover:text-dark hover:bg-soft');
    $(this)
      .addClass('bg-primary text-white shadow-sm font-semibold')
      .removeClass('text-textSoft font-medium hover:text-dark hover:bg-soft');

    // Filter project items with smooth fade animation
    if (filterValue === 'all') {
      $('.project-item').fadeIn(250);
    } else {
      $('.project-item').each(function () {
        if ($(this).attr('data-category') === filterValue) {
          $(this).fadeIn(250);
        } else {
          $(this).fadeOut(150);
        }
      });
    }
  });


  const testimonialSwiper = new Swiper('.testimonialSwiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
