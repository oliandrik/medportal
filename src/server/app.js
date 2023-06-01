const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({ origin: 'http://localhost:4200' }));
const testListPath = './database/test-list.json'
const passTest_1Path = './database/test_1.json'
const passTest_2Path = './database/test_2.json'

app.get('/', (req, res) => {

  res.json('There should be some kind of API documentation... ')
});

app.get('/api/test/test_1', (req, res) => {
  fs.readFile(passTest_1Path, 'utf8', (err, data) => {
    if (err) {
      console.error('Reading file error... ', err);
      return res.status(500).send('Server error...');
    }

    res.json(JSON.parse(data));
  });
});

app.get('/api/test/test_2', (req, res) => {
  fs.readFile(passTest_2Path, 'utf8', (err, data) => {
    if (err) {
      console.error('Reading file error... ', err);
      return res.status(500).send('Server error...');
    }

    res.json(JSON.parse(data));
  });
});

app.get('/api/data', (req, res) => {
  fs.readFile(testListPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Reading file error... ', err);
      return res.status(500).send('Server error...');
    }

    res.json(JSON.parse(data));
  });
});


app.post('/api/data', (req, res) => {
  const newData = req.body;
  console.log(req.body)
  fs.readFile(testListPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Reading file error... ', err);
      return res.status(500).send('Server error...');
    }

    const existingData = JSON.parse(data);
    existingData.push(newData);

    fs.writeFile(testListPath, JSON.stringify(existingData), (err) => {
      if (err) {
        console.error('Writing file error... ', err);
        return res.status(500).send('Server error...');
      }

      res.json(newData);
    });
  });
});

app.put('/api/data', (req, res) => {
  const newData = req.body;

  fs.writeFile(testListPath, JSON.stringify(newData), (err) => {
    if (err) {
      console.error('Writing file error... ', err);
      return res.status(500).send('Server error...');
    }

    res.sendStatus(200);
  });
})


app.listen(5000, () => {
  console.log("Done... running on the port:" + 5000)

});
