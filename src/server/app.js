const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({ origin: 'http://localhost:4200' }));
const dataPath = './database/test-list.json'

app.get('/', (req, res) => {
  res.json('There should be some kind of API documentation... ')
});
app.get('/api/data', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Помилка при читанні файлу:', err);
      return res.status(500).send('Помилка сервера');
    }

    res.json(JSON.parse(data));
  });
});


app.post('/api/data', (req, res) => {
  const newData = req.body;
  console.log(req.body)
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Помилка при читанні файлу:', err);
      return res.status(500).send('Помилка сервера');
    }

    const existingData = JSON.parse(data);
    existingData.push(newData);

    fs.writeFile(dataPath, JSON.stringify(existingData), (err) => {
      if (err) {
        console.error('Помилка при записі файлу:', err);
        return res.status(500).send('Помилка сервера');
      }

      res.json(newData);
    });
  });
});

app.put('/api/data', (req, res) => {
  const newData = req.body;

  fs.writeFile(dataPath, JSON.stringify(newData), (err) => {
    if (err) {
      console.error('Помилка при записі файлу:', err);
      return res.status(500).send('Помилка сервера');
    }

    res.sendStatus(200);
  });
})


app.listen(5000, () => {
  console.log("Done... running on the port:" + 5000)

});
