const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Clubedelaco Schema
const ClubedelacoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  sede: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
});

const Clubedelaco = module.exports = mongoose.model('Clubedelaco', ClubedelacoSchema);

// Get
module.exports.getClubedelacoList = function(all,callback){
  Clubedelaco.find(all, callback);
}

module.exports.getClubedelacoById = function(id, callback){
  const query = {_id: id}
  Clubedelaco.findOne(query, callback);
}

module.exports.getClubedelacoByName = function(name, callback){
  const query = {name: name}
  Clubedelaco.findOne(query, callback);
}

module.exports.getClubedelacoByCNPJ = function(cnpj, callback){
  const query = {cnpj: cnpj}
  Clubedelaco.findOne(query, callback);
}

module.exports.getClubedelacoByEmail = function(email, callback){
  const query = {email: email}
  Clubedelaco.findOne(query, callback);
}

// Add
module.exports.addClubedelaco = function(newClubedelaco, callback){
      newClubedelaco.save(callback);
  };

//remove

module.exports.removeClubedelaco = function(idClubedelaco,callback){
  //console.log(6);
  const query = {_id: idClubedelaco}
  Clubedelaco.remove(query, callback);
}

//update
module.exports.updateById = function(clubedelaco,callback){
  const query = {_id: clubedelaco._id};
  const sets = {
    $set : {
      "name": clubedelaco.name,
      "email": clubedelaco.email,
      "sede": clubedelaco.sede,
      "status": clubedelaco.status
    }
  };
  console.log(sets);
  Clubedelaco.updateOne(query, sets, callback);
  console.log(callback);
}
