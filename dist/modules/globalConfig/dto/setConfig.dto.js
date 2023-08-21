'use strict';

var __decorate = this && this["__decorate"] || function (_0x2fc765, _0x25f1ce, _0x4595ea, _0x13710e) {
  var _0x14a83e = arguments['length'],
      _0x2c558f = _0x14a83e < 3 ? _0x25f1ce : _0x13710e === null ? _0x13710e = Object["getOwnPropertyDescriptor"](_0x25f1ce, _0x4595ea) : _0x13710e,
      _0x3e0793;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x2c558f = Reflect["decorate"](_0x2fc765, _0x25f1ce, _0x4595ea, _0x13710e);
  } else {
    for (var _0x170d67 = _0x2fc765['length'] - 1; _0x170d67 >= 0; _0x170d67--) {
      if (_0x3e0793 = _0x2fc765[_0x170d67]) {
        _0x2c558f = (_0x14a83e < 3 ? _0x3e0793(_0x2c558f) : _0x14a83e > 3 ? _0x3e0793(_0x25f1ce, _0x4595ea, _0x2c558f) : _0x3e0793(_0x25f1ce, _0x4595ea)) || _0x2c558f;
      }
    }
  }

  _0x14a83e > 3 && _0x2c558f && Object["defineProperty"](_0x25f1ce, _0x4595ea, _0x2c558f);
  return _0x2c558f;
},
    __metadata = this && this["__metadata"] || function (_0x1707a1, _0x208bb3) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === 'function') {
    return Reflect["metadata"](_0x1707a1, _0x208bb3);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['SetConfigDto'] = void 0;

const class_validator_1 = require("class-validator"),
      class_transformer_1 = require("class-transformer"),
      swagger_1 = require("@nestjs/swagger");

class SetConfigDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': [{
    'configKey': "siteName",
    'configVal': "NineAI"
  }],
  'description': "设置配置信息"
}), (0, class_validator_1['IsArray'])(), (0, class_validator_1["ArrayNotEmpty"])(), (0, class_validator_1["ValidateNested"])({
  'each': true
}), (0, class_transformer_1["Type"])(() => Object), __metadata("design:type", Array)], SetConfigDto["prototype"], "settings", void 0);

exports["SetConfigDto"] = SetConfigDto;