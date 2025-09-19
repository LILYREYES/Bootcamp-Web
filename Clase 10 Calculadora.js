// Obtener la pantalla 
const pantalla = document.getElementById("pantalla"); 
 
// Agregar los valores a la pantalla 
function agregarValor(valor) { 
    pantalla.value += valor; 
} 
 
// Resultads 
function calcularResultado() { 
    try { 
        pantalla.value = eval(pantalla.value); 
    } catch (error) { 
        pantalla.value = "Error"; 
    } 
 
// Limpiar la pantalla 
function borrarPantalla() { 
    pantalla.value = "";
