function agregarPalabra(palabraSorteada){

    var letras = document.querySelector("#adivinar-palabra");
    while (letras.hasChildNodes()) {
        letras.removeChild(letras.firstChild);
      }
    
    for(var i = 0; i < palabraSorteada.length; i++){

        var letra = document.createElement("textarea");
        var palabra = document.querySelector("#adivinar-palabra");
        palabra.appendChild(letra);
        letra.classList.add("recuadro-letra");
        letra.setAttribute("readonly",true);
        letra.setAttribute("id","letra " + i);
        //letra.textContent = palabraSorteada[i].toUpperCase();
        //letra.style.visibility = "hidden";
        
    }
}

function mostrarLetra(){

}