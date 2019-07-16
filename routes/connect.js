const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tasha:Natasha23#@cluster0-ofz0p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });



    router.put('/student/register', function (req, res) {
        console.log(req.body);
        res.send(req.body);
    });

module.exports = router;
/*

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
*/


// save our data via query

// return response