import productos from "./productos.js";
import { renderizarProductos } from "./vista.js";
import { obtenerCotizacion } from "./cotizacion.js"; 
import { iniciarDetalle } from "./detalle.js";

// Variable de respaldo
let DOLAR_POR_DEFECTO = 1200;

const CurrentPage = location.pathname.split("/").pop();

// ================== INICIO DE LA APP ==================
async function iniciarApp() {
  
  // 1. BUSCAMOS EL DÓLAR (Esperamos...)
  const dolarNube = await obtenerCotizacion();
  const dolarFinal = dolarNube || DOLAR_POR_DEFECTO;

  console.log(`💵 Dólar aplicado: $${dolarFinal}`);

  // 2. LA MAGIA: CONVERTIMOS LOS PRECIOS EN MEMORIA
  // Esto modifica el array 'productos' para siempre en esta sesión
  productos.forEach(p => {
    // Guardamos el precio original por si necesitamos debuggear (opcional)
    // p.precioUSD = p.precio; 
    
    let enPesos = p.precio * dolarFinal;
    p.precio = Math.ceil(enPesos / 100) * 100;
  });

  // 3. AHORA SÍ, RENDERIZAMOS (Mueve tu bloque IF aquí adentro)
  // Como estamos dentro del 'await', esto pasa SOLO después de tener los precios nuevos.
  
// 3. AHORA SÍ, RENDERIZAMOS
  
  // CORRECCIÓN AQUÍ: Borré el "|| CurrentPage === """ para que el inicio NO entre acá.
  if (CurrentPage === "productos.html") { 
    
    renderizarProductos(productos); // Muestra TODOS solo en la página de productos

    // Render chips + listeners (si existen)
    if (typeof renderizarChipsCategorias === 'function') {
        renderizarChipsCategorias();
        inicializarFiltroCategorias();
    }

  } else if (CurrentPage === "detalle.html") {
    
    iniciarDetalle();

  } else {
    // CORRECCIÓN: Como ahora el inicio ("index.html" o "") cae en este ELSE...
    // ...se ejecuta esto y muestra solo los primeros 3.
    renderizarProductos(productos.slice(0, 3));
  }

  // 4. Inicializamos UI del carrito (si tienes esas funciones en index.js)
  if (typeof actualizarCantidadCarrito === 'function') {
      actualizarCantidadCarrito();
      renderizarMiniCarrito();
  }
}

// ================== EJECUTAR ==================
// Llamamos a la función para que empiece la magia
iniciarApp();

// (Resto de funciones del carrito, chips, etc. van aquí abajo...)
// ================== CHIPS CATEGORÍAS ==================
function renderizarChipsCategorias() {
  const contenedor = document.getElementById("filtros-productos");
  if (!contenedor) return;

  const categoriasUnicas = [...new Set(productos.map(p => p.categoria))];

  const etiquetas = {
    auriculares: { label: "Auriculares", emoji: "🎧" },
    parlantes:   { label: "Parlantes",   emoji: "🔊" },
    mouse:       { label: "Mouse",       emoji: "🖱️" },

    Notebooks:   { label: "Notebooks",   emoji: "💻" },
    Teclados:    { label: "Teclados",    emoji: "⌨️" },
    Relojes:     { label: "Relojes",     emoji: "⌚" },

    pc:          { label: "PC",          emoji: "🖥️" }, 
    impresoras:  { label: "Impresoras",  emoji: "🖨️" }, 
    monitores:   { label: "Monitores",   emoji: "📺" }, 
    volantes:    { label: "Volantes",    emoji: "🏎️" }, 
    tablets:     { label: "Tablets",     emoji: "📱" }  
  };

  let html = `
    <button class="chip active" data-cat="todos">🛍️ Ver todo</button>
  `;

  categoriasUnicas.forEach(cat => {
    const info = etiquetas[cat] || { label: cat, emoji: "✨" };
    html += `
      <button class="chip" data-cat="${cat}">
        ${info.emoji} ${info.label}
      </button>
    `;
  });

  contenedor.innerHTML = html;
}

