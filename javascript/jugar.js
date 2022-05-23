
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

            for(var i = 0; i < palabraSorteada.length; i++){
                if(letraMinuscula == palabraSorteada[i]){
                    var repetida = false;
                    for(var e = 0; e < letrasAdivinadas.length; e = e + 2){
                        if(letraMinuscula == letrasAdivinadas[e] && i == letrasAdivinadas[e + 1]){
                            repetida = true;
                            hayLetra = true;
                            break;
                        }
                    }
                    if(!repetida){
                        var letraAMostrar = document.getElementById("letra " + i);
                        letraAMostrar.textContent = palabraSorteada[i].toLocaleUpperCase();
                        hayLetra = true;
                        letrasAdivinadas.push(letraMinuscula, i);
                        console.log(contadorAdivinadas);
                        console.log(letrasAdivinadas);
                        console.log(palabraSorteada.length);
                        contadorAdivinadas++;
                        if(contadorAdivinadas == (palabraSorteada.length)){
                            haGanado(palabraSorteada);
                        }
                    }
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

        }
    }
}

function soloLetras(tecla){
    if(tecla > 64 && tecla < 91){
        return true;
    }
}

