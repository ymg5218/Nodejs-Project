const http = require("http");
const url = require("url");
http
    .createServer((req,res) =>{
        const path = url.parse(req.url, true).pathname;
        res.setHeader("Content-Type", "text.html");

        if(path === "/user"){
            user(req,res);
        }else if(path === "/feed"){
            feed(req,res);
        }else{
            notFound(req,res);
        }
    })
    .listen("3000", () => console.log("라우터 만들어보기"));

const user = (req,res) => {
    res.end(`[user] name : mingyu, age : 26`);
};

const feed = (req,res) => {
    res.end(`<h2>Hello Louter2 ! </h2>`)
};

const notFound = (req,res) => {
    res.statusCode = 404;
    res.end("404 : Page not found!");
}