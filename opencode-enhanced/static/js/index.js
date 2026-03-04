window.HELP_IMPROVE_VIDEOJS = false;

// --- Scroll-triggered fade-in animations ---
function initScrollAnimations() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Once visible, stop observing to avoid re-triggering
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
  });
}

// --- Navbar scroll effect ---
function initNavbarScroll() {
  var navbar = document.querySelector('.navbar');
  if (!navbar) return;

  var scrollThreshold = 50;

  function onScroll() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Initial check
}

// --- BibTeX copy button ---
function copyBibtex(btn) {
  var code = btn.parentElement.querySelector('code');
  if (!code) return;

  navigator.clipboard.writeText(code.textContent).then(function() {
    btn.classList.add('is-copied');
    btn.innerHTML = '<i class="fas fa-check"></i> Copied';
    setTimeout(function() {
      btn.classList.remove('is-copied');
      btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
    }, 2000);
  }).catch(function() {
    // Fallback for older browsers
    var range = document.createRange();
    range.selectNodeContents(code);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    try {
      document.execCommand('copy');
      btn.classList.add('is-copied');
      btn.innerHTML = '<i class="fas fa-check"></i> Copied';
      setTimeout(function() {
        btn.classList.remove('is-copied');
        btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
      }, 2000);
    } catch (e) {
      // Silent fail
    }
    sel.removeAllRanges();
  });
}

// --- Smooth scroll for anchor links ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

$(document).ready(function() {
  // Navbar burger toggle for mobile.
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Initialize carousels.
  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  var carousels = bulmaCarousel.attach('.carousel', options);

  for (var i = 0; i < carousels.length; i++) {
    carousels[i].on('before:show', function(state) {
      // Carousel state change
    });
  }

  // Initialize sliders.
  bulmaSlider.attach();

  // Initialize custom enhancements.
  initScrollAnimations();
  initNavbarScroll();
  initSmoothScroll();
});
