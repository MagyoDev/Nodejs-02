/*
var n1 = 10
var n2 = "Teste"

if(n1 < 10){
    console.log("N1 menor que 10")
}else{
    console.log("N1 igual ou maior que 10")
}

for(var n3 = 0; n3 <= 10; n3++){
    console.log("N3: " + n3)
}

var n4 = 0

while(n4 <= 10){
    console.log("N4: " + n4)
    n4++
}
*/

const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor Rodando na porta 8081")
})

app.get("/", function(req, res){
    res.end("Node Js")
})

app.get("/cadastrar/:item", function(req, res){
    res.end(req.params.item)
})

app.get("/contato/:c1/:c2/:c3", function(req, res){
    res.end("Pag de Contato ")
})

app.get("/sobre/:s1/:s2", function(req, res){
    res.end("Item: " + req.params.s1 + " Quantidade: " + req.params.s2)
})

app.get("/nodemon", function(req, res){
    res.end("teste")
})