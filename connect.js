import { MongoClient } from 'mongodb'

const url = 'mongodb+srv://Goldnew13:franvier@cluster0.0limz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
var client = new MongoClient(url);

var dbname = 'db_service';
(async () =>{
    try {
        await client.connect();
        console.log('se ha conectado el servidor');
        var db = client.db(dbname);
        var collection = db.collection('conct');
        return 'done.';
    } catch (error){
        console.error(error);
    }
})();
async function insertData(body) {
    try {
        await client.connect();
        console.log('se ha conectado el servidor');
        var db = client.db(dbname);
        var collection = db.collection('conct');
        await collection.insertMany(body);
    } catch(error){
        if (error) {
            console.log(error);
        }
    }
}
export default insertData