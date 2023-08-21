'use strict';

var __decorate = this && this["__decorate"] || function (_0x393f05, _0x254502, _0x17487c, _0x46a49c) {
  var _0x5af803 = arguments["length"],
      _0x403ee2 = _0x5af803 < 3 ? _0x254502 : _0x46a49c === null ? _0x46a49c = Object["getOwnPropertyDescriptor"](_0x254502, _0x17487c) : _0x46a49c,
      _0x37a630;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x403ee2 = Reflect["decorate"](_0x393f05, _0x254502, _0x17487c, _0x46a49c);
  } else {
    for (var _0x31c487 = _0x393f05["length"] - 1; _0x31c487 >= 0; _0x31c487--) {
      if (_0x37a630 = _0x393f05[_0x31c487]) {
        _0x403ee2 = (_0x5af803 < 3 ? _0x37a630(_0x403ee2) : _0x5af803 > 3 ? _0x37a630(_0x254502, _0x17487c, _0x403ee2) : _0x37a630(_0x254502, _0x17487c)) || _0x403ee2;
      }
    }
  }

  _0x5af803 > 3 && _0x403ee2 && Object["defineProperty"](_0x254502, _0x17487c, _0x403ee2);
  return _0x403ee2;
},
    __metadata = this && this['__metadata'] || function (_0x28fab6, _0x5ca438) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x28fab6, _0x5ca438);
  }
},
    __param = this && this["__param"] || function (_0x1fac28, _0x3b445a) {
  return function (_0x7a33a5, _0xadaaa8) {
    _0x3b445a(_0x7a33a5, _0xadaaa8, _0x1fac28);
  };
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["VerificationService"] = void 0;

const globalConfig_service_1 = require("../globalConfig/globalConfig.service"),
      status_constant_1 = require('./../../common/constants/status.constant'),
      typeorm_1 = require("@nestjs/typeorm"),
      typeorm_2 = require("typeorm"),
      verifycation_entity_1 = require("./verifycation.entity"),
      common_1 = require('@nestjs/common'),
      utils_1 = require("../../common/utils"),
      redisCache_service_1 = require("../redisCache/redisCache.service"),
      Core = require("@alicloud/pop-core");

let VerificationService = class VerificationService {
  constructor(_0x3074c5, _0x119007, _0x464374) {
    this["verifycationEntity"] = _0x3074c5;
    this["globalConfigService"] = _0x119007;
    this["redisCacheService"] = _0x464374;
  }

  async ['createVerification'](_0x12331c, _0xf93bf5, _0x5ebb98 = 1800) {
    const _0x4f7f0b = await this["verifycationEntity"]["findOne"]({
      'where': {
        'userId': _0x12331c['id'],
        'type': _0xf93bf5
      },
      'order': {
        'createdAt': 'DESC'
      }
    });

    if (_0x4f7f0b && _0x4f7f0b["createdAt"]['getTime']() + 60000 > Date['now']()) {
      const _0x1cdf1f = Math["ceil"]((_0x4f7f0b["createdAt"]["getTime"]() + 60000 - Date["now"]()) / 1000);

      throw new common_1["HttpException"](_0x1cdf1f + "S内不得重新发送", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    const _0x41ee74 = (0, utils_1['createRandomCode'])(),
          _0x28871b = new Date(Date["now"]() + _0x5ebb98 * 1000),
          {
      "id": _0x50a72c,
      "email": _0x3d7be6
    } = _0x12331c,
          _0x4a0d34 = {
      'userId': _0x50a72c,
      'type': _0xf93bf5,
      'code': _0x41ee74,
      'expiresAt': _0x28871b,
      'email': _0x3d7be6
    };

    return await this['verifycationEntity']['save'](_0x4a0d34);
  }

  async ["verifyCode"]({
    "code": _0x46c928,
    "id": _0x207377
  }, _0x1ad833) {
    const _0x2efe28 = await this["verifycationEntity"]["findOne"]({
      'where': {
        'id': _0x207377,
        'type': _0x1ad833
      },
      'order': {
        'createdAt': "DESC"
      }
    });

    if (!_0x2efe28) {
      throw new common_1["HttpException"]('验证码不存在', common_1['HttpStatus']["BAD_REQUEST"]);
    }

    if (_0x2efe28["used"] === status_constant_1['VerificationUseStatusEnum']['USED']) {
      throw new common_1["HttpException"]('当前验证码已被使用！', common_1["HttpStatus"]['BAD_REQUEST']);
    } else {
      _0x2efe28["used"] = status_constant_1["VerificationUseStatusEnum"]['USED'];
      await this["verifycationEntity"]['update']({
        'id': _0x207377
      }, _0x2efe28);
    }

    if (Number(_0x2efe28["code"]) !== Number(_0x46c928)) {
      throw new common_1["HttpException"]("验证码错误", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    if (_0x2efe28['expiresAt'] < new Date()) {
      throw new common_1['HttpException']("验证码已过期", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    return _0x2efe28;
  }

  async ['verifyCaptcha'](_0x266ec3) {
    const {
      "captchaId": _0xd8980d,
      "captchaCode": _0xffd17c
    } = _0x266ec3,
          _0x5c9085 = await this["globalConfigService"]["getNamespace"](),
          _0x3b5162 = _0x5c9085 + ":CAPTCHA:" + _0xd8980d,
          _0x1ffcf1 = await this["redisCacheService"]["get"]({
      'key': _0x3b5162
    });

    await this['redisCacheService']["del"]({
      'key': _0x3b5162
    });

    if (!_0x1ffcf1) {
      throw new common_1['HttpException']("图形验证码已过期、请重新输入!", common_1['HttpStatus']['BAD_REQUEST']);
    }

    if (!_0x1ffcf1 || _0x1ffcf1 !== _0xffd17c) {
      throw new common_1["HttpException"]('图形验证码错误、请检查填写!', common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["sendPhoneCode"](_0x5b301d) {
    var _0x576087;

    const {
      "accessKeyId": _0x458aba,
      "accessKeySecret": _0x1f14fd,
      "SignName": _0x33151c,
      "TemplateCode": _0x2cb2b7
    } = await this['globalConfigService']["getPhoneVerifyConfig"](),
          {
      "phone": _0xddc95e,
      "code": _0x257488
    } = _0x5b301d;

    if (!_0xddc95e || !_0x257488) {
      throw new common_1["HttpException"]('确实必要参数错误！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x47ca4b = new Core({
      'accessKeyId': _0x458aba,
      'accessKeySecret': _0x1f14fd,
      'endpoint': "https://dysmsapi.aliyuncs.com",
      'apiVersion': "2017-05-25"
    }),
          _0x1403fe = {
      'PhoneNumbers': _0xddc95e,
      'SignName': _0x33151c,
      'TemplateCode': _0x2cb2b7,
      'TemplateParam': JSON["stringify"]({
        'code': _0x257488
      })
    },
          _0x21a938 = {
      'method': "POST",
      'formatParams': false
    };

    try {
      const _0x32de9a = await _0x47ca4b["request"]('SendSms', _0x1403fe, _0x21a938);

      if (_0x32de9a['Code'] === 'OK') {
        return true;
      } else {
        throw new common_1["HttpException"](_0x32de9a["Message"] || '验证码发送失败！', common_1["HttpStatus"]["BAD_REQUEST"]);
      }
    } catch (_0x1dc892) {
      throw new common_1["HttpException"](((_0x576087 = _0x1dc892 === null || _0x1dc892 === void 0 ? void 0 : _0x1dc892["data"]) === null || _0x576087 === void 0 ? void 0 : _0x576087['Message']) || "验证码发送失败！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

};
VerificationService = __decorate([(0, common_1['Injectable'])(), __param(0, (0, typeorm_1["InjectRepository"])(verifycation_entity_1["VerifycationEntity"])), __metadata("design:paramtypes", [typeorm_2["Repository"], globalConfig_service_1["GlobalConfigService"], redisCache_service_1["RedisCacheService"]])], VerificationService);
exports["VerificationService"] = VerificationService;