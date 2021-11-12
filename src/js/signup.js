const $formLogin = document.querySelector('#formSignup');
const $name = document.querySelector('#name');
const $username = document.querySelector('#email');
const $password = document.querySelector('#password');

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
        })/* .then(resp => {
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
        }) */
    }

})
