window.onload=function(){
//Declaro un array de objetos
todosProgramas=[
		{ nombre:"Programar es una mierda", descripcion: "Desarrollo de software. Programar es muy divertido, pero a veces se vuelve un infierno. Mejor tomárselo con humor. Presentan Juan José Meroño y Àlex Ballesté", link:"https://www.ivoox.com/perfil-programar-es-mierda_aj_7852368_1.html", twitter: "progesunam", email:"programaresunamierda@gmail.com"},
		{ nombre:"Code on the rocks", descripcion: "Hablamos desde 2014 con referentes del mundo tecnológico con un tono relajado", link:"https://www.ivoox.com/podcast-code-on-the-rocks_sq_f1126861_1.html", twitter: "codeontherocks", email:"codeontherocks9@gmail.com"},
		{ nombre:"NoSoloTech ", descripcion: "Tech y mucho más de la mano de Diana Aceves @diana_aceves_ , Félix López @flopezluis, Katia Aresti @karesti y Jorge Barrachina @NTKOG", link:"https://www.ivoox.com/podcast-nosolotech-podcast_sq_f1851397_1.html", twitter: "NoSoloTech", email:""},
		];
console.log(todosProgramas[0]);

//Capturamos los diferentes elementos de html para modificar el dom
var nombre= document.getElementById("nombre").onclick=ordenar;
var descripcion= document.getElementById("descripcion").onclick=ordenar;
var link= document.getElementById("link").onclick=ordenar;
var twitter= document.getElementById("twitter").onclick=ordenar;
var email= document.getElementById("email").onclick=ordenar;

cuerpoTabla= document.getElementById("cuerpoTabla");
var botonGenerarTabla= document.getElementById("botonGenerarDatos").onclick=generarDatos;
var botonOrdenarDescripcion= document.getElementById("botonOrdenarDescripcion").onclick=ordenar;

cont=0;//Para contabilizar las veces que se ha echo click
console.log("sin entrar en el bucle ordenar cont= " + cont);
}//fin function window.onload

//Rellena la tabla llamamos a los arrays y la rellenamos
function generarDatos(){
	//Mostramos los datos por pantalla
	cuerpoTabla.innerHTML=""; //Nos aseguramos que la tabla esta vacia
	for(var i=0; i<todosProgramas.length; i++){
		
		//Lo escribimos en el dom 
		cuerpoTabla.innerHTML += 
		"<tr>" +
			"<td>" + todosProgramas[i].nombre +"</td>" +
			"<td>" + todosProgramas[i].descripcion+"</td>" +
			"<td>" + todosProgramas[i].link +"</td>" +
			"<td>" + todosProgramas[i].twitter +"</td>" +
			"<td>" + todosProgramas[i].email +"</td>" +
		"</tr>";
	}


}//fin function generarDatos

//ordena la tabla

function ordenar(){
	console.log("entrando en el bucle ordenar cont=" +cont);
	if(cont==0){//Si se ha pulsado 1 vez
		//Reseteamos los datos de los select anteriores
		cuerpoTabla.innerHTML=""; //Nos aseguramos que la tabla esta vacia
		///Los datos estan guardados en el array todosProgramas
		//El método sort ordena todos los datos
		//Como quiero que ordene en función de la descripcion
		todosProgramas.sort(//Creamos una función para ordenar
		function (elem1,elem2) {//Ordena de la A a la Z comparando los elementos
			//El método localeCompare() devuelve un número que indica si la cadena de caracteres actual es anterior, posterior o igual
			// a la cadena pasada como parámetro, en orden lexicográfico.
			return  elem1.descripcion.toLowerCase().localeCompare(elem2.descripcion.toLowerCase());//Como es un String de datos
		}
		);
		//Volvemos a pintar la tabla
		for(var i=0; i<todosProgramas.length; i++){
			//Lo escribimos en el dom 
			cuerpoTabla.innerHTML += 
			"<tr>" +
				"<td>" + todosProgramas[i].nombre +"</td>" +
				"<td>" + todosProgramas[i].descripcion+"</td>" +
				"<td>" + todosProgramas[i].link +"</td>" +
				"<td>" + todosProgramas[i].twitter +"</td>" +
				"<td>" + todosProgramas[i].email +"</td>" +
			"</tr>";
		}
		cont ++;//sumamos 1 al contador
		console.log("habiendo echo click una vez cont=" +cont);
	}else{//Si se pulsan 2 veces
		cuerpoTabla.innerHTML=""; 
		todosProgramas.sort(
		function (elem1,elem2) {//Ordena de Z a la A comparando los elementos
			//El método localeCompare() devuelve un número que indica si la cadena de caracteres actual es anterior, posterior o igual
			// a la cadena pasada como parámetro, en orden lexicográfico.
			return  elem2.descripcion.toLowerCase().localeCompare(elem1.descripcion.toLowerCase());//Como es un String de datos
		}
		);
		//Volvemos a pintar la tabla
		for(var i=0; i<todosProgramas.length; i++){
			//Lo escribimos en el dom 
			cuerpoTabla.innerHTML += 
			"<tr>" +
				"<td>" + todosProgramas[i].nombre +"</td>" +
				"<td>" + todosProgramas[i].descripcion+"</td>" +
				"<td>" + todosProgramas[i].link +"</td>" +
				"<td>" + todosProgramas[i].twitter +"</td>" +
				"<td>" + todosProgramas[i].email +"</td>" +
			"</tr>";
		}
		cont=0;//Lo volvemos a poner a cero el contador
	}
	
}//fin function ordenar
