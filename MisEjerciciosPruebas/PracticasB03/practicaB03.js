window.onload=function(){//Para que se ejecute el script al cargarse la página

	var salida=1;
	var arrayNombres=new Array();//creamos el array donde guardaremos los datos recogidos del usuario
	var cont=0;

	do{ //por lo menos tendremos que hacerlo una vez
		nombre=prompt("Introduce un nombre para guardarlo ;.");
		console.log("El resultado del prompt es: " + nombre);


		if(nombre!=null){//si ha dado a aceptar
			if(!(isNaN (nombre))){//comprobamos si hay introducido un valor númerico
					alert("El valor introducido es un número, y esto no es válido");
			}
			else{
				arrayNombres[cont]=nombre;
				console.log(arrayNombres);
				console.log("valor contador antes incremento " + cont);
				cont++;
				console.log("valor contador despues incremento " + cont);
				console.log("Longitud del array "+ arrayNombres.length);
			}
		}else{//Si le da a cancelar
			if(cont==0){//comprobamos que al menos se haya guardado un nombre
				alert("Debes introducir al menos un nombre.");
			}else{
				salida=0;
			}
			
		}

	}while(salida==1);
	alert("He salido del bucle");
	document.getElementById("nombreIntroducido").innerHTML="Los nombres introducidos son: " + arrayNombres;
	arrayNombres.sort();
	document.getElementById("nombreOrdenador").innerHTML="Los nombres ordenados son: " + arrayNombres;



}//fin del window.onload
