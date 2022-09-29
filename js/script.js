let info = document.querySelector('#info');
let imgs = document.querySelectorAll('.main__img');
let main = document.querySelector('main');
const parada = (ev) => {
    let posicion = Math.floor(Math.random() * imgs.length)
    console.log(imgs);
    console.log(posicion);
    let img = ev.target;
    info.textContent = img.getAttribute("alt");
    img.setAttribute("src", imgs[posicion].getAttribute("src"));
};
main.addEventListener('click', parada);