const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Federacao = require('../models/federacao');


// List


  router.get('/list', (req, res, next) => {
    console.log('routes - before /list');
    Federacao.getFederacaoList({}, (err, federacoesList) => {
      if(err) throw err;
      if(!federacoesList){
        return res.json({success: false, msg:'Tabela vazia'});
      } else {
        return res.json({federacoesList: federacoesList});
      }
    })
  });

  //         res.json({ federacoesList: req.federacoesList});
  //   }
  // })

// View
  router.get('/view', (req, res, next) => {
   Federacao.getFederacaoById(req.federacao.id, (federacao) => {
     res.json({ federacao: req.federacao});
   })
 });

// Edit
// router.post('/edit', {
//   session: false
// }), (req, res, next) => {
//   res.json({
//     federacao: req.federacao
//   });
// });

// Delete
// router.get('/delete', (req, res, next) => {
//   res.json({
//     federacao: req.federacao
//   });
// });


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
          if(err){
            res.json({ success: false, msg: "Erro ao registrar a Federação."});
          } else {
            res.json({ success: true,msg: "Federação registrada com sucesso.", id: federacao._id});
          }
       });

});
    module.exports = router;
