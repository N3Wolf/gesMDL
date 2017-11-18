const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Page = require('../models/page');


// List
router.get('/list', (req, res, next) => {
  Page.getPageList({}, (err, pageList) => {
    if (err) throw err;
    if (!pageList) {
      return res.json({
        success: false,
        msg: 'Tabela vazia'
      });
    } else {
      return res.json({ pageList: pageList });
    }
  })
});


router.get('/listByUserGroupId', (req, res, next) => {
  Page.getPageByUserGroupId(req.query.idUserGroup, (err, pageList) => {
    if (err) throw err;
    if (!pageList) {
      return res.json({
        success: false,
        msg: 'Tabela vazia'
      });
    } else {
      // console.log('pageList');
      // console.log(pageList);
      return res.json({ pageList });
    }
  })
});

// View
router.get('/view', (req, res, next) => {
  //console.log('req.params.idPage');
  //console.log(req.query.idPage);
  Page.getPageById(req.query.idPage, (err, page) => {
    if (!page) {
      return res.json({
        success: false,
        msg: 'Erro ao buscar o registro da Página desejada. Entre em contato com o suporte técnico do sistema.'
      });
    } else {
      //console.log('Page(routes)');
      //console.log(page);
      res.json({
        page: page
      });
    }
  })
});

// Edit
router.post('/update', (req, res, next) => {
   console.log('chegou aqui');
   console.log('req.body');
   console.log(req.body);
  Page.updateById(req.body, (err, callback) => {

    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Erro ao atualizar o registro da Página:",
        erro: err
      });
    } else {
      res.json({
        success: true,
        msg: "Página atualizada com sucesso."
      });
    }
  });
});


// Delete
router.post('/remove', (req, res, next) => {
  Page.removePage(req.body.idPage, (err, callback) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Erro ao remover o registro da Página."
      });
    } else {
      res.json({
        success: true,
        msg: "Página removida do sistema com sucesso."
      });
    }
  });
});


//Register
router.post('/add', (req, res, next) => {
  let newPage = new Page({
    url: req.body.url,
    title: req.body.title,
    security: req.body.security ? true : null
  })

  Page.addPage(newPage, (err, page) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Erro ao adicionar o registro de nova Página."
      });
    } else {
      res.json({
        success: true,
        msg: "Página adicionada com sucesso.",
        id: page._id
      });
    }
  });

});
module.exports = router;
