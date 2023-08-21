'use strict';

var __decorate = this && this["__decorate"] || function (_0x3ea005, _0x142609, _0x29b4ff, _0x104183) {
  var _0x18375d = arguments["length"],
      _0x4941b2 = _0x18375d < 3 ? _0x142609 : _0x104183 === null ? _0x104183 = Object['getOwnPropertyDescriptor'](_0x142609, _0x29b4ff) : _0x104183,
      _0x326134;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x4941b2 = Reflect['decorate'](_0x3ea005, _0x142609, _0x29b4ff, _0x104183);
  } else {
    for (var _0x194008 = _0x3ea005["length"] - 1; _0x194008 >= 0; _0x194008--) {
      if (_0x326134 = _0x3ea005[_0x194008]) {
        _0x4941b2 = (_0x18375d < 3 ? _0x326134(_0x4941b2) : _0x18375d > 3 ? _0x326134(_0x142609, _0x29b4ff, _0x4941b2) : _0x326134(_0x142609, _0x29b4ff)) || _0x4941b2;
      }
    }
  }

  _0x18375d > 3 && _0x4941b2 && Object["defineProperty"](_0x142609, _0x29b4ff, _0x4941b2);
  return _0x4941b2;
},
    __metadata = this && this['__metadata'] || function (_0x7e67bf, _0x2f5e24) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x7e67bf, _0x2f5e24);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["QueryStatisticDto"] = void 0;

const swagger_1 = require("@nestjs/swagger");

class QueryStatisticDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 7,
  'description': '查询最近N天的数据',
  'required': true
}), __metadata("design:type", Number)], QueryStatisticDto["prototype"], "days", void 0);

exports['QueryStatisticDto'] = QueryStatisticDto;