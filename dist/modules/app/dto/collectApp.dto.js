'use strict';

var __decorate = this && this['__decorate'] || function (_0x59ac79, _0x47986f, _0x36f0bd, _0x41cba4) {
  var _0x1cec63 = arguments["length"],
      _0x5b9804 = _0x1cec63 < 3 ? _0x47986f : _0x41cba4 === null ? _0x41cba4 = Object["getOwnPropertyDescriptor"](_0x47986f, _0x36f0bd) : _0x41cba4,
      _0xc4d6a6;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x5b9804 = Reflect["decorate"](_0x59ac79, _0x47986f, _0x36f0bd, _0x41cba4);
  } else {
    for (var _0x388c2c = _0x59ac79['length'] - 1; _0x388c2c >= 0; _0x388c2c--) {
      if (_0xc4d6a6 = _0x59ac79[_0x388c2c]) {
        _0x5b9804 = (_0x1cec63 < 3 ? _0xc4d6a6(_0x5b9804) : _0x1cec63 > 3 ? _0xc4d6a6(_0x47986f, _0x36f0bd, _0x5b9804) : _0xc4d6a6(_0x47986f, _0x36f0bd)) || _0x5b9804;
      }
    }
  }

  _0x1cec63 > 3 && _0x5b9804 && Object["defineProperty"](_0x47986f, _0x36f0bd, _0x5b9804);
  return _0x5b9804;
},
    __metadata = this && this["__metadata"] || function (_0x550a4a, _0x179e86) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x550a4a, _0x179e86);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["CollectAppDto"] = void 0;

const swagger_1 = require('@nestjs/swagger'),
      class_validator_1 = require("class-validator");

class CollectAppDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "要收藏的appId",
  'required': true
}), (0, class_validator_1['IsNumber'])({}, {
  'message': "ID必须是Number"
}), __metadata('design:type', Number)], CollectAppDto["prototype"], 'appId', void 0);

exports["CollectAppDto"] = CollectAppDto;