'use strict';

var __decorate = this && this["__decorate"] || function (_0x59f509, _0x489401, _0x39f754, _0x27fdc3) {
  var _0x45d8f7 = arguments["length"],
      _0x4b4086 = _0x45d8f7 < 3 ? _0x489401 : _0x27fdc3 === null ? _0x27fdc3 = Object['getOwnPropertyDescriptor'](_0x489401, _0x39f754) : _0x27fdc3,
      _0x176298;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x4b4086 = Reflect["decorate"](_0x59f509, _0x489401, _0x39f754, _0x27fdc3);
  } else {
    for (var _0x1ec925 = _0x59f509["length"] - 1; _0x1ec925 >= 0; _0x1ec925--) {
      if (_0x176298 = _0x59f509[_0x1ec925]) {
        _0x4b4086 = (_0x45d8f7 < 3 ? _0x176298(_0x4b4086) : _0x45d8f7 > 3 ? _0x176298(_0x489401, _0x39f754, _0x4b4086) : _0x176298(_0x489401, _0x39f754)) || _0x4b4086;
      }
    }
  }

  _0x45d8f7 > 3 && _0x4b4086 && Object["defineProperty"](_0x489401, _0x39f754, _0x4b4086);
  return _0x4b4086;
},
    __metadata = this && this["__metadata"] || function (_0x18515d, _0x244e7e) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x18515d, _0x244e7e);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["UpdatePackageDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger"),
      createPackage_dto_1 = require("./createPackage.dto");

class UpdatePackageDto extends createPackage_dto_1['CreatePackageDto'] {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "要修改的套餐Id",
  'required': true
}), (0, class_validator_1["IsNumber"])({}, {
  'message': '套餐ID必须是Number'
}), __metadata("design:type", Number)], UpdatePackageDto["prototype"], 'id', void 0);

exports["UpdatePackageDto"] = UpdatePackageDto;