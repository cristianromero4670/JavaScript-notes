// 1. Usa desestructuracion para extraer los dos primeros elementos de una array

let otroArray = [10, 20, 30, 40, 50];

let [firstElement, secondElement] = otroArray

console.log(firstElement); // 10
console.log(secondElement); // 20

// 2. Usa desestructuracion en una array y asigna un valor predeterminado a una variable

let [element, , , , ] = otroArray
console.log(element) // 10

// 3. Usa desestructuracion para extraer dos propiedades de un objeto

let school = {
    name: 'CUCEI',
    carrer: 'computer ingeneering',
    year: 2022,
    location: 'guadalajara',
    student: {
        numerStudent: 2184,
        age: 22,
        name: 'Eduardo'
    }
}

let {carrer, location: ubicacion} = school
console.log(carrer, ubicacion); // computer ingeneering guadalajara

// 4. Usa desestructuracion para extraer dos propiedades de un objeto y asignalas a nuevas variables con nombres diferentes

let {name: schoolName, year: yearEntry} = school
console.log(schoolName, yearEntry)

// 5. Usa desestructuracion para extraer dos propiedades de un objeto anidado

let {student: {numerStudent: code}, student: {name: nameStudent}} = school
console.log(code, nameStudent)

// 6. Usa propagacion para combinar dos arrays en uno nuevo

let nuevoArray = [...otroArray, ...myArray]
console.log(nuevoArray)

// 7. Usa propagacion para crear una copia de una array

let finalArray = [...otroArray]
console.log(finalArray)

// 8. Usa propagacion para combinar dos objetos en uno nuevo

let newSchool = {...person, ...school}
console.log(newSchool)

// 9. Usa propagacion para crear una copia de un objeto

let finalSchool = {...newSchool}
console.log(finalSchool)

// 10. Combina desestructuracion y propagacion 
let ultimoArray = []
let [combination, text, ofArray] = myArray

ultimoArray.push(combination, text, ofArray)

console.log(ultimoArray)