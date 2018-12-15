const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let getReposByUsername = require('./../helpers/github.js');
let db = require('./../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/repos', function (req, res) {
  console.log(req.body.term);
  // TODO - your code here!


  getReposByUsername(req.body.term, function(err, data) {
    if (err) {
      throw (err);
    }
    console.log(data);
    // res.send(data);
    db.save(null, data);
  })
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

