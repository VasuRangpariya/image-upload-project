const connection = require("../database/connection");
const util = require("util");
const Login = async (req, res, next) => {
  const query = util.promisify(connection.query).bind(connection);
  try {
    const { luser, lpass } = req.body;
    console.log(req.body);
    if (luser != "" && lpass != "") {
      const data = await query(
        `select * from ${
          process.env.USER_TABLE_NAME
        } where Name = '${luser.trim()}' and Password = '${lpass.trim()}'`
      );
      if (data.length != 0) {
        res.status(200).json({
          success: true,
          message: "Login Successfully",
          info: data,
        });
      } else {
        res.status(200).json({
          success: false,
          message: process.env.LOGIN_ERROR,
        });
      }
    } else {
      res.status(200).json({
        success: false,
        message: process.env.DATA_ERROR,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: process.env.SERVER_ERROR,
    });
  }
};

module.exports = { Login };
