function suma (a,b){
    return a+b;
}

let a = function resta(a,b){
    return a-b;
}

console.log(suma(20,21));
console.log (typeof(a));

console.log(a(40,12));

suma1 = () => a+b;

console.log(typeof(suma1));
console.log(suma1(456,56))