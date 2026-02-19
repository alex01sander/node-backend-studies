const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

app.use((error, req, res, next) => {
    console.error(error);
  
    return res.status(error.statusCode || 500).json({
      message: error.message || "Internal server error",
    });
  });
      

app.listen(3000, () => {
    console.log("Server is running on port 3000 localhost:3000");
});
