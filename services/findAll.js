const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tasha:Natasha23%23@cluster0-ofz0p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

exports.getStudent = () => {
    console.log('Init find all users ::: service ');
    client.connect(err => {
        let collection = client.db("students").collection("registration")
        // perform actions on the collection object
        // save our data via query
            .find({}).toArray((error, result) =>{
                /*if(error){
                    console.log(error);
                    return error;
                }*/
               // if (error) throw error;
               // console.log('service resp ::: ', result);
                return result;
            });

        client.close();
    });

};