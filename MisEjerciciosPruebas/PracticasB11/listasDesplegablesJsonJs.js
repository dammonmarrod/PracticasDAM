

window.onload=fucntion(){
	descargaArchivo();

	//Evento onchange cuando es seleccionado
	document.getElementById("primerSelect").onchange=cambiarCampos;

}//fin windows.onload

function descargaArchivo() {
			console.log("entra en descargaArchivo");
			// Obtener la instancia del objeto XMLHttpRequest
			peticion_http = new XMLHttpRequest();
			// Preparar la funcion de respuesta
			peticion_http.onreadystatechange = muestraContenido;
			// Realizar peticion HTTP
			//evita el problema del cache que no permite leer archivos nocache
			peticion_http.open('GET', 'listadoCiudades.jsonnocache=' + (new Date()).getTime(), true);
			peticion_http.send(null);
				function muestraContenido() {
					if(peticion_http.readyState == 4) {
						if(peticion_http.status == 200) {
							var respuesta=peticion_http.responseText;
							var objeto_json=JSON.parse(respuesta);//convertimos los datos en un objeto Json
							console.log(objeto_json);//array de objetos
							provincias=objeto_json.listadoCiudades.provincias;
							console.log(provincias);
					}
				}
			}//fin de muestraContenido
}//fin de la funcion descargaArchivo





//funcion para cambiar
function cambiarCampos(){
	console.log("dentroCambiarCampos")
	//Recogemos el valor seleccioando en el primer Select
	var primerSelect= document.getElementById("primerSelect").value;
	//Obtengo el valor de value
	console.log(primerSelect);


	console.log(objeto_json);//array de objetos
	//Vamos a declarar la función cuando algo este seleccionado.
	if(primerSelect !=0){//Si esta seleccionada alguna opcion
	console.log("entra en el select");

	//Reseteamos los datos de los select anteriores
		if(document.getElementById("segundoSelect").length>0){
			document.getElementById("segundoSelect").length=0;
		}

		//Según la opción elegida creamos un nodo u otro
			switch(primerSelect) {
				//según el value seleccionado se accederá a un array u otro
				case "1":
					var tamañoArray=galicia.length; //defino cuantas opciones dibujare
					for(var i=0; i<tamañoArray; i++){
						//Creamos la etiqueta opction
						var elementoOpcion=document.createElement("option");
						//creamos el texto que incluiremos dentro de la etiqueta
						var texto= document.createTextNode(galicia[i]);
						console.log(texto);
						//pegamos el texto a la etiqueta
						elementoOpcion.appendChild(texto);
						//pegamos la etiqueta opction al select
						document.getElementById("segundoSelect").appendChild(elementoOpcion);
					}
					break;

				case "2":
					var tamañoArray=asturias.length; //defino cuantas opciones dibujare
					for(var i=0; i<tamañoArray; i++){
						var elementoOpcion=document.createElement("option");
						var texto= document.createTextNode(asturias[i]);
						console.log(texto);
						elementoOpcion.appendChild(texto);
						document.getElementById("segundoSelect").appendChild(elementoOpcion);
					}
					break;
				case "3":
					var tamañoArray=cantabria.length; //defino cuantas opciones dibujare
					for(var i=0; i<tamañoArray; i++){
						var elementoOpcion=document.createElement("option");
						var texto= document.createTextNode(cantabria[i]);
						console.log(texto);
						elementoOpcion.appendChild(texto);
						document.getElementById("segundoSelect").appendChild(elementoOpcion);
					}
					break;
				case "4":
					var tamañoArray=paisVasco.length; //defino cuantas opciones dibujare
					for(var i=0; i<tamañoArray; i++){
						var elementoOpcion=document.createElement("option");
						var texto= document.createTextNode(paisVasco[i]);
						console.log(texto);
						elementoOpcion.appendChild(texto);
						document.getElementById("segundoSelect").appendChild(elementoOpcion);
					}
					break;
				case "5":
					var tamañoArray=castillaLeon.length; //defino cuantas opciones dibujare
					for(var i=0; i<tamañoArray; i++){
						var elementoOpcion=document.createElement("option");
						var texto= document.createTextNode(castillaLeon[i]);
						console.log(texto);
						elementoOpcion.appendChild(texto);
						document.getElementById("segundoSelect").appendChild(elementoOpcion);
					}
					break;

			}//fin del switch
				
		}//fin del if	

}//fin function cambiarCampos


