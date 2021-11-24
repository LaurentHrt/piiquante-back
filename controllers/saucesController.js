const User = require('../database/models/Sauce');

exports.getAllSauces = (req, res, next) => {
  res.send('get sauces');
};
exports.getSauceById = (req, res, next) => {
  res.send('get sauce id');
};
exports.createSauce = (req, res, next) => {
  res.send('post sauces');
};
exports.modifySauce = (req, res, next) => {
  res.send('put sauce id');
};
exports.deleteSauce = (req, res, next) => {
  res.send('delete sauce id');
};
exports.likeSauce = (req, res, next) => {
  res.send('post sauce id like');
};
