const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const app = express()
const port = process.env.PORT || 5000

// middlewares
app.use(cors())
app.use(express.json())

// Connection string
const uri = "mongodb+srv://subasroy46:i1szvfSf9qHUQNiR@cluster0.mrd4l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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

    // Get the database and collection on which to run the operation
    const db = client.db("usersDB");
    const col = db.collection("users");

    // GET operation
    app.get('/users', async (req, res) => {
      const cursor = col.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await col.findOne(query);
      res.send(user);
    })

    // POST operation
    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log('new user: ', user);
      // Insert the documents into the specified collection        
      const result = await col.insertOne(user);
      res.send(result);
    })

    // UPDATE
    app.put('/users/:id', async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      console.log(user);
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true }
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email
        }
      }
      const resullt = await col.updateOne(filter, updatedUser, options);
      res.send(resullt);
    })

    // DELETE operatiion
    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      console.log('please delete id: ', id)
      const query = { _id: new ObjectId(id) };
      const result = await col.deleteOne(query);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('SIMPLE CRUD IS RUNNING')
})

app.listen(port, () => {
  console.log(`SIMPLE CRUD is running on port: ${port}`)
})