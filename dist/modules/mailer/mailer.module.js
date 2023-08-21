'use strict';

var __decorate = this && this["__decorate"] || function (_0x56802e, _0x1a701f, _0x1bca36, _0x5ca1eb) {
  var _0x144203 = arguments["length"],
      _0x3538f7 = _0x144203 < 3 ? _0x1a701f : _0x5ca1eb === null ? _0x5ca1eb = Object['getOwnPropertyDescriptor'](_0x1a701f, _0x1bca36) : _0x5ca1eb,
      _0x4cb42a;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3538f7 = Reflect["decorate"](_0x56802e, _0x1a701f, _0x1bca36, _0x5ca1eb);
  } else {
    for (var _0x24cc27 = _0x56802e["length"] - 1; _0x24cc27 >= 0; _0x24cc27--) {
      if (_0x4cb42a = _0x56802e[_0x24cc27]) {
        _0x3538f7 = (_0x144203 < 3 ? _0x4cb42a(_0x3538f7) : _0x144203 > 3 ? _0x4cb42a(_0x1a701f, _0x1bca36, _0x3538f7) : _0x4cb42a(_0x1a701f, _0x1bca36)) || _0x3538f7;
      }
    }
  }

  _0x144203 > 3 && _0x3538f7 && Object["defineProperty"](_0x1a701f, _0x1bca36, _0x3538f7);
  return _0x3538f7;
},
    MailerModule_1;

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["MailerModule"] = void 0;

const common_1 = require("@nestjs/common"),
      nestjs_config_1 = require("nestjs-config"),
      mailer_1 = require("@nestjs-modules/mailer"),
      mailer_service_1 = require('./mailer.service');

let MailerModule = MailerModule_1 = class MailerModule {};
MailerModule = MailerModule_1 = __decorate([(0, common_1["Module"])({
  'imports': [nestjs_config_1["ConfigModule"], mailer_1["MailerModule"]["forRootAsync"]({
    'useFactory': _0x2c087e => _0x2c087e['get']("mailer"),
    'inject': [nestjs_config_1["ConfigService"]]
  })],
  'exports': [MailerModule_1],
  'providers': [mailer_service_1["MailerService"]]
})], MailerModule);
exports["MailerModule"] = MailerModule;