'use strict';

var __decorate = this && this["__decorate"] || function (_0x3e6999, _0x1965ca, _0x41b7d5, _0x45a09b) {
  var _0x19138f = arguments["length"],
      _0x4a3432 = _0x19138f < 3 ? _0x1965ca : _0x45a09b === null ? _0x45a09b = Object["getOwnPropertyDescriptor"](_0x1965ca, _0x41b7d5) : _0x45a09b,
      _0x4f5281;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x4a3432 = Reflect['decorate'](_0x3e6999, _0x1965ca, _0x41b7d5, _0x45a09b);
  } else {
    for (var _0x200654 = _0x3e6999["length"] - 1; _0x200654 >= 0; _0x200654--) {
      if (_0x4f5281 = _0x3e6999[_0x200654]) {
        _0x4a3432 = (_0x19138f < 3 ? _0x4f5281(_0x4a3432) : _0x19138f > 3 ? _0x4f5281(_0x1965ca, _0x41b7d5, _0x4a3432) : _0x4f5281(_0x1965ca, _0x41b7d5)) || _0x4a3432;
      }
    }
  }

  _0x19138f > 3 && _0x4a3432 && Object["defineProperty"](_0x1965ca, _0x41b7d5, _0x4a3432);
  return _0x4a3432;
},
    __metadata = this && this['__metadata'] || function (_0x3409c0, _0x2dd585) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x3409c0, _0x2dd585);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["GetKeyListDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class GetKeyListDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], GetKeyListDto["prototype"], 'page', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': '每页数量',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], GetKeyListDto["prototype"], 'size', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "sk-xx",
  'description': "key内容",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], GetKeyListDto["prototype"], "key", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 'gpt-3.5-turbo',
  'description': "当前key绑定的模型",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], GetKeyListDto["prototype"], 'model', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "key启用状态 0：未使用 1：已消费",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], GetKeyListDto["prototype"], "status", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "当前key的账号状态"
}), (0, class_validator_1["IsOptional"])(), (0, class_validator_1["IsNumber"])({}, {
  'message': "key状态必须是number类型"
}), (0, class_validator_1["IsIn"])([-1, 1, 2], {
  'message': "非法参数"
}), __metadata('design:type', Number)], GetKeyListDto["prototype"], 'keyStatus', void 0);

exports["GetKeyListDto"] = GetKeyListDto;