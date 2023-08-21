'use strict';

var __decorate = this && this["__decorate"] || function (_0x4822c7, _0x589376, _0x4d2208, _0x331a51) {
  var _0x415761 = arguments["length"],
      _0x3565a0 = _0x415761 < 3 ? _0x589376 : _0x331a51 === null ? _0x331a51 = Object['getOwnPropertyDescriptor'](_0x589376, _0x4d2208) : _0x331a51,
      _0x1ae04f;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3565a0 = Reflect["decorate"](_0x4822c7, _0x589376, _0x4d2208, _0x331a51);
  } else {
    for (var _0x23505a = _0x4822c7["length"] - 1; _0x23505a >= 0; _0x23505a--) {
      if (_0x1ae04f = _0x4822c7[_0x23505a]) {
        _0x3565a0 = (_0x415761 < 3 ? _0x1ae04f(_0x3565a0) : _0x415761 > 3 ? _0x1ae04f(_0x589376, _0x4d2208, _0x3565a0) : _0x1ae04f(_0x589376, _0x4d2208)) || _0x3565a0;
      }
    }
  }

  _0x415761 > 3 && _0x3565a0 && Object["defineProperty"](_0x589376, _0x4d2208, _0x3565a0);
  return _0x3565a0;
},
    __metadata = this && this["__metadata"] || function (_0x2bd559, _0xf58785) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x2bd559, _0xf58785);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["UpdateAutpReplyDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class UpdateAutpReplyDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '自动回复id',
  'required': true
}), (0, class_validator_1['IsOptional'])(), __metadata('design:type', Number)], UpdateAutpReplyDto["prototype"], 'id', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "你可以干嘛",
  'description': '问题',
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], UpdateAutpReplyDto["prototype"], 'prompt', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': '我可以干很多事情.......',
  'description': '答案',
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], UpdateAutpReplyDto["prototype"], 'answer', void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 0,
  'description': '状态',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], UpdateAutpReplyDto["prototype"], "status", void 0);

exports["UpdateAutpReplyDto"] = UpdateAutpReplyDto;