let info = document.querySelector('#info');
const imgs = ["alexanderplatz.jpeg", "hermannplatz.jpeg", "jungfernheide.jpeg", "konstanzer.jpeg", "kurfurstenstrabe.jpeg", "paulsternstrasse.jpeg", "unterdenlinden.jpeg", "westhafen.jpeg"];
let main = document.querySelector('main');
const parada = (ev) => {
    
    console.log(imgs);
    let img = ev.target;
    do{
     posicion = Math.floor(Math.random() * imgs.length)
        console.log(posicion);
    }while(imgs[posicion] == img.getAttribute('src').slice(img.getAttribute('src').lastIndexOf('/')+1))
    info.textContent = img.getAttribute("alt");
    img.setAttribute("src", "./imagenes/" + imgs[posicion])
    info.textContent = imgs[posicion].slice(0, imgs[posicion].lastIndexOf('.'));
};
main.addEventListener('click', parada);