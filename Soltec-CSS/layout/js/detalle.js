// layout/js/detalle.js
import productos from "./productos.js";

export function iniciarDetalle() {
const contenedor = document.getElementById("detalle-producto");
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const producto = productos.find(p => p.id === id);

if (!producto) {
  contenedor.innerHTML = "<p>Producto no encontrado.</p>";
} else {
  const todasLasImgs = [
    producto.imagen,
    ...(producto.imagenesExtra || [])
  ];

  const descripcionLarga = producto.descripcionLarga || producto.descripcion || "";

  contenedor.innerHTML = `
    <div class="detalle-wrap">

      <div class="detalle-galeria">
        <img
          id="detalle-img-principal"
          class="detalle-img-grande"
          src="${todasLasImgs[0].src}"
          alt="${todasLasImgs[0].alt}"
        />

        <div class="detalle-miniaturas" id="detalle-miniaturas">
          ${todasLasImgs.map((img, i) => `
            <img
              class="detalle-thumb ${i === 0 ? "active" : ""}"
              src="${img.src}"
              alt="${img.alt}"
              data-src="${img.src}"
              data-alt="${img.alt}"
            />
          `).join("")}
        </div>

        ${
          descripcionLarga
            ? `
              <div class="detalle-descripcion-larga">
                <h2>Descripción del producto</h2>
                <p class="detalle-desc">
                  ${descripcionLarga}
                </p>
              </div>
            `
            : ""
        }
      </div>

      <div class="detalle-info">
        <h1>${producto.nombre}</h1>

        <p class="detalle-precio">
          $ ${producto.precio.toLocaleString("es-AR")}
        </p>

        ${
          producto.caracteristicas?.length
            ? `<ul class="detalle-caract">
                ${producto.caracteristicas.map(c => `<li>${c}</li>`).join("")}
               </ul>`
            : ""
        }

        <div class="detalle-botones">
          <button class="boton-agregar-carrito" data-id="${producto.id}">
            Agregar al carrito
          </button>
        </div>

        <a class="detalle-volver" href="productos.html">← Volver a Productos</a>
      </div>

    </div>

    <!-- Productos relacionados (placeholder, se rellena por JS) -->
    <section class="relacionados" id="relacionados-section">
      <h2 class="relacionados-titulo">Productos relacionados</h2>
      <div id="relacionados-grid" class="productos-grid"></div>
    </section>
  `;

  // ---------- Miniaturas -> cambia imagen principal ----------
  const miniaturas = document.getElementById("detalle-miniaturas");
  const principal  = document.getElementById("detalle-img-principal");

  if (miniaturas && principal) {
    miniaturas.addEventListener("click", (e) => {
      const thumb = e.target.closest(".detalle-thumb");
      if (!thumb) return;

      principal.src = thumb.dataset.src;
      principal.alt = thumb.dataset.alt;

      miniaturas.querySelectorAll(".detalle-thumb")
        .forEach(t => t.classList.remove("active"));

      thumb.classList.add("active");
    });
  }

  // ================== PRODUCTOS RELACIONADOS ==================
  const relacionados = productos
    .filter(p => p.categoria === producto.categoria && p.id !== producto.id)
    .slice(0, 3);

  const gridRelacionados  = document.getElementById("relacionados-grid");
  const sectionRelacionados = document.getElementById("relacionados-section");

  if (gridRelacionados && relacionados.length) {
    gridRelacionados.innerHTML = relacionados.map(p => `
      <article class="producto" data-id="${p.id}">
        <img src="${p.imagen.src}" alt="${p.imagen.alt}">
        <h3>${p.nombre}</h3>
        <p class="descripcion">${p.descripcion}</p>
        <div class="precio">
          $ ${p.precio.toLocaleString("es-AR")}
        </div>
        <button class="boton-agregar-carrito" data-id="${p.id}">
          Agregar al carrito
        </button>
      </article>
    `).join("");
  } else if (sectionRelacionados) {
    // Si no hay relacionados, ocultamos toda la sección
    sectionRelacionados.style.display = "none";
  }
}
}




