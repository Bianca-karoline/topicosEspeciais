let express = require('express'); //Importa o express
let app = express(); // Executa a função principal (express)

app.set('view engine', 'ejs'); //Configurando a view engine, a biblioteca que cuidara das views
app.use(express.static('views/static')); // 01*
app.use(express.json()); // 02*
app.use(express.urlencoded({extended: true})); //03*

module.exports = app;









/*  Explicações dos comandos
01 - para arquivos estaticos como html e css, arquivos que não mudam em tempo de execução(enquanto o servidor estiver ativo), diferente do banco de dados.
02 - express como mecanismo padrao para manipulação do json, existem outras bibliotecas mas vamos usar o express
03 - Diz para o express converter o formulario html para json automaticamente
*/