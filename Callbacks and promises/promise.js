//Consiste en la creación de un objeto PROMISE, que tendra dos parametros
//REJECT: Contiene el error o cuando no se pueda resolver la promesa.
//RESOLVE: Contiene el resultado de la funcion ejecutada por la promesa.

//THEN: Se ejecuta cuando la promesa se resuelve. (Permite encolar el codigo)
//CATCH: Se ejecuta cuando no se resuelve la promesa o surge un error.
/*
* @param Array     list     Lista de numeros.
*/
const asincronia = (list) => {
    //declaracion de la promesa.
    let promise = new Promise( (resolve, reject) => {
        //se valida que el parametro list sea un arreglo y no este vacio
        if (list instanceof Array && list.length > 0) {
            let suma = list.map(valor => Math.pow(valor, 2));
            resolve(suma);
        }
        //si no se cumple la condicion se manda un error.
        else {
            let error = new Error("Error de ejecución . . . :( ");
            reject(error);
        }
    });
    return promise;
};

asincronia([2, 3, 4, 5])
.then( respuesta => console.log(respuesta))
.catch( error => console.error(error));

