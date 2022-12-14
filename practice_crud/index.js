const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())
mongoose.connect(`mongodb://localhost:27017/democrud`)
.catch((err)=> console.log(err))

const postSchema = mongoose.Schema({
    title:String,
    description: String
})

const Post = mongoose.model("crudpost", postSchema);

app.get("/",(req,res)=>{
    res.send("hello sahid")
})


app.post('/create', (req,res)=>{
    Post.create({
title: req.body.title,
description: req.body.description
    })
    .then((doc)=> console.log(doc))
    .catch((err)=> console.log(err))
})


app.get("/posts", (req, res)=>{
Post.find()
.then((item)=> res.json(item))
.catch((err)=> console.log(err))
})
app.put("/update/:id", (req,res)=>{
    Post.findByIdAndUpdate(
        {_id: req.params.id},
        {
            title:req.body.title,
            description: req.body.description
        }
    )
    .then((doc)=> console.log(doc))
    .catch((err)=> console.log(err))
})

app.delete("/delete/:id",(req,res)=>{
Post.findByIdAndDelete({_id: req.params.id})
.then((doc)=> console.log(doc))
.catch((err)=> console.log(err))
})
app.listen(PORT,()=>{
    console.log(`server running at port${PORT}`);
})