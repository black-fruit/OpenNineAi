'use strict';

var __decorate = this && this["__decorate"] || function (_0x180551, _0x38e47a, _0x51cbf9, _0x3aba7b) {
  var _0x5f042a = arguments['length'],
      _0x42b376 = _0x5f042a < 3 ? _0x38e47a : _0x3aba7b === null ? _0x3aba7b = Object["getOwnPropertyDescriptor"](_0x38e47a, _0x51cbf9) : _0x3aba7b,
      _0x3b33fa;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x42b376 = Reflect['decorate'](_0x180551, _0x38e47a, _0x51cbf9, _0x3aba7b);
  } else {
    for (var _0x3e8adb = _0x180551["length"] - 1; _0x3e8adb >= 0; _0x3e8adb--) {
      if (_0x3b33fa = _0x180551[_0x3e8adb]) {
        _0x42b376 = (_0x5f042a < 3 ? _0x3b33fa(_0x42b376) : _0x5f042a > 3 ? _0x3b33fa(_0x38e47a, _0x51cbf9, _0x42b376) : _0x3b33fa(_0x38e47a, _0x51cbf9)) || _0x42b376;
      }
    }
  }

  _0x5f042a > 3 && _0x42b376 && Object["defineProperty"](_0x38e47a, _0x51cbf9, _0x42b376);
  return _0x42b376;
},
    __metadata = this && this['__metadata'] || function (_0x5394cb, _0x29bdcc) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x5394cb, _0x29bdcc);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["UpdateCatsDto"] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require('@nestjs/swagger'),
      createCats_dto_1 = require("./createCats.dto");

class UpdateCatsDto extends createCats_dto_1["CreateCatsDto"] {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "要修改的分类Id",
  'required': true
}), (0, class_validator_1["IsNumber"])({}, {
  'message': "分类ID必须是Number"
}), __metadata('design:type', Number)], UpdateCatsDto["prototype"], 'id', void 0);

exports["UpdateCatsDto"] = UpdateCatsDto;