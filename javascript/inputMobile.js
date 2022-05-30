

function agregarInputMobile(){
    var entrada = document.createElement("input");
    var botones = document.querySelector(".botones");
    entrada.setAttribute("id", "entrada");
    entrada.setAttribute("type","text");
    entrada.setAttribute("maxlength", "1");
    botones.appendChild(entrada);

    var verificar = document.createElement("button");
    verificar = agregarBoton(botones, "Verificar", "boton-azul", verificar);
    verificar.setAttribute("id", "verificar");

}