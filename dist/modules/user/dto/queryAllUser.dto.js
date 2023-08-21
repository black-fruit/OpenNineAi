'use strict';

var __decorate = this && this["__decorate"] || function (_0x4eaac6, _0x384533, _0x469e28, _0x290bd5) {
  var _0x223e42 = arguments['length'],
      _0x5b433e = _0x223e42 < 3 ? _0x384533 : _0x290bd5 === null ? _0x290bd5 = Object['getOwnPropertyDescriptor'](_0x384533, _0x469e28) : _0x290bd5,
      _0x1c35cd;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x5b433e = Reflect['decorate'](_0x4eaac6, _0x384533, _0x469e28, _0x290bd5);
  } else {
    for (var _0x302772 = _0x4eaac6["length"] - 1; _0x302772 >= 0; _0x302772--) {
      if (_0x1c35cd = _0x4eaac6[_0x302772]) {
        _0x5b433e = (_0x223e42 < 3 ? _0x1c35cd(_0x5b433e) : _0x223e42 > 3 ? _0x1c35cd(_0x384533, _0x469e28, _0x5b433e) : _0x1c35cd(_0x384533, _0x469e28)) || _0x5b433e;
      }
    }
  }

  _0x223e42 > 3 && _0x5b433e && Object['defineProperty'](_0x384533, _0x469e28, _0x5b433e);
  return _0x5b433e;
},
    __metadata = this && this["__metadata"] || function (_0x1eeb93, _0x2a82b5) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x1eeb93, _0x2a82b5);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["QueryAllUserDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class QueryAllUserDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], QueryAllUserDto["prototype"], "page", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QueryAllUserDto["prototype"], "size", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': '小九',
  'description': "用户姓名",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', String)], QueryAllUserDto["prototype"], 'username', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "J_longyan@163.com",
  'description': '用户邮箱',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], QueryAllUserDto["prototype"], 'email', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 2,
  'description': "用户状态",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], QueryAllUserDto["prototype"], "status", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "super",
  'description': '关键字查询',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], QueryAllUserDto["prototype"], "keyword", void 0);

exports["QueryAllUserDto"] = QueryAllUserDto;