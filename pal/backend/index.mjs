import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import events from "./routes/events.mjs";
import fileUpload from "express-fileupload";
const PORT = process.env.PORT || 5050;
const app = express();

app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/events", events);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
