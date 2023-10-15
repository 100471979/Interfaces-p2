function limpiarCampos() {
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