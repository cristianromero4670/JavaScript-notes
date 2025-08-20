// 1. Captura una excepcion utilizando try-catch

try {
    // Código que puede lanzar un error
    let numero = 10
    let resultado = numero.toUpperCase()
    console.log(resultado)
  } catch (error) {
    // Captura y manejo del error
    console.error("Se produjo un error:", error.message)
  }

// 2. Captura una excepcion utilizando try-catch y finally

try {
    let numero = 10
    let res = numero.toUpperCase()
    console.log(res)
} catch (error) {
    console.log("Se produjo un error: ", error.message)
} finally {
    console.log("programa finalizado")
}

// 3. Lanza una excepcion generica 

try {
    throw new Error("Ha ocurrido un error genérico");
  } catch (error) {
    console.error("Excepción capturada:", error.message);
  }
  

// 4. Crea una excepcion personalizada 

class MiExcepcionPersonalizada extends Error {
    constructor(mensaje) {
      super(mensaje)
      this.name = "MiExcepcionPersonalizada"
    }
  }

// 5. Lanza una excepcion personalizada

try {
    let edad = -5;
  
    if (edad < 0) {
      throw new MiExcepcionPersonalizada("La edad no puede ser negativa");
    }
  
    console.log("Edad válida:", edad);
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }

// 6. Lanza varias excepciones segun la logica definida

class EdadInvalidaError extends Error {
    constructor(mensaje) {
      super(mensaje)
      this.name = "EdadInvalidaError"
    }
  }
  
  class NombreInvalidoError extends Error {
    constructor(mensaje) {
      super(mensaje)
      this.name = "NombreInvalidoError"
    }
  }
  
  class UsuarioNoEncontradoError extends Error {
    constructor(mensaje) {
      super(mensaje)
      this.name = "UsuarioNoEncontradoError"
    }
  }

  function validarUsuario(usuario) {
    if (!usuario) {
      throw new UsuarioNoEncontradoError("El usuario no existe en la base de datos.")
    }
    if (!usuario.nombre || usuario.nombre.length < 3) {
      throw new NombreInvalidoError("El nombre debe tener al menos 3 caracteres.")
    }
    if (usuario.edad < 0 || usuario.edad > 120) {
      throw new EdadInvalidaError("La edad debe estar entre 0 y 120.")
    }
  
    return "Usuario válido"
  }

// 7. Captura varias excepciones en un mismo try-catch

try {
    let usuario = { nombre: "Al", edad: -10 }
  
    let resultado = validarUsuario(usuario)
    console.log(resultado)
  
  } catch (error) {
    // Captura todas las excepciones en un solo bloque
    if (error instanceof EdadInvalidaError) {
      console.error("Error de edad:", error.message)
    } else if (error instanceof NombreInvalidoError) {
      console.error("Error de nombre:", error.message)
    } else {
      console.error("Error desconocido:", error.message)
    }
  }

// 8. Crea un bucle que infinite transformar a float cada valor y capture y muestre los errores

class ConversionError extends Error {
    constructor(valor) {
      super(`No se pudo convertir el valor "${valor}" a float`)
      this.name = "ConversionError"
    }
  }


  let valores = [10, "20.5", "abc", null, {}, "30", undefined]
let i = 0

while (true) {
  try {
    let valor = valores[i % valores.length]
    console.log("Intentando convertir:", valor)

    let resultado = parseFloat(valor)

    // Validar conversión
    if (isNaN(resultado)) {
      throw new ConversionError(valor)
    }

    console.log("Resultado convertido:", resultado)

  } catch (error) {
    console.error(`${error.name}: ${error.message}`)
  }

  i++;
  
  if (i > 20) break
}
// 9. Crea una funcion que verifique si un objeto tiene una propiedad especifica y lance una excepcion personalizada

// Excepción personalizada
class PropiedadNoEncontradaError extends Error {
    constructor(propiedad) {
      super(`El objeto no contiene la propiedad "${propiedad}"`)
      this.name = "PropiedadNoEncontradaError"
    }
  }
  
  // Función que verifica la propiedad
  function verificarPropiedad(objeto, propiedad) {
    if (!objeto.hasOwnProperty(propiedad)) {
      throw new PropiedadNoEncontradaError(propiedad)
    }
    return `La propiedad "${propiedad}" existe en el objeto `
  }
  
  // Ejemplo de uso
  try {
    let usuario = { nombre: "Eddy", edad: 22 }
  
    console.log(verificarPropiedad(usuario, "edad"))
    console.log(verificarPropiedad(usuario, "correo"))
  
  } catch (error) {
    if (error instanceof PropiedadNoEncontradaError) {
      console.error("Error de propiedad:", error.message)
    } else {
      console.error("Error desconocido:", error.message)
    }
  }
  
// 10. Crea una funcion que realice reintentos en caso de error hasta un maximo de 10

// Función que reintenta una operación hasta 10 veces
async function ejecutarConReintentos(operacion, maxIntentos = 10) {
    let intento = 0;
  
    while (intento < maxIntentos) {
      try {
        intento++;
        console.log(`Intento #${intento}...`);
  
        let resultado = await operacion(); // Ejecuta la operación (puede lanzar error)
        console.log("✅ Operación exitosa en el intento", intento);
        return resultado;
  
      } catch (error) {
        console.error(`❌ Error en intento ${intento}: ${error.message}`);
  
        if (intento >= maxIntentos) {
          throw new Error("Se alcanzó el máximo de reintentos sin éxito");
        }
      }
    }
  }
  
  // Ejemplo: operación que falla al azar
  function operacionAleatoria() {
    return new Promise((resolve, reject) => {
      let exito = Math.random() > 0.7
      setTimeout(() => {
        if (exito) {
          resolve("Resultado correcto 🎉")
        } else {
          reject(new Error("Fallo aleatorio"))
        }
      }, 500)
    })
  }
  
  // Uso
  ejecutarConReintentos(operacionAleatoria)
    .then(resultado => console.log("Resultado final:", resultado))
    .catch(error => console.error("Resultado final:", error.message))