"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENV_VARIABLE = ENV_VARIABLE;

function ENV_VARIABLE(ENVNAME, envReturn) {
  var jwt = process.env[ENVNAME];
  if (!jwt) return envReturn;
  return jwt;
}