import sharp from "sharp";
import fs from "fs";

//creating cache instance
const cache: Record<string, string> = {};


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
    console.log("This is thumbnail: " + thumbnail);
    // for (const key in cache) {
    //   console.log("This is Key: " + key);
    // }
    //checking for already stored image
    if (!(cache[thumbnail] === "cached")) {
      await sharp(filepath)
        .resize(width, height)
        .toFile(`${thumbpath}${thumbnail}`);
        const cacheKey = `${thumbnail}`;
    cache[cacheKey] = `cached`;
    }
    return thumbnail;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export default imageProcessing;
