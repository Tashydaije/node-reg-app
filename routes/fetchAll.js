const express = require('express');
const router = express.Router();

const { getStudent } = require('../services/findAll');

router.get('/',(req, res) => {
    console.log('Init fetch all users ::: route');
    //find in db
    const result = getStudent();
   // if (!result) return res.status(500).send(result);
    console.log('response ( route ) ::: ', result);
    res.status(200).send(result);

});

module.exports = router;
