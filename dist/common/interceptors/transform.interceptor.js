'use strict';

var __decorate = this && this['__decorate'] || function (_0x216f2a, _0x49532b, _0x1d059a, _0x3947ba) {
  var _0x56a7ba = arguments['length'],
      _0x87df71 = _0x56a7ba < 3 ? _0x49532b : _0x3947ba === null ? _0x3947ba = Object["getOwnPropertyDescriptor"](_0x49532b, _0x1d059a) : _0x3947ba,
      _0x4dd0f8;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x87df71 = Reflect["decorate"](_0x216f2a, _0x49532b, _0x1d059a, _0x3947ba);
  } else {
    for (var _0x13a6e7 = _0x216f2a["length"] - 1; _0x13a6e7 >= 0; _0x13a6e7--) {
      if (_0x4dd0f8 = _0x216f2a[_0x13a6e7]) {
        _0x87df71 = (_0x56a7ba < 3 ? _0x4dd0f8(_0x87df71) : _0x56a7ba > 3 ? _0x4dd0f8(_0x49532b, _0x1d059a, _0x87df71) : _0x4dd0f8(_0x49532b, _0x1d059a)) || _0x87df71;
      }
    }
  }

  _0x56a7ba > 3 && _0x87df71 && Object["defineProperty"](_0x49532b, _0x1d059a, _0x87df71);
  return _0x87df71;
};

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["TransformInterceptor"] = void 0;

const common_1 = require("@nestjs/common"),
      rxjs_1 = require('rxjs'),
      operators_1 = require("rxjs/operators"),
      result_1 = require("../result");

let TransformInterceptor = class TransformInterceptor {
  ["intercept"](_0x1bf029, _0x456e99) {
    return _0x456e99["handle"]()["pipe"]((0, operators_1["map"])(_0x198fa0 => {
      const _0xbf0179 = _0x1bf029["switchToHttp"]()["getResponse"](),
            _0x28663a = _0x1bf029["switchToHttp"]()['getRequest']();

      _0xbf0179['statusCode'] = 200;

      if (_0x28663a['path']["includes"]("notify")) {
        return _0x198fa0;
      }

      const _0x5eadb2 = _0xbf0179["status"] < 400 ? null : _0xbf0179["statusText"];

      return result_1["Result"]["success"](_0x198fa0, _0x5eadb2);
    }), (0, rxjs_1["catchError"])(_0x295679 => {
      const _0x463f2a = _0x295679['status'] || 500,
            _0x45a6a3 = _0x295679["response"] || "Internal server error";

      return (0, rxjs_1["throwError"])(new common_1["HttpException"](_0x45a6a3, _0x463f2a));
    }));
  }

};
TransformInterceptor = __decorate([(0, common_1["Injectable"])()], TransformInterceptor);
exports['TransformInterceptor'] = TransformInterceptor;