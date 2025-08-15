myArray = [1, 2, 3, 4];

person = {
    name: 'Eduardo',
    age: 22,
    alias: 'eddy'
}

myValue = myArray[1]
console.log(myValue) // 2

myArray.push(5)

myName = person.name
console.log(myName) // Eduardo

// Desestructuracion

// Sintaxis en array

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0) // 1
console.log(myValue1) // 2
console.log(myValue2) // 3
console.log(myValue3) // 4
console.log(myValue4) // 5

//Sintaxis de arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5) // 1
console.log(myValue6) // 2
console.log(myValue7) // 3
console.log(myValue8) // 4
console.log(myValue9) // 5

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray
console.log(myValue10) // 1
console.log(myValue13) // 4

// Sintaxis en objetos

/* let {name, age, alias} = person

console.log(name) // Eduardo
console.log(age) // 22
console.log(alias) // eddy */

// Sintaxis de objetos con valores predeterminados

let {name2, age2, alias2, email2 = "email@gmail.com" } = person

console.log(name2) //No existe
console.log(age2) // No existe
console.log(alias2) // No existe
console.log(email) 

// Sintaxis objects con nuevos nombres de variable 

let {name: name3, age: age3, alias: alias3} = person
console.log(name3) // Eduardo
console.log(age3) // 22
console.log(alias3) // eddy

// Desestructuracion con pbjetos anidados

person3 = {
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

let {name: name4, job: {name: jobName} } = person3
console.log(name4) // Eddy
console.log(jobName) // Developer

// Propagacion (...)

// Sintaxis Array
myArray2 = [...myArray] // Copia de myArray

console.log(myArray2)

let myArray3 = [0, ...myArray2, 5, 6] // Agrega 0 al inicio, 5 y 6 al final

console.log(myArray3) // [0, 1, 2, 3, 4, 5, 6]

// Combinacion de arrays

let myArray4 = [...myArray2, ...myArray3] 

console.log(myArray4) // [1, 2, 3, 4, 0, 1, 2, 3, 4, 5, 6]

// Sintaxis objects

let person7 = { ...person, email: "chr4259@gmail.com" } // Copia de person
console.log(person7)

let person5 = {...person}
console.log(person5) // { name: 'Eduardo', age: 22, alias: 'eddy' }

