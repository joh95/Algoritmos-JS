// Diferencia entre let y var

/*var alejito= 68;
var rodas = 83;

if(alejito==68){
	let alejito = 80;
	var rodas = 90;
	console.log("peso de alejito con let: "+alejito);
	console.log("peso de rodas con var: "+rodas);
	console.log("sali del bloque")

}
console.log("peso de alejito fuera del bloque: "+alejito);
console.log("peso de Rodas fuera del bloque: "+rodas);

// triple igual y doble igual

let cero = "A"
let zero = "a"

if(cero == zero){
    console.log("es igual");
}

// JSON  y Objeto

estudiante = {
    "nombre":"Alejito",
    "Carrera":"Sistemas",
    "celular":"3121242234",
    "cedula":"1213131",
    "valor":500000,
    "estado":function matricula(valor) {
        if(valor >0){
            console.log("Se puede matricular");
        }else console.log(" Vaya y pague !!");
    },
    "Universidad":{
        "facultad":"Ingenieria",
        "departamento":"Botia"
    }
}

function estudiante2(nombre, carrera, celular, cedula){
    this.nombre = nombre;
    this.carrera = carrera;
    this.celular = celular;
    this.cedula = cedula;

    console.log("Nombre:"+this.nombre);
    console.log("carrera: "+this.carrera);
    console.log("Celular: "+this.celular);
    console.log("cedula: "+this.cedula);
}
estudiante2("Rodas","Sistemas","32434342", "1221212")

estudiante2("32434342", "1221212", "Rodas","Sistemas")



 // Funciones flecha y funciones normales
potencia =(a,b) => Math.pow(a, b)

pot2 =(a,b)=> {
    if(b==0){
        return 1
    }else{
        let  pot = 1;
        return pot = a * pot2(a, b-1) 
    }
}


function seno (numero){
    let sen= Math.sin(numero);
    console.log("El seno del numero "+ numero+" es: "+sen.toFixed(2));
    
}
//nombre = () => {}         sin parametros nombre => {}

coseno = (numero) => {
    let cos = Math.cos(numero);
    console.log("El coseno del numero "+numero+" es: "+ cos.toFixed(2));
}

// funciones anonimas (lo que hace la funcion)();
(()=>{
    console.log("Hola gordo!!");
})();


seno(90);
coseno(90);
coseno(45);



let opResta = "4-5-6-12-10"

let nu = opResta.split("-").join(" -").split(" ").map(conv=(x)=>Number(x)).reduce(resta=(total, acum)=>total=total+acum)


console.log(nu);
*/

estudiante = {
    "Nombre": "Juan R",
    "cedula": "12341231",
    "telefono": "231321",
    "valor":  500000,
    "calcular": matricula=(numero)=>{
        if(numero>1000){
            console.log("Pague por gvn");
        }else{
            console.log("No paga por estudiar o por pobre");
        }
    },
    "Universidad":Universidad = {
        "nombre":"UdeA",
        "facultad":"ingenieria",
        "Jefe":"Botia"
    }

}
estudiante.valor= 900
estudiante.calcular(estudiante.valor)


function estudiante2(nombre, carrera, valor, cedula){
    let nom = nombre;
    this.carrera = carrera;
    this.valor = valor;
    this.cedula = cedula;

    console.log("Nombre:"+nom);
    console.log("carrera: "+this.carrera);
    console.log("Celular: "+this.valor);
    console.log("cedula: "+this.cedula);
}


estudiante2("Rodas","Sistemas", "1221212", 700)
estudiante2("juan esteban", carrera)
//console.log()