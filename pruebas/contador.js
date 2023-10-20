// Obtén el elemento del texto y el botón por su ID
const textoElement = document.getElementById("texto");
const botonElement = document.getElementById("boton");

// Agrega un evento click al botón
botonElement.addEventListener("click", function() {
    // Obtén el valor actual del texto y conviértelo a un número
    let valorActual = parseInt(textoElement.textContent);

    // Incrementa el valor en 1
    valorActual += 1;

    // Actualiza el texto con el nuevo valor
    textoElement.textContent = valorActual;
});