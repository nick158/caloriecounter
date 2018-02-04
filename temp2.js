const Clarifai = require('clarifai');
/**
 * A basic Hello World function\
 *@param {string} path
 * @returns {any}
 */
module.exports = (path, context, callback) => {
  //if use function for callback, then scope is only within block
    let url = "https://s3.us-east-2.amazonaws.com/caloriecounter158/" + path;
  //  callback(null, url);
    const app = new Clarifai.App({
      apiKey: process.env.clarifaiKey
    });
    app.models.predict("bd367be194cf45149e75f01d59f77ba7", url ).then(
      function(response) {
        // do something with response
        let possibilities = response.outputs[0].data.concepts;
        possibilities = possibilities.slice(0, 10);
        //take the highest likelihood possibility returned by Clarifai and then send as a JSON to App
        //this data can then be selected by user to verify specific food item
        let final_possibilities = possibilities.map(item => item.name);
        let final_probabilities = possibilities.map(item => item.value);
        let jsonData = {};
        jsonData.food = final_possibilities;
        jsonData.values = final_probabilities;
        console.log(jsonData);
        callback(null, jsonData);
      },
      function(err) {
        // there was an error
        console.err(err);
        callback(err, result);
      }
    )
  }
  // initialize with your api key. This will also work in your browser via http://browserify.org/
