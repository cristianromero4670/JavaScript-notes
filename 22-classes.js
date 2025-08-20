// Clases

class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis

let person = new Person('Eduardo', 22,'Eddy')
let person2 = new Person('Ana', 25, 'Anita')

console.log(person)
console.log(typeof person)

// Valores por defecto
class DefaultPerson {
    constructor(name = 'Sin nombre', age =  0, alias = 'Sin alias') {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson('eddy', 22)

console.log(person3)

// Acceso a propiedades 

console.log(person3.alias)
console.log(person3['alias'])

person3.alias = 'Eddy'
console.log(person3.alias)

// Funciones en clases

class PersonWithMethod {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log('la persona camina')
    }
}

let person4 = new PersonWithMethod('Eduardo', 22, 'Eddy')
person4.walk()

// Propiedades privadas 

class PrivatePerson {

    #bank // Propiedad privada, no se puede acceder desde fuera de la clase

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank // Convención para indicar que es privado
    }
    pay() {
        this.#bank
    }
}

let person5 = new PrivatePerson('Eduardo', 22, 'Eddy', 'banco123')

/* console.log(person5.bank) */ // Esto dará un error porque #bank es privado

// person5.bank = "new banco456" // bank no es #bank

// getters y setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank // Propiedad privada

    constructor(name, age, alias) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = 'banco123' // Propiedad privada
    }

    get name() {
        return this.#name //Permite leer la propiedad
    }

    set bank(newBank) {
        this.#bank = newBank  // permite modificar la propiedad
    }
}

persson6 = new GetSetPerson('Eduardo', 22, 'Eddy', 'banco123')

console.log(persson6)
console.log(persson6.name) // Se lee pero no se puede escribir directamente

persson6.bank = "new cuenta123" // Se puede modificar la propiedad privada a través del setter

// Herencia de clases 

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log('El animal hace un sonido')
    }
}

class Dog extends Animal{

    sound() {
        console.log('Guau!!')
    }
    
    run() {
        console.log('El perro corre')
    }
}

class Fish extends Animal{

    constructor(name, size) {
        super(name) // Llama al constructor de la clase padre Animal
        this.size = size
    }
    swim() {
        console.log('El pez nada')
    }
}

let myDog = new Dog ('Enzo')

myDog.run() 
myDog.sound() // Hereda el método sound de la clase Animal

let myFish = new Fish ('Enzo', 10)

myFish.swim()
// No hereda de Animal, por lo que no tiene el método sound


// Metodos estaticos

class MathOperations {
    static sum(a, b) {
        return a + b
    }
}

let myClass = new MathOperations() 
//console.log(myClass.sum(5, 10)) // Esto dará un error porque sum es un método estático

console.log(MathOperations.sum(5, 10))

