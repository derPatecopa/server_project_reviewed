"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
//turning the imageProcessing into async function to wait for the response in images.ts
const imageProcessing = (filename, width, height, filepath, thumbpath) => __awaiter(void 0, void 0, void 0, function* () {
    //added try catch block, when Promise is not resolved but rejected
    try {
        yield (0, sharp_1.default)(filepath)
            .resize(width, height)
            .toFile(`${thumbpath}/thumb${filename}.jpg`);
        return `${thumbpath}/thumb${filename}.jpg`;
    }
    catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
});
exports.default = imageProcessing;
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
