const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const PORT = 8080;

mongoose.connect(`mongodb://localhost:27017/democrud`)
.catch((err)=> console.log(err))

const postSchema = mongoose.Schema({
    title:String,
    description: String
})

const Post = mongoose.model("crudpost", postSchema);

app.post("/create", (req,res)=>{
    Post.create({
        title: req.body.title,
        description:req.body.description
    })
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))
})

app.listen(PORT,()=>{
    console.log(`server running at port${PORT}`);
})