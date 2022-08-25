const express = require('express')
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient

// Connection URL
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

app.get('/', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send('💥 BOOM 💥: ' + err);
    } else {
      res.send('Me conecté a la DB!!! 😎');
      db.close();
    }
  });
});
app.get('/say', (req, res) => {
  res.status(200).send('Hola mundo cruel !💥!')
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))
