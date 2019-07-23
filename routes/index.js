const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const templateData = {
    title : "Register",
    subtitle: "Please fill in the details.",
  };
  res.render('index', templateData);
});

module.exports = router;
