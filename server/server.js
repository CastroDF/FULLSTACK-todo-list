const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 4000;
const cors = require("cors");

//For seed the database
const path = require("path");
const { Seeder } = require("mongo-seeding");

const connectionString =
  "mongodb+srv://CastroDF:42327405d@cluster0.87pfo.mongodb.net/TasksDB?retryWrites=true&w=majority";

const config = {
  database: connectionString,
  dropDatabase: true,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve("./data-import")
);

seeder
  .import(collections)
  .then(() => {
    console.log("Seeding success");
  })
  .catch((error) => {
    console.error(error);
  });

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(connectionString, { useUnifiedTopology: true }).then(
  (client) => {
    const db = client.db("TasksDB");
    const tasksCollection = db.collection("tasks");

    app.use(cors());

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get("/tasks", (req, res) => {
      db.collection("tasks")
        .find()
        .toArray()
        .then((data) => res.send(data));
    });

    app.put("/tasks", (req, res) => {
      tasksCollection
        .findOneAndUpdate(
          { id: req.body.id },
          {
            $set: {
              title: req.body.title,
              id: req.body.id,
              isDone: req.body.isDone,
            },
          },
          {
            upsert: true,
          }
        )
        .then((result) => {
          res.json("Success");
        })
        .catch((error) => console.error(error));
    });

    app.listen(PORT, function () {});
  }
);
