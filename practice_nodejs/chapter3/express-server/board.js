const express = require("express");
const app = express();
let posts = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/test", (req,res) => {
    // res.json(posts);
    res.json('dgndk')
});

app.post("/test", (req,res) =>{
    res.json("테스트");
});

app.post("/posts", (req,res) =>{
    const { title, name, text } = req.body;
    posts.push({id : posts.length + 1, title, name, text, createdDt : Date()});
    res.json({ title, name, text });
});

app.delete("/posts/:id", (req,res) =>{
    const id = req.params.id;
    const filteredPosts = posts.filter((post) => post.id !== +id);
    const isLengthChanged = posts.length !== filteredPosts.length;
    posts = filteredPosts;
    if (isLengthChanged){
        res.json("OK");
        return;
    }
    res.json("NOT CHANGED");
});

app.listen(3000, () =>{
    console.log("welcome posts START!");
});