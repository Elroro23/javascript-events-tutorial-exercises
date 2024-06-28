// Declaramos una función flecha con una alerta.
const loadListener = () => {
    alert("Loading finished...");
}
//Esa alerta aparecerá cuando la página se termine de cargar.
window.addEventListener('load', loadListener);
//(window):Este es el objeto global que representa la ventana del navegador.
//En este caso, estamos trabajando con la ventana completa del navegador.
//(.addEventListener):Este es un método que se utiliza para registrar un evento a un objeto específico. 
//En este caso, estamos registrando un evento al objeto window.
//('load'):Este es el tipo de evento que estamos escuchando.
//(loadListener):Esta es la función(listener) que se ejecutará cuando el evento "load" ocurra.