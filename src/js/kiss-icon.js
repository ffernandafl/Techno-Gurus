window.onload=function(){
    var elemento = document.getElementById("simple");
    elemento.onmouseover=function(e){
        document.getElementById("description-icon").innerHTML="El icono simple te dirije a la pagina Kisses de kissers, aqui podras observar publicaciones de tus kissers";
        document.getElementById("icono-title").innerHTML="simple"
    };
    elemento.onmouseout=function(e){
        document.getElementById("description-icon").innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore eligendi consequatur voluptatum tenetur vel. Nulla autem, minus eligendi excepturi sed alias tenetur illum similique repudiandae, aliquid recusandae veniam fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis provident voluptates rerum voluptas, ipsum illum ab distinctio nisi saepe architecto animi? Provident commodi recusandae nobis,temporibus aspernatur corrupti a nemo.";
        document.getElementById("icono-title").innerHTML="paint"
    }
    var elemento = document.getElementById("keep-it");
    elemento.onmouseover=function(e){
        document.getElementById("description-icon").innerHTML="<br/>Keep it stupid: Es cuando estas grabando un kiss<br/> klipped: Es mirar el kiss del kisser con el que hicimos nuestro kiss.<br/> klip: icono de la carpeta de nuestros klipped";
        document.getElementById("icono-title").innerHTML="keep it / klipped / klip"
    };
    elemento.onmouseout=function(e){
        document.getElementById("description-icon").innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore eligendi consequatur voluptatum tenetur vel. Nulla autem, minus eligendi excepturi sed alias tenetur illum similique repudiandae, aliquid recusandae veniam fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis provident voluptates rerum voluptas, ipsum illum ab distinctio nisi saepe architecto animi? Provident commodi recusandae nobis,temporibus aspernatur corrupti a nemo.";
        document.getElementById("icono-title").innerHTML="paint"
    }
}