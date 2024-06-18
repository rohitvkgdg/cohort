const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup",(req,res)=>{
    const kidneys = req.body.kidney;
    const kidneylength = kidneys.length;
    res.send("You have " + kidneylength + "no of kidneys");
})

// A middleware with 4 parameters, i.e which can handle errors and exceptions, also called as error-handling middlewares
app.use(function(err,req,res,next){
    res.status(403).send("Sorry somethings not right, we'll fix it soon");
  })

  app.listen(3000);