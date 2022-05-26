var palabras = ["alura","html","presidente","revolucion","guillotina","pasarela","automovil","edificio","prueba"];

function sortearPalabra(){
    var indice = Math.round(Math.random() * (palabras.length-1));
    return palabras[indice];
}

function sumarPalabra(){
    var palabraSumada = document.querySelector("#input-palabra").value;
    palabras.push(palabraSumada);
}

