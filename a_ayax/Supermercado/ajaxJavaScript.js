window.onload=function(){

//Obtenemos los datos JSOM con un objeto XMLHttpRequest
peticion_datosJSon=new XMLHttpRequest();
peticion_datosJSon.onreadystatechange=solicitudDatosJson;
//peticion_datosJSon.open("GET", "https://github.com/dammonmarrod/archivosJsonXml/blob/main/JsonSupermercado.json", true);
peticion_datosJSon.open("GET", "JsonSupermercado.json", true);
peticion_datosJSon.send(null);
var datosRecibidosJSon;



peticion_datosXML=new XMLHttpRequest();
peticion_datosXML.onreadystatechange=solicitudDatosXML;
//peticion_datosXML.open("GET", "https://github.com/dammonmarrod/archivosJsonXml/blob/main/XMLSupermercado.xml", true);
peticion_datosXML.open("GET", "XMLSupermercado.xml", true)
peticion_datosXML.send(null);
var datosRecibidosXML;

function solicitudDatosJson(){
    if (peticion_datosJSon.readyState===4) {
        if (peticion_datosJSon.status === 200) {
            /*Obtenemos los datos que lo guardamos en la variable datosRecibidos */
            datosRecibidosJSon=JSON.parse(this.responseText); //Cuando lo que recibimos es un JSON
            //Recibimos un texto que tenemos que parsear para convertirlo en un JSON y se guarde en un objeto que es un array
            console.log(datosRecibidosJSon);
        }
    }
}//fin de function solicitud datos


function solicitudDatosXML(){
    if (peticion_datosXML.readyState===4) {
        if (peticion_datosXML.status === 200) {
            /*Obtenemos los datos que lo guardamos en la variable datosRecibidos */
            datosRecibidosXML=this.responseXML; //Cuando lo que recibimos es un XML
            console.log(datosRecibidosXML);
        }
    }
}//fin de function solicitud datos




}//Fin del window.onload


