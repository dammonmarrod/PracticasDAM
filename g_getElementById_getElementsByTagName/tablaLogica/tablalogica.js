window.onload=function(){

   //TABLA DEL AND
    var tablaAnd=document.getElementById("tablaAnd");
    var tabla=tablaAnd.getElementsByTagName("td");
    console.log(tabla);
    console.log(tabla.length);
    console.log(tabla[2].textContent);

    cPrimera=tabla[3].textContent;
    cSegunda=tabla[4].textContent;
    cTercera=tabla[5];
    console.log("valor cprimera " + cPrimera + " valor cSegunda " + cSegunda); 
    tablaLogicaAnd(cPrimera,cSegunda,cTercera);
    
    
    cPrimera=tabla[6].textContent;
    cSegunda=tabla[7].textContent;
    cTercera=tabla[8];
    console.log("valor cprimera " + cPrimera + " valor cSegunda " + cSegunda); 
     tablaLogicaAnd(cPrimera,cSegunda,cTercera);

    cPrimera=tabla[9].textContent;
    cSegunda=tabla[10].textContent;
    cTercera=tabla[11];
    console.log("valor cprimera " + cPrimera + " valor cSegunda " + cSegunda); 
    tablaLogicaAnd(cPrimera,cSegunda,cTercera);

    cPrimera=tabla[12].textContent;
    cSegunda=tabla[13].textContent;
    cTercera=tabla[14];
    console.log("valor cprimera " + cPrimera + " valor cSegunda " + cSegunda); 
    tablaLogicaAnd(cPrimera,cSegunda,cTercera);


   //tABLA DEL OR
    var tablaOr=document.getElementById("tablaOr");
    var tabla=tablaOr.getElementsByTagName("td");
    console.log(tabla);
    console.log(tabla.length);
    console.log(tabla[2].textContent);

    cPrimera=tabla[3].textContent;
    cSegunda=tabla[4].textContent;
    cTercera=tabla[5];
    console.log("valor cprimera " + cPrimera + " valor cSegunda " + cSegunda); 
    tablaLogicaOr(cPrimera,cSegunda,cTercera);
    
    
    cPrimera=tabla[6].textContent;
    cSegunda=tabla[7].textContent;
    cTercera=tabla[8];
    console.log("valor cprimera " + cPrimera + " valor cSegunda " + cSegunda); 
    tablaLogicaOr(cPrimera,cSegunda,cTercera);

    cPrimera=tabla[9].textContent;
    cSegunda=tabla[10].textContent;
    cTercera=tabla[11];
    console.log("valor cprimera " + cPrimera + " valor cSegunda " + cSegunda); 
    tablaLogicaOr(cPrimera,cSegunda,cTercera);

    cPrimera=tabla[12].textContent;
    cSegunda=tabla[13].textContent;
    cTercera=tabla[14];
    console.log("valor cprimera " + cPrimera + " valor cSegunda " + cSegunda); 
    tablaLogicaOr(cPrimera,cSegunda,cTercera);




    //tABLA DEL NOT
    var tablaOr=document.getElementById("tablaNot");
    var tabla=tablaOr.getElementsByTagName("td");
    console.log(tabla);
    console.log(tabla.length);
    console.log(tabla[1].textContent);

    cPrimera=tabla[2].textContent;
    cSegunda=tabla[3];
    console.log("valor cprimera " + cPrimera); 
    tablaLogicaNot(cPrimera,cSegunda);
    
    
    cPrimera=tabla[4].textContent;
    cSegunda=tabla[5];
    console.log("valor cprimera " + cPrimera ); 
    tablaLogicaNot(cPrimera,cSegunda,cTercera);

}//fin de window.onload


function tablaLogicaAnd(cPrimera, cSegunda,cTercera){
    if(cPrimera==0 && cSegunda==0){
        cTercera.innerHTML=0;
     }
     else if(cPrimera==0 && cSegunda==1){
        cTercera.innerHTML=0;
     }
     else if(cPrimera==1 && cSegunda==0){
        cTercera.innerHTML=0;
     }
     else if(cPrimera==1 && cSegunda==1){
        cTercera.innerHTML=1;
     }
}//fin funcion tablaLogicaAnd


function tablaLogicaOr(cPrimera, cSegunda,cTercera){
   if(cPrimera==0 && cSegunda==0){
       cTercera.innerHTML=0;
    }
    else if(cPrimera==0 && cSegunda==1){
       cTercera.innerHTML=1;
    }
    else if(cPrimera==1 && cSegunda==0){
       cTercera.innerHTML=1;
    }
    else if(cPrimera==1 && cSegunda==1){
       cTercera.innerHTML=1;
    }
}//fin funcion tablaLogicaOr


function tablaLogicaNot(cPrimera, cSegunda){
   if(cPrimera==0 ){
      cSegunda.innerHTML=1;
    }
    else if(cPrimera==1){
      cSegunda.innerHTML=0;
    }
}//fin funcion tablaLogicaOr
