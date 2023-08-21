'use strict';

var __decorate = this && this["__decorate"] || function (_0x2a32d7, _0x3e1578, _0x1a1d18, _0x12e3ce) {
  var _0x1cc2c4 = arguments['length'],
      _0x131df8 = _0x1cc2c4 < 3 ? _0x3e1578 : _0x12e3ce === null ? _0x12e3ce = Object["getOwnPropertyDescriptor"](_0x3e1578, _0x1a1d18) : _0x12e3ce,
      _0x48f970;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x131df8 = Reflect['decorate'](_0x2a32d7, _0x3e1578, _0x1a1d18, _0x12e3ce);
  } else {
    for (var _0x6a88e2 = _0x2a32d7["length"] - 1; _0x6a88e2 >= 0; _0x6a88e2--) {
      if (_0x48f970 = _0x2a32d7[_0x6a88e2]) {
        _0x131df8 = (_0x1cc2c4 < 3 ? _0x48f970(_0x131df8) : _0x1cc2c4 > 3 ? _0x48f970(_0x3e1578, _0x1a1d18, _0x131df8) : _0x48f970(_0x3e1578, _0x1a1d18)) || _0x131df8;
      }
    }
  }

  _0x1cc2c4 > 3 && _0x131df8 && Object["defineProperty"](_0x3e1578, _0x1a1d18, _0x131df8);
  return _0x131df8;
},
    __metadata = this && this["__metadata"] || function (_0x2a809c, _0x27eab0) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x2a809c, _0x27eab0);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['AuditOrderDto'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class AuditOrderDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "审核工单状态",
  'required': true
}), (0, class_validator_1['IsIn'])([1, -1], {
  'message': "非法工单状态"
}), __metadata("design:type", Number)], AuditOrderDto["prototype"], "status", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "工单id",
  'required': true
}), (0, class_validator_1["IsNumber"])({}, {
  'message': '工单id必须为数字'
}), __metadata("design:type", Number)], AuditOrderDto["prototype"], 'id', void 0);

exports['AuditOrderDto'] = AuditOrderDto;