document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  const logo = document.getElementById('navbar-logo'); // logo navbar
  const scrollTopBtn = document.getElementById('scroll-top'); // tombol ke atas

  if (!navbar || !logo) return;

  function updateOnScroll() {
    // --- Navbar sticky + logo ---
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      logo.src = "/assets/img/Deking Logo 2.jpg";
    } else {
      navbar.classList.remove('scrolled');
      logo.src = "/assets/img/Deking Logo 1.png";
    }

    // --- Highlight link aktif ---
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href') || '';
      if (current && (href === `#${current}` || href.includes(`#${current}`))) {
        link.classList.add('active');
      }
    });

    // --- Tombol scroll to top ---
    if (scrollTopBtn) {
      if (window.scrollY > 200) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }
  }

  // --- Klik tombol scroll to top ---
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Jalankan saat load & scroll ---
  updateOnScroll();
  window.addEventListener('scroll', updateOnScroll, { passive: true });

  
});



  const menuToggle = document.getElementById("menu-toggle");
  const popup = document.getElementById("mobile-popup");
  const closePopup = document.getElementById("close-popup");

  menuToggle.addEventListener("click", () => {
    popup.classList.add("show");
  });

  closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
  });