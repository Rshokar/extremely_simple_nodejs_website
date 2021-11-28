var express = require('express');
var app = express();

app.listen(3000, ()=>  {
    console.log('listening');
});

app.get('/',(req,res)=>  {
    res.send('hi');
});
