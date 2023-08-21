'use strict';

var __decorate = this && this['__decorate'] || function (_0xbb7152, _0x512908, _0x41f337, _0x25d031) {
  var _0x282a09 = arguments["length"],
      _0x5ed89f = _0x282a09 < 3 ? _0x512908 : _0x25d031 === null ? _0x25d031 = Object["getOwnPropertyDescriptor"](_0x512908, _0x41f337) : _0x25d031,
      _0x4cd4db;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x5ed89f = Reflect["decorate"](_0xbb7152, _0x512908, _0x41f337, _0x25d031);
  } else {
    for (var _0x29ac6e = _0xbb7152["length"] - 1; _0x29ac6e >= 0; _0x29ac6e--) {
      if (_0x4cd4db = _0xbb7152[_0x29ac6e]) {
        _0x5ed89f = (_0x282a09 < 3 ? _0x4cd4db(_0x5ed89f) : _0x282a09 > 3 ? _0x4cd4db(_0x512908, _0x41f337, _0x5ed89f) : _0x4cd4db(_0x512908, _0x41f337)) || _0x5ed89f;
      }
    }
  }

  _0x282a09 > 3 && _0x5ed89f && Object["defineProperty"](_0x512908, _0x41f337, _0x5ed89f);
  return _0x5ed89f;
},
    __metadata = this && this["__metadata"] || function (_0x1b8a25, _0x13b9bb) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x1b8a25, _0x13b9bb);
  }
};

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["QuerMyChatLogDto"] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require("@nestjs/swagger");

class QuerMyChatLogDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 'mj',
  'description': "使用的模型",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], QuerMyChatLogDto["prototype"], "model", void 0);

exports["QuerMyChatLogDto"] = QuerMyChatLogDto;