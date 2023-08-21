'use strict';

var __decorate = this && this["__decorate"] || function (_0x48c4ec, _0x3ebf29, _0x5ca2fd, _0x2c242f) {
  var _0x278ae8 = arguments['length'],
      _0x26d11b = _0x278ae8 < 3 ? _0x3ebf29 : _0x2c242f === null ? _0x2c242f = Object["getOwnPropertyDescriptor"](_0x3ebf29, _0x5ca2fd) : _0x2c242f,
      _0x158f05;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x26d11b = Reflect['decorate'](_0x48c4ec, _0x3ebf29, _0x5ca2fd, _0x2c242f);
  } else {
    for (var _0x2ebd6e = _0x48c4ec["length"] - 1; _0x2ebd6e >= 0; _0x2ebd6e--) {
      if (_0x158f05 = _0x48c4ec[_0x2ebd6e]) {
        _0x26d11b = (_0x278ae8 < 3 ? _0x158f05(_0x26d11b) : _0x278ae8 > 3 ? _0x158f05(_0x3ebf29, _0x5ca2fd, _0x26d11b) : _0x158f05(_0x3ebf29, _0x5ca2fd)) || _0x26d11b;
      }
    }
  }

  _0x278ae8 > 3 && _0x26d11b && Object["defineProperty"](_0x3ebf29, _0x5ca2fd, _0x26d11b);
  return _0x26d11b;
},
    __metadata = this && this["__metadata"] || function (_0x3d4f91, _0x290ac5) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect['metadata'](_0x3d4f91, _0x290ac5);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["DeleteKeyDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class DeleteKeyDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '当前key的id'
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "启用状态必须是number类型"
}), __metadata("design:type", Number)], DeleteKeyDto['prototype'], 'id', void 0);

exports["DeleteKeyDto"] = DeleteKeyDto;