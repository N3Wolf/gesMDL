const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Federacao = require('../models/federacao');


// List
router.get('/list', (req, res, next) => {
  //console.log('routes - before /list');
  Federacao.getFederacaoList({}, (err, federacoesList) => {
    if (err) throw err;
    if (!federacoesList) {
      return res.json({
        success: false,
        msg: 'Tabela vazia'
      });
    } else {
      return res.json({
        federacoesList: federacoesList
      });
    }
  })
});

// View
router.get('/view', (req, res, next) => {
  //console.log('req.params.idFederacao');
  //console.log(req.query.idFederacao);
  Federacao.getFederacaoById(req.query.idFederacao, (err, federacao) => {
    if (!federacao) {
      return res.json({
        success: false,
        msg: 'Erro ao buscar a federação desejada. Entre em contato com o suporte técnico do sistema.'
      });
    } else {
      res.json({
        federacao: federacao
      });
    }
  })
});

// Edit
router.post('/update', (req, res, next) => {
  console.log(4);
  console.log(req.body);
  Federacao.updateById(req.body, (err, callback) => {
    // console.log(err);
    // console.log('err');
    if (err) {
      res.json({
        success: false,
        msg: "Erro ao atualizar o registro da Federação:",
        erro: err
      });
    } else {
      res.json({
        success: true,
        msg: "Federação atualizada com sucesso."
      });
    }
  });
});

// Delete
router.post('/remove', (req, res, next) => {
  console.log(4);
  Federacao.removeFederacao(req.body.idFederacao, (err, callback) => {
    if (err) {
      res.json({
        success: false,
        msg: "Erro ao remover o registro da Federação."
      });
    } else {
      res.json({
        success: true,
        msg: "Federação removida do sistema com sucesso."
      });
    }
  });
});


//Register
router.post('/add', (req, res, next) => {
  let newFederacao = new Federacao({
    name: req.body.name,
    razaosocial: req.body.razaosocial,
    cnpj: req.body.cnpj,
    status: req.body.status,
    email: req.body.email,
  })

  //valida unique keys: CNPJ
  //  Federacao.getFederacaoByCNPJ(newFederacao, (err, federacaoEncontrada) => {
  //    if(err) throw err;
  //    if(!federacaoEncontrada){
  //      return res.json({success: false,msg: 'Já existe uma Federaçao com este CNPJ: '})
  //    }
  //   //  else {
  Federacao.addFederacao(newFederacao, (err, federacao) => {
    if (err) {
      res.json({
        success: false,
        msg: "Erro ao registrar a Federação."
      });
    } else {
      res.json({
        success: true,
        msg: "Federação registrada com sucesso.",
        id: federacao._id
      });
    }
  });

});
module.exports = router;
