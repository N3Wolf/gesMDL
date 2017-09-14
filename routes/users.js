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

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg:'Usuário não encontrado'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
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
            email: user.email
          }
        });
      } else {
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
