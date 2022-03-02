
class LearningPaths { // Prototype con la sintáxis de una clase
    constructor() {
        this.escuelaDesarrolloWeb = {
            name: 'Escuela de Desarrollo Web',
            courses: [
                'Curso definitivo de HTML y CSS',
                'Curso profesional de Javascript',
                'Curso de sistemas de diseño',
            ]
        };
        this.escuelaDataScience = {
            name: 'Escuela de Data Science',
            courses: [
                'Curso de fundamentos de Matemáticas',
                'Curso de funciones Matemáticas para Data Science e Inteligencia Artificial',
            ]
        };
        this.escuelaVideoJuegos = {
            name: 'Escuela de Videojuegos',
            courses: [
                'Curso de Unity 3d',
                'Curso de Unreal Engine',
            ]
        };
        this.escuelaJavascript = {
            name: 'Escuela de Javascript',
            coursesEscuelaJavascript: [
                'Curso profesional de Javascript',
                'Curso profesional de Git y Github',
            ]
        };
    }

    nuevoCursoEscuelaDesarrolloWeb(newCourseEscuelaDesarrolloWeb) {
        this.escuelaDesarrolloWeb.courses.push(newCourseEscuelaDesarrolloWeb)
    }
    nuevoCursoEscuelaDataScience(newCourseEscuelaDataScience) {
        this.escuelaDataScience.courses.push(newCourseEscuelaDataScience)
    }
    nuevoCursoEscuelaVideoJuegos(newCourseEscuelaVideoJuegos) {
        this.escuelaVideoJuegos.courses.push(newCourseEscuelaVideoJuegos)
    }
    nuevoCursoEscuelaJavascript(newCourseEscuelaJavascript) {
        this.escuelaJavascript.courses.push(newCourseEscuelaJavascript)
    }
}

const rutasDeAprendizaje = new LearningPaths()        // Instancia del prototype LearningPaths



class Studient {  // Prototype con la sintáxis de una clase
    constructor({
        name,
        username,
        age,
        email,
        twitter,
        instagram,
        deso,
        learningPaths = [],
        approvedCourses = [],
    }) {
        this.name22 = name
        this.username = username
        this.age = age
        this.email = email
        this.socialMedia = {
            twitter,
            instagram,
            deso,
        }
        this.learningPaths = learningPaths
        this.approvedCourses = approvedCourses
    }
}


const juan = new Studient({   // Instancia
    name: 'JuanDC',
    userName: 'JuanDC22',
    twitter: 'JuanMolón',
    email: 'juandcmolon@outlook.com',
    learningPaths: [rutasDeAprendizaje.escuelaDataScience, rutasDeAprendizaje.escuelaVideoJuegos, rutasDeAprendizaje.coursesEscuelaJavascript],
})

const maria = new Studient({    // Instancia
    name: 'Maria Guillemet',
    userName: 'mariaGuille1',
    twitter: 'mariaGuille',
    email: 'mariaguillemet@outlook.com',
    learningPaths: [rutasDeAprendizaje.escuelaDesarrolloWeb],
})