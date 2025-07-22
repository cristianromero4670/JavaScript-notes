//1. Concatena dos cadenas de texto

let escuela = "CUCEI"
let carrera = "computacion"
let dialogo = "Hola mi nombre es eddy y tengo 22 años"

console.log(`Hola mi escuela es ${escuela}, y estudio ${carrera}`)

//2. Muestra la longitud de una cadena de texto
console.log(escuela.length)

//3. Muestra el primer y ultimo caracter de un string
console.log(`El primer caracter es ${escuela[0]} y mi ultimo caracter es ${escuela[4]}`)

//4. Convierte a mayusculas y minusculas una string
console.log(carrera.toUpperCase())
console.log(escuela.toLowerCase())

//5. Crea una cadena de texto en varias lineas 
console.log(`Esta es una cadena 
de texto escrita
en varias lineas`)

//6. Interpola el valor de una variable en un string 
console.log(escuela.slice(1,4))

//7. Reemplaza todos los espacios en blanco de un string por guiones 
console.log(dialogo.replaceAll(" ", "-"))

//8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(dialogo.includes("Hola"))
console.log(dialogo.includes("adios"))
console.log(dialogo.includes("no"))

//9. Comprueba si dos strings son iguales
console.log(escuela == carrera)

//10. Comprueba si dos strings tienen la misma longitud 
console.log(escuela.length == escuela.length)
