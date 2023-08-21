'use strict';

var __decorate = this && this["__decorate"] || function (_0x12e5b6, _0x13520f, _0x2b15e6, _0x481910) {
  var _0x3b5b57 = arguments['length'],
      _0x3561a2 = _0x3b5b57 < 3 ? _0x13520f : _0x481910 === null ? _0x481910 = Object["getOwnPropertyDescriptor"](_0x13520f, _0x2b15e6) : _0x481910,
      _0x2f4816;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x3561a2 = Reflect['decorate'](_0x12e5b6, _0x13520f, _0x2b15e6, _0x481910);
  } else {
    for (var _0xae9f0d = _0x12e5b6["length"] - 1; _0xae9f0d >= 0; _0xae9f0d--) {
      if (_0x2f4816 = _0x12e5b6[_0xae9f0d]) {
        _0x3561a2 = (_0x3b5b57 < 3 ? _0x2f4816(_0x3561a2) : _0x3b5b57 > 3 ? _0x2f4816(_0x13520f, _0x2b15e6, _0x3561a2) : _0x2f4816(_0x13520f, _0x2b15e6)) || _0x3561a2;
      }
    }
  }

  _0x3b5b57 > 3 && _0x3561a2 && Object["defineProperty"](_0x13520f, _0x2b15e6, _0x3561a2);
  return _0x3561a2;
},
    __metadata = this && this["__metadata"] || function (_0x13b079, _0x21bc01) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x13b079, _0x21bc01);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["DelDto"] = void 0;

const swagger_1 = require("@nestjs/swagger");

class DelDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "对话Id",
  'required': true
}), __metadata("design:type", Number)], DelDto["prototype"], 'id', void 0);

exports["DelDto"] = DelDto;