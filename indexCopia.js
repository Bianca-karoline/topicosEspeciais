let app = require('./config/server')
let rotaHome = require('./routes/home');
rotaHome.g(app);

let rotaCliente = require('./routes/cliente');
rotaCliente.g(app);
rotaCliente.insere(app);
rotaCliente.p(app);
rotaCliente.u(app);

app.listen(8000, function(req, res){
    console.log('Servidor rodando na porta 8000');
});