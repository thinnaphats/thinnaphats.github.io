var requset1 = require("request");
requset1.get(
  "students.json",
  (error, response, body) => {
    if (error) {
      return console.dir(error);
    }
    var result = JSON.parse(body);
    router.get('/', function(req, res) {
      res.send({result});
  });
  }
);

var express = require('express');
var router = express.Router();

router.get("/", function (req, res) {
    res.json(result);
  });

router.post('/', function(req, res) {
    res.send(result);
});

module.exports = router;