window.onload=function(){
	

	document.getElementById("2").onclick=generarcita;
	document.getElementById("5").onclick=generarcita;
	document.getElementById("6").onclick=generarcita;
	document.getElementById("7").onclick=generarcita;
	document.getElementById("8").onclick=generarcita;
	document.getElementById("10").onclick=generarcita;
	document.getElementById("11").onclick=generarcita;
	document.getElementById("12").onclick=generarcita;



}//fin window.onload

function generarcita(){
	var diaCita=this.getAttribute("id");
	var arrayCitas=["","El mejor momento para plantar un árbol era hace 20 años. El segundo mejor momento es AHORA", "", "", "Cada día es una nueva oportunidad para cambiar tu vida.","La gente positiva es la que se cae, se levanta, se sacude, se cura los raspones, sonríe a la vida y dice:","El momento que da más miedo es siempre justo antes de empezar.", "Ningún mar en calma hizo experto a un marinero.", "", "El éxito en la vida no se mide por lo que logras sino por los obstáculos que superas.","Intenta ser un Arco iris en el día nublado de alguien","Cualquier cosa que te plante la vida florecela con gracia.", "", "", ""];
	var textoCita=arrayCitas[diaCita-1];
	
	window.opener.document.getElementById("textoMostrar").innerHTML="La cita del dia " + diaCita + " es:" + textoCita;
}
