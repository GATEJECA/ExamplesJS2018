/*
	Existen cinco tipos de datos que son primitivos:
	Boolean:// false/true
	Null:// nulo o "vacío"
	Undefined:// Cuando una variable es declarada pero aún no tiene un valor asignado 
	Number:// 383839
	String: 'Hola'
	
	Comparaciones de Primitivas
	Si queremos comparar 2 valores en js utilizamos:

	x == y
	Pero si queremos comparar 2 valores y además si queremos comparar si las variables son del mismo tipo utilizamos:

	x === y
	
	Cuando deseamos comparar objetos js pregunta por la refencia a la variable que estamos utilizando.
	Si la referencia es la misma a la variable que estamos utilizando js entregará true, esto quiere decir, que estamos apuntando al mismo objeto en memoria RAM.
	
	Objeto Literal
	Es cuando desglosamos un objeto en un nuevo objeto:

	var persona = {
	  nombre: 'JoseL'
	}

	var otraPersona = {
	  ...josel
	}
	Los objetos contienen la misma info pero es diferente objeto

	Nota el paso de objetos y de array es por referencia
	

	Valores falsy (valores falsos) en Javascript:

	false
	0
	null
	""
	undefined
	NaN
	Los demás  son verdaderos https://developer.mozilla.org/es/docs/Glossary/Truthy

	en html si tengo un objeto dom
	<div class="color celeste left cursor" data-color="celeste" id="celeste">
	</div>

	con un atributo que comienza con data-  el atributo se podrá obtener en el dataset
	así 

	Dataset{
		color: "celeste"
	}


*/



//Con lo siguiente puedo poner varios mensajes en un console agrupado, y el tipo de letra lo cambio con color
console.group();
console.log('%c This course is the best! ', 'color: #43b207');
console.log('%c Siempre se puede aprender algo nuevo', 'color: red');
console.groupEnd();

if (esDeDia) {
    trabaja();
}
//Es lo mismo que:
if (esDeDia) trabaja();