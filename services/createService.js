const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tasha:Natasha23%23@cluster0-ofz0p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

exports.createStudent = (payload, userID) => {
    client.connect(err => {
        console.log('posting req');
        const collection = client.db("students").collection("registration")
            .insertOne({
                    userfirstName: payload.userfirstName,
                    userLastName: payload.userLastName,
                    userID: userID,
                }, function (error, result) {
                    if (error) {
                        return error;
                    }
                    return result;
                }
            );

        client.close();
    });
};
