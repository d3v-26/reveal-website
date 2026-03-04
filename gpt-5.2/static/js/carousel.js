(function(){
  function initCarousel(root){
    const track = root.querySelector('.track');
    const slides = Array.from(root.querySelectorAll('.slide'));
    const prev = root.querySelector('[data-prev]');
    const next = root.querySelector('[data-next]');
    const dots = Array.from(root.querySelectorAll('.dot'));
    let idx = 0;

    function render(){
      if(!track || slides.length === 0) return;
      track.style.transform = `translateX(${-idx*100}%)`;
      dots.forEach((d,i)=>d.classList.toggle('active', i===idx));
    }

    function go(i){
      if(slides.length === 0) return;
      idx = (i + slides.length) % slides.length;
      render();
    }

    prev && prev.addEventListener('click', ()=>go(idx-1));
    next && next.addEventListener('click', ()=>go(idx+1));

    dots.forEach((d,i)=>{
      const di = d.getAttribute('data-dot');
      const target = di !== null ? parseInt(di,10) : i;
      d.addEventListener('click', ()=>go(target));
    });

    root.addEventListener('keydown', (e)=>{
      if(e.key==='ArrowLeft') go(idx-1);
      if(e.key==='ArrowRight') go(idx+1);
    });

    render();
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('[data-carousel]').forEach(initCarousel);
  });
})();
