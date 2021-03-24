/*Las banderas 
consiste en el do-while poner una variable que me haga funcionar el bucle hasta que una condición se cumpla
*/


salida=1;//equivale a salida=true;
var datos= new Array();
var cont=0;
var suma=0;
do{
  dato=prompt("Introduce un dato");
    //prompt devuelve un String independiente de lo que tu hayas introducido
    //Sin meter nada devuelve un String con una cadena vacia
    //Si damos a cancelar nos devuelve null
  if(dato){// Le preguntamos si existe dato
    if(!isNaN(dato)){//Es un número
    //isNan nos dice sino es un número !isNan cuando es un número
      datos=push(parseInt(dato));//Como obtengo String con prompt pero quiero un dato tipo numérico
      console.log(datos);
      //push()mete un elemento al final del array
      //pop() quita un elemento del final del array
      cont ++;
    }else{//No es numero
    }
  }else{//Cuando no mete datos
    if(dato==null){//si da a cancelar
      if(cont !=0){//si el contador es diferente de 0 
        salida=0;//Así consigo que salga del bucle cuando doy a cancelar y cuando el contador valga más de 1 //equivale a salida=false;
      }else{
        alert("debes introducir al menos un dato númerico");
      }
    }else{//si otra situación que sería si no mete nada
    
    }
  
  }
}while(salida==1); //Mientras salida sea igual a 1 //equivale a while(salida);

 console.log(datos);
 for(var i=0; i<datos.length; i++){
    suma =suma + datos[i];
 }
 resultado=suma/datos.length;//La longitud del array
 alert(resultado);
 
