const conn = require("../database/connection");
const express = require("express");
const { Register } = require("../controller/Register");
const API = express.Router();

API.post("/register", Register);
module.exports = API;
