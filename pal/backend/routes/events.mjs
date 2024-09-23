import express from "express";
import db from "../db/conn.mjs";
import "../loadEnvironment.mjs";
import { ObjectId } from "mongodb";
import fs from "fs";
import base64 from "base-64";

const router = express.Router();

// Get a list of 50 posts
router.get("/", async (req, res) => {
  let collection = await db.collection("events");
  let results = await collection.find().toArray();

  res.send(results).status(200);
});

// Fetches the latest posts
// router.get("/latest", async (req, res) => {
//   let collection = await db.collection("posts");
//   let results = await collection.aggregate([
//     {"$project": {"author": 1, "title": 1, "tags": 1, "date": 1}},
//     {"$sort": {"date": -1}},
//     {"$limit": 3}
//   ]).toArray();
//   res.send(results).status(200);
// });

// Get a single post
// router.get("/:id", async (req, res) => {
//   let collection = await db.collection("posts");
//   let query = {_id: ObjectId(req.params.id)};
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// Add a new document to the collection
// router.post("/", async (req, res) => {
//   console.log("asd");
//   let collection = await db.collection("events");
//   let json = JSON.parse(req.body);

//   imgur.then(async (res) => {
//     console.log(res);
//     json.imageURL = res.data.id;
//     const newDocument = JSON.stringify(json);
//     console.log(newDocument);
//     let result = await collection.insertOne(newDocument);
//     res.send(result).status(204);
//   });
// });

router.post("/upload", async (req, res) => {
  let collection = db.collection("events");
  const imgurForm = new FormData();
  console.log(req.body);
  const filePath = req.body.path;
  try {
    imgurForm.append(
      "image",
      fs.readFileSync(filePath, { encoding: "base64" })
    );
    imgurForm.append("type", "base64");
  } catch (e) {
    return console.log(e);
  }

  console.log("uploading now!");
  const imgur = await fetch("https://api.imgur.com/3/image/", {
    method: "POST",
    body: imgurForm,
    headers: {
      Authorization: `Bearer ${process.env.IMGUR_TOKEN}`,
      Accept: "application/json",
    },
  });
  const imgurData = await imgur.json();

  let newDoc = { ...req.body, imageURL: imgurData.data.link };
  delete newDoc.path;
  const result = collection.insertOne(newDoc);
  fs.unlink(filePath);
  res.status(204).send(result);
});
// Update the post with a new comment
router.patch("/edit/:id", async (req, res) => {
  console.log("edit");
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: req.body,
  };

  let collection = await db.collection("events");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Delete an entry
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    let collection = db.collection("events");
    let result = await collection.deleteOne(query);
    res.send(result).status(200);
  } catch (e) {
    console.log(e);
  }
});

export default router;
