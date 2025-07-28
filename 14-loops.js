// Loops o bucles 

// for

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento ${numbers[i]}`)
}

// while 

let i = 6

while(i < 5) {
    console.log(`Hola ${i}`)
    i++
}
//bucle infinito
/* while(true) {
} */

//do while

i = 6

do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

// for of

//sirve para recorrer cada valor de las estructuras de datos 

myArray = [1, 2, 3, 4]
mySet = new Set(["Eduardo", "Romero", "Eddy", 22, true, "chr4259@gmail.com"])
myMap = new Map([
    ["name","Eddy"],
    ["email","chr4259@gmail.com"],
    ["age", 22]
])

let myString = "Hola javaScript"

for (let valor of myArray) { // valor (declarar el valor que en el que va el recorrido) y of myArray (la estructura de datos que se esta recorriendo)
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// Buenas practicas 

//revisar que no se crea un bucle infinito
// break y continue 

for(let i = 5; i < 10; i++){
    if (i == 5) {
        continue //se le indica que continue en la siguiente ejecucion y se salta esta vuelta
    } else if(i == 7){
        break //finaliza el recorrido del bucle. Se interrumpe en ese elemento
    }
}