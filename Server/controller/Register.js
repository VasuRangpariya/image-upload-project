const connection = require("../database/connection");
const util = require("util");
const Register = async (req, res, next) => {
  const query = util.promisify(connection.query).bind(connection);
  try {
    const { username, password, email, userType } = req.body;
    if (username != "" && password != "") {
      const data = await query(
        `insert into ${
          process.env.USER_TABLE_NAME
        } set Name='${username.trim()}',Email='${email.trim()}',Password='${password.trim()}',isContributer='${userType}'`
      );
      console.log(data.affectedRows);
      if (data.affectedRows) {
        res.status(200).json({
          success: true,
          message: "User Created Successfully",
        });
      } else {
        res.status(200).json({
          success: false,
          message: "Failed To Create User",
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

module.exports = { Register };
