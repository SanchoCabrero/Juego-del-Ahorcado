function agregarPalabra(){

    var letras = document.querySelector("#adivinar-palabra");
    while (letras.hasChildNodes()) {
        letras.removeChild(letras.firstChild);
      }
    var palabraSorteada = sortearPalabra();
    for(var i = 0; i < palabraSorteada.length; i++){

        var letra = document.createElement("textarea");
        var palabra = document.querySelector("#adivinar-palabra");
        letra.classList.add("recuadro-letra");
        palabra.appendChild(letra);
        letra.setAttribute("readonly",true);
        letra.textContent = palabraSorteada[i];
        //letra.style.visibility = "hidden";
    
    }
}