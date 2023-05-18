let express = require('express');

let app = express();
app.set('view engine', 'ejs');
app.use(express.static('views/static')); //caminho do css e arquivos estaticos no express

app.get('/listar', function(req,res){
    res.render('pages/listar');
});
app.get('/cadastrar_cliente', function(req,res){
    res.render('pages/cadastrar_clientes');
});
app.get('/', function(req,res){
    res.render('index');
});

app.listen(8000, function(req, res){
    console.log('Servidor rodando na porta 8000');
});