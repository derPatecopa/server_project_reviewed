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
//creating cache of object type string
const cache = {};
//turning the imageProcessing into async function to wait for the response in images.ts
const imageProcessing = (filename, width, height, filepath, thumbpath) => __awaiter(void 0, void 0, void 0, function* () {
    //checking if image already stored
    const cacheKey = `${filename},${width},${height}`;
    if (cache[cacheKey]) {
        console.log(`thumbnail ${cache[cacheKey]} already in cache`);
        return cache[cacheKey];
    }
    //added try catch block, when Promise is not resolved but rejected
    try {
        const thumbnail = `${thumbpath}/thumb${filename}.jpg`;
        yield (0, sharp_1.default)(filepath).resize(width, height).toFile(thumbnail);
        cache[cacheKey] = thumbnail;
        return thumbnail;
    }
    catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
});
exports.default = imageProcessing;
