const mongoose = require("mongoose");

const libraryShema = new mongoose.Schema({
  image: { type: String, require: true },
  title: { type: String, require: true },
  desc: { type: String, require: true },
  link: { type: String, require: true },
  createData: { type: Date, default: Date.now },
});

const Library = mongoose.model("Lybrary", libraryShema);

module.exports = Library;
