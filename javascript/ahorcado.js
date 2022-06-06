var iniciarJuego = document.querySelector("#iniciar-juego");
var nuevaPalabra =document.querySelector("#nueva-palabra");
var botones = document.querySelector(".botones");
var dibujo = document.querySelector("#dibujo");
var nuevoJuego = document.createElement("button");
var desistir = document.createElement("button");
var cancelar = document.createElement("button");
var guardar = document.createElement("button");
var canvas = document.createElement("canvas");
var inputPalabra = document.createElement("textarea");


iniciarJuego.addEventListener("click",function(){

    //retiro los botones
    iniciarJuego.classList.add("invisible");
    nuevaPalabra.classList.add("invisible");

    //agrego el boton nuevo juego al HTML
    nuevoJuego = agregarBoton(botones, "Nuevo Juego", "boton-azul", nuevoJuego)
    nuevoJuego.setAttribute("id","nuevo-juego");


    //agrego el boton desistir
    desistir = agregarBoton(botones, "Desistir", "boton-blanco", desistir);
    desistir.setAttribute("id","desistir");


    //agrego el canvas del dibujo
    agregarDibujo();

    //llamar a la función jugar
    jugar();

});

nuevoJuego.addEventListener("click",function(){
    if(window.screen.width < 1369){
        botones.removeChild(botones.lastChild);
        botones.removeChild(botones.lastChild);
    }
    borrarLetrasErradas();
    borrarHorca();
    jugar();
});

desistir.addEventListener("click",function(){

    noDetectarLetras();

    //elimino botones nuevo juego y desistir
    if(window.screen.width < 1350){
        botones.removeChild(botones.lastChild);
        botones.removeChild(botones.lastChild);
        botones.removeChild(botones.lastChild);
        botones.removeChild(botones.lastChild);
    }else{
        botones.removeChild(botones.lastChild);
        botones.removeChild(botones.lastChild);
    }


    //borro el dibujo, la palabra y las letras erradas
    dibujo.removeChild(dibujo.firstChild);
    borrarPalabra();
    borrarLetrasErradas();
    
    //vuelvo a hacer visibles los botones iniciar juego y agregar palabra
    iniciarJuego.classList.remove("invisible");
    nuevaPalabra.classList.remove("invisible");

});

nuevaPalabra.addEventListener("click",function(){


    //retiro los botones
    iniciarJuego.classList.add("invisible");
    nuevaPalabra.classList.add("invisible");

    //creo boton guadar
    guardar =  agregarBoton(botones, "Guardar y empezar", "boton-azul", guardar);
    guardar.setAttribute("id", "guardar");
    guardar.setAttribute("type", "submit");


    //creo boton cancelar
    cancelar = agregarBoton(botones, "Cancelar", "boton-blanco", cancelar);
    cancelar.setAttribute("id", "cancelar");

    //agrego area de texto
    inputPalabra.setAttribute("id", "input-palabra");
    inputPalabra.value = "";
    inputPalabra.setAttribute("placeholder", "Introduzca la palabra aquí...");
    inputPalabra.setAttribute("type", "text");
    inputPalabra.setAttribute("type", "text");
    inputPalabra.required = true;
    dibujo.appendChild(inputPalabra);

});

cancelar.addEventListener("click",function(){

    //elimino botones nuevo guardar y cancelar
    botones.removeChild(botones.lastChild);
    botones.removeChild(botones.lastChild);

    //elimino el area de texto
    
    //vuelvo a hacer visibles los botones iniciar juego y agregar palabra
    iniciarJuego.classList.remove("invisible");
    nuevaPalabra.classList.remove("invisible");

    //borro el area de texto
    dibujo.removeChild(dibujo.lastChild);
});

guardar.addEventListener("click", function(){

    //guardo la palabra
    if(!verificarPalabraNueva(inputPalabra.value)){
        alert("Escriba una palabra, sin números, espacios ni símbolos especiales...");
    }else{
    sumarPalabra();

    
    sumarPalabra();

    //borro los botones
    botones.removeChild(botones.lastChild);
    botones.removeChild(botones.lastChild);

    //borro el textarea
    dibujo.removeChild(dibujo.lastChild);

    //agrego dibujo de vuelta
    agregarDibujo();

    //agrego el boton nuevo juego al HTML
    nuevoJuego = agregarBoton(botones, "Nuevo Juego", "boton-azul", nuevoJuego)
    nuevoJuego.setAttribute("id","nuevo-juego");


    //agrego el boton desistir
    desistir = agregarBoton(botones, "Desistir", "boton-blanco", desistir);
    desistir.setAttribute("id","desistir");

    jugar();

    }
});
function agregarBoton(padre,nombre,clase, variable){
    variable.classList.add(clase);
    variable.innerHTML = nombre;
    padre.appendChild(variable);
    return variable;
}
function agregarDibujo(){
    dibujo.appendChild(canvas);
    canvas.setAttribute("id","horca");
    canvas.setAttribute("width","600px");
    canvas.setAttribute("height","400px");
}
function verificarPalabraNueva(palabra){
    if(/^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/.test(palabra) && palabra.search(" ") == -1){
       return true;
    }else{
         return false;
    }
}

