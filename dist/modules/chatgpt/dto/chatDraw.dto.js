'use strict';

var __decorate = this && this["__decorate"] || function (_0x2942e6, _0x26e191, _0x18ae38, _0x30ea1c) {
  var _0xe2af60 = arguments["length"],
      _0x4040fb = _0xe2af60 < 3 ? _0x26e191 : _0x30ea1c === null ? _0x30ea1c = Object["getOwnPropertyDescriptor"](_0x26e191, _0x18ae38) : _0x30ea1c,
      _0x2d03fc;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === 'function') {
    _0x4040fb = Reflect["decorate"](_0x2942e6, _0x26e191, _0x18ae38, _0x30ea1c);
  } else {
    for (var _0xaa3beb = _0x2942e6["length"] - 1; _0xaa3beb >= 0; _0xaa3beb--) {
      if (_0x2d03fc = _0x2942e6[_0xaa3beb]) {
        _0x4040fb = (_0xe2af60 < 3 ? _0x2d03fc(_0x4040fb) : _0xe2af60 > 3 ? _0x2d03fc(_0x26e191, _0x18ae38, _0x4040fb) : _0x2d03fc(_0x26e191, _0x18ae38)) || _0x4040fb;
      }
    }
  }

  _0xe2af60 > 3 && _0x4040fb && Object['defineProperty'](_0x26e191, _0x18ae38, _0x4040fb);
  return _0x4040fb;
},
    __metadata = this && this["__metadata"] || function (_0x1b7d08, _0x39f3a2) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x1b7d08, _0x39f3a2);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["ChatDrawDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class ChatDrawDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "Draw a cute little dog",
  'description': '绘画描述信息'
}), __metadata("design:type", String)], ChatDrawDto["prototype"], "prompt", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '绘画张数',
  'required': true
}), __metadata("design:type", Number)], ChatDrawDto["prototype"], 'n', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "256x256",
  'description': "图片尺寸",
  'required': true
}), (0, class_validator_1["IsIn"])(["256x256", '512x512', "1024x1024"]), __metadata("design:type", String)], ChatDrawDto['prototype'], "size", void 0);

exports["ChatDrawDto"] = ChatDrawDto;