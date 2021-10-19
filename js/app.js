import { ajax } from "./ajax.js";
import { registro } from "./users.js";

let url;
export let usuarios = [];

let producto = document.getElementById("producto");

let infoProducto =document.getElementById("infoProducto");

let optionsNav = document.querySelectorAll(".options");

for (let i = 0; i < optionsNav.length; i++) {
    optionsNav[i].addEventListener("click", router);
}

function router () {

    producto.className = "";
    infoProducto.className = "hidden";

    let rutaActual = location.hash;

    switch (rutaActual) {

        case "#/registrar": url = "registrar.html"
        ajax(url);
        registro();
        
        break;

        case "#/ingresar": url = "ingresar.html";
        ajax(url);
        break;

        case "#/car": url = "car.html";
        ajax(url);
        break;
        
        default: alert("No escogiste el valor adecuado");
        url = "";
        break
    }
}

//Formulario de registro
