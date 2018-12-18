// http://exploringjs.com/es6/ch_destructuring.html


// Objetos
//en este ejemplo declaramos explicitamente como se llaman las key en el objeto, sin embargo
// las variables que se les asignará su valor tendrán nombre diferente
const obj = {
    first: 'Jane',
    last: 'Doe'
};
const {
    first: f,
    last: l
} = obj; //donde la variable  f = 'Jane' y la variable l = 'Doe'
//En este siguiente ejemplo se omite el cambio de nombre con respecto a la key del objeto original
const {
    first,
    last
} = obj;
// first = 'Jane'; last = 'Doe'
// es decir {prop} es una abreviación de {prop: prop}
// en el siguiente ejemplo se desestructura un objeto que tiene un elemento que es arreglo
// y detro de el elemento del arreglo hay un objeto, se desea tener esa variable
const obj1 = {
    a: [{
        foo: 123,
        bar: 'abc'
    }, {}],
    b: true
};
const {
    a: [{
        foo: f
    }]
} = obj1; // f = 123
const {
    a: [{
        foo
    }]
} = obj1; // foo = 123
// en el siguiente ejemplo se desestructura un objeto que tiene detro un objeto y se desea tener
// una de sus propiedades
const obj3 = {
    primero: 'aaa',
    segundo: {
        wii: 'aaaqwedf'
    }
};
const {
    segundo: {
        wii: faroleo // faroleo= 'aaaqwedf'
    }
} = obj3;
const {
    segundo: {
        wii // wii= 'aaaqwedf'
    }
} = obj3;
//desestructurando con propiedades dinamicas  - Computed property keys 
const FOO = 'foo';
const obj4 = {
    foo: 123
};
const {
    [FOO]: f
} = // f = 123
// Valores por default
const miobjeto = {};
const {
    foo: x = 3,
    bar: y
} = miobjeto; // x = 3; y = undefined


// Arreglos
const arreglo=['aa','bb'];
const [peduches]=arreglo; //peduches ='aa'