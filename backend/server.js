const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.send("Welcome to the ArtConnect server!");
});

app.listen(PORT, function() {
    console.log("Server is running on port " + PORT);
});



let artworks = [];

app.post("/submit-artwork", function(req, res) {
    if (!req.body.artistName || !req.body.email || !req.body.title || !req.body.category || !req.body.price || !req.body.description) {
    return res.status(400).send("Please complete all required fields.");
    }
    if (isNaN(req.body.price) || Number(req.body.price) <= 0) {
    return res.status(400).send("Please enter a valid price.");
    }
    const artwork = {
        artistName: req.body.artistName,
        email: req.body.email,
        title: req.body.title,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description
    };

    artworks.push(artwork);

    res.send("Artwork submitted successfully!");
});

app.get("/artworks", function(req, res) {
    res.json(artworks);
});