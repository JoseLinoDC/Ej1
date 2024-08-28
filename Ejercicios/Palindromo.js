// Función para verificar si una palabra es un palíndromo
function esPalindromo(palabra) {
    // Convertir la palabra a minúsculas y eliminar espacios
    let palabraLimpia = palabra.toLowerCase().replace(/\s+/g, '');
    
    // Invertir la palabra
    let palabraInvertida = palabraLimpia.split('').reverse().join('');
    
    // Comparar la palabra original limpia con la invertida
    return palabraLimpia === palabraInvertida;
}

// Ejemplo de uso
const palabra = "Anilina";
const resultado = esPalindromo(palabra);

if (resultado) {
    console.log(`La palabra "${palabra}" es un palíndromo.`);
} else {
    console.log(`La palabra "${palabra}" no es un palíndromo.`);
}
