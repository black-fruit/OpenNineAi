'use strict';

var __decorate = this && this['__decorate'] || function (_0x33258f, _0x108d7c, _0x3ea448, _0x5aa0a8) {
  var _0x5edc67 = arguments["length"],
      _0x1c7dab = _0x5edc67 < 3 ? _0x108d7c : _0x5aa0a8 === null ? _0x5aa0a8 = Object["getOwnPropertyDescriptor"](_0x108d7c, _0x3ea448) : _0x5aa0a8,
      _0x471bc1;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x1c7dab = Reflect["decorate"](_0x33258f, _0x108d7c, _0x3ea448, _0x5aa0a8);
  } else {
    for (var _0x564a9f = _0x33258f["length"] - 1; _0x564a9f >= 0; _0x564a9f--) {
      if (_0x471bc1 = _0x33258f[_0x564a9f]) {
        _0x1c7dab = (_0x5edc67 < 3 ? _0x471bc1(_0x1c7dab) : _0x5edc67 > 3 ? _0x471bc1(_0x108d7c, _0x3ea448, _0x1c7dab) : _0x471bc1(_0x108d7c, _0x3ea448)) || _0x1c7dab;
      }
    }
  }

  _0x5edc67 > 3 && _0x1c7dab && Object["defineProperty"](_0x108d7c, _0x3ea448, _0x1c7dab);
  return _0x1c7dab;
},
    __metadata = this && this["__metadata"] || function (_0x104a39, _0x52c2dc) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect['metadata'](_0x104a39, _0x52c2dc);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports['UseCramiDto'] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require('@nestjs/swagger');

class UseCramiDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 'ffar684rv254fs4f',
  'description': "卡密信息",
  'required': true
}), (0, class_validator_1["IsDefined"])({
  'message': "套餐名称是必传参数"
}), __metadata("design:type", String)], UseCramiDto["prototype"], "code", void 0);

exports['UseCramiDto'] = UseCramiDto;