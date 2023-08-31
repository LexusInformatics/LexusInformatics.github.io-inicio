$(document).ready(function() {
    $("#ia").click(function() {
        llamar_modal("Inteligencia Artificial", "Servicios","1");
    });
    $("#iot").click(function() {
        llamar_modal("Internet de las cosas", "Servicios","2");
    });
    $("#fron").click(function() {
        llamar_modal("Diseño Frontend", "Servicios","3");
    });
    $("#back").click(function() {
        llamar_modal("Desarrollo Backend", "Servicios","4");
    });
    $("#onli").click(function() {
        llamar_modal("Clases Online", "Clases y proyectos","5");
    });

    $("#close").click(function() {
        cerrar_modal();
    });


});

var ia=["Desarrollo de productos y servicios basados en I.A.","Construir, entrenar y aplicar redes neuronales.","Desarrollar soluciones electrónicas y mecánicas orientadas al diseño."];
var iot=["Diseño y desarrollo de placas de circuito para dispositivos IoT.","Programación de microcontroladores y microprocesadores para operar los dispositivos.","Creación de aplicaciones móviles y web para controlar y monitorizar dispositivos IoT.","Diseño de esquemas eléctricos y circuitos para la funcionalidad deseada.","Implementación de sistemas operativos en tiempo real (RTOS)","Configuración de módulos de comunicación para transmitir y recibir datos.","Integración de tecnologías de comunicación como Wi-Fi, Bluetooth, Zigbee, LoRa, etc."];
var fron=["Desarrollo de Interfaces web y móvil.","Manejo de diferentes lenguajes de programación: Angular, JavaScript, HTML.","Integración de APIs y servicios de terceros para ampliar la funcionalidad.","Conocimientos de herramientas y programas tecnológicos.","Ofrecemos cursos o talleres para enseñar habilidades front-end a otros."];
var back=["Manejo en diferentes lenguajes.","Implementación de tecnologías.","Seguridad.","Microservicios.","Manejo de motores de base datos: SQL & PostgreSQL.","Desarrollo de Api."];
var curso=["Manejo de herramientas de Ofimática.","Cálculos estructurales.","Cálculo y diseño de intercambiadores de color.","Matemáticas avanzadas.","Física teórica y aplicada.","Análisis de transferencia de calor","Manejo de software sap200, MDSolis, Mathcad Diagrama de flujo, Minitab.", "Asesorías en áreas de física y química.","Elaboración de documentos:  tesis, proyectos, paper, artículos."];
function llamar_modal(titulo, contenido, id) {
    document.getElementById('lista').innerHTML = '';
/*IA */
if(id==="1")
 {
 document.getElementById("modal").style.display = "block";
 document.getElementById("titulo").innerHTML = titulo;
 document.getElementById("texto_Ecabezado").innerHTML = contenido;

 for (i = 0; i < ia.length; i++) 
 {
     var li = document.createElement("li");
     var p = document.createElement("p");
     p.appendChild(document.createTextNode(ia[i]));
     document.querySelector("#lista").appendChild(li).appendChild(p);
   }
 }
/*iot*/
if(id==="2")
 {
 document.getElementById("modal").style.display = "block";
 document.getElementById("titulo").innerHTML = titulo;
 document.getElementById("texto_Ecabezado").innerHTML = contenido;

 for (i = 0; i < iot.length; i++) 
 {
     var li = document.createElement("li");
     var p = document.createElement("p");
     p.appendChild(document.createTextNode(iot[i]));
     document.querySelector("#lista").appendChild(li).appendChild(p);
   }
 }
   


 /*Fronend*/
 if(id==="3")
 {
 document.getElementById("modal").style.display = "block";
 document.getElementById("titulo").innerHTML = titulo;
 document.getElementById("texto_Ecabezado").innerHTML = contenido;

 for (i = 0; i < fron.length; i++) 
 {
     var li = document.createElement("li");
     var p = document.createElement("p");
     p.appendChild(document.createTextNode(fron[i]));
     document.querySelector("#lista").appendChild(li).appendChild(p);
   }
 }
    /*backend*/
    if(id==="4")
    {
        document.getElementById("modal").style.display = "block";
 document.getElementById("titulo").innerHTML = titulo;
 document.getElementById("texto_Ecabezado").innerHTML = contenido;

 for (i = 0; i < back.length; i++) 
 {
     var li = document.createElement("li");
     var p = document.createElement("p");
     p.appendChild(document.createTextNode(back[i]));
     document.querySelector("#lista").appendChild(li).appendChild(p);
   }
}

    /*clase online */
    if(id==="5")
    {
    document.getElementById("modal").style.display = "block";
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("texto_Ecabezado").innerHTML = contenido;

    for (i = 0; i < curso.length; i++)
     {
        var li = document.createElement("li");
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(curso[i]));
        document.querySelector("#lista").appendChild(li).appendChild(p);
      }
    }


}

function cerrar_modal() {
    document.getElementById("modal").style.display = "none";
}