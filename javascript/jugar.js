
function jugar(){
    if(window.screen.width < 1369){
    agregarInputMobile();
    jugarMobile();
    }else{
        jugarDesktop();
    }

}

function soloLetras(tecla){
    if(tecla > 64 && tecla < 91){
        return true;
    }
}
function jugarDesktop(){
    borrarLetrasErradas();
    borrarHorca(); 
    //timer(120);
    var palabraSorteada = sortearPalabra();
    agregarPalabra(palabraSorteada);
    var contador = 0;
    dibujarHorca(contador);
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
                        dibujarLetraCorrecta(palabraSorteada, i);
                        hayLetra = true;
                        letrasAdivinadas.push(letraMinuscula, i);
                        console.log(contadorAdivinadas);
                        console.log(letrasAdivinadas);
                        console.log(palabraSorteada.length);
                        contadorAdivinadas++;
                        ganar(palabraSorteada,contadorAdivinadas);  
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
                            dibujarLetraIncorrecta(letraMinuscula);
                            contador++;
                            dibujarHorca(contador);
                            console.log("contador " + contador);
                            perder(contador);
                        }

                    }
                }
            } 

        }
    }
}

function jugarMobile(){
    borrarLetrasErradas();
    borrarHorca(); 
    //timer(120);
    var palabraSorteada = sortearPalabra();
    agregarPalabra(palabraSorteada);
    var contador = 0;
    dibujarHorca(contador);
    var letrasErradas = [];
    var contadorAdivinadas = 0;
    var letrasAdivinadas = [];
    var verificar = document.getElementById("verificar");
    verificar.addEventListener("click",function(){
        var letraMinuscula = document.getElementById("entrada").value.toLowerCase();
        if(verificarPalabraNueva(letraMinuscula)){
                var hayLetra = false;
                for(var i = 0; i < palabraSorteada.length; i++){
                    if(letraMinuscula == palabraSorteada[i]){
                        var repetida = false;
                        for(var e = 0; e < letrasAdivinadas.length; e = e + 2){
                            if(letraMinuscula == letrasAdivinadas[e] && i == letrasAdivinadas[e + 1]){
                                repetida = true;
                                hayLetra = true;
                                entrada.value = "";
                                alert("Letra repetida");
                                break;
                            }
                        }
                        if(!repetida){
                            dibujarLetraCorrecta(palabraSorteada, i);
                            hayLetra = true;
                            letrasAdivinadas.push(letraMinuscula, i);
                            console.log(contadorAdivinadas);
                            console.log(letrasAdivinadas);
                            console.log(palabraSorteada.length);
                            contadorAdivinadas++;
                            entrada.value = "";
                            ganar(palabraSorteada,contadorAdivinadas);  
                        }
                    }else{
                        if(hayLetra == false && i == (palabraSorteada.length -1)){
                            var encontrada = false;
                            for(var e = 0; e < letrasErradas.length; e++){
                                if(letraMinuscula == letrasErradas[e]){
                                    encontrada = true;
                                    entrada = "";
                                    alert("Letra repetida");
                                    break;
                                }
                            }
                            if(!encontrada){
                                letrasErradas.push(letraMinuscula);
                                console.log(letrasErradas);
                                dibujarLetraIncorrecta(letraMinuscula);
                                contador++;
                                dibujarHorca(contador);
                                console.log("contador " + contador);
                                entrada.value = "";
                                perder(contador);
                            }
        
                        }
                    }
                } 
        }
    })


}

