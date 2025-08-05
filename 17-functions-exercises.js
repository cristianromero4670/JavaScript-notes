// 1. Crea una funcion que reciba dos numeros y devuelva su suma

function suma(c, d){
    return c + d
}

console.log(suma(5, 10))

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

myArray = ["Eduardo", "Romero", "Eddy", 22, true]
myArray2 = ["Eduardo", "Romero", 22, true]

i = 0

function arrayComun(array1, array2) {
    let nuevaArray = []

    array1.forEach(function (value) {
        if (array2.includes(value) && !nuevaArray.includes(value)) {
            nuevaArray.push(value)
        }
    })
    return nuevaArray
}


console.log(arrayComun(myArray, myArray2))



// 7. Crea una funcion que reciba una array de dos numeros y devuelva la suma de todos los numeros pares 

let numeros = [34, 55]
total = 0

function sumaPares(array) {

    for (i = array[0]; i != array[1]; i++) {
        if (i % 2 == 0) {
            total += i
        }
    }
    return total
}

console.log(sumaPares(numeros))

// 8. Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado

myArray = [45, 22, 5, 45, 2, 1, 30]
nuevaArray = []

myArray.forEach(function (value) {
    nuevaArray.push(value**2)
})

console.log(nuevaArray)

// 9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

cad = "cadena de texto que debe tener orden inverso"

function cadenaInvertida(string) {
    let separados = string.split(" ")
    let invertido = separados.reverse()
    string = invertido.join(" ")

    return string
}

console.log(cadenaInvertida(cad))

// 10. Crea una funcion que calcule el factorial de un numero dado

let number = 5
total = 1

function factorial(numero) {

    while(numero > 1){
        total *= numero
        numero--
    }
    return total
}

console.log(factorial(number))