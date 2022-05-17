var palabras = ["alura","html","presidente","revolucion","guillotina","pasarela","automovil","edificio","prueba"];

function sortearPalabra(){
    var indice = Math.round(Math.random() * (palabras.length-1));
    console.log(palabras[indice]);
    console.log(indice);
    return palabras[indice];
}