//Strings

//Concatenacion
let nam = "Eddy"
let greeting = "Hola, " + nam + "!"
console.log(greeting)

//Longitud
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[11])

//Metodos comunes 
console.log(greeting.toUpperCase()) //Cambia todas las letras a mayusculas
console.log(greeting.toLowerCase()) //Cambia todas las letras a minusculas
console.log(greeting.indexOf("Hola")) //Busca el indice donde encuentra el elemento entre parentesis
console.log(greeting.indexOf("Eddy"))
console.log(greeting.indexOf("Mouredev"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("mouredev"))
console.log(greeting.includes("Eddy"))
console.log(greeting.slice(0,10)) //Se queda con los elementos dentro del parametro que se selecciona
console.log(greeting.replace("Eddy", "Eduardo"))


//Template literals (plantillas literales)
let mensaje = `Hola, este es mi curso 
de javascript`

console.log(mensaje)

let email = "chr4359"

console.log(`Hola ${nam},  mi email es ${email}`)