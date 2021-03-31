window.onload=function(){

var arrayNombres=new Array();
var nombre;
var salida=1;
var cont=0;

do{//Mientras no se de a cancelar
	nombre=prompt("Introduce tu nombre");
	console.log(nombre);
	if(nombre==null){//Si pulsa a cancelar
		salida==0;//salimos del bucle
	}
	else{//Mientras que no pulse a cancelar se guardan los nombres
		arrayNombres[cont]=nombre;
		cont++;
		console.log(cont);
		console.log(arrayNombres);
		console.log(arrayNombres.length);
	}	
}while(salida==1);

document.getElementById("nombreIntroduccido").innerHTML="Los nombres introducidos son: " + arrayNombres;


}//fin del window.onload
