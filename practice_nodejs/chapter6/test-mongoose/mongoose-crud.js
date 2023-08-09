const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./person-model");

mongoose.set("strictQuery", false);

const app = express();
app.use(bodyParser.json());
app.listen(3000, async () =>{
    console.log("Server started!");
    const mongodbUri = "mongodb+srv://yeommingyu0106:aowlrrkawk99@cluster0.tmqnpye.mongodb.net/test?retryWrites=true&w=majority";

    mongoose
        .connect(mongodbUri, {useNewUrlParser : true})
        .then(console.log("Connected to MongoDB"));
});

app.get("/person", async (req,res) => {
    const person = await Person.find({});
    res.send(person);
});

app.get("person/:email", async (req,res) => {
    const person = await Person.findOne({ email : req.params.eamil});
    res.send(person);
});

app.post("person", async (req,res) => {
    const person = new Person(req,body);
    await person.save();
    res.send(person);
});

app.put("/person/:email", async (req,res) => {
    const person = await Person.findOneAndUpdate(
        { email : req.params.email},
        { $set : req.body },
        { new : true}
    );
    console.log(person);
    res.send(person);
});

app.delete("/person/:email", async (req,res) => {
    await Person.deleteMany({ email : req.params.email});
    res.send({success : true});
});