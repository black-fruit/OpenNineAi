'use strict';

var __decorate = this && this['__decorate'] || function (_0x572e1d, _0x182903, _0x31b44e, _0xb0bf83) {
  var _0x1f7a27 = arguments["length"],
      _0x5dc6f2 = _0x1f7a27 < 3 ? _0x182903 : _0xb0bf83 === null ? _0xb0bf83 = Object["getOwnPropertyDescriptor"](_0x182903, _0x31b44e) : _0xb0bf83,
      _0x23b52c;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x5dc6f2 = Reflect["decorate"](_0x572e1d, _0x182903, _0x31b44e, _0xb0bf83);
  } else {
    for (var _0x170d21 = _0x572e1d["length"] - 1; _0x170d21 >= 0; _0x170d21--) {
      if (_0x23b52c = _0x572e1d[_0x170d21]) {
        _0x5dc6f2 = (_0x1f7a27 < 3 ? _0x23b52c(_0x5dc6f2) : _0x1f7a27 > 3 ? _0x23b52c(_0x182903, _0x31b44e, _0x5dc6f2) : _0x23b52c(_0x182903, _0x31b44e)) || _0x5dc6f2;
      }
    }
  }

  _0x1f7a27 > 3 && _0x5dc6f2 && Object["defineProperty"](_0x182903, _0x31b44e, _0x5dc6f2);
  return _0x5dc6f2;
},
    __metadata = this && this["__metadata"] || function (_0x52d4ce, _0x3e3998) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x52d4ce, _0x3e3998);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['CreatePackageDto'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger"),
      class_transformer_1 = require("class-transformer");

class CreatePackageDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "基础套餐100次卡",
  'description': "套餐名称",
  'required': true
}), (0, class_validator_1["IsDefined"])({
  'message': "套餐名称是必传参数"
}), __metadata("design:type", String)], CreatePackageDto["prototype"], "name", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': '这是一个100次对话余额的套餐，我们将为您额外赠送3次绘画余额，活动期间，我们将在套餐基础上额外赠送您十次对话余额和1次绘画余额',
  'description': "套餐详情描述",
  'required': true
}), (0, class_validator_1["IsDefined"])({
  'message': "套餐描述是必传参数"
}), __metadata('design:type', String)], CreatePackageDto["prototype"], "des", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 7,
  'default': 0,
  'description': "套餐等级设置"
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "套餐等级权重必须为数字"
}), __metadata("design:type", Number)], CreatePackageDto['prototype'], 'weight', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "套餐扣费类型 1：按次数 2：按Token",
  'required': true
}), __metadata('design:type', Number)], CreatePackageDto["prototype"], "deductionType", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "https://xxxx.png",
  'description': '套餐封面图片'
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], CreatePackageDto['prototype'], 'coverImg', void 0);

__decorate([(0, class_transformer_1['Transform'])(({
  "value": _0x1a32b8
}) => parseFloat(_0x1a32b8)), __metadata('design:type', Number)], CreatePackageDto["prototype"], 'price', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 100,
  'description': "套餐排序、数字越大越靠前"
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], CreatePackageDto["prototype"], "order", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "套餐状态 0：禁用 1：启用",
  'required': true
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "套餐状态必须是Number"
}), (0, class_validator_1["IsIn"])([0, 1], {
  'message': '套餐状态错误'
}), __metadata('design:type', Number)], CreatePackageDto["prototype"], "status", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 7,
  'default': 0,
  'description': "套餐有效期 -1为永久不过期"
}), (0, class_validator_1['IsNumber'])({}, {
  'message': "套餐有效期天数类型必须是number"
}), __metadata("design:type", Number)], CreatePackageDto["prototype"], "days", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1000,
  'default': 0,
  'description': '模型3对话次数'
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "模型3对话次数必须是number类型"
}), __metadata("design:type", Number)], CreatePackageDto["prototype"], "model3Count", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'default': 0,
  'description': '模型4对话次数'
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "模型4对话次数必须是number类型"
}), __metadata("design:type", Number)], CreatePackageDto["prototype"], "model4Count", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'default': 0,
  'description': 'MJ绘画次数'
}), (0, class_validator_1['IsNumber'])({}, {
  'message': "MJ绘画次数必须是number类型"
}), __metadata("design:type", Number)], CreatePackageDto["prototype"], "drawMjCount", void 0);

exports['CreatePackageDto'] = CreatePackageDto;