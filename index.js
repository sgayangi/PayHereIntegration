const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is listening in ${port}`);
});

app.get("/", (req, res) => {
    res.status(200).send("Server is ok!");
});

app.post("/", (req, res) => {
    res.status(200).send(req.body);
    console.log(req.body);
});