var mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'novo'
    });
}

/*create database novo;
use novo;
create table cliente(
id_cliente int not null primary key auto_increment,
razao_social varchar(70) not null,
cnpj varchar(14),
limite_credito decimal(10,2)
);*/