var palabras = ["ñoqui","carro","presidente","revolucion","guillotina","pasarela","automovil","edificio","prueba","escritorio","pendulo","pretensioso","arrogante","atorrante","montaña","salina","erosion","meseta","tundra","avispero","relojeria","heladeria","peluqueria", "entretenimiento","neandertal","cavernicola","catedral", "lugubre","legendario"];

function sortearPalabra(){
    var indice = Math.round(Math.random() * (palabras.length-1));
    return palabras[indice];
}

function sumarPalabra(){
    var palabraSumada = document.querySelector("#input-palabra").value;
    palabras.push(palabraSumada);
}

