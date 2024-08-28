// Crear un arreglo de números desordenados
let numeros = [34, 7, 23, 32, 5, 62];

// Ordenar el arreglo de menor a mayor
numeros.sort(function(a, b) {
    return a - b;
});

// Mostrar el arreglo ordenado
console.log("El arreglo ordenado es: " + numeros);
