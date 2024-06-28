//Definimos una función que se ejecuta cuando la página se carga y muestra una alerta.
window.onload = function myLoadFunction() {
	alert("The website just finished loading!");

//Referenciamos el botón y lo almacenamos en una variable.
	let mybutton = document.querySelector('#theGreen');
//referenciamos nuestro botón(mybutton) y agregamos un evento('click') y un listener(function()) para que muestre una alerta.
	mybutton.addEventListener('click', function(){
		alert("woohoo!");
	});
};


