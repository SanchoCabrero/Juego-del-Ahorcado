var iniciarJuego = document.querySelector("#iniciar-juego");
var nuevaPalabra =document.querySelector("#nueva-palabra");
var botones = document.querySelector(".botones");
var dibujo = document.querySelector("#dibujo");

iniciarJuego.addEventListener("click",function(){

    //retiro los botones
    iniciarJuego.classList.add("invisible");
    nuevaPalabra.classList.add("invisible");

    //agrego el boton nuevo juego al HTML
    var nuevoJuego = document.createElement("button");
    nuevoJuego.classList.add("boton-azul");
    nuevoJuego.innerHTML = "Nuevo Juego";
    nuevoJuego.setAttribute("id","nuevo-juego");
    botones.appendChild(nuevoJuego);

    //agrego el boton desistir
    var desistir = document.createElement("button");
    desistir.classList.add("boton-blanco");
    desistir.setAttribute("id","desistir");
    desistir.innerHTML = "Desistir";
    botones.appendChild(desistir);

    //agrego el canvas del dibujo
    var canvas = document.createElement("canvas");
    dibujo.appendChild(canvas);
    canvas.setAttribute("id","ahorcado");

    //agrego la palabra a adivinar
    var palabra = document.querySelector("#adivinar-palabra");
    //llamar a la función que agrega la palabra


});