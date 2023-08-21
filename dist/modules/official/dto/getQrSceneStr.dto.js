'use strict';

var __decorate = this && this["__decorate"] || function (_0x1c6704, _0x4e8efe, _0x5c4054, _0x1bd287) {
  var _0x502cba = arguments["length"],
      _0x47a5ed = _0x502cba < 3 ? _0x4e8efe : _0x1bd287 === null ? _0x1bd287 = Object['getOwnPropertyDescriptor'](_0x4e8efe, _0x5c4054) : _0x1bd287,
      _0x533881;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x47a5ed = Reflect["decorate"](_0x1c6704, _0x4e8efe, _0x5c4054, _0x1bd287);
  } else {
    for (var _0x1b0682 = _0x1c6704['length'] - 1; _0x1b0682 >= 0; _0x1b0682--) {
      if (_0x533881 = _0x1c6704[_0x1b0682]) {
        _0x47a5ed = (_0x502cba < 3 ? _0x533881(_0x47a5ed) : _0x502cba > 3 ? _0x533881(_0x4e8efe, _0x5c4054, _0x47a5ed) : _0x533881(_0x4e8efe, _0x5c4054)) || _0x47a5ed;
      }
    }
  }

  _0x502cba > 3 && _0x47a5ed && Object["defineProperty"](_0x4e8efe, _0x5c4054, _0x47a5ed);
  return _0x47a5ed;
},
    __metadata = this && this["__metadata"] || function (_0x54eb2e, _0x29d697) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x54eb2e, _0x29d697);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['GetQrSceneStrDto'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class GetQrSceneStrDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "SNINE",
  'description': '用户邀请码',
  'required': true
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', String)], GetQrSceneStrDto["prototype"], "invitedBy", void 0);

exports["GetQrSceneStrDto"] = GetQrSceneStrDto;