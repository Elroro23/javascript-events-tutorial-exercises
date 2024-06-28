//Declaramos una función que estará disponible en todo el código.
window.myEventListener = function myEventListener() {

	//Guardamos la referencia de nuestro div en una variable
	let hideDiv = document.querySelector(`#firstDiv`);
	hideDiv.style.display = "none";//Cambiamos la propiedad para ocultarlo.

}
