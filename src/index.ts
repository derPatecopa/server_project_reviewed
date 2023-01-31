import express from "express";
import mainroutes from "./routes/mainroutes";
const app = express();
const port = 3000;

//using app with routes
app.use("/api", mainroutes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
