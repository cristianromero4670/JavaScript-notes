// Funciones 


// Simple

function myFunc() {
    console.log("Hola, funcion")
}

for (i = 0; i < 5; i++) {
    myFunc()
}

// con parametros

function myFunctionWithParams(nom) {
    console.log(`hola ${nom}`)
}

myFunctionWithParams("eddy")
myFunctionWithParams("Romero")

// Funciones anonimas 

// No tienen nombre y son asignadas a una variable o constante peara poder ser invocada


const myFunc2 = function(name) {
    console.log(`Hola, ${name}`)
}

myFunc2("Eddy Romero")


// Arrow function

// Se deben asignar a una variable o constante 

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}

myFunc3("Eddy Romero")

//Se puede utilizar en una sola linea sin poner las llaves 
const myFunc4 = (name) => console.log(`Hola, ${name}`)

// Parametros 

function sum(a, b) {  //para tener mas de un parametro se divide con comas
    console.log(a + b)
}

sum(5, 10)
sum(5) //NaN intenta sumar 5 con nada y resuklta un not a number
sum() //NaN 

// Por defecto 

function defaultSum(a = 0, b = 0){ //se le asigna un valor por defecto en caso de que el usuario no lo introduzca
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores

// Retorna ek valor para poder trabajar con el

function mult(a, b){
    return a * b //lo que se ponga despues del return es lo que va a regresar al usuario
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas 

function extern() {
    console.log("Funcion externa")
    function intern() {
        console.log("Funcion interna")
    }
    intern()
}

extern()
// (ERROR) intern() no esta definido por ser una funcion externa
// no se tiene scope para una funcion interna 
// el scope se delimita con las llaves

// Funciones de orden superior

// Funciones que reciben otras funciones como argumentos

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "funcion de orden superior") 
// Como parame  tros se da el nombre de la funcion y el parametro de la funcion anidada.

// forEach

// Funcion que sirve para ejecutar bucles a elementos iterables 

myArray = [1, 2, 3, 4]

myArray.forEach(function (value) { 
    console.log(value) // Se le tiene que dar un nombre al valor recorrido
})

mySet = new Set(["Eduardo", "Romero", "Eddy", 22, true, "chr4259@gmail.com"])

myMap = new Map([
    ["name","Eddy"],
    ["email","chr4259@gmail.com"],
    ["age", 22]
])

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))  

// El  forEach sirve paara iterar los elementos de arrays, maps, sets, etc...