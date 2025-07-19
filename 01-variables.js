// var 
//se pueden acceder a ellas aunqeu no se hayan declarado, tiene ciertos problemas de definicion

var helloWorld = "Hello javascript"
console.log(helloWorld)

helloWorld = "Hello de nuevo, javascript"
console.log(helloWorld)


//let 
//solo tienen efecto dentro del bloque, no tienen efecto fuera.

let helloWorld2 = "Hola, javascript 2!"
console.log(helloWorld2)

helloWorld2 = "Hola de nuevo, javascript 2!"
console.log(helloWorld2)

//const 
//el valor es constante, no puede ser reasignado

const helloWorld3 = "Hola de nuevo, javascript 3!"
console.log(helloWorld3)

/* 
Error
helloWorld3 = "Hola de nuevo, javascript 3!"
console.log(helloWorld3) */