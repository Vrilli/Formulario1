
var  Nombre = [],
     Correo = [],
     Edad = [];
     
     
     
     
var elementoBotonEnviar = document.querySelector("#btn-Enviar");

elementoBotonEnviar.addEventListener("click", Enviar);

function Enviar() {
var Nombre = document.querySelector("#Nombre").value,
    Correo = document.querySelector("#Correo").value,
    Edad = document.querySelector("#number-label").value;

    
 Nombre.push(Nombre);
 Correo.push(Correo);
 Edad.push(Edad);


 localStorage.setItem("Nombre", JSON.stringify(Nombre));
 localStorage.setItem("Correo", JSON.stringify(Correo));
 localStorage.setItem("Edad", JSON.stringify(Edad));
}


     


































