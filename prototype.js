// Antes de ecs6 //#endregion

function Animal(nombre, patas, peso, raza){
    this.nombre = nombre;
    this.patas = patas;
    this.peso = peso;
    if(raza == "" || raza == "pug"){
        this.raza = {
            pedigre: true,
            msg: "bebecitaa"
        }
    }else{  
        this.raza = {
            pedigre: false,
            msg: "uah uah"
        }

    }
    this.saludar = function (nombre) {
        console.log("Hola mi nombre es: "+ this.nombre);        
    }
        
}



let bruno = new Animal("Bruno", 4, 15, "pug");

//bruno.nombre="orus";

//bruno.saludar();
//console.log(Animal.prototype);

bruno.saludar();
Animal.prototype.nombre = "Maria";
//Animal.prototype.patas= 4;
console.log(Animal.prototype);
console.log(Animal.prototype ===bruno.__proto__);