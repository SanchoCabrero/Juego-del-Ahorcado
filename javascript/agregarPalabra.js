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

        
    }
}

function agregarLetraErrada(letraMinuscula){
    var letrasErradas = document.getElementById("letras-erradas");
    var letraErrada = document.createElement("textarea");
    letraErrada.classList.add("letra-errada");
    letraErrada.textContent = letraMinuscula.toLocaleUpperCase();
    letrasErradas.appendChild(letraErrada);
}

function borrarLetrasErradas(){
    var letrasErradas = document.getElementById("letras-erradas");
    while (letrasErradas.hasChildNodes()) {
        letrasErradas.removeChild(letrasErradas.firstChild);
      }
}