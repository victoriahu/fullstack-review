const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let getReposByUsername = require('./../helpers/github.js');
let db = require('./../database/index.js');


app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/repos', function (req, res) {
  // console.log(req.body.data.owner);
  // TODO - your code here!


  getReposByUsername(req.body.data.owner, function(err, data) {
    // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&", req.body);
    if (err) {
      throw (err);
    }
    // console.log(data);
    // res.send(data);
    db.save(null, data);
    res.send(data);
  })
  
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log("GET REQUEST ALKSDJALKSDJS: ", req.body);
    // Kitten.find({ name: /^fluff/ }, callback);

  db.getRepos((err, data) => {
    if (err) {
      // console.log('getRepos is erroring in server');
      throw (err);
    }
    console.log("this is our datalkasjdlaksdjlasdjaklsdasd", data);
    res.send(data);
  })
  // db.repos.find((err, data) => {
  //   if (err) {
  //     console.log("ERRORRORORORO GET SERVER");
  //     throw (err);
  //   }
  //   res.send(data);
  // })

  //what form does the find have? bunch of objects
  // res.send(all);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

