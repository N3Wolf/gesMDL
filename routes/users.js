const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

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
router.get('/profile', (req, res, next) => {
  //console.log(req.query.user.name);
  User.getUserById(req.query.user.id, (err, user) => {
    if(err) throw err;

    if(!user){
      return res.json({success: false, msg:'Usuário não encontrado'});
    } else {
        res.json({user: user});
    }
  })
});

module.exports = router;
