const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  owner: String,
  repo_id: {type: Number, index: {unique: true}},
  repo_name: String,
  html_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, product) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  if (err) {
    throw (err);
  }
  product = JSON.parse(product);
  console.log("we here and i like apple pie ===========================================================");
  console.log(typeof product, product[0].owner.login, product[0].id, product[0].name, product[0].html_url);
  for (var i = 0; i < product.length; i++) {

    var awesome_instance = new Repo({
        owner: product[i].owner.login,
        repo_id: product[i].id,
        repo_name: product[i].name, 
        html_url: product[i].html_url
      });

    console.log(awesome_instance);
    // db.collection("repos").findOneAndUpdate({ "repo_id" : awesome_instance.repo_id }, {awesome_instance});
    awesome_instance.save(function(err) {
      if (err) return "(err)";
    });
    // repoSchema[product[i].repo_id] = ({
    //   owner: product[i].owner.login,
    //   repo_id: product[i].id,
    //   repo_name: product[i].name, 
    //   html_url: product[i].html_url
    // })
  };
  console.log("success");
  
}

module.exports.save = save;