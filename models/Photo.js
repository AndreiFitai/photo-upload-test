const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictureSchema = new Schema(
  {
    name: String,
    picture: {
      imgPath: String,
      imgName: String
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Picture = mongoose.model("Picture", pictureSchema);
module.exports = Picture;
