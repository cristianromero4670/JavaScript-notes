// Objects 
// pueden contener propiedades, funciones y otros objetos
// se definen con llaves {}
// las propiedades van en pares key: value
// las propiedades se separan por comas
// las propiedades pueden ser accedidas con notación de punto o corchetes
// Sintaxis

let person = {
    name: 'Eddy',
    edad: 22,
    alias: 'Eddy'
}

// Acceso a propiedades

// Notación de punto
console.log(person.name)

// Notación de corchetes
console.log(person['edad'])

// Modificación 
person.name = 'Eduardo'
console.log(person.name)

console.log(typeof person.edad)
person.edad = "22"
console.log(typeof person.edad)

// Eliminar propiedades

delete person.edad
console.log(person) 

// Nueva propiedad 
person.email = 'chr4259@gamil.com'

console.log(person)

person["edad"] = 22
console.log(person)

// Metodos (funciones)

let person2 = {
    name: "Eddy",
    age: 22,
    alias: "dev",
    walk: function() {
        console.log("caminando...")
    }
}

person2.walk()

// Anidacion de objetos

let person3 = {
    name: "Eddy",
    age: 22,
    alias: "dev",
    walk: function() {
        console.log("caminando...")
    },
    job: {
        name: "Developer",
        exp: 2,
        work: function() {
            console.log(`la persona de ${this.exp} años de exp. esta trabajando...`) // 'this' se refiere al objeto job
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objects

let person4 = {
    name: 'Eduardo',
    edad: 22,
    alias: 'Eddy'
}
console.log(person4 == person) // false
console.log(person4 === person) // false

console.log(person4.name == person.name) // true

// Iteracion

for(let key in person4) {
    console.log(key + ": " + person4[key])
}

person3.job.work()

function Person(name, age) {  // Deberia ser una clase
    this.name = name
    this.age = age
}

let persona5 = new Person("Eddy", 22)
console.log(persona5)
console.log(typeof persona5)
console.log(typeof person4)

