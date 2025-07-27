//1. Crea una variable para cada operacion aritmetica
let m = 0
let n =  3
console.log(m + n) //Suma

let c = 44
let d = 23
console.log(c - d) //Resta

let e = 33
let f = 22
console.log(e * f) //Multiplicacion

let g = 300
let h = 2
console.log(g / h) //Division
console.log(g % h) //Modulo
console.log(b ** h) //Exponente

console.log(m++) //Incremento
console.log(e--) //Decremento

//2. Crea una variable para cada tipo de operacion de asignacion, 
// que haga uso de las variables utilizadas para las operaciones aritmeticas

let num = 2
console.log(num) 

num += e
console.log(num) //Suma
num /= h
console.log(num) //Division
num -= g
console.log(num) //Resta
num *= d
console.log(num) //multiplicacion
num **= h
console.log(num) //Exponente
num %= f
console.log(num) //Modulo


//3. Imprime 5 comparaciones de verdades con diferentes operadores de comparacion

console.log(c > d) 
console.log(c < g)
console.log(c >= c)
console.log(c <= c)
console.log(c === 44)

//4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion

console.log(d > c) 
console.log(g < c)
console.log(c >= g)
console.log(c <= h)
console.log(c === "44")

//5. Utiliza el operador logico and
console.log(c > d && c <= c)

//6. Utiliza el operador logico or
console.log(c > d || g < c)

//7. Combina ambos operaodres logicos
console.log((c > d && c <= c) || c <= h)

//8. Añade alguna negacion
console.log(!(c > d && c <= c) || c <= h)

//9. Utiliza el operador ternario
let condicion =  c > d
condicion ? console.log(condicion) : console.log(condicion)

//10. Combina operadores aritmeticos, de comparacion y logicos
console.log((m * e === 33) && c <= h )