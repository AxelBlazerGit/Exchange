const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

// Mongoose
// mongoose.connect('mongodb+srv://requestpull4:xKPZsKJs0ArwSv5P@unihubcluster0.baf52.mongodb.net/?retryWrites=true&w=majority&appName=UniHubCluster0', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err.message()));

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


const mongoose = require('mongoose');
const uri = "mongodb+srv://requestpull4:xKPZsKJs0ArwSv5P@unihubcluster0.baf52.mongodb.net/?retryWrites=true&w=majority&appName=UniHubCluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

