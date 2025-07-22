//Condicionales o estructuras de control
//if, else if, else

//if (si)
let edad = 10

if (edad == 37) {
    console.log(`La edad es ${edad}`)
}

//else (si no)
if (edad == 37) {
    console.log(`La edad es ${edad}`)
} else {
    console.log(`La edad no es ${edad}`)
}

//else if(si no, si)
if (edad == 37) {
    console.log(`La edad es ${edad}`)
} else if (edad < 18){
    console.log("es menor de edad")
} else if (edad < 18 && nam == "eddy"){
    console.log("es menor de edad")
} else {
    console.log(`La edad no es ${edad}`)
}

//Operador ternario
//Forma rapida de haceer un if. else 

const message = edad == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

//switch
//Sirve para comparar una variable con varias condiciones
let day = 4
let dayName

switch (day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Numero incorrecto"
}

console.log(dayName)

