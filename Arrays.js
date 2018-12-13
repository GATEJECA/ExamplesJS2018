// Map inmutable 
const arreglo = [{
    elemento: 1
}, {
    elemento: 2
}];
// devuelvo otro arreglo para no afectar el arreglo original y retorno directo el nuevo objeto usando 
// parentesis para que lo retorne directamente el arow function y se le pasan las propiedades el elemento 
// iterable y se le agrega una nueva propiedad
const otroarreglo = arreglo.map(elemento => ({ ...elemento,
    neko: 'alfa'
}));
const mifuncion = arreglo => arreglo.push(1);
const nekos = [0, 2];
mifuncion(nekos);
// reductores
const data = [{
    cantidad: 1
}, {
    cantidad: 1
}, {
    cantidad: 1
}, {
    cantidad: 10
}, {
    cantidad: 5
}];
const total = data.reduce((acumulable, {
    cantidad
}) => acumulable + cantidad, 0); // el 0 es el valor inicial del acumulable