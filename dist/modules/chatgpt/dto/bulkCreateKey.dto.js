'use strict';

var __decorate = this && this["__decorate"] || function (_0x11fe96, _0x1534f2, _0xb51327, _0x593e98) {
  var _0x5b73b0 = arguments['length'],
      _0x14a316 = _0x5b73b0 < 3 ? _0x1534f2 : _0x593e98 === null ? _0x593e98 = Object["getOwnPropertyDescriptor"](_0x1534f2, _0xb51327) : _0x593e98,
      _0x20eafd;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x14a316 = Reflect["decorate"](_0x11fe96, _0x1534f2, _0xb51327, _0x593e98);
  } else {
    for (var _0x5ebada = _0x11fe96['length'] - 1; _0x5ebada >= 0; _0x5ebada--) {
      if (_0x20eafd = _0x11fe96[_0x5ebada]) {
        _0x14a316 = (_0x5b73b0 < 3 ? _0x20eafd(_0x14a316) : _0x5b73b0 > 3 ? _0x20eafd(_0x1534f2, _0xb51327, _0x14a316) : _0x20eafd(_0x1534f2, _0xb51327)) || _0x14a316;
      }
    }
  }

  _0x5b73b0 > 3 && _0x14a316 && Object["defineProperty"](_0x1534f2, _0xb51327, _0x14a316);
  return _0x14a316;
},
    __metadata = this && this["__metadata"] || function (_0x5d815c, _0x20b086) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x5d815c, _0x20b086);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['BulkCreateKeyDto'] = void 0;

const class_validator_1 = require("class-validator"),
      swagger_1 = require("@nestjs/swagger");

class BulkCreateKeyDto {}

__decorate([(0, swagger_1["ApiProperty"])({
  'example': ["sk-xxxxxxsadsafdasdfasdadasd"],
  'description': "批量添加key的列表"
}), (0, class_validator_1["IsArray"])({
  'message': "请检测您的key是否合理！"
}), __metadata('design:type', Array)], BulkCreateKeyDto["prototype"], "keyList", void 0);

exports["BulkCreateKeyDto"] = BulkCreateKeyDto;