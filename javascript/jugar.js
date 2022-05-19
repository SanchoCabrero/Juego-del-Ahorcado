
function jugar(){
    var palabraSorteada = sortearPalabra();
    var contador = 0;
    agregarPalabra(palabraSorteada);
    var letraPresionada = 0;
    document.onkeydown = function(evt){
        letraPresionada = evt;
        if(soloLetras(letraPresionada.key)){
            var letraMinuscula = letraPresionada.key.toLowerCase();
            console.log(letraMinuscula);
            var hayLetra = false;
            for(var i = 0; i < palabraSorteada.length; i++){
                if(letraMinuscula == palabraSorteada[i]){
                    console.log("La palabra contiene esa letra");
                    var letraAMostrar = document.getElementById("letra " + i);
                    letraAMostrar.textContent = palabraSorteada[i].toLocaleUpperCase();
                    hayLetra = true;
                }else{
                    if(hayLetra == false && i == (palabraSorteada.length -1)){
                        console.log("No esxiste la letra presionada en la palabra");
                        contador++;
                        console.log("contador " + contador);
                        if(contador == 5){
                            alert("Perdió el juego")
                            jugar();
                        }
                    }
                }
            } 
        }
    }
}

function soloLetras(tecla){
    return /^[a-zA-Z]+$/.test(tecla);
}
