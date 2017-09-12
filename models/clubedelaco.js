const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// clubesdelaco Schema
// const FederacaoSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   razaosocial: {
//     type: String,
//     required: true
//   },
//   cnpj: {
//     type: String,
//     required: true
//   },
//   status: {
//     type: Boolean,
//     required: true
//   }
// });
//
// const Federacao = module.exports = mongoose.model('Federacao', FederacaoSchema);
// 
// // Get
// module.exports.getFederacaoById = function(id, callback){
//   Federacao.findById(id, callback);
// }
//
// module.exports.getFederacaoByUsername = function(name, callback){
//   const query = {name: name}
//   User.findOne(query, callback);
// }
//
// module.exports.getFederacaoByCNPJ = function(name, callback){
//   const query = {cnpj: cnpj}
//   User.findOne(query, callback);
// }
//
// module.exports.getFederacaoByEmail = function(name, callback){
//   const query = {email: email}
//   User.findOne(query, callback);
// }
//
// // Add
// module.exports.addFederacao = function(newFederacao, callback){
//       newUser.save(callback);
//   });
// }
