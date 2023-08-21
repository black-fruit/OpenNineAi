'use strict';

var __decorate = this && this["__decorate"] || function (_0x73600f, _0x342cff, _0x529fde, _0x43e233) {
  var _0x1ca240 = arguments["length"],
      _0x4edd3e = _0x1ca240 < 3 ? _0x342cff : _0x43e233 === null ? _0x43e233 = Object["getOwnPropertyDescriptor"](_0x342cff, _0x529fde) : _0x43e233,
      _0x384e17;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x4edd3e = Reflect["decorate"](_0x73600f, _0x342cff, _0x529fde, _0x43e233);
  } else {
    for (var _0x1be6c2 = _0x73600f['length'] - 1; _0x1be6c2 >= 0; _0x1be6c2--) {
      if (_0x384e17 = _0x73600f[_0x1be6c2]) {
        _0x4edd3e = (_0x1ca240 < 3 ? _0x384e17(_0x4edd3e) : _0x1ca240 > 3 ? _0x384e17(_0x342cff, _0x529fde, _0x4edd3e) : _0x384e17(_0x342cff, _0x529fde)) || _0x4edd3e;
      }
    }
  }

  _0x1ca240 > 3 && _0x4edd3e && Object["defineProperty"](_0x342cff, _0x529fde, _0x4edd3e);
  return _0x4edd3e;
},
    __metadata = this && this["__metadata"] || function (_0x3f34c3, _0x35e69d) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === 'function') {
    return Reflect['metadata'](_0x3f34c3, _0x35e69d);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["MjEnlargeImgDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class MjEnlargeImgDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "1105361939590287360",
  'description': '当前大图的message_id、四张的这种才存在有效的！',
  'required': true
}), (0, class_validator_1["IsDefined"])({
  'message': "图片的message_id是必传的"
}), __metadata("design:type", String)], MjEnlargeImgDto["prototype"], "message_id", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "图片的orderId是必传的 表示放大图片的第几张！",
  'required': true
}), (0, class_validator_1["IsDefined"])({
  'message': "图片固体顺序id是必传的！"
}), __metadata("design:type", Number)], MjEnlargeImgDto["prototype"], 'orderId', void 0);

exports["MjEnlargeImgDto"] = MjEnlargeImgDto;