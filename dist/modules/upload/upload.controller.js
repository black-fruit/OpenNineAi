'use strict';

var __decorate = this && this["__decorate"] || function (_0x2bed51, _0xaec7c6, _0x11b6a3, _0x457756) {
  var _0xe2f35c = arguments["length"],
      _0x244bdb = _0xe2f35c < 3 ? _0xaec7c6 : _0x457756 === null ? _0x457756 = Object["getOwnPropertyDescriptor"](_0xaec7c6, _0x11b6a3) : _0x457756,
      _0x22a444;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x244bdb = Reflect["decorate"](_0x2bed51, _0xaec7c6, _0x11b6a3, _0x457756);
  } else {
    for (var _0xd7a13a = _0x2bed51['length'] - 1; _0xd7a13a >= 0; _0xd7a13a--) {
      if (_0x22a444 = _0x2bed51[_0xd7a13a]) {
        _0x244bdb = (_0xe2f35c < 3 ? _0x22a444(_0x244bdb) : _0xe2f35c > 3 ? _0x22a444(_0xaec7c6, _0x11b6a3, _0x244bdb) : _0x22a444(_0xaec7c6, _0x11b6a3)) || _0x244bdb;
      }
    }
  }

  _0xe2f35c > 3 && _0x244bdb && Object["defineProperty"](_0xaec7c6, _0x11b6a3, _0x244bdb);
  return _0x244bdb;
},
    __metadata = this && this['__metadata'] || function (_0x401f07, _0x412cfe) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x401f07, _0x412cfe);
  }
},
    __param = this && this["__param"] || function (_0xdc3959, _0x17a8ab) {
  return function (_0x1c9e0f, _0x14ad38) {
    _0x17a8ab(_0x1c9e0f, _0x14ad38, _0xdc3959);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['UploadController'] = void 0;

const upload_service_1 = require("./upload.service"),
      common_1 = require("@nestjs/common"),
      swagger_1 = require('@nestjs/swagger'),
      platform_express_1 = require("@nestjs/platform-express");

let UploadController = class UploadController {
  constructor(_0x2daba1) {
    this['uploadService'] = _0x2daba1;
  }

  async ["uploadFile"](_0x40750e) {
    return this['uploadService']["uploadFile"](_0x40750e);
  }

  async ["test"]() {
    return this["uploadService"]["test"]();
  }

};

__decorate([(0, common_1['Post'])("file"), (0, swagger_1["ApiOperation"])({
  'summary': '上传文件'
}), (0, common_1["UseInterceptors"])((0, platform_express_1['FileInterceptor'])("file")), __param(0, (0, common_1['UploadedFile'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], UploadController['prototype'], "uploadFile", null);

__decorate([(0, common_1["Get"])("test"), (0, swagger_1['ApiOperation'])({
  'summary': '测试'
}), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Promise)], UploadController['prototype'], "test", null);

UploadController = __decorate([(0, swagger_1["ApiTags"])("upload"), (0, common_1["Controller"])("upload"), __metadata('design:paramtypes', [upload_service_1['UploadService']])], UploadController);
exports['UploadController'] = UploadController;