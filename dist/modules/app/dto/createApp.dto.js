'use strict';

var __decorate = this && this["__decorate"] || function (_0x389be7, _0x2d7868, _0x4b3ed3, _0x51cc74) {
  var _0x2228f6 = arguments["length"],
      _0x121746 = _0x2228f6 < 3 ? _0x2d7868 : _0x51cc74 === null ? _0x51cc74 = Object['getOwnPropertyDescriptor'](_0x2d7868, _0x4b3ed3) : _0x51cc74,
      _0x2a1659;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x121746 = Reflect["decorate"](_0x389be7, _0x2d7868, _0x4b3ed3, _0x51cc74);
  } else {
    for (var _0x5ec11f = _0x389be7["length"] - 1; _0x5ec11f >= 0; _0x5ec11f--) {
      if (_0x2a1659 = _0x389be7[_0x5ec11f]) {
        _0x121746 = (_0x2228f6 < 3 ? _0x2a1659(_0x121746) : _0x2228f6 > 3 ? _0x2a1659(_0x2d7868, _0x4b3ed3, _0x121746) : _0x2a1659(_0x2d7868, _0x4b3ed3)) || _0x121746;
      }
    }
  }

  _0x2228f6 > 3 && _0x121746 && Object["defineProperty"](_0x2d7868, _0x4b3ed3, _0x121746);
  return _0x121746;
},
    __metadata = this && this["__metadata"] || function (_0x1f0a25, _0x53347c) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x1f0a25, _0x53347c);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["CreateAppDto"] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require("@nestjs/swagger");

class CreateAppDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "前端助手",
  'description': "app名称",
  'required': true
}), (0, class_validator_1["IsDefined"])({
  'message': 'app名称是必传参数'
}), __metadata("design:type", String)], CreateAppDto['prototype'], "name", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': 'app分类Id',
  'required': true
}), (0, class_validator_1["IsDefined"])({
  'message': "app分类Id必传参数"
}), __metadata("design:type", Number)], CreateAppDto["prototype"], 'catId', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "适用于编程编码、期望成为您的编程助手",
  'description': "app名称详情描述",
  'required': false
}), (0, class_validator_1['IsDefined'])({
  'message': "app名称描述是必传参数"
}), __metadata("design:type", String)], CreateAppDto["prototype"], "des", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "你现在是一个翻译官。接下来我说的所有话帮我翻译成中文",
  'description': '预设的prompt',
  'required': true
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], CreateAppDto["prototype"], "preset", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 'https://xxxx.png',
  'description': "套餐封面图片",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], CreateAppDto["prototype"], 'coverImg', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 100,
  'description': "套餐排序、数字越大越靠前",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], CreateAppDto["prototype"], "order", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "套餐状态 0：禁用 1：启用",
  'required': true
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "套餐状态必须是Number"
}), (0, class_validator_1['IsIn'])([0, 1, 3, 4, 5], {
  'message': '套餐状态错误'
}), __metadata('design:type', Number)], CreateAppDto["prototype"], "status", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "这是一句示例数据",
  'description': "app示例数据",
  'required': false
}), __metadata("design:type", String)], CreateAppDto["prototype"], "demoData", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "system",
  'description': "创建的角色",
  'required': false
}), __metadata("design:type", String)], CreateAppDto["prototype"], 'role', void 0);

exports['CreateAppDto'] = CreateAppDto;