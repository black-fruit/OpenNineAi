'use strict';

var __decorate = this && this['__decorate'] || function (_0x24ca37, _0x57ca2b, _0x3874d5, _0x53c4f0) {
  var _0xd8de24 = arguments["length"],
      _0x4c4e24 = _0xd8de24 < 3 ? _0x57ca2b : _0x53c4f0 === null ? _0x53c4f0 = Object['getOwnPropertyDescriptor'](_0x57ca2b, _0x3874d5) : _0x53c4f0,
      _0x534b27;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x4c4e24 = Reflect["decorate"](_0x24ca37, _0x57ca2b, _0x3874d5, _0x53c4f0);
  } else {
    for (var _0x23fb29 = _0x24ca37['length'] - 1; _0x23fb29 >= 0; _0x23fb29--) {
      if (_0x534b27 = _0x24ca37[_0x23fb29]) {
        _0x4c4e24 = (_0xd8de24 < 3 ? _0x534b27(_0x4c4e24) : _0xd8de24 > 3 ? _0x534b27(_0x57ca2b, _0x3874d5, _0x4c4e24) : _0x534b27(_0x57ca2b, _0x3874d5)) || _0x4c4e24;
      }
    }
  }

  _0xd8de24 > 3 && _0x4c4e24 && Object['defineProperty'](_0x57ca2b, _0x3874d5, _0x4c4e24);
  return _0x4c4e24;
},
    __metadata = this && this["__metadata"] || function (_0x7fe11d, _0x2d45c1) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x7fe11d, _0x2d45c1);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["GetWhiteUserListDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class GetWhiteUserListDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], GetWhiteUserListDto["prototype"], "page", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], GetWhiteUserListDto["prototype"], "size", void 0);

exports["GetWhiteUserListDto"] = GetWhiteUserListDto;