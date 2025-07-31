//if, else if, else, ternaria
//1. Imprime por consola tu nombre si una variable toma su valor
let nom = "Eddy"
let last = "Romero"

if (nom == "Eddy" || last == "Eddy"){
    console.log(`mi nombre es ${nom}`)
} else {
    console.log("no se encontro el nombre")
}

//2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

let user = "Eddy"
let password = 218467038

let user2 = "Eddy"
let password2 = 218467038

if (user2 == user){
    if (password == password2){
        console.log("Usuario y contraseña correctos")
    }
} else {
    console.log("Usuario y contraseña incorrectos")
}

//3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje 
let nume = -7

if (nume > 0){
    console.log(`El numero ${nume} es positivo`)
} else if (nume > 0){
    console.log(`El numero ${nume} es negativo`)
} else {
    console.log(`El numero es igual a ${nume} `)
}

//4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan 
let persona = 15

if (persona >= 18){
    console.log(`La persona puede  votar`)
} else {
    console.log(`Faltan ${18 - persona} años  para que pueda votar`)
}

//5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una varibale
// dependiendo de la edad 

let validez = persona >= 18 ? "Mayor de edad" : "Menor de edad"
console.log(validez)

//6. Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Julio"
if (mes == "marzo" || mes == "abril" || mes == "mayo"){
    console.log("La estacion es primavera")
} else if(mes == "Junio" || mes || "Julio" || mes == "Agosto"){
    console.log("La estacion es Verano")
} else if(mes == "Septiembre" || mes || "Octubre" || mes == "Noviembre"){
    console.log("La estacion es Otoño")
} else {
    console.log("La estacion es Invierno")
}

//7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Ocubre" || mes == "Diciembre"){
    console.log(`${mes} tiene 31 dias`)
} else if(mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre"){
    console.log(`${mes} tiene 30 dias`)
}else{
    console.log(`${mes} tiene 28 dias y cada 4 años tiene 29`)
}

//switch

//8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 3
switch(idioma){
    case 0:
        console.log("Hola bienvenido")
        break
    case 1:
        console.log("Hello, welcome")
        break
    case 2:
        console.log("Ciao, benvenuto")
        break
    case 3:
        console.log("Bachtalo, bahtalo avilan")
        break
}

//9. usa un switch para hacer de nuevo el ejercicio 6 
mes = 4
switch(mes){
    case 0:
        console.log("Invierno")
        break
    case 1:
        console.log("Invierno")
        break
    case 2:
        console.log("Primavera")
        break
    case 3:
        console.log("Primavera")
        break
    case 4:
        console.log("Primavera")
        break
    case 5:
        console.log("Verano")
        break
    case 6:
        console.log("Verano")
        break
    case 7:
        console.log("Verano")
        break
    case 8:
        console.log("Otoño")
        break
    case 9:
        console.log("Otoño")
        break
    case 10:
        console.log("Otoño")
        break
    case 11:
        console.log("Invierno")
        break
}

//10. Usa un switch para hacer de nuevo el ejercicio 7

switch(mes){
    case 0:
        console.log(`${mes} tiene 31 dias`)
        break
    case 1:
        console.log(`${mes} tiene 28 dias y cada 4 años tiene 29`)
        break
    case 2:
        console.log(`${mes} tiene 31 dias`)
        break
    case 3:
        console.log(`${mes} tiene 30 dias`)
        break
    case 4:
        console.log(`${mes} tiene 31 dias`)
        break
    case 5:
        console.log(`${mes} tiene 30 dias`)
        break
    case 6:
        console.log(`${mes} tiene 31 dias`)
        break
    case 7: 
        console.log(`${mes} tiene 31 dias`)
        break
    case 8:
        console.log(`${mes} tiene 30 dias`)
        break
    case 9:
        console.log(`${mes} tiene 31 dias`)
        break
    case 10:
        console.log(`${mes} tiene 30 dias`)
        break
    case 11:
        console.log(`${mes} tiene 31 dias`)
        break
}