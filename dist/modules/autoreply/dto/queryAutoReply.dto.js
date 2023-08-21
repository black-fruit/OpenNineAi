'use strict';

var __decorate = this && this["__decorate"] || function (_0x475430, _0x26924c, _0x750772, _0x335bf0) {
  var _0xddc8c2 = arguments["length"],
      _0x31a8ef = _0xddc8c2 < 3 ? _0x26924c : _0x335bf0 === null ? _0x335bf0 = Object["getOwnPropertyDescriptor"](_0x26924c, _0x750772) : _0x335bf0,
      _0x3c8198;

  if (typeof Reflect === 'object' && typeof Reflect['decorate'] === "function") {
    _0x31a8ef = Reflect['decorate'](_0x475430, _0x26924c, _0x750772, _0x335bf0);
  } else {
    for (var _0x27b220 = _0x475430["length"] - 1; _0x27b220 >= 0; _0x27b220--) {
      if (_0x3c8198 = _0x475430[_0x27b220]) {
        _0x31a8ef = (_0xddc8c2 < 3 ? _0x3c8198(_0x31a8ef) : _0xddc8c2 > 3 ? _0x3c8198(_0x26924c, _0x750772, _0x31a8ef) : _0x3c8198(_0x26924c, _0x750772)) || _0x31a8ef;
      }
    }
  }

  _0xddc8c2 > 3 && _0x31a8ef && Object["defineProperty"](_0x26924c, _0x750772, _0x31a8ef);
  return _0x31a8ef;
},
    __metadata = this && this["__metadata"] || function (_0x21eb43, _0x180fae) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x21eb43, _0x180fae);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["QueryAutoReplyDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class QueryAutoReplyDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QueryAutoReplyDto['prototype'], 'page', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QueryAutoReplyDto['prototype'], "size", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "你是谁",
  'description': "提问问题",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], QueryAutoReplyDto['prototype'], "prompt", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "问题状态",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata('design:type', Number)], QueryAutoReplyDto["prototype"], "status", void 0);

exports["QueryAutoReplyDto"] = QueryAutoReplyDto;