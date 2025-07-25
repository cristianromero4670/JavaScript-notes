//Las estructuras sirven para guardar diversos tipos de datos

//Declaracion 

let myMap = new Map()

console.log(myMap)

//Inicializacion

myMap = new Map([
    ["name","Eddy"],
    ["email","chr4259@gmail.com"],
    ["age", 22]
])

console.log(myMap)

// Metodos y propiedades

// set
//para actualizar o agregar un elemento 

myMap.set("alias", "Eduardo")
myMap.set("alias", "Eduardo Romero") //en clave no puede haber repetidos

console.log(myMap)

// get 
// sirve para recuperar el valor

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has
// para comprobar si una clave existe 

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete 
myMap.delete("email")

console.log(myMap)

// keys

console.log(myMap.keys()) //retorna un listado de solamente las claves
console.log(myMap.values()) //retorna los valores de las claves 
console.log(myMap.entries())  //retorna el listado en iterador todas las claves y valores de este mapa

// size

console.log(myMap.size)


// clear 
// limpia todo el mapa

myMap.clear()
console.log(myMap)