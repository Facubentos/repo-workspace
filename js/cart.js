//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var info = {};

function showCart(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array["articles"].length; i++){
        let articulos = array["articles"][i];

        htmlContentToAppend += `

        <div id="producto`+i+`">
        <div class="row justify-content-end" >
          <small class="col-md-offset-11 col-md-1 mr-3" onclick="eliminar(`+i+`); sumaSubtotal()" style="color: red;">Eliminar</small>
        </div>
        <div class="row mb-3" >
              <img src="` + articulos.src +`" class="img-thumbnail col-lg-2" alt="foto`+i+`">

               <div class="col-lg-6 list-group-item">
                  <h4>`+ articulos.name + `</h4>
                   <div class="row py-1">
                     <div class="col-6 col-sm-8">
                        <p class="text-muted">Descripción</p>
                     </div>
                     <div class="col-6 col-sm-4">
                        <p class="text-muted">Cantidad</p>
                        <small class="text-muted">Seleccione cantidad</small>
                        <input class="col-md-8" type="number" id="input`+i+`" name="cantidad" min="1" placeholder="" onchange="mostrarTotal('`+ articulos.currency +`', `+ articulos.unitCost +`, this.value, `+ i +`); sumaSubtotal();">   
                     </div>
                   </div>
                </div>
         
           <div class="col-lg-2 list-group-item">
                  <h5 class="text-center">Valor unitario</h5>
               <div class="py-4 ml-4">
                 <span>`+ articulos.unitCost + `</span>
                 <span>`+ articulos.currency + `</span>
               </div>
            </div>

           <div class="col-lg-2 list-group-item"> 
              <h5 class="text-center">Total</h5>
              <div class="py-4 ml-4">
              <span id="parr`+i+`" class="sub"></span>
              <span id="curren`+i+`"></span>
              </div>
           </div> 
           </div>
     </div>
     <div>
        `
    }
    document.getElementById("cartContainer").innerHTML = htmlContentToAppend;
}


//función para calcular el primer subtotal
function mostrarTotal(currency, costo, cantidad, i){
   if (currency == "UYU"){
   var total = costo*cantidad;
   var text = total;
   document.getElementById("parr"+i).innerHTML = text;
   document.getElementById("curren"+i).innerHTML = "UYU";
}else{
   var total = costo*cantidad;
   var text = total * 40;
   document.getElementById("parr"+i).innerHTML = text;
   document.getElementById("curren"+i).innerHTML = "UYU";
}
}


//funciones de envío:
var finalsub = document.getElementById('subtotalid');
function premium(){
    envio = parseInt(finalsub.innerHTML);
    finalenv = Math.round(envio * 0.15);
   document.getElementById('envioid').innerHTML =finalenv+ " UYU";
}



function express(){
    envio = parseInt(finalsub.innerHTML);
    finalenv = Math.round(envio * 0.7);
   document.getElementById('envioid').innerHTML =finalenv+ " UYU";
}


function standard(){
    envio = parseInt(finalsub.innerHTML);
    finalenv = Math.round(envio * 0.5);
   document.getElementById('envioid').innerHTML =finalenv+ " UYU";
}

//funcion para el total
var finalenv = document.getElementById('envioid');
function totalcompra(){
   sumasub = parseInt(finalsub.innerHTML);
   total = sumasub + finalenv;
   document.getElementById('totalid').innerHTML = total + " UYU"
   $('#confirm').removeClass('disabled');
   $('#confirm').attr('onclick', 'abrirModal()');
}


// Agregué en el input la función, asignandole como parámetros: 
// el costo que se muestra en el JSON, y la cantidad del input en tiempo real.
// También agregué como placeholder el valor predeterminado del JSON que sería cantidad 2, por lo tanto un total de 200

// función que muestra el subtotal. Suma de todos los totales de los productos, sin el envío.

var subtotal = document.getElementsByClassName("sub");

function sumaSubtotal(){
      var costoSubtotal = 0;
      for(let i = 0; i < subtotal.length; i++){
         costoSubtotal += Number(subtotal[i].innerHTML);
      }
      document.getElementById("subtotalid").innerHTML =  costoSubtotal + " UYU";
      $('#divEnvio').show(3000);
   };


//agregué el JSON con los dos productos en una nueva constante llamada CART INFO2 URL
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO2_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            //Muestro json.
            info = resultObj.data;
            data = resultObj.data;
            showCart(info);
            showModal(data);
        }
    });
}); 

// funcion para desplegar el modal:
 function abrirModal(){
       $('#myModal').modal('show');
   }

// SECCION 1 DEL MODAL:

// validacion de cada punto:

function validateName(){
   var nam = document.getElementById("ingresarNombre").value;
   if(nam == ""){
      document.getElementById("error-nombre").style.display = "block";
      return false;
   }else{
      document.getElementById("error-nombre").style.display = "none";
      return true;
   }
}

