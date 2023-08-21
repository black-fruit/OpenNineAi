'use strict';

var __decorate = this && this["__decorate"] || function (_0x4e18b9, _0x5af016, _0x58004c, _0xc9078d) {
  var _0x424181 = arguments['length'],
      _0x14de9e = _0x424181 < 3 ? _0x5af016 : _0xc9078d === null ? _0xc9078d = Object["getOwnPropertyDescriptor"](_0x5af016, _0x58004c) : _0xc9078d,
      _0x4f5722;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x14de9e = Reflect["decorate"](_0x4e18b9, _0x5af016, _0x58004c, _0xc9078d);
  } else {
    for (var _0x1d8bd1 = _0x4e18b9["length"] - 1; _0x1d8bd1 >= 0; _0x1d8bd1--) {
      if (_0x4f5722 = _0x4e18b9[_0x1d8bd1]) {
        _0x14de9e = (_0x424181 < 3 ? _0x4f5722(_0x14de9e) : _0x424181 > 3 ? _0x4f5722(_0x5af016, _0x58004c, _0x14de9e) : _0x4f5722(_0x5af016, _0x58004c)) || _0x14de9e;
      }
    }
  }

  _0x424181 > 3 && _0x14de9e && Object["defineProperty"](_0x5af016, _0x58004c, _0x14de9e);
  return _0x14de9e;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["AbortInterceptor"] = void 0;

const common_1 = require("@nestjs/common"),
      abort_controller_1 = require("abort-controller");

let AbortInterceptor = class AbortInterceptor {
  ["intercept"](_0x137cc0, _0x1b2c74) {
    const _0x305d83 = _0x137cc0["switchToHttp"]()['getRequest'](),
          _0x391ce8 = new abort_controller_1['AbortController']();

    _0x305d83["abortController"] = _0x391ce8;
    return _0x1b2c74["handle"]();
  }

};
AbortInterceptor = __decorate([(0, common_1["Injectable"])()], AbortInterceptor);
exports['AbortInterceptor'] = AbortInterceptor;