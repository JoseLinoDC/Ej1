// Crear un arreglo de nombres
let nombres = ["Esther", "Carlos", "Martha", "Pablo", "Jose"];

// Nombre a buscar en el arreglo
let nombreBuscado = "Jose";

// Verificar si el nombre está en el arreglo
if (nombres.includes(nombreBuscado)) {
    console.log(`El nombre "${nombreBuscado}" se encuentra en el arreglo.`);
} else {
    console.log(`El nombre "${nombreBuscado}" NO se encuentra en el arreglo.`);
}
