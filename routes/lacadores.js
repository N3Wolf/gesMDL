const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Lacador = require('../models/lacador');


// List
router.get('/list', (req, res, next) => {
  Lacador.getLacadorList({}, (err, lacadorList) => {
    if (err) throw err;
    if (!lacadorList) {
      return res.json({
        success: false,
        msg: 'Tabela vazia'
      });
    } else {
      return res.json({ lacadorList: lacadorList });
    }
  })
});

// List by Clube id
router.get('/listByClubeId', (req, res, next) => {
  Lacador.getLacadorListByClubeId(req.query.idClube, (err, lacadorList) => {
    if (err) throw err;
    if (!lacadorList) {
      return res.json({
        success: false,
        msg: 'Tabela vazia'
      });
    } else {
      return res.json({ lacadorList });
    }
  })
});

// View
router.get('/view', (req, res, next) => {
  //console.log('req.params.idLacador');
  //console.log(req.query.idLacador);
  Lacador.getLacadorById(req.query.idLacador, (err, lacador) => {
    if (!lacador) {
      return res.json({
        success: false,
        msg: 'Erro ao buscar o Laçador de laço desejado. Entre em contato com o suporte técnico do sistema.'
      });
    } else {
      res.json({
        lacador: lacador
      });
    }
  })
});

// Edit
router.post('/update', (req, res, next) => {
  Lacador.updateById(req.body, (err, callback) => {
    if (err) {
      res.json({
        success: false,
        msg: "Erro ao atualizar o registro do Laçador:",
        erro: err
      });
    } else {
      res.json({
        success: true,
        msg: "Laçador atualizado com sucesso."
      });
    }
  });
});

// Delete
router.post('/remove', (req, res, next) => {
  Lacador.removeLacador(req.body.idLacador, (err, callback) => {
    if (err) {
      res.json({
        success: false,
        msg: "Erro ao remover o registro do Laçador de laço."
      });
    } else {
      res.json({
        success: true,
        msg: "Laçador de laço removido do sistema com sucesso."
      });
    }
  });
});


//Register
router.post('/add', (req, res, next) => {
  let newLacador = new Lacador({
    name: req.body.name,
    cpf: req.body.cpf,
    endereco: req.body.endereco,
    email: req.body.email,
    status: req.body.status
  })

  //valida unique keys: CNPJ
  //  Lacador.getLacadorByCNPJ(newLacador, (err, federacaoEncontrada) => {
  //    if(err) throw err;
  //    if(!federacaoEncontrada){
  //      return res.json({success: false,msg: 'Já existe uma Federaçao com este CNPJ: '})
  //    }
  //   //  else {
  Lacador.addLacador(newLacador, (err, lacador) => {
    if (err) {
      res.json({
        success: false,
        msg: "Erro ao registrar o Laçador."
      });
    } else {
      res.json({
        success: true,
        msg: "Laçador registrado com sucesso.",
        id: lacador._id
      });
    }
  });

});
module.exports = router;
