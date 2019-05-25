const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create-router.js')
const MongoClient = require('mongodb').MongoClient;

app.use(cors());
app.use(bodyParser.json());



MongoClient.connect(process.env.MOGODB_URI)
.then((client) => {
  const db = client.db('heroku_4hll2llh');
  const playerCollection = db.collection('players');
  const playerRouter = createRouter(playerCollection);
  app.use('/api/players', playerRouter );
}).catch(console.err);


app.listen(3000, function () {
  console.log(`App running on port ${ this.address().port }`);
});
