import sharp from "sharp";

//turning the imageProcessing into async function to wait for the response in images.ts
const imageProcessing = async (
  filename: string,
  width: number,
  height: number,
  filepath: string,
  thumbpath: string
): Promise<string> => {
  //added try catch block, when Promise is not resolved but rejected
  try {
    await sharp(filepath)
      .resize(width, height)
      .toFile(`${thumbpath}/thumb${filename}.jpg`);
    return `${thumbpath}/thumb${filename}.jpg`;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export default imageProcessing;
// routes.get("/", (req, res) => {
//     res.send("This is images route");
//     console.log(typeof req);
//     const filename = req.query.filename;
//     //test candidates for jasmine width and height to be tested for type
//     const width = Number(req.query.width);
//     const height = Number(req.query.height);
//     console.log(filename, width, height);
//     const filepath = `${fullpath}/${filename}.jpg`;
//     //console.log(filepath);
//     sharp(filepath)
//       .resize(width, height)
//       .toFile(`${thumbpath}/thumb${filename}.jpg`);
//   });
