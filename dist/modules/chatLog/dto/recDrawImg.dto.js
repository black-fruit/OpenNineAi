'use strict';

var __decorate = this && this["__decorate"] || function (_0x2d92bf, _0x3acfca, _0x54747c, _0xa7b83) {
  var _0x3c457a = arguments["length"],
      _0xee0c3b = _0x3c457a < 3 ? _0x3acfca : _0xa7b83 === null ? _0xa7b83 = Object["getOwnPropertyDescriptor"](_0x3acfca, _0x54747c) : _0xa7b83,
      _0x465d8c;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0xee0c3b = Reflect["decorate"](_0x2d92bf, _0x3acfca, _0x54747c, _0xa7b83);
  } else {
    for (var _0x56d5a8 = _0x2d92bf["length"] - 1; _0x56d5a8 >= 0; _0x56d5a8--) {
      if (_0x465d8c = _0x2d92bf[_0x56d5a8]) {
        _0xee0c3b = (_0x3c457a < 3 ? _0x465d8c(_0xee0c3b) : _0x3c457a > 3 ? _0x465d8c(_0x3acfca, _0x54747c, _0xee0c3b) : _0x465d8c(_0x3acfca, _0x54747c)) || _0xee0c3b;
      }
    }
  }

  _0x3c457a > 3 && _0xee0c3b && Object["defineProperty"](_0x3acfca, _0x54747c, _0xee0c3b);
  return _0xee0c3b;
},
    __metadata = this && this['__metadata'] || function (_0x4e37ad, _0x2ecb22) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x4e37ad, _0x2ecb22);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['recDrawImgDto'] = void 0;

const swagger_1 = require("@nestjs/swagger");

class recDrawImgDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '推荐图片的id'
}), __metadata("design:type", Number)], recDrawImgDto["prototype"], 'id', void 0);

exports['recDrawImgDto'] = recDrawImgDto;