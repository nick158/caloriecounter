/**
* A basic Hello World function
* @param {buffer} data bytes of the image
* @returns {object}
*/
module.exports = (data, context, callback) => {
  const Clarifai = require('clarifai');
  const fs = require('fs');
  console.log(context)
  // initialize with your api key. This will also work in your browser via http://browserify.org/
  const app = new Clarifai.App({
   apiKey: process.env.clarifaiKey
  });
  console.log(data);
  app.models.predict("bd367be194cf45149e75f01d59f77ba7",  {base64: bytes}).then(
  function(response) {
    // do something with response
    let possibilities = response.outputs[0].data.concepts;
    possibilities = possibilities.slice(0,6);
    let final_possibilities = possibilities.map(item => item.name);
    let jsonData = {};
    jsonData.food = final_possibilities;
    console.log(jsonData);
    callback(null, jsonData);
  },
  function(err) {
    // there was an error
    console.err(err);
    callback(err, result);
  }
);
};


/**
* A basic Hello World function
* @param {buffer} data bytes of the image
* @returns {object}
*/
module.exports = (data, context, callback) => {
  const Clarifai = require('clarifai');
  const fs = require('fs');
  console.log(context)
  if(err){console.error(err);}
  callback(null, context);
  // initialize with your api key. This will also work in your browser via http://browserify.org/

};
