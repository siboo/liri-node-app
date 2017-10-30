

var keys = require("./keys.js");
var twitter = require("twitter");
var Spotify = require('node-spotify-api');
var request = require("request");
var inquirer = require("inquirer");




function myTweets(){

  let client = new twitter({
          consumer_key: keys.consumer_key,
          consumer_secret: keys.consumer_secret,
          access_token_key: keys.access_token_key,
          access_token_secret: keys.access_token_secret
      });


  var params = {screen_name: 'sabaz'} && {count: 20};
 
  client.get('statuses/user_timeline', params, function(error, tweets, response) {

      if (!error) {

      }
      
  });

}