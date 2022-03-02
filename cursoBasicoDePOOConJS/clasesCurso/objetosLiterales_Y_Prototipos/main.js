
//                                 OBJETO LITERAL:

const natalia = {
    name: 'Natalia',  // Name es un Atributo y su conjunto: ( name: 'Natalia' ) es una propiedad
    age: 20,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso práctico de HTML y CSS',
    ],
    aprobarCurso(nuevoCurso) {   // AprobarCurso es una función que se le llama Método
        this.cursosAprobados.push(nuevoCurso);
    },
};

// Entonces podemos decir que este Objeto Literal tiene 3 Atributos y 1 método





//                                   PROTOTIPO:

function Studient(name, age, cursosAprobados) {
    this.name = name,    // Name es el atributo igual que el el Objeto Literal y los conjuntos son propiedades, todo igual.
    this.age = age,
    this.cursosAprobados = cursosAprobados
    // this.aprobarCurso = function (nuevoCursoRealizado) {         Este es el método de un prototipo, pero podemos crearlo fuera
    //     this.cursosAprobados.push(nuevoCursoRealizado)               y queda ocultado en el atributo __proto__:
    // }                                                                del prototipo nativo Object de JS
}

Studient.prototype.aprobarCurso = function (nuevoCursoRealizado) {
    this.cursosAprobados.push(nuevoCursoRealizado)
}

const toni = new Studient(
    'Toni',
    24,
    [
        'Curso definitivo de HTML y CSS',
        'Curso profesional de Javascript',
    ]
)





//                          PROTOTIPOS CON LA SINTÁXIS DE CLASES:

class Studient2 {
    constructor(name, age, cursosAprobados) {    // El contructor es una palabra reservada que nos sirve para usarla para pasar
        this.name = name                         // argumentos a los parámetros, como hacemos con la función en el Prototipo clásico.
        this.age = age                           // Dentro de él añadimos los atributos. Y fuera del constructor pero dento
        this.cursosAprobados = cursosAprobados   // de la clase añadimos los métodos
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
}

const miguel = new Studient2('Miguel', 20, [])  // Instancia del prototipo con sus atributos.

miguel.aprobarCurso('Curso de Javascript Profesional') // Así accedemos a los métodos y le añadimos un argumento



//            Patrón RORO, del Inglés “Receive an Object, Return an Object” (Recibe un objeto, devuelve un objeto)

class StudientExample3 {
    constructor({    // Le añadimos unas courly braquets (un objeto) como parámetro y dentro añadimos
        email,       // los parámetros que nos ayudarán a enlazarnos con los atributos.
        age,         // Como se puede ver se pueden crear los parámetros desordenados sin que ello suponga un problema ( es un ejemplo )
        name,                 // Es mejor que los parámetros estén ordenados para una mejor legibilidad.
        cursosAprobados = []        // Aquí le digo que a cursosAprobados si no le pasamos nada que nos devuelva un array vacío.
    }) {                        // Aquí va el contenido del constructor (Los atributos del prototype)
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {                    // Aquí fuera del constructor y dentro de la clase le añadimos los métodos
        this.cursosAprobados.push(nuevoCurso)     // que son como si crearamos métodos ocultos dentro del __proto__:
    }
}

const maria = new StudientExample3({   // Aquí creamos la instancia de la clase prototype, a la cual también le añadimos un
    name: 'Maria Guillemet',       // objeto como argumento. Dentro de él escribimos los argumentos que queramos pasarle.
    age: 24,
    cursosAprobados: ['Curso de POO con JavaScript']
})

// Como vemos, la sintáxis de los argumentos de un RORO se escriben como los atributos de un Objeto Literal