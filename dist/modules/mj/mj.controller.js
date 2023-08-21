'use strict';

var __decorate = this && this["__decorate"] || function (_0x515582, _0xb479a8, _0x2ba952, _0x5a0cec) {
  var _0x1cde58 = arguments['length'],
      _0x2de9c5 = _0x1cde58 < 3 ? _0xb479a8 : _0x5a0cec === null ? _0x5a0cec = Object["getOwnPropertyDescriptor"](_0xb479a8, _0x2ba952) : _0x5a0cec,
      _0x6a1040;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x2de9c5 = Reflect["decorate"](_0x515582, _0xb479a8, _0x2ba952, _0x5a0cec);
  } else {
    for (var _0x1d9395 = _0x515582['length'] - 1; _0x1d9395 >= 0; _0x1d9395--) {
      if (_0x6a1040 = _0x515582[_0x1d9395]) {
        _0x2de9c5 = (_0x1cde58 < 3 ? _0x6a1040(_0x2de9c5) : _0x1cde58 > 3 ? _0x6a1040(_0xb479a8, _0x2ba952, _0x2de9c5) : _0x6a1040(_0xb479a8, _0x2ba952)) || _0x2de9c5;
      }
    }
  }

  _0x1cde58 > 3 && _0x2de9c5 && Object["defineProperty"](_0xb479a8, _0x2ba952, _0x2de9c5);
  return _0x2de9c5;
},
    __metadata = this && this["__metadata"] || function (_0x1ac761, _0x3adbf0) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x1ac761, _0x3adbf0);
  }
},
    __param = this && this["__param"] || function (_0x5494ff, _0x1ee68f) {
  return function (_0x49916c, _0x46e788) {
    _0x1ee68f(_0x49916c, _0x46e788, _0x5494ff);
  };
};

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["MjController"] = void 0;

const common_1 = require('@nestjs/common'),
      mj_service_1 = require("./mj.service"),
      swagger_1 = require('@nestjs/swagger'),
      mjDraw_dto_1 = require("./dto/mjDraw.dto"),
      mjEnlargeImg_dto_1 = require("./dto/mjEnlargeImg.dto"),
      jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard"),
      mjTransform_dto_1 = require("./dto/mjTransform.dto");

let MjController = class MjController {
  constructor(_0x58926) {
    this["mjService"] = _0x58926;
  }

  ["draw"](_0x56bcf5, _0x3faa7c) {
    return this["mjService"]['draw'](_0x56bcf5, _0x3faa7c);
  }

  ["upscaleSingleImg"](_0x146fe9, _0x2c4b74) {
    return this['mjService']["upscaleSingleImg"](_0x146fe9, _0x2c4b74);
  }

  ['variationSingleImg'](_0x10f3bf, _0x439c14) {
    return this["mjService"]["variationSingleImg"](_0x10f3bf, _0x439c14);
  }

};

__decorate([(0, common_1["Post"])("draw"), (0, swagger_1["ApiOperation"])({
  'summary': '绘制mj图片'
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [mjDraw_dto_1["MjDrawDto"], Object]), __metadata("design:returntype", void 0)], MjController["prototype"], 'draw', null);

__decorate([(0, common_1["Post"])("upscaleSingleImg"), (0, swagger_1["ApiOperation"])({
  'summary': '放大单张图片'
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1['Req'])()), __metadata('design:type', Function), __metadata("design:paramtypes", [mjEnlargeImg_dto_1["MjEnlargeImgDto"], Object]), __metadata("design:returntype", void 0)], MjController["prototype"], "upscaleSingleImg", null);

__decorate([(0, common_1['Post'])('variationSingleImg'), (0, swagger_1["ApiOperation"])({
  'summary': "变体单张图片"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1['JwtAuthGuard']), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1['Body'])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [mjTransform_dto_1["MjTransformImgDto"], Object]), __metadata('design:returntype', void 0)], MjController["prototype"], 'variationSingleImg', null);

MjController = __decorate([(0, swagger_1['ApiTags'])('mj'), (0, common_1['Controller'])('mj'), __metadata('design:paramtypes', [mj_service_1["MjService"]])], MjController);
exports["MjController"] = MjController;