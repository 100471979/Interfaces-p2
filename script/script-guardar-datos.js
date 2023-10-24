function guardarDatos(){
    const dni = document.getElementById("DNI").value;
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;

    if (dni === "" || nombre === "" || telefono === "" || correo === "") {
        alert("Por favor, complete todos los campos antes de guardar en el almacenamiento local.");
        return;
    }
    const user = {
        dni: dni,
        nombre: nombre,
        telefono: telefono,
        correo: correo
    };
    userJSON = JSON.stringify(user);
    localStorage.setItem("user", userJSON);
    alert("datos guardados correctamente");
}

document.getElementById("aceptar").addEventListener("click", function(event){
    event.preventDefault();
    guardarDatos();
});