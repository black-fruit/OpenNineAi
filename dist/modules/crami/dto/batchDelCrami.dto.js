'use strict';

var __decorate = this && this["__decorate"] || function (_0xb23da1, _0x57e2bc, _0x117b48, _0x469da6) {
  var _0x16f848 = arguments["length"],
      _0x43631d = _0x16f848 < 3 ? _0x57e2bc : _0x469da6 === null ? _0x469da6 = Object["getOwnPropertyDescriptor"](_0x57e2bc, _0x117b48) : _0x469da6,
      _0x569a81;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x43631d = Reflect["decorate"](_0xb23da1, _0x57e2bc, _0x117b48, _0x469da6);
  } else {
    for (var _0x1de4ec = _0xb23da1['length'] - 1; _0x1de4ec >= 0; _0x1de4ec--) {
      if (_0x569a81 = _0xb23da1[_0x1de4ec]) {
        _0x43631d = (_0x16f848 < 3 ? _0x569a81(_0x43631d) : _0x16f848 > 3 ? _0x569a81(_0x57e2bc, _0x117b48, _0x43631d) : _0x569a81(_0x57e2bc, _0x117b48)) || _0x43631d;
      }
    }
  }

  _0x16f848 > 3 && _0x43631d && Object["defineProperty"](_0x57e2bc, _0x117b48, _0x43631d);
  return _0x43631d;
},
    __metadata = this && this['__metadata'] || function (_0x23dc5a, _0x26596d) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x23dc5a, _0x26596d);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["BatchDelCramiDto"] = void 0;

const swagger_1 = require("@nestjs/swagger"),
      class_validator_1 = require("class-validator");

class BatchDelCramiDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': 1,
  'description': "要删除的套餐Ids",
  'required': true
}), (0, class_validator_1["IsArray"])({
  'message': '参数类型为数组'
}), (0, class_validator_1["ArrayMinSize"])(1, {
  'message': "最短长度为1"
}), __metadata("design:type", Array)], BatchDelCramiDto['prototype'], "ids", void 0);

exports["BatchDelCramiDto"] = BatchDelCramiDto;