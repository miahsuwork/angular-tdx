const rsaModel = require("../models/rsa");

const rsaController = {
  getKeys: (req, res) => {
    rsaModel.getKeys((error, keys) => {
      res.json({
        keys,
      });
    });
  },

  getPublicKey: (req, res) => {
    rsaModel.getPublicKey((error, publicKey) => {
      res.json({
        publicKey,
      });
    });
  },

  privateDecrypt: (req, res) => {
    rsaModel.privateDecrypt(req.body, (error, results) => {
      res.json({
        data: results,
      });
    });
  },
};

module.exports = rsaController;
