//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) { 
});

function guardar(){

   // creo el JSON "registro", a la que le agrego sus propiedades vacías.
   // en la variable perfil, convierto el json registro a un objeto de javascript
   // luego guardo cada valor de los inputs, en las propiedades del objeto perfil.
    registro = '{"name": "", "age": "", "email": "", "tel": ""}';
    
    perfil = JSON.parse(registro);

    perfil.name = document.getElementById("name").value;
    perfil.age = document.getElementById("edad").value;
    perfil.email = document.getElementById("email").value;
    perfil.tel = document.getElementById("tel").value;

    console.log(perfil);

    // guardo el objeto perfil como una cadena de string en la variable registrado.
    // para luego setearla bajo la key "Datos". Que luego será leída en el init
    // para acceder a los datos y mostrarlos en pantalla
    registrado = JSON.stringify(perfil);

    localStorage.setItem("Datos", registrado);
    localStorage.setItem("Nombre completo", perfil.name);
    localStorage.setItem("Edad", perfil.age);
    localStorage.setItem("Email", perfil.email);
    localStorage.setItem("Telefono", perfil.tel);

    console.log(registrado);
}

//Una vez que el usuario registra sus nombres, se muestran en pantalla:

function mostrar(){

    let parrafo1 = document.getElementById("namespan");
    let contenido1 = "";
    if(localStorage.getItem("Nombre completo")){
         contenido1 += localStorage.getItem("Nombre completo");
         parrafo1.innerHTML=contenido1;
    }

    let parrafo2 = document.getElementById("agespan");
    let contenido2 = "";
    if(localStorage.getItem("Edad")){
         contenido2 += localStorage.getItem("Edad");
         parrafo2.innerHTML=contenido2;
    }

    let parrafo3 = document.getElementById("emailspan");
    let contenido3 = "";
    if(localStorage.getItem("Email")){
        contenido3 += localStorage.getItem("Email");
        parrafo3.innerHTML=contenido3;
    }

    let parrafo4 = document.getElementById("telspan");
    let contenido4 = "";
    if(localStorage.getItem("Telefono")){
         contenido4 += localStorage.getItem("Telefono");
         parrafo4.innerHTML=contenido4;
    }
};



//funciones para validar el cambio de datos
function validatePerfilName(){
    var name = document.getElementById("name").value;
    if(name == ""){
       document.getElementById("validar-name").style.display = "block";
       return false;
    }else{
       document.getElementById("validar-name").style.display = "none";
       return true;
    }
 }

 function validatePerfilAge(){
    var age = document.getElementById("edad").value;
    if(age == ""){
       document.getElementById("validar-age").style.display = "block";
       return false;
    }else{
       document.getElementById("validar-age").style.display = "none";
       return true;
    }
 }

 function validatePerfilEmail(){
    var email = document.getElementById("email").value;
    if(email == ""){
       document.getElementById("validar-email").style.display = "block";
       return false;
    }else{
       document.getElementById("validar-email").style.display = "none";
       return true;
    }
 }

 function validatePerfilTel(){
    var tel = document.getElementById("tel").value;
    if(tel == ""){
       document.getElementById("validar-tel").style.display = "block";
       return false;
    }else{
       document.getElementById("validar-tel").style.display = "none";
       return true;
    }
 }

function validarRegistro(){
    var name = validatePerfilName();
    var age = validatePerfilAge();
    var email = validatePerfilEmail();
    var tel = validatePerfilTel();
    var correct = name && age && email && tel;
    if(correct){
        guardar();
        mostrar();
    }

}



