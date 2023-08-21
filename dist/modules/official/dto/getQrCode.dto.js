'use strict';

var __decorate = this && this["__decorate"] || function (_0x38d595, _0x5de6dc, _0x30b5ad, _0x427278) {
  var _0x5d57b5 = arguments["length"],
      _0xc0392f = _0x5d57b5 < 3 ? _0x5de6dc : _0x427278 === null ? _0x427278 = Object["getOwnPropertyDescriptor"](_0x5de6dc, _0x30b5ad) : _0x427278,
      _0x1f1ab3;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0xc0392f = Reflect["decorate"](_0x38d595, _0x5de6dc, _0x30b5ad, _0x427278);
  } else {
    for (var _0x2e4cee = _0x38d595["length"] - 1; _0x2e4cee >= 0; _0x2e4cee--) {
      if (_0x1f1ab3 = _0x38d595[_0x2e4cee]) {
        _0xc0392f = (_0x5d57b5 < 3 ? _0x1f1ab3(_0xc0392f) : _0x5d57b5 > 3 ? _0x1f1ab3(_0x5de6dc, _0x30b5ad, _0xc0392f) : _0x1f1ab3(_0x5de6dc, _0x30b5ad)) || _0xc0392f;
      }
    }
  }

  _0x5d57b5 > 3 && _0xc0392f && Object["defineProperty"](_0x5de6dc, _0x30b5ad, _0xc0392f);
  return _0xc0392f;
},
    __metadata = this && this["__metadata"] || function (_0x291c35, _0x39832e) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x291c35, _0x39832e);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["GetQrCodeDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class GetQrCodeDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "dasdasg2441lk1o24bk",
  'description': "1-64位的字符参数",
  'required': true
}), (0, class_validator_1["IsDefined"])({
  'message': "sceneStr是必传参数"
}), __metadata('design:type', String)], GetQrCodeDto["prototype"], 'sceneStr', void 0);

exports["GetQrCodeDto"] = GetQrCodeDto;