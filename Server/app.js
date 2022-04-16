const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const dotenv = require("dotenv").config();

app.use(cors());

app.use(express.json());
// LOGIN CONTROL START
const login = require("../Server/routes/Login");
app.use("/api/v1", login);
// LOGIN CONTROL END

// REGISTER CONTROL START
const register = require("../Server/routes/Register");
app.use("/api/v1", register);
// REGISTER CONTROL END

// UPLOAD CONTROL START
app.use("/api/v1", require("../Server/routes/Upload"));
// UPLOAD CONTROL END

// IMAGELIST CONTROL START
app.use("/api/v1", require("../Server/routes/ImageList"));
// IMAGELIST CONTROL END
module.exports = app;
