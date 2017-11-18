const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const PageSchema = mongoose.Schema
({
  url: { type: String, required: true },
  title: { type: String, required: true },
  security: [{
            userGroup: String,
            permissions : {
                            C: Boolean = false,
                            R: Boolean = false,
                            U: Boolean = false,
                            D: Boolean = false }
        }]
});

const Page = module.exports = mongoose.model('Page', PageSchema);

// Get
module.exports.getPageList = function(all, callback) {
  Page.find(all, callback);
}

module.exports.getPageById = function(id, callback) {
  const query = {
    _id: id
  }
  Page.findOne(query, callback);
  console.log('callback');
  console.log(callback);
}

module.exports.getPageByUrl = function(url, callback) {
  const query = { url: url}
  Page.findOne(query, callback);
}

module.exports.getPageByUserGroupId = function(userGroup, callback) {
  const query = {userGroup: userGroup}
  Page.find(query, callback);
}

// Add
module.exports.addPage = function(newPage, callback) {
  newPage.save(callback);
};

//remove

module.exports.removePage = function(idPage, callback) {
  const query = {
    _id: idPage
  }
  Page.remove(query, callback);
}

//update
module.exports.updateById = function(page, callback) {
  const query = {
    _id: page._id
  };
  const newSet = {
    $set: {
      "url": page.url,
      "title": page.title,
      "security": page.security
    }
  };

   console.log('page');
   console.log(page);
   console.log('newSet');
   console.log(newSet);
  Page.updateOne(query, newSet, callback);

}
