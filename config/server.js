let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('views/static'));
app.use(express.json());
app.use(express.urlencoded({extend: true}));
module.exports = app;