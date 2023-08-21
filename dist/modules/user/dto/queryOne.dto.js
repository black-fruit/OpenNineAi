'use strict';

var __decorate = this && this["__decorate"] || function (_0xa43ab1, _0x24eca6, _0xd62075, _0x546e5c) {
  var _0x2da243 = arguments["length"],
      _0x544a6c = _0x2da243 < 3 ? _0x24eca6 : _0x546e5c === null ? _0x546e5c = Object["getOwnPropertyDescriptor"](_0x24eca6, _0xd62075) : _0x546e5c,
      _0x13e6da;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x544a6c = Reflect["decorate"](_0xa43ab1, _0x24eca6, _0xd62075, _0x546e5c);
  } else {
    for (var _0x34be7d = _0xa43ab1['length'] - 1; _0x34be7d >= 0; _0x34be7d--) {
      if (_0x13e6da = _0xa43ab1[_0x34be7d]) {
        _0x544a6c = (_0x2da243 < 3 ? _0x13e6da(_0x544a6c) : _0x2da243 > 3 ? _0x13e6da(_0x24eca6, _0xd62075, _0x544a6c) : _0x13e6da(_0x24eca6, _0xd62075)) || _0x544a6c;
      }
    }
  }

  _0x2da243 > 3 && _0x544a6c && Object['defineProperty'](_0x24eca6, _0xd62075, _0x544a6c);
  return _0x544a6c;
},
    __metadata = this && this["__metadata"] || function (_0x19f884, _0x4c2223) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x19f884, _0x4c2223);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["QueryOneUserDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class QueryOneUserDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'nullable': true,
  'description': "查询用户的id",
  'required': false
}), (0, class_validator_1["IsDefined"])({
  'message': "用户id是必传参数"
}), __metadata("design:type", Number)], QueryOneUserDto["prototype"], 'id', void 0);

exports['QueryOneUserDto'] = QueryOneUserDto;