const express = require('express');
const router = express.Router();
var path = require('path');

router.post('/connect', function (req, res, next) {
        console.log(req.body);
        res.send('connect', req.body);
        /*const templateData = {
            title : "Register 2",
            subtitle: "Please fill in the details.",
        };
        res.render('index', templateData);*/
});

module.exports = router;

// save our data via query

// return response