const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const commande_routes = require('./commande/commande_routes');
const livraison_routes = require('./livraison/livraison_routes.js');
const facturation_routes = require('./facturation/facturation_routes.js');
const reception_routes = require('./reception/reception_routes.js');
const societe_routes = require('./societe/societe_routes.js');

// Middleware pour autoriser les requêtes CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://devasti.ii-servers.net'); // Remplacez par votre domaine frontend
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/test', (req, res) => {
  console.log('test');
  res.send('Bienvenue sur ma nouvelle API!');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/commandes', commande_routes);
app.use('/livraisons', livraison_routes);
app.use('/facturations', facturation_routes);
app.use('/receptions', reception_routes);
app.use('/societes', societe_routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
