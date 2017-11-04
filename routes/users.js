const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// List
router.get('/list', (req, res, next) => {
  User.getUserList({}, (err, userList) => {
    if (err) throw err;
    if (!userList) {
      return res.json({
        success: false,
        msg: 'A Tabela de usuários está vazia'
      });
    } else {
      return res.json({ userList: userList });
    }
  })
});


// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:"Erro ao registrar o usuário."});
    } else {
      res.json({success: true, msg:"Usuário registrado com sucesso."});
    }
  });
});

// Register
router.post('/add', (req, res, next) => {
  console.log('userReq');
  console.log(req.body);
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    status: req.body.status,
    picture: req.body.picture,
    cpf: req.body.cpf,
    foneDDD1: req.body.foneDDD1,
    fone1: req.body.fone1
    //dataCadastro: req.body.dataCadastro
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:"Erro ao registrar o usuário."});
    } else {
      res.json({success: true, msg:"Usuário registrado com sucesso."});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  //console.log('chegou em /authenticate')
  const username = req.body.username;
  const password = req.body.password;
  console.log('buscando o usuário');
  User.getUserByUsername(username, (err, user) => {
    console.log('buscou o usuário');
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg:'Usuário não encontrado'});
      console.log('não achou o usuário');
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){

        console.log('achou a senha e deu match;');
        const token = jwt.sign({payload: user},config.secret,{
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            token: token
          }
        });
      } else {
        //console.log('achou o usuário, mas a senha não fechou');
        return res.json({success: false, msg: 'A senha digitada está incorreta.'});
      }
    });
  });
});

// Profile
//router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
router.get('/view', (req, res, next) => {
  //console.log(req.query.user.name);
  User.getUserById(req.query.idUser, (err, user) => {
    if(err) throw err;

    if(!user){
      return res.json({success: false, msg:'Usuário não encontrado'});
    } else {
        res.json({user: user});
    }
  })
});

//router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
router.get('/viewByUsername', (req, res, next) => {
  //console.log(req.query.user.name);
  User.getUserByUsername(req.query.user.username, (err, user) => {
    if(err) throw err;

    if(!user){
      return res.json({success: false, msg:'Usuário não encontrado'});
    } else {
        res.json({user: user});
    }
  })
});

// Edit
router.post('/update', (req, res, next) => {
   console.log('chegou aqui');
   console.log('req.body');
   console.log(req.body);
  User.updateById(req.body, (err, callback) => {

    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Erro ao atualizar o registro do Usuário:",
        erro: err
      });
    } else {
      res.json({
        success: true,
        msg: "Usuário atualizado com sucesso."
      });
    }
  });
});

// Delete
router.post('/remove', (req, res, next) => {
  User.removeLacador(req.body.idUser, (err, callback) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Erro ao remover o registro do Usuário."
      });
    } else {
      res.json({
        success: true,
        msg: "Usuário removido do sistema com sucesso."
      });
    }
  });
});



module.exports = router;
