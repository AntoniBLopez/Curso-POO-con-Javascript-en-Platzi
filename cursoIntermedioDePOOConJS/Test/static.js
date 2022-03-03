// Usando el método .static del prototipo madre de todos los prototipos Object llamado keys:

const randomNameToObject = {
    name: 'Toni',
    email: 'tonib...@...com',
    age: '24'
}

console.log( Object.keys(randomNameToObject) ) // = [ 'name', 'email', 'age' ]





// También devuelve lo mismo con .getOwnPropertyNames:

console.log( Object.getOwnPropertyNames(randomNameToObject) ) // = [ 'name', 'email', 'age' ]    " ( Lo mismo ) "




// Ahora usamos el método static .entries:

console.log( Object.entries(randomNameToObject) ) // = [ [ 'name', 'Toni' ], [ 'email', 'tonib...@...com' ], [ 'age', '24' ] ]
// Esto quiere decir que se puede acceder al valor con Object.entries(randomNameToObject)[i][1] 
// ( La i depende de a que propiedad del objeto queremos acceder )




// Ahora otro entries:

const randomNameToObject = {
    name: 'Toni',
    email: 'tonib...@...com',
    age: '24',
    cursos: [],
    añadirCurso(nuevoCurso) {
        this.cursos.push(nuevoCurso)
    }
}

console.log( Object.entries(randomNameToObject) )
// =
// [
//   [ 'name', 'Toni' ],
//   [ 'email', 'tonib...@...com' ],
//   [ 'age', '24' ],
//   [ 'cursos', [] ],
//   [ 'añadirCurso', [Function: añadirCurso] ]
// ]

console.log( Object.entries(randomNameToObject)[4][1]('Curso 1') )
// Intentamos ejecutar la función para que nos haga un push de 'Curso 1'
// = TypeError: Cannot read properties of undefined
// Este error es porque si hacemos un console.log(this) de la palabra reservada this veremos que se nos ha reasignado el valor de this
// porque el método static .entries() nos lo ha modificado al convertirlo todo en un array de arrays y ahora this es = al array que
// contiene todos los arrays.
// Para poder hacerlo reasignamos el valor de this con .bind(NuevoValorDethis) de esta manera:

console.log( Object.entries(randomNameToObject)[4][1].bind(randomNameToObject)('Curso 1') )
// = '(Se hace push correctamente gracias a re-definir que la palabra reservada this sea randomNameToObject con .bind(NuevoValorDethis))'
// Ahora tenemos = cursos: [ 'Curso 1' ]




// Ahora usamos el método static .getOwnPropertyDescriptors:

const randomNameToObject = {
    name: 'Toni',
    email: 'tonib...@...com',
    age: '24'
}

console.log( Object.getOwnPropertyDescriptors(randomNameToObject) ) // =
//   {
//     name: {
//       value: 'Toni',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     email: {
//       value: 'tonib...@...com',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     age: { value: '24', writable: true, enumerable: true, configurable: true }
//   }

// Los atributos writable, enumerable y configurable es la forma que tiene JavaScript de limitar el acceso, la modificación o
// la ejecución de nuestros atributos o de nuestros objetos. Por lo tanto podemos jugar con ellos para 'hakear' el
// acceso, la modificación o la ejecución.