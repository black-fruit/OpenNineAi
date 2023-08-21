'use strict';

var __decorate = this && this['__decorate'] || function (_0x5135c1, _0x33968f, _0x871bc4, _0x289a13) {
  var _0x301fdb = arguments["length"],
      _0x439b23 = _0x301fdb < 3 ? _0x33968f : _0x289a13 === null ? _0x289a13 = Object["getOwnPropertyDescriptor"](_0x33968f, _0x871bc4) : _0x289a13,
      _0x2f9a0b;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x439b23 = Reflect["decorate"](_0x5135c1, _0x33968f, _0x871bc4, _0x289a13);
  } else {
    for (var _0x14373e = _0x5135c1["length"] - 1; _0x14373e >= 0; _0x14373e--) {
      if (_0x2f9a0b = _0x5135c1[_0x14373e]) {
        _0x439b23 = (_0x301fdb < 3 ? _0x2f9a0b(_0x439b23) : _0x301fdb > 3 ? _0x2f9a0b(_0x33968f, _0x871bc4, _0x439b23) : _0x2f9a0b(_0x33968f, _0x871bc4)) || _0x439b23;
      }
    }
  }

  _0x301fdb > 3 && _0x439b23 && Object["defineProperty"](_0x33968f, _0x871bc4, _0x439b23);
  return _0x439b23;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["VerificationModule"] = void 0;

const typeorm_1 = require("@nestjs/typeorm"),
      common_1 = require('@nestjs/common'),
      verification_service_1 = require('./verification.service'),
      verifycation_entity_1 = require("./verifycation.entity"),
      redisCache_service_1 = require("../redisCache/redisCache.service");

let VerificationModule = class VerificationModule {};
VerificationModule = __decorate([(0, common_1['Module'])({
  'imports': [typeorm_1["TypeOrmModule"]["forFeature"]([verifycation_entity_1["VerifycationEntity"]])],
  'providers': [redisCache_service_1['RedisCacheService'], verification_service_1["VerificationService"]]
})], VerificationModule);
exports["VerificationModule"] = VerificationModule;