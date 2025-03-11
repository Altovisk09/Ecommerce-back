const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {testConnection} = require('./src/config/database');

var app = express();

dotenv.config();

testConnection();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('combined'));
app.use(cookieParser());
app.use(cors())

// rotas
app.use('/', (res, req)=>{
    res.send('Deu certo')
});

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

const PORT = normalizePort(process.env.PORT || '3000');
app.set('port', PORT);

app.listen(PORT, () => {
    console.log(`Servidor aberto na porta: ${PORT}`);
});

