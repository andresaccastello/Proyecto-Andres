document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================
    // 1. LÓGICA DEL HEADER (SCROLL) - TU CÓDIGO
    // =========================================
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("compact");
            } else {
                header.classList.remove("compact");
            }
        });
    } else {
        console.error("No se encontró la etiqueta <header>");
    }

    // =========================================
    // 2. LÓGICA DE INTERACCIÓN (MENÚ vs CARRITO)
    // =========================================
    
    // Capturamos los elementos
    const menuBtn = document.querySelector('.menu-toggle');      // Botón Hamburguesa
    const navMenu = document.querySelector('nav');               // El menú desplegable
    const carritoBtn = document.querySelector('#btn-carrito');   // Botón del Carrito
    const carritoMini = document.querySelector('#carrito-mini'); // La ventana del carrito

    // --- A. AL TOCAR EL MENÚ HAMBURGUESA ---
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita clicks fantasmas

            // 1. Alternamos el Menú
            navMenu.classList.toggle('active');
            menuBtn.classList.toggle('active'); // Anima la X

            // 2. SI EL CARRITO ESTÁ ABIERTO -> LO CERRAMOS
            if (carritoMini && carritoMini.classList.contains('visible')) {
                carritoMini.classList.remove('visible');
            }
        });
    }

    // --- B. AL TOCAR EL BOTÓN DEL CARRITO ---
    if (carritoBtn && carritoMini) {
        carritoBtn.addEventListener('click', (e) => {
            e.preventDefault();  // Evita salto de link
            e.stopPropagation(); // Evita propagación

            // 1. Alternamos el Carrito
            carritoMini.classList.toggle('visible');

            // 2. SI EL MENÚ ESTÁ ABIERTO -> LO CERRAMOS
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (menuBtn) menuBtn.classList.remove('active'); // Quitamos la X del botón
            }
        });
    }

    // --- C. (OPCIONAL) CERRAR SI CLICKEAS AFUERA ---
    document.addEventListener('click', (e) => {
        // Si el click NO fue en el carrito ni en su botón
        if (carritoMini && !carritoMini.contains(e.target) && !carritoBtn.contains(e.target)) {
            carritoMini.classList.remove('visible');
        }
        
        // Si el click NO fue en el menú ni en su botón (y la pantalla es chica)
        if (window.innerWidth <= 900) {
            if (navMenu && !navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                if (menuBtn) menuBtn.classList.remove('active');
            }
        }
    });

});

