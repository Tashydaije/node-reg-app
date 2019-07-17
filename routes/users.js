const express = require('express');
const router = express.Router();

/* GET users listing. */


  router.get('/', function (req, res, next) {

    const templateData = {
      title: "REGISTRATION SUCCESSFUL",
      subTitle: "Confirm the details below"
    };
    res.render('user', templateData);
  });

  module.exports = router;
