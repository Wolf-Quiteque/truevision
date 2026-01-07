
$(function () {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollTrigger.normalizeScroll(false);

  // create the smooth scroller FIRST!
  let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });

  // Smooth scroll for nav links
  $('.navbar-nav .nav-link').on('click', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    smoother.scrollTo(target);
  });

});
