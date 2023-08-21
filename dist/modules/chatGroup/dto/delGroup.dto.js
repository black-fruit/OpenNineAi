'use strict';

var __decorate = this && this["__decorate"] || function (_0x785ce7, _0xb36117, _0xf6fb89, _0x2b7c3d) {
  var _0x17b3dd = arguments["length"],
      _0x27e5da = _0x17b3dd < 3 ? _0xb36117 : _0x2b7c3d === null ? _0x2b7c3d = Object["getOwnPropertyDescriptor"](_0xb36117, _0xf6fb89) : _0x2b7c3d,
      _0x1d94a1;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x27e5da = Reflect["decorate"](_0x785ce7, _0xb36117, _0xf6fb89, _0x2b7c3d);
  } else {
    for (var _0x1c8d31 = _0x785ce7["length"] - 1; _0x1c8d31 >= 0; _0x1c8d31--) {
      if (_0x1d94a1 = _0x785ce7[_0x1c8d31]) {
        _0x27e5da = (_0x17b3dd < 3 ? _0x1d94a1(_0x27e5da) : _0x17b3dd > 3 ? _0x1d94a1(_0xb36117, _0xf6fb89, _0x27e5da) : _0x1d94a1(_0xb36117, _0xf6fb89)) || _0x27e5da;
      }
    }
  }

  _0x17b3dd > 3 && _0x27e5da && Object['defineProperty'](_0xb36117, _0xf6fb89, _0x27e5da);
  return _0x27e5da;
},
    __metadata = this && this["__metadata"] || function (_0x3fe566, _0x1f8515) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x3fe566, _0x1f8515);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["DelGroupDto"] = void 0;

const swagger_1 = require("@nestjs/swagger");

class DelGroupDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "对话分组ID",
  'required': true
}), __metadata("design:type", Number)], DelGroupDto["prototype"], 'groupId', void 0);

exports["DelGroupDto"] = DelGroupDto;