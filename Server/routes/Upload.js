const conn = require("../database/connection");
const express = require("express");
const multer = require("multer");
const util = require("util");
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.FILE_UPLOAD_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: fileStorage });

const API = express.Router();

API.post("/upload", upload.single("Image"), async (req, res, next) => {
  const query = util.promisify(conn.query).bind(conn);
  const ImagePath = req.file.filename;
  const ImageID = Date.now();
  const { Downloads, Name, Category, ContributerID } = req.body;
  try {
    const response = await query(
      `insert into ${process.env.IMAGE_TABLE_NAME}(ImageID, ImageName, Category,Downloads, ContributerID, ImagePath) values('${ImageID}','${Name}','${Category}','${Downloads}','${ContributerID}','${ImagePath}')`
    );
    res.status(200).json({
      success: true,
      message: "Image Uploaded Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});
module.exports = API;
