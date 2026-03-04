(function(){
  function markRevealTargets(){
    // Mark common blocks for reveal animation
    const selectors = [
      'main .section .card',
      'main .section h2',
      'main .figure',
      'main pre',
      'main .grid'
    ];
    selectors.forEach(sel=>{
      document.querySelectorAll(sel).forEach(el=>{
        el.classList.add('reveal-on-scroll');
      });
    });
  }

  function initReveal(){
    const els = Array.from(document.querySelectorAll('.reveal-on-scroll'));
    if(!('IntersectionObserver' in window)){
      els.forEach(el=>el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    els.forEach(el=>io.observe(el));
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    markRevealTargets();
    initReveal();
  });
})();
