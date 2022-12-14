const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://localhost:27017/crud`,()=>{
console.log("mongo db connected");
})
.catch((err)=> console.log(err))

//Schema

const postSchema = mongoose.Schema({
    title: String,
    description: String,
})

const Post = mongoose.model('post', postSchema);


app.get('/', (req,res)=>{
    res.send('server working sahid')
})

app.post('/create', (req,res)=>{
    Post.create({
title: req.body.title,
description: req.body.description
    })
    .then((doc)=> console.log(doc))
    .catch((err)=> console.log(err))
})


app.get('/posts', (req,res)=>{
    Post.find()
    .then((item)=> res.json(item))
    .catch((err)=> console.log(err))
})

app.delete("/delete/:id", (req,res)=>{
    Post.findByIdAndDelete({_id: req.params.id})
    .then((doc)=> console.log(doc))
    .catch((err)=> console.log(err))
})

app.put("/update/:id", (req, res) => {
    Post.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        description: req.body.description,
      }
    )
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });
app.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}`);
})