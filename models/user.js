const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
    trim: true,
    cast: [false, "Enter a valid input"],
  },
  age: {
    type: Number,
    required: [true, "age must be provided"],
  },
});
module.exports = mongoose.model("User", userSchema);
