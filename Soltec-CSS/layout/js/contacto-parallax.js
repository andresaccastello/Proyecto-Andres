// layout/js/contacto-parallax.js
const root = document.querySelector("main.contacto-page");
if (root) {
  const imgs = root.querySelectorAll(".bg-parallax");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (imgs.length && !reduceMotion) {
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY || window.pageYOffset || 0;

      imgs.forEach((img) => {
        const speed = parseFloat(img.dataset.speed || "0.12");
        const max = parseFloat(img.dataset.max || "60");

        // Parallax suave + clamp para no mostrar bordes
        const offset = Math.max(-max, Math.min(max, y * speed));
        img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }
}
