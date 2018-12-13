/*
	ctrl + shift + r (recarga la pagina sin caché)
	
	¿Qué es lo que provoca que en JavaScript tarde tanto en comparación a Java?
	//JavaScript
	millis = new Date().getTime();
	max = 1000000000;
	for(a=0;a<max; a++) {
				   
	}
	end = new Date().getTime();
	console.log(end-millis); // Output: ~1850ms
	
	//Java
	longmillis = System.currentTimeMillis();
	longmax = 1000000000;
	for(long a = 0; a < max; a++) {
	}
	longend = System.currentTimeMillis();
	System.out.println(end - millis); // Output: ~250ms
	
	R: JavaScript es interpretado Java es compilado.

	JavaScript tiene un interprete en el caso del chrome se llama V8 este se encarga de 
	tomar el código de JavaScript y convertirlo en código de maquina.

	Java es compilado a código de maquina y por esto es más rápido en su ejecución.

	Java es un lenguaje compilado, del archivo .java 
	queda el archivo .class que es el que ejecuta el sistema usando la 
	maquina virtual de java, un lenguaje no 
	compilado es por ejemplo php, ya que el interprete lo 
	traduce a código de maquina en tiempo de ejecución.


	¿Que es crossDomain?

	crossDomain o Intercambio de recursos de origen cruzado
	Viene por defecto en false
	Es un mecanismo utilizado para permitir el paso de información entre dominios diferentes por cuestiones de seguridad.
	De esta forma, puedes tener tu web con una tipografia que creaste y que otras personas no puedan acceder a ella sin permiso, ya que al estar en false es considerado un “recurso restringido”.
	En este caso, la establecemos true para permitir el paso de información entre nuestro servidor local(localhost) y la web de swapi.com.
	
	Para permitir el paso de información 
	entre los dominios, en este caso el dominio 
	de swapi.co y el dominio localhost que esas en local 
	ya que estas consumiendo su api y mostrando la información en un dominio diferente.
*/