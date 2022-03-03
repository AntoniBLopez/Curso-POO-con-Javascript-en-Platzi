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
// Esto quiere decir que se puede acceder al valor con Object.entries(randomNameToObject)[i][1]   " ( La i depende de a que propiedad del objeto queremos acceder ) "


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
