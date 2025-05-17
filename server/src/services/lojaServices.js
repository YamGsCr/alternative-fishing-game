const fs = require('fs');
const path = require('path');

function MostrarItens(jsonPathRelativo) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '..', jsonPathRelativo);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject('Erro ao ler JSON da loja: ' + err);

      try {
        const json = JSON.parse(data);
        resolve(json);
      } catch (e) {
        reject('Erro ao parsear JSON da loja: ' + e);
      }
    });
  });
}

module.exports = { MostrarItens };
