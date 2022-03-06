const original = {
    name: 'Toni',
    lastName: 'B. Lopez',
    personalInformation: {
       date: '11-11-2002',
       phone: 1122334455, 
    },
    editName () {
        this.name = 'Maria'
    },
    otherThings: [ 1, 2, 3, { a: 'hola', b: 'hola2', c: 'hola3' }, 5, 6 ]
}

// const copyOriginal = {...original, personalInformation: {...original.personalInformation}, otherThings: [...original.otherThings]}; // No sirve y no es escalable para este caso

function validateObject (subject) {
    if (Object.prototype.toString.call(subject) == '[object Object]') { return true }
    else { false }
}
function validateArray (subject) {
    if (Object.prototype.toString.call(subject) == '[object Array]') { return true }
    else { false }
}


function deepCopy (subject) {

    let copySubject

    if (validateArray(subject)) {
        copySubject = []

    } else if (validateObject(subject)) {
        copySubject = {}

    } else {
        return subject
    }

    for (key in subject) {
        
        copySubject[key] = deepCopy(subject[key])
        
    }

    return copySubject
}

const deepCopy2 = deepCopy(original)