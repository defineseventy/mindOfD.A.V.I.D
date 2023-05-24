const express = require("express");
const app = express();
app.use(express.static('FED'))

app.get("/", (req, res) => {
    res.sendFile("/index.html", { root: __dirname });
});

app.get("/index.css", (req, res) => {
    res.sendFile("/index.css", { root: __dirname });
});

app.get("/about", (req, res) => {
    res.sendFile("/about.html", { root: __dirname });
});

app.get("/instructions", (req, res) => {
    res.sendFile("/instructions.html", { root: __dirname });
});

app.get("/selection", (req, res) => {
    res.sendFile("/selection.html", { root: __dirname });
});

app.get("/img/home/about.png", (req, res) => {
    res.sendFile("/img/home/about.png", { root: __dirname });
});

app.get("/img/home/instructions.png", (req, res) => {
    res.sendFile("/img/home/instructions.png", { root: __dirname });
});

app.get("/img/home/selection.png", (req, res) => {
    res.sendFile("/img/home/selection.png", { root: __dirname });
});


const PORT = 3002; //We cannot use port 3000 because it has been occupied by our backend.
app.listen(PORT, () => {
    console.log(`Client server has started listening on port ${PORT}`);
});