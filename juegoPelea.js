let vidaAlejito= 120;
let vidaRodas= 100;
let golpeAlejitoMin= 8;
let golpeAlejitoMax=10;
let golpeRodasMin=7;
let golpeRodasMax=12;

ambosviven=_=>{return vidaAlejito>0 && vidaRodas>0}

calcularGolpeAlejito=()=>{
    return  Math.round(Math.random() * (golpeAlejitoMax-golpeAlejitoMin))+golpeAlejitoMin;
}

calcularGolpeRodas=()=>{
    return  Math.round(Math.random() * (golpeRodasMax-golpeRodasMin))+golpeRodasMin;
}

rodasVida=_=> {return vidaRodas>0;}

let round=1;

while(ambosviven()){
    
    let golpeAlejito = calcularGolpeAlejito();
    let golpeRodas = calcularGolpeRodas();

    console.log("ROUND #" + round);
    if (golpeAlejito>golpeRodas){
        console.log("Pegó Alejito "+golpeAlejito + " golpe rodas: "+golpeRodas);
        vidaRodas= vidaRodas -golpeAlejito;
        console.log("Vida de alejito = "+vidaAlejito+"   Vida de Rodas = "+vidaRodas);
    }else if(golpeAlejito<golpeRodas){
        console.log("Pegó Rodas "+golpeRodas +" golpe Alejito: "+golpeAlejito);
        vidaAlejito= vidaAlejito - golpeRodas;
        console.log("Vida de alejito = "+vidaAlejito+"   Vida de Rodas = "+vidaRodas);
    }else{
        console.log("Pegaron los dos "+ golpeAlejito);
        vidaRodas= vidaRodas-golpeAlejito;
        vidaAlejito=vidaAlejito-golpeRodas;
        console.log("Vida de alejito = "+vidaAlejito+"   Vida de Rodas = "+vidaRodas);
    }
    round++;
}

if (rodasVida()){
    console.log("GANÓ RODAS !!!");
} else{console.log("GANÓ ALEJITO !!!");
}
    
