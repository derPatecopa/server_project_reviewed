import sharp from "sharp";
import fs from "fs";
import Cache from "file-system-cache";

//creating cache of object type string
//turning the imageProcessing into async function to wait for the response in images.ts
const imageProcessing = async (
  filename: string,
  width: number,
  height: number,
  filepath: string,
  thumbpath: string
): Promise<string> => {
  //checking if image already stored

  //added try catch block, when Promise is not resolved but rejected
  try {
    const thumbnail = `thumb_${filename}_${width}_${height}.jpg`;
    if (!fs.existsSync(`images/thumb`)) {
      fs.mkdirSync(`images/thumb`);
    }
    await sharp(filepath)
      .resize(width, height)
      .toFile(`${thumbpath}${thumbnail}`);

    return thumbnail;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export default imageProcessing;
