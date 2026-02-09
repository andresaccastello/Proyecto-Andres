document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  if (header) {
    window.addEventListener("scroll", () => {
      // DEBUG: Si ves esto en la consola (F12), el JS funciona
      // console.log("Scrolleando...", window.scrollY); 

      if (window.scrollY > 50) {
        header.classList.add("compact");
      } else {
        header.classList.remove("compact");
      }
    });
  } else {
    console.error("No se encontró la etiqueta <header>");
  }
});