'use strict';

var __decorate = this && this["__decorate"] || function (_0x4715ee, _0x3dd0cd, _0x5c0e2d, _0x5843f9) {
  var _0x59a66e = arguments["length"],
      _0x5f1344 = _0x59a66e < 3 ? _0x3dd0cd : _0x5843f9 === null ? _0x5843f9 = Object["getOwnPropertyDescriptor"](_0x3dd0cd, _0x5c0e2d) : _0x5843f9,
      _0x2ce4a5;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x5f1344 = Reflect["decorate"](_0x4715ee, _0x3dd0cd, _0x5c0e2d, _0x5843f9);
  } else {
    for (var _0x3ce2b2 = _0x4715ee["length"] - 1; _0x3ce2b2 >= 0; _0x3ce2b2--) {
      if (_0x2ce4a5 = _0x4715ee[_0x3ce2b2]) {
        _0x5f1344 = (_0x59a66e < 3 ? _0x2ce4a5(_0x5f1344) : _0x59a66e > 3 ? _0x2ce4a5(_0x3dd0cd, _0x5c0e2d, _0x5f1344) : _0x2ce4a5(_0x3dd0cd, _0x5c0e2d)) || _0x5f1344;
      }
    }
  }

  _0x59a66e > 3 && _0x5f1344 && Object["defineProperty"](_0x3dd0cd, _0x5c0e2d, _0x5f1344);
  return _0x5f1344;
},
    __metadata = this && this["__metadata"] || function (_0x3f63fa, _0x3fcf8e) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x3f63fa, _0x3fcf8e);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["UpdateGroupDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class UpdateGroupDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "修改的对话ID",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], UpdateGroupDto['prototype'], "groupId", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 10,
  'description': "对话组title",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", String)], UpdateGroupDto["prototype"], "title", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "对话组是否置顶",
  'required': false
}), (0, class_validator_1['IsOptional'])(), __metadata("design:type", Boolean)], UpdateGroupDto['prototype'], "isSticky", void 0);

exports["UpdateGroupDto"] = UpdateGroupDto;