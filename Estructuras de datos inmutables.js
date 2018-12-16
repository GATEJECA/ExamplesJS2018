/*
	Las estructuras de datos inmutables forman parte de los principios 
	de la Programación Funcional y nos permiten evitar 
	tener efectos colaterales en los datos. En otras palabras, 
	que hayan modificaciones en las variables sin nuestro consentimiento, 
	produciendo comportamientos inesperados en el programa.
	
	Un valor inmutable es un valor 
	que no se puede cambiar 
	luego de ser definido, 
	se puede modificar pero 
	debe ser en un objeto diferente.

*/

const jeison ={

    nombre: 'Jeison',
    apellido: 'Ruiz',
    edad: 22
}

//const cumpleaños = persona => persona.edad++


const cumpleañosInnmutable =persona => ({
    ...persona,
    edad: persona.edad+1
});