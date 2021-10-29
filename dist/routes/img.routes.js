"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _index = _interopRequireDefault(require("../config/index.config"));

var _Image = _interopRequireDefault(require("../models/Image"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var router = (0, _express.Router)();
var spacesEndpoint = new _awsSdk.default.Endpoint(_index.default.Endpoint);
var s3 = new _awsSdk.default.S3({
  endpoint: spacesEndpoint
});
router.get('/api/images', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var images;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Image.default.find();

          case 2:
            images = _context.sent;
            return _context.abrupt("return", res.json(images));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/api/images/:id', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var image;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Image.default.findById(req.params.id);

          case 2:
            image = _context2.sent;
            return _context2.abrupt("return", res.json(image));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.post('/api/images/upload', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var image, uploadObj, imageUrl, imageModel;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (req.files) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", res.json({
              msg: "No file found"
            }));

          case 2:
            image = req.files.file;
            _context3.prev = 3;
            _context3.next = 6;
            return s3.putObject({
              Bucket: _index.default.BucketName,
              Body: image.data,
              ACL: 'public-read',
              Key: image.name
            }).promise();

          case 6:
            uploadObj = _context3.sent;
            imageUrl = "https://".concat(_index.default.BucketName, ".").concat(_index.default.Endpoint, "/").concat(image.name);
            console.log(imageUrl);
            imageModel = new _Image.default({
              key: image.name,
              url: imageUrl,
              title: req.body.title
            });
            _context3.next = 12;
            return imageModel.save();

          case 12:
            return _context3.abrupt("return", res.json(imageModel));

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](3);
            console.log(_context3.t0);

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 15]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.delete('/api/images/:id', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var delImg;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Image.default.findByIdAndDelete(req.params.id);

          case 2:
            delImg = _context4.sent;
            _context4.next = 5;
            return s3.deleteObject({
              Bucket: _index.default.BucketName,
              Key: delImg.key
            }).promise();

          case 5:
            return _context4.abrupt("return", res.json(delImg));

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;