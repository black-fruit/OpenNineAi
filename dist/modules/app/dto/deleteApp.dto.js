'use strict';

var __decorate = this && this["__decorate"] || function (_0x345d4d, _0x3399bf, _0x4c50b4, _0x12e853) {
  var _0x4217a8 = arguments["length"],
      _0x4c6c3f = _0x4217a8 < 3 ? _0x3399bf : _0x12e853 === null ? _0x12e853 = Object["getOwnPropertyDescriptor"](_0x3399bf, _0x4c50b4) : _0x12e853,
      _0x4adfce;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x4c6c3f = Reflect["decorate"](_0x345d4d, _0x3399bf, _0x4c50b4, _0x12e853);
  } else {
    for (var _0x41f371 = _0x345d4d["length"] - 1; _0x41f371 >= 0; _0x41f371--) {
      if (_0x4adfce = _0x345d4d[_0x41f371]) {
        _0x4c6c3f = (_0x4217a8 < 3 ? _0x4adfce(_0x4c6c3f) : _0x4217a8 > 3 ? _0x4adfce(_0x3399bf, _0x4c50b4, _0x4c6c3f) : _0x4adfce(_0x3399bf, _0x4c50b4)) || _0x4c6c3f;
      }
    }
  }

  _0x4217a8 > 3 && _0x4c6c3f && Object["defineProperty"](_0x3399bf, _0x4c50b4, _0x4c6c3f);
  return _0x4c6c3f;
},
    __metadata = this && this["__metadata"] || function (_0xd063bd, _0x25aec0) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0xd063bd, _0x25aec0);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["OperateAppDto"] = void 0;

const swagger_1 = require('@nestjs/swagger'),
      class_validator_1 = require("class-validator");

class OperateAppDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "要删除的appId",
  'required': true
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "ID必须是Number"
}), __metadata("design:type", Number)], OperateAppDto["prototype"], 'id', void 0);

exports['OperateAppDto'] = OperateAppDto;