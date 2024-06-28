window.onload = function loadFn() { //Definimos una función que cargará después de que cargue la página y es global.
	let containerElm = document.getElementById("container"); //Guardamos la referencia del elemento en una variable.
	containerElm.addEventListener("click", function(event) { //Agregamos un listener de eventos al div "container".
		alert(event.target);
		
	});
};
/* Una manera menos práctica de hacerlo. Agregando cada elemento a una variable y asignadole a cada elemento una alerta.

window.onload = function loadFn() {
    let btn1 = document.getElementById("btn1");
    let anchor1 = document.getElementById("anchor1");
    let img1 = document.getElementById("img1");

    btn1.addEventListener("click", function() {
        alert("btn1");
    });

    anchor1.addEventListener("click", function() {
        alert("anchor1");
    });

    img1.addEventListener("click", function() {
        alert("img1");
    });
};
*/