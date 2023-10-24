



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

function añadir_quitar(producto, cantidad, nombre){
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
    var carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    if (carrito[nombre] + cantidad >= 0) {
        carrito[nombre] += cantidad;
    } else {
        carrito[nombre] = 0;
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

var añadir = document.querySelectorAll("button[id^='añadido']");
var quitar = document.querySelectorAll("button[id^='quitar']");
var trash = document.querySelectorAll("button[id^='trash']");
añadir.forEach(function(boton){
    boton.addEventListener("click", function(){
        var producto = boton.id.replace("añadido", "");
        var nombreProducto = boton.getAttribute("data-nombre");
        añadir_quitar(producto, 1, nombreProducto);
    });

});

quitar.forEach(function(boton){
    boton.addEventListener("click", function(){
        var producto = boton.id.replace("quitar", "");
        var nombreProducto = boton.getAttribute("data-nombre");
        añadir_quitar(producto, -1, nombreProducto);
    });
});

trash.forEach(function(boton){
    boton.addEventListener("click", function(){
        var producto = boton.id.replace("trash", "");
        var nombreProducto = boton.getAttribute("data-nombre");
        añadir_quitar(producto, -1, nombreProducto);
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
            segundosTexto.textContent = segundos < 10 ? '0' + segundos: segundos; //si los segundos son menores a 10 se agrega un 0 a la izquierda

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