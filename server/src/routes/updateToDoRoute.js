const toDoModel = require('../models/toDoModel');

module.exports = async (req, res) => {
    const {id} = req.params;
    const todo = await toDoModel.findById(id);
    todo.completed = req.body.completed;
    todo.text = req.body.text;
    await todo.save();
    res.json(todo);
}