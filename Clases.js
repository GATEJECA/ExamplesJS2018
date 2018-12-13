/*
	Hablar de objetos en javascript es hablar de prototipos.
	this hace referencia al nuevo objeto que se acaba de crear.
	la función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
	La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.
	
	Window es el objeto global dentro del navegador.

	Cuando this no es lo que esperamos, este es el principal error en JS.
	En las Arrow functions, se asigna la función , pero cambia el this dentro de la función , ya que 
	trata de tomar el this global, es decir, el que está fuera de la Arrow function.
	Para comprobarlo en consola:
	this === window	
*/
/* Clases por prototipos*/
function persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
persona.prototype.soyAlto = function() {
    this.altura > 1.8 ? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)
}
var cesar = new persona('Cesar', 'Lopez', 1.77)
var juan = new persona('Juan', 'Obando', 1.81)
cesar.soyAlto()
juan.soyAlto()