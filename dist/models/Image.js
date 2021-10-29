"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var ImageSchema = new _mongoose.Schema({
  key: String,
  title: {
    type: String,
    required: true,
    maxlength: 40,
    minlength: 5
  },
  url: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
});

var _default = (0, _mongoose.model)('Image', ImageSchema);

exports.default = _default;