function inicializarFiltroCategorias() {
  const contenedor = document.getElementById("filtros-productos");
  if (!contenedor) return;

  contenedor.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;

    // set active visual
    contenedor.querySelectorAll(".chip")
      .forEach(c => c.classList.remove("active"));
    chip.classList.add("active");

    const cat = chip.dataset.cat;

    if (cat === "todos") {
      renderizarProductos(productos);           // render actual
    } else {
      const filtrados = productos.filter(p => p.categoria === cat);
      renderizarProductos(filtrados);           // render específico
    }
  });
}

// ================== CONSTANTES ==================
const WHATSAPP_NUMBER = "5493472581774";
const STORAGE_KEY = "soltec_carrito";

// ================== PREFERENCIAS DEL PEDIDO (Entrega/Pago) ==================
const PREFS_KEY = "soltec_pedido_prefs";

function cargarPrefsPedido() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (!raw) return { entrega: "retiro", pago: "transferencia" };

    const p = JSON.parse(raw);
    return {
      entrega: (p.entrega === "envio" || p.entrega === "retiro") ? p.entrega : "retiro",
      pago: (p.pago === "efectivo" || p.pago === "transferencia" || p.pago === "debito") ? p.pago : "transferencia",
    };
  } catch {
    return { entrega: "retiro", pago: "transferencia" };
  }
}

function guardarPrefsPedido(prefs) {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch (e) {
    console.warn("No se pudieron guardar prefs del pedido:", e);
  }
}

function calcularTotales(baseTotal, pago) {
  // Si querés redondear siempre para arriba, cambiá Math.round por Math.ceil
  const recargo = (pago === "debito") ? Math.round(baseTotal * 0.05) : 0;
  const totalFinal = baseTotal + recargo;
  return { recargo, totalFinal };
}

function textoEntrega(entrega) {
  return entrega === "envio" ? "Envío (a coordinar)" : "Retiro en local";
}

function textoPago(pago) {
  if (pago === "efectivo") return "Efectivo";
  if (pago === "transferencia") return "Transferencia";
  return "Débito (+5%)";
}

// ================== CARRITO + LOCALSTORAGE ==================

// Cargar carrito desde localStorage
function cargarCarritoDesdeStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);

    // Nos aseguramos de que sea un array razonable
    if (!Array.isArray(parsed)) return [];
    return parsed.map(item => ({
      id: Number(item.id),
      nombre: String(item.nombre),
      precio: Number(item.precio),
      cantidad: Number(item.cantidad),
    })).filter(item => !Number.isNaN(item.id) && !Number.isNaN(item.precio) && !Number.isNaN(item.cantidad));
  } catch (err) {
    console.error("Error leyendo carrito de localStorage:", err);
    return [];
  }
}

// Guardar carrito en localStorage
function guardarCarritoEnStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
  } catch (err) {
    console.error("Error guardando carrito de localStorage:", err);
  }
}

// Estado del carrito en memoria
let carrito = cargarCarritoDesdeStorage();

// ================== FUNCIONES DE CARRITO ==================

function agregarAlCarrito(productId) {
  const idNum = Number(productId);
  const producto = productos.find(p => p.id === idNum);
  if (!producto) return;

  const item = carrito.find(i => i.id === idNum);

  if (item) {
    item.cantidad++;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
    });
  }

  guardarCarritoEnStorage();
  actualizarCantidadCarrito();
  renderizarMiniCarrito();
}

function cambiarCantidad(productId, delta) {
  const idNum = Number(productId);
  const item = carrito.find(i => i.id === idNum);
  if (!item) return;

  item.cantidad += delta;
  if (item.cantidad <= 0) {
    carrito = carrito.filter(i => i.id !== idNum);
  }

  guardarCarritoEnStorage();
  actualizarCantidadCarrito();
  renderizarMiniCarrito();
}

