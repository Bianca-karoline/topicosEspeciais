let db = require('../config/dbConnection')();

module.exports.getClienteAPI = function(app){
    app.get('/cliente', function(req, res){

        db.query('select * from cliente;',function(erro,resultado){
            if(erro){
                console.log("Deu ruim: " + erro);
            }else{
                res.status(200).json(resultado);
            }
        })// recebe tres paramentro, o query, ..., a função anonima

        
    })
}
module.exports.insereClienteAPI = function(app){
    app.post('/cliente', function(req, res){
        const{razao_social, cnpj, limite_credito} = req.body;
        console.log("Razao: " + razao_social + "\nCNPJ: " + cnpj + "\nLimite" + limite_credito);
        const data =  [razao_social, cnpj, limite_credito] = req;
        db.query('insert into cliente (razao_social, cnpj, limite_credito) values (?,?,?);', data, function(error, result){
            if(error){
                console.log(error);
            }else{
                res.status(201).json({message: "Cliente inserido"});
            }
        });
        
    });
}
module.exports.removeClienteAPI = function(app){
    app.delete('/cliente/:id', function(req, res){
        const clienteID = res.params.id;
        console.log("Id cliente: " + clienteID);
        db.query('delete from cliente where id_cliente = ?', clienteID, function(error, result){
            if(error){
                console.log(error)
            }else{
                res.json({message: "Cliente removido"});
            }
        })

        
    })
}