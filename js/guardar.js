var numbers = [45, 4, 9, 16, 25];

for(var i= 0; i < numbers.length;i++){

        htmlContentToAppend += `
        //crear un parrafo
        <p> $ numbers `+ [i] +`</p>
        //Crear un input para la cantidad
        <input id="cantidad" type="number">
        <span>Subtotal:</span> 
        `
    }
    document.getElementById("demo").innerHTML = htmlContentToAppend;