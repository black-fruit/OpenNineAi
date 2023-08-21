'use strict';

var __decorate = this && this["__decorate"] || function (_0x591b61, _0x17c2cb, _0x779a8c, _0x21778d) {
  var _0x33a63f = arguments["length"],
      _0x1ee58d = _0x33a63f < 3 ? _0x17c2cb : _0x21778d === null ? _0x21778d = Object["getOwnPropertyDescriptor"](_0x17c2cb, _0x779a8c) : _0x21778d,
      _0x1fec97;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x1ee58d = Reflect["decorate"](_0x591b61, _0x17c2cb, _0x779a8c, _0x21778d);
  } else {
    for (var _0x3a0742 = _0x591b61['length'] - 1; _0x3a0742 >= 0; _0x3a0742--) {
      if (_0x1fec97 = _0x591b61[_0x3a0742]) {
        _0x1ee58d = (_0x33a63f < 3 ? _0x1fec97(_0x1ee58d) : _0x33a63f > 3 ? _0x1fec97(_0x17c2cb, _0x779a8c, _0x1ee58d) : _0x1fec97(_0x17c2cb, _0x779a8c)) || _0x1ee58d;
      }
    }
  }

  _0x33a63f > 3 && _0x1ee58d && Object['defineProperty'](_0x17c2cb, _0x779a8c, _0x1ee58d);
  return _0x1ee58d;
},
    __metadata = this && this['__metadata'] || function (_0x194c8d, _0x3bf610) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x194c8d, _0x3bf610);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["QuerAllCramiDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class QuerAllCramiDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "查询页数",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], QuerAllCramiDto['prototype'], "page", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': '每页数量',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QuerAllCramiDto['prototype'], 'size', void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "使用人Id",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Number)], QuerAllCramiDto["prototype"], "useId", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "卡密状态 0：未使用 1：已消费",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QuerAllCramiDto["prototype"], "status", void 0);

exports['QuerAllCramiDto'] = QuerAllCramiDto;