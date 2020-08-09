const express = require('express');
const path= require('path');
const app = express();

app.use(express.static(path.join(__dirname,'/build')));
app.get('*',function(req,res,next){
    res.sendFile(path.join(__dirname,'/build/index.html'))
})
app.listen(process.env.PORT||9090,function(err,done){
    console.log('listening at port 4000')
})