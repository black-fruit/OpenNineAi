'use strict';

var __decorate = this && this["__decorate"] || function (_0x478960, _0x3b8615, _0x4bee6a, _0x5e2f84) {
  var _0x16b888 = arguments["length"],
      _0x4b4790 = _0x16b888 < 3 ? _0x3b8615 : _0x5e2f84 === null ? _0x5e2f84 = Object["getOwnPropertyDescriptor"](_0x3b8615, _0x4bee6a) : _0x5e2f84,
      _0x4d33d8;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === 'function') {
    _0x4b4790 = Reflect["decorate"](_0x478960, _0x3b8615, _0x4bee6a, _0x5e2f84);
  } else {
    for (var _0x182f6b = _0x478960['length'] - 1; _0x182f6b >= 0; _0x182f6b--) {
      if (_0x4d33d8 = _0x478960[_0x182f6b]) {
        _0x4b4790 = (_0x16b888 < 3 ? _0x4d33d8(_0x4b4790) : _0x16b888 > 3 ? _0x4d33d8(_0x3b8615, _0x4bee6a, _0x4b4790) : _0x4d33d8(_0x3b8615, _0x4bee6a)) || _0x4b4790;
      }
    }
  }

  _0x16b888 > 3 && _0x4b4790 && Object["defineProperty"](_0x3b8615, _0x4bee6a, _0x4b4790);
  return _0x4b4790;
},
    __metadata = this && this['__metadata'] || function (_0x5acb10, _0x3d058d) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x5acb10, _0x3d058d);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports['TestDto'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class TestDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'nullable': true,
  'description': '查询用户的id',
  'required': false
}), (0, class_validator_1["IsDefined"])({
  'message': "用户id是必传参数"
}), __metadata("design:type", Number)], TestDto["prototype"], 'id', void 0);

exports["TestDto"] = TestDto;