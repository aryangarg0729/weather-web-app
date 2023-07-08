const express = require('express');
const hbs = require("hbs");
const path = require("path");
const app = express();
const PORT = 8000;

const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));

app.set("view engine","hbs");
const templatePath = path.join(__dirname,"../templates/views");
app.set("views",templatePath);

const partialsPath = path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialsPath);

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.status(404).render("404Error",{
        errmessage:"Opps! page not found"
    });
})

app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`);
})