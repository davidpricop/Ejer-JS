
function añadirNoticia() {
    var title = document.getElementById("title").value;
    var autor = document.getElementById("autor").value;
    var imagen = document.getElementById("imagen").value;
    var texto = document.getElementById("texto").value;

    var div = document.createElement('div');
    div.className = "header_colLeft_div";

    var h1_title = document.createElement('div');
    h1_title.textContent = title;

    var h3_autor = document.createElement('h3');
    h3_autor.className = "header_colLeft_autor";
    h3_autor.textContent = autor;
    
    var img = document.createElement('img');
    img.className = "header_colLeft_img";
    img.src = imagen;

    var texto_div = document.createElement('p');
    texto_div.className = "header_colLeft_p";
    texto_div.textContent = texto;

    var header_colLeft = document.querySelector('.header_colLeft');
    var header_colLeft_div = document.querySelector('.header_colLeft_div');

    header_colLeft.appendChild(div);
    header_colLeft_div.appendChild(h1_title);
    // header_colLeft1.appendChild(h3_autor);
    // header_colLeft1.appendChild(img);
    // header_colLeft1.appendChild(texto_div);

}