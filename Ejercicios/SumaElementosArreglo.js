// Crear un arreglo de números
let numeros = [12, 25, 32, 49, 54];

// Calcular la suma de todos los elementos del arreglo
let suma = numeros.reduce(function(acumulador, valorActual) {
    return acumulador + valorActual;
}, 0);

// Mostrar el resultado de la suma
console.log("La suma de los elementos del arreglo es: " + suma);
