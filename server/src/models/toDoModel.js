const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema(
    {
      text: {
        type: String,
        required: true,
      },
      completed: {
        type: Boolean,
        default: false, // Set a default value
      },
    },
    { versionKey: false } // Optional: Disable the __v field
  );
  