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
	//btAnterior.disabled="disabled"; Admite también esta forma

	//Escuchadores
	btSiguiente.addEventListener("click",pasarImagenSiguiente);
	btAnterior.addEventListener("click",pasarImagenAnterior);
	btUltimo.addEventListener("click",pasarImagenUltimo);
	btPrimero.addEventListener("click",pasarImagenPrimero);


	}//fin window.onload

	function pasarImagenSiguiente(){
		btAnterior.disabled=false;//Recuperan su funcionalidad
		btPrimero.disabled=false;//Recuperan su funcionalidad
		
		//Si lo ponemos encima del array; no afecta a la condición y entonces posicion es igual a arrayImagenes.length-1
		if(posicion<arrayImagenes.length-1){
			posicion++;//si lo ponemos antes 
			console.log(posicion);
			contenedorImagen.src=arrayImagenes[posicion];
			if(posicion==arrayImagenes.length-1){//Cuando la posición es igual a la longitud del array -1. Los botones pierden su funcionalidad
				btUltimo.disabled=true;
				btSiguiente.disabled=true;
			}  
		}
	}

	function pasarImagenAnterior(){
		btSiguiente.disabled=false; //Recuperan su funcionalidad
		btUltimo.disabled=false; //Recuperan su funcionalidad
		posicion--;
		if(posicion!=0){
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
		posicion=arrayImagenes.length-1;//El valor de la posición ahora se corresponderá a la imagen ultima del array
		contenedorImagen.src=arrayImagenes[posicion];
		btSiguiente.disabled=true;
		btUltimo.disabled=true;
		


	}

	function pasarImagenPrimero(){
		btSiguiente.disabled=false;
		btUltimo.disabled=false;
		posicion=0;//La posición corresponderá a la imagen primera del array
		contenedorImagen.src=arrayImagenes[posicion];
		btAnterior.disabled=true;
		btPrimero.disabled=true;
		
		console.log(posicion);
	}
