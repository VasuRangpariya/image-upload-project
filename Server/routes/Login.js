const express = require("express");
const { Login } = require("../controller/Login");
const API = express.Router();

API.post("/login", Login);
module.exports = API;
