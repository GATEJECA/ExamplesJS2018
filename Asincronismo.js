/*
	Javascript solo puede hacer una cosa a la vez independiente de la potencia de tu computador.
	¿Cómo funciona la máquina del asincronismo en javascript?

	javascript Puede delegar la ejecucion de ciertas funciones a otros procesos
	1.1 Este es el modelo de concurrencia event loop

	Javascript tiene una pila de ejecucion (como si fuera un estante con notas de pedidos, se acumula).
	2.1 Cuando termina una función en la pila de ejecución (cuando se despacha del pedido) la saca de la pila (el estante) y la bota.
	calllback es una funcion que se ejecutará cuando regrese la respuesta del servidor u otra función.
	3.1 Mientras existe un callback javascript sigue despachando otros pedidos (ejecutando el codigo principal).
	3.2 Cuando llega la respuesta (lo que se necesitaba para el pedido) js lo mete en la cola de tareas (area de despacho) (peticiones a servidor, interacccion visual, eventos programados)

	4.En la cola de tareas javascripta encola funciones (pedidos) según van llegando
	4.1 Solo cuando se quede sin programas en la pila de ejecución (estante con notas de pedidos) es que va a la cola de tareas (zona de despacho)

	Por lo tanto => EVITA CUELLOS DE BOTELLA EN LA PILA DE EJECUCIÒN

	En principio, cualquier tarea que se haya delegado al navegador a través de un callback, 
	deberá esperar hasta que todas las instrucciones del programa principal 
	se hayan ejecutado. Por esta razón el tiempo de espera definido 
	en funciones como setTimeout, no garantizan que el callback se ejcute en 
	ese tiempo exactamente, sino en cualquier momento a partir de allí, 
	sólo cuando la cola de tareas se haya vaciado.
*/
// Promesas en paralelo
const ids = [1, 2, 3];
const promesas = ids.map(id => obtenerAlgo(id));
Promise.all(promesas).then(personaje => console.log(personaje)).catch(onError);
// async - await
async function neko() {
    const ids = [1, 2, 3];
    const promesas = ids.map(id => obtenerAlgo(id));
    try {
        const personajes = await Promise.all(promesas);
        console.log(personajes);
    } catch (id) {
        onError(id);
    }
}