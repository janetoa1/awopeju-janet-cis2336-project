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