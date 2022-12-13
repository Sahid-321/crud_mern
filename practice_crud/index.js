const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`server running at port${PORT}`);
})