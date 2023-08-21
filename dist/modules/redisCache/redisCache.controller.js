'use strict';

var __decorate = this && this['__decorate'] || function (_0x16f4ba, _0x48f4db, _0x39b4ab, _0xace47) {
  var _0x133081 = arguments['length'],
      _0x2a7fd3 = _0x133081 < 3 ? _0x48f4db : _0xace47 === null ? _0xace47 = Object["getOwnPropertyDescriptor"](_0x48f4db, _0x39b4ab) : _0xace47,
      _0x4ecb01;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === 'function') {
    _0x2a7fd3 = Reflect['decorate'](_0x16f4ba, _0x48f4db, _0x39b4ab, _0xace47);
  } else {
    for (var _0x3cdc5d = _0x16f4ba["length"] - 1; _0x3cdc5d >= 0; _0x3cdc5d--) {
      if (_0x4ecb01 = _0x16f4ba[_0x3cdc5d]) {
        _0x2a7fd3 = (_0x133081 < 3 ? _0x4ecb01(_0x2a7fd3) : _0x133081 > 3 ? _0x4ecb01(_0x48f4db, _0x39b4ab, _0x2a7fd3) : _0x4ecb01(_0x48f4db, _0x39b4ab)) || _0x2a7fd3;
      }
    }
  }

  _0x133081 > 3 && _0x2a7fd3 && Object["defineProperty"](_0x48f4db, _0x39b4ab, _0x2a7fd3);
  return _0x2a7fd3;
},
    __metadata = this && this["__metadata"] || function (_0x2e875c, _0x30e93b) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x2e875c, _0x30e93b);
  }
},
    __param = this && this["__param"] || function (_0x28bb02, _0x3ad67c) {
  return function (_0x3bf1ef, _0x20b033) {
    _0x3ad67c(_0x3bf1ef, _0x20b033, _0x28bb02);
  };
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["RedisCacheController"] = void 0;

const redis_dto_1 = require('./dto/redis.dto'),
      redisCache_service_1 = require("./redisCache.service"),
      common_1 = require("@nestjs/common");

let RedisCacheController = class RedisCacheController {
  constructor(_0x583f9c) {
    this["redisCacheService"] = _0x583f9c;
  }

  ["set"](_0x4ccad1) {
    return this["redisCacheService"]["set"](_0x4ccad1);
  }

  ["get"](_0x1bda3c) {
    return this["redisCacheService"]['get'](_0x1bda3c);
  }

};

__decorate([(0, common_1["Post"])("set"), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [redis_dto_1['RedisDto']]), __metadata('design:returntype', void 0)], RedisCacheController["prototype"], "set", null);

__decorate([(0, common_1["Get"])("get"), __param(0, (0, common_1['Query'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [redis_dto_1["RedisDto"]]), __metadata("design:returntype", void 0)], RedisCacheController["prototype"], "get", null);

RedisCacheController = __decorate([(0, common_1['Controller'])('redisCache'), __metadata("design:paramtypes", [redisCache_service_1["RedisCacheService"]])], RedisCacheController);
exports["RedisCacheController"] = RedisCacheController;