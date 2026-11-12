const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next){
    req.authStatus = true
    if(req.authStatus == true){
        console.log('Está logado, pode continuar')
        next()
    } else{
        console.log('Não está logado!!')
        next()
    }
}

app.use(checkAuth)

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.get('/login', (req,res)=>{
    res.sendFile(`${basePath}/login.html`)
})

app.get('/users/add', (req,res)=>{
    res.sendFile(`${basePath}/usersform.html`)
})

app.post('/users/save', (req,res)=>{
    console.log(req.body)
    res.send('Usuário cadastrado com sucesso!')
})

app.get('/users/:id', (req,res)=>{
    const id = req.params.id
    console.log(`Estamos buscando o usuário com id: ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

app.get('/sobre', (req, res)=>{
    res.sendFile(`${basePath}/sobre.html`)
})

app.get('/contato', (req, res)=>{
    res.sendFile(`${basePath}/contato.html`)
})

app.use(function(req,res){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta ${port}`)
})