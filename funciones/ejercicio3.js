function maximo(numeros) {
    //si es distinto ese parametro no es arreglo y ahi retornamos null//
    if(toString.call (numeros)!== '[objet Array]'){ 
    return null;
}
//todos tienen que ser valor numerico, por cada elemento que se pregunte si e es de tipo number//
//si un elemento no es numbre retornamos null//
if (!numeros.every(e => typeof e == 'number' )){
    return null;
}

return Math.max.apply(null, numeros);

}
console.log(maximo([7, 3, 5, 2, 8, 11,])); 
console.log(maximo([7, 3, 5, 2, 8, 11, 10]));

console.log();
console.log(maximo(42)); //null
console.log(maximo([7, 3, '5', 2, 8, 11, 10])); //null