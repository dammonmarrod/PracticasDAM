window.onload=function(){

		ejecutarAyaxWp();
	
}//fin window.onload

function ejecutarAyaxWp(){
			console.log("dentro funcion ejecutarAyax");

			//Obtenemos los datos XML con un objeto XMLHttpRequest
			peticion_datos=new XMLHttpRequest();
			peticion_datos.onreadystatechange=solicitudDatos;
			peticion_datos.open("GET", "marcas.json", true);
			peticion_datos.send(null);

			function solicitudDatos(){
				if (peticion_datos.readyState===4) {
					if (peticion_datos.status === 200) {
						/*Obtenemos los datos que lo guardamos en la variable datosRecibidos */
						datosRecibidos=JSON.parse(this.responseText); //Cuando lo que recibimos es un JSON
						//Recibimos un texto que tenemos que parsear para convertirlo en un JSON y se guarde en un objeto que es un array
						console.log(datosRecibidos);
			}
		}
	}//fin function solicitudDatos
}//fin function ejectuarAyaxWp
