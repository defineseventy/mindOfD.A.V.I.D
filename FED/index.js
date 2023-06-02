const express = require("express");
const app = express();
app.use(express.static('FED'))

app.get("/", (req, res) => {
    res.sendFile("/index.html", { root: __dirname });
});

app.get("/index.css", (req, res) => {
    res.sendFile("/index.css", { root: __dirname });
});

app.get("/depression/dep.js", (req, res) => {
    res.sendFile("/depression/dep.js", { root: __dirname });
});

app.get("/about", (req, res) => {
    res.sendFile("about.html", { root: __dirname });
});

app.get("/instructions", (req, res) => {
    res.sendFile("instructions.html", { root: __dirname });
});

app.get("/selection", (req, res) => {
    res.sendFile("selection.html", { root: __dirname });
});

app.get("/depression/intro", (req, res) => {
    res.sendFile("/depression/intro.html", { root: __dirname });
});

app.get("/depression/1", (req, res) => {
    res.sendFile("/depression/1.html", { root: __dirname });
});

app.get("/depression/2", (req, res) => {
    res.sendFile("/depression/2.html", { root: __dirname });
});

app.get("/depression/3", (req, res) => {
    res.sendFile("/depression/3.html", { root: __dirname });
});

app.get("/depression/4", (req, res) => {
    res.sendFile("/depression/4.html", { root: __dirname });
});

app.get("/depression/a1", (req, res) => {
    res.sendFile("/depression/a1.html", { root: __dirname });
});

app.get("/depression/b1", (req, res) => {
    res.sendFile("/depression/b1.html", { root: __dirname });
});

app.get("/depression/a2", (req, res) => {
    res.sendFile("/depression/a2.html", { root: __dirname });
});

app.get("/depression/b2", (req, res) => {
    res.sendFile("/depression/b2.html", { root: __dirname });
});

app.get("/depression/a3", (req, res) => {
    res.sendFile("/depression/a3.html", { root: __dirname });
});

app.get("/depression/b3", (req, res) => {
    res.sendFile("/depression/b3.html", { root: __dirname });
});

app.get("/depression/a4", (req, res) => {
    res.sendFile("/depression/a4.html", { root: __dirname });
});

app.get("/depression/b4", (req, res) => {
    res.sendFile("/depression/b4.html", { root: __dirname });
});

app.get("/depression/result", (req, res) => {
    res.sendFile("/depression/result.html", { root: __dirname });
});

app.get("/selection", (req, res) => {
    res.sendFile("selection.html", { root: __dirname });
});

app.get("/img/placeholder.png", (req, res) => {
    res.sendFile("/img/placeholder.png", { root: __dirname });
});

app.get("/img/a.png", (req, res) => {
    res.sendFile("/img/a.png", { root: __dirname });
});

app.get("/img/b.png", (req, res) => {
    res.sendFile("/img/b.png", { root: __dirname });
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

app.get("/img/home/instructions.png", (req, res) => {
    res.sendFile("/img/home/instructions.png", { root: __dirname });
});


const PORT = 3002; //We cannot use port 3000 because it has been occupied by our backend.
app.listen(PORT, () => {
    console.log(`Client server has started listening on port ${PORT}`);
});