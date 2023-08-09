const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://yeommingyu0106:aowlrrkawk99@cluster0.tmqnpye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run(){
    await client.connect();
    const adminDB = client.db('test').admin();
    const listDataqbases = await adminDB.listDatabases();
    console.log(listDataqbases);
    return "OK";
}

run()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close);

