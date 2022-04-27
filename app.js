const express = require("express");
const app = express();
require("./db/connect");
const Query = require("./models/queries");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static("public"));
app.use(express.static("views"));
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("partials");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/query", (req,res) => {
    res.render("index");
});

app.get("/login", (req,res) => {
    res.render("login");
});

app.listen(port, function(){
    console.log(`Server is running at port ${port}`);
});