const express = require("express");
const db = require("./config/db")
const cors = require("cors");
const app = express();

const PORT = 4000;
app.use(express.json());
app.use(cors());
app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM posts", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).send(result);
    })

});

app.post("/api/create", (req, res) => {
    const { title, text } = req.body;
    db.query(`SELECT * FROM posts WHERE title= "${title}"`, (err, result) => {
        if (err)
            console.log(err);

        if (result.length == 0) {

            db.query("insert into posts  (title,post_text) values(?,?)", [title, text], (err, result) => {
                if (err)
                    console.log(err)
                res.status(200).send("created")
            })
        }
        else {
            console.log("duplicate found");
            res.status(200).send("duplicate found")
        }


    })
});

app.delete("/api/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("delete from posts where id= ?", id, (err, result) => {
        if (err)
            console.log(err);

        console.log(result);
        res.status(200).send("deleted");
    })
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})