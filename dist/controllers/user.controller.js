"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = require("../models/User");

var UserController = {
  logIn: function logIn(req, res) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var user, savedUser, token;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(req.body.username || req.body.email, req.body.password)) {
                _context.next = 10;
                break;
              }

              _context.next = 3;
              return new _User.User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
              });

            case 3:
              user = _context.sent;
              _context.next = 6;
              return user.encyptPassword(user.password);

            case 6:
              user.password = _context.sent;
              savedUser = user.save();
              token = _jsonwebtoken.default.sign({
                _id: savedUser._id
              }, process.env.JWT_SECRET || "token", {
                expiresIn: 60 * 60 * 24
              });
              return _context.abrupt("return", res.header("auth-token", token).status(200).json("Received"));

            case 10:
              return _context.abrupt("return", res.status(200).json({
                statusCode: 400,
                message: "Email or username is wrong"
              }));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
exports.UserController = UserController;