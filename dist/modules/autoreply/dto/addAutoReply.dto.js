'use strict';

var __decorate = this && this["__decorate"] || function (_0x302da7, _0x34ea1f, _0x203f15, _0x5468b7) {
  var _0x4b9739 = arguments["length"],
      _0x4d6f00 = _0x4b9739 < 3 ? _0x34ea1f : _0x5468b7 === null ? _0x5468b7 = Object["getOwnPropertyDescriptor"](_0x34ea1f, _0x203f15) : _0x5468b7,
      _0x271652;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x4d6f00 = Reflect['decorate'](_0x302da7, _0x34ea1f, _0x203f15, _0x5468b7);
  } else {
    for (var _0x5d1a57 = _0x302da7['length'] - 1; _0x5d1a57 >= 0; _0x5d1a57--) {
      if (_0x271652 = _0x302da7[_0x5d1a57]) {
        _0x4d6f00 = (_0x4b9739 < 3 ? _0x271652(_0x4d6f00) : _0x4b9739 > 3 ? _0x271652(_0x34ea1f, _0x203f15, _0x4d6f00) : _0x271652(_0x34ea1f, _0x203f15)) || _0x4d6f00;
      }
    }
  }

  _0x4b9739 > 3 && _0x4d6f00 && Object['defineProperty'](_0x34ea1f, _0x203f15, _0x4d6f00);
  return _0x4d6f00;
},
    __metadata = this && this['__metadata'] || function (_0x5883fb, _0x59f6e0) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x5883fb, _0x59f6e0);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["AddAutoReplyDto"] = void 0;

const swagger_1 = require('@nestjs/swagger');

class AddAutoReplyDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "你是谁",
  'description': "提问的问题",
  'required': true
}), __metadata("design:type", String)], AddAutoReplyDto["prototype"], 'prompt', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "我是NineAi提供的Ai服务机器人",
  'description': "回答的答案",
  'required': true
}), __metadata("design:type", String)], AddAutoReplyDto['prototype'], "answer", void 0);

exports["AddAutoReplyDto"] = AddAutoReplyDto;