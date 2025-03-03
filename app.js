const express = require('express');
const logger = require('morgar');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

var app = express();

dotenv.config();
// conectar db

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('combined'));
app.use(cookieParser());
// app.use(cors(corsConfig))

// rotas
app.use('/',{

})

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

