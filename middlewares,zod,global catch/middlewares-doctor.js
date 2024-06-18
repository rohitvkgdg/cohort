const express = require("express");
const app = express();

//Dumb way of doing checks

// app.get("/health-checkup", (req, res) => {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidney = req.query.kidney;

//   if (kidney != 1 || kidney != 2) {
//     res.json({ msg: "Somethings not right with the kidneys" });
//     return;
//   }

//   if (username != "rohit" || password != "pass") {
//     res.json({ msg: "Somethings not right with the credentials" });
//     return;
//   }

//   res.json({
//     msg: "Your kidneys is fine",
//   });
// });

//Using middlewares
function userMiddleware(req, res, next) {
  //next is an inbuilt function to call the next callback function
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "rohit" || password != "pass") {
    res.status(403).send("Invalid inputs");
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  //next is an inbuilt function to call the next callback function
  const kidney = req.query.kidney;
  if (kidney != 1 && kidney != 2) {
    res.status(403).send("Invalid inputs");
  } else {
    next();
  }
}

app.post("/kidney-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your kidney is healthy");
});

app.get("/heart-checkup", userMiddleware, (req, res) => {
  res.send("Your heart is healthy");
});
//If there are multiple routes which use same validation for username,pass and no of kidneys, the code becomes redundant, hence we use middlewares as callbacks



app.listen(3050);