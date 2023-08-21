'use strict';

var __decorate = this && this["__decorate"] || function (_0x4ef1d1, _0x1c397b, _0x28e3ac, _0x556a57) {
  var _0x4b47b9 = arguments["length"],
      _0x7e2d3 = _0x4b47b9 < 3 ? _0x1c397b : _0x556a57 === null ? _0x556a57 = Object["getOwnPropertyDescriptor"](_0x1c397b, _0x28e3ac) : _0x556a57,
      _0x21a849;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x7e2d3 = Reflect["decorate"](_0x4ef1d1, _0x1c397b, _0x28e3ac, _0x556a57);
  } else {
    for (var _0x47052b = _0x4ef1d1["length"] - 1; _0x47052b >= 0; _0x47052b--) {
      if (_0x21a849 = _0x4ef1d1[_0x47052b]) {
        _0x7e2d3 = (_0x4b47b9 < 3 ? _0x21a849(_0x7e2d3) : _0x4b47b9 > 3 ? _0x21a849(_0x1c397b, _0x28e3ac, _0x7e2d3) : _0x21a849(_0x1c397b, _0x28e3ac)) || _0x7e2d3;
      }
    }
  }

  _0x4b47b9 > 3 && _0x7e2d3 && Object['defineProperty'](_0x1c397b, _0x28e3ac, _0x7e2d3);
  return _0x7e2d3;
},
    __metadata = this && this["__metadata"] || function (_0x5139ae, _0x47469e) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x5139ae, _0x47469e);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["DeletePackageDto"] = void 0;

const swagger_1 = require('@nestjs/swagger'),
      class_validator_1 = require("class-validator");

class DeletePackageDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '要修改的套餐Id',
  'required': true
}), (0, class_validator_1["IsNumber"])({}, {
  'message': '套餐ID必须是Number'
}), __metadata("design:type", Number)], DeletePackageDto['prototype'], 'id', void 0);

exports["DeletePackageDto"] = DeletePackageDto;