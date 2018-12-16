/*
	Cambiando de contexto al llamar a una función
	El contexto (o alcance) de una función es por lo general, window. 
	Así que en ciertos casos, cuando intentamos referirnos a this 
	en alguna parte del código, es posible que tengamos un 
	comportamiento inesperado, porque el contexto quizás no sea el que esperamos.

Existen al menos tres maneras de cambiar el contexto de una función.

Usando el método .bind, enviamos la referencia a la función sin ejecutarla, 
pasando el contexto como parámetro.

Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado

Usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como 
un arreglo de valores
*/

const jeison={
    nombre:'Jeison',
    apellido:'ruiz',

}

const jessica={
    nombre:'jessica',
    apellido:'zemanate',

}

function saludar(saludo = 'Hola'){
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

/*
const saludarAJessica=saludar.bind(jessica) // Hola, mi nombre es jessica

// en el siguiente se le pasa el parametro a la función
const saludarAJeison=saludar.bind(jeison,'Holita') // Holita, mi nombre es jeison

setTimeout(saludar.bind(jeison,'Hola wey'),1000)*/

saludar.call(jeison,'Hola che') // La ejecuta inmediatamente a difenrencia de bind que no y solo la cambia

saludar.apply(jeison,['Hola ke ace']); // es lo mismo que call solo que los parametros se pasan por un arreglo