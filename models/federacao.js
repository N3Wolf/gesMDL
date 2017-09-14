const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Federacao Schema
const FederacaoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  razaosocial: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
});

const Federacao = module.exports = mongoose.model('Federacao', FederacaoSchema);

// Get
module.exports.getFederacaoList = function(all,callback){
  Federacao.find(all, callback);
}

module.exports.getFederacaoById = function(id, callback){
  const query = {_id: id}
  Federacao.findOne(query, callback);
}

module.exports.getFederacaoByName = function(name, callback){
  const query = {name: name}
  Federacao.findOne(query, callback);
}

module.exports.getFederacaoByCNPJ = function(cnpj, callback){
  const query = {cnpj: cnpj}
  Federacao.findOne(query, callback);
}

module.exports.getFederacaoByEmail = function(email, callback){
  const query = {email: email}
  Federacao.findOne(query, callback);
}

// Add
module.exports.addFederacao = function(newFederacao, callback){
      newFederacao.save(callback);
  };

//remove

module.exports.removeFederacao = function(idFederacao,callback){
  const query = {_id: idFederacao}
  Federacao.remove(query, callback);
}

//update
module.exports.updateById = function(federacao,callback){
  const query = {_id: federacao._id};
  const sets = {
    $set : {
      "name": federacao.name,
      "email": federacao.email,
      "razaosocial": federacao.razaosocial,
      "cnpj": federacao.cnpj,
      "status": federacao.status
    }
  };
  Federacao.updateOne(query, sets, callback);
}
