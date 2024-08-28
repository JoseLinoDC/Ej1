// Crear un arreglo de números
let numeros = [3, 12, 18, 1, 22, 5, 2, 35];

// Valor dado por el usuario para filtrar
let valorFiltro = 10;

// Filtrar los elementos mayores que el valor dado
let numerosFiltrados = numeros.filter(function(numero) {
    return numero > valorFiltro;
});

// Mostrar los elementos filtrados
console.log("Los números mayores que " + valorFiltro + " son: " + numerosFiltrados);