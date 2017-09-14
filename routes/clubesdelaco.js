const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Clubedelaco = require('../models/clubedelaco');


// List
router.get('/list', (req, res, next) => {
  //console.log('routes - before /list');
  Clubedelaco.getClubedelacoList({}, (err, clubesdelacoList) => {
    if (err) throw err;
    if (!clubesdelacoList) {
      return res.json({
        success: false,
        msg: 'Tabela vazia'
      });
    } else {
      return res.json({
        clubesdelacoList: clubesdelacoList
      });
    }
  })
});

// View
router.get('/view', (req, res, next) => {
  //console.log('req.params.idClubedelaco');
  //console.log(req.query.idClubedelaco);
  Clubedelaco.getClubedelacoById(req.query.idClubedelaco, (err, clubedelaco) => {
    if (!clubedelaco) {
      return res.json({
        success: false,
        msg: 'Erro ao buscar o Clube de laço desejado. Entre em contato com o suporte técnico do sistema.'
      });
    } else {
      res.json({
        clubedelaco: clubedelaco
      });
    }
  })
});

// Edit
router.post('/update', (req, res, next) => {
  Clubedelaco.updateById(req.body, (err, callback) => {
    if (err) {
      res.json({
        success: false,
        msg: "Erro ao atualizar o registro do Clube de laço:",
        erro: err
      });
    } else {
      res.json({
        success: true,
        msg: "Clube de laço atualizado com sucesso."
      });
    }
  });
});

// Delete
router.post('/remove', (req, res, next) => {
  Clubedelaco.removeClubedelaco(req.body.idClubedelaco, (err, callback) => {
    if (err) {
      res.json({
        success: false,
        msg: "Erro ao remover o registro do Clube de laço."
      });
    } else {
      res.json({
        success: true,
        msg: "Clube de laço removido do sistema com sucesso."
      });
    }
  });
});


//Register
router.post('/add', (req, res, next) => {
  let newClubedelaco = new Clubedelaco({
    name: req.body.name,
    sede: req.body.sede,
    email: req.body.email,
    status: req.body.status
  })

  //valida unique keys: CNPJ
  //  Clubedelaco.getClubedelacoByCNPJ(newClubedelaco, (err, federacaoEncontrada) => {
  //    if(err) throw err;
  //    if(!federacaoEncontrada){
  //      return res.json({success: false,msg: 'Já existe uma Federaçao com este CNPJ: '})
  //    }
  //   //  else {
  Clubedelaco.addClubedelaco(newClubedelaco, (err, clubedelaco) => {
    if (err) {
      res.json({
        success: false,
        msg: "Erro ao registrar o Clube de laço."
      });
    } else {
      res.json({
        success: true,
        msg: "Clube de laço registrado com sucesso.",
        id: clubedelaco._id
      });
    }
  });

});
module.exports = router;
