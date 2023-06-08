let app = require('./config/server'); //quando se usa o require não precisa colocar a extenção do arquivo

let rotaHome = require('./routes/home');
rotaHome(app);

let rotaCliente = require('./routes/cliente');
rotaCliente.getClienteAPI(app);
rotaCliente.insereClienteAPI(app);
rotaCliente.removeClienteAPI(app);

app.listen(8000, function(){
    console.log("Servidor iniciado na porta 8000");
});// cria o servidor executando o app