'use strict';

var __decorate = this && this["__decorate"] || function (_0x513d97, _0x5aeab6, _0x58f234, _0x4e97aa) {
  var _0x3e89ba = arguments['length'],
      _0x11063f = _0x3e89ba < 3 ? _0x5aeab6 : _0x4e97aa === null ? _0x4e97aa = Object['getOwnPropertyDescriptor'](_0x5aeab6, _0x58f234) : _0x4e97aa,
      _0x2dee99;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x11063f = Reflect["decorate"](_0x513d97, _0x5aeab6, _0x58f234, _0x4e97aa);
  } else {
    for (var _0x2d576f = _0x513d97["length"] - 1; _0x2d576f >= 0; _0x2d576f--) {
      if (_0x2dee99 = _0x513d97[_0x2d576f]) {
        _0x11063f = (_0x3e89ba < 3 ? _0x2dee99(_0x11063f) : _0x3e89ba > 3 ? _0x2dee99(_0x5aeab6, _0x58f234, _0x11063f) : _0x2dee99(_0x5aeab6, _0x58f234)) || _0x11063f;
      }
    }
  }

  _0x3e89ba > 3 && _0x11063f && Object["defineProperty"](_0x5aeab6, _0x58f234, _0x11063f);
  return _0x11063f;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["MidjourneyModule"] = void 0;

const common_1 = require("@nestjs/common"),
      midjourney_controller_1 = require("./midjourney.controller"),
      midjourney_service_1 = require("./midjourney.service"),
      typeorm_1 = require("@nestjs/typeorm"),
      midjourney_entity_1 = require("./midjourney.entity"),
      user_entity_1 = require("../user/user.entity"),
      redisCache_service_1 = require("../redisCache/redisCache.service");

let MidjourneyModule = class MidjourneyModule {};
MidjourneyModule = __decorate([(0, common_1["Global"])(), (0, common_1["Module"])({
  'imports': [typeorm_1['TypeOrmModule']["forFeature"]([midjourney_entity_1["MidjourneyEntity"], user_entity_1["UserEntity"]])],
  'controllers': [midjourney_controller_1['MidjourneyController']],
  'providers': [midjourney_service_1["MidjourneyService"], redisCache_service_1["RedisCacheService"]],
  'exports': [midjourney_service_1["MidjourneyService"]]
})], MidjourneyModule);
exports['MidjourneyModule'] = MidjourneyModule;