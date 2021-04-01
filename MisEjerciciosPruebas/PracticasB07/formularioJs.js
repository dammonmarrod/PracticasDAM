
window.onload= function(){


	//Obtenemos el valor de lo que se ha escrito en cada espacio
	var name= document.getElementById("textName").value;
	var email= document.getElementById("email").value;


	console.log(name + " " + email + " ");


	document.getElementById("email").focus(); //establece el foco del formulario en el campo que se le indica



}//end window.onload





/*
Field.focus(): establece el foco del formulario en el campo que se le indica

Form.disabled(): deshabilita todo el formulario deshabilitando todos sus campos
Form.enable(): habilita el formulario completo habilitando todos sus campos

Form.focusFirstElement(): pone el foco del formulario en el primer campo que sea visible y esté habilitado

Form.reset(): resetea el formulario completo, ya que es equivalente al método reset() de JavaScript
*/
