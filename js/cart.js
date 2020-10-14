//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var info = {};

function showCart(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array["articles"].length; i++){
        let articulos = array["articles"][i];

        htmlContentToAppend += `

        <div class="row justify-content-end">
          <small class="col-md-offset-11 col-md-1 mr-3" style="color: red;">Eliminar</small>
        </div>
        <div class="row mb-3">
              <img src="` + articulos.src +`" class="img-thumbnail col-2" alt="foto`+i+`">

               <div class="col-6 list-group-item">
                  <h4>`+ articulos.name + `</h4>
                   <div class="row py-1">
                     <div class="col-6 col-sm-9">
                        <p class="text-muted">Descripción</p>
                     </div>
                     <div class="col-6 col-sm-3">
                        <p class="text-muted">Cantidad</p>
                        <input class="col-md-8" type="number" id="input`+i+`" name="cantidad" min="1" placeholder="`+ articulos.count +`" onchange="mostrarTotal(`+ articulos.unitCost +`, this.value, `+ i +`)">   
                     </div>
                   </div>
                </div>
         
           <div class="col-2 list-group-item">
                  <h5 class="text-center">Valor unitario</h5>
               <div class="py-4 ml-4">
                 <span>`+ articulos.unitCost + `</span>
                 <span>`+ articulos.currency + `</span>
               </div>
            </div>

           <div class="col-2 list-group-item"> 
              <h5 class="text-center">Total</h5>
              <div class="py-4 ml-4">
              <span id="parr`+i+`">` + articulos.count*articulos.unitCost +`</span>
              <span id="curren`+i+`">`+ articulos.currency + `</span>
              </div>
           </div> 
     </div>
        `
    }
    document.getElementById("cartContainer").innerHTML = htmlContentToAppend;
}

//función para calcular el total
function mostrarTotal(costo, cantidad, i){
   var text= costo*cantidad;
   document.getElementById("parr"+i).innerHTML = text;
}

//función para cambio de moneda
function cambioMoneda(moneda, costo, i){
   if(moneda == 'USD'){
      var dolares = costo*40;
      document.getElementById("parr"+i).innerHTML = dolares;
      document.getElementById("curren"+i).innerHTML = "UYU";
   }
}

// Agregué en el input la función, asignandole como parámetros: 
// el costo que se muestra en el JSON, y la cantidad del input en tiempo real.
// También agregué como placeholder el valor predeterminado del JSON que sería cantidad 2, por lo tanto un total de 200


//Cargar el JSON en el modal

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
              <img src="` + art.src +`" class="img-thumbnail col-2" alt="foto`+i+`">

               <div class="col-6 list-group-item">
                  <h4>`+ art.name + `</h4>
                   <div class="row py-1">
                     <div class="col-6 col-sm-9">
                        <p class="text-muted">Descripción</p>
                     </div>
                     <div class="col-6 col-sm-3">
                        <p class="text-muted">Cantidad</p>
                        <input class="col-md-8" onload="recibirInput()" type="number" id="mostrar`+i+`" name="cantidad" min="1" placeholder="`+ art.count +`">   
                     </div>
                   </div>
                </div>
         
           <div class="col-2 list-group-item">
                  <h5 class="text-center">Valor unitario</h5>
               <div class="py-4 ml-4">
                 <span>`+ art.unitCost + `</span>
                 <span>`+ art.currency + `</span>
               </div>
            </div>

           <div class="col-2 list-group-item"> 
              <h5 class="text-center">Total</h5>
              <div class="py-4 ml-4">
              <span id="parr`+i+`">` + art.count*art.unitCost +`</span>
              <span id="curren`+i+`">`+ art.currency + `</span>
              </div>
           </div> 
     </div>
        `
    }
    document.getElementById("modal").innerHTML = htmlContentToAppend;
}

// Función para mandar el valor del input al modal, en la sección cantidad

function recibirInput(){
   var valor = document.getElementById("input"+i).value;
   document.getElementById("mostrar"+i).value = valor;
}



//agregué el JSON con los dos productos en una nueva constante llamada CART INFO2 URL
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO2_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            //Muestro ambos json.
            info = resultObj.data;
            data = resultObj.data;
            showCart(info);
            showModal(data);
        }
    });
}); 




