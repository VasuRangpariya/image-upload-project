const express = require("express");
const { ImageList, ImageCountIcrement } = require("../controller/ImageList");
const API = express.Router();

API.get("/imageList", ImageList);
API.post("/imageCount", ImageCountIcrement);

module.exports = API;
