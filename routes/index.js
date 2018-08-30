var express = require('express');
var router = express.Router();
const request = require("request")
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/proxy', (req, res) => {
  // Optionally the request above could also be done as
  request.get('http://api.petfinder.com/pet.find?key=c1245f06b6af83f0049cbea229ca8844&location=33716&format=json', (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.json(JSON.parse(body))
  })
})

module.exports = router;
