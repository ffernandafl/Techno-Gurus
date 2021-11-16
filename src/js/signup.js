function validarFormulario() {
    var email = document.getElementById('email');
    if (!(/\S+@\S+\.\S+/.test(email))){
        return false;
    }
}

const $formLogin = document.querySelector('#formSignup');
const $name = document.querySelector('#name');
const $username = document.querySelector('#email');
const $password = document.querySelector('#key');

$formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = $username.value;
    const password = $password.value;
    const name = $name.value;

    if(username != '' && password != '') {
        fetch('http://localhost:8080/api/user', {
            method: 'POST',
            body: JSON.stringify( {
                name,
                username,
                password
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(resp  => resp.json()).then(data => {
            /* alert('Usuario registrado con éxito'); */
            url = window.location;
            const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
            location.href = path +  'first-hello-stupid.html';
            
        });
    }

})
