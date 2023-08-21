'use strict';

var __decorate = this && this["__decorate"] || function (_0x3ecd59, _0xf15755, _0x69019f, _0x56e813) {
  var _0x49d78e = arguments["length"],
      _0x3a851b = _0x49d78e < 3 ? _0xf15755 : _0x56e813 === null ? _0x56e813 = Object["getOwnPropertyDescriptor"](_0xf15755, _0x69019f) : _0x56e813,
      _0x3c51c6;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === 'function') {
    _0x3a851b = Reflect['decorate'](_0x3ecd59, _0xf15755, _0x69019f, _0x56e813);
  } else {
    for (var _0x5412a5 = _0x3ecd59["length"] - 1; _0x5412a5 >= 0; _0x5412a5--) {
      if (_0x3c51c6 = _0x3ecd59[_0x5412a5]) {
        _0x3a851b = (_0x49d78e < 3 ? _0x3c51c6(_0x3a851b) : _0x49d78e > 3 ? _0x3c51c6(_0xf15755, _0x69019f, _0x3a851b) : _0x3c51c6(_0xf15755, _0x69019f)) || _0x3a851b;
      }
    }
  }

  _0x49d78e > 3 && _0x3a851b && Object["defineProperty"](_0xf15755, _0x69019f, _0x3a851b);
  return _0x3a851b;
},
    __metadata = this && this["__metadata"] || function (_0x2cdbfc, _0x316f70) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x2cdbfc, _0x316f70);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["ResetUserPassDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class ResetUserPassDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'nullable': true,
  'description': "用户id",
  'required': false
}), (0, class_validator_1["IsDefined"])({
  'message': "用户id是必传参数"
}), __metadata('design:type', Number)], ResetUserPassDto["prototype"], 'id', void 0);

exports["ResetUserPassDto"] = ResetUserPassDto;