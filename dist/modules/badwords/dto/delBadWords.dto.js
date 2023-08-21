'use strict';

var __decorate = this && this['__decorate'] || function (_0x42481d, _0x285ba8, _0x4390e4, _0x5f04e3) {
  var _0x19e3a2 = arguments["length"],
      _0x463445 = _0x19e3a2 < 3 ? _0x285ba8 : _0x5f04e3 === null ? _0x5f04e3 = Object["getOwnPropertyDescriptor"](_0x285ba8, _0x4390e4) : _0x5f04e3,
      _0x3a1761;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x463445 = Reflect["decorate"](_0x42481d, _0x285ba8, _0x4390e4, _0x5f04e3);
  } else {
    for (var _0x43b369 = _0x42481d["length"] - 1; _0x43b369 >= 0; _0x43b369--) {
      if (_0x3a1761 = _0x42481d[_0x43b369]) {
        _0x463445 = (_0x19e3a2 < 3 ? _0x3a1761(_0x463445) : _0x19e3a2 > 3 ? _0x3a1761(_0x285ba8, _0x4390e4, _0x463445) : _0x3a1761(_0x285ba8, _0x4390e4)) || _0x463445;
      }
    }
  }

  _0x19e3a2 > 3 && _0x463445 && Object["defineProperty"](_0x285ba8, _0x4390e4, _0x463445);
  return _0x463445;
},
    __metadata = this && this["__metadata"] || function (_0x4b4a11, _0x570037) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x4b4a11, _0x570037);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["DelBadWordsDto"] = void 0;

const swagger_1 = require("@nestjs/swagger");

class DelBadWordsDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "敏感词id",
  'required': true
}), __metadata("design:type", Number)], DelBadWordsDto["prototype"], 'id', void 0);

exports["DelBadWordsDto"] = DelBadWordsDto;