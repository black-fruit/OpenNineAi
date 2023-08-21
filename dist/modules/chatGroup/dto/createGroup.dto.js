'use strict';

var __decorate = this && this["__decorate"] || function (_0x4f7f50, _0x31f4d0, _0x9f28c6, _0x3bf695) {
  var _0x172e7f = arguments["length"],
      _0x235025 = _0x172e7f < 3 ? _0x31f4d0 : _0x3bf695 === null ? _0x3bf695 = Object["getOwnPropertyDescriptor"](_0x31f4d0, _0x9f28c6) : _0x3bf695,
      _0x52904c;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x235025 = Reflect["decorate"](_0x4f7f50, _0x31f4d0, _0x9f28c6, _0x3bf695);
  } else {
    for (var _0x4b9cd1 = _0x4f7f50["length"] - 1; _0x4b9cd1 >= 0; _0x4b9cd1--) {
      if (_0x52904c = _0x4f7f50[_0x4b9cd1]) {
        _0x235025 = (_0x172e7f < 3 ? _0x52904c(_0x235025) : _0x172e7f > 3 ? _0x52904c(_0x31f4d0, _0x9f28c6, _0x235025) : _0x52904c(_0x31f4d0, _0x9f28c6)) || _0x235025;
      }
    }
  }

  _0x172e7f > 3 && _0x235025 && Object['defineProperty'](_0x31f4d0, _0x9f28c6, _0x235025);
  return _0x235025;
},
    __metadata = this && this["__metadata"] || function (_0x15cfc4, _0x30e45a) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x15cfc4, _0x30e45a);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["CreateGroupDto"] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require("@nestjs/swagger");

class CreateGroupDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 10,
  'description': '应用ID',
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata('design:type', Number)], CreateGroupDto['prototype'], "appId", void 0);

exports["CreateGroupDto"] = CreateGroupDto;