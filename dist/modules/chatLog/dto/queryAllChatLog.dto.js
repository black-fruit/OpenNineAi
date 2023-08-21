'use strict';

var __decorate = this && this["__decorate"] || function (_0x516b2a, _0x2b7997, _0x18683d, _0x7d2b23) {
  var _0x1f6dbe = arguments["length"],
      _0x27aeb3 = _0x1f6dbe < 3 ? _0x2b7997 : _0x7d2b23 === null ? _0x7d2b23 = Object["getOwnPropertyDescriptor"](_0x2b7997, _0x18683d) : _0x7d2b23,
      _0x145507;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x27aeb3 = Reflect['decorate'](_0x516b2a, _0x2b7997, _0x18683d, _0x7d2b23);
  } else {
    for (var _0x385e14 = _0x516b2a['length'] - 1; _0x385e14 >= 0; _0x385e14--) {
      if (_0x145507 = _0x516b2a[_0x385e14]) {
        _0x27aeb3 = (_0x1f6dbe < 3 ? _0x145507(_0x27aeb3) : _0x1f6dbe > 3 ? _0x145507(_0x2b7997, _0x18683d, _0x27aeb3) : _0x145507(_0x2b7997, _0x18683d)) || _0x27aeb3;
      }
    }
  }

  _0x1f6dbe > 3 && _0x27aeb3 && Object["defineProperty"](_0x2b7997, _0x18683d, _0x27aeb3);
  return _0x27aeb3;
},
    __metadata = this && this["__metadata"] || function (_0x5587bf, _0x34689f) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x5587bf, _0x34689f);
  }
};

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports['QuerAllChatLogDto'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class QuerAllChatLogDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '查询页数',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QuerAllChatLogDto['prototype'], "page", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], QuerAllChatLogDto["prototype"], "size", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 99,
  'description': '对话的用户id',
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], QuerAllChatLogDto["prototype"], "userId", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': '您好',
  'description': "用户询问的问题",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], QuerAllChatLogDto['prototype'], "prompt", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "user",
  'description': '身份',
  'required': false
}), __metadata('design:type', String)], QuerAllChatLogDto['prototype'], 'role', void 0);

exports["QuerAllChatLogDto"] = QuerAllChatLogDto;