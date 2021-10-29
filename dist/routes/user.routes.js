"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _controllers = require("../controllers");

var router = (0, _express.Router)();
router.post('/api/login', _controllers.UserController.logIn);
router.get('/profile');
var _default = router;
exports.default = _default;