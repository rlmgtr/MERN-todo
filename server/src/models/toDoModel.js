const mongoose = require ('mongoose');

const toDoSchema = new mongoose.Schema({
text: {
type: String, 
},
completed: {
    type: Boolean,
}
});

const toDoModel = mongoose.model('toDo', toDoSchema);

module.exports = toDoModel;