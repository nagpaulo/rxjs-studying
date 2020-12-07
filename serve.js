const http = require("http");
const express = require("express");
const path = require('path');
const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(`${__dirname}/index.html`));
});

app.get("/ordenacaosemrxjs", function(req,res){
    res.sendFile(path.join(`${__dirname}/src/javascript/ordenacao-array-reduce.html`));
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));
