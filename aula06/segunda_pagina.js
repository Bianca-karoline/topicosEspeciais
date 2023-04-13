function soma(v1, v2){
    return v1 + v2;
}
let val1 = 100;
let val2 = 500;
console.log('Valor final: ' + soma(val1, val2));

let somatorio = function(v1, v2){
    return v1 + v2;
}
console.log('Valor final(anm): ' + somatorio(val1, val2));

let somatorio2 = (v1, v2) => v1 + v2;

console.log('Valor final(af): ' + somatorio2(val1, val2));
console.log('Tipo de somatorio2: ' + typeof somatorio2);
console.log('Conteudo de somatorio2: ' + somatorio2);

let total = somatorio2(val1,val2);
if(total==600){
    console.log('Valor igual a 600');
}else{
    console.log('Valor NAO igual a 600');
}
