//Set
//No tiene indices esta estructura de datos
//Declaracion

let mySet = new Set()

console.log(mySet)

//Inicializacion

mySet = new Set(["Eduardo", "Romero", "Eddy", 22, true, "chr4259@gmail.com"])

console.log(mySet)

// Metodos comunes 

// add y delete

mySet.add("https:eddy.dev") //añade el elemento al final del set

console.log(mySet)

mySet.delete("https:eddy.dev") //elimina justamente el valor que se le da como parametro ya que no funciona con indice

console.log(mySet)
// Recibe el valor que se le pasa y retorna el booleano 
console.log(mySet.delete("Eduardo"))
console.log(mySet.delete(4))

console.log(mySet)

if (mySet.delete("Romero")){
    console.log("Se elimino correctamente")
} else {
    console.log("No se encontro el elemento")
}

mySet.add("Romero")

// Has 
// Para comprobar la existencia de un elemento como parametro, retorna un booleano
console.log(mySet.has("Eduardo"))
console.log(mySet.has("Romero"))

// size

console.log(mySet.size) //Para el tamaño

// Convertir un set a array
let miArray = Array.from(mySet)
console.log(miArray)

mySet = new Set(miArray) //Convertir Array a Set

console.log(mySet)

// No admite duplicados

mySet.add("chr4259@gmail.com")
mySet.add("chr4259@gmail.com")
mySet.add("CHR4259@gmail.com") // Si llega a cambiar el elemento lo toma como uno nuevo
console.log(mySet)