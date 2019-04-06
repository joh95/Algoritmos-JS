document.getElementById("miBoton").addEventListener("click",empezar =() =>{

    let min = 1;
    let max = 100;

    let numeroMagico = Math.random() * (max-min) + min;
    numeroMagico = parseInt(numeroMagico)

    console.log(numeroMagico);
    let mensaje = "Ingrese el numero para adivinar";

    while(true){
        let numeroUsuario = prompt(mensaje, " ");
        numeroUsuario = parseInt(numeroUsuario);

        if(numeroMagico == numeroUsuario){
            alert("ADIVINASTE!!! ");
            break;
        }else if(numeroUsuario==0){
            break;
        }else if (numeroUsuario > numeroMagico){
            mensaje = "El numero que ingreso es mayor al numero magico";
        }else if (numeroUsuario < numeroMagico){
            mensaje = "El numero que ingreso es menor al numero magico";
        }
    }
}, true)


