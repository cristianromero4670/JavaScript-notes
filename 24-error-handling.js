// Excepcion
// 
// Produce una excepcion 
// let myObjet
// console.log(myObject.email)

// Tratamiento de errores

// try-catch

try {
    // Codigo que se intenta ejecutar
    console.log(myObject.email)  
    console.log('Finzaliza la ejecucion sin errores')
} catch {
    // Bloque de error
    console.log('Se ha producido un error')
}

// Captura del error
try {
    // Codigo que se intenta ejecutar
    console.log(myObject.email)  
} catch (error) {
    // Bloque de error
    console.log("Se ha producido un error: ", error.message)
}

//  finally

try {
    // Codigo que se intenta ejecutar
    console.log(myObject.email)  
    console.log('Finzaliza la ejecucion sin errores')
} catch {
    // Bloque de error
    console.log('Se ha producido un error')
} finally {
    console.log('Este codigo se ejecuta siempre') // Se produzca error o no, se ejecuta
}

// Lanzamiento de errores

// throw 

//throw new Error('Se ha producido un error')

function sum(a, b) {
    if (typeof a === "number") {
        console.log('es instancia de numero')
    }
    if(Number.isInteger(a)) {
        console.log('es un numero entero')
    }
    if (!(a instanceof Number) && !(b instanceof Number)) {
        console.log('No se pueden sumar estas propiedades')
    }
    return a + b
}

console.log(sum(5, 10))

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operacion solo suma numeros")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operacion solo suma numeros enteros")
    }
    if(a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se esta intentando sumar cero", a, b) 
    }

    return a + b
}

// Captura del error

try{
    console.log(sumIntegers(5,10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}

// Captura de varios errores

try {
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo: ", error.message)
    } else if (error instanceof TypeError) {
        console.log("Se ha producido un error: ", error.message)
    }
}

// Crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers () {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo: ", error.message)
    } else if(error instanceof Error) {
        console.log("Se ha producido un error: ", error.message)
    }
}