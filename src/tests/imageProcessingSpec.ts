import routes from "../routes/api/images";
import imageProcessing from "../utilities/imageProcessing";
import fs from "fs";

const testFileName = "encenadaport";
const testWidth = 200;
const testHeight = 300;
const testFilePath = "images/full/encenadaport.jpg";
const testThumbPath = "images/thumb/";
const testThumbFile = `thumb_${testFileName}_${testWidth}_${testHeight}.jpg`;

fdescribe("Test the Image Processing", () => {
  it("gets the filename, the height and the width from url parameters", () => {
    routes.get("/", async (req, res) => {
      const filename = req.query.filename;
      const width = req.query.width;
      const height = req.query.height;
      expect(filename).toBe(typeof String);
      expect(width).toBe(typeof Number);
      expect(height).toBe(typeof Number);
    });
  });
  it("generates a testfile with imageProcessing", () => {
    if (fs.existsSync(`${testThumbPath}${testThumbFile}`)) {
      console.log(`File ${testThumbPath}${testThumbFile} exists`);
      fs.unlink(`${testThumbPath}${testThumbFile}`, (err) => {
        if (err) console.log(err);
      });
      console.log(`File ${testThumbPath}${testThumbFile} has been deleted`);
    }
    imageProcessing(
      testFileName,
      testWidth,
      testHeight,
      testFilePath,
      testThumbPath
    );
  });
});
