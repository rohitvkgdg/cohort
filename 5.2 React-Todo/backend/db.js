const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Ft4RPqZquF0QWjXS@cluster0.q3bfyer.mongodb.net/todos")

const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',TodoSchema);

module.exports = {
    todo
}