window.onload=function(){

	document.getElementById("dia2").onclick=generarcita;


}//fin window.onload

function generarcita(){
	window.opener.document.getElementById("textoMostrar").innerHTML="La cita del día 2 es: No te olvides";
}
