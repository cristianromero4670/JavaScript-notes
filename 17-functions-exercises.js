// 1. Crea una funcion que reciba dos numeros y devuelva su suma

function suma(c, d){
    return c + d
}

result = suma(5, 10)
console.log(result)

// 2. Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos

myArray = [34, 54, 22, 35, 10, 3]

let mayor = 0
let cont = 0 

myArray.forEach(function (value) {

    cont++
if(value >= mayor) {
    mayor = value
}

if(cont == myArray.length - 1){
    return mayor
}

});

console.log(mayor)

// 3. Crea una funcion que reciba un string y devuelva el numero de vocales que tiene
let cad = "cadena de texto que debe contar el numero de vocales que tiene"
let vocal = 0

function contVocales(comentario){
    for(i = 0; i <= cad.length - 1; i ++) {
        if (comentario[i] == "a" || cad[i] == "e" || cad[i] == "i" || cad[i] == "o" || cad[i] == "u") {
            vocal++
        }
        if (i == cad.length -1) return vocal
    }
}

console.log(contVocales(cad))

// 4. Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas

let arrayStrings = ["comer bien", "hacer ejercicio", "estudiar"]
let stringsMayusculas = []

arrayStrings.forEach((value) => stringsMayusculas.push(value.toUpperCase()))

console.log(stringsMayusculas)

// 5. Crea una funcion que reciba un numero y devuelva true si es primo y false en caso contrario

num = 45

function esPrimo() {
    for(i = num - 1; i >= Math.sqrt(num); i--) {
        if (num % i == 0) {
            return false
        }
        return true
    }
}

console.log(esPrimo(num))

// 6. Crea una funcion que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos



function arrayComun(array1, array2) {
    let elemento = 0 
    while (elemento ) {

    }
}

// 7. Crea una funcion que reciba una array de dos numeros y devuelva la suma de todos los numeros pares 

// 8. Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado

// 9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una funcion que calcule el factorial de un numero dado