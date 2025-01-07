const toDoModel = require('../models/toDoModel');

module.exports = async (req, res) => {
    const {text} = req.body;
    console.log(text);
    const todo = new toDoModel ({
        text,
    })
    const newToDo = await todo.save();
    res.json(newToDo);
};