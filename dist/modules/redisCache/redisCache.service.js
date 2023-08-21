'use strict';

var __decorate = this && this['__decorate'] || function (_0x4c9ea6, _0x16d9d5, _0x42bd11, _0x2d6e8e) {
  var _0x4347d2 = arguments["length"],
      _0x336863 = _0x4347d2 < 3 ? _0x16d9d5 : _0x2d6e8e === null ? _0x2d6e8e = Object["getOwnPropertyDescriptor"](_0x16d9d5, _0x42bd11) : _0x2d6e8e,
      _0x4579e7;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x336863 = Reflect["decorate"](_0x4c9ea6, _0x16d9d5, _0x42bd11, _0x2d6e8e);
  } else {
    for (var _0x338909 = _0x4c9ea6["length"] - 1; _0x338909 >= 0; _0x338909--) {
      if (_0x4579e7 = _0x4c9ea6[_0x338909]) {
        _0x336863 = (_0x4347d2 < 3 ? _0x4579e7(_0x336863) : _0x4347d2 > 3 ? _0x4579e7(_0x16d9d5, _0x42bd11, _0x336863) : _0x4579e7(_0x16d9d5, _0x42bd11)) || _0x336863;
      }
    }
  }

  _0x4347d2 > 3 && _0x336863 && Object["defineProperty"](_0x16d9d5, _0x42bd11, _0x336863);
  return _0x336863;
},
    __metadata = this && this["__metadata"] || function (_0x17bcc1, _0x56535e) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x17bcc1, _0x56535e);
  }
},
    __param = this && this["__param"] || function (_0x78cceb, _0x28c4db) {
  return function (_0x475f49, _0x3202f7) {
    _0x28c4db(_0x475f49, _0x3202f7, _0x78cceb);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["RedisCacheService"] = void 0;

const common_1 = require("@nestjs/common");

let RedisCacheService = class RedisCacheService {
  constructor(_0x170d06) {
    this['redisClient'] = _0x170d06;
  }

  async ["onModuleInit"]() {}

  ["test"]() {
    this["redisClient"]["set"]("aaa", 111);
    return 1;
  }

  async ["get"](_0x5f2af3) {
    const {
      "key": _0x3f35bf
    } = _0x5f2af3;
    return await this["redisClient"]['get'](_0x3f35bf);
  }

  async ['set'](_0x476f5d, _0x35abcf) {
    try {
      const {
        "key": _0x562dc9,
        "val": _0x5b7759
      } = _0x476f5d;
      await this["redisClient"]["set"](_0x562dc9, _0x5b7759);
      _0x35abcf && (await this["redisClient"]["expire"](_0x562dc9, _0x35abcf));
      return;
    } catch (_0x2b786e) {
      throw new common_1["HttpException"](_0x2b786e, common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["ttl"](_0x229cfa) {
    return await this['redisClient']["ttl"](_0x229cfa);
  }

  async ["del"](_0x4b9887) {
    const {
      "key": _0x40d53f
    } = _0x4b9887;
    await this["redisClient"]["del"](_0x40d53f);
    return;
  }

  async ['saveToken'](_0x578fbe, _0x116698) {
    const _0x8944d = await this["redisClient"]["zRange"]('tokens:' + _0x578fbe, 0, -1);

    await this["invalidateTokens"](_0x578fbe, _0x8944d);
    this["redisClient"]["set"]('token:' + _0x578fbe, _0x116698);
  }

  async ["invalidateTokens"](_0xbe3fd, _0x9b9e45) {
    _0x9b9e45["forEach"](_0x426317 => {
      this["redisClient"]["del"]("token:" + _0xbe3fd + ':' + _0x426317);
    });
  }

  async ['checkTokenAuth'](_0xee4d96, _0xeea6f4, _0x41b102) {
    const _0x479037 = await this["redisClient"]["get"]("token:" + _0xeea6f4);

    if (_0x479037 === null) {
      await this["redisClient"]["set"]("token:" + _0xeea6f4, _0xee4d96);
      return true;
    }

    if (_0x479037 !== _0xee4d96) {
      if (["super", 'admin']["includes"](_0x41b102)) {
        return true;
      }

      throw new common_1["HttpException"]("您已在其他设备覆盖登录、请您重新登录！", common_1['HttpStatus']['UNAUTHORIZED']);
    }
  }

};
RedisCacheService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, common_1["Inject"])('REDIS_CLIENT')), __metadata("design:paramtypes", [Object])], RedisCacheService);
exports["RedisCacheService"] = RedisCacheService;