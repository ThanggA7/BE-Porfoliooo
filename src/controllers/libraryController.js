const Library = require("../models/library");

exports.createData = async (req, res) => {
  try {
    const { image, title, desc, link } = req.body;

    const newLibrary = new Library({
      image,
      title,
      desc,
      link,
    });

    const saveLibrary = await newLibrary.save();
    res.status(200).json(saveLibrary);
  } catch (error) {
    res.status(500).json({
      message: "Không thể thêm được vào database !",
    });
  }
};

exports.getLibrary = async (req, res) => {
  try {
    const libraries = await Library.find();
    res.json(libraries);
  } catch (error) {}
};

exports.delLibrary = async (req, res) => {
  try {
    const delLibraries = await Library.findByIdAndDelete(req.params.id);
    if (!delLibraries) return res.json({ message: "Vui lòng thêm ID !" });
    res.json(delLibraries);
  } catch (error) {}
};
