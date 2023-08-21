'use strict';

var __decorate = this && this["__decorate"] || function (_0x255a62, _0x43ed16, _0x4790a1, _0x5a10b7) {
  var _0x1c10c2 = arguments["length"],
      _0x19433f = _0x1c10c2 < 3 ? _0x43ed16 : _0x5a10b7 === null ? _0x5a10b7 = Object["getOwnPropertyDescriptor"](_0x43ed16, _0x4790a1) : _0x5a10b7,
      _0x208d37;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x19433f = Reflect['decorate'](_0x255a62, _0x43ed16, _0x4790a1, _0x5a10b7);
  } else {
    for (var _0x422ec0 = _0x255a62["length"] - 1; _0x422ec0 >= 0; _0x422ec0--) {
      if (_0x208d37 = _0x255a62[_0x422ec0]) {
        _0x19433f = (_0x1c10c2 < 3 ? _0x208d37(_0x19433f) : _0x1c10c2 > 3 ? _0x208d37(_0x43ed16, _0x4790a1, _0x19433f) : _0x208d37(_0x43ed16, _0x4790a1)) || _0x19433f;
      }
    }
  }

  _0x1c10c2 > 3 && _0x19433f && Object["defineProperty"](_0x43ed16, _0x4790a1, _0x19433f);
  return _0x19433f;
},
    __metadata = this && this['__metadata'] || function (_0x310e5b, _0x1018c5) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x310e5b, _0x1018c5);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["RedisDto"] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class RedisDto {}

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "name",
  'description': '邮箱'
}), __metadata("design:type", String)], RedisDto['prototype'], "key", void 0);

__decorate([(0, swagger_1['ApiProperty'])({
  'example': "123456",
  'description': '密码'
}), (0, class_validator_1["IsNotEmpty"])({
  'message': "用户密码不能为空！"
}), __metadata("design:type", String)], RedisDto["prototype"], "val", void 0);

exports["RedisDto"] = RedisDto;