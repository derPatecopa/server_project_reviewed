import sharp from "sharp";
import fs from "fs";

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
    const thumbnail = `thumb_${filename}_${width}_${height}.jpg`;
    if (!fs.existsSync(`${thumbpath}`)) {
      fs.mkdirSync(`${thumbpath}`);
    }
    //console.log("This is thumbnail: " + thumbnail);
    //checking for already stored image
    //console.log("This is the value for existsSync " + fs.existsSync(`${thumbpath}${thumbnail}`))
    if (!fs.existsSync(`${thumbpath}${thumbnail}`)) {
      await sharp(filepath)
        .resize(width, height)
        .toFile(`${thumbpath}${thumbnail}`);
      console.log("New Thumbnail File successfully created");
    } else {
      console.log("File loaded from cache");
    }
    return thumbnail;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export default imageProcessing;
