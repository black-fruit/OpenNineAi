'use strict';

var __decorate = this && this["__decorate"] || function (_0x5b39fc, _0x2aadf7, _0x239265, _0x174630) {
  var _0x2a7c8f = arguments["length"],
      _0x1516ed = _0x2a7c8f < 3 ? _0x2aadf7 : _0x174630 === null ? _0x174630 = Object['getOwnPropertyDescriptor'](_0x2aadf7, _0x239265) : _0x174630,
      _0x3e7ee8;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x1516ed = Reflect["decorate"](_0x5b39fc, _0x2aadf7, _0x239265, _0x174630);
  } else {
    for (var _0x457b66 = _0x5b39fc["length"] - 1; _0x457b66 >= 0; _0x457b66--) {
      if (_0x3e7ee8 = _0x5b39fc[_0x457b66]) {
        _0x1516ed = (_0x2a7c8f < 3 ? _0x3e7ee8(_0x1516ed) : _0x2a7c8f > 3 ? _0x3e7ee8(_0x2aadf7, _0x239265, _0x1516ed) : _0x3e7ee8(_0x2aadf7, _0x239265)) || _0x1516ed;
      }
    }
  }

  _0x2a7c8f > 3 && _0x1516ed && Object["defineProperty"](_0x2aadf7, _0x239265, _0x1516ed);
  return _0x1516ed;
},
    __metadata = this && this["__metadata"] || function (_0x4d94f9, _0x57ae90) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x4d94f9, _0x57ae90);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["CreatCramiDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class CreatCramiDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "套餐类型",
  'required': true
}), (0, class_validator_1['IsNumber'])({}, {
  'message': "套餐类型必须是number"
}), (0, class_validator_1['IsOptional'])(), __metadata('design:type', Number)], CreatCramiDto["prototype"], "packageId", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '单次生成卡密数量'
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "创建卡密的张数数量"
}), (0, class_validator_1["Max"])(50, {
  'message': '单次创建卡密的张数数量不能超过50张'
}), (0, class_validator_1['Min'])(1, {
  'message': '单次创建卡密的张数数量不能少于1张'
}), (0, class_validator_1['IsOptional'])(), __metadata('design:type', Number)], CreatCramiDto["prototype"], "count", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 0,
  'description': '卡密携带模型3额度'
}), (0, class_validator_1['IsNumber'])({}, {
  'message': '卡密携带的余额必须是number'
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], CreatCramiDto['prototype'], "model3Count", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 100,
  'description': "卡密携带模型4额度"
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "卡密携带额度类型必须是number"
}), (0, class_validator_1['IsOptional'])(), __metadata('design:type', Number)], CreatCramiDto["prototype"], "model4Count", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 3,
  'description': "卡密携带MJ绘画额度"
}), (0, class_validator_1["IsNumber"])({}, {
  'message': '卡密携带额度类型必须是number'
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], CreatCramiDto["prototype"], "drawMjCount", void 0);

exports["CreatCramiDto"] = CreatCramiDto;