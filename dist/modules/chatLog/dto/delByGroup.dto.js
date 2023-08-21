'use strict';

var __decorate = this && this['__decorate'] || function (_0x1d254f, _0x3dad89, _0x44ba00, _0x534492) {
  var _0x149f98 = arguments["length"],
      _0x222eb2 = _0x149f98 < 3 ? _0x3dad89 : _0x534492 === null ? _0x534492 = Object['getOwnPropertyDescriptor'](_0x3dad89, _0x44ba00) : _0x534492,
      _0x1225e2;

  if (typeof Reflect === 'object' && typeof Reflect['decorate'] === "function") {
    _0x222eb2 = Reflect["decorate"](_0x1d254f, _0x3dad89, _0x44ba00, _0x534492);
  } else {
    for (var _0x57b2a9 = _0x1d254f["length"] - 1; _0x57b2a9 >= 0; _0x57b2a9--) {
      if (_0x1225e2 = _0x1d254f[_0x57b2a9]) {
        _0x222eb2 = (_0x149f98 < 3 ? _0x1225e2(_0x222eb2) : _0x149f98 > 3 ? _0x1225e2(_0x3dad89, _0x44ba00, _0x222eb2) : _0x1225e2(_0x3dad89, _0x44ba00)) || _0x222eb2;
      }
    }
  }

  _0x149f98 > 3 && _0x222eb2 && Object['defineProperty'](_0x3dad89, _0x44ba00, _0x222eb2);
  return _0x222eb2;
},
    __metadata = this && this['__metadata'] || function (_0x2b80d1, _0x81d22b) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === "function") {
    return Reflect['metadata'](_0x2b80d1, _0x81d22b);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['DelByGroupDto'] = void 0;

const swagger_1 = require("@nestjs/swagger");

class DelByGroupDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "对话组Id",
  'required': true
}), __metadata('design:type', Number)], DelByGroupDto["prototype"], "groupId", void 0);

exports["DelByGroupDto"] = DelByGroupDto;