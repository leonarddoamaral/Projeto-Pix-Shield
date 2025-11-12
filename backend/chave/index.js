//importar as dependencias
const express = require('express');
const bodyParser=require('body-parser');
const mysql = require('mysql2');
 
//criar a conexão com o banco de dados
 
 
const db=mysql.createConnection({
    host:'localhost', //127.0.0.1
    user:'root', //usuario do mysql
    password:'anima123', //sua senha_usuario do mysql
    database:'testepixChave' //nome_usuario do banco de dados
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
 
app.post('/chave',(req, res)=>{
    var {valor_chave, numeroDenuncias_chave}=req.body;
    if(!valor_chave || !numeroDenuncias_chave){
        return res.status(400).json({erro:'Todas as informações são obrigatórias'});
    }
    var sql='INSERT INTO chavepix(valor_chave, numeroDenuncias_chave)VALUES(?,?)';
    db.query(sql,[valor_chave, numeroDenuncias_chave],(err, result)=>{
        if(err){
            console.error('Erro ao Inserir:',err);
            return res.status(500).json({erro:'Erro ao inserir no banco de dados'});
        }
        res.status(201).json({
           mensagem:'Chave Inserido com sucesso',id: result.insertId
        });
    });
}
);
 
//Listar todos os usuarios(Get)
 
app.get('/chave',(req, res)=>{
    db.query('SELECT valor_chave, numeroDenuncias_chave FROM chavepix',(err, results)=>{
        if(err){
            return res.status(500).json({erro:'Erro ao buscar chave'});
        }
        res.json(results);
    });
});
// Listar usuário pelo ID
 
app.get('/chave/:id',(req, res)=>{
    var {id}=req.params;
    db.query('SELECT *FROM chavepix WHERE id_chave=?',[id],(err, results1)=>
    {
        if(err){
            return res.status(500).json({erro:'Erro ao Buscar chave'});
        }
        if(results.length===0){
            return res.status(404).json({mensagem:'Chave não encontrado'});
        }
        res.json(results1[0]);
    }
);
});
 
app.put('/chave/:id',(req, res)=>{
    var {id}=req.params;
    var {valor_chave, numeroDenuncias_chave}=req.body;
    if(!valor_chave || !numeroDenuncias_chave){
        return res.status(400).json({erro:'Todas as informações são obrigatórias'});
    }
    var sql='UPDATE chave SET valor_chave=?, numeroDenuncias_chave=?';
    db.query(sql,[valor_chave, numeroDenuncias_chave, id_chave],(err, result)=>{
        if(err){
            console.error('Erro ao atualizar:',err);
            return res.status(500).json({erro:'Erro ao atualizar no banco de dados'});
        }
        res.json({mensagem:'Chave atualizado com sucesso'});
    });
});
 
app.delete('/usuarios/:id',(req, res)=>{
    var {id}=req.params;
    var sql='DELETE FROM chavepix WHERE id_chave=?';
    db.query(sql,[id],(err, result)=>{
        if(err){
            console.error('Erro ao deletar:',err);
            return res.status(500).json({erro:'Erro ao deletar no banco de dados'});
        }
        res.json({mensagem:'Usuario deletado com sucesso'});
    }
);});
 
 
//inciar o servidor
 
app.listen(4000,()=>{
    console.log('Servidor rodando em http://localhost:4000');
})
 