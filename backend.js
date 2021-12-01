const express = require('express')

const app = express()
const porta = 3003
const user = 'admin'
const senha = 20212022
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const inserir = require('./models/cadastro').cadastrar
const { post } = require('jquery')
const { SELECT } = require('sequelize/dist/lib/query-types')
const { table } = require('console')

app.use(bodyParser.urlencoded({ extended: true })) 

app.use(bodyParser.json());



app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})



app.use(express.static(__dirname));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.post('/cadastrado', function(req,res){
   inserir.create({
       nome: req.body.Nome,
       sobrenome: req.body.sobrenome,
       email: req.body.email,
       telefone: req.body.telefone ,
       endereço: req.body.endereço,
       casa: req.body.casa,
       igreja: req.body.igreja



   }).then(function(){
       res.redirect('seach.html')
   }).catch(function(erro){
       res.send('Não conseguimos cadastrar <br>' + erro)
   })

  app.post('/done', function(req,res){
        if(req.body.user == user && req.body.senha == senha){
            res.redirect('./control.html')
        }else{
            res.redirect('seach.html')
        }
  })


  
  
    
})

app.listen(porta,()=>{
    console.log('Serve Ligado ')
})


