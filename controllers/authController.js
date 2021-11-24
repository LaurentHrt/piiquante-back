const bcrypt = require('bcrypt');
const User = require('../database/models/User');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
  console.log(req.body);
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: 'User créé !' }))
        .catch((error) => res.status(500).json({ error }));
    })

    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: 'Utilisateur inconnu !' });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((isValid) => {
          if (!isValid) {
            res.status(401).json({ message: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, 'RANDOM_TOKEN_SECRET', {
              expiresIn: '24h',
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
