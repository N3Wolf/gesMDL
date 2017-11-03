const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Clubedelaco Schema
const ClubedelacoSchema = mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true },
  sede: { type: String, required: true },
  status: { type: Boolean, required: true },
  razaoSocial: { type: String, required: true },
  cnpj: { type: String, required: true },
  sigla: { type: String },
  dataFundacao: { type: String },
  registroSETEL: { type: String },
  rua: { type: String },
  numeroSala: { type: String },
  bairro: { type: String },
  cep: { type: String },
  cidade: { type: String },
  foneDDD: { type: String },
  fone: { type: String },
  faxDDD: { type: String },
  fax: { type: String },
  nomeRepresentante: { type: String },
  cpfRepresentante: { type: String },
  rgRepresentante: { type: String },
  cargoRepresentante: { type: String },
  foneDDDRepresentante: { type: String },
  foneRepresentante: { type: String },
  atuacao: { type: String }
});

const Clubedelaco = module.exports = mongoose.model('Clubedelaco', ClubedelacoSchema);

// Get
module.exports.getClubedelacoList = function(all,callback){
  Clubedelaco.find(all, callback);
}

module.exports.getClubedelacoById = function(id, callback){
  const query = {_id: id}
  Clubedelaco.findOne(query, callback);
  console.log('getClubedelacoById');
  console.log(callback);
  console.log(query);
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
      console.log('addClubedelaco');
      newClubedelaco.save(callback);
      console.log(callback);
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
      "status": clubedelaco.status,
      "razaoSocial": clubedelaco.razaoSocial,
      "cnpj": clubedelaco.cnpj,
      "sigla" : clubedelaco.sigla,
      "dataFundacao" : clubedelaco.dataFundacao,
      "registroSETEL": clubedelaco.registroSETEL,
      "rua": clubedelaco.rua,
      "numeroSala": clubedelaco.numeroSala,
      "bairro": clubedelaco.bairro,
      "cep": clubedelaco.cep,
      "cidade": clubedelaco.cidade,
      "foneDDD": clubedelaco.foneDDD,
      "fone": clubedelaco.fone,
      "faxDDD": clubedelaco.faxDDD,
      "fax": clubedelaco.fax,
      "nomeRepresentante": clubedelaco.nomeRepresentante,
      "cpfRepresentante": clubedelaco.cpfRepresentante,
      "rgRepresentante": clubedelaco.rgRepresentante,
      "cargoRepresentante": clubedelaco.cargoRepresentante,
      "foneDDDRepresentante": clubedelaco.foneDDDRepresentante,
      "foneRepresentante": clubedelaco.foneRepresentante,
      "atuacao": clubedelaco.atuacao
    }
  };
  console.log("sets");
  console.log(sets);
  Clubedelaco.updateOne(query, sets, callback);
  console.log(callback);
}
