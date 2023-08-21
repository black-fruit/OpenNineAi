'use strict';

var __decorate = this && this["__decorate"] || function (_0x501133, _0x2d25d9, _0x2c6ff3, _0x368fa5) {
  var _0xde88d4 = arguments["length"],
      _0x45749d = _0xde88d4 < 3 ? _0x2d25d9 : _0x368fa5 === null ? _0x368fa5 = Object["getOwnPropertyDescriptor"](_0x2d25d9, _0x2c6ff3) : _0x368fa5,
      _0x217c39;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x45749d = Reflect["decorate"](_0x501133, _0x2d25d9, _0x2c6ff3, _0x368fa5);
  } else {
    for (var _0x22f11d = _0x501133['length'] - 1; _0x22f11d >= 0; _0x22f11d--) {
      if (_0x217c39 = _0x501133[_0x22f11d]) {
        _0x45749d = (_0xde88d4 < 3 ? _0x217c39(_0x45749d) : _0xde88d4 > 3 ? _0x217c39(_0x2d25d9, _0x2c6ff3, _0x45749d) : _0x217c39(_0x2d25d9, _0x2c6ff3)) || _0x45749d;
      }
    }
  }

  _0xde88d4 > 3 && _0x45749d && Object['defineProperty'](_0x2d25d9, _0x2c6ff3, _0x45749d);
  return _0x45749d;
},
    __metadata = this && this["__metadata"] || function (_0x18cf3d, _0x23b776) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x18cf3d, _0x23b776);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["AddKeyDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class AddKeyDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "sk-xxxxxxxxxxxxxxxxxxx",
  'description': "Chatgpt key"
}), (0, class_validator_1['IsDefined'])({
  'message': "key不能为空"
}), __metadata("design:type", String)], AddKeyDto['prototype'], 'key', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "当前key的启用状态"
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "启用状态必须是number类型"
}), (0, class_validator_1["IsIn"])([0, 1], {
  'message': '启用状态只能是0或1'
}), __metadata("design:type", Number)], AddKeyDto['prototype'], 'status', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "gpt-3.5-turbo",
  'description': '当前key绑定的模型'
}), (0, class_validator_1["IsDefined"])({
  'message': '支持的模型不能为空'
}), __metadata("design:type", String)], AddKeyDto["prototype"], "model", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "18$",
  'description': "当前key的余额类型"
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', String)], AddKeyDto["prototype"], "type", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "当前key的轮询权重"
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "必须是number类型"
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], AddKeyDto['prototype'], "weight", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 0,
  'description': "当前key支持的最大上下文"
}), (0, class_validator_1["IsNumber"])({}, {
  'message': '必须是number类型'
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], AddKeyDto["prototype"], "maxModelTokens", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 0,
  'description': "当前key支持的最大回复Token"
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "必须是number类型"
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], AddKeyDto['prototype'], "maxResponseTokens", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': '',
  'description': "当前key绑定的代理地址"
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', String)], AddKeyDto["prototype"], "openaiProxyUrl", void 0);

exports["AddKeyDto"] = AddKeyDto;