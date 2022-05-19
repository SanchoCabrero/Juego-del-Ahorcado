
function jugar(){
    var palabraSorteada = sortearPalabra();
    agregarPalabra(palabraSorteada);
    var letraPresionada = 0;
    document.onkeydown = function(evt){
        letraPresionada = evt;
        if(soloLetras(letraPresionada.key)){
            var letraMinuscula = letraPresionada.key.toLowerCase();
            console.log(letraMinuscula);
            for(var i = 0; i < palabraSorteada.length; i++){
                if(letraMinuscula == palabraSorteada[i]){
                    console.log("La palabra contiene esa letra");
                    var letraAMostrar = document.getElementById("letra " + i);
                    letraAMostrar.textContent = palabraSorteada[i].toLocaleUpperCase();
                }
            } 
        }
    }
}

function soloLetras(tecla){
    return /^[a-zA-Z]+$/.test(tecla);
}