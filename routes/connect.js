/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tasha:Natasha23#@cluster0-ofz0p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
const assert = require('assert');

const dbName = 'tasha';
*/

module.exports = function(app) {
        app.post('/connect', function (req, res) {
                res.send(req.body);
        });
};

/*MongoClient.connect(uri, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        client.close();
});


client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});*/


// save our data via query

// return response