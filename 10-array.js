//Array

//Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//Inicializacion

myArray = [3] //deja el elemento numerico 3 dentro de la array
myArray2 = new Array(3) //reserva 3 espacios en la array

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4) //se tiene el listado de valores

console.log(myArray)
console.log(myArray2)

myArray = ["Eduardo", "Romero", "Eddy", 22, true]
myArray2 = new Array("Eduardo", "Romero", "Eddy", 22, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Eduardo"
myArray2[1] = "Romero"
myArray2[2] = "Eddy"
myArray2[3] = "ejercicio"

console.log(myArray2)
//es dinamico el tamaño de la array y tambien los tipos de datos que se meten

//Metodos comunes 

myArray = []

//push y pop
myArray.push("Eduardo") //añade el elemento al final de la array
myArray.push("Romero")
myArray.push("Eddy")
myArray.push(22)

console.log(myArray)

myArray.pop() //Elimina el ultimo elemento de la array y lo devuelve 
myArray.pop()

console.log(myArray)

//Shift y unshift 

console.log(myArray.shift()) //quita el primer elemento del array y lo devuelve
console.log(myArray)

myArray.unshift("Eduardo", 22) //añade un elemento al inicio de la array
console.log(myArray)

//lenght 

console.log(myArray.length) //cuanto mide la array es una propiedad

//clear 
// myArray = [] para vaciar la array
myArray.length = 0 //Borrar de forma alternativa
console.log(myArray)

//Slice 

myArray.push("Eduardo", "Romero", "Eddy", 22, true)

let myNewArray = myArray.slice(1, 3) //toma en cuenta el primer indice y no toma en cuenta el ultimo indice

console.log(myArray)
console.log(myNewArray)

//Splice
myArray.splice(1, 3) //Empezando en indice 1, elimina la cantidad de elementos mencionados (3) 
console.log(myArray) 

myArray = ["Eduardo", "Romero", "Eddy", 22, true]
myArray.splice(1, 0, 3) //(elimina desde aqui, elimina esta cantidad de elementos, en esa posicion añade este elemento)
console.log(myArray)