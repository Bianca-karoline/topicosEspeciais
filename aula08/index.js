var v_http = require('http');

var servidor = v_http.createServer(function(req, resp){
    //console.log('Entrou na função CreateServer');

    let url = req.url;
    console.log('URL: ' + url);

    if(url == '/cadastrar'){
        resp.end('<html><head><title>Pagina cadastral</title></head><body><h1>Cadastro</h1></body></html>');
    }
    resp.end('<html><head><title>Pagina inicial</title></head><body><h1>Pagina inicial</h1></body></html>');
});
servidor.listen(8000);
