'use strict';

var __decorate = this && this["__decorate"] || function (_0xfa07b2, _0x3950cb, _0x51ba51, _0xcc894c) {
  var _0x573065 = arguments["length"],
      _0x23a7a2 = _0x573065 < 3 ? _0x3950cb : _0xcc894c === null ? _0xcc894c = Object["getOwnPropertyDescriptor"](_0x3950cb, _0x51ba51) : _0xcc894c,
      _0x2693cf;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x23a7a2 = Reflect["decorate"](_0xfa07b2, _0x3950cb, _0x51ba51, _0xcc894c);
  } else {
    for (var _0xa1c3b5 = _0xfa07b2["length"] - 1; _0xa1c3b5 >= 0; _0xa1c3b5--) {
      if (_0x2693cf = _0xfa07b2[_0xa1c3b5]) {
        _0x23a7a2 = (_0x573065 < 3 ? _0x2693cf(_0x23a7a2) : _0x573065 > 3 ? _0x2693cf(_0x3950cb, _0x51ba51, _0x23a7a2) : _0x2693cf(_0x3950cb, _0x51ba51)) || _0x23a7a2;
      }
    }
  }

  _0x573065 > 3 && _0x23a7a2 && Object["defineProperty"](_0x3950cb, _0x51ba51, _0x23a7a2);
  return _0x23a7a2;
},
    __metadata = this && this["__metadata"] || function (_0x2bd51d, _0x250abc) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === 'function') {
    return Reflect['metadata'](_0x2bd51d, _0x250abc);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["QueryByAppIdDto"] = void 0;

const class_validator_1 = require('class-validator'),
      swagger_1 = require("@nestjs/swagger");

class QueryByAppIdDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': "应用Id",
  'required': true
}), (0, class_validator_1["IsOptional"])(), __metadata('design:type', Number)], QueryByAppIdDto["prototype"], "appId", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 1,
  'description': '查询页数',
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QueryByAppIdDto['prototype'], "page", void 0);

__decorate([(0, swagger_1["ApiProperty"])({
  'example': 10,
  'description': "每页数量",
  'required': false
}), (0, class_validator_1["IsOptional"])(), __metadata("design:type", Number)], QueryByAppIdDto["prototype"], "size", void 0);

exports['QueryByAppIdDto'] = QueryByAppIdDto;