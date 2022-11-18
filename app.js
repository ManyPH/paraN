function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoS = document.getElementsByClassName("modo_s")[0];

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function(e) {
alert('Vamos a hacer nuestra casita en Minecraft (～￣▽￣)');
divModoS.style.display = 'block';
const cancion = new Audio('img\\img_modo_hot.mp3');
cancion.play();
});