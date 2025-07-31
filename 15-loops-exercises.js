// 1. Crea un bucle que imprima los numeros del 1 al 20

for (let i = 1; i <= 20; i++){
    console.log(i)
}

// 2. crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado
i = 1
let resultado = 0

while(i <= 100){
    resultado = resultado + i
    i++

    console.log(resultado)
}

// 3. Crea un bucle  que imprima todos los numeros pares entre 1 y 50

resultado = 0
for (i = 0; i <= 50; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

// 4. dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
myArray = ["Eduardo", "Federico", "Alverto", "Christian", "Manuel"]

for(let nombre of myArray) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el numero de vocales en una cadena de texto

let cadena = "Consideralo"
let contador = 0
let tamano = 0 

for(let vocal of cadena.toLowerCase()){
    tamano++
    if (vocal == "a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u"){
        contador++

        if(tamano == cadena.length){
            console.log(`${cadena} tiene ${contador} vocales`)
        }
    }
}

// 6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto 

myArray = [1, 43, 12, 50]
resultado = 1

for (i = 0; i < myArray.length; i++) {
    resultado = resultado * myArray[i]
}

console.log(resultado)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
resultado = 5
i = 1

do {
    resultado = 5 * i
    console.log(resultado)
    i++
} while (i <= 10);

// 8. Usa un bucle para invertir una cadena de texto 

cadena = "ornitorrinco"
let invertido = []
let j = 0

for (let i = cadena.length - 1; i >= 0; i--) {
    invertido[j] = cadena[i]
    j++
}

console.log(invertido.join(""))


// 9. Usa un bucle para generar los primeros 10 numeros de la secuencia Fibonacci
f = [0,1]
n = 0
let total = 0

while(f.length <= 9){
    f[f.length] = f[f.length - 1] + f[f.length - 2]
}

console.log(f)

// 10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10

myArray = [10, 45, 3, 35, 5, 7, 42]
let vacio = []

for (valor of myArray) {
    if (valor > 10) {
        vacio.push(valor)
    }
}

console.log(vacio)