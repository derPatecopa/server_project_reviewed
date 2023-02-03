import imageProcessing from "../utilities/imageProcessing";
import fs from "fs";

const testFileName = "encenadaport";
const testWidth = 200;
const testHeight = 300;
const testFilePath = "images/full/encenadaport.jpg";
const testThumbPath = "images/thumb/";
const testThumbFile = `thumb_${testFileName}_${testWidth}_${testHeight}.jpg`;

fdescribe("Tests the imageProcessing", () => {
  it("generates a testfile with imageProcessing", async () => {
    if (fs.existsSync(`${testThumbPath}${testThumbFile}`)) {
      console.log(`File ${testThumbPath}${testThumbFile} exists`);
      fs.unlink(`${testThumbPath}${testThumbFile}`, (err) => {
        if (err) console.log(err);
      });
      console.log(`File ${testThumbPath}${testThumbFile} has been deleted`);
    }
    const thumbnail = await imageProcessing(
      testFileName,
      testWidth,
      testHeight,
      testFilePath,
      testThumbPath
    );
    expect(thumbnail).toBe(testThumbFile);
    expect(fs.existsSync(`${testThumbPath}${testThumbFile}`)).toBe(true);
  });
});
