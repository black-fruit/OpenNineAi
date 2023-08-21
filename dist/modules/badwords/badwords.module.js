'use strict';

var __decorate = this && this['__decorate'] || function (_0x46548e, _0x5751b7, _0x3499c5, _0x16e8be) {
  var _0x18812f = arguments["length"],
      _0x531c2e = _0x18812f < 3 ? _0x5751b7 : _0x16e8be === null ? _0x16e8be = Object["getOwnPropertyDescriptor"](_0x5751b7, _0x3499c5) : _0x16e8be,
      _0x1c938f;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x531c2e = Reflect['decorate'](_0x46548e, _0x5751b7, _0x3499c5, _0x16e8be);
  } else {
    for (var _0x96abe2 = _0x46548e["length"] - 1; _0x96abe2 >= 0; _0x96abe2--) {
      if (_0x1c938f = _0x46548e[_0x96abe2]) {
        _0x531c2e = (_0x18812f < 3 ? _0x1c938f(_0x531c2e) : _0x18812f > 3 ? _0x1c938f(_0x5751b7, _0x3499c5, _0x531c2e) : _0x1c938f(_0x5751b7, _0x3499c5)) || _0x531c2e;
      }
    }
  }

  _0x18812f > 3 && _0x531c2e && Object["defineProperty"](_0x5751b7, _0x3499c5, _0x531c2e);
  return _0x531c2e;
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["BadwordsModule"] = void 0;

const common_1 = require('@nestjs/common'),
      badwords_service_1 = require("./badwords.service"),
      badwords_controller_1 = require('./badwords.controller'),
      typeorm_1 = require("@nestjs/typeorm"),
      badwords_entity_1 = require('./badwords.entity');

let BadwordsModule = class BadwordsModule {};
BadwordsModule = __decorate([(0, common_1["Global"])(), (0, common_1["Module"])({
  'imports': [typeorm_1["TypeOrmModule"]["forFeature"]([badwords_entity_1["BadWordsEntity"]])],
  'providers': [badwords_service_1["BadwordsService"]],
  'controllers': [badwords_controller_1["BadwordsController"]],
  'exports': [badwords_service_1["BadwordsService"]]
})], BadwordsModule);
exports["BadwordsModule"] = BadwordsModule;