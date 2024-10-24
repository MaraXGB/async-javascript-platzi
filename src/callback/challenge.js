const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlAPI, true); //abrir conexion (tipo, url, bool)
    xhttp.onreadystatechange = function(event){ 
        if(xhttp.readyState ===4){ //pregunta si esta disponible.. 0 => no se ha inicializado 1 =>  loading send, 2 => send ejecutado, 3 => interactuando con la solicitud, 4 => llamada completada
            if(xhttp.status === 200){ // 200 => solicitud correcta
                callback(null, JSON.parse(xhttp.responseText));
            }
            else {
                const error = new Error('Error '+ urlAPI);
                return callback(error, null);
            }
        }   
    }
    xhttp.send();
}

fetchData(`${API}/products`, function(error1,data1){ // llamar a la petición obtiene el error
    if(error1) return console.error(error1); //mostrar en consola el error
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){ //obtiene el data
        if(error2)  return console.error(error2); //mostrar en consola el error
        fetchData(`${API}/categories/${data2?.category?.id}`,function(error3, data3){ //con ?, Si se escribe mal algun dato del objeto no devuelve error
            if(error3)  return console.error(error3); //mostrar en consola el error
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        }); 
    });
 });