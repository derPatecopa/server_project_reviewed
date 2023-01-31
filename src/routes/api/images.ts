import express from "express";
import imageProcessor from "../../utilities/imageProcessing";

const routes = express.Router();
const fullpath = "images/full";
const thumbpath = "images/thumb";

//making req and res async, so that the file is not sent, before the image is processed
routes.get("/", async (req, res) => {
  //creating necessary variable for imageProcessing with .query from given URL
  //casting them into the required format
  const filename = String(req.query.filename);
  //console.log(typeof filename)
  //test candidates for jasmine width and height to be tested for type
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const filepath = `${fullpath}/${filename}.jpg`;
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
