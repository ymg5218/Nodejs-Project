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
    const userInfo = url.parse(req.url, true).query;
    res.end(`[user] name : ${userInfo.name}, age : ${userInfo.age}`);
};

const feed = (req,res) => {
    res.end(`<h1>Hello Louter2!</h1>`)
};

const notFound = (req,res) => {
    res.statusCode = 404;
    res.end("404 : Page not found!");
}