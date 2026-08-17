const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.send("Welcome to the ArtConnect server!");
});

app.listen(PORT, function() {
    console.log("Server is running on port " + PORT);
});