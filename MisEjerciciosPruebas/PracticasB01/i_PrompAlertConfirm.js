window.onload=function(){

	//CONSOLE.LOG
	//Se ven las cosas por pantalla
	console.log(window);//se ven todos los métodos del navegador



	//ALERT
	//Tiene solo un boton de aceptar
	alert("Hola esto es una alert");


	//CONFIRM
	//Tiene un boton de aceptar o cancelar
	//Resultado verdadero o a falso
	confirm("Hola esto es un confirm");
	
	//Si lo guardamos en una variable
	//Devuelve true si se da a aceptar o false si se da a cancelar
	var valorConfirm=confirm("Lo que pulses del confirm se guardará en una variable");
	console.log(valorConfirm);


	//PROMPT
	//Permite que el usuario introduzca un valor
	//además tiene un aceptar y un cancelar
	prompt("Hola esto es un prompt");


	//Si lo guardamos en una variable
	var valorPrompt=prompt("Que quieres que se guarde en la variable");
	console.log(valorPrompt);
	//Si das cancelar devuelve null
	//Si Introduces algo y das aceptar guarda la variable
}
