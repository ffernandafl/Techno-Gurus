function validarFormulario() {
    var email = document.getElementById('email');
    if (!(/\S+@\S+\.\S+/.test(email))){
        return false;
    }
}
