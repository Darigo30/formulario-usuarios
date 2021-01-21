let boton = document.getElementById("btn-registro");
let expreg = /\w+@\w+\.+[a-z]/;


boton.addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;
    let telefono = document.getElementById("telefono").value;

    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || pass === "" || telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre posee más de 30 caracteres.");
        return false;
    }
    else if (apellidos.length>80){
        alert("El apellido posee más de 80 caracteres.");
        return false;
    }
    else if (correo.length>100){
        alert("El correo posee más de 100 caracteres.");
        return false;
    }
    else if (!expreg.test(correo)){
        alert("El correo no es válido.");
        return false;
    }
    else if (usuario.length>20){
        alert("El campo usuario posee más de 20 caracteres.");
        return false;
    }
    else if (telefono.length>15){
        alert("El campo teléfono posee más de 15 caracteres.");
        return false;
    }
    else if( isNaN(telefono) ) {
        alert('El campo teléfono debe contener solo números');
        return false;
    }
    alert('¡Bienvenido(a)! ' + nombre + " " + apellidos + "," + " " + 'su correo, usuario y contraseña es:' + " "  + correo + " " + usuario + " " + pass + " " + 'y su teléfono:'+ " " + telefono);
});





