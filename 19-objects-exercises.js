// 1. Crea un objeto con 3 propiedades

let car = {
    brand: 'pagani',
    model: 'zonda',
    year: 2020
}

// 2. Accede y muestra su valor 

console.log(car.brand)
console.log(car.model)
console.log(car.year)

// 3. Agrega una nueva propiedad 

car.motor = 'v12'
console.log(car.motor)

// 4. Elimina una de las 3 primeras propiedades 

delete car.year
console.log(car)

// 5. Agrega una funcion e invocala

car.run  = function () {
    console.log(`El ${this.brand} esta corriendo...`)
}

car.run()

// 6. Itera las propiedades del objeto
for (let key in car) {
    console.log(`${key}: ${car[key]}`)
}

// 7. Crera un objeto anidado

car.motorDetails = {
    type: 'v12',
    horsepower: 800
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(car.motorDetails.type)
console.log(car.motorDetails.horsepower)

// 9. Comprueba si los dos objetos creados son iguales 

let car2 = {
    brand: 'porche',
    model: 'GT2-911',
    year: 2021,
    motor: {
        type: 'v12',
        horsepower: 700
    }
}

console.log(JSON.stringify(car) === JSON.stringify(car2))

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(car.motorDetails.type == car2.motor.type)