window.onload=function(){

	imagen1Superior=document.getElementById("imagen1Superior");
	imagen2Superior=document.getElementById("imagen2Superior");
	imagen3Superior=document.getElementById("imagen3Superior");

	arrayImagenes=["imagen1.jpg","imagen2.jpg","imagen3.jpg","imagen4.jpg","imagen5.jpg","imagen6.jpg"];

	imagen1Superior.setAttribute("src",arrayImagenes[0]);
	console.log(imagen1Superior.src);
	imagen2Superior.setAttribute("src",arrayImagenes[1]);
	imagen3Superior.setAttribute("src",arrayImagenes[2]);


	imagen1Inferior.setAttribute("src",arrayImagenes[1]);
	console.log(imagen1Inferior.src);
	imagen2Inferior.setAttribute("src",arrayImagenes[3]);
	imagen3Inferior.setAttribute("src",arrayImagenes[5]);


	imagen1Inferior.onmouseover=fRatonEncima1;
	imagen1Inferior.onmouseout=fRatonFuera1;

	imagen2Inferior.onmouseover=fRatonEncima2;
	imagen2Inferior.onmouseout=fRatonFuera2;


	imagen3Inferior.onmouseover=fRatonEncima3;
	imagen3Inferior.onmouseout=fRatonFuera3;




	indiceInterval= setInterval(cambiarImagen,2000);//Cambia de imagen cada 2 segundos
		
	//Para finalizar el intercambio de imágenes
	setTimeout(finaldelIntervalo, 20000);//finalizar a los 2 minutos
			

}//fin window.onload

/*función para cambiar entre imagenes */
function cambiarImagen(){
	console.log(imagen1Superior.getAttribute("src"));
	if(imagen1Superior.getAttribute("src")==arrayImagenes[0]){
		imagen1Superior.src=arrayImagenes[3];
	}else{
		imagen1Superior.src=arrayImagenes[0];
	}


	if(imagen2Superior.getAttribute("src")==arrayImagenes[1]){
		imagen2Superior.src=arrayImagenes[4];
	}else{
		imagen2Superior.src=arrayImagenes[1];
	}


	if(imagen3Superior.getAttribute("src")==arrayImagenes[2]){
		imagen3Superior.src=arrayImagenes[5];
	}else{
		imagen3Superior.src=arrayImagenes[2];
	}
}


//La imagen de una celda de la fila de abajo cambia al pasar el puntero del ratón por encima de la celda y vuelve a la imagen original al salir, esto se realiza para cada una de las celdas.
function fRatonEncima1(){
	imagen1Inferior.src=arrayImagenes[0];
}
		
function fRatonFuera1(){
	imagen1Inferior.src=arrayImagenes[1];

}

function fRatonEncima2(){
	imagen2Inferior.src=arrayImagenes[2];
}

function fRatonFuera2(){
	imagen2Inferior.src=arrayImagenes[3];
}

function fRatonEncima3(){
	imagen3Inferior.src=arrayImagenes[4];
}
		
function fRatonFuera3(){
	imagen3Inferior.src=arrayImagenes[5];
}





/*funcion para finalizar el intervalo*/
function finaldelIntervalo(){
		clearInterval(indiceInterval);
}
