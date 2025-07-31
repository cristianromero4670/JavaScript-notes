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
cont = 0

console.log(cont)

// 4. Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas

// 5. Crea una funcion que reciba un numero y devuelva true si es primo y false en caso contrario

// 6. Crea una funcion que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una funcion que reciba una array de dos numeros y devuelva la suma de todos los numeros pares 

// 8. Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado

// 9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una funcion que calcule el factorial de un numero dado