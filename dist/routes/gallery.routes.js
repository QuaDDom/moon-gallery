"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  return res.json({
    msg: "Welcome to the Moon Gallery"
  });
});
var _default = router;
exports.default = _default;