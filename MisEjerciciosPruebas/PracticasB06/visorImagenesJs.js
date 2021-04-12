window.onload=function(){

	//Array con las imagenes
	arrayImagenes=["imagen1.jpg","imagen2.jpg","imagen3.jpg","imagen4.jpg","imagen5.jpg","imagen6.jpg",];
	posicion=0;

	contenedorImagen=document.getElementById("contenedorImagen");
	btAnterior=document.getElementById("btAnterior");
	btPrimero =document.getElementById("btPrimero");
	btUltimo=document.getElementById("btUltimo");
	btSiguiente=document.getElementById("btSiguiente");

	//Al comenzar el boton anterior y primero tienen que estar quitados
	btAnterior.disabled=true;
	btPrimero.disabled=true;


	//Escuchadores
	btSiguiente.addEventListener("click",pasarImagenSiguiente);
	btAnterior.addEventListener("click",pasarImagenAnterior);
	btUltimo.addEventListener("click",pasarImagenUltimo);
	btPrimero.addEventListener("click",pasarImagenPrimero);


}//fin window.onload

function pasarImagenSiguiente(){
	btAnterior.disabled=false;
	btPrimero.disabled=false;
	if(posicion !=arrayImagenes.length){
		console.log(posicion);
		++posicion;
		contenedorImagen.src=arrayImagenes[posicion];
	}else{
		btUltimo.disabled=true;
		btSiguiente.disabled=true;
	}
}

function pasarImagenAnterior(){
	btSiguiente.disabled=false;
	btUltimo.disabled=false;
	if(posicion !=0){
		--posicion;
		console.log(posicion);
		contenedorImagen.src=arrayImagenes[posicion];
	}else{
		btAnterior.disabled=true;
		btPrimero.disabled=true;
	}
}

function pasarImagenUltimo(){
	btAnterior.disabled=false;
	btUltimo.disabled=false;
	console.log(arrayImagenes.length);
	contenedorImagen.src=arrayImagenes[arrayImagenes.length-1];
	btSiguiente.disabled=true;


}

function pasarImagenPrimero(){
	btSiguiente.disabled=false;
	btUltimo.disabled=false;
	contenedorImagen.src=arrayImagenes[0];
	btAnterior.disabled=true;
	
}



