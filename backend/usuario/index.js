//importar as dependencias
const express = require('express');
const bodyParser=require('body-parser');
const mysql = require('mysql2');
 
//criar a conexão com o banco de dados
 
 
const db=mysql.createConnection({
    host:'localhost', //127.0.0.1
    user:'root', //usuario do mysql
    password:'anima123', //sua senha_usuario do mysql
    database:'ps_usuarios' //nome_usuario do banco de dados
}
 
);
 
//Conectar com o banco de dados
 
db.connect((err)=>{
    if(err){
        console.error('Erro ao conectar no banco de dados');
        return;
    }
    console.log('Conectado com sucesso');
}
);
 
//Criar o App
 
var app=express();
app.use(bodyParser.json());
 
//Rota inicial
 
app.get('/',(req, res)=>{
    res.send('API funcionando');
});
 
//Inserir os Dados (post)
 
app.post('/usuarios',(req, res)=>{
    var {nome_usuario, email_usuario, telefone_usuario, senha_usuario}=req.body;
    if(!nome_usuario || !email_usuario || !telefone_usuario || !senha_usuario){
        return res.status(400).json({erro:'Todas as informações são obrigatórias'});
    }
    var sql='INSERT INTO usuarios(nome_usuario, email_usuario, telefone_usuario, senha_usuario)VALUES(?,?,?,?)';
    db.query(sql,[nome_usuario, email_usuario, telefone_usuario, senha_usuario],(err, result)=>{
        if(err){
            console.error('Erro ao Inserir:',err);
            return res.status(500).json({erro:'Erro ao inserir no banco de dados'});
        }
        res.status(201).json({
           mensagem:'Usuario Inserido com sucesso',id: result.insertId
        });
    });
}
);
 
//Listar todos os usuarios(Get)
 
app.get('/usuarios',(req, res)=>{
    db.query('SELECT * FROM usuarios',(err, results)=>{
        if(err){
            return res.status(500).json({erro:'Erro ao buscar usuarios'});
        }
        res.json(results);
    });
});
// Listar usuário pelo ID
 
app.get('/usuarios/:id_usuario',(req, res)=>{
    var {id_usuario}=req.params;
    db.query('SELECT * FROM usuarios WHERE id_usuario=?',[id_usuario],(err, results)=>
    {
        if(err){
            console.error("erro:",err);
            return res.status(500).json({erro:'Erro ao Buscar usuário'});
            
        }
        if(results.length===0){
            return res.status(404).json({mensagem:'Usuario não encontrado'});
        }
        res.json(results[0]);
        
    }
);
});
 
app.put('/usuarios/:id_usuario',(req, res)=>{
    var {id_usuario}=req.params;
    var {nome_usuario, email_usuario, telefone_usuario, senha_usuario}=req.body;
    if(!nome_usuario || !email_usuario || !telefone_usuario || !senha_usuario){
        return res.status(400).json({erro:'Todas as informações são obrigatórias'});
    }
    var sql='UPDATE usuarios SET nome_usuario=?, email_usuario=?, telefone_usuario=?, senha_usuario=? WHERE id_usuario=?';
    db.query(sql,[nome_usuario, email_usuario, telefone_usuario, senha_usuario, id_usuario],(err, result)=>{
        if(err){
            console.error('Erro ao atualizar:',err);
            return res.status(500).json({erro:'Erro ao atualizar no banco de dados'});
        }
        res.json({mensagem:'Usuario atualizado com sucesso'});
    });
});
 
app.delete('/usuarios/:id_usuario',(req, res)=>{
    var {id_usuario}=req.params;
    var sql='DELETE FROM usuarios WHERE id_usuario=?';
    db.query(sql,[id_usuario],(err, result)=>{
        if(err){
            console.error('Erro ao deletar:',err);
            return res.status(500).json({erro:'Erro ao deletar no banco de dados'});
        }
        res.json({mensagem:'Usuario deletado com sucesso'});
    }
);});
 
 
//inciar o servidor
 
app.listen(3000,()=>{
    console.log('Servidor rodando em http://localhost:3000');
})
 