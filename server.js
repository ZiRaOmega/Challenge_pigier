const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, './html/index.html'); // Chemin du fichier HTML
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      res.status(500).send('Erreur interne du serveur');
    }

    res.send(html); // Envoi du contenu HTML au client
  });
});

app.listen(3000, () => {
  console.log('Serveur en écoute sur le port http://localhost:3000/');
});
