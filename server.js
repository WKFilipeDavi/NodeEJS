const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    const items = [
        {
            title: "D",
            message: "Developer"
        },

        {
            title: "E",
            message: "Estagio"
        },

        {
            title: "M",
            message: "Monkey Developer"
        },

        {
            title: "A",
            message: "Artist"
        }
    ];

    res.render("pages/index", {
        texts: items,
    });
});

app.get("/sobre", function(req,res){
    res.render("pages/about");
});

app.listen(8080);
console.log('rodando');