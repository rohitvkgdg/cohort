const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(parsedPayload.success){
        return;
    } else {
        res.status(400).send("Invalid inputs");
    }

    await todo.create({
        title: parsedPayload.title,
        description: parsedPayload.description,
        completed: false
    })

    res.status(201).send("Todo created successfully");
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.status(200).send(todos);
})

app.post("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(parsedPayload.success){
        return;
    } else {
        res.status(400).send("Invalid inputs");
    }
    await todo.update({
        _id: req.body._id
    },{
        completed: true
    })

    res.status(200).send("Todo updated successfully");
    
})