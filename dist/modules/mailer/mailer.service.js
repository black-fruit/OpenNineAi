'use strict';

var __decorate = this && this["__decorate"] || function (_0x2fa6a8, _0x24507e, _0x467f36, _0x3c7607) {
  var _0x271edc = arguments["length"],
      _0x3c7bf6 = _0x271edc < 3 ? _0x24507e : _0x3c7607 === null ? _0x3c7607 = Object["getOwnPropertyDescriptor"](_0x24507e, _0x467f36) : _0x3c7607,
      _0x419dba;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x3c7bf6 = Reflect["decorate"](_0x2fa6a8, _0x24507e, _0x467f36, _0x3c7607);
  } else {
    for (var _0x285733 = _0x2fa6a8["length"] - 1; _0x285733 >= 0; _0x285733--) {
      if (_0x419dba = _0x2fa6a8[_0x285733]) {
        _0x3c7bf6 = (_0x271edc < 3 ? _0x419dba(_0x3c7bf6) : _0x271edc > 3 ? _0x419dba(_0x24507e, _0x467f36, _0x3c7bf6) : _0x419dba(_0x24507e, _0x467f36)) || _0x3c7bf6;
      }
    }
  }

  _0x271edc > 3 && _0x3c7bf6 && Object["defineProperty"](_0x24507e, _0x467f36, _0x3c7bf6);
  return _0x3c7bf6;
},
    __metadata = this && this['__metadata'] || function (_0x83d8ce, _0x50b8d4) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect['metadata'](_0x83d8ce, _0x50b8d4);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['MailerService'] = void 0;

const mailer_1 = require("@nestjs-modules/mailer"),
      common_1 = require("@nestjs/common");

let MailerService = class MailerService {
  constructor(_0x2277f9) {
    this["mailerService"] = _0x2277f9;
  }

  async ["sendMail"](_0x22eee7) {
    try {
      await this["mailerService"]["sendMail"](_0x22eee7);
    } catch (_0x580a55) {
      console['log']("error: ", _0x580a55);
      throw new common_1["HttpException"]("邮件发送失败！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

};
MailerService = __decorate([(0, common_1["Injectable"])(), __metadata("design:paramtypes", [mailer_1["MailerService"]])], MailerService);
exports['MailerService'] = MailerService;