// Algoritmo para el manejo de parametros y de funciones especiales

function suma (...numeros){
    
    return numeros.reduce(function (acum,sumando){
        acum +=sumando;
        return acum;
        
    })
}

let promedio = (...arreglo)=>{
    return arreglo.reduce((total, x)=>{
        return total = total +x;
        
    })/arreglo.length;
}

let primos = (...arreglo)=>{
    return arreglo.filter((x)=>{
        let numeroProximo = Math.round(Math.sqrt(x));
        if(x%2==0 && x!=2){
            return false;
        }else if(x%3==0 && x!=3){
            return false;
        }else if(x%5 ==0 && x!=5){
            return false;
        }else if(x%7==0 && x!=7){
            return false;
        }
        else{
            return true;
        }
    })
}

function dobles(...numeros){ 
    return numeros.map(function (x){
    return x - 3;
    })

}

function par (... numeros){
    return numeros.filter(function (x){
        if (x%2 ==0){
            return false;
        }else{
            return true;
        }
    })
}

console.log(suma(4, 8, 12, 6));
console.log(dobles(3,4,5,6));
console.log(par(4,50,3,3,4));
console.log(promedio(2,2,2,2));
console.log(primos(50, 51, 7, 43, 20, 8, 33, 35, 37, 13, 17, 11));
