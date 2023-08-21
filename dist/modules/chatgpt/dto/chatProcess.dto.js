'use strict';

var __decorate = this && this["__decorate"] || function (_0x5edf9a, _0x58f942, _0x461e69, _0x58195c) {
  var _0x5a1dde = arguments['length'],
      _0x4e841a = _0x5a1dde < 3 ? _0x58f942 : _0x58195c === null ? _0x58195c = Object["getOwnPropertyDescriptor"](_0x58f942, _0x461e69) : _0x58195c,
      _0x5b5b9e;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x4e841a = Reflect["decorate"](_0x5edf9a, _0x58f942, _0x461e69, _0x58195c);
  } else {
    for (var _0x591747 = _0x5edf9a["length"] - 1; _0x591747 >= 0; _0x591747--) {
      if (_0x5b5b9e = _0x5edf9a[_0x591747]) {
        _0x4e841a = (_0x5a1dde < 3 ? _0x5b5b9e(_0x4e841a) : _0x5a1dde > 3 ? _0x5b5b9e(_0x58f942, _0x461e69, _0x4e841a) : _0x5b5b9e(_0x58f942, _0x461e69)) || _0x4e841a;
      }
    }
  }

  _0x5a1dde > 3 && _0x4e841a && Object["defineProperty"](_0x58f942, _0x461e69, _0x4e841a);
  return _0x4e841a;
},
    __metadata = this && this["__metadata"] || function (_0x2933d1, _0x5fe233) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x2933d1, _0x5fe233);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["ChatProcessDto"] = exports['Options'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger'),
      class_transformer_1 = require("class-transformer");

class Options {}

__decorate([(0, class_validator_1["IsString"])(), __metadata("design:type", String)], Options["prototype"], "parentMessageId", void 0);

exports['Options'] = Options;

class ChatProcessDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "hello, Who are you",
  'description': "对话信息"
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "提问信息不能为空！"
}), __metadata("design:type", String)], ChatProcessDto["prototype"], "prompt", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "{ parentMessageId: 0 }",
  'description': "上次对话信息",
  'required': false
}), (0, class_transformer_1["Type"])(() => Options), __metadata("design:type", Options)], ChatProcessDto["prototype"], "options", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
  'description': '系统预设信息'
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], ChatProcessDto["prototype"], "systemMessage", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "应用id",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], ChatProcessDto["prototype"], "appId", void 0);

exports["ChatProcessDto"] = ChatProcessDto;