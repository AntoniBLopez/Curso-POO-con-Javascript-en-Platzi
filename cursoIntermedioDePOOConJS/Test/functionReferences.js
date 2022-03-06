
const toni = {
    nombre: 'Toni',
    apellido: 'Bassols',
}


// Método assign : ( Desvincular la referencia creando un nuevo objeto con las propiedades del objeto original )

const toni2 = Object.assign({}, toni) // Pirmer parámetro es un objeto vacío en el que vamos a
// almacenar cada una de las propiedades del objeto que le pasemos como segundo parámetro

toni2.nombre = 'Paco' // Modificamos el  nombre del nuevo objeto
console.log(toni2) // Vemos como se ha modificado
console.log(toni) // Vemos que el objeto original sigue igual que antes, esto significa que hemos creado una copa sin guardar referencia


// Método create: ( Es cómo crear una instáncia del objeto y almacena sus propiedades en el atributo __proto__, entonce son propiedades 'privadas' )

const toni = {
    nombre: 'Toni',
    apellido: 'Bassols',
}

const toni3 = Object.create(toni) // solo le pasamos un parámetro, que es el objeto que queremos copiar

toni3.nombre = 'Maria' // Modificamos el nombre
console.log(toni3) // Comprobamos que se ha modificado correctamente y podemos ver como se almacena en el atributo heredadado del prototype Object __proto__
console.log(toni) // vemos como no ha guardado referencia 

// Esta puede ser una forma de poder modificar las propiedades de un objeto copia sin modificar el objeto original y además en el atributo
// __proto__ podemos ver la herencia de propiedades que tuvo cuando se hizo la copia


// ALERT: Todo esto no funciona si a una propiedad le añadimos otro objeto, es decir, si añadimos un objeto anidado ya que sí va a
// guardar referencia de ese objeto. Para solucional esto, tenemos OTRO método static del prototype Object que nos va a ayudar:




JSON.stringify // Es un método estático del prototype JSON que nos permite convetir Objetos en un string
JSON.parse // Es un método static del prototype JSNON que lo que hace es convertir string a objeto

// Conviandolos podemos crear copias de las propiedades del objeto que deseemos y
//no guardará referencias ni siquiera de los objetos anidados

// Un dato importante es que JSON.stringify & JSON.parse no pueden trabajar con métodos, así que solo nos sirve para cuando tengamos
// un objeto que solo tiene atributos, y ningún método


// El método static JSON.stringify :

const toni = {
    nombre: 'Toni',
    apellido: 'Bassols',
}

const newObjectString = JSON.stringify(toni)
const newObjectObject = JSON.parse(newObjectString)

// console.log(toni2)
console.log(newObjectObject)

newObjectObject.nombre = 'Elon'

console.log(newObjectObject)
console.log(newObjectString)
console.log(toni)

