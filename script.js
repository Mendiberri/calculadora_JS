// Agrega un valor a la pantalla
function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value;
}

// Calcula el resultado de la operación en la pantalla
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla); // Evalúa la expresión matemática
    document.getElementById('pantalla').value = result;
}

// Limpia la pantalla
function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
}

// Borra el carácter más reciente de la pantalla
function borrarUltimo() {
    const valorPantalla = document.getElementById('pantalla').value;
    document.getElementById('pantalla').value = valorPantalla.slice(0, -1);
}