//If a middleware is to be called in every route we use app.use(middleware)
const express = require("express")
const app = express();
app.use(calculateRequests); //This middleware gets called for every route/request

let numberOfRequests = 0;
function calculateRequests(req, res, next) {    //Calculates the number of requests made to the server
    numberOfRequests++;
    if (numberOfRequests > 5) {
        res.status(429).send("Too many requests");
    } else {
        next();
    }
}

//app.use(express.json()) is used to get the request in post method from body in json format
app.use(express.json());
app.post("/", (req, res) => {
    const intro = req.body.intro;
    res.send(intro);
})

app.listen(3000);