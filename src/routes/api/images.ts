import express from "express";
import imageProcessor from "../../utilities/imageProcessing";
//import { promises as fs } from "fs";

const routes = express.Router();
const fullpath = "images/full";
const thumbpath = "images/thumb";
//const baseUrl = "http://localhost:3000/";

//to get images processed, you need to type in the URL in this format:
//sometimes not working correctly when adblockers are enabled!
//http://localhost:3000/api/images?filename=&width=&height=
//making req and res async, so that the file is not sent, before the image is processed
routes.get("/", async (req, res) => {
  //console.log(typeof req);
  //creating necessary variable for imageProcessing with .query from given URL
  //casting them into the required format
  const filename = String(req.query.filename);
  //test candidates for jasmine width and height to be tested for type
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  //console.log(filename, width, height);
  const filepath = `${fullpath}/${filename}.jpg`;
  const thumbnail = await imageProcessor(
    filename,
    width,
    height,
    filepath,
    thumbpath
  );
  console.log(typeof thumbnail)
  // res.send(thumbImageUrl)
  //console.log(filepath);
  // console.log("This is the thumbnail: "+ thumbnail);
  //root gives current working directory (cwd)
  res.sendFile(thumbnail, {root: process.cwd()});
});

export default routes;

//sharp code from within routes without outsourcing:
// sharp(filepath)
//     .resize(width, height)
//     .toFile(`${thumbpath}/thumb${filename}.jpg`);
