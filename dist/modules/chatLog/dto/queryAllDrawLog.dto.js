'use strict';

var __decorate = this && this['__decorate'] || function (_0x5372c1, _0x544d52, _0x442010, _0x45a318) {
  var _0x2767a5 = arguments['length'],
      _0x5b8a02 = _0x2767a5 < 3 ? _0x544d52 : _0x45a318 === null ? _0x45a318 = Object["getOwnPropertyDescriptor"](_0x544d52, _0x442010) : _0x45a318,
      _0x2173ff;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x5b8a02 = Reflect["decorate"](_0x5372c1, _0x544d52, _0x442010, _0x45a318);
  } else {
    for (var _0x5d20c1 = _0x5372c1["length"] - 1; _0x5d20c1 >= 0; _0x5d20c1--) {
      if (_0x2173ff = _0x5372c1[_0x5d20c1]) {
        _0x5b8a02 = (_0x2767a5 < 3 ? _0x2173ff(_0x5b8a02) : _0x2767a5 > 3 ? _0x2173ff(_0x544d52, _0x442010, _0x5b8a02) : _0x2173ff(_0x544d52, _0x442010)) || _0x5b8a02;
      }
    }
  }

  _0x2767a5 > 3 && _0x5b8a02 && Object["defineProperty"](_0x544d52, _0x442010, _0x5b8a02);
  return _0x5b8a02;
},
    __metadata = this && this["__metadata"] || function (_0xfb9737, _0x370859) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0xfb9737, _0x370859);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["QuerAllDrawLogDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class QuerAllDrawLogDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], QuerAllDrawLogDto['prototype'], "page", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QuerAllDrawLogDto['prototype'], "size", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "是否推荐0: 默认 1: 推荐",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QuerAllDrawLogDto["prototype"], "rec", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 99,
  'description': "生成图片的用户id",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QuerAllDrawLogDto["prototype"], "userId", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': "DALL-E2",
  'description': "生成图片使用的模型",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", String)], QuerAllDrawLogDto["prototype"], 'model', void 0);

exports["QuerAllDrawLogDto"] = QuerAllDrawLogDto;