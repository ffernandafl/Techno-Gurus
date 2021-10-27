function validarFormulario() {
    var email = document.getElementById('email');
    if (!(/\S+@\S+\.\S+/.test(email))){
        alert('ERROR: Debe escribir un correo válido');
        return false;
    }
}
