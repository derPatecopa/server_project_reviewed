import express from "express";
import imagesroutes from "./api/images"

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("This is main route");
});

routes.use("/images", imagesroutes )

export default routes;
