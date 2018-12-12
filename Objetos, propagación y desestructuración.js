//Los objectos pueden recibir como valor en sus propiedades, cadenas de texto (string), valores numericos (int) y booleanos. Tambien puedes realizar operaciones dentro de los valores. Ejemplo:
let objeto2 = {
    'string': 'Hola soy una cadena de texto',
    'int': 123,
    'boolTrue': true,
    'boolFalse': false,
    'sumar': 5 + 5,
    'minuscula': 'TEXTO'.toLowerCase()
}

//Los objetos se pueden enviar por para parámetro a alguna función de esta manera:
function suma({
    n1,
    n2
}) {
    var operacion = n1 + n2
    console.log(operacion)
}
var miSuma = {
    n1: 5,
    n2: 10
}
suma(miSuma) // Salida ->15
suma({
    n1: 100,
    n2: 100 + 50
}) // Salida -> 250
suma({
    n1: 100 - 1,
    n2: (200 * 2) + 1
})
//Destructuración de objetos:
var obj1 = {
    obj2: {
        nombre: 'victor',
        edad: 19
    }
}
functionsaludar(obj) {
    var {
        nombre,
        edad
    } = obj.obj2
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
saludar(obj1)
// y en una linea:
function saludar({
    obj2: {
        nombre,
        edad
    }
}) {
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
var Sacha = {
    nombre: 'Sacha',
    edad: 28
}
var Dario = {
    nombre: 'Dario',
    edad: 27
}

function imprimirNombreYEdad(persona) {
    var {
        nombre,
        edad
    } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}
// propagación y destructuracion de objetos 
// Spreed operator
function cumpleanos(persona) {
    return { ...persona, //Copia los misma caractericticas del objeto persona
        edad: persona.edad += 1
    }
}
// Computed property names, like on object literals, can be used with destructuring.
let key = 'z';
let {
    [key]: foo
} = {
    z: 'bar'
};
console.log(foo); // "bar"
// The Rest/Spread Properties for ECMAScript proposal (stage 3) adds the rest syntax to destructuring. Rest properties collect the remaining own enumerable property keys that are not already picked off by the destructuring pattern.
let {
    a,
    b,
    ...rest
} = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
a; // 10 
b; // 20 
rest; // { c: 30, d: 40 }

//Función arrow con desestructuración
const miFuncion = ({
    edad
}) => edad > 18 ? 'Si' : 'No';