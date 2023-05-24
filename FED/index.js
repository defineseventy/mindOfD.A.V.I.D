const express = require("express");
const app = express();
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile("/public/index.html", { root: __dirname });
});

const PORT = 3001; //We cannot use port 3000 because it has been occupied by our backend.
app.listen(PORT, () => {
    console.log(`Client server has started listening on port ${PORT}`);
});