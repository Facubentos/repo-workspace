const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
const CART_INFO2_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

  //creo una variable a la que le aplico json.parse para obtener el objeto que se encuentra dentro de la key "datos".
  //luego accedo a cada propiedad del objeto, y la muestro en su span correspondiente.
  logueado = JSON.parse(localStorage.getItem("Datos"));
  console.log(logueado);
  document.getElementById("namespan").innerHTML = logueado.name;
  document.getElementById("agespan").innerHTML = logueado.age;
  document.getElementById("emailspan").innerHTML = logueado.email;
  document.getElementById("telspan").innerHTML = logueado.tel;

});

//función para salir de la página, y limpiar el session storage

 var salir = document.getElementById("salir")
 salir.addEventListener("click", () => {
   sessionStorage.clear();
   localStorage.clear();
   window.location.href="login.html";
 });

function limpiarStorage(){
  localStorage.clear();
  document.getElementById("namespan").innerHTML = "";
  document.getElementById("agespan").innerHTML = "";
  document.getElementById("emailspan").innerHTML = "";
  document.getElementById("telspan").innerHTML = "";
}


