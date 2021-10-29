"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var UserSchema = new _mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 15,
    minlength: 5,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 12
  }
});

var _default = (0, _mongoose.model)('User', UserSchema);

exports.default = _default;