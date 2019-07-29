// Responsible for getting data to our application

const express = require('express');
const router = express.Router();

const { validate } = require('../resources/validateReq');
const { getID } = require('../resources/randomID');
const { createStudent } = require('../services/createService');

router.post('/', (req, res) => {

  // validate req data:::
  const response = validate(req.body);
  if (response) return res.status(400).send(response);


  // generate id
  const userID = getID();
  if (!userID) return res.status(400).send('Error generating ID');


  // save to DB:::
  const error = createStudent(req.body, userID);
  if (error) return res.status(500).send(error);
  res.status(200).send('User Created Successfully!');

});

module.exports = router;