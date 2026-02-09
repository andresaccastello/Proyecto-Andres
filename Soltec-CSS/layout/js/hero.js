// Animación suave de entrada para el hero
document.addEventListener("DOMContentLoaded", () => {
  const inner = document.querySelector(".hero-soltec__inner");
  if (!inner) return;

  inner.style.opacity = "0";
  inner.style.transform = "translateY(20px)";

  requestAnimationFrame(() => {
    inner.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
    inner.style.opacity = "1";
    inner.style.transform = "translateY(0)";
  });
});
