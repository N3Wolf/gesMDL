const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UsergroupSchema = mongoose.Schema
({
  name: { type: String, required: true }
  situacao: { type: Boolean, required: true }
});

const Usergroup = module.exports = mongoose.model('Usergroup', UsergroupSchema);

// Get
module.exports.getUsergroupList = function(all, callback) {
  Usergroup.find(all, callback);
}


module.exports.getUsergroupById = function(id, callback) {
  const query = {
    _id: id
  }
  Usergroup.findOne(query, callback);
  console.log('callback');
  console.log(callback);
}

// Add
module.exports.addUsergroup = function(newUsergroup, callback) {
  newUsergroup.save(callback);
};

//remove

module.exports.removeUsergroup = function(idUsergroup, callback) {
  const query = {
    _id: idUsergroup
  }
  Usergroup.remove(query, callback);
}

//update
module.exports.updateById = function(usergroup, callback) {
  const query = {
    _id: usergroup._id
  };
  const newSet = {
    $set: {
      "name": usergroup.name,
      "situacao": usergroup.situacao
    }
  };

   console.log('usergroup');
   console.log(usergroup);
   console.log('newSet');
   console.log(newSet);
  Usergroup.updateOne(query, newSet, callback);

}
