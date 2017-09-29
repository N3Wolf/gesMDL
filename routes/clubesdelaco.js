const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Clubedelaco = require('../models/clubedelaco');
const Lacador = require('../models/lacador');


// List
router.get('/list', (req, res, next) => {
  //console.log('routes - before /list');
  Clubedelaco.getClubedelacoList({}, (err, clubedelacoList) => {
    if (err) throw err;
    if (!clubedelacoList) {
      return res.json({
        success: false,
        msg: 'Tabela vazia'
      });
    } else {
      return res.json({
        clubedelacoList: clubedelacoList
      });
    }
  })
});

// View
router.get('/view', (req, res, next) => {
  console.log('req.params.id');
  console.log(req.query.id);
  Clubedelaco.getClubedelacoById(req.query.id, (err, clubedelaco) => {
    //console.log('retorno model clubedelaco');
    //console.log(clubedelaco);
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
      console.log('router.post com sucesso');
      res.json({
        success: true,
        msg: "Clube de laço atualizado com sucesso."
      });
    }
  });
});

// Delete
router.post('/remove', (req, res, next) => {
  //Remove os vínculos entre laçadores e este clube
  Lacador.setLacadorIndependenteByClube(req.body.idClubedelaco, (err, callback) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Erro ao remover o vinculo entre Clube de laco e seus Laçadores",
        erro: err
      });

    } else {
    //remove o clube do sistema
      Clubedelaco.removeClubedelaco(req.body.idClubedelaco, (err, callback) => {
        if (err) {
          console.log(err);
          res.json({
            success: false,
            msg: "Erro ao remover o registro do Clube de laço."
          });
        } else {
          res.json({
            success: true,
            msg: "Clube de laço removido do sistema com sucesso. Atenção: Quaisquer Laçadores presentes no clube se tornaram do tipo Independente."
          });
        }
      })
    }
  })
})

//Register
router.post('/add', (req, res, next) => {
  let newClubedelaco = new Clubedelaco({
    name: req.body.name,
    email: req.body.email,
    sede: req.body.sede,
    status: req.body.status,
    razaoSocial: req.body.razaoSocial,
    cnpj: req.body.cnpj,
    sigla : req.body.sigla,
    dataFundacao : req.body.dataFundacao,
    registroSETEL: req.body.registroSETEL,
    rua: req.body.rua,
    numeroSala: req.body.numeroSala,
    bairro: req.body.bairro,
    cep: req.body.cep,
    cidade: req.body.cidade,
    foneDDD: req.body.foneDDD,
    fone: req.body.fone,
    faxDDD: req.body.faxDDD,
    fax: req.body.fax,
    nomeRepresentante: req.body.nomeRepresentante,
    cpfRepresentante: req.body.cpfRepresentante,
    rgRepresentante: req.body.rgRepresentante,
    cargoRepresentante: req.body.cargoRepresentante,
    foneDDDRepresentante: req.body.foneDDDRepresentante,
    foneRepresentante: req.body.foneRepresentante,
    atuacao: req.body.atuacao
  })

  console.log('chegou no add');
  console.log(req.body);

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
