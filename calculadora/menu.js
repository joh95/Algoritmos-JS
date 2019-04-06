//Manejo del DOM por medio de un botón
document.getElementById("miBtn").addEventListener("click",function empezar(){
    let suma = (a,b)=> a+b

    let resta = (a,b)=>{
        return a-b
    }

    let mult = (a,b)=>{
        return a*b
    }

    let div = (a,b)=>{
        if(b==0){
            console.log('Division por cero, indefinida')
        }
        else
        return a/b
    }

    let pot = (a,b)=>{
        if (b==0){
            return 1
        }
        else
            return a* pot (a,b-1)
    }
    let modulo =(a,b)=>{
        return a%b;
    }

    let raizC = a=>{
        let i=1
        while((i*i)<=a){
            i++
        }	
        return (a+ ((i-1)*(i-1)))/((i-1)+(i-1))
    }
    
    let coseno =(numero)=> Math.cos(numero).toFixed(2);

    let seno = (numero) => Math.sin(numero).toFixed(2);

    let tangente = (numero) => Math.tan(numero).toFixed(2);

    let mensaje = "MENU: Ingresa un número correspondiente al menu: "

    //while(true){
        let numeroMenu = prompt(mensaje,"0");
        numeroMenu = parseInt(numeroMenu);
        
        switch (numeroMenu) {
            case 0:
                break;
            case 1:
                let operacionSuma = prompt("Ingrese la operación", "3+2");
                let sumatoria = operacionSuma.split("+");

                let resultadoSuma=0;
                for(let i=0; i<sumatoria.length;i++){
                       resultadoSuma= resultadoSuma + Number(sumatoria[i]);
                }
                alert("El resultado de la suma es: "+resultadoSuma )
                break;

            case 2:
                let operacionResta = prompt("Ingrese la operación", "5-2");
                let resultadoResta = operacionResta.split("-").join(" -").split(" ").map(x => Number(x)).reduce((total, amount)=> total + amount)
                alert("El resultado de la resta es: "+resultadoResta )
                break;
            
            case 3:
                
                let operacionMult = prompt("Ingrese la operación", "5x2");
                let numerosMult = operacionMult.split("x");
                let resultadoMult = 1;
                for(let i=0; i<numerosMult.length;i++){
                    resultadoMult = resultadoMult * Number(numerosMult[i]);
                }
                alert("El resultado de la multiplicación es: "+resultadoMult )
                break;

            case 4:

                let operacionDiv = prompt("Ingrese la operación", "5/2");
                let numerosDiv = operacionDiv.split("/");
                if(numerosDiv[1]==0){
                    alert("División por cero esta indefinida...");
                    break;
                }else{
                let resultadoDiv = div(Number(numerosDiv[0]), Number(numerosDiv[1]));          
                alert("El resultado de la división es: "+resultadoDiv.toFixed(2) );
                break;
                }

            case 5:

                let operacionPot = prompt("Ingrese la operación", "5^2");
                let numerosPot = operacionPot.split("^");
                let resultadoPot = pot(Number(numerosPot[0]), Number(numerosPot[1]));          
                alert("El resultado de la potenciación es: "+resultadoPot );
                break;

            case 6:

                let operacionMod = prompt("Ingrese la operación", "5%2");
                let numerosMod = operacionMod.split("%");
                let resultadoMod = modulo(Number(numerosMod[0]), Number(numerosMod[1]));          
                alert("El resultado del modulo es: "+resultadoMod );   
                break;
            
            case 7:

                let operacionRaiz = prompt("Ingrese la operación", "49");
                let numeroRaiz = operacionRaiz.split("%");
                let resultadoRaiz = raizC(Number(numeroRaiz[0]));          
                alert("La raiz de "+ numeroRaiz[0]+ " es: "+resultadoRaiz.toFixed(2) );   
                break;
            
            case 8:
                let operacionCos = prompt("Ingrese el número para calcular COSENO", "");
                let resultadoCos = coseno(Number(operacionCos));
                alert("El coseno de "+ operacionCos+ " es: "+resultadoCos)
                break;
            
            case 9:
                let operacionSen = prompt("Ingrese el número para calcular SENO", "");
                let resultadoSen = seno(Number(operacionSen));
                alert("El seno de "+ operacionSen+ " es: "+resultadoSen)
                break;
            
            case 10: 
                let operacionTan = prompt("Ingrese el número para calcular Tangente", "");
                let resultadoTan = tangente(Number(operacionTan));
                alert("La tangente de "+ operacionTan+ " es: "+resultadoTan)
                break;

            default:
                break;
        } 
        
    //}

}, true);