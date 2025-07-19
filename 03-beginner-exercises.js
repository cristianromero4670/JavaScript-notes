//1. Escribe un comentario en una linea 
//Ejercicio completo 

//2. escribe un comentario en varias lineas
/* comentario 
en 
varias
lineas */

//3. Declara variables con valores asociados a todos los datos de tipo primitivo
let stng = ("dato tipo string")
let numero = (22)
let boleano = true
let simbolo = Symbol("acceso")
let numeroGrande = BigInt(28485747373821345832271733)
let valorNulo = null
let indefinido = undefinedValue

//4. Imprime por consola el valor de todas las variables 
console.log(stng)
console.log(numero)
console.log(numeroGrande)
console.log(boleano)
console.log(simbolo)
console.log(valorNulo)
console.log(indefinido)

//5. Imprime por consola el tipo de todas las variables

console.log(typeof stng)
console.log(typeof numero)
console.log(typeof numeroGrande)
console.log(typeof boleano)
console.log(typeof mySymbol)
console.log(typeof valorNulo)
console.log(typeof indefinido)

//6. A continuacion modifica los valores de las varibles por otros del mismo tipo
stng = ("dato tipo string cambiado")
numero = (22+1)
boleano = false
simbolo = Symbol("denegado")
numeroGrande = BigInt(43920358495432048395)
valorNulo = null
indefinido = undefinedValue

//7. A continuacion, modifica los valores de las variables por otros de distinto tipo
stng = 10
numero = ("ya no es un numero")
boleano = Symbol("denegado")
simbolo =  BigInt(103920473089573408)
numeroGrande = undefinedValue
valorNulo = false
indefinido = null

//8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const stng2 = ("dato tipo string")
const numero2 = (22)
const boleano2 = true
const simbolo2 = Symbol("acceso")
const numeroGrande2 = BigInt(28485747373821345832271733)
const valorNulo2 = null
const indefinido2 = undefinedValue

//9. A continuacion, modifica los valores de las constantes

/* stng2 = 10
numero2 = ("ya no es un numero")
boleano2 = Symbol("denegado")
simbolo2 =  BigInt(103920473089573408)
numeroGrande2 = undefinedValue
valorNulo2 = false
indefinido2 = null */

//10. Comenta las lineas que produzcan algun tipo de error al ajustarse