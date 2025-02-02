import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Hello");

});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});


