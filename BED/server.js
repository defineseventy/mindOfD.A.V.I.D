const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://P1935404:I220009@cluster0.mucnfpq.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("mindofdavid").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
    try {
        await client.connect();
        const database = client.db("mindofdavid");
        const collection = database.collection("depression");
        const inserted = await collection.insertOne({
            "scene": "1",
            "opt": "B"
        });
        const found = await collection.find({ "scene": "1" }).toArray();
        const deleted = await collection.deleteMany({ "scene": "1" }, { "opt": "B"});
        console.log(found);
    } catch (error) {
        console.error(error);
    } finally {
        client.close();
    }
}
run().catch(console.dir);