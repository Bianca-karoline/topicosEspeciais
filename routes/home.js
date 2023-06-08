module.exports = function(servidor_express){
    servidor_express.get('/', function(req, res){
        res.render('pages/home/index'); // diz para a função que sempre que passar por aqui vai renderezar a pagina indicada
    }); //a função recebe a url e uma função anonima
}