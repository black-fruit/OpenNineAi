'use strict';

var __decorate = this && this["__decorate"] || function (_0x1cc28d, _0x12b25c, _0x41553d, _0x204b46) {
  var _0x2bfe0a = arguments["length"],
      _0x1d2d86 = _0x2bfe0a < 3 ? _0x12b25c : _0x204b46 === null ? _0x204b46 = Object["getOwnPropertyDescriptor"](_0x12b25c, _0x41553d) : _0x204b46,
      _0x310e7a;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === 'function') {
    _0x1d2d86 = Reflect["decorate"](_0x1cc28d, _0x12b25c, _0x41553d, _0x204b46);
  } else {
    for (var _0x3b247d = _0x1cc28d['length'] - 1; _0x3b247d >= 0; _0x3b247d--) {
      if (_0x310e7a = _0x1cc28d[_0x3b247d]) {
        _0x1d2d86 = (_0x2bfe0a < 3 ? _0x310e7a(_0x1d2d86) : _0x2bfe0a > 3 ? _0x310e7a(_0x12b25c, _0x41553d, _0x1d2d86) : _0x310e7a(_0x12b25c, _0x41553d)) || _0x1d2d86;
      }
    }
  }

  _0x2bfe0a > 3 && _0x1d2d86 && Object["defineProperty"](_0x12b25c, _0x41553d, _0x1d2d86);
  return _0x1d2d86;
},
    __metadata = this && this["__metadata"] || function (_0x2f746c, _0x247f3e) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x2f746c, _0x247f3e);
  }
};

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["DelAutoReplyDto"] = void 0;

const swagger_1 = require("@nestjs/swagger");

class DelAutoReplyDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '自动回复id',
  'required': true
}), __metadata("design:type", Number)], DelAutoReplyDto["prototype"], 'id', void 0);

exports["DelAutoReplyDto"] = DelAutoReplyDto;