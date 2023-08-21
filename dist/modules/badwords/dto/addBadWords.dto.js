'use strict';

var __decorate = this && this["__decorate"] || function (_0x53c062, _0x384a7c, _0x4de63e, _0x2471c1) {
  var _0xb4aed6 = arguments["length"],
      _0x7575bc = _0xb4aed6 < 3 ? _0x384a7c : _0x2471c1 === null ? _0x2471c1 = Object['getOwnPropertyDescriptor'](_0x384a7c, _0x4de63e) : _0x2471c1,
      _0x53b51f;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x7575bc = Reflect['decorate'](_0x53c062, _0x384a7c, _0x4de63e, _0x2471c1);
  } else {
    for (var _0x15ec71 = _0x53c062["length"] - 1; _0x15ec71 >= 0; _0x15ec71--) {
      if (_0x53b51f = _0x53c062[_0x15ec71]) {
        _0x7575bc = (_0xb4aed6 < 3 ? _0x53b51f(_0x7575bc) : _0xb4aed6 > 3 ? _0x53b51f(_0x384a7c, _0x4de63e, _0x7575bc) : _0x53b51f(_0x384a7c, _0x4de63e)) || _0x7575bc;
      }
    }
  }

  _0xb4aed6 > 3 && _0x7575bc && Object["defineProperty"](_0x384a7c, _0x4de63e, _0x7575bc);
  return _0x7575bc;
},
    __metadata = this && this["__metadata"] || function (_0x2a6e42, _0x3364e3) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x2a6e42, _0x3364e3);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports['AddBadWordDto'] = void 0;

const swagger_1 = require("@nestjs/swagger");

class AddBadWordDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "test",
  'description': "敏感词",
  'required': true
}), __metadata('design:type', String)], AddBadWordDto['prototype'], 'word', void 0);

exports['AddBadWordDto'] = AddBadWordDto;