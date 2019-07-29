const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tasha:Natasha23%23@cluster0-ofz0p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

/*
function createStudent (data) {
        client.connect(err => {
        const collection = client.db("students").collection("registration")
        // perform actions on the collection object
        // save our data via query
            .insertOne({
                        userfirstName: req.body.userfirstName,
                        userLastName: req.body.userLastName,
                        userID: req.body.userID,
                }, function (error, result) {
                        if(error) {
                                return res.status(500).send(error);
                        }

                        res.send(result);
                }
            );

        client.close();
}

function getStudents(){
        client.connect(err => {
                const collection = client.db("students").collection("registration")
                // perform actions on the collection object
                // save our data via query
                    .find({}).toArray((error, result) =>{
                            if(error){
                                    return res.status(500).send(error);
                            }

                            res.send(result);
                    });

                client.close();
        });
}
function getSpecificStudent(){
        client.connect(err => {
                const collection = client.db("students").collection("registration")
                // perform actions on the collection object
                // save our data via query
                    .find({userID: 'MMU11000'}).toArray((error, result) =>{
                            if(error){
                                    return res.status(500).send(error);
                            }

                            res.send(result);
                    });

                client.close();
        });
}
*/
router.post('/',(req, res) => {
        // req.body holds the data...
       // console.log(req.body);'
    client.connect(err => {
        console.log('posting req');
        const collection = client.db("students").collection("registration")
        // perform actions on the collection object
        // save our data via query
            .insertOne({
                    userfirstName: req.body.userfirstName,
                    userLastName: req.body.userLastName,
                    userID: req.body.userID,
                }, function (error, result) {
                    if (error) {
                        return res.status(500).send(error);
                    }

                    res.send(result);
                }
            );

        client.close();
    });
});

module.exports = router;


/*client.connect(err => {
                const collection = client.db("students").collection("registration")
                // perform actions on the collection object
                // save our data via query
                    .updateOne({userID: "MMU11000"}, {$set: {
                                userLastName: "Mbugua"}
                        }
                    );

                client.close();*/