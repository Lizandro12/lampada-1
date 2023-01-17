acender.addEventListener("click",on);
apagar.addEventListener("click",off);
partir.addEventListener("click",brea);
trocar.addEventListener("click",replace);
let imagem = document.getElementById("imagem");
let ar = document.getElementById("ar");
let botaoAcender = document.getElementById("acender");
let botaoApagar = document.getElementById("apagar");
let botaoPartir = document.getElementById("partir");
let botaoTrocar = document.getElementById("trocar");
let lamp = 0;
let paragrafo = document.createElement("p");


function on(){
    if( lamp == 0){
        imagem.src = "img/on.jpg";
        lamp = 1;
        botaoAcender.style.background = "#32CD32";
        botaoTrocar.style.background = "#FFD700";
        paragrafo.innerHTML = "";
        ar.appendChild(paragrafo);
    } else if( lamp == 2){
        paragrafo.innerHTML = "A lampada está partida, troque-a.";
        ar.appendChild(paragrafo);
    } else if( lamp == 1){
        paragrafo.innerHTML = "A lampada já está apagada.";
        ar.appendChild(paragrafo);
    }
    
}
function off(){
    if( lamp == 1){
        imagem.src = "img/off.jpg";
        lamp = 0;
        botaoAcender.style.background = " #90EE90";   
        paragrafo.innerHTML = "";
        ar.appendChild(paragrafo);
    } else if( lamp == 2){
        paragrafo.innerHTML = "A lampada está partida, troque-a.";
        ar.appendChild(paragrafo);
    } else if( lamp == 0){
        paragrafo.innerHTML = "A lampada já está apagada.";
        ar.appendChild(paragrafo);

    }
    

}
function brea(){
    if( lamp != 2){
        imagem.src = "img/break.jpg"
        lamp = 2;
        botaoAcender.style.background = " #90EE90";
        botaoPartir.style.background = "#DC143C";
        botaoTrocar.style.background = "#FFD700";
        paragrafo.innerHTML = "";
        ar.appendChild(paragrafo);
    } else{
        paragrafo.innerHTML = "A lampada já está partida";
        ar.appendChild(paragrafo);
    }
}

function replace(){
    if( lamp == 2){
        imagem.src = "img/off.jpg";
        lamp = 0;
        botaoTrocar.style.background = "#FFFF00";
        botaoPartir.style.background = "#CD5C5C";
        paragrafo.innerHTML = "";
        ar.appendChild(paragrafo);
    }
}