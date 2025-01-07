const toDoModel = require('../models/toDoModel');

module.exports = async (req, res) => {
    const {id} = req.params;

    // Find the todo by its ID
    const todo = await toDoModel.findById(id);

    // Check if the todo exists
    if (!todo) {
        return res.status(404).json({ message: 'ToDo not found' });
    }

    // Delete the todo using deleteOne
    await todo.deleteOne();

    // Send a success response (204 No Content)
    res.status(204).send();
};
