const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tasha:Natasha23%23@cluster0-ofz0p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


module.exports = function(app) {
        app.post('/connect', function (req, res) {
                res.send(req.body);
        });
};

client.connect(err => {
        if(err) {
                console.log(err);
                process.exit(0);
        }
        console.log('database connected!');

    const collection = client.db("test"); /* .collection("devices");*/
    // perform actions on the collection object
        collection.createCollection('devices', (err) => {
                if(err) {
                        console.log(err);
                        process.exit(0);
                }
                console.log('collection created!');
                client.close();
        });
});


// save our data via query

// return response