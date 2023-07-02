function factorial (numero){
    let resultado = 1;



   // será la variable de iteración dentro de ese ciclo wile y empezará en 1//
    let i = 1;

    while(i <= numero){
        //actua como un acumulador del producto de i entre ese mismo contenido de resultado// 
        resultado *= i;

        //por cada iteracion incrementamos el valor de i 
        ++i;
    }
    //retornamos el contenido de resultado//
    return resultado;

}
//calcule el factorial de 5 es 120, etc
console.log(factorial(5)); //120
console.log(factorial(6)); //720
console.log(factorial(7)); //5040