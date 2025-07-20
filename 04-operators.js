//Operadores

//Operadores aritmeticos
let a = 5
let b = 10
console.log(5 + 10) //Suma
console.log(a - b) //Resta
console.log(a * b) //Multiplicacion 
console.log(a / b) //Division

console.log(a % b) //Modulo
console.log(a ** b) //Exponente

a++ //Incremento
b-- //Decremento 

//Operadores de asignacion

let myVariable = 2
console.log(myVariable) 

myVariable += 2
console.log(myVariable)

myVariable /= 2
myVariable -= 2
myVariable **= 2
myVariable %= 2

//Operadores de comparacion 
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) //Igualdad por valor
console.log(a == "6") //Igualdad por valor
console.log(a === a)
console.log(a === a) //Igualdad por identidad (por tipo y valor)
console.log(a === "6")//False, igual en valor, desiguldad en tipo de dato (String y Number)

console.log(a != 6) //Distinto de
console.log(a !== "6")//Niega la comparacion original
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

//Tuthy values (valores verdaderos)
//Todos los numeros positivos y negativos menos el cero
//Boolean True

//Falsy values (valores falsos)

//0
//0n
//null
//undefined
//NaN
//boolean false
//Cadenas de texto vacias

//Operadores logicos

//and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

//or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 && 15 > 20  || 30 < 40)

//not (!)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))
console.log(!true)
console.log(!false)

//Operadores ternarios
const isRaining = false
//? funciona como condicional
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")
