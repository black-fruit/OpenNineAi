'use strict';

var __decorate = this && this['__decorate'] || function (_0x19bc10, _0x4b548b, _0xcf8004, _0x89a655) {
  var _0x114ef0 = arguments["length"],
      _0x4df0ec = _0x114ef0 < 3 ? _0x4b548b : _0x89a655 === null ? _0x89a655 = Object['getOwnPropertyDescriptor'](_0x4b548b, _0xcf8004) : _0x89a655,
      _0x29b5c7;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x4df0ec = Reflect["decorate"](_0x19bc10, _0x4b548b, _0xcf8004, _0x89a655);
  } else {
    for (var _0x5ef002 = _0x19bc10["length"] - 1; _0x5ef002 >= 0; _0x5ef002--) {
      if (_0x29b5c7 = _0x19bc10[_0x5ef002]) {
        _0x4df0ec = (_0x114ef0 < 3 ? _0x29b5c7(_0x4df0ec) : _0x114ef0 > 3 ? _0x29b5c7(_0x4b548b, _0xcf8004, _0x4df0ec) : _0x29b5c7(_0x4b548b, _0xcf8004)) || _0x4df0ec;
      }
    }
  }

  _0x114ef0 > 3 && _0x4df0ec && Object['defineProperty'](_0x4b548b, _0xcf8004, _0x4df0ec);
  return _0x4df0ec;
},
    __metadata = this && this["__metadata"] || function (_0x5a380f, _0x23ee7a) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === 'function') {
    return Reflect["metadata"](_0x5a380f, _0x23ee7a);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["QueryBadWordsDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class QueryBadWordsDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QueryBadWordsDto["prototype"], "page", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': '每页数量',
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata('design:type', Number)], QueryBadWordsDto["prototype"], 'size', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "test",
  'description': "敏感词内容",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], QueryBadWordsDto['prototype'], "word", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "关键词状态",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], QueryBadWordsDto["prototype"], "status", void 0);

exports["QueryBadWordsDto"] = QueryBadWordsDto;