
function jugar(){
 
    borrarLetrasErradas();
    timer(120);
    var palabraSorteada = sortearPalabra();
    agregarPalabra(palabraSorteada);
    var contador = 0;
    var letrasErradas = [];
    var contadorAdivinadas = 0;
    var letrasAdivinadas = [];
    var letraPresionada = 0;
    document.onkeydown = function(evt){
        letraPresionada = evt;
        if(soloLetras(letraPresionada.keyCode)){
            var letraMinuscula = letraPresionada.key.toLowerCase();
            console.log(letraMinuscula);
            var hayLetra = false;

            if(contadorAdivinadas < (palabraSorteada.length - 1)){
                for(var i = 0; i < palabraSorteada.length; i++){
                    if(letraMinuscula == palabraSorteada[i]){
                        var letraAMostrar = document.getElementById("letra " + i);
                        letraAMostrar.textContent = palabraSorteada[i].toLocaleUpperCase();
                        hayLetra = true;
                        contadorAdivinadas++;
                        letrasAdivinadas.push(letraMinuscula);
                        console.log(contadorAdivinadas);
                        console.log(letrasAdivinadas);
                        console.log(palabraSorteada.length);
                    }else{
                        if(hayLetra == false && i == (palabraSorteada.length -1)){
                            var encontrada = false;
                            for(var e = 0; e < letrasErradas.length; e++){
                                if(letraMinuscula == letrasErradas[e]){
                                    encontrada = true;
                                    break;
                                }
                            }
                            if(!encontrada){
                                letrasErradas.push(letraMinuscula);
                                console.log(letrasErradas);
                                agregarLetraErrada(letraMinuscula);
                                contador++;
                                console.log("contador " + contador);
                                if(contador == 5){  
                                    perdioElJuego();
                                }
                            }

                        }
                    }
                } 
            }else{
                alert("Ha ganado!!!");
                jugar();
            }

        }
    }
}

function soloLetras(tecla){
    if(tecla > 64 && tecla < 91){
        return true;
    }
}

function perdioElJuego(){
    alert("Perdió el juego");
    jugar();
}
