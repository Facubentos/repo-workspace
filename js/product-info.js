//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var info = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productCostHTML = document.getElementById("productCost")
            let productCategoryHTML = document.getElementById("productCategory");
            let productSoldCountHTML = document.getElementById("productSoldCount");

        
            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCurrencyHTML.innerHTML = category.currency;
            productCostHTML.innerHTML = category.cost;
            productCategoryHTML.innerHTML = category.category;
            productSoldCountHTML.innerHTML = category.soldCount;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
        }
    });
});  

//Mostrar related products

var related = [];

function showRelatedProd(){
    let htmlContentToAppend = "";
    for(let i = 1; i < 2; i++){
        let rel = related[i];
        htmlContentToAppend += `
        <div class="card col-3" style="width: 18rem;">
         <img class="card-img-top img-fluid" src="`+ rel.imgSrc +`" alt="Card image cap">
            <div class="card-body">
             <h5 class="card-title">`+ rel.name +`</h5>
             <p class="card-text">`+ rel.description +`</p>
             <a href="#" class="btn btn-primary">Entrar</a>
           </div>
        </div>
        </div>
        `
    }
    document.getElementById("relatedprod").innerHTML = htmlContentToAppend;

    for(let i = 3; i < 4; i++){
        let rel = related[i];
        htmlContentToAppend += `
        <div class="card col-3" style="width: 18rem;">
         <img class="card-img-top img-fluid" src="`+ rel.imgSrc +`" alt="Card image cap">
            <div class="card-body">
             <h5 class="card-title">`+ rel.name +`</h5>
             <p class="card-text">`+ rel.description +`</p>
             <a href="#" class="btn btn-primary">Entrar</a>
           </div>
        </div>
        </div>
        `
    }
    document.getElementById("relatedprod").innerHTML = htmlContentToAppend;
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            //Muestro las categorías ordenadas
            related = resultObj.data;
            showRelatedProd();
        }
    });
}); 






// Mostrar comentarios
var array = [];

function showComments(){
    let htmlAppend = "";
    for(let i = 0; i < array.length; i++){
        let com = array[i];

        htmlAppend +=`
           <div class="col-12">
                 <dt>`+ com.user +`</dt>
                 <ul style="list-style: none">
                 <li>
                  <div>`+ com.description +` <br>
                      Puntuación: `+ com.score +`</div>
                  <span style="opacity: 0.7;">`+ "Publicado: " + com.dateTime +`</span>
                  </li>
			 </div>     
        `
    }
    document.getElementById("comentarios").innerHTML = htmlAppend;
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            //Muestro las categorías ordenadas
            array = resultObj.data;
            showComments();
        }
    });
}); 



function enviarComentario(){

    var textarea = document.getElementById("comment").value;
    var parrafo = document.getElementById("ms-success");
    var radio = document.getElementsByName("puntuacion");
    var bandera = false;
    var valor;
    parrafo.innerHTML = "";
    for(let i=0; i < radio.length; i++){
        if(radio[i].checked){
            bandera = true;
            valor = radio[i].value;
        }
    }
    if((textarea == "") || !bandera) {
        if(textarea == ""){
            parrafo.innerHTML += "Ingrese un comentario. <br>";
            parrafo.style.color = "red";
            parrafo.style.display = "block";
        }
        if(!bandera){
            parrafo.innerHTML += "Seleccione una puntuación.";
            parrafo.style.color = "red";
            parrafo.style.display = "block";
        }
    }else{
        parrafo.innerHTML =  sessionStorage.getItem("usuario") + ": " + "su comentario ha sido enviado satisfactoriamente!";
        parrafo.style.color = "green";
        parrafo.style.display = "block";
    }

}

