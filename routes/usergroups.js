const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Usergroup = require('../models/usergroup');


// List
router.get('/list', (req, res, next) => {
  Usergroup.getUsergroupList({}, (err, usergroupList) => {
    if (err) throw err;
    if (!usergroupList) {
      return res.json({
        success: false,
        msg: 'Tabela vazia'
      });
    } else {
      return res.json({ usergroupList: usergroupList });
    }
  })
});



// View
router.get('/view', (req, res, next) => {
  //console.log('req.params.idUsergroup');
  //console.log(req.query.idUsergroup);
  Usergroup.getUsergroupById(req.query.idUsergroup, (err, usergroup) => {
    if (!usergroup) {
      return res.json({
        success: false,
        msg: 'Erro ao buscar o registro do Grupo de Usuários desejado. Entre em contato com o suporte técnico do sistema.'
      });
    } else {
      //console.log('Usergroup(routes)');
      //console.log(usergroup);
      res.json({
        usergroup: usergroup
      });
    }
  })
});

// Edit
router.post('/update', (req, res, next) => {
   console.log('chegou aqui');
   console.log('req.body');
   console.log(req.body);
  Usergroup.updateById(req.body, (err, callback) => {

    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Erro ao atualizar o registro do Grupo de Usuários",
        erro: err
      });
    } else {
      res.json({
        success: true,
        msg: "Grupo de Usuários atualizado com sucesso."
      });
    }
  });
});


// Delete
router.post('/remove', (req, res, next) => {
  Usergroup.removeUsergroup(req.body.idUsergroup, (err, callback) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Erro ao remover o registro do Grupo de Usuários."
      });
    } else {
      res.json({
        success: true,
        msg: "Grupo de Usuários removido do sistema com sucesso."
      });
    }
  });
});


//Register
router.post('/add', (req, res, next) => {
  //TODO: remover a RN de nomenclatura dos campos, fazendo simplesmente let newUsergroup = req.body.usergroup
  let newUsergroup = new Usergroup({
    name: req.body.name,
    situacao: req.body.situacao
  })

  Usergroup.addUsergroup(newUsergroup, (err, usergroup) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Erro ao adicionar o registro de novo Grupo de Usuários."
      });
    } else {
      res.json({
        success: true,
        msg: "Grupo de Usuários adicionado com sucesso.",
        id: usergroup._id
      });
    }
  });

});
module.exports = router;
