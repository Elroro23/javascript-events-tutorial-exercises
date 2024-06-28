//Definimos una función que estará disponible en todo el código).
window.calculateSumListener = function () {
	//Obtención de los valores de los inputs almacenados en variables.
	let stringA = document.getElementById("firstNumber").value;
	let stringB = document.getElementById("secondNumber").value;
//Convertimos los valores a números:
	let numberStringA = parseInt(stringA);
	let numberStringB = parseInt(stringB);
//Sumamos los valores y los almacenamos en una nueva variable.
	let resultSumAyB = numberStringA + numberStringB;
//Asignamos el valor obtenido al input "resultNumber".
	document.querySelector("#resultNumber").value = resultSumAyB;
};
//Esta función se ejecuta cuando se haga click en el botón "calculate".

