const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  owner: String,
  repo_id: Number, 
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
  repoSchema[product.repo_id] = ({
    owner: product.owner.login,
    repo_id: product.id,
    repo_name: product.name, 
    html_url: product.html_url
  })
}

module.exports.save = save;