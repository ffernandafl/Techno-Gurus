function validarFormulario() {
    var email = document.getElementById('username');
    if (!(/\S+@\S+\.\S+/.test(email))){
        return false;
    }
}

const $formLogin = document.querySelector('#formLogin');
const $username = document.querySelector('#username');
const $password = document.querySelector('#password');

$formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = $username.value;
    const password = $password.value;


    if(username != '' && password != '') {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify( {
                username,
                password
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(resp => {
            const token = resp.headers.get('Authorization');
            
            if(token && token.includes('Bearer') && resp.ok) {
                localStorage.setItem('token', token);
                console.log(token);
                url = window.location;
                const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
                location.href = path +  'keepit.html';
            } else {
                localStorage.removeItem('token');
                alert('Contraseña o usuario incorrecto. Vuelve a intentarlo.');
                //emailError.textContent = 'Usuario o contraseña incorrecta';
            }
        })
    }

})
