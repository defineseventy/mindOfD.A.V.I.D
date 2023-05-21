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

const Express = require("express");
const BodyParser = require("body-parser");

const app = Express();

app.use(BodyParser.json());

var database, getDepression, createDepression;

app.get("/depression", async (request, response) => {
    try {
        const deal = await getDepression.findOne({ "date": "2022-10-07" });
        response.send(deal || {});
    } catch (error) {
        response.status(500).send({ "message": error.message });
    }
});

app.post("/depression", async (request, response) => {
    try {
        if(!request.body) {
            throw { "message": "The request body is missing!" };
        }
        const receipt = await createDepression.insertOne(
            { 
                "scene": request.body.scene,
                "opt": request.body.opt
            }
        );
        response.status(200).send(receipt, "OK");
    } catch (error) {
        response.status(500).send({ "message": error.message });
    }
});

app.listen(3000, async () => {
    try {
        await client.connect();
        database = client.db("mindofdavid");
        getDepression = database.collection("depression");
        createDepression = database.collection("depression");
        console.log("SERVING AT :3000...");
    } catch (error) {
        console.error(error);
    }
});