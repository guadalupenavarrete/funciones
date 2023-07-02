let numeros = [ 7, 9, 2, 4, 8, 10];


//a, es el acumulador y el otro es  n, numero//
//a la variable a le sumamos el valor actual de n, n es cualquiera d elos numeros que elegimos abajoy retornamos a a, al princio a tendra 0//
let suma = numeros.reduce(( a, n ) => ( a += n, a ), 0);

console.log(suma);

console.log();

//ahora necesitamos dividir el resultado de la suma por la cantidad de elementos que tiene ese arreglo// 

let promedio = suma / numeros.length;
console.log(promedio);  //8.20