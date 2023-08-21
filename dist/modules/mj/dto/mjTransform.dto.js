'use strict';

var __decorate = this && this["__decorate"] || function (_0x5682e5, _0x4da785, _0x11f584, _0x2facb5) {
  var _0x496cba = arguments["length"],
      _0x2628de = _0x496cba < 3 ? _0x4da785 : _0x2facb5 === null ? _0x2facb5 = Object["getOwnPropertyDescriptor"](_0x4da785, _0x11f584) : _0x2facb5,
      _0x2e2e54;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x2628de = Reflect['decorate'](_0x5682e5, _0x4da785, _0x11f584, _0x2facb5);
  } else {
    for (var _0x51a33e = _0x5682e5["length"] - 1; _0x51a33e >= 0; _0x51a33e--) {
      if (_0x2e2e54 = _0x5682e5[_0x51a33e]) {
        _0x2628de = (_0x496cba < 3 ? _0x2e2e54(_0x2628de) : _0x496cba > 3 ? _0x2e2e54(_0x4da785, _0x11f584, _0x2628de) : _0x2e2e54(_0x4da785, _0x11f584)) || _0x2628de;
      }
    }
  }

  _0x496cba > 3 && _0x2628de && Object["defineProperty"](_0x4da785, _0x11f584, _0x2628de);
  return _0x2628de;
},
    __metadata = this && this["__metadata"] || function (_0x1cdd43, _0x5cc370) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect['metadata'](_0x1cdd43, _0x5cc370);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["MjTransformImgDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class MjTransformImgDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "1105361939590287360",
  'description': '当前大图的message_id、四张的这种才存在有效的！',
  'required': true
}), (0, class_validator_1['IsDefined'])({
  'message': '图片的message_id是必传的'
}), __metadata("design:type", String)], MjTransformImgDto['prototype'], "message_id", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "图片的orderId是必传的 表示放大图片的第几张！",
  'required': true
}), (0, class_validator_1["IsDefined"])({
  'message': "图片固体顺序id是必传的！"
}), __metadata("design:type", Number)], MjTransformImgDto["prototype"], "orderId", void 0);

exports['MjTransformImgDto'] = MjTransformImgDto;