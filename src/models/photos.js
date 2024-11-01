const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  thumnail: { type: String, require: true },
  title: { type: String, require: true },
  desc: { type: String, require: true },
  images: [{ type: String, require: true }],
});

const Photos = mongoose.model("Photo", PhotoSchema);

module.exports = Photos;
