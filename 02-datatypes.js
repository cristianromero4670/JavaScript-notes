//los datos de tipos primitivos son basicos e inmutables que representan un solo valor
//son 7 tipos de datos:

//cadenas de texto (string)
let myName = "ChristianRomero"
let alias = `dot.Romero`
let mail = 'Chr4259@gmail.com'

console.log(name,",", alias,",", mail)

//Numeros (number)
let age = 22 //Entero
let height = 1.72 //Decimal

//booleanos (boolean)
let isStudent = true
let isTeacher = false

//Undefined
//Variable no declarada pero no inicializada
let undefinedValue
console.log(undefinedValue)

//Null

//menciona un valor nulo, existente pero nulo
let nullValue = null

//Symbol
//valor unico e inmutable para identificadores unicos
let mySymbol = Symbol("mysymbol")

//BinInt 
//de 64 bits en adelante
let myBigInt = BigInt(234895340556554649304325456)
let myBigInt2 = 234895340556554649304325456n

//Mostramos los tipos de satos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isStudent)
console.log(typeof isTeacher)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)