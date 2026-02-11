const productos = [
  {
    id: 1,
    categoria: "auriculares",
    imagen: {
      src: './layout/imagenes/jbl-520-bt.webp',
      alt: 'Auriculares inalámbricos JBL 520BT'
    },
    imagenesExtra: [
      { src: './layout/imagenes/jbl-520-bt3.webp', alt: 'Auriculares JBL 520BT vista lateral' },
      { src: './layout/imagenes/jbl-520-bt2.webp', alt: 'Detalle de diadema y almohadillas JBL 520BT' },
    ],
    nombre: 'Auriculares JBL 520BT',
    descripcion: 'Sonido JBL Pure Bass, hasta 57 horas de batería y Bluetooth 5.3 estable.',
    descripcionLarga:
      'Auriculares inalámbricos de diadema con sonido JBL Pure Bass para que disfrutes tus playlists con graves más profundos y definidos. Ofrecen hasta 57 horas de batería para acompañarte entre estudio, trabajo y ocio sin preocuparte por la carga. Cuentan con Bluetooth 5.3 para una conexión rápida y estable con tu celular, notebook o tablet, además de carga rápida para recuperar horas de uso en pocos minutos. Su diseño liviano y cómodo los hace ideales para usar todos los días.',
    caracteristicas: [
      '- Conectividad Bluetooth 5.3',
      '- Hasta 57 hs de batería',
      '- Carga rápida',
      '- Sonido JBL Pure Bass',
    ],
    precio: 53.1
  },

  {
    id: 2,
    categoria: "parlantes",
    imagen: {
      src: './layout/imagenes/JBL_GO_4_HERO_BLUE_48170_x6.png',
      alt: 'Parlante portátil JBL GO4 azul'
    },
    imagenesExtra: [
      { src: './layout/imagenes/jbl go4_2.png', alt: 'Parlante JBL GO4 vista frontal' },
      { src: './layout/imagenes/jbl go4_3.png', alt: 'Parlante JBL GO4 detalle lateral' },
    ],
    nombre: 'Parlante JBL GO4',
    descripcion: 'Compacto, resistente al agua y con sonido claro y potente.',
    descripcionLarga:
      'Parlante portátil JBL GO4 ultra compacto, ideal para llevar en la mochila, cartera o en la mano. A pesar de su tamaño reducido ofrece un sonido claro y con buena potencia para música, videos o llamadas. Su diseño resistente al agua te permite usarlo sin preocupaciones cerca de la pileta, en la cocina o al aire libre. Es el compañero perfecto para estudiar, trabajar o salir con amigos sin perder tu música.',
    caracteristicas: [
      '- Diseño compacto y liviano',
      '- Resistente al agua',
      '- Sonido claro y potente',
      '- Ideal para uso portátil',
    ],
    precio: 53.2
  },

  {
    id: 3,
    categoria: "auriculares",
    imagen: {
      src: './layout/imagenes/klip-xtreme-tunexbuds-blanco.jpg',
      alt: 'Auriculares Klip Xtreme Tune Xbuds blancos'
    },
    imagenesExtra: [
      { src: './layout/imagenes/klip extreme tune xbuds_2.jpg', alt: 'Auriculares Klip Xtreme Tune Xbuds detalle' },
      { src: './layout/imagenes/klip extreme tune xbuds_3.jpg', alt: 'Klip Xtreme Tune Xbuds con estuche de carga' },
    ],
    nombre: 'Auriculares Klip Extreme Tune Xbuds',
    descripcion: 'In-ear ergonómicos con buen aislamiento de ruido y sonido nítido.',
    descripcionLarga:
      'Auriculares in-ear true wireless Klip Xtreme Tune Xbuds, pensados para quienes buscan comodidad y practicidad. Su diseño ergonómico se ajusta al oído brindando un buen aislamiento pasivo del ruido exterior, ideal para concentrarse en la música, el estudio o llamadas. Incluyen un estuche de carga compacto que facilita el transporte y extiende las horas de uso a lo largo del día. Una opción moderna y accesible para el día a día, con sonido nítido y buena presencia de graves.',
    caracteristicas: [
      '- Diseño in-ear ergonómico',
      '- Buen aislamiento pasivo del ruido',
      '- Estuche de carga compacto',
      '- Sonido nítido para música y llamadas',
    ],
    precio: 26.6
  },

  {
    id: 4,
    categoria: "auriculares",
    imagen: {
      src: './layout/imagenes/Foto de auriculares bt.jpg',
      alt: 'Auriculares Bluetooth JBL Wave Buds'
    },
    imagenesExtra: [
      { src: './layout/imagenes/jbl wave buds3.jpg', alt: 'Auriculares JBL Wave Buds en estuche de carga' },
      { src: './layout/imagenes/jbl wave buds_2.jpg', alt: 'Detalle de los auriculares JBL Wave Buds' },
    ],
    nombre: 'Auriculares Bluetooth JBL WAVE BUDS',
    descripcion: 'Hasta 32 horas de reproducción combinada y diseño compacto true wireless.',
    descripcionLarga:
      'Auriculares true wireless JBL Wave Buds con estuche de carga, ideales para acompañarte en la rutina diaria. Ofrecen hasta 32 horas de reproducción combinada entre auriculares y estuche, con un sonido potente y equilibrado para música, videos y llamadas. Su diseño compacto se ajusta bien al oído y cuenta con resistencia al agua y al polvo, perfecto para uso urbano, caminatas o viajes. La conexión Bluetooth estable te permite moverte con libertad sin cables ni enredos.',
    caracteristicas: [
      '- Hasta 32 hs de reproducción combinada',
      '- True wireless con estuche de carga',
      '- Resistencia al agua y al polvo',
      '- Conexión Bluetooth estable',
    ],
    precio: 57
  },

  {
    id: 5,
    categoria: "mouse",
    imagen: {
      src: './layout/imagenes/mouse logitech m170.jpg',
      alt: 'Mouse inalámbrico Logitech M170'
    },
    imagenesExtra: [
      { src: './layout/imagenes/logitech m170_2.jpg', alt: 'Mouse Logitech M170 vista lateral' },
      { src: './layout/imagenes/logitech m170_3.jpg', alt: 'Mouse Logitech M170 en su empaque' },
    ],
    nombre: 'Mouse Inalámbrico Logitech M170',
    descripcion: 'Mouse inalámbrico confiable para oficina, estudio y uso diario.',
    descripcionLarga:
      'El Logitech M170 es un mouse inalámbrico simple y confiable, ideal para oficina, estudio o uso en casa. Ofrece una conexión estable mediante un pequeño receptor USB que no estorba al transportar la notebook. Su diseño compacto y simétrico se adapta cómodamente a la mano, tanto de usuarios diestros como zurdos. Es liviano, fácil de llevar en la mochila y con bajo consumo de batería, perfecto para quienes necesitan un mouse práctico para todos los días.',
    caracteristicas: [
      '- Conexión inalámbrica por receptor USB',
      '- Diseño compacto y cómodo',
      '- Apto para diestros y zurdos',
      '- Ideal para oficina y estudio',
    ],
    precio: 13
  },

  {
    id: 6,
    categoria: "mouse",
    imagen: {
      src: './layout/imagenes/logitech g305.jpg',
      alt: 'Mouse gamer Logitech G305'
    },
    imagenesExtra: [
      { src: './layout/imagenes/mouse logitech g305_2.jpg', alt: 'Mouse gamer Logitech G305 vista lateral' },
      { src: './layout/imagenes/mouse logitech g305_3.jpg', alt: 'Mouse gamer Logitech G305 vista superior' },
    ],
    nombre: 'Mouse gamer Logitech G305',
    descripcion: 'Mouse gamer inalámbrico (negro) de 99 g con sensor de hasta 12.000 DPI.',
    descripcionLarga:
      'Mouse gamer inalámbrico Logitech G305 pensado para jugadores que buscan precisión y libertad de movimiento. Incorpora un sensor de hasta 12.000 DPI que permite un seguimiento preciso y rápido en distintos tipos de juegos, desde shooters hasta MOBAs. Su peso aproximado de 99 g lo hace ágil y cómodo para sesiones largas, manteniendo un diseño compacto y robusto para el setup gamer. Una excelente opción para quienes quieren un mouse gamer de calidad sin cables.',
    caracteristicas: [
      '- Sensor de hasta 12.000 DPI',
      '- Peso aproximado 99 g',
      '- Conexión inalámbrica de baja latencia',
      '- Diseño gamer compacto',
    ],
    precio: 40
  },
   // Producto 7
{
  id: 7,
  categoria: "auriculares",
  imagen: {
    src: './layout/imagenes/Xiomi_Buds_6_2.png',
    alt: 'Auriculares inalámbricos Xiaomi Redmi Buds 6 Play'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Xiomi_Buds_6_3.png', alt: 'Auriculares Xiaomi Redmi Buds 6 Play' },
    { src: './layout/imagenes/Xiomi_Buds_6_1.png', alt: 'Estuche de carga Xiaomi Redmi Buds 6 Play' },
  ],
  nombre: 'XIAOMI Redmi Buds 6 Play',
  descripcion:
    'Auriculares in-ear TWS con driver dinámico de 10 mm, Bluetooth 5.4 y hasta 36 h de batería total.',
  descripcionLarga:
    'Auriculares in-ear true wireless Xiaomi Redmi Buds 6 Play con driver dinámico de 10 mm afinado por Xiaomi Acoustic Lab para ofrecer un sonido potente y equilibrado. Cuentan con reducción de ruido con IA para llamadas claras y cinco modos de ecualización mediante la app Xiaomi Earbuds. Ofrecen hasta 7,5 horas de reproducción con una sola carga y hasta 36 horas en total junto con el estuche, además de carga rápida que brinda hasta 3 horas de música en solo 10 minutos. Incorporan Bluetooth 5.4 con soporte para Google Fast Pair, resistencia al agua IPX4 y un diseño ultraligero de 3,6 g por auricular, cómodo para uso diario prolongado.',
  caracteristicas: [
    '- Driver dinámico de 10 mm afinado por Xiaomi Acoustic Lab',
    '- Hasta 36 h de autonomía total (7,5 h por carga + estuche)',
    '- Bluetooth 5.4 con Google Fast Pair y 5 modos de EQ vía app Xiaomi Earbuds',
    '- Certificación IPX4 y diseño ultraligero de 3,6 g por auricular',
  ],
  precio: 21
},

// Producto 8
{
  id: 8,
  categoria: "parlantes",
  imagen: {
    src: './layout/imagenes/Nitro_1.webp',
    alt: 'Parlante Bluetooth KlipXtreme Nitro KBS-025'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Nitro_2.webp', alt: 'Parlante KlipXtreme Nitro vista lateral' },
    { src: './layout/imagenes/Nitro_3.webp', alt: 'Parlante KlipXtreme Nitro detalle' },
  ],
  nombre: 'Parlante KlipExtreme Nitro',
  descripcion:
    'Parlante Bluetooth portátil de 6 W RMS, IPX7 y hasta 20 h de reproducción con batería de 2000 mAh.',
  descripcionLarga:
    'El KlipXtreme Nitro KBS-025 es un parlante inalámbrico portátil con salida de 6 W RMS, parlante de 50 mm y radiador pasivo para reforzar los graves. Integra conectividad Bluetooth 5.0 y función TWS, que permite vincular dos unidades Nitro para obtener sonido estéreo inalámbrico. Su batería interna de ion-litio de 2000 mAh brinda hasta 20 horas de reproducción a volumen moderado, con un tiempo de carga aproximado de 3 a 4 horas mediante puerto micro-USB. El diseño compacto con certificación IPX7 lo hace resistente al agua (inmersión temporal), ideal para pileta, camping o exterior, e incluye micrófono manos libres para llamadas.',
  caracteristicas: [
    '- Potencia de salida 6 W RMS con driver de 50 mm y radiador pasivo',
    '- Batería de 2000 mAh con hasta 20 h de reproducción (aprox. a volumen medio)',
    '- Bluetooth 5.0 con función TWS para enlazar dos Nitro en estéreo',
    '- Certificación IPX7 y diseño portátil con micrófono manos libres integrado',
  ],
  precio: 24.7
},

// Producto 9
{
  id: 9,
  categoria: "Notebooks",
  imagen: {
    src: './layout/imagenes/Lenovo_R3.webp',
    alt: 'Notebook Lenovo con Ryzen 3, 16 GB de RAM y SSD 512 GB'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Lenovo_R3_2.avif', alt: 'Notebook Lenovo vista lateral' },
    { src: './layout/imagenes/Lenovo_R3_3.avif', alt: 'Teclado y puertos de notebook Lenovo' },
  ],
  nombre: 'Notebook Lenovo Ryzen 3, 16Gb de RAM, 512Gb SSD',
  descripcion:
    'Notebook Lenovo 15,6" con AMD Ryzen 3, 16 GB de RAM y SSD NVMe de 512 GB, ideal para oficina y estudio.',
  descripcionLarga:
    'Notebook Lenovo de 15,6" equipada con procesador AMD Ryzen 3 de 4 núcleos y 8 hilos, pensada para tareas de oficina, estudio y uso diario. Incorpora 16 GB de memoria (tipo DDR4 o LPDDR5 según configuración) para un trabajo fluido con varias aplicaciones abiertas y una unidad SSD M.2 PCIe NVMe de 512 GB que acelera el arranque del sistema y la carga de programas. La pantalla de 15,6" con resolución Full HD y acabado antirreflejo ofrece una buena área de trabajo. Incluye conectividad Wi-Fi de alta velocidad, Bluetooth, puertos USB (incluyendo USB-C en ciertos modelos), HDMI y conector de audio, además de teclado en español con bloque numérico, ideal para tareas administrativas.',
  caracteristicas: [
    '- Procesador AMD Ryzen 3 de 4 núcleos / 8 hilos para uso diario y oficina',
    '- 16 GB de RAM y SSD M.2 PCIe NVMe de 512 GB para mejor rendimiento',
    '- Pantalla de 15,6" con resolución Full HD y acabado antirreflejo',
    '- Conectividad Wi-Fi, Bluetooth y puertos USB/HDMI para periféricos y monitores',
  ],
  precio: 583
},

// Producto 10
{
  id: 10,
  categoria: "Notebooks",
  imagen: {
    src: './layout/imagenes/Hp_r3_1.avif',
    alt: 'Notebook HP con Ryzen 3, 8 GB de RAM y SSD 256 GB'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Hp_R3.avif', alt: 'Notebook HP vista lateral' },
    { src: './layout/imagenes/Hp_R3_2.avif', alt: 'Teclado y puertos de notebook HP' },
  ],
  nombre: 'Notebook HP Ryzen 3, 8Gb de RAM, 256Gb SSD',
  descripcion:
    'Notebook HP 15,6" con procesador AMD Ryzen 3, 8 GB de RAM y SSD de 256 GB, ideal para tareas cotidianas.',
  descripcionLarga:
    'Notebook HP de 15,6" equipada con procesador AMD Ryzen 3, 8 GB de memoria RAM y unidad SSD de 256 GB, pensada para tareas cotidianas como oficina, clases virtuales, navegación web y multimedia. El SSD acelera el inicio de Windows y la apertura de programas frente a los discos mecánicos tradicionales. La pantalla de 15,6" con acabado antirreflejo permite trabajar con comodidad en ambientes iluminados. Ofrece conectividad Wi-Fi de alta velocidad, Bluetooth, puertos USB, HDMI y salida de audio, además de teclado en español con bloque numérico, ideal para quienes cargan datos o trabajan con planillas.',
  caracteristicas: [
    '- Procesador AMD Ryzen 3 ideal para estudio y uso diario',
    '- 8 GB de RAM y SSD de 256 GB para un sistema más rápido y estable',
    '- Pantalla de 15,6" con acabado antirreflejo para reducir reflejos',
    '- Conectividad Wi-Fi, Bluetooth y puertos USB/HDMI para periféricos externos',
  ],
  precio: 540
},

// Producto 11
{
  id: 11,
  categoria: "Teclados",
  imagen: {
    src: './layout/imagenes/Logitech_m270_1.webp',
    alt: 'Combo teclado y mouse inalámbrico Logitech MK270'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Logitech_m270_2.webp', alt: 'Teclado inalámbrico Logitech MK270' },
    { src: './layout/imagenes/Logitech_m270_3.webp', alt: 'Mouse inalámbrico Logitech MK270' },
  ],
  nombre: 'Teclado + mouse Logitech MK270',
  descripcion:
    'Combo inalámbrico 2,4 GHz con teclado full size y mouse óptico, alcance de hasta 10 m y larga autonomía.',
  descripcionLarga:
    'El Logitech MK270 es un combo de teclado y mouse inalámbricos diseñado para oficina y hogar. Utiliza una conexión inalámbrica de 2,4 GHz con nano receptor USB, con alcance de hasta 10 metros en condiciones ideales. El teclado de tamaño completo incluye teclado numérico y teclas de acceso rápido para funciones multimedia y del sistema. El mouse óptico compacto ofrece seguimiento preciso para tareas diarias y es cómodo para uso prolongado. Gracias a la gestión eficiente de energía, la batería del teclado puede durar hasta 36 meses y la del mouse hasta 12 meses, dependiendo del uso.',
  caracteristicas: [
    '- Conectividad inalámbrica 2,4 GHz con nano receptor USB y alcance de hasta 10 m',
    '- Teclado de tamaño completo con teclado numérico y teclas de acceso rápido',
    '- Mouse óptico inalámbrico compacto para uso diario',
    '- Batería de larga duración: hasta 36 meses en teclado y 12 meses en mouse (según uso)',
  ],
  precio: 21
},

// Producto 12
{
  id: 12,
  categoria: "Teclados",
  imagen: {
    src: './layout/imagenes/Logitech_Mk295.webp',
    alt: 'Combo teclado y mouse inalámbrico Logitech MK295 Silent'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Logitech_mk295_2.webp', alt: 'Teclado inalámbrico Logitech MK295 Silent' },
    { src: './layout/imagenes/Logitech_mk295_3.webp', alt: 'Mouse inalámbrico Logitech MK295 Silent' },
  ],
  nombre: 'Teclado + mouse Logitech MK295',
  descripcion:
    'Combo Logitech MK295 Silent con tecnología SilentTouch, conexión 2,4 GHz y hasta 36/18 meses de batería.',
  descripcionLarga:
    'El Logitech MK295 es un combo de teclado y mouse inalámbricos con tecnología SilentTouch, que reduce en más de un 90% el ruido de tecleo y clics respecto al clásico MK270, manteniendo una sensación similar al escribir y hacer clic. Utiliza una conexión inalámbrica de 2,4 GHz con nano receptor USB y un alcance de hasta 10 m. El teclado de tamaño completo incluye teclado numérico, diseño resistente a salpicaduras y patas ajustables, además de ocho accesos directos para funciones multimedia y del sistema. El mouse óptico compacto y ambidiestro ofrece seguimiento preciso y clics silenciosos. La autonomía es de hasta 36 meses en el teclado (2 pilas AAA) y hasta 18 meses en el mouse (1 pila AA), según el uso.',
  caracteristicas: [
    '- Tecnología SilentTouch que reduce en más de 90% el ruido de teclado y mouse',
    '- Conectividad inalámbrica 2,4 GHz con nano receptor USB y alcance de hasta 10 m',
    '- Teclado full size resistente a salpicaduras con 8 atajos multimedia y numpad',
    '- Autonomía prolongada: hasta 36 meses en teclado y 18 meses en mouse (según uso)',
  ],
  precio: 32
},


 {
  id: 13,
  categoria: "Relojes",
  imagen: {
    src: './layout/imagenes/Xiomi_Smart_1.webp',
    alt: 'Xiaomi Smart Band 9 Active'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Xiomi_Smart_2.webp', alt: 'Xiaomi Smart Band 9 Active vista frontal' },
    { src: './layout/imagenes/Xiomi_Smart_3.webp', alt: 'Xiaomi Smart Band 9 Active con correa' },
  ],
  nombre: 'Xiaomi Smart Band 9 Active',
  descripcion:
    'Smart band con pantalla TFT 1,47", batería de hasta 18 días, monitoreo de salud 24/7 y resistencia al agua 5 ATM.',
  descripcionLarga:
    'La Xiaomi Smart Band 9 Active es una pulsera inteligente pensada para seguimiento diario de actividad y salud. Incorpora una pantalla táctil TFT de 1,47" a color con resolución de 172 × 320 píxeles y brillo suficiente para uso en interior y exterior. Su batería de 300 mAh ofrece hasta aproximadamente 18 días de autonomía en uso típico gracias a sensores de bajo consumo y algoritmos optimizados. Cuenta con sensor PPG para monitoreo continuo de frecuencia cardíaca, medición de oxígeno en sangre (SpO₂), seguimiento de sueño, estrés y pasos, además de más de 50 modos deportivos. Es compatible con Android 8.0 / iOS 12 o superior, se conecta vía Bluetooth 5.3 BLE y posee resistencia al agua 5 ATM (50 m), por lo que puede utilizarse para natación en piscina y actividades cotidianas sin preocupaciones.',
  caracteristicas: [
    '- Pantalla TFT táctil de 1,47" a color (172 × 320 píxeles)',
    '- Batería de 300 mAh con autonomía de hasta 18 días de uso típico',
    '- Sensores PPG y acelerómetro para frecuencia cardíaca, SpO₂, sueño y 50+ modos deportivos',
    '- Resistencia al agua 5 ATM (50 m) y conectividad Bluetooth 5.3 BLE compatible con Android/iOS',
  ],
  precio: 38.2
},

{
  id: 14,
  categoria: "Relojes",
  imagen: {
    src: './layout/imagenes/Scykei_Movis_1.webp',
    alt: 'Smartwatch Scykei Movis by Calvin Klein con pantalla AMOLED curva'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Scykei_Movis_2.jpg', alt: 'Smartwatch Scykei Movis vista lateral' },
    { src: './layout/imagenes/Scykei_Movis_3.jpg', alt: 'Smartwatch Scykei Movis con correa de cuero' },
  ],
  nombre: 'Reloj Scykei Movis by Calvin Klein',
  descripcion:
    'Smartwatch premium con pantalla AMOLED curva 2,1", GPS doble banda, Bluetooth 5.3 y resistencia al agua 5 ATM.',
  descripcionLarga:
    'El Scykei Movis by Calvin Klein es un smartwatch de gama alta que combina diseño de moda con prestaciones avanzadas. Incorpora una pantalla AMOLED curva de 2,1" considerada de las más grandes en formato curvo, con frecuencia de actualización de 60 Hz y modo Always On Display para ver la hora y notificaciones de un vistazo. Su caja de titanio con bisel plateado y correa de cuero aportan un aspecto elegante y robusto. Integra Bluetooth 5.3 para llamadas claras desde la muñeca, GPS de doble banda para rutas más precisas, más de 150 modos deportivos y monitoreo 24/7 de frecuencia cardíaca, sueño, estrés y otros parámetros de salud. Dispone de resistencia al agua 5 ATM, lo que permite su uso bajo lluvia, en la ducha o natación superficial, y se sincroniza con el smartphone para notificaciones, control de música y más.',
  caracteristicas: [
    '- Pantalla AMOLED curva de 2,1" con refresco de 60 Hz y modo Always On Display',
    '- Caja de titanio con bisel plateado y correa de cuero, diseño premium Scykei by Calvin Klein',
    '- Bluetooth 5.3 para llamadas desde la muñeca y más de 150 modos deportivos con monitoreo 24/7',
    '- GPS de doble banda integrado y resistencia al agua 5 ATM para uso diario y deportivo',
  ],
  precio: 98
},
{
  id: 15,
  categoria: "Relojes",
  imagen: {
    src: './layout/imagenes/Scykei_Civis1.jpg',
    alt: 'Smartwatch Scykei Civis by Calvin Klein con pantalla AMOLED curva'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Scykei_Civis_2.webp', alt: 'Smartwatch Scykei Civis vista lateral' },
    { src: './layout/imagenes/Scykei_Civis_3.webp', alt: 'Smartwatch Scykei Civis con correa de cuero' },
  ],
  nombre: 'Reloj Scykei Civis by Calvin Klein',
  descripcion:
  'Smartwatch Scykei Civis by Calvin Klein con pantalla AMOLED curva 2,1" 60Hz, llamadas Bluetooth 5.2, Always-On Display y resistencia IP68.',
descripcionLarga:
  'El Scykei Civis by Calvin Klein es un smartwatch de estilo premium que apunta a una experiencia visual grande y moderna: incorpora pantalla AMOLED curva de 2,1" con refresco de 60Hz (410×502) para ver contenido y notificaciones con buena nitidez, además de Always-On Display para tener la hora siempre visible. Permite realizar y recibir llamadas desde la muñeca mediante Bluetooth 5.2 (con micrófono integrado) y ofrece una amplia variedad de esferas para personalizar el look. En resistencia, cuenta con certificación IP68 para el uso cotidiano (lavado de manos, lluvia, sudor y piscina), con la recomendación de evitar aguas abiertas. Su batería es de 300mAh, con carga en menos de 2,5 horas y una autonomía típica de 7 a 10 días (y modo ahorro de hasta 55 días, según uso). Es compatible con Android (5+), iOS (9+) y se vincula mediante la app CK Wear OS.',
caracteristicas: [
  '- Pantalla AMOLED curva 2,1" táctil, 60Hz y resolución 410×502',
  '- Llamadas desde la muñeca por Bluetooth 5.2 + micrófono integrado',
  '- Resistencia al agua/polvo IP68 (apta para piscina; no recomendada para aguas abiertas)',
  '- Batería 300mAh: carga <2,5 h, uso normal 7–10 días (modo ahorro hasta 55 días)'
],

  precio: 53.6
},

{
  id: 16,
  categoria: "PC",
  imagen: {
    src: './layout/imagenes/PC.webp',
    alt: 'PC escritorio'
  },
  imagenesExtra: [
    { src: './layout/imagenes/PC2.webp', alt: 'PC escritorio' },
    { src: './layout/imagenes/PC3.webp', alt: 'PC escritorio' },
  ],
  nombre: 'PC de escritorio R3, 8GB de Ram, 256 gb de disco',
descripcion:
  'PC de escritorio con Ryzen 3, 8GB de RAM y SSD de 256GB: rápida para estudio, oficina y uso diario.',
descripcionLarga:
  'PC pensada para el día a día: arranca rápido gracias al SSD y responde bien en tareas típicas como navegación, Office, clases online, gestión y streaming. Con 8GB de RAM tenés una experiencia fluida en multitarea liviana, y además es una base ideal para ampliar a futuro (más RAM y/o más almacenamiento).',
caracteristicas: [
  '- Procesador AMD Ryzen 3 (según disponibilidad)',
  '- 8GB de memoria RAM (expandible)',
  '- SSD 256GB para arranque y carga rápida de programas',
  '- Ideal para Office, estudio, navegación, videollamadas y gestión',
],
  precio: 310
},

{
  id: 17,
  categoria: "parlantes",
  imagen: {
    src: './layout/imagenes/jbl flip6_1.jpg',
    alt: 'Parlante jbl flip 6'
  },
  imagenesExtra: [
    { src: './layout/imagenes/jbl flip6_2.jpg', alt: 'Parlante jbl flip 6' },
    { src: './layout/imagenes/jbl flip6_3.jpg', alt: 'Parlante jbl flip 6' },
  ],
  nombre: 'Parlante JBL flip 6 negro',
descripcion:
  'Parlante portátil con sonido JBL Pro, Bluetooth 5.1, hasta 12 h de batería y resistencia IP67 (agua y polvo).',
descripcionLarga:
  'El JBL Flip 6 es un parlante portátil pensado para llevar a todos lados: ofrece un sonido potente y claro gracias a su sistema de 2 vías, con graves firmes y agudos definidos. Su diseño resistente IP67 te deja usarlo sin miedo en exteriores, y con hasta 12 horas de reproducción es ideal para juntadas, viajes o días de pileta. Además, podés ecualizar y actualizar desde la app JBL Portable y vincular varios parlantes compatibles para más volumen con PartyBoost.',
caracteristicas: [
  '- Bluetooth 5.1 y conexión inalámbrica fácil con celular o tablet',
  '- Hasta 12 horas de reproducción (según volumen y uso)',
  '- Resistencia IP67: a prueba de agua y polvo para uso outdoor',
  '- PartyBoost: enlazá parlantes compatibles para más sonido / estéreo',
],

  precio: 152.3
},

{
  id: 18,
  categoria: "parlantes",
  imagen: {
    src: './layout/imagenes/Jbl Clip 5_1.png',
    alt: 'Parlante jbl CLIP 5'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Jbl Clip 5_2.png', alt: 'Parlante jbl CLIP 5' },
    { src: './layout/imagenes/Jbl Clip 5_3.png', alt: 'Parlante jbl CLIP 5' },
  ],
  nombre: 'Parlante JBL CLIP 5',
  descripcion:
  'Parlante ultra portátil con mosquetón integrado, Bluetooth 5.3, resistencia IP67 y hasta 12 h + Playtime Boost.',
descripcionLarga:
  'El JBL Clip 5 está hecho para llevar música a todos lados: es compacto, suena fuerte para el tamaño y trae un mosquetón integrado para engancharlo en mochila, bici o bolso. Es resistente al agua y al polvo (IP67), y ofrece hasta 12 horas de reproducción, con opción Playtime Boost para estirar aún más la batería. También permite conexiones entre parlantes compatibles para ampliar el sonido y se ajusta desde la app JBL Portable.',
caracteristicas: [
  '- Diseño ultra portátil con mosquetón integrado para colgarlo donde quieras',
  '- Hasta 12 h de batería + hasta 3 h con Playtime Boost (según uso)',
  '- Resistencia IP67: agua y polvo para exteriores',
  '- Conexión multi-parlante compatible (Auracast) y app JBL Portable',
],

  precio: 75.2
},

{
  id: 19,
  categoria: "mouse",
  imagen: {
    src: './layout/imagenes/LOGITECH_M196_1.webp',
    alt: 'Mouse logitech m196'
  },
  imagenesExtra: [
    { src: './layout/imagenes/LOGITECH_M196_2.webp', alt: 'Mouse logitech m196' },
    { src: './layout/imagenes/LOGITECH_M196_3.webp', alt: 'Mouse logitech m196' },
  ],
  nombre: 'Mouse Logitech M196 grafito',
 descripcion:
  'Mouse Bluetooth inalámbrico compacto y confiable, con hasta 12 meses de batería y diseño cómodo para uso diario.',
descripcionLarga:
  'El Logitech M196 es un mouse Bluetooth simple y práctico: se empareja en segundos, libera el puerto USB (sin receptor) y es ideal para notebooks, tablets y PCs compatibles. Su forma compacta y contorneada es cómoda para trabajar o estudiar, y su batería de larga duración te permite olvidarte del cambio constante de pilas.',
caracteristicas: [
  '- Conexión Bluetooth: sin dongle, empareja en segundos',
  '- Hasta 12 meses de duración de batería (según uso)',
  '- Diseño compacto y cómodo para escritorio o notebook',
  '- Seguimiento suave para trabajo, estudio y navegación',
],

  precio: 12.35
},


{
  id: 20,
  categoria: "impresoras",
  imagen: {
    src: './layout/imagenes/HP_WIFI.avif',
    alt: 'Impresora Hp M111 WIFI'
  },
  imagenesExtra: [
    { src: './layout/imagenes/HP_WIFI2.avif', alt: 'Impresora Hp M111 WIFI' },
    { src: './layout/imagenes/HP_WIFI3.avif', alt: 'Impresora Hp M111 WIFI' },
  ],
  nombre: 'Impresora Hp M111 WIFI',
descripcion:
  'Impresora láser monocromática compacta con Wi-Fi y USB, hasta 20 ppm y calidad de hasta 600 x 600 dpi.',
descripcionLarga:
  'La HP LaserJet M111w es una impresora láser blanco y negro pensada para hogar u oficina: ocupa poco espacio, imprime rápido y se configura fácil. Podés imprimir por Wi-Fi y también por USB, y con la app de HP tenés una instalación guiada y funciones prácticas desde el celular. Soporta impresión móvil (AirPrint, Mopria y Wi-Fi Direct) y utiliza tóner HP 150A (W1500A).',
caracteristicas: [
  '- Conectividad: Wi-Fi 2,4 GHz (802.11 b/g/n) + USB 2.0',
  '- Impresión móvil: AirPrint, Mopria y Wi-Fi Direct',
  '- Bandeja de entrada 150 hojas y salida 100 hojas',
  '- Tóner compatible: HP 150A (W1500A)',
],

  precio: 163.2
},

{
  id: 21,
  categoria: "monitores",
  imagen: {
    src: './layout/imagenes/Monitor asus_vp227hf.png',
    alt: 'Monitor ASUS, 22", 100HZ'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Monitor asus_vp227hf_3.png', alt: 'Monitor ASUS, "22, 100HZ' },
    { src: './layout/imagenes/Monitor asus_vp227hf_2.png', alt: 'Monitor ASUS, "22, 100HZ' },
  ],
  nombre: 'Monitor ASUS, "22, 100HZ',
descripcion:
  'Monitor ASUS VP227HF de 21,45" Full HD con 100Hz, 1ms MPRT y Adaptive-Sync para una imagen más fluida.',
descripcionLarga:
  'El ASUS VP227HF es una opción ideal si querés un monitor Full HD para uso diario y gaming casual: su refresco de 100Hz mejora la fluidez en movimiento, y el 1ms MPRT ayuda a reducir el desenfoque en escenas rápidas. Además incluye Adaptive-Sync para minimizar cortes/tearing cuando la PC varía los FPS, y tecnologías de cuidado visual para sesiones largas.',
caracteristicas: [
  '- Pantalla 21,45" (22") Full HD 1920×1080',
  '- Tasa de refresco 100Hz (SmoothMotion) para mayor fluidez',
  '- 1ms MPRT para reducir motion blur',
  '- Adaptive-Sync para juego más estable (menos tearing)'
],

  precio: 100
},


{
  id: 22,
  categoria: "monitores",
  imagen: {
    src: './layout/imagenes/Monitor_msi_255f_e20.png',
    alt: 'Monitor MSI, "24, 200HZ'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Monitor_msi_255f_e20_2.png', alt: 'Monitor MSI, "24, 200HZ' },
    { src: './layout/imagenes/Monitor_msi_255f_e20_3.png', alt: 'Monitor MSI, "24, 200HZ' },
  ],
  nombre: 'Monitor MSI, 25", 200HZ',
 descripcion:
  'Monitor gamer MSI MAG 255F E20 de 24,5" Rapid IPS Full HD con 200Hz, 0,5ms (GtG min) y HDR Ready.',
descripcionLarga:
  'El MSI MAG 255F E20 apunta a juego competitivo: combina un panel Rapid IPS con 200Hz para una sensación ultra fluida y respuesta rápida. Su resolución Full HD es ideal para altos FPS, y el tiempo de respuesta mínimo ayuda a reducir el ghosting. Además, al ser HDR Ready, mejora contraste y detalles en escenas con mucha diferencia de luces y sombras.',
caracteristicas: [
  '- Panel Rapid IPS de 24,5" (24.5") con resolución Full HD 1920×1080',
  '- Refresco de 200Hz para máxima fluidez en juegos',
  '- Tiempo de respuesta 0,5ms (GtG, mínimo) para menos ghosting',
  '- Ideal para shooters competitivos y eSports',
],

  precio: 130
},


{
  id: 23,
  categoria: "volantes",
  imagen: {
    src: './layout/imagenes/Volante logitech_ECO_1.webp',
    alt: 'VOLANTE LOGITECH G29 DRIVING FORCE P/ PC - PLAY3/4'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Volante logitech_ECO_2.webp', alt: 'VOLANTE LOGITECH G29 DRIVING FORCE P/ PC - PLAY3/4' },
    { src: './layout/imagenes/Volante logitech_ECO_3.webp', alt: 'VOLANTE LOGITECH G29 DRIVING FORCE P/ PC - PLAY3/4' },
  ],
  nombre: 'VOLANTE LOGITECH G29 DRIVING FORCE P/ PC - PLAY3/4',
descripcion:
  'Volante Logitech G29 con Force Feedback de doble motor, giro de 900° y pedalera para sim racing en PC y PlayStation.',
descripcionLarga:
  'El Logitech G29 Driving Force es un set de simulación pensado para sentir la conducción de forma realista: su Force Feedback de doble motor transmite vibraciones, pérdidas de tracción y el “peso” del auto en curvas. El giro de 900° permite movimientos más naturales, y su construcción premium suma palancas metálicas y un volante con terminación tipo cuero para mayor control y durabilidad. Ideal para Gran Turismo, F1, Assetto Corsa y simuladores compatibles.',
caracteristicas: [
  '- Force Feedback de doble motor para sensaciones más realistas',
  '- Engranajes helicoidales para dirección más suave y precisa',
  '- Palancas de cambio de acero inoxidable',
  '- Pedalera incluida para acelerar y frenar con mejor control',
],

  precio: 451
},


{
  id: 24,
  categoria: "volantes",
  imagen: {
    src: './layout/imagenes/Volante logitech_1.webp',
    alt: 'VOLANTE LOGITECH G923 DRIVING FORCE P/PC PS Y XBOX'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Volante logitech_2.webp', alt: 'VOLANTE LOGITECH G923 DRIVING FORCE P/PC PS Y XBOX' },
    { src: './layout/imagenes/Volante logitech_3.webp', alt: 'VOLANTE LOGITECH G923 DRIVING FORCE P/PC PS Y XBOX' },
  ],
  nombre: 'VOLANTE LOGITECH G923 DRIVING FORCE P/PC PS Y XBOX',
descripcion:
  'Volante Logitech G923 con TRUEFORCE, Force Feedback de doble motor, giro de 900° y pedalera con freno no lineal.',
descripcionLarga:
  'El Logitech G923 lleva el sim racing un paso más allá con TRUEFORCE, que agrega una capa de respuesta más detallada en juegos compatibles. Mantiene un giro de 900° para manejo realista y un Force Feedback de doble motor para sentir el auto en curvas, pianos y cambios de superficie. La pedalera suma un freno no lineal para mejorar el control en frenadas. (Compatibilidad exacta según versión: PlayStation o Xbox, ambas para PC).',
caracteristicas: [
  '- Dual-Motor Force Feedback con TRUEFORCE (en juegos compatibles)',
  '- Pedalera con freno no lineal para mejor control de frenado',
  '- Sistema de agarre para alfombra y base estable para jugar',
  '- Protección contra sobrecalentamiento',
],

  precio: 534
},

{
  id: 25,
  categoria: "impresoras",
  imagen: {
    src: './layout/imagenes/HP_WIFI.avif',
    alt: 'Impresora Hp M111 '
  },
  imagenesExtra: [
    { src: './layout/imagenes/HP_WIFI2.avif', alt: 'Impresora Hp M111 ' },
    { src: './layout/imagenes/HP_WIFI3.avif', alt: 'Impresora Hp M111 ' },
  ],
  nombre: 'Impresora Hp M111 ',
descripcion:
  'Impresora láser monocromática compacta con USB, hasta 20 ppm y calidad de hasta 600 x 600 dpi.',
descripcionLarga:
  'La HP LaserJet M111 es una impresora láser blanco y negro pensada para hogar u oficina: ocupa poco espacio, imprime rápido y se configura fácil. Podés imprimir por Wi-Fi y también por USB, y con la app de HP tenés una instalación guiada y funciones prácticas desde el celular. Soporta impresión móvil (AirPrint, Mopria y Wi-Fi Direct) y utiliza tóner HP 150A (W1500A).',
caracteristicas: [
  '- Conectividad: Wi-Fi 2,4 GHz (802.11 b/g/n) + USB 2.0',
  '- Impresión móvil: AirPrint, Mopria y Wi-Fi Direct',
  '- Bandeja de entrada 150 hojas y salida 100 hojas',
  '- Tóner compatible: HP 150A (W1500A)',
],

  precio: 122.7
},


{
  id: 26,
  categoria: "Notebooks",
  imagen: {
    src: './layout/imagenes/NotebookCX_R3_1.jpg',
    alt: 'Notebook CX con Ryzen 3, 8 GB de RAM y SSD 256 GB'
  },
  imagenesExtra: [
    { src: './layout/imagenes/NotebookCX_R3_2.jpg', alt: 'Notebook HP vista lateral' },
    { src: './layout/imagenes/NotebookCX_R3_3.jpg', alt: 'Teclado y puertos de notebook HP' },
  ],
  nombre: 'Notebook CX Ryzen 3, 8Gb de RAM, 256Gb SSD',
  descripcion:
    'Notebook CX 15,6" con procesador AMD Ryzen 3, 8 GB de RAM y SSD de 256 GB, ideal para tareas cotidianas.',
  descripcionLarga:
    'Notebook CX de 15,6" equipada con procesador AMD Ryzen 3, 8 GB de memoria RAM y unidad SSD de 256 GB, pensada para tareas cotidianas como oficina, clases virtuales, navegación web y multimedia. El SSD acelera el inicio de Windows y la apertura de programas frente a los discos mecánicos tradicionales. La pantalla de 15,6" con acabado antirreflejo permite trabajar con comodidad en ambientes iluminados. Ofrece conectividad Wi-Fi de alta velocidad, Bluetooth, puertos USB, HDMI y salida de audio, además de teclado en español con bloque numérico, ideal para quienes cargan datos o trabajan con planillas.',
  caracteristicas: [
    '- Procesador AMD Ryzen 3 ideal para estudio y uso diario',
    '- 8 GB de RAM y SSD de 256 GB para un sistema más rápido y estable',
    '- Pantalla de 15,6" con acabado antirreflejo para reducir reflejos',
    '- Conectividad Wi-Fi, Bluetooth y puertos USB/HDMI para periféricos externos',
  ],
  precio: 438
},

{
  id: 27,
  categoria: "monitores",
  imagen: {
    src: './layout/imagenes/Monitor_P_19.webp',
    alt: 'Monitor Performance "19'
  },
  /*imagenesExtra: [
    { src: './layout/imagenes/Monitor_msi_255f_e20_2.png', alt: 'Monitor Performance "19 60Hz' },
    { src: './layout/imagenes/Monitor_msi_255f_e20_3.png', alt: 'Monitor Performance "19 60Hz' },
  ],*/
  nombre: 'Monitor Performance "19 60Hz',
 descripcion:
  'Monitor gamer MSI MAG 255F E20 de 24,5" Rapid IPS Full HD con 200Hz, 0,5ms (GtG min) y HDR Ready.',
descripcionLarga:
  'El MSI MAG 255F E20 apunta a juego competitivo: combina un panel Rapid IPS con 200Hz para una sensación ultra fluida y respuesta rápida. Su resolución Full HD es ideal para altos FPS, y el tiempo de respuesta mínimo ayuda a reducir el ghosting. Además, al ser HDR Ready, mejora contraste y detalles en escenas con mucha diferencia de luces y sombras.',
caracteristicas: [
  '- Panel Rapid IPS de 24,5" (24.5") con resolución Full HD 1920×1080',
  '- Refresco de 200Hz para máxima fluidez en juegos',
  '- Tiempo de respuesta 0,5ms (GtG, mínimo) para menos ghosting',
  '- Ideal para shooters competitivos y eSports',
],

  precio: 56
},

{
  id: 28,
  categoria: "tablets",
  imagen: {
    src: './layout/imagenes/Tablet_Dilan_1.webp',
    alt: 'TABLET 10 DIALN X10 4G-64G HD+ AND14 FUNDA S/TRAFO'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Tablet_Dilan_2.webp', alt: 'TABLET 10 DIALN' },
    { src: './layout/imagenes/Tablet_Dilan_3.webp', alt: 'TABLET 10 DIALN' },
  ],
  nombre: 'TABLET 10 DIALN',
 descripcion:
  'Monitor gamer MSI MAG 255F E20 de 24,5" Rapid IPS Full HD con 200Hz, 0,5ms (GtG min) y HDR Ready.',
descripcionLarga:
  'El MSI MAG 255F E20 apunta a juego competitivo: combina un panel Rapid IPS con 200Hz para una sensación ultra fluida y respuesta rápida. Su resolución Full HD es ideal para altos FPS, y el tiempo de respuesta mínimo ayuda a reducir el ghosting. Además, al ser HDR Ready, mejora contraste y detalles en escenas con mucha diferencia de luces y sombras.',
caracteristicas: [
  '- Panel Rapid IPS de 24,5" (24.5") con resolución Full HD 1920×1080',
  '- Refresco de 200Hz para máxima fluidez en juegos',
  '- Tiempo de respuesta 0,5ms (GtG, mínimo) para menos ghosting',
  '- Ideal para shooters competitivos y eSports',
],

  precio: 93.8
},

{
  id: 29,
  categoria: "tablets",
  imagen: {
    src: './layout/imagenes/Tablet_Alca_1.webp',
    alt: 'TABLET 10 ALCATEL 2GB 32GB DUAL CAMARA'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Tablet_Alca_2.webp', alt: 'TABLET 10 ALCATEL 2GB 32GB DUAL CAMARA' },
    { src: './layout/imagenes/Tablet_Alca_3.webp', alt: 'TABLET 10 ALCATEL 2GB 32GB DUAL CAMARA' },
  ],
  nombre: 'TABLET 10 ALCATEL',
 descripcion:
  'Monitor gamer MSI MAG 255F E20 de 24,5" Rapid IPS Full HD con 200Hz, 0,5ms (GtG min) y HDR Ready.',
descripcionLarga:
  'El MSI MAG 255F E20 apunta a juego competitivo: combina un panel Rapid IPS con 200Hz para una sensación ultra fluida y respuesta rápida. Su resolución Full HD es ideal para altos FPS, y el tiempo de respuesta mínimo ayuda a reducir el ghosting. Además, al ser HDR Ready, mejora contraste y detalles en escenas con mucha diferencia de luces y sombras.',
caracteristicas: [
  '- Panel Rapid IPS de 24,5" (24.5") con resolución Full HD 1920×1080',
  '- Refresco de 200Hz para máxima fluidez en juegos',
  '- Tiempo de respuesta 0,5ms (GtG, mínimo) para menos ghosting',
  '- Ideal para shooters competitivos y eSports',
],

  precio: 85.7
},

{
  id: 30,
  categoria: "Relojes",
  imagen: {
    src: './layout/imagenes/Smart-Watch-Performance-P85_1.webp',
    alt: 'SMART WATCH PERFORMANCE P85 BLACK'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Smart-Watch-Performance-P85_2.webp', alt: 'SMART WATCH PERFORMANCE P85 BLACK' },
    { src: './layout/imagenes/Smart-Watch-Performance-P85_3.webp', alt: 'SMART WATCH PERFORMANCE P85 BLACK' },
  ],
  nombre: 'SMART WATCH PERFORMANCE P85 BLACK',
  descripcion:
  'Smartwatch Scykei Civis by Calvin Klein con pantalla AMOLED curva 2,1" 60Hz, llamadas Bluetooth 5.2, Always-On Display y resistencia IP68.',
descripcionLarga:
  'El Scykei Civis by Calvin Klein es un smartwatch de estilo premium que apunta a una experiencia visual grande y moderna: incorpora pantalla AMOLED curva de 2,1" con refresco de 60Hz (410×502) para ver contenido y notificaciones con buena nitidez, además de Always-On Display para tener la hora siempre visible. Permite realizar y recibir llamadas desde la muñeca mediante Bluetooth 5.2 (con micrófono integrado) y ofrece una amplia variedad de esferas para personalizar el look. En resistencia, cuenta con certificación IP68 para el uso cotidiano (lavado de manos, lluvia, sudor y piscina), con la recomendación de evitar aguas abiertas. Su batería es de 300mAh, con carga en menos de 2,5 horas y una autonomía típica de 7 a 10 días (y modo ahorro de hasta 55 días, según uso). Es compatible con Android (5+), iOS (9+) y se vincula mediante la app CK Wear OS.',
caracteristicas: [
  '- Pantalla AMOLED curva 2,1" táctil, 60Hz y resolución 410×502',
  '- Llamadas desde la muñeca por Bluetooth 5.2 + micrófono integrado',
  '- Resistencia al agua/polvo IP68 (apta para piscina; no recomendada para aguas abiertas)',
  '- Batería 300mAh: carga <2,5 h, uso normal 7–10 días (modo ahorro hasta 55 días)'
],

  precio: 27.5
},

{
  id: 31,
  categoria: "Relojes",
  imagen: {
    src: './layout/imagenes/Smart_Kies_1.jpg',
    alt: 'SMART WATCH KIESLECT KS SMART CALLING'
  },
  imagenesExtra: [
    { src: './layout/imagenes/Smart_Kies_2.jpg', alt: 'SMART WATCH KIESLECT KS SMART CALLING' },
    { src: './layout/imagenes/Smart_Kies_3.jpg', alt: 'SMART WATCH KIESLECT KS SMART CALLING' },
  ],
  nombre: 'SMART WATCH KIESLECT KS SMART CALLING',
  descripcion:
  'Smartwatch Scykei Civis by Calvin Klein con pantalla AMOLED curva 2,1" 60Hz, llamadas Bluetooth 5.2, Always-On Display y resistencia IP68.',
descripcionLarga:
  'El Scykei Civis by Calvin Klein es un smartwatch de estilo premium que apunta a una experiencia visual grande y moderna: incorpora pantalla AMOLED curva de 2,1" con refresco de 60Hz (410×502) para ver contenido y notificaciones con buena nitidez, además de Always-On Display para tener la hora siempre visible. Permite realizar y recibir llamadas desde la muñeca mediante Bluetooth 5.2 (con micrófono integrado) y ofrece una amplia variedad de esferas para personalizar el look. En resistencia, cuenta con certificación IP68 para el uso cotidiano (lavado de manos, lluvia, sudor y piscina), con la recomendación de evitar aguas abiertas. Su batería es de 300mAh, con carga en menos de 2,5 horas y una autonomía típica de 7 a 10 días (y modo ahorro de hasta 55 días, según uso). Es compatible con Android (5+), iOS (9+) y se vincula mediante la app CK Wear OS.',
caracteristicas: [
  '- Pantalla AMOLED curva 2,1" táctil, 60Hz y resolución 410×502',
  '- Llamadas desde la muñeca por Bluetooth 5.2 + micrófono integrado',
  '- Resistencia al agua/polvo IP68 (apta para piscina; no recomendada para aguas abiertas)',
  '- Batería 300mAh: carga <2,5 h, uso normal 7–10 días (modo ahorro hasta 55 días)'
],

  precio: 28.8
},

{
  id: 32,
  categoria: "auriculares",
  imagen: {
    src: './layout/imagenes/AURICULARES REDMI BUDS 6 ACTIVE BLACK_1.png',
    alt: 'AURICULARES REDMI BUDS 6 ACTIVE BLACK'
  },
  imagenesExtra: [
    { src: './layout/imagenes/AURICULARES REDMI BUDS 6 ACTIVE BLACK_2.png', alt: 'AURICULARES REDMI BUDS 6 ACTIVE BLACK' },
    { src: './layout/imagenes/AURICULARES REDMI BUDS 6 ACTIVE BLACK_3.png', alt: 'AURICULARES REDMI BUDS 6 ACTIVE BLACK' },
  ],
  nombre: 'AURICULARES REDMI BUDS 6 ACTIVE BLACK',
  descripcion:
    'Auriculares in-ear TWS con driver dinámico de 10 mm, Bluetooth 5.4 y hasta 36 h de batería total.',
  descripcionLarga:
    'Auriculares in-ear true wireless Xiaomi Redmi Buds 6 Play con driver dinámico de 10 mm afinado por Xiaomi Acoustic Lab para ofrecer un sonido potente y equilibrado. Cuentan con reducción de ruido con IA para llamadas claras y cinco modos de ecualización mediante la app Xiaomi Earbuds. Ofrecen hasta 7,5 horas de reproducción con una sola carga y hasta 36 horas en total junto con el estuche, además de carga rápida que brinda hasta 3 horas de música en solo 10 minutos. Incorporan Bluetooth 5.4 con soporte para Google Fast Pair, resistencia al agua IPX4 y un diseño ultraligero de 3,6 g por auricular, cómodo para uso diario prolongado.',
  caracteristicas: [
    '- Driver dinámico de 10 mm afinado por Xiaomi Acoustic Lab',
    '- Hasta 36 h de autonomía total (7,5 h por carga + estuche)',
    '- Bluetooth 5.4 con Google Fast Pair y 5 modos de EQ vía app Xiaomi Earbuds',
    '- Certificación IPX4 y diseño ultraligero de 3,6 g por auricular',
  ],
  precio: 29.3
},

{
  id: 33,
  categoria: "Notebooks",
  imagen: {
    src: './layout/imagenes/CX-14._1.jpg',
    alt: 'Notebook 14 INTEL CELERON N4020, 8G, SSD256'
  },
  imagenesExtra: [
    { src: './layout/imagenes/CX-14._2.jpg', alt: 'Notebook 14 INTEL CELERON N4020, 8G, SSD256' },
    { src: './layout/imagenes/CX-14._3.jpg', alt: 'Notebook 14 INTEL CELERON N4020, 8G, SSD256' },
  ],
  nombre: 'Notebook CX 14 INTEL CELERON N4020, 8G, SSD256',
  descripcion:
    'Notebook CX 15,6" con procesador AMD Ryzen 3, 8 GB de RAM y SSD de 256 GB, ideal para tareas cotidianas.',
  descripcionLarga:
    'Notebook CX de 15,6" equipada con procesador AMD Ryzen 3, 8 GB de memoria RAM y unidad SSD de 256 GB, pensada para tareas cotidianas como oficina, clases virtuales, navegación web y multimedia. El SSD acelera el inicio de Windows y la apertura de programas frente a los discos mecánicos tradicionales. La pantalla de 15,6" con acabado antirreflejo permite trabajar con comodidad en ambientes iluminados. Ofrece conectividad Wi-Fi de alta velocidad, Bluetooth, puertos USB, HDMI y salida de audio, además de teclado en español con bloque numérico, ideal para quienes cargan datos o trabajan con planillas.',
  caracteristicas: [
    '- Procesador AMD Ryzen 3 ideal para estudio y uso diario',
    '- 8 GB de RAM y SSD de 256 GB para un sistema más rápido y estable',
    '- Pantalla de 15,6" con acabado antirreflejo para reducir reflejos',
    '- Conectividad Wi-Fi, Bluetooth y puertos USB/HDMI para periféricos externos',
  ],
  precio: 259
},

];


export default productos;