
$(function () {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const isMobile = window.matchMedia("(max-width: 991px), (pointer: coarse)").matches;

  if (!isMobile) {
    ScrollTrigger.normalizeScroll(false);

    let smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    // Smooth scroll for nav links (desktop)
    $('.navbar-nav .nav-link').on('click', function (e) {
      e.preventDefault();
      const target = $(this).attr('href');
      smoother.scrollTo(target);
    });

  } else {
    // Mobile: avoid heavy smoother (keeps scroll feeling snappy)
    ScrollTrigger.normalizeScroll(true);

    // Smooth anchor scroll using native browser behavior
    $('.navbar-nav .nav-link').on('click', function (e) {
      const target = $(this).attr('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

});
