const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // function callback(error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     console.log(body.owner.login + " : Owner");
  //     console.log(body.name + " repo name");
  //     callback(null, body);
  //   }
  // }

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (error, response, body) => {
    // console.log("vicky is cool");
    if (error) {
      callback(error, null);
    } 
    // console.log("vicky is super cool lkajsdlkjasd", response.statusCode, response.body);
    if (response.statusCode == 200) {
      // console.log("vicky is super super cool")
      callback(null, body);
    }
    
  });

}

module.exports = getReposByUsername;