"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainroutes_1 = __importDefault(require("./routes/mainroutes"));
const app = (0, express_1.default)();
const port = 3000;
//using app with routes
app.use("/api", mainroutes_1.default);
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
// const testfunction = (word: string): string => {
//   return word;
// };
// export default testfunction;
