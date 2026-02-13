const express = require("express");
const routes = require("./routes");

const app = express();

app.use((req, res) => {
    req.appId = "MeuAppID";
    res.send("PAROU NO MIDDLEWARE");
});

app.use(routes);

app.listen(3000, () => {
    console.log("Server is running on port 3000 localhost:3000");
});
