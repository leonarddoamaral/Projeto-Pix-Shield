const express = require('express');
const bodyParser=require('body-parser');
const mysql = require('mysql2');

//criar a conexão com o banco de dados
const db=mysql.createConnection({
    host:'localhost', //
    user:'root', //usuario do mysql
    password:'anima123', //sua senha do mysql
    database:'ps_denuncias' //nome do banco de dados
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
app.post('/denuncias',(req, res)=>{
    var {conteudo_denuncia, descricao_denuncia, situacao_denuncia, id_usuario_fk, id_chave_fk}=req.body;
    if(!conteudo_denuncia || !descricao_denuncia || !situacao_denuncia || !id_usuario_fk|| !id_chave_fk){
        return res.status(400).json({erro:'Todas as informações são obrigatórias'});
    }
    var sql='INSERT INTO denuncias(conteudo_denuncia, descricao_denuncia, situacao_denuncia, id_usuario_fk, id_chave_fk)VALUES(?,?,?,?,?)';
    db.query(sql,[conteudo_denuncia, descricao_denuncia, situacao_denuncia, id_usuario_fk, id_chave_fk],(err, result)=>{
        if(err){
            console.error('Erro ao Inserir:',err);
            return res.status(500).json({erro:'Erro ao inserir no banco de dados'});
        }
        res.status(201).json({
           mensagem:'Denuncia Inserida com sucesso',id: result.insertId
        });
    }
);
}
);

//Listar todas as denuncias(Get)
app.get('/denuncias',(req, res)=>{
    var sql='SELECT * FROM denuncias';
    db.query(sql,(err, results)=>{
        if(err){
            console.error('Erro ao buscar as denuncias:',err);
            return res.status(500).json({erro:'Erro ao buscar no banco de dados'});
        }
        res.status(200).json(results);
    });
});

app.put('/denuncias/:id_denuncia',(req, res)=>{
    var {id_denuncia}=req.params;
    var {conteudo_denuncia, descricao_denuncia, situacao_denuncia, id_chave_fk}=req.body;
    if( !conteudo_denuncia || !descricao_denuncia || !situacao_denuncia || !id_chave_fk ){
        return res.status(400).json({erro:'Todas as informações são obrigatórias'});
    }
    var sql='UPDATE denuncias SET conteudo_denuncia=?, descricao_denuncia=?, situacao_denuncia=?, id_chave_fk=? WHERE id_denuncia=?';
    db.query(sql,[conteudo_denuncia, descricao_denuncia, situacao_denuncia, id_chave_fk, id_denuncia],(err, result)=>{
        if(err){
            console.error('Erro ao atualizar:',err);
            return res.status(500).json({erro:'Erro ao atualizar no banco de dados'});
        }
        res.json({mensagem:'Denuncia atualizada com sucesso'});
    });
});

app.get('/denuncias/:id_denuncia',(req, res)=>{
    var {id_denuncia}=req.params;
    db.query('SELECT * FROM denuncias WHERE id_denuncia=?',[id_denuncia],(err, results1)=>
    {
        if(err){
            return res.status(500).json({erro:'Erro ao Buscar denuncia'});
        }
        if(results1.length===0){
            return res.status(404).json({mensagem:'Denuncia não encontrada'});
        }
        res.json(results1[0]);
    }
);
});

app.delete('/denuncias/:id_denuncia',(req, res)=>{
    var {id_denuncia}=req.params;
    var sql='DELETE FROM denuncias WHERE id_denuncia=?';
    db.query(sql,[id_denuncia],(err, result)=>{
        if(err){
            console.error('Erro ao deletar:',err);
            return res.status(500).json({erro:'Erro ao deletar no banco de dados'});
        }
        res.json({mensagem:'Denuncia deletada com sucesso'});
    }
);});
 
app.listen(5000,()=>{
    console.log('Servidor rodando em http://localhost:5000');
})