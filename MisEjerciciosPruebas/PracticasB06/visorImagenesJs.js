	window.onload=function(){

	//Array con las imagenes
	arrayImagenes=["imagen1.jpg","imagen2.jpg","imagen3.jpg","imagen4.jpg","imagen5.jpg","imagen6.jpg"];
	posicion=-1;
	

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
		btAnterior.disabled=false;//Recuperan su funcionalidad
		btPrimero.disabled=false;//Recuperan su funcionalidad
		if(posicion!=arrayImagenes.length-1){
			++posicion;
			console.log(posicion);
			contenedorImagen.src=arrayImagenes[posicion];
		}else{//Cuando la posición es igual a la longitud del array -1. Los botones pierden su funcionalidad
			btUltimo.disabled=true;
			btSiguiente.disabled=true;
		}
	}

	function pasarImagenAnterior(){
		btSiguiente.disabled=false; //Recuperan su funcionalidad
		btUltimo.disabled=false; //Recuperan su funcionalidad
		if(posicion!=0){
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
		btPrimero.disabled=false;
		contenedorImagen.src=arrayImagenes[arrayImagenes.length-1];
		btSiguiente.disabled=true;
		btUltimo.disabled=true;
		posicion=arrayImagenes.length-1;//El valor de la posición ahora se corresponderá a la imagen ultima del array


	}

	function pasarImagenPrimero(){
		btSiguiente.disabled=false;
		btUltimo.disabled=false;
		contenedorImagen.src=arrayImagenes[0];
		btAnterior.disabled=true;
		btPrimero.disabled=true;
		posicion=0;//La posición corresponderá a la imagen primera del array
		console.log(posicion);
	}
