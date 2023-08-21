'use strict';

var __decorate = this && this["__decorate"] || function (_0x4478c6, _0x4bb70b, _0xb047f2, _0x33b377) {
  var _0xa67b9d = arguments["length"],
      _0x252940 = _0xa67b9d < 3 ? _0x4bb70b : _0x33b377 === null ? _0x33b377 = Object["getOwnPropertyDescriptor"](_0x4bb70b, _0xb047f2) : _0x33b377,
      _0x46e810;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x252940 = Reflect['decorate'](_0x4478c6, _0x4bb70b, _0xb047f2, _0x33b377);
  } else {
    for (var _0x5ea9a4 = _0x4478c6["length"] - 1; _0x5ea9a4 >= 0; _0x5ea9a4--) {
      if (_0x46e810 = _0x4478c6[_0x5ea9a4]) {
        _0x252940 = (_0xa67b9d < 3 ? _0x46e810(_0x252940) : _0xa67b9d > 3 ? _0x46e810(_0x4bb70b, _0xb047f2, _0x252940) : _0x46e810(_0x4bb70b, _0xb047f2)) || _0x252940;
      }
    }
  }

  _0xa67b9d > 3 && _0x252940 && Object["defineProperty"](_0x4bb70b, _0xb047f2, _0x252940);
  return _0x252940;
},
    __metadata = this && this['__metadata'] || function (_0x2ae400, _0x6163cb) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x2ae400, _0x6163cb);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["JwtAuthGuard"] = void 0;

const redisCache_service_1 = require("../../modules/redisCache/redisCache.service"),
      common_1 = require('@nestjs/common'),
      passport_1 = require('@nestjs/passport'),
      jwt = require("jsonwebtoken"),
      core_1 = require("@nestjs/core"),
      globalConfig_service_1 = require("../../modules/globalConfig/globalConfig.service"),
      utils_1 = require("../utils");

let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1["AuthGuard"])("jwt") {
  constructor(_0xddb5ab, _0x34213d, _0x47606c) {
    super();
    this["redisCacheService"] = _0xddb5ab;
    this['moduleRef'] = _0x34213d;
    this["globalConfigService"] = _0x47606c;
  }

  async ['canActivate'](_0x4e2e11) {
    !this["redisCacheService"] && (this['redisCacheService'] = this['moduleRef']["get"](redisCache_service_1['RedisCacheService'], {
      'strict': false
    }));

    const _0x221fc8 = _0x4e2e11["switchToHttp"]()["getRequest"](),
          _0x2add67 = this["extractToken"](_0x221fc8);

    _0x221fc8["user"] = this["validateToken"](_0x2add67);

    const _0x660807 = this["globalConfigService"]["getNineAiToken"]();

    if (_0x660807 && !_0x221fc8["path"]['includes']("getInfo")) {
      throw new common_1['HttpException']((0, utils_1["atob"])("5oSf6LCi5L2/55SoTmluZUFp44CB5b2T5YmN5Li655uX54mI56iL5bqP44CB5q2j54mI6K+35re75Yqg5L2c6ICFVljvvJogSl9sb25neWFu44CB5oiWcXE6IDkyNzg5ODYzOeOAgeS6pOa1gee+pOivt+a3u+WKoDc1NzI5NjE4OeOAgeivt+aUr+aMgeato+eJiOOAgeivt+WLv+S4iuW9k+WPl+mql++8gQ=="), common_1['HttpStatus']['BAD_REQUEST']);
    }

    await this['redisCacheService']["checkTokenAuth"](_0x2add67, _0x221fc8["user"]['id'], _0x221fc8["user"]['role']);
    return true;
  }

  ["extractToken"](_0x36742a) {
    if (!_0x36742a['headers']["authorization"]) {
      return null;
    }

    const _0x421fec = _0x36742a["headers"]["authorization"]["split"](" ");

    if (_0x421fec["length"] !== 2 || _0x421fec[0] !== "Bearer") {
      return null;
    }

    return _0x421fec[1];
  }

  ["validateToken"](_0x1552a6) {
    try {
      return jwt["verify"](_0x1552a6, process["env"]["JWT_SECRET"]);
    } catch (_0x1dfd40) {
      throw new common_1["HttpException"]("亲爱的用户,请登录后继续操作,我们正在等您的到来！", common_1["HttpStatus"]["UNAUTHORIZED"]);
    }
  }

  ["handleRequest"](_0x3d7419, _0x5dcc7f, _0x724c04) {
    if (_0x3d7419 || !_0x5dcc7f) {
      console['log']("err: ", _0x3d7419);
      throw _0x3d7419 || new common_1["UnauthorizedException"]();
    }

    return _0x5dcc7f;
  }

};
JwtAuthGuard = __decorate([(0, common_1["Injectable"])(), __metadata("design:paramtypes", [redisCache_service_1["RedisCacheService"], core_1["ModuleRef"], globalConfig_service_1["GlobalConfigService"]])], JwtAuthGuard);
exports["JwtAuthGuard"] = JwtAuthGuard;