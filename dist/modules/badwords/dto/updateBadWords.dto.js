'use strict';

var __decorate = this && this["__decorate"] || function (_0x1066b9, _0x248e98, _0xc3feb5, _0x17f6da) {
  var _0x9bc30 = arguments["length"],
      _0x4802d0 = _0x9bc30 < 3 ? _0x248e98 : _0x17f6da === null ? _0x17f6da = Object['getOwnPropertyDescriptor'](_0x248e98, _0xc3feb5) : _0x17f6da,
      _0x9d1a4b;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x4802d0 = Reflect["decorate"](_0x1066b9, _0x248e98, _0xc3feb5, _0x17f6da);
  } else {
    for (var _0x4b9582 = _0x1066b9["length"] - 1; _0x4b9582 >= 0; _0x4b9582--) {
      if (_0x9d1a4b = _0x1066b9[_0x4b9582]) {
        _0x4802d0 = (_0x9bc30 < 3 ? _0x9d1a4b(_0x4802d0) : _0x9bc30 > 3 ? _0x9d1a4b(_0x248e98, _0xc3feb5, _0x4802d0) : _0x9d1a4b(_0x248e98, _0xc3feb5)) || _0x4802d0;
      }
    }
  }

  _0x9bc30 > 3 && _0x4802d0 && Object["defineProperty"](_0x248e98, _0xc3feb5, _0x4802d0);
  return _0x4802d0;
},
    __metadata = this && this["__metadata"] || function (_0x2186e2, _0x2efe65) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x2186e2, _0x2efe65);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["UpdateBadWordsDto"] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require("@nestjs/swagger");

class UpdateBadWordsDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "敏感词id",
  'required': true
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], UpdateBadWordsDto['prototype'], 'id', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "test",
  'description': "敏感词内容",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], UpdateBadWordsDto['prototype'], 'word', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "关键词状态",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], UpdateBadWordsDto["prototype"], "status", void 0);

exports["UpdateBadWordsDto"] = UpdateBadWordsDto;