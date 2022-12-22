const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = 8000;
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const connect = ()=>{
    mongoose.connect(`mongodb://localhost:27017/democrud1`)
.then((res) => console.log(`mongodb connected`))
.catch((err) => {
    console.log(`mongodb not connected`, err);
});
}

const PostSchema = mongoose.Schema({
    title: String,
    description:String
})

const Post = mongoose.model("crudemo", PostSchema);

app.get('/get', (req,res)=>{
   Post.find()
   .then((data)=>res.json(data))
   .catch((err)=> console.log(err))
})
app.post('/post',(req,res)=>{
    Post.create(
        {
            title: req.body.title,
            description: req.body.description
        }
    )
    .then((doc)=> console.log(doc))
    .catch((err)=> console.log(err))
})

app.delete('/delete/:id',(req,res)=>{
    Post.findByIdAndDelete({_id:req.params.id})
    .then((doc)=>console.log(doc))
    .then((err)=>console.log(err))
})

app.put('/put/:id',(req,res)=>{
    Post.findByIdAndUpdate({_id:req.params.id},
        {
            title:req.body.title,
            description:req.body.description
        })
        .then((doc)=> console.log("put working"))
        .catch((err)=>console.log(err))
})
connect();
app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})