function eliminarDelCarrito(productId) {
  const idNum = Number(productId);
  carrito = carrito.filter(i => i.id !== idNum);

  guardarCarritoEnStorage();
  actualizarCantidadCarrito();
  renderizarMiniCarrito();
}

function actualizarCantidadCarrito() {
  const span = document.querySelector('#carrito-cantidad');
  if (!span) return;

  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  span.textContent = totalUnidades;
}

function generarMensajeCarrito() {
  if (!carrito.length) return '';

  const prefs = cargarPrefsPedido();

  const lineas = carrito.map(item =>
    `- ${item.nombre} x${item.cantidad} = $${(item.precio * item.cantidad).toLocaleString('es-AR')}`
  );

  const subtotal = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const { recargo, totalFinal } = calcularTotales(subtotal, prefs.pago);

  const bloqueEntrega = (prefs.entrega === "envio")
    ? [
        "Entrega: *ENVÍO (a coordinar - sujeto a disponibilidad)*",
        "Dirección / Localidad: ______",
        "Referencia (opcional): ______",
      ].join("\n")
    : [
        "Entrega: *RETIRO EN LOCAL(sujeto a disponibilidad)*",
        "Día y horario aproximado de retiro: ______",
      ].join("\n");

const bloquePrecios =
  (prefs.pago === "debito")
    ? [
        `Subtotal: $${subtotal.toLocaleString('es-AR')}`,
        `Recargo débito (5%): +$${recargo.toLocaleString('es-AR')}`,
        `Total: $${totalFinal.toLocaleString('es-AR')}`,
      ]
    : [
        `Total: $${totalFinal.toLocaleString('es-AR')}`,
      ];

const texto = [
  "Hola! Me gustaría hacer este pedido:",
  "",
  ...lineas,
  "",
  ...bloquePrecios,
  "",
  bloqueEntrega,
  "",
  `Pago: *${textoPago(prefs.pago)}*`,
].join('\n');


  return encodeURIComponent(texto);
}

