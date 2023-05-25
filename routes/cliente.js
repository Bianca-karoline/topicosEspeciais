module.exports.g = function(app){
    app.get('/cadastrar_cliente', function(req,res){
        res.render('pages/cadastrar_clientes');
    });
}

module.exports.insere = function(app){
    app.get('/cliente_insere', function(req, res){
        res.render('pages/cadastrar_clientes');
    });
};

module.exports.p = function(app){
    app.post('/cliente', function(req,res){
        const{nomeDoCliente , email, sobre} = req.body;
        console.log("Nome: " + nomeDoCliente);

        res.render('pages/clienteC');
    })
}

module.exports.u = function(app){
    app.put('/cliente/:id', function(req,res){
        const idCliente = req.params.id;
        console.log("Id do cliente: " + idCliente);

        let clienteRetornado = consultaClientePorId(idCliente);
    });
};