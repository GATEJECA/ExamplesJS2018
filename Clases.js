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
// Herencia
// https://medium.com/@jmz12/usando-clases-en-javascript-e07f0e25c67d
function Desarrollador(nombre, apellido, edad) {
    this.claseBase(nombre, apellido, edad)
}
Desarrollador.prototype = Object.create(Persona.prototype) //Hereda los metodos
Desarrollador.prototype.claseBase = Persona //Hereda el constructor
Desarrollador.prototype.constructor = Desarrollador //Permite el uso de instanceof
Desarrollador.prototype.saludar = function() { //Sobre escribe el metodo
    console.log("Hola soy un desarrollador")
    //opcionalmente
    Persona.prototype.saludar.call(this) //Hace uso del metodo base
}
// Por clases
class Persona {
    constructor(nombre, altura, profesion) {
        this.nombre = nombre;
        this.altura = altura;
        this.profesion = profesion;
    }
    fnEsAlto() {
        var impr = this.nombre + " es un/a " + this.profesion
        this.altura > 1.80 ? impr += " alto/a" : impr += " bajo/a";
        console.log(impr);
    }
}
class DesarrolladorextendsPersona {
    constructor(nombre, altura, profesion) {
        super(nombre, altura, profesion);
    }
}
//desarrolladores
var desarrollador1 = newDesarrollador("Jorge", 1.83, "desarrollador");
var desarrollador2 = newDesarrollador("Luis", 1.85, "desarrollador");
var desarrollador3 = newDesarrollador("Ángela", 1.78, "desarrollador");
//otra profesión
var persona1 = newPersona("Juan", 1.76, "ingeniero");
var persona2 = newPersona("Lalo", 1.86, "doctor");
var persona3 = newPersona("Roberto", 1.81, "dentista");
var persona4 = newPersona("Ana", 1.64, "modelo");
var persona5 = newPersona("Liz", 1.58, "cosmetóloga");
//arreglo de objetos
var arrPersonas = [persona1, persona2, persona3, persona4, persona5];
var arrDesarrolladores = [desarrollador1, desarrollador2, desarrollador3];
for (var i = 0; i < arrDesarrolladores.length; i++) arrDesarrolladores[i].fnEsAlto();
console.log('\n');
for (var i = 0; i < arrPersonas.length; i++) arrPersonas[i].fnEsAlto();