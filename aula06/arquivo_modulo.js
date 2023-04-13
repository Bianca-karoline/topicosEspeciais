let meuModulo = {}; //instanciação do arquivo do tipo modulo

meuModulo.minhaVariavel = 132;

meuModulo.minhaFuncao = function(){
    console.log('Acessou minha função');
}
meuModulo.soma = (v1,v2) =>v1+v2;
module.exports = meuModulo; //exportação do arquivo e suas funções
