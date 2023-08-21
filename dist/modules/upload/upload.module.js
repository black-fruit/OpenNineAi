'use strict';

var __decorate = this && this["__decorate"] || function (_0x5cf84f, _0x1b3b2c, _0x1fc3cd, _0x169382) {
  var _0x43cc45 = arguments['length'],
      _0x3c0315 = _0x43cc45 < 3 ? _0x1b3b2c : _0x169382 === null ? _0x169382 = Object["getOwnPropertyDescriptor"](_0x1b3b2c, _0x1fc3cd) : _0x169382,
      _0x3ec67f;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x3c0315 = Reflect["decorate"](_0x5cf84f, _0x1b3b2c, _0x1fc3cd, _0x169382);
  } else {
    for (var _0x581c0e = _0x5cf84f["length"] - 1; _0x581c0e >= 0; _0x581c0e--) {
      if (_0x3ec67f = _0x5cf84f[_0x581c0e]) {
        _0x3c0315 = (_0x43cc45 < 3 ? _0x3ec67f(_0x3c0315) : _0x43cc45 > 3 ? _0x3ec67f(_0x1b3b2c, _0x1fc3cd, _0x3c0315) : _0x3ec67f(_0x1b3b2c, _0x1fc3cd)) || _0x3c0315;
      }
    }
  }

  _0x43cc45 > 3 && _0x3c0315 && Object['defineProperty'](_0x1b3b2c, _0x1fc3cd, _0x3c0315);
  return _0x3c0315;
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports['UploadModule'] = void 0;

const common_1 = require("@nestjs/common"),
      upload_service_1 = require("./upload.service"),
      upload_controller_1 = require('./upload.controller');

let UploadModule = class UploadModule {};
UploadModule = __decorate([(0, common_1["Global"])(), (0, common_1["Module"])({
  'providers': [upload_service_1["UploadService"]],
  'controllers': [upload_controller_1["UploadController"]],
  'exports': [upload_service_1["UploadService"]]
})], UploadModule);
exports["UploadModule"] = UploadModule;