var iniciarJuego = document.querySelector("#iniciar-juego");
var nuevaPalabra =document.querySelector("#nueva-palabra");
var botones = document.querySelector(".botones");
var dibujo = document.querySelector("#dibujo");
var nuevoJuego = document.createElement("button");
var desistir = document.createElement("button");

iniciarJuego.addEventListener("click",function(){

    //retiro los botones
    iniciarJuego.classList.add("invisible");
    nuevaPalabra.classList.add("invisible");

    //agrego el boton nuevo juego al HTML
    nuevoJuego.classList.add("boton-azul");
    nuevoJuego.innerHTML = "Nuevo Juego";
    nuevoJuego.setAttribute("id","nuevo-juego");
    botones.appendChild(nuevoJuego);

    //agrego el boton desistir
    desistir.classList.add("boton-blanco");
    desistir.setAttribute("id","desistir");
    desistir.innerHTML = "Desistir";
    botones.appendChild(desistir);

    //agrego el canvas del dibujo
    var canvas = document.createElement("canvas");
    dibujo.appendChild(canvas);
    canvas.setAttribute("id","ahorcado");


    //llamar a la función que agrega la palabra
    jugar();

});

nuevoJuego.addEventListener("click",jugar);

