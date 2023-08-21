'use strict';

var __decorate = this && this["__decorate"] || function (_0x4599ca, _0x50f512, _0x147257, _0x129e4f) {
  var _0x1b89f3 = arguments["length"],
      _0xdcb8d6 = _0x1b89f3 < 3 ? _0x50f512 : _0x129e4f === null ? _0x129e4f = Object['getOwnPropertyDescriptor'](_0x50f512, _0x147257) : _0x129e4f,
      _0x5911ca;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0xdcb8d6 = Reflect["decorate"](_0x4599ca, _0x50f512, _0x147257, _0x129e4f);
  } else {
    for (var _0x359564 = _0x4599ca["length"] - 1; _0x359564 >= 0; _0x359564--) {
      if (_0x5911ca = _0x4599ca[_0x359564]) {
        _0xdcb8d6 = (_0x1b89f3 < 3 ? _0x5911ca(_0xdcb8d6) : _0x1b89f3 > 3 ? _0x5911ca(_0x50f512, _0x147257, _0xdcb8d6) : _0x5911ca(_0x50f512, _0x147257)) || _0xdcb8d6;
      }
    }
  }

  _0x1b89f3 > 3 && _0xdcb8d6 && Object["defineProperty"](_0x50f512, _0x147257, _0xdcb8d6);
  return _0xdcb8d6;
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["XMLMiddleware"] = void 0;

const common_1 = require("@nestjs/common"),
      bodyParser = require("body-parser"),
      bodyParserMiddleware = bodyParser['text']({
  'type': "application/xml"
});

let XMLMiddleware = class XMLMiddleware {
  ["use"](_0x4f3e98, _0x55ca0d, _0x27cf95) {
    bodyParserMiddleware(_0x4f3e98, _0x55ca0d, _0x27cf95);
  }

};
XMLMiddleware = __decorate([(0, common_1['Injectable'])()], XMLMiddleware);
exports["XMLMiddleware"] = XMLMiddleware;