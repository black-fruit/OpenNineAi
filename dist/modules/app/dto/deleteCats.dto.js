'use strict';

var __decorate = this && this['__decorate'] || function (_0x5a68a6, _0x387177, _0x2eb0f5, _0x3a92ad) {
  var _0x2b35e7 = arguments["length"],
      _0x140f05 = _0x2b35e7 < 3 ? _0x387177 : _0x3a92ad === null ? _0x3a92ad = Object["getOwnPropertyDescriptor"](_0x387177, _0x2eb0f5) : _0x3a92ad,
      _0x29fc2e;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x140f05 = Reflect["decorate"](_0x5a68a6, _0x387177, _0x2eb0f5, _0x3a92ad);
  } else {
    for (var _0x4407e2 = _0x5a68a6["length"] - 1; _0x4407e2 >= 0; _0x4407e2--) {
      if (_0x29fc2e = _0x5a68a6[_0x4407e2]) {
        _0x140f05 = (_0x2b35e7 < 3 ? _0x29fc2e(_0x140f05) : _0x2b35e7 > 3 ? _0x29fc2e(_0x387177, _0x2eb0f5, _0x140f05) : _0x29fc2e(_0x387177, _0x2eb0f5)) || _0x140f05;
      }
    }
  }

  _0x2b35e7 > 3 && _0x140f05 && Object['defineProperty'](_0x387177, _0x2eb0f5, _0x140f05);
  return _0x140f05;
},
    __metadata = this && this["__metadata"] || function (_0x1a4561, _0xd7111b) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x1a4561, _0xd7111b);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["DeleteCatsDto"] = void 0;

const swagger_1 = require("@nestjs/swagger"),
      class_validator_1 = require("class-validator");

class DeleteCatsDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "要删除app分类Id",
  'required': true
}), (0, class_validator_1["IsNumber"])({}, {
  'message': 'ID必须是Number'
}), __metadata('design:type', Number)], DeleteCatsDto['prototype'], 'id', void 0);

exports['DeleteCatsDto'] = DeleteCatsDto;