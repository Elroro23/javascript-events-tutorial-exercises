let currentUser = "Mario"; //Variable que almacena el jugador actual.

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

//Definimos una función en el Objeto global window.
window.turnChanger = function turnChanger() {
	if (currentUser === "Mario") { //Si "currentUser" es estrictamente "Mario".
		currentUser = "Juan"; //Entonces "currentUser" será igual a "Juan".
	} else if (currentUser === "Juan") { //De lo contrario, si "currentUser" es estrictamente "Juan".
		currentUser = "Josh"; //Entonces "currentUser" será igual a "Josh".
	} else if (currentUser === "Josh") { //De lo contrario, si "currentUser" es estrictamente "Josh".
		currentUser = "Mario"; //Entonces "currentUser" será igual a "Mario".
	}
//Hacemos referencia al elemento que queremos modificar en HTML y le aplicamos el cambio, en este caso, texto fijo más la variable.
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
