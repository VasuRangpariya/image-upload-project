const connection = require("../database/connection");
const util = require("util");
const ImageList = async (req, res, next) => {
  const query = util.promisify(connection.query).bind(connection);
  try {
    const data = await query(
      `SELECT * FROM ${process.env.IMAGE_TABLE_NAME} INNER JOIN users on imagelist.ContributerID =users.ID`
    );
    if (data.length != 0) {
      res.status(200).json({
        success: true,
        message: "Image List Fetched Successfully",
        info: data,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "No Data Found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

const ImageCountIcrement = async (req, res, next) => {
  const query = util.promisify(connection.query).bind(connection);
  console.log(req.body);
  try {
    const data = await query(
      `update imageList set Downloads = Downloads+1 where imageID = ${req.body.ImageID}`
    );
    if (data) {
      res.status(200).json({
        success: true,
        message: "Image Count Incremented Successfully",
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Update Failed ",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

module.exports = { ImageList, ImageCountIcrement };
