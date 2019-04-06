
 let numeros = [3,2,4,2,42,23,10];
let numbers = new Array(10);
let numbers2 = new Array(20,45,34,23,12,43,21,43);
let numbers3 = new Array();
 

 function ordenamientoAscedente(array){
     array.sort();
     let array2= new Array();
    for(let i=0;i<numbers2.length;i++){
        let aux;
        aux=array[i];
        array2.unshift(aux);
        console.log(`El vector ordenado ascedente es: ${ array2}`);
    
 }
    
   // console.log(`El vector ordenado ascedente es: ${ array2}`); 
    
}


function ordenamientoAscedente2(array){
    return array.sort().reverse();
    
 }

numbers2=ordenamientoAscedente(numbers2);

 