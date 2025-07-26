// 1. Crea una array que almacene 5 animales
let myList = []
myList = ["leon", "cabra", "oso", "perro", "tejon"]

console.log(myList)

// 2. Añade dos mas. Uno al principio y otro al final

myList.unshift("mono") //Añade el elemento al inicio
myList.push("cebra") //Añade el elemento al final

console.log(myList)

// 3. Elimina el que se encuentra en tercera posicion 

myList.splice(2, 1)
console.log(myList)

// 4. Crea un set que almacene 5 libros

let nuevoSet = new Set()

nuevoSet = new Set(["meditaciones", "habitos atomicos", "el poder del ahora", "la magia del orden", "los 4 acuerdos"])
console.log(nuevoSet)

// 5. Añade dos mas. Uno de ellos repetido

nuevoSet.add("la guerra de los mundos")
nuevoSet.add("nueve dragones")
nuevoSet.add("nueve dragones")
console.log(nuevoSet)

// 6. elimina uno concreto a tu eleccion

console.log(nuevoSet.delete("habitos atomicos"))

// 7. Crea un mapa que asocie el numero del mes a su nombre 

let mapa = new Map()

mapa = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"]
])

console.log(mapa)

// 8. Comprueba si el mes numero 5 existe en el map e imprime su valor

if (mapa.has(5)){
    console.log(mapa.get(5))
}

// 9. Añade al mapa una clave con una array que almacene los meses de verano

mapa.set("verano", ["Junio", "julio", "agosto"])

console.log(mapa)

// 10. Crea una array, transformalo a un Set y almacenalo en un Map

let arrayFinal = ["Eduardo", "romero", "estudiante"]
let setFinal = new Set(arrayFinal)

console.log(setFinal)

mapa.set("persona", setFinal)

console.log(mapa)