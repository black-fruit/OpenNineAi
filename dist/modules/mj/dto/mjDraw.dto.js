'use strict';

var __decorate = this && this["__decorate"] || function (_0xe23eae, _0x4fbed4, _0x2317c5, _0x4ae7fd) {
  var _0x1b927d = arguments["length"],
      _0x258583 = _0x1b927d < 3 ? _0x4fbed4 : _0x4ae7fd === null ? _0x4ae7fd = Object['getOwnPropertyDescriptor'](_0x4fbed4, _0x2317c5) : _0x4ae7fd,
      _0x24189b;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x258583 = Reflect["decorate"](_0xe23eae, _0x4fbed4, _0x2317c5, _0x4ae7fd);
  } else {
    for (var _0x554ea9 = _0xe23eae["length"] - 1; _0x554ea9 >= 0; _0x554ea9--) {
      if (_0x24189b = _0xe23eae[_0x554ea9]) {
        _0x258583 = (_0x1b927d < 3 ? _0x24189b(_0x258583) : _0x1b927d > 3 ? _0x24189b(_0x4fbed4, _0x2317c5, _0x258583) : _0x24189b(_0x4fbed4, _0x2317c5)) || _0x258583;
      }
    }
  }

  _0x1b927d > 3 && _0x258583 && Object['defineProperty'](_0x4fbed4, _0x2317c5, _0x258583);
  return _0x258583;
},
    __metadata = this && this["__metadata"] || function (_0x2d8584, _0x1efc8f) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x2d8584, _0x1efc8f);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["MjDrawDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class MjDrawDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "close-up polaroid photo, of a little joyful cute panda, in the forest, sun rays coming, photographic, sharp focus, depth of field, soft lighting, heigh quality, 24mm, Nikon Z FX",
  'description': '绘画提示词！',
  'required': true
}), (0, class_validator_1["IsDefined"])({
  'message': "绘画提示词是必传参数！"
}), __metadata('design:type', String)], MjDrawDto["prototype"], "prompt", void 0);

exports['MjDrawDto'] = MjDrawDto;