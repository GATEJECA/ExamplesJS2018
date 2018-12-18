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
const arreglo = ['aa', 'bb'];
const [peduches] = arreglo; //peduches ='aa'
// Desestructurar y asignación para ciertos elementos: https://stackoverflow.com/questions/50381557/is-there-a-way-to-destructure-an-object-into-a-new-object-in-es6
/*
    tengo esto:
    
    const payload = {
    apple: 1,
    dog: 2,
    cat: 3
    }

    quiero esto:

    const newPayload = {
    apple:1,
    dog: 2
    }
*/
// Opcion 1 
const newPayload = { ...payload
};
delete newPayload.cat;
// Opción 2
const {
    cat,
    ...newPayload
} = payload; //quitará el elemento cat y creará un objeto newPayload con los elementos restantes de la desestructuración
// asignación con ciertas propiedades a una variable ya inicializada
/*
    If I have an object

    const config = { foo: null, bar: null }
    And I want to assign the values of those properties from another object such as:
    const source = { hello: "hello", world: "world", another: "lorem", onemore: "ipsum" }
    I want to do something like the following but it doesn't work
    { hello:config.foo, world:config.bar } = source
*/
// Solución
const config = {};
const source = {
    hello: "hello",
    world: "world",
    another: "lorem",
    onemore: "ipsum"
};
({
    hello: config.foo,
    world: config.bar
} = source);
console.log(config);
const algo = {
    neko: 'aaa',
    dos: 'aaa'
};
const algo2: {};
({
    neko: algo2.fifi
} = algo);

/*
    If you assign via destructuring, each assignment target can be everything that is allowed on the left-hand side of a normal assignment.

For example, a reference to a property (obj.prop):

*/

const obj = {};
({ foo: obj.prop } = { foo: 123 });
console.log(obj); // {prop:123}
/*
    con arreglos
*/
const arr = [];
({ bar: arr[0] } = { bar: true });
console.log(arr); // [true]