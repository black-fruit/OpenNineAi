'use strict';

var __decorate = this && this["__decorate"] || function (_0x12b933, _0x4582a0, _0x5959af, _0x3f7fb2) {
  var _0x10eb66 = arguments["length"],
      _0xeeb456 = _0x10eb66 < 3 ? _0x4582a0 : _0x3f7fb2 === null ? _0x3f7fb2 = Object["getOwnPropertyDescriptor"](_0x4582a0, _0x5959af) : _0x3f7fb2,
      _0x44eeb1;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0xeeb456 = Reflect["decorate"](_0x12b933, _0x4582a0, _0x5959af, _0x3f7fb2);
  } else {
    for (var _0x30b721 = _0x12b933["length"] - 1; _0x30b721 >= 0; _0x30b721--) {
      if (_0x44eeb1 = _0x12b933[_0x30b721]) {
        _0xeeb456 = (_0x10eb66 < 3 ? _0x44eeb1(_0xeeb456) : _0x10eb66 > 3 ? _0x44eeb1(_0x4582a0, _0x5959af, _0xeeb456) : _0x44eeb1(_0x4582a0, _0x5959af)) || _0xeeb456;
      }
    }
  }

  _0x10eb66 > 3 && _0xeeb456 && Object["defineProperty"](_0x4582a0, _0x5959af, _0xeeb456);
  return _0xeeb456;
},
    __metadata = this && this["__metadata"] || function (_0x331cdb, _0x46cf4a) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x331cdb, _0x46cf4a);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["queryInviteRecordDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require('@nestjs/swagger');

class queryInviteRecordDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '查询页数',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], queryInviteRecordDto["prototype"], "page", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], queryInviteRecordDto["prototype"], "size", void 0);

exports["queryInviteRecordDto"] = queryInviteRecordDto;