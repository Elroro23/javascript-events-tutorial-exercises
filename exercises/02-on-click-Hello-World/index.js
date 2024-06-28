//definimosuna función flecha que arroja un mensaje en la consola.
const helloWorld = () => {
    console.log(`Hello World`);
}

document.querySelector("#hello").onclick = helloWorld;
//document.:Objeto principal que representa el documento html.
//querySelector("#hello"):Método que busca el primer elemento con ese id.
//.onclick:Propiedad para asignar una función que se ejecutará cuando se haga click en el botón(#hello).
//= helloWorld;:Función que definimos.