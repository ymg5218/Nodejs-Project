const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://yeommingyu0106:aowlrrkawk99@cluster0.tmqnpye.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(url, { useNewUrlParser : true});

async function main(){
    try{
        await client.connect();
        console.log("몽고디비 접속 성공!");
        const collection = client.db('test').collection('person');
        await collection.insertOne({ name : 'aaingyu', age : 21});
        console.log("문서 추가 완료");

        const documents = await collection.find({name : 'kmingyu'}).toArray();
        console.log("찾은 데이터 : ",documents);

        await collection.updateOne({name : 'kmingyu'}, { $set: {age : 25}});
        console.log('문서 업데이트');

        const updateDocuments = await collection.find({name : "kmingyu"}).toArray();
        console.log("갱신된 문서 : ",updateDocuments);

        await client.close();
    }catch(err){
        console.log(err);
    }
}

main();