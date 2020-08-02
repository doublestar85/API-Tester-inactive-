// var XMLHttpRequest = require('xhr2');
// var xhr = new XMLHttpRequest();
// ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json'); 
// ourRequest.onLoad = function () {
//     console.log(ourRequest.responseText);
// };
// ourRequest.send(); 
// console.log("heloo");


function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
oReq.send();

// var request = require('request');

// var HOST = "http://xkcd.com/"

// module.exports = {
//   get : function(number, callback) {
//     getComic(number, callback);
//   },

//   latest : function(callback) {
//     request.get({
//       url     : HOST + '/info.0.json',
//       json    : true
//     }, function(error, response, body){
//       if (error) {
//         console.error("Request error: " + error);
//         callback(error, null);
//       } else {
//         callback(error, body);
//       }
//     });
//   },

//   random : function(callback) {
//     request.get({
//       url     : HOST + '/info.0.json',
//       json    : true
//     }, function(error, response, body){
//       if (error) {
//         console.error("Request error: " + error);
//         callback(error, null);
//       } else {
//         var currentNumber = body.num;
//         getComic(randomIntFromInterval(1, currentNumber), callback);
//       }
//     });
//   }
// }

// function getComic(number, callback) {
//   request.get({
//     url     : HOST + number + '/info.0.json',
//     json    : true
//   }, function(error, response, body){
//     if (error) {
//       console.error("Request error: " + error);
//       callback(error, null);
//     } if (response.statusCode === 404) {
//       callback("Comic does not exist. Yet.", body);
//     } else if (response.statusCode !== 200) {
//       callback(response.statusCode, body);
//     } else {
//       callback(error, body);
//     }
//   });
// }

// function randomIntFromInterval(min,max) {
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
