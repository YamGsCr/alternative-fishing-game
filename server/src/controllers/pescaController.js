const { sortearPeixe } = require('../services/pescaServices');

exports.executarPesca = (req, res) => {
  const resultado = sortearPeixe();
  res.json(resultado);
};
