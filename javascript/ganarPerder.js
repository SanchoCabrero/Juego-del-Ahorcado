
function perdioElJuego(){
    setTimeout(function(){
        alert("Perdió el juego");
        jugar();
    },500);

}
function haGanado(palabraSorteada){
for(i = 0; i < palabraSorteada.length; i++){
    var palabraAdivinada = document.getElementById("letra " + i);
    palabraAdivinada.classList.add("palabra-adivinada");
}
    setTimeout(function(){
        alert("Adivinó!!!");
        jugar();
    },500);
}