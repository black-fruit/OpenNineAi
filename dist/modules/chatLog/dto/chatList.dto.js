'use strict';

var __decorate = this && this["__decorate"] || function (_0x1621f7, _0x1e9989, _0x2464b8, _0x5655ea) {
  var _0x5e9dc8 = arguments["length"],
      _0x23e73f = _0x5e9dc8 < 3 ? _0x1e9989 : _0x5655ea === null ? _0x5655ea = Object["getOwnPropertyDescriptor"](_0x1e9989, _0x2464b8) : _0x5655ea,
      _0x475018;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x23e73f = Reflect["decorate"](_0x1621f7, _0x1e9989, _0x2464b8, _0x5655ea);
  } else {
    for (var _0x25d43f = _0x1621f7["length"] - 1; _0x25d43f >= 0; _0x25d43f--) {
      if (_0x475018 = _0x1621f7[_0x25d43f]) {
        _0x23e73f = (_0x5e9dc8 < 3 ? _0x475018(_0x23e73f) : _0x5e9dc8 > 3 ? _0x475018(_0x1e9989, _0x2464b8, _0x23e73f) : _0x475018(_0x1e9989, _0x2464b8)) || _0x23e73f;
      }
    }
  }

  _0x5e9dc8 > 3 && _0x23e73f && Object["defineProperty"](_0x1e9989, _0x2464b8, _0x23e73f);
  return _0x23e73f;
},
    __metadata = this && this["__metadata"] || function (_0xbf9d5b, _0x40e326) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0xbf9d5b, _0x40e326);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["ChatListDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class ChatListDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '对话分组ID',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], ChatListDto["prototype"], "groupId", void 0);

exports["ChatListDto"] = ChatListDto;