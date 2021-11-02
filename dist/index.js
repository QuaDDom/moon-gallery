"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = require("dotenv");

var _express = _interopRequireDefault(require("express"));

require("./db");

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _gallery = _interopRequireDefault(require("./routes/gallery.routes"));

var _img = _interopRequireDefault(require("./routes/img.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

(0, _dotenv.config)();
var app = (0, _express.default)();

if (process.env.NODE_ENV === 'production') {
  app.set(_express.default.static('../build/static'));
}

app.set('port', process.env.SERVER_PORT || 4000);
app.use((0, _expressFileupload.default)({
  tempFileDir: '/temp'
}));
app.use(_gallery.default);
app.use(_img.default);
app.use(_user.default);
app.listen(app.get('port'));
console.log('Server in port', app.get('port'));