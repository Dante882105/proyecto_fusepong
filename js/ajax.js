export function ajax (url) {
        
    const AJAX = new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener('load', (e) => {
            if (xhr.status == 200) {
                resolve(e.target.response);
            }else{
                reject("No se ha podido acceder al archivo, porfavor intente de nuevo más tarde");
            }
        })
        
        xhr.send();
    })

AJAX.then( res => {
    producto.innerHTML = res;
})

AJAX.catch( error => console.log(error));
}