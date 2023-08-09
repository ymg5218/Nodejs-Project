const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("익스프레스로 라우터 리팩토링 하기");
});

app.get("/", (_,res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req,res){
    const user = url.parse(req.url, true).query;

    res.json(`[User] name : ${user.name} || age : ${user.age}`);
}

function feed(_, res){
    res.json(`<h1>Hello Express - feed response</h1>`);
}