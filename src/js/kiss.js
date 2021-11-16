const $kiss = document.querySelector('#kiss');
const $title = document.querySelector('#title');
const $body = document.querySelector('#body');

$kiss.addEventListener('onclick', (e) => {
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
            if(resp.ok) {
                window.onclick=function(){
                    var element1=document.getElementById('title');
                    var element2=document.getElementById('body');
                    document.getElementById("title").innerHTML="";
                    document.getElementById("body").innerHTML="";
                }
            } else {
                alert('Completa los espacios correctos.');
            }
            
        });
    }

})
