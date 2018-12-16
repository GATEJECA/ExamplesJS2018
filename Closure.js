/*
Un closure, básicamente, es una función que recuerda el 
estado de las variables al momento 
de ser invocada, y conserva este estado a través 
de reiteradas ejecuciones. 
Un aspecto fundamental de los closures es que son funciones 
que retornan otras funciones.
*/
function crearSaludo(finalDeFrase) {
    return function(nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`);
    }
}
const saludoArgentino = crearSaludo('che');
const saludoMexicano = crearSaludo('guey');
const saludoColombiano = crearSaludo('parcero');

saludoArgentino('Carlos');
saludoMexicano('Carlos');
saludoColombiano('Carlos');

// Segunda forma
const saludar = pais => nombre => console.log(`Hola ${nombre} de ${pais}`);
const saludarMexicanos = saludar("México");
saludarMexicanos("Carlos");

// Programación Funcional: 
// https://lemoncode.net/lemoncode-blog/2017/9/5/introduccion-programacion-funcional-javascript#curry=

//Funciones Currificadas

saludar("Argentina")("Sacha");  // Hola Sacha de Argentina
saludar("México")("Carlos");