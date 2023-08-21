'use strict';

var __decorate = this && this["__decorate"] || function (_0x59469b, _0x24ddfb, _0x469377, _0x4f7205) {
  var _0x3ed606 = arguments['length'],
      _0x5de469 = _0x3ed606 < 3 ? _0x24ddfb : _0x4f7205 === null ? _0x4f7205 = Object["getOwnPropertyDescriptor"](_0x24ddfb, _0x469377) : _0x4f7205,
      _0xd72776;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x5de469 = Reflect["decorate"](_0x59469b, _0x24ddfb, _0x469377, _0x4f7205);
  } else {
    for (var _0x11bfb9 = _0x59469b["length"] - 1; _0x11bfb9 >= 0; _0x11bfb9--) {
      if (_0xd72776 = _0x59469b[_0x11bfb9]) {
        _0x5de469 = (_0x3ed606 < 3 ? _0xd72776(_0x5de469) : _0x3ed606 > 3 ? _0xd72776(_0x24ddfb, _0x469377, _0x5de469) : _0xd72776(_0x24ddfb, _0x469377)) || _0x5de469;
      }
    }
  }

  _0x3ed606 > 3 && _0x5de469 && Object["defineProperty"](_0x24ddfb, _0x469377, _0x5de469);
  return _0x5de469;
},
    __metadata = this && this["__metadata"] || function (_0x7aed4d, _0x19b0ed) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x7aed4d, _0x19b0ed);
  }
};

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["UpdateKeyDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class UpdateKeyDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "当前key的id"
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "id必须是number类型"
}), (0, class_validator_1["IsDefined"])({
  'message': "id不能为空"
}), __metadata("design:type", Number)], UpdateKeyDto["prototype"], 'id', void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "sk-xxxxxxxxxxxxxxxxxxx",
  'description': "Chatgpt key"
}), (0, class_validator_1["IsDefined"])({
  'message': "key不能为空"
}), __metadata("design:type", String)], UpdateKeyDto["prototype"], 'key', void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "当前key的启用状态"
}), (0, class_validator_1['IsNumber'])({}, {
  'message': "启用状态必须是number类型"
}), (0, class_validator_1["IsIn"])([0, 1], {
  'message': "启用状态只能是0或1"
}), __metadata("design:type", Number)], UpdateKeyDto["prototype"], 'status', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "gpt-3.5-turbo",
  'description': '当前key绑定的模型'
}), (0, class_validator_1["IsDefined"])({
  'message': "支持的模型不能为空"
}), __metadata("design:type", String)], UpdateKeyDto["prototype"], "model", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "18$",
  'description': "当前key的余额类型"
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', String)], UpdateKeyDto["prototype"], "type", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "当前key的轮询权重"
}), (0, class_validator_1['IsNumber'])({}, {
  'message': "必须是number类型"
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], UpdateKeyDto['prototype'], "weight", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 0,
  'description': "当前key支持的最大上下文"
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "必须是number类型"
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], UpdateKeyDto['prototype'], "maxModelTokens", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 0,
  'description': "当前key支持的最大回复Token"
}), (0, class_validator_1['IsNumber'])({}, {
  'message': "必须是number类型"
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], UpdateKeyDto["prototype"], "maxResponseTokens", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': '',
  'description': "当前key绑定的代理地址"
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], UpdateKeyDto["prototype"], 'openaiProxyUrl', void 0);

exports["UpdateKeyDto"] = UpdateKeyDto;