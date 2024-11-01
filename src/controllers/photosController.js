const Photos = require("../models/photos");

exports.createPhoto = async (req, res) => {
  try {
    const { title, desc, thumnail, images } = req.body;
    const newPhotos = new Photos({
      title,
      desc,
      thumnail,
      images,
    });
    const savePhotos = await newPhotos.save();
    res.status(201).json(savePhotos);
  } catch (error) {
    res.status(500).json({ message: "Không tìm được thông tin !" });
  }
};

exports.getPhotos = async (req, res) => {
  try {
    const Gphotos = await Photos.find();
    res.json(Gphotos);
  } catch (error) {
    res.status(500).json({ message: "Không tìm được thông tin !" });
  }
};

exports.delPhotos = async (req, res) => {
  try {
    const delphotos = await Photos.findByIdAndDelete(req.params.id);
    if (!delphotos) return res.json({ error: "Vui lòng nhập ID !" });
    res.json(delphotos);
  } catch (error) {}
};