function enviarCarritoPorWhatsApp() {
  const mensaje = generarMensajeCarrito();
  if (!mensaje) {
    alert('El carrito está vacío.');
    return;
  }

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`, '_blank');
}

// ================== MINI CARRITO (UI) ==================

function renderizarMiniCarrito() {
  const contenedor = document.getElementById('carrito-mini');
  if (!contenedor) return;

  // CASO VACÍO: Mantenemos la estructura para que se vea bien
  if (!carrito.length) {
    contenedor.innerHTML = `
      <h3>Mi carrito</h3>
      <div class="carrito-body">
         <p class="carrito-vacio">Tu carrito está vacío.</p>
      </div>
    `;
    return;
  }

  let itemsHTML = '';
  let subtotal = 0;

  carrito.forEach(item => {
    const sub = item.precio * item.cantidad;
    subtotal += sub;

    itemsHTML += `
      <div class="carrito-item">
        <div class="carrito-item-info">
          <span>${item.nombre}</span>
          <span>$${sub.toLocaleString('es-AR')}</span>
        </div>
        <div class="carrito-item-controles">
          <button class="carrito-menos" data-id="${item.id}">-</button>
          <span class="carrito-cantidad">${item.cantidad}</span>
          <button class="carrito-mas" data-id="${item.id}">+</button>
          <button class="carrito-eliminar" data-id="${item.id}">✕</button>
        </div>
      </div>
    `;
  });

  const prefs = cargarPrefsPedido();
  const { recargo, totalFinal } = calcularTotales(subtotal, prefs.pago);

  // AQUÍ ESTÁ EL CAMBIO CLAVE: Agrupamos en Body y Footer
  contenedor.innerHTML = `
    <h3>Mi carrito</h3>

    <div class="carrito-body">
      
      <div class="carrito-items">
        ${itemsHTML}
      </div>

      <div class="carrito-opciones">
        <div class="opcion-group">
          <div class="opcion-title">Entrega</div>
          <div class="opcion-pills">
            <label class="pill">
              <input type="radio" name="entrega" value="retiro" ${prefs.entrega === "retiro" ? "checked" : ""}>
              <span>🏪 Retiro</span>
            </label>
            <label class="pill">
              <input type="radio" name="entrega" value="envio" ${prefs.entrega === "envio" ? "checked" : ""}>
              <span>🚚 Envío</span>
            </label>
          </div>
        </div>

        <div class="opcion-group">
          <div class="opcion-title">Pago</div>
          <div class="opcion-pills">
            <label class="pill">
              <input type="radio" name="pago" value="efectivo" ${prefs.pago === "efectivo" ? "checked" : ""}>
              <span>💵 Efectivo</span>
            </label>
            <label class="pill">
              <input type="radio" name="pago" value="transferencia" ${prefs.pago === "transferencia" ? "checked" : ""}>
              <span>🏦 Transferencia</span>
            </label>
            <label class="pill">
              <input type="radio" name="pago" value="debito" ${prefs.pago === "debito" ? "checked" : ""}>
              <span>💳 Débito (+5%)</span>
            </label>
          </div>
        </div>
      </div> 

    </div> <div class="carrito-footer">
      <div class="carrito-totales">
        <div class="carrito-linea">
          <span>Subtotal</span>
          <span>$${subtotal.toLocaleString('es-AR')}</span>
        </div>

        ${prefs.pago === "debito" ? `
          <div class="carrito-linea carrito-recargo">
            <span>Recargo débito (5%)</span>
            <span>+$${recargo.toLocaleString('es-AR')}</span>
          </div>
        ` : ""}
      </div>

      <div class="carrito-total">
        Total: $${totalFinal.toLocaleString('es-AR')}
      </div>

      <button class="carrito-finalizar-mini" id="btn-finalizar-mini">
        Finalizar por WhatsApp
      </button>
    </div> `;
}

function toggleMiniCarrito() {
  const contenedor = document.getElementById('carrito-mini');
  if (!contenedor) return;

  // Siempre actualizo contenido antes de mostrar/ocultar
  renderizarMiniCarrito();

  contenedor.classList.toggle('visible');
}

// ================== LISTENERS GLOBALES ==================

// Guardar cambios de entrega/pago y recalcular total en vivo
document.addEventListener("change", (e) => {
  const entrega = e.target.closest('input[name="entrega"]');
  const pago = e.target.closest('input[name="pago"]');

  if (!entrega && !pago) return;

  const prefs = cargarPrefsPedido();
  if (entrega) prefs.entrega = entrega.value;
  if (pago) prefs.pago = pago.value;

  guardarPrefsPedido(prefs);
  renderizarMiniCarrito();
});

document.addEventListener("click", (e) => {
  const btnConsulta      = e.target.closest(".boton-consulta");
  const btnAgregar       = e.target.closest(".boton-agregar-carrito");
  const btnFinalizar     = e.target.closest("#btn-finalizar");
  const btnCarrito       = e.target.closest("#btn-carrito");
  const btnFinalizarMini = e.target.closest("#btn-finalizar-mini");
  const btnMas           = e.target.closest(".carrito-mas");
  const btnMenos         = e.target.closest(".carrito-menos");
  const btnEliminar      = e.target.closest(".carrito-eliminar");

  // 1) Click en tarjeta (siempre que NO sea un botón)
  const cardProducto = e.target.closest(".producto");
  const clickeoBoton = e.target.closest("button, a");

  if (cardProducto && !clickeoBoton) {
    const id = cardProducto.dataset.id;
    window.location.href = `detalle.html?id=${id}`;
    return;
  }

  // 2) Consultar
  if (btnConsulta) {
    const nombre = btnConsulta.dataset.nombre;
    const mensaje = encodeURIComponent(`Hola! Me interesa el producto: ${nombre}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`, "_blank");
    return;
  }

  // 3) Agregar carrito
  if (btnAgregar) {
    agregarAlCarrito(btnAgregar.dataset.id);
    return;
  }

  // 4) Finalizar
  if (btnFinalizar || btnFinalizarMini) {
    enviarCarritoPorWhatsApp();
    return;
  }

  // 5) Toggle mini carrito
  if (btnCarrito) {
    toggleMiniCarrito();
    return;
  }

  // 6) Controles mini carrito
  if (btnMas) {
    cambiarCantidad(btnMas.dataset.id, +1);
    return;
  }
  if (btnMenos) {
    cambiarCantidad(btnMenos.dataset.id, -1);
    return;
  }
  if (btnEliminar) {
    eliminarDelCarrito(btnEliminar.dataset.id);
    return;
  }
});

// ================== MENÚ ACTIVO ==================

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});


// === DROPDOWNS: ORDENAR / FILTROS ===
(() => {
  const btnOrdenar = document.getElementById("btn-ordenar");
  const btnFiltros = document.getElementById("btn-filtros");
  const panelOrdenar = document.getElementById("panel-ordenar");
  const panelFiltros = document.getElementById("panel-filtros");
  const filtrosContainer = document.getElementById("filtros-productos");

  if (!btnOrdenar || !btnFiltros || !panelOrdenar || !panelFiltros) return;

  const state = {
    sort: null,        // "precio-asc" | "precio-desc" | null
    categoria: "all"   // "all" o nombre/id de categoría
  };

  // Helpers UI
  function open(btn, panel) {
    btn.classList.add("is-open");
    panel.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
  }

  function close(btn, panel) {
    btn.classList.remove("is-open");
    panel.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  }

  function closeAll() {
    close(btnOrdenar, panelOrdenar);
    close(btnFiltros, panelFiltros);
  }

  function toggle(btn, panel, otherBtn, otherPanel) {
    const willOpen = !panel.classList.contains("is-open");
    close(otherBtn, otherPanel);
    if (willOpen) open(btn, panel);
    else close(btn, panel);
  }

  // Inicializa aria
  btnOrdenar.setAttribute("aria-expanded", "false");
  btnFiltros.setAttribute("aria-expanded", "false");

  // Click botones
  btnOrdenar.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle(btnOrdenar, panelOrdenar, btnFiltros, panelFiltros);
  });

  btnFiltros.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle(btnFiltros, panelFiltros, btnOrdenar, panelOrdenar);
  });

  // Evitar que click dentro de panel cierre
  panelOrdenar.addEventListener("click", (e) => e.stopPropagation());
  panelFiltros.addEventListener("click", (e) => e.stopPropagation());

  // Cerrar al click afuera
  document.addEventListener("click", (e) => {
    const inControls = e.target.closest(".productos-controls");
    const inPanels = e.target.closest("#panel-ordenar, #panel-filtros");
    if (!inControls && !inPanels) closeAll();
  });

  // Cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });

  // === ORDENAR: delegación en panel ===
  panelOrdenar.addEventListener("click", (e) => {
    const item = e.target.closest(".panel-item");
    if (!item) return;

    state.sort = item.dataset.sort || null;

    // Opcional: actualizar texto del botón
    if (state.sort === "precio-asc") {
      btnOrdenar.firstChild.nodeValue = "Ordenar: Precio ↓ ";
    } else if (state.sort === "precio-desc") {
      btnOrdenar.firstChild.nodeValue = "Ordenar: Precio ↑ ";
    } else {
      btnOrdenar.firstChild.nodeValue = "Ordenar por ";
    }

    closeAll();
    emitChange();
  });

  // === FILTROS (categorías): delegación en contenedor de chips ===
  if (filtrosContainer) {
    filtrosContainer.addEventListener("click", (e) => {
      const chip = e.target.closest("button, .chip");
      if (!chip) return;

      // Tomar categoría desde data-atributo (ideal) o desde texto
      const raw =
        chip.dataset.categoria ||
        chip.dataset.category ||
        chip.getAttribute("data-categoria") ||
        chip.textContent;

      const categoria = normalizeCategoria(raw);
      state.categoria = categoria;

      // Marcar activo (opcional, si tus chips son botones)
      markActiveChip(filtrosContainer, chip);

      // Opcional: actualizar texto del botón "Filtros"
      if (categoria === "all") {
        btnFiltros.firstChild.nodeValue = "Filtros ";
      } else {
        btnFiltros.firstChild.nodeValue = `Categoría: ${prettyLabel(chip.textContent)} `;
      }

      closeAll();
      emitChange();
    });
  }

  function normalizeCategoria(value) {
    const txt = String(value || "").trim();
    if (!txt) return "all";

    // 1. Convertimos a minúsculas
    let clean = txt.toLowerCase();

    // 2. Si es "ver todo", devolvemos all
    if (clean.includes("ver todo") || clean === "all" || clean === "todo") return "all";

    // 3. BORRAMOS EMOJIS Y SÍMBOLOS (La parte clave)
    // Esto borra cualquier cosa que no sea letra, número o espacio simple
    clean = clean.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, ""); // Borra emojis complejos
    clean = clean.replace(/[^a-zA-Z0-9ñáéíóúü\s]/g, ""); // Borra símbolos extraños

    return clean.trim(); // "🎧 Auriculares" se convierte en "auriculares"
  }

  function prettyLabel(text) {
    return String(text || "").trim().replace(/\s+/g, " ");
  }

  function markActiveChip(container, activeEl) {
    // Solo si son botones/chips; si no querés, podés borrar esto.
    const all = container.querySelectorAll("button, .chip");
    all.forEach((el) => el.classList.remove("is-active"));
    activeEl.classList.add("is-active");
  }

  // === HOOK: acá conectás tu render/filtrado/orden ===
  function emitChange() {
    // 1) Si tenés una función tuya, la llama:
    if (typeof window.aplicarFiltrosYOrden === "function") {
      window.aplicarFiltrosYOrden({ ...state });
      return;
    }

    // 2) Si no, dispara un evento para que lo escuches donde renderizás productos:
    document.dispatchEvent(
      new CustomEvent("productos:change", { detail: { ...state } })
    );
  }
})();



// index.js

// Esta función recibe las órdenes del menú y ejecuta el trabajo sucio
// index.js

window.aplicarFiltrosYOrden = ({ sort, categoria }) => {
  
  // 1. Copia fresca de los productos
  let resultado = [...productos]; 

  // 2. FILTRAR (Lógica mejorada)
  if (categoria && categoria !== "all") {
    resultado = resultado.filter(p => {
       // Normalizamos ambos lados para compararlos limpiamente
       const catProducto = p.categoria.toLowerCase().trim();
       const catFiltro = categoria.toLowerCase().trim();

       // Verificamos si coinciden (de un lado o del otro)
       return catProducto.includes(catFiltro) || catFiltro.includes(catProducto);
    });
  }

  // 3. ORDENAR
  if (sort === "precio-asc") {
    resultado.sort((a, b) => a.precio - b.precio);
  } else if (sort === "precio-desc") {
    resultado.sort((a, b) => b.precio - a.precio);
  } 
  
  // 4. DIBUJAR
  renderizarProductos(resultado);
};


// ================== ALTURA DINÁMICA DEL HEADER ==================

function ajustarAlturaHeader() {
  const header = document.querySelector("header");
  if (!header) return;

  const h = header.offsetHeight;
  document.documentElement.style.setProperty("--header-height", h + "px");
}

window.addEventListener("load", ajustarAlturaHeader);
window.addEventListener("resize", ajustarAlturaHeader);
window.addEventListener("scroll", ajustarAlturaHeader);

// ================== INICIALIZACIÓN DE UI DEL CARRITO ==================

actualizarCantidadCarrito();   // número del botón según lo que haya en localStorage
renderizarMiniCarrito();       // contenido del mini carrito según lo que haya en localStorage




