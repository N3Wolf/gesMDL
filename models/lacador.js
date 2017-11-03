const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const LacadorSchema = mongoose.Schema({
  name: { type: String,  required: true },
  cpf: { type: String, required: true },
  email: { type: String, required: true },
  endereco: { type: String, required: true },
  status: { type: Boolean, required: true },
  picture: {  type: Buffer, contentType: String},
  idClube: { type: String },
  flgIndepentente: { type: Boolean },
  apelido: { type: String },
  foneDDD1: { type: String },
  fone1: { type: String },
  foneDDD2: { type: String },
  fone2: { type: String },
  dataAssociacao: { type: Date }


  //http://localhost:4200/clubesdelacoView;id=59b8d3ccc45a52357ca1cf99;isEdit=true;isDetail=true;idClube=59b8d3ccc45a52357ca1cf99
});

const Lacador = module.exports = mongoose.model('Lacador', LacadorSchema);

// Get
module.exports.getLacadorList = function(all, callback) {
  Lacador.find(all, callback);
}

module.exports.getLacadorListByClubeId = function(idClube, callback) {
  const query = {idClube: idClube }
  Lacador.find(query, callback);
}

module.exports.getLacadorById = function(id, callback) {
  const query = {
    _id: id
  }
  Lacador.findOne(query, callback);
  console.log('callback');
  console.log(callback);
}

module.exports.getLacadorByName = function(name, callback) {
  const query = {
    name: name
  }
  Lacador.findOne(query, callback);
}

module.exports.getLacadorByCpf = function(cpf, callback) {
  const query = {
    cpf: cpf
  }
  Lacador.findOne(query, callback);
}

module.exports.getLacadorByEmail = function(email, callback) {
  const query = {
    email: email
  }
  Lacador.findOne(query, callback);
}

// Add
module.exports.addLacador = function(newLacador, callback) {
  newLacador.save(callback);
};

//remove

module.exports.removeLacador = function(idLacador, callback) {
  const query = {
    _id: idLacador
  }
  Lacador.remove(query, callback);
}

//update
module.exports.updateById = function(lacador, callback) {
  const query = {
    _id: lacador._id
  };
  const newSet = {
    $set: {
      "name": lacador.name,
      "email": lacador.email,
      "cpf": lacador.cpf,
      "endereco": lacador.endereco,
      "status": lacador.status,
      "picture": lacador.picture,
      "idClube": lacador.idClube,
      "apelido": lacador.apelido,
      "foneDDD1": lacador.foneDDD1,
      "fone1": lacador.fone1,
      "foneDDD2": lacador.foneDDD2,
      "fone2": lacador.fone2,
      "dataAssociacao": lacador.dataAssociacao
    }
  };

   console.log('lacador');
   console.log(lacador);
   console.log('newSet');
   console.log(newSet);
  Lacador.updateOne(query, newSet, callback);

}

//Torna todos os laçadores de um clube como Indepententes
module.exports.setLacadorIndependenteByClube = function(idClubedelaco, callback) {
  const query = {
    idClube: idClubedelaco
  };
  const newSet = {
    $set: {
      "flgIndepentente": true,
      "idClube": null
    }
  };

  //  console.log('lacador');
  //  console.log(lacador);
  //  console.log('newSet');
  //  console.log(newSet);
  if(idClubedelaco){
    Lacador.update(query, newSet, callback);
  }
}


//Torna um laçador Indepentente
module.exports.setLacadorIndependenteById = function(idLacador, callback) {
  const query = {
    _id: idLacador
  };
  const newSet = {
    $set: {
      "flgIndepentente": true,
      "idClube": null
    }
  };

  //  console.log('lacador');
  //  console.log(lacador);
  //  console.log('newSet');
  //  console.log(newSet);
  if(idClubedelaco){
    Lacador.update(query, newSet, callback);
  }
}
