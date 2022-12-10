const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;

app.get('/', (req,res)=>{
    res.send('server working sahid')
})

app.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}`);
})