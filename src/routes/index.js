const express = require("express");
const router = express.Router();
const libraryController = require("../controllers/libraryController");
const photosController = require("../controllers/photosController");
// [GET,DEL,POST] : LIBRARY
router.post("/library", libraryController.createData);
router.get("/library", libraryController.getLibrary);
router.delete("/library/:id", libraryController.delLibrary);
// [GET,DEL,POST] : PHOTOS

router.post("/photos", photosController.createPhoto);
router.get("/photos", photosController.getPhotos);
router.delete("/photos/:id", photosController.delPhotos);

module.exports = router;
