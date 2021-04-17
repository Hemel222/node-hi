const express = require("express");
const app = express();

app.get("/", function (res, req){
    res.send("subdomain take-over successfully");
});
app.listen(process.env.PORT || 8080); 