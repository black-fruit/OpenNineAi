'use strict';

var __decorate = this && this["__decorate"] || function (_0x41bd95, _0x1559de, _0x4e410f, _0x2198a3) {
  var _0x2b1bf3 = arguments["length"],
      _0x4f0d01 = _0x2b1bf3 < 3 ? _0x1559de : _0x2198a3 === null ? _0x2198a3 = Object['getOwnPropertyDescriptor'](_0x1559de, _0x4e410f) : _0x2198a3,
      _0x29ccbc;

  if (typeof Reflect === 'object' && typeof Reflect['decorate'] === 'function') {
    _0x4f0d01 = Reflect['decorate'](_0x41bd95, _0x1559de, _0x4e410f, _0x2198a3);
  } else {
    for (var _0x571f71 = _0x41bd95['length'] - 1; _0x571f71 >= 0; _0x571f71--) {
      if (_0x29ccbc = _0x41bd95[_0x571f71]) {
        _0x4f0d01 = (_0x2b1bf3 < 3 ? _0x29ccbc(_0x4f0d01) : _0x2b1bf3 > 3 ? _0x29ccbc(_0x1559de, _0x4e410f, _0x4f0d01) : _0x29ccbc(_0x1559de, _0x4e410f)) || _0x4f0d01;
      }
    }
  }

  _0x2b1bf3 > 3 && _0x4f0d01 && Object['defineProperty'](_0x1559de, _0x4e410f, _0x4f0d01);
  return _0x4f0d01;
},
    __metadata = this && this["__metadata"] || function (_0x49af24, _0xa92771) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x49af24, _0xa92771);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["QueryConfigDto"] = void 0;

const class_validator_1 = require("class-validator"),
      class_transformer_1 = require("class-transformer"),
      swagger_1 = require("@nestjs/swagger");

class QueryConfigDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': ["siteName", "qqNumber"],
  'description': "想要查询的配置key"
}), (0, class_validator_1["IsArray"])(), (0, class_validator_1["ArrayNotEmpty"])(), (0, class_transformer_1["Type"])(() => String), __metadata('design:type', Array)], QueryConfigDto["prototype"], "keys", void 0);

exports['QueryConfigDto'] = QueryConfigDto;