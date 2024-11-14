import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import events from "./routes/events.mjs";
import multer from "multer";
import compression from "compression";
import helmet from "helmet";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use("/events", events);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}.png`);
  },
});
const upload = multer({ storage });
// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send(req.file.path).status(200);
});
// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
