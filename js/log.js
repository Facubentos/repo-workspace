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
    // let campotres = document.getElementById("num").value;
    // let innum = "";

    // if(campotres == "" || campotres == null || isNaN(document.getElementById("num").value) ){

    //     innum += `
    //     <p>*Debe ingresar un número*</p>
    //     `
    //     document.getElementById("errornum").innerHTML = innum;
    //     return false;
    // }
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