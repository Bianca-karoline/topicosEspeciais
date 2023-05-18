let http = require('http');

let servidor = http.createServer(function(req, res){
    let endereco = req.url; //propriedade

    if(endereco == "/listar"){
        res.end("<html><head><title>Pagina inicial</title></head><body><h1>Pagina Listar</h1></body></html>");
    }else if(endereco == '/cadastrar'){
        res.end("<html><head><title>Pagina inicial</title></head><body><h1>Pagina de Cadastro</h1></body></html>");
    }else{
        res.end("<html><head><title>Pagina inicial</title></head><body><h1>Pagina Inicial</h1></body></html>");
    }

    
});
servidor.listen(8000);