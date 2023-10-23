//inicio de sesión
function limpiarCampos(){
    document.getElementById("form").reset();
}

function FormatoDNI(dni){

    let digito = dni.slice(0, 8);
    let letra = dni.charAt(8).toUpperCase();
    let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let resto = digito % 23;
    let macth = letras.charAt(resto);
    return letra == macth;

}
function Verificar(event) {
    regex_correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regex_nombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; /*expresion regular que verifica que el nombre no contenga numeros ni caracteres especiales*/
    event.preventDefault();
    let correo = document.getElementById("correo").value;
    let nombre = document.getElementById("nombre").value;
    let dni = document.getElementById("DNI").value;
    let telefono = document.getElementById("telefono").value;
    if (dni == ""){
        document.getElementById("demo").innerHTML = "Ingrese su DNI";
    }
    else if(dni.length != 9 || FormatoDNI(dni) == false){
        document.getElementById("demo").innerHTML = "Formato incorrecto del DNI"
    }
    
    else if(nombre == ""){
        document.getElementById("demo").innerHTML = "Ingrese su nombre"
    }
    else if(regex_nombre.test(nombre) == false){
        document.getElementById("demo").innerHTML = "Nombre no válido"
    }
    else if(telefono == ""){
        document.getElementById("demo").innerHTML = "Ingrese su número de teléfono"
    }
    else if(isNaN(telefono) || telefono.length != 9){
        document.getElementById("demo").innerHTML = "El campo teléfono debe ser un número de 9 cifras";

    }
    else if( correo == ""){
        document.getElementById("demo").innerHTML = "Ingrese su correo"
    } 
    else if( regex_correo.test(correo) == false){
        document.getElementById("demo").innerHTML = "Formato del correo no válido"
    }   
    else{     
        document.getElementById("demo").innerHTML = "";
        document.getElementById("form").submit();
    }
    
}

//ocultar pasos del bread-crumbs
var revisar = document.getElementById("revisar");
var menu = document.getElementById("menu");
var enlaceRevisar = document.getElementById("enlace-revisar");
var enlaceMenu = document.getElementById("enlace-menu");
var completado = document.getElementById("completado");
var enlaceCompletado = document.getElementById("enlace-completado");

enlaceRevisar.addEventListener("click", function(){
    menu.style.display = "none";
    revisar.style.display = "block";
});

enlaceMenu.addEventListener("click", function(){
    menu.style.display = "block";
    revisar.style.display = "none";
});



//botones añadir y quitar productos
var totalProductos = document.getElementById("total-productos");
var totalProductos2 = document.getElementById("total-productos2");
var precioTotal = document.getElementById("precio-total");

function añadir_quitar(producto, cantidad){
    var carrito1 = parseInt(totalProductos.textContent);
    var carrito2 = parseInt(totalProductos2.textContent);
    var cantidad_plato = document.getElementById("cantidad_plato" + producto);
    var cantidad_actual_plato = parseInt(cantidad_plato.textContent);
    var precio_producto = parseFloat(document.getElementById("precio-producto" + producto).textContent);
    if((carrito1 + cantidad >= 0 || carrito1 + cantidad >= 0) && cantidad_actual_plato + cantidad >= 0){
        carrito1 += cantidad;
        carrito2 += cantidad;
        precioTotal.textContent = parseFloat(precioTotal.textContent) + (precio_producto * cantidad);
    }
    totalProductos.textContent = carrito1;
    totalProductos2.textContent = carrito2;

    if(cantidad_actual_plato + cantidad >= 0){
        cantidad_actual_plato += cantidad;
        cantidad_plato.textContent = cantidad_actual_plato;
    }
    
}  

var añadir = document.querySelectorAll("button[id^='añadido']");
var quitar = document.querySelectorAll("button[id^='quitar']");
var trash = document.querySelectorAll("button[id^='trash']");
añadir.forEach(function(boton){
    boton.addEventListener("click", function(){
        var producto = boton.id.replace("añadido", "");
        añadir_quitar(producto, 1);
    });

});

quitar.forEach(function(boton){
    boton.addEventListener("click", function(){
        var producto = boton.id.replace("quitar", "");
        añadir_quitar(producto, -1);
    });
});

trash.forEach(function(boton){
    boton.addEventListener("click", function(){
        var producto = boton.id.replace("trash", "");
        añadir_quitar(producto, -1);
    });
});



//contador

enlaceCompletado.addEventListener('click', function(event){
    var precioTotalNumerico = parseFloat(precioTotal.textContent);
    if (precioTotalNumerico > 0){
        completado.style.display ="block";
        revisar.style.display = "none";
        let tiempoSegundos = 600;
        let minutosTexto = document.querySelector(".minutos");
        let segundosTexto = document.querySelector(".segundos");

        function contador(){
            const minutos = Math.floor(tiempoSegundos / 60);
            const segundos = tiempoSegundos % 60;

            minutosTexto.style.transform = "scale(1.2)";
            segundosTexto.style.transform = "scale(1.2)";
            
            minutosTexto.textContent = minutos;
            segundosTexto.textContent = segundos < 10 ? '0' + segundos: segundos;

            setTimeout(() => {
                minutosTexto.style.transform = "scale(1)";
                segundosTexto.style.transform = "scale(1)";
            }, 100);

            if(tiempoSegundos === 0){
                clearInterval(Intervalo);
                minutosTexto.textContent = "0";
                segundosTexto.textContent = "00";
            }
            else{
                tiempoSegundos--;
            }
        }

        contador();
        const Intervalo = setInterval(contador, 1000);
    }
    else{  
        alert("Debes tener al menos un producto en tu cesta para procesar el pedido.");
        event.preventDefault();
    }
});

var nav = document.querySelector("#nav1");
var abrir = document.querySelector("#abrir");
var cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})