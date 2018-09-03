const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });
const Photo = require("../models/Photo");

/* GET home page */
router.get("/", (req, res, next) => {
  Photo.find({}).then(data => {
    console.log(data[0].name);
    res.render("index", { data });
  });
});

router.post("/", upload.single("photo"), (req, res, next) => {
  const { name } = req.body;
  const imgPath = req.file.path;
  const imgName = req.file.filename;
  new Photo({ name, picture: { imgPath, imgName } }).save().then(result => {
    res.render("index");
  });
});
module.exports = router;
