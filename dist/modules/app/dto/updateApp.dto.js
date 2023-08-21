'use strict';

var __decorate = this && this["__decorate"] || function (_0x3ec368, _0x554723, _0x530574, _0x8b6cf3) {
  var _0x122f0a = arguments['length'],
      _0xc6eab0 = _0x122f0a < 3 ? _0x554723 : _0x8b6cf3 === null ? _0x8b6cf3 = Object["getOwnPropertyDescriptor"](_0x554723, _0x530574) : _0x8b6cf3,
      _0x5e1c3a;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0xc6eab0 = Reflect["decorate"](_0x3ec368, _0x554723, _0x530574, _0x8b6cf3);
  } else {
    for (var _0x2c4870 = _0x3ec368["length"] - 1; _0x2c4870 >= 0; _0x2c4870--) {
      if (_0x5e1c3a = _0x3ec368[_0x2c4870]) {
        _0xc6eab0 = (_0x122f0a < 3 ? _0x5e1c3a(_0xc6eab0) : _0x122f0a > 3 ? _0x5e1c3a(_0x554723, _0x530574, _0xc6eab0) : _0x5e1c3a(_0x554723, _0x530574)) || _0xc6eab0;
      }
    }
  }

  _0x122f0a > 3 && _0xc6eab0 && Object["defineProperty"](_0x554723, _0x530574, _0xc6eab0);
  return _0xc6eab0;
},
    __metadata = this && this['__metadata'] || function (_0x15b9b4, _0x5a5533) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x15b9b4, _0x5a5533);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['UpdateAppDto'] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require("@nestjs/swagger"),
      createApp_dto_1 = require("./createApp.dto");

class UpdateAppDto extends createApp_dto_1['CreateAppDto'] {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': '要修改的分类Id',
  'required': true
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "分类ID必须是Number"
}), __metadata("design:type", Number)], UpdateAppDto['prototype'], 'id', void 0);

exports["UpdateAppDto"] = UpdateAppDto;