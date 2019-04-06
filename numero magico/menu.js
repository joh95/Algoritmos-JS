

//Manejo del DOM por medio de un botón
document.getElementById("miBtn").addEventListener("click",function empezar(){
    let max = 100;
    let min = 1;

    let numeroSecreto = Math.random() * (max-min) + min;
    numeroSecreto = parseInt(numeroSecreto);

    console.log(numeroSecreto);

    let mensaje = "Ingresa un número para adivinar el número magico: "

    while(true){
        let numeroUsuario = prompt(mensaje,"0");
        numeroUsuario = parseInt(numeroUsuario);
            
        if(numeroSecreto ===numeroUsuario){
            alert("GANASTE!!");
            break;    
        }else if (numeroUsuario===0){
            break;
        }else if (numeroSecreto > numeroUsuario){
            mensaje = "Lo sentimos, el número que ingresaste es menor al número magico";
        }else if(numeroSecreto < numeroUsuario){
            mensaje = "Lo sentimos, el número que ingresaste es mayor al número magico";
        }
    }

}, true);