const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    const a = req.query.a;
    res.send(a);
})

app.listen(3000);