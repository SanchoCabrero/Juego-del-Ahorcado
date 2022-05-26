function dibujarHorca(contador){

    var horca = document.querySelector("#horca");

    var pincel = horca.getContext("2d");

    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(75,390);
    pincel.lineTo(225,390);
    pincel.stroke();

    if(contador == 1){
        dibujarPaloVertical(pincel);
    }
    if(contador == 2){
        dibujarPaloHorizontal(pincel);
    }
    if(contador == 3){
        dibujarPalitoVertical(pincel);
    }
    if(contador == 4){
        dibujarCabeza(pincel);
    }
    if(contador == 5){
        dibujarCuerpo(pincel);
    }
    if(contador == 6){
        dibujarBrazoIzquierdo(pincel);
    }
    if(contador == 7){
        dibujarBrazoDerecho(pincel);
    }
    if(contador == 8){
        dibujarPiernaIzquierda(pincel);
    }
    if(contador == 9){
        dibujarPiernaDerecha(pincel);
    }

}
function dibujarPaloVertical(pincel){
    pincel.moveTo(150,390);
    pincel.lineTo(150,10);
    pincel.stroke(); 
}
function dibujarPaloHorizontal(pincel){
    pincel.moveTo(150,10);
    pincel.lineTo(350,10);
    pincel.stroke(); 
}
function dibujarPalitoVertical(pincel){
    pincel.moveTo(350,10);
    pincel.lineTo(350,50);
    pincel.stroke(); 
}
function dibujarCabeza(pincel){
    pincel.moveTo(390,90);
    pincel.arc(350,90,40,0,2*3.14);
    pincel.stroke(); 
}
function dibujarCuerpo(pincel){
    pincel.moveTo(350,130);
    pincel.lineTo(350,230);
    pincel.stroke();
}
function dibujarBrazoIzquierdo(pincel){
    pincel.moveTo(350,130);
    pincel.lineTo(300,210);
    pincel.stroke();
}
function dibujarBrazoDerecho(pincel){
    pincel.moveTo(350,130);
    pincel.lineTo(400,210);
    pincel.stroke();
}
function dibujarPiernaIzquierda(pincel){
    pincel.moveTo(350,230);
    pincel.lineTo(300,310);
    pincel.stroke();
}
function dibujarPiernaDerecha(pincel){
    pincel.moveTo(350,230);
    pincel.lineTo(400,310);
    pincel.stroke();
}
function borrarHorca(){
    var horca = document.querySelector("#horca");
    var pincel = horca.getContext("2d");
    pincel.beginPath();
    pincel.clearRect(0, 0, horca.width, horca.height);
}

