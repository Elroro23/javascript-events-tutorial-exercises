// This is a global variable
let counter = 0;

window.onload = function loadFunction()
{
	// Here I set the screen to the initial value when the website is fully loaded
	document.getElementById('screen').innerHTML = "The counter value is "+counter;
}

// Called when the user clicks
window.increaseCounter = function increaseCounter()
{
	// Increase the global counter by one
	counter++;
	// Update the screen with the new value
	document.getElementById('screen').innerHTML = "The counter value is "+counter;
}

//Creamos una función global (window.)
window.decreaseCounter = () => {
//Decrementamos el contador.
counter--;
//Referenciamos el elemento y cambiamos su contenido(.innerHTML=) actualizando el contador con un texto fijo.
document.querySelector('#screen').innerHTML = "The counter value is "+counter;
}
/*myButtonDecrease.addEventListener('click', decreaseCounter);*///No es necesario si ya uso el onclick en html.

