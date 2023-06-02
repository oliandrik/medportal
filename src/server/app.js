const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: 'http://localhost:4200'}));
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

app.put('/api/data/:id', (req, res) => {
  const idToUpdate = req.params.id;
  const updatedData = req.body;

  fs.readFile(testListPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Reading file error...', err);
      return res.status(500).send('Server error...');
    }

    const existingData = JSON.parse(data);
    const updatedItemIndex = existingData.findIndex(item => +item.id === +idToUpdate);

    if (updatedItemIndex === -1) {
      console.error('Object not found...');
      return res.status(404).send('Object not found...');
    }

    const updatedItem = { ...existingData[updatedItemIndex], ...updatedData };
    existingData[updatedItemIndex] = updatedItem;

    fs.writeFile(testListPath, JSON.stringify(existingData), (err) => {
      if (err) {
        console.error('Writing file error...:', err);
        return res.status(500).send('Server error');
      }

      res.json(updatedItem);
    });
  });
});


app.delete('/api/data/:id', (req, res) => {
  const idToDelete = req.params.id;
  fs.readFile(testListPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Reading file error... ', err);
      return res.status(500).send('Server error...');
    }

    const existingData = JSON.parse(data);
    const filteredData = existingData.filter(item => +item.id !== +idToDelete);
    fs.writeFile(testListPath, JSON.stringify(filteredData), (err) => {
      if (err) {
        console.error('Writing file error... ', err);
        return res.status(500).send('Server error...');
      }

      res.send('File has been deleted');
    });
  });
});


app.listen(5000, () => {
  console.log("Done... running on the port:" + 5000)

});
