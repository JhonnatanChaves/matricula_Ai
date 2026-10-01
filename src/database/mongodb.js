const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const dbName = "matriculaAi";

let db;

const conectarMongoDB = async () => 
{
    if (db)
    {
        return db;
    }

    await client.connect();

    db = client.db(dbName);

    console.log("MongoDB conectado!");

    return db;
}

module.exports = conectarMongoDB;