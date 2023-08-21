'use strict';

var __decorate = this && this["__decorate"] || function (_0x172f37, _0x4f9fc5, _0xd08551, _0x3cacf6) {
  var _0x2ccce2 = arguments["length"],
      _0x5c3f38 = _0x2ccce2 < 3 ? _0x4f9fc5 : _0x3cacf6 === null ? _0x3cacf6 = Object['getOwnPropertyDescriptor'](_0x4f9fc5, _0xd08551) : _0x3cacf6,
      _0x3b7bdd;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x5c3f38 = Reflect['decorate'](_0x172f37, _0x4f9fc5, _0xd08551, _0x3cacf6);
  } else {
    for (var _0x11adef = _0x172f37['length'] - 1; _0x11adef >= 0; _0x11adef--) {
      if (_0x3b7bdd = _0x172f37[_0x11adef]) {
        _0x5c3f38 = (_0x2ccce2 < 3 ? _0x3b7bdd(_0x5c3f38) : _0x2ccce2 > 3 ? _0x3b7bdd(_0x4f9fc5, _0xd08551, _0x5c3f38) : _0x3b7bdd(_0x4f9fc5, _0xd08551)) || _0x5c3f38;
      }
    }
  }

  _0x2ccce2 > 3 && _0x5c3f38 && Object["defineProperty"](_0x4f9fc5, _0xd08551, _0x5c3f38);
  return _0x5c3f38;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["RedisCacheModule"] = void 0;

const common_1 = require('@nestjs/common'),
      redisCache_service_1 = require("./redisCache.service"),
      redisCache_controller_1 = require("./redisCache.controller"),
      nestjs_config_1 = require('nestjs-config'),
      redis_1 = require("redis");

let RedisCacheModule = class RedisCacheModule {};
RedisCacheModule = __decorate([(0, common_1["Global"])(), (0, common_1['Module'])({
  'imports': [nestjs_config_1['ConfigModule']],
  'controllers': [redisCache_controller_1["RedisCacheController"]],
  'providers': [{
    'provide': "REDIS_CLIENT",
    'useFactory': async _0x179943 => {
      const _0x1c6d28 = +process["env"]["REDIS_PORT"],
            _0x2ff9d9 = process["env"]["REDIS_HOST"],
            _0x4af414 = process["env"]["REDIS_PASSWORD"],
            _0x13ff56 = process['env']["REDIS_USER"];

      if (!_0x2ff9d9 || !_0x1c6d28) {
        common_1["Logger"]['error']("Please config Redis config | 未配置 Redis 配置信息 请确认配置redis服务以获得更好的体验", "RedistCacheModule");
        return;
      }

      const _0x23d4b6 = (0, redis_1["createClient"])({
        'socket': {
          'host': _0x2ff9d9,
          'port': _0x1c6d28
        },
        'username': _0x13ff56,
        'password': _0x4af414
      });

      _0x23d4b6['on']("ready", () => {
        common_1["Logger"]["debug"]("Your Redis connection successful", 'RedistCacheModule');
      });

      _0x23d4b6['on']('error', () => {
        common_1["Logger"]["error"]("Your Redis connection failed | 您的 Redist 连接失败", "RedistCacheModule");
      });

      return _0x23d4b6;
    },
    'inject': [nestjs_config_1["ConfigService"]]
  }, redisCache_service_1['RedisCacheService']],
  'exports': ['REDIS_CLIENT']
})], RedisCacheModule);
exports['RedisCacheModule'] = RedisCacheModule;