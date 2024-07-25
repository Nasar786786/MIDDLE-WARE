const express = require("express");
const app = express();
    
app.use("/random",(req, res, next) => {
    console.log("I am only for random");
    next();
});

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    res.send( "ACCESS DENIED!");
};

app.get("/wrong", (req, res) => {
    abcd = abcd;
});

//app.use((err, req, res, next) => {
    //console.log("------- ERROR2 Middleware  ----------");
   // next(err);
//});



app.get("/api", checkToken,  (req, res) => {
    res.send("data");
});


app.get("/" , (req, res) => {
    res.send("Hi , I am root.");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

//404

//app.use((req, res) => {
   // res.status(404).send("page not found!");
//});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});