function validateSecondname(){
   var sec = document.getElementById("ingresarApellido").value;
   if(sec == ""){
      document.getElementById("error-apellido").style.display = "block";
      return false;
   }else{
      document.getElementById("error-apellido").style.display = "none";
      return true;
   }
}

function validateDoc(){
   var doc = document.getElementById("ingresarCedula").value;
   if(doc == ""){
      document.getElementById("error-cedula").style.display = "block";
      return false;
   }else{
      document.getElementById("error-cedula").style.display = "none";
      return true;
   }
}

function validateDate(){
   var fec = document.getElementById("ingresarFecha").value;
   if(fec == ""){
      document.getElementById("error-fecha").style.display = "block";
      return false;
   }else{
      document.getElementById("error-fecha").style.display = "none";
      return true;
   }
}

// validación total de la primer sección: 

function validateOne(){
   var name = validateName();
   var secondname = validateSecondname();
   var doc = validateDoc();
   var date = validateDate();
   // si todas las validaciones anteriores son correctas, entonces se puede pasar a la siguiente sección
   todook = name && secondname && doc && date;
   if(todook){
      //habilita la segunda sección removiendo la clase disabled, y la muestra con .collapse('show')
      $('#headingTwo').find('h5').removeClass('disabled');
      $('#collapseTwo').collapse('show');
   }
}



// SECCION 2 DEL MODAL:
// Función validar radio buttons

function validateRadio(){
   var arrayRadio = document.getElementsByName("radios");
   var marcado = false;
   for( let i = 0; i < arrayRadio.length; i++){
      if(arrayRadio[i].checked){
         marcado = true;
      }
   }
   if(!marcado){
      document.getElementById("error-radio").style.display = "block";
      return false;
   }else{
      document.getElementById("error-radio").style.display = "none";
      return true;
   }
}


// función para validar el select

function validateSelect(val){
   if(val == "nada"){
      document.getElementById("error-select").style.display = "block";
      return false;
   }else{
      document.getElementById("error-select").style.display = "none";
      return true;
   }
}

// función  para validar el código postal

function validateCP(){
   var cp = document.getElementById("ingresarCPostal").value;
   if(cp == ""){
      document.getElementById("error-cp").style.display = "block";
      return false;
   }else{
      document.getElementById("error-cp").style.display = "none";
      return true;
   }
}


// función para validar la dirección
function validateUbic(){
   var ubic = document.getElementById("ingresarDireccion").value;
   if(ubic == ""){
      document.getElementById("error-ubic").style.display = "block";
      return false;
   }else{
      document.getElementById("error-ubic").style.display = "none";
      return true;
   }
}

// función para validar el teléfono

function validateTel(){
   var tel = document.getElementById("ingresarTelefono").value;
   if(tel == ""){
      document.getElementById("error-tel").style.display = "block";
      return false;
   }else{
      document.getElementById("error-tel").style.display = "none";
      return true;
   }
}


// función para validar la dirección
function validateTwo(){
   var radio = validateRadio();
   var cp = validateCP();
   var ubic = validateUbic();
   var tel = validateTel();
   var deps = validateSelect(document.getElementById('inputState').value)
   var todook2 = radio && cp && ubic && tel && deps;
   if(todook2){
      $('#finalModal').modal('show');
   };
};



var data = {};

function showModal(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array["articles"].length; i++){
        let art = array["articles"][i];

        htmlContentToAppend += `

        <div class="row justify-content-end">
          <small class="col-md-offset-11 col-md-1 mr-3" style="color: red;">Eliminar</small>
        </div>
        <div class="row mb-3">
              <img src="` + art.src +`" class="img-thumbnail col-sm-3" alt="foto`+i+`">

               <div class="col-sm-6 list-group-item">
                  <h4>`+ art.name + `</h4>
                   <div class="row py-1">
                     <div class="col-6 col-sm-3">
                        <p class="text-muted">Cantidad</p>
                        <input class="col-md-8" onload="recibirInput()" type="number" id="mostrar`+i+`" name="cantidad" min="1" placeholder="`+ art.count +`">   
                     </div>
                   </div>
                </div>

           <div class="col-sm-2 list-group-item"> 
              <h5 class="text-center">Total</h5>
              <div class="py-4 ml-4">
              <span id="parr`+i+`">` + art.count*art.unitCost +`</span>
              <span id="curren`+i+`">`+ art.currency + `</span>
              </div>
           </div> 
     </div>
        `
    }
    document.getElementById("elementmodal").innerHTML = htmlContentToAppend;
}






// FUNCION PARA ELIMINAR PRODUCTO

// ¡¡¡ SIN TERMINAR !!!

function eliminar(i){
   document.getElementById('producto'+i).style.display = "none";
   let eliminarpeso =  document.getElementById("parr"+i).innerHTML;
   document.getElementById("parr"+i).innerHTML = eliminarpeso;
   if ((document.getElementById("subtotalid").innerHTML - eliminarpeso) < 0){
      document.getElementById("subtotalid").innerHTML; 
   }else{
      document.getElementById("subtotalid").innerHTML = -eliminarpeso;
   }
   showCart();
}
