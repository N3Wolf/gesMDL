const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: String },
  picture: { type: String },
  cpf: { type: String },
  foneDDD1: { type: String },
  fone1: {type: String },
  dataCadastro: {type: Date}
});

const User = module.exports = mongoose.model('User', UserSchema);


// Get
module.exports.getUserList = function(all, callback) {
  User.find(all, callback);
}


module.exports.getUserById = function(id, callback){
  const query = {_id: id}
  User.findOne(query, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}









//update
module.exports.updateById = function(targetUser, callback) {
  const query = {
    _id: user._id
  };
  const newSet = {
    $set: {
      "name": targetUser.name,
      "email": targetUser.email,
      "username": targetUser.username,
      "password": targetUser.password,
      "status": targetUser.status,
      "picture": targetUser.picture,
      "cpf": targetUser.cpf,
      "foneDDD1": targetUser.foneDDD1,
      "fone1": targetUser.fone1,
      "dataCadastro": targetUser.dataCadastro
    }
  };

   console.log('targetUser');
   console.log(targetUser);
   console.log('newSet');
   console.log(newSet);
  User.updateOne(query, newSet, callback);

}


//remove
module.exports.removeUser = function(idUser, callback) {
  const query = {
    _id: idUser
  }
  User.remove(query, callback);
}
