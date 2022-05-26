function agregarPalabra(palabraSorteada){
    borrarPalabra();

    for(var i = 0; i < palabraSorteada.length; i++){

        var letra = document.createElement("textarea");
        var palabra = document.querySelector("#adivinar-palabra");
        palabra.appendChild(letra);
        letra.classList.add("recuadro-letra");
        letra.setAttribute("readonly",true);
        letra.setAttribute("type","text");
        letra.setAttribute("id","letra " + i);

    }
    document.getElementById("letra 0").focus();
}
function dibujarLetraCorrecta(palabraSorteada, i){
    var letraAMostrar = document.getElementById("letra " + i);
    letraAMostrar.textContent = palabraSorteada[i].toLocaleUpperCase();
}
function dibujarLetraIncorrecta(letraMinuscula){
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
function borrarPalabra(){
    var letras = document.querySelector("#adivinar-palabra");
    while (letras.hasChildNodes()) {
        letras.removeChild(letras.firstChild);
      }
}