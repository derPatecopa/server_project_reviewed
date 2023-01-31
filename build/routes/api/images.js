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
const express_1 = __importDefault(require("express"));
const imageProcessing_1 = __importDefault(require("../../utilities/imageProcessing"));
//import { promises as fs } from "fs";
const routes = express_1.default.Router();
const fullpath = "images/full";
const thumbpath = "images/thumb";
//const baseUrl = "http://localhost:3000/";
//to get images processed, you need to type in the URL in this format:
//sometimes not working correctly when adblockers are enabled!
//http://localhost:3000/api/images?filename=&width=&height=
//making req and res async, so that the file is not sent, before the image is processed
routes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(typeof req);
    //creating necessary variable for imageProcessing with .query from given URL
    //casting them into the required format
    const filename = String(req.query.filename);
    console.log(typeof filename);
    //test candidates for jasmine width and height to be tested for type
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    //console.log(filename, width, height);
    const filepath = `${fullpath}/${filename}.jpg`;
    const thumbnail = yield (0, imageProcessing_1.default)(filename, width, height, filepath, thumbpath);
    console.log(typeof thumbnail);
    // res.send(thumbImageUrl)
    //console.log(filepath);
    // console.log("This is the thumbnail: "+ thumbnail);
    //root gives current working directory (cwd)
    res.sendFile(thumbnail, { root: process.cwd() });
}));
exports.default = routes;
//sharp code from within routes without outsourcing:
// sharp(filepath)
//     .resize(width, height)
//     .toFile(`${thumbpath}/thumb${filename}.jpg`);
