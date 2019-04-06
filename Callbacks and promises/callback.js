// Maneja asincronia
// Es una funcion A que recibe como parametro otra funcion B
// El callback tiene 2 argumentos, el error (personalizado) y la respuesta a la function
/*
* @param Array     list     Lista de numeros.
* @param Function  callback Recibe la funcion B.
*/

let asincronia = (list, callback) => {
   //se valida que el parametro list sea un arreglo y no este vacio
   
   if (list instanceof Array && list.length > 0) {
       let suma = list.map(valor => Math.pow(valor, 2));
       return callback(null, suma);
   }
   //si no se cumple la condicion se manda un error.
   else {
      let error = new Error("Error de ejecución . . . :( ");
       return callback(error, null);
   }
};

asincronia([2, 3, 4, 5], (error, result) => (error) ? console.error(error) : console.log(result));