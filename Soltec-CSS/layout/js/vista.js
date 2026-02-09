export function renderizarProductos(productos) {
  const contenedor = document.getElementById("productos-grid");
  if (!contenedor) return;

  let html = "";

  productos.forEach((producto) => {
    html += `
      <article class="producto" data-id="${producto.id}">
        <img 
          src="${producto.imagen.src}" 
          alt="${producto.imagen.alt}" 
          loading="lazy"
        />

        <h3>${producto.nombre}</h3>

        <ul>
          <li>${producto.descripcion ?? ""}</li>
        </ul>

        <div class="precio">
          $ ${producto.precio.toLocaleString("es-AR")}
        </div>

        <button class="boton-agregar-carrito" data-id="${producto.id}">
          Agregar al carrito
        </button>
      </article>
    `;
  });

  contenedor.innerHTML = html;
}
