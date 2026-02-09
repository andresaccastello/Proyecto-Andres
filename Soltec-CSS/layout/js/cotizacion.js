
// cotizacion.js
const URL_SHEETS = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRq0c-7xCQghHNI0gYgLUZdJtjCO5ES9b8WDREYqnSl4UxhVkXEbWB98W9vqU4YBxFjdmlVGE-BbdcW/pub?gid=0&single=true&output=csv";

export async function obtenerCotizacion() {
    try {
        const respuesta = await fetch(URL_SHEETS);
        const texto = await respuesta.text();
        
        // Al estar en A1 y B1, Google lo devuelve como: "Dolar,9000"
        const datos = texto.split(','); 
        
        // datos[0] es "Dolar"
        // datos[1] es "9000" (lo que queremos)
        const valor = parseFloat(datos[1]); 

        return !isNaN(valor) ? valor : null;
    } catch (e) {
        console.warn("⚠️ Error al cargar dólar");
        return null;
    }
}