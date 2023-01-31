import sharp from "sharp";

//creating cache of object type string
const cache: Record<string, string> = {};
//turning the imageProcessing into async function to wait for the response in images.ts
const imageProcessing = async (
  filename: string,
  width: number,
  height: number,
  filepath: string,
  thumbpath: string
): Promise<string> => {
  //checking if image already stored
  const cacheKey = `${filename},${width},${height}`;
  if (cache[cacheKey]) {
    console.log(`thumbnail ${cache[cacheKey]} already in cache`);
    return cache[cacheKey];
  }
  //added try catch block, when Promise is not resolved but rejected
  try {
    const thumbnail = `${thumbpath}/thumb${filename}.jpg`;
    await sharp(filepath).resize(width, height).toFile(thumbnail);
    cache[cacheKey] = thumbnail;
    return thumbnail;
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
