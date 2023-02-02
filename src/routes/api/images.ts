import express from "express";
import imageProcessor from "../../utilities/imageProcessing";
import fs from "fs";

const routes = express.Router();
const fullpath = "images/full";
const thumbpath = "images/thumb/";

// making req and res async, so that the file is not sent, before the image is processed
routes.get("/", async (req, res) => {
  //console.log(req.query);
  //creating necessary variable for imageProcessing with .query from given URL
  //casting them into the required format
  const filename = String(req.query.filename);
  if (!filename) {
    return res.status(400).send({ error: "filename is required" });
  }
  if (!fs.existsSync(`images/full/${filename}.jpg`)) {
    return res.status(400).send({ error: "file not found" });
  }
  //console.log(typeof filename)
  const width = Number(req.query.width);
  if (!width || width <= 0) {
    return res.status(400).send({ error: "please provide correct or missing width input" });
  }
  const height = Number(req.query.height);
  if (!height || width <= 0) {
    return res.status(400).send({ error: "please provide correct or missing hieght input" });
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
  //console.log(thumbnail);
  //root gives current working directory (cwd)
  res.sendFile(`${thumbpath}${thumbnail}`, { root: process.cwd() });
});

export default routes;
