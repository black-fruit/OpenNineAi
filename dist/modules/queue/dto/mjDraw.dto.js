'use strict';

var __decorate = this && this["__decorate"] || function (_0x37d6b1, _0xb9c343, _0x5044ce, _0x56ccad) {
  var _0x43afe9 = arguments["length"],
      _0x4509a7 = _0x43afe9 < 3 ? _0xb9c343 : _0x56ccad === null ? _0x56ccad = Object["getOwnPropertyDescriptor"](_0xb9c343, _0x5044ce) : _0x56ccad,
      _0x16d75f;

  if (typeof Reflect === 'object' && typeof Reflect['decorate'] === "function") {
    _0x4509a7 = Reflect["decorate"](_0x37d6b1, _0xb9c343, _0x5044ce, _0x56ccad);
  } else {
    for (var _0x5c8a78 = _0x37d6b1["length"] - 1; _0x5c8a78 >= 0; _0x5c8a78--) {
      if (_0x16d75f = _0x37d6b1[_0x5c8a78]) {
        _0x4509a7 = (_0x43afe9 < 3 ? _0x16d75f(_0x4509a7) : _0x43afe9 > 3 ? _0x16d75f(_0xb9c343, _0x5044ce, _0x4509a7) : _0x16d75f(_0xb9c343, _0x5044ce)) || _0x4509a7;
      }
    }
  }

  _0x43afe9 > 3 && _0x4509a7 && Object["defineProperty"](_0xb9c343, _0x5044ce, _0x4509a7);
  return _0x4509a7;
},
    __metadata = this && this["__metadata"] || function (_0x3607a6, _0x231e19) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x3607a6, _0x231e19);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['MjDrawDto'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class MjDrawDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "close-up polaroid photo, of a little joyful cute panda, in the forest, sun rays coming, photographic, sharp focus, depth of field, soft lighting, heigh quality, 24mm, Nikon Z FX",
  'description': "绘画提示词！",
  'required': true
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], MjDrawDto["prototype"], "prompt", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "--ar 16:9 --c 0",
  'description': '除了prompt的额外参数'
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], MjDrawDto["prototype"], "extraParam", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "https://xsdasdasd.com",
  'description': "垫图图片地址"
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', String)], MjDrawDto["prototype"], 'imgUrl', void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "绘画动作 绘图、放大、变换、图生图"
}), (0, class_validator_1['IsOptional'])(), __metadata('design:type', Number)], MjDrawDto['prototype'], "action", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': '变体或者放大的序号'
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], MjDrawDto['prototype'], "orderId", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "绘画的DBID"
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], MjDrawDto["prototype"], "drawId", void 0);

exports["MjDrawDto"] = MjDrawDto;