const $formPost = document.querySelector('#formPost');
const $title = document.querySelector('#title');
const $body = document.querySelector('#body');

$formPost.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = $title.value;
    const body = $body.value;

    if(title != '' && body != '') {
        fetch('http://localhost:8080/api/post', {
            method: 'POST',
            body: JSON.stringify( {
                title,
                body,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(resp  => resp.json()).then(data => {
            alert('Haz dado un kiss :*');
            
    });
    }
})
