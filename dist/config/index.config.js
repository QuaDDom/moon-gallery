"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  BucketName: process.env.BUCKET_NAME || '',
  Endpoint: process.env.ENDPOINT || ''
};
exports.default = _default;