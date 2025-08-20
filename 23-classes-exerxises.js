// 1. Crea una clase que reciba dos propiedades

class Car {
    constructor (brand, model){
        this.brand = brand
        this.model = model
    }
}

// 2. Añade un metodo a la clase que utilice las propiedades

Car.prototype.presentarse = function() {
    console.log(`soy un ${this.model}, de la marca ${this.brand}`)
}

let auto = new Car('Porsche', '911')

// 3. Muestra los valores de las propiedades e invoca la funcion

console.log(auto.brand, auto.model)
auto.presentarse()

// 4. Añade un metodo estatico a la primera clase

Car.run = () => console.log(`El carro corre`)

// 5. Haz uso del metodo estatico

Car.run()

// 6. Crea una clase que haga uso de herencia

class Camioneta extends Car {
    constructor(brand, model, year){
        super(brand, model)
        this.year = year
    }
}

// 7. Crea una clase que haga uso de getters y setters

class Tren extends Car {
    #owner
    #price

    constructor (brand, model, owner, price) {
        super(brand, model)
        this.#owner = owner
        this.#price = price
    }

    get owner (){
        return this.#owner
    }

    get price(){
        return this.#price
    }

    set price(newPrice) {
        this.#price = newPrice
    }
}

// 8. Modifica una clase con getters y setters para que use propiedades privadas

trenMaya = new Tren ('mercedes', 1700, 'Eddy', '100M')

trenMaya.price = '120M'

// 9. Utiliza los get y set y muestra sus valores

console.log(trenMaya.owner)
console.log(trenMaya.price)

// 10. Sobreescribe un metodo de una clase que utilice herencia.

class Barco extends Car {
    constructor (brand, model){
        super(brand, model)
    }

    presentarse () {
        console.log(`${this.brand}, ${this.model}`) 
    }
}

let titanic = new Barco ('mercedes', '1930')

titanic.presentarse()