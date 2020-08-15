//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){ 

});

function validate(){
    let campouno = document.getElementById("name").value;
    let contenido = "";

    if(campouno == "" || campouno == null){

        contenido +=`
        <p>*Debe ingresar un usuario*</p>
        <br>
        `
        document.getElementById("erroruser").innerHTML = contenido;
    return false;
    
}
    let campodos = document.getElementById("pass").value;
    let inpass = "";

    if(campodos == "" || campodos == null){

        inpass += `
        <p>*Debe ingresar una contraseña*</p>
        <br>
        `
        document.getElementById("errorpass").innerHTML = inpass;
        return false;
}
}

function enviar(){
    if(validate() == false) {
        return validate();
    }else{
        return link() 
    }
}

function link(){
    if(!validate()){
        return location.href="index.html"
    }
}