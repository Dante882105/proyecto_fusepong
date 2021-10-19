import {usuarios} from "./app.js";
let user = [];
export function registro() {
    setTimeout(function () {
        let form = document.getElementById("registration");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            e.stopPropagation();
            let data = new FormData(form);
            data.forEach((valores)=>{
                user.push(valores);
                form.reset();        
            });
            usuarios.push(user);
            console.log(usuarios);
            
        })
        
    },2000) 
}