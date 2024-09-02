import { MongoClient } from "mongodb";
import "../loadEnvironment.mjs";
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("Connected!");
} catch (e) {
  console.error(e);
}
let db = conn.db("pal");
export default db;
