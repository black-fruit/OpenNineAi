'use strict';

var __decorate = this && this["__decorate"] || function (_0x503f95, _0x1ab3bd, _0x2c3bb2, _0x531f20) {
  var _0xd8c437 = arguments["length"],
      _0x2f365d = _0xd8c437 < 3 ? _0x1ab3bd : _0x531f20 === null ? _0x531f20 = Object["getOwnPropertyDescriptor"](_0x1ab3bd, _0x2c3bb2) : _0x531f20,
      _0x5d9311;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x2f365d = Reflect["decorate"](_0x503f95, _0x1ab3bd, _0x2c3bb2, _0x531f20);
  } else {
    for (var _0x38559c = _0x503f95["length"] - 1; _0x38559c >= 0; _0x38559c--) {
      if (_0x5d9311 = _0x503f95[_0x38559c]) {
        _0x2f365d = (_0xd8c437 < 3 ? _0x5d9311(_0x2f365d) : _0xd8c437 > 3 ? _0x5d9311(_0x1ab3bd, _0x2c3bb2, _0x2f365d) : _0x5d9311(_0x1ab3bd, _0x2c3bb2)) || _0x2f365d;
      }
    }
  }

  _0xd8c437 > 3 && _0x2f365d && Object["defineProperty"](_0x1ab3bd, _0x2c3bb2, _0x2f365d);
  return _0x2f365d;
},
    __metadata = this && this["__metadata"] || function (_0x5223b1, _0x42cc12) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x5223b1, _0x42cc12);
  }
},
    __param = this && this["__param"] || function (_0x177d0a, _0x5bd634) {
  return function (_0x47ea4e, _0xf4e699) {
    _0x5bd634(_0x47ea4e, _0xf4e699, _0x177d0a);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["DrawController"] = void 0;

const draw_service_1 = require("./draw.service"),
      common_1 = require("@nestjs/common"),
      swagger_1 = require('@nestjs/swagger'),
      jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard"),
      chatDraw_dto_1 = require("./dto/chatDraw.dto");

let DrawController = class DrawController {
  constructor(_0x28e24e) {
    this["drawService"] = _0x28e24e;
  }

  ["getEngines"]() {
    return this["drawService"]["getEngines"]();
  }

  ["textToImage"](_0x1c794a) {
    return this["drawService"]["drawTextToImage"](_0x1c794a);
  }

};

__decorate([(0, common_1['Get'])("engines"), (0, swagger_1["ApiOperation"])({
  'summary': "获取stable Diffusion 模型"
}), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], DrawController["prototype"], "getEngines", null);

__decorate([(0, common_1["Post"])("drawTextToImage"), (0, swagger_1['ApiOperation'])({
  'summary': "stable Diffusion绘画"
}), (0, common_1['UseGuards'])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [chatDraw_dto_1["StableDrawDto"]]), __metadata('design:returntype', void 0)], DrawController["prototype"], "textToImage", null);

DrawController = __decorate([(0, swagger_1['ApiTags'])("draw"), (0, common_1["Controller"])("draw"), __metadata("design:paramtypes", [draw_service_1['DrawService']])], DrawController);
exports["DrawController"] = DrawController;