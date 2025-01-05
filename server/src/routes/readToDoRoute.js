const toDoModel = require('../models/toDoModel');

module.exports = async (req, res) => {
    const todo = await toDoModel.find();
    res.json(todo);
}