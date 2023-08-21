'use strict';

var __decorate = this && this["__decorate"] || function (_0x559ae3, _0x3fb6c2, _0x255983, _0x57884b) {
  var _0x22ee87 = arguments["length"],
      _0x5d2402 = _0x22ee87 < 3 ? _0x3fb6c2 : _0x57884b === null ? _0x57884b = Object["getOwnPropertyDescriptor"](_0x3fb6c2, _0x255983) : _0x57884b,
      _0x3843a3;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x5d2402 = Reflect['decorate'](_0x559ae3, _0x3fb6c2, _0x255983, _0x57884b);
  } else {
    for (var _0x130ea1 = _0x559ae3["length"] - 1; _0x130ea1 >= 0; _0x130ea1--) {
      if (_0x3843a3 = _0x559ae3[_0x130ea1]) {
        _0x5d2402 = (_0x22ee87 < 3 ? _0x3843a3(_0x5d2402) : _0x22ee87 > 3 ? _0x3843a3(_0x3fb6c2, _0x255983, _0x5d2402) : _0x3843a3(_0x3fb6c2, _0x255983)) || _0x5d2402;
      }
    }
  }

  _0x22ee87 > 3 && _0x5d2402 && Object["defineProperty"](_0x3fb6c2, _0x255983, _0x5d2402);
  return _0x5d2402;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['AllExceptionsFilter'] = void 0;

const common_1 = require("@nestjs/common"),
      date_1 = require('../utils/date'),
      result_1 = require('../result');

let AllExceptionsFilter = class AllExceptionsFilter {
  ['catch'](_0x129f52, _0x1ed1c4) {
    ![401]["includes"](_0x129f52 === null || _0x129f52 === void 0 ? void 0 : _0x129f52["getStatus"]()) && console["log"]("global Error: ", _0x129f52["getStatus"](), _0x129f52);

    const _0x590f34 = _0x1ed1c4["switchToHttp"](),
          _0x1604f0 = _0x590f34["getResponse"](),
          _0x4d7c00 = _0x590f34["getRequest"](),
          _0x34149b = _0x129f52["getResponse"]() || "inter server error",
          _0x359738 = (_0x34149b === null || _0x34149b === void 0 ? void 0 : _0x34149b["message"]) ? Array["isArray"](_0x34149b) ? _0x34149b["message"][0] : _0x34149b["message"] : _0x34149b,
          _0x25d426 = _0x129f52["getStatus"]() || 400;

    common_1["Logger"]["error"]('【' + (0, date_1["formatDate"])(Date["now"]()) + '】' + _0x4d7c00["method"] + " " + _0x4d7c00['url'] + " ===> " + JSON['stringify'](_0x359738), 'HttpExceptionFilter');

    const _0x89f8ef = _0x129f52 instanceof common_1['HttpException'] ? _0x129f52['getStatus']() : common_1["HttpStatus"]["INTERNAL_SERVER_ERROR"];

    _0x1604f0["status"](_0x89f8ef);

    _0x1604f0['header']('Content-Type', "application/json; charset=utf-8");

    _0x1604f0["send"](result_1["Result"]["fail"](_0x25d426, Array["isArray"](_0x359738) ? _0x359738[0] : _0x359738));
  }

};
AllExceptionsFilter = __decorate([(0, common_1["Catch"])()], AllExceptionsFilter);
exports['AllExceptionsFilter'] = AllExceptionsFilter;