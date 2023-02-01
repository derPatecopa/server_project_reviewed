import express from "express";
import imageProcessor from "../../utilities/imageProcessing";
import fs from "fs";


const routes = express.Router();
const fullpath = "images/full";
const thumbpath = "images/thumb";

// making req and res async, so that the file is not sent, before the image is processed
routes.get("/", async (req, res) => {
  console.log(req.query);
  //creating necessary variable for imageProcessing with .query from given URL
  //casting them into the required format
  const filename = String(req.query.filename);
  if (!filename) {
    return res.status(400).send({error: "filename is required"})
  }
  if (!fs.existsSync(`images/full/${filename}.jpg`)) {
    return res.status(400).send({ error: "file not found" });
  }
  //console.log(typeof filename)
  //test candidates for jasmine width and height to be tested for type
  const width = Number(req.query.width);
  if (!width) {
    return res.status(400).send({ error: "width is required" });
  }
  const height = Number(req.query.height);
  if (!height) {
    return res.status(400).send({ error: "height is required" });
  }
  const filepath = `${fullpath}/${filename}.jpg`;
  if (!filepath) {
    return res.status(400).send({ error: "filepath is required" });
  }
  const thumbnail = await imageProcessor(
    filename,
    width,
    height,
    filepath,
    thumbpath
  );
  //root gives current working directory (cwd)
  res.sendFile(thumbnail, { root: process.cwd() });
});

export default routes;


//Test for API endpoint testing

// routes.get("/", (req, res) => {
//   res.send("This is images route");
// });

// export default routes;
