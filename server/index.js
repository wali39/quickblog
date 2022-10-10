const express = require("express");
const db = require("./config/db")

const app = express();

const PORT = 4000;
app.use(express.json());

app.get("/api/get", (req, res) => {
    res.status(200).send("hello world!!");
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})