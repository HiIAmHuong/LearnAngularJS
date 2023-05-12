const express = require("express");
const app = express();
const port = 4000;
const morgan = require("morgan");
app.use(morgan("combined"));
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.listen(port, () => {
  console.log(`My Server listening on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("This Web server is processed for MongoDB");
});
const { MongoClient, ObjectId } = require("mongodb");
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData");
fashionCollection = database.collection("Fashion");
app.get("/fashions", cors(), async (req, res) => {
  const result = await fashionCollection.find({}).toArray();
  result.forEach((item) => {
    const fashionDate = new Date(item.date);
    item.date = fashionDate;
  });
  result.sort((a, b) => b.date - a.date);
  result.forEach((item) => {
    item.date = item.date.toLocaleDateString('en-GB');
  });
  res.send(result);
});

app.get("/fashions-style", async (req, res) => {
  try {
    await client.connect();
 
    const fashions = await fashionCollection.find().toArray();
    const groupedFashions = {};
    fashions.forEach(fashion => {
      if (!groupedFashions[fashion.style]) {
        groupedFashions[fashion.style] = [];
      }
      groupedFashions[fashion.style].push(fashion);
    });
    res.send(groupedFashions);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
});
// app.get("/fashions-style", cors(), async (req, res) => {
  
  // try {
  //   const fashionStyle = req.query.style;

  //   let result;
  //   if (fashionStyle) {
  //     result = await fashionCollection.find({ style: fashionStyle }).toArray();
  //   } else {
  //     result = await fashionCollection.find({}).toArray();
  //   }

  //   result.forEach((item) => {
  //     const fashionDate = new Date(item.date);
  //     item.date = fashionDate.toLocaleDateString('en-GB');
  //   });
  //   result.sort((a, b) => a.date.localeCompare(b.date));

  //   res.send(result);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send("Internal server error");
  // }
// });

app.get("/fashions/:id", cors(), async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await fashionCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});

// bai 59
app.post("/fashions", cors(), async (req, res) => {
  //put json Fashion into database
  await fashionCollection.insertOne(req.body);
  //send message to client(send all database to client)
  res.send(req.body);
});

// bai 60
app.put("/fashions", cors(), async (req, res) => {
  //update json Fashion into database
  await fashionCollection.updateOne(
    { _id: new ObjectId(req.body._id) }, //condition for update
    {
      $set: {
        //Field for updating
        style: req.body.style,
        fashion_subject: req.body.fashion_subject,
        fashion_detail: req.body.fashion_detail,
        fashion_image: req.body.fashion_image,
      },
    }
  );
  //send Fahsion after updating
  var o_id = new ObjectId(req.body._id);
  const result = await fashionCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});

app.delete("/fashions/:id", cors(), async (req, res) => {
  //find detail Fashion with id
  var o_id = new ObjectId(req.params["id"]);
  const result = await fashionCollection.find({ _id: o_id }).toArray();
  //update json Fashion into database
  await fashionCollection.deleteOne({ _id: o_id });
  //send Fahsion after remove
  res.send(result[0]);
});
