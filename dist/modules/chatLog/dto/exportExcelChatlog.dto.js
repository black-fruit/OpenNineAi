'use strict';

var __decorate = this && this["__decorate"] || function (_0x54d501, _0xb996ab, _0x5c79dd, _0x595e78) {
  var _0x226feb = arguments["length"],
      _0x2a5bdf = _0x226feb < 3 ? _0xb996ab : _0x595e78 === null ? _0x595e78 = Object["getOwnPropertyDescriptor"](_0xb996ab, _0x5c79dd) : _0x595e78,
      _0x3c15d5;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x2a5bdf = Reflect["decorate"](_0x54d501, _0xb996ab, _0x5c79dd, _0x595e78);
  } else {
    for (var _0x49f420 = _0x54d501['length'] - 1; _0x49f420 >= 0; _0x49f420--) {
      if (_0x3c15d5 = _0x54d501[_0x49f420]) {
        _0x2a5bdf = (_0x226feb < 3 ? _0x3c15d5(_0x2a5bdf) : _0x226feb > 3 ? _0x3c15d5(_0xb996ab, _0x5c79dd, _0x2a5bdf) : _0x3c15d5(_0xb996ab, _0x5c79dd)) || _0x2a5bdf;
      }
    }
  }

  _0x226feb > 3 && _0x2a5bdf && Object['defineProperty'](_0xb996ab, _0x5c79dd, _0x2a5bdf);
  return _0x2a5bdf;
},
    __metadata = this && this['__metadata'] || function (_0x1a4e7d, _0x51e4f2) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x1a4e7d, _0x51e4f2);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["ExportExcelChatlogDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class ExportExcelChatlogDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], ExportExcelChatlogDto['prototype'], 'page', void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], ExportExcelChatlogDto["prototype"], "size", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': '您好',
  'description': "用户询问的问题",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], ExportExcelChatlogDto["prototype"], 'prompt', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "J_longyan@163.com",
  'description': '用户邮箱',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', String)], ExportExcelChatlogDto["prototype"], "email", void 0);

exports["ExportExcelChatlogDto"] = ExportExcelChatlogDto;