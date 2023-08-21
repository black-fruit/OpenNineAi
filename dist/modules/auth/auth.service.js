'use strict';

var __decorate = this && this["__decorate"] || function (_0x3dbaf7, _0x3baf90, _0x24dd95, _0x202273) {
  var _0x36d681 = arguments["length"],
      _0x41f455 = _0x36d681 < 3 ? _0x3baf90 : _0x202273 === null ? _0x202273 = Object['getOwnPropertyDescriptor'](_0x3baf90, _0x24dd95) : _0x202273,
      _0x3951e2;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x41f455 = Reflect["decorate"](_0x3dbaf7, _0x3baf90, _0x24dd95, _0x202273);
  } else {
    for (var _0x5340ff = _0x3dbaf7["length"] - 1; _0x5340ff >= 0; _0x5340ff--) {
      if (_0x3951e2 = _0x3dbaf7[_0x5340ff]) {
        _0x41f455 = (_0x36d681 < 3 ? _0x3951e2(_0x41f455) : _0x36d681 > 3 ? _0x3951e2(_0x3baf90, _0x24dd95, _0x41f455) : _0x3951e2(_0x3baf90, _0x24dd95)) || _0x41f455;
      }
    }
  }

  _0x36d681 > 3 && _0x41f455 && Object["defineProperty"](_0x3baf90, _0x24dd95, _0x41f455);
  return _0x41f455;
},
    __metadata = this && this["__metadata"] || function (_0x28137e, _0x1e3810) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x28137e, _0x1e3810);
  }
},
    __param = this && this['__param'] || function (_0x27e40c, _0x63e13c) {
  return function (_0x615bec, _0x28cf4a) {
    _0x63e13c(_0x615bec, _0x28cf4a, _0x27e40c);
  };
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports['AuthService'] = void 0;

const globalConfig_service_1 = require('../globalConfig/globalConfig.service'),
      verification_constant_1 = require("../../common/constants/verification.constant"),
      verification_service_1 = require('./../verification/verification.service'),
      common_1 = require('@nestjs/common'),
      jwt_1 = require('@nestjs/jwt'),
      user_service_1 = require('../user/user.service'),
      mailer_service_1 = require('../mailer/mailer.service'),
      user_constant_1 = require("../../common/constants/user.constant"),
      userBalance_service_1 = require("../userBalance/userBalance.service"),
      config_entity_1 = require("../globalConfig/config.entity"),
      typeorm_1 = require("typeorm"),
      typeorm_2 = require("@nestjs/typeorm"),
      utils_1 = require("../../common/utils"),
      os = require('os'),
      redisCache_service_1 = require("../redisCache/redisCache.service"),
      svgCaptcha = require("svg-captcha"),
      bcrypt = require("bcryptjs");

let AuthService = class AuthService {
  constructor(_0x213969, _0x2914f2, _0x3f62c8, _0x5ed871, _0xce4972, _0x4d8a6c, _0x4ed37a, _0x684e75) {
    this["configEntity"] = _0x213969;
    this["userService"] = _0x2914f2;
    this["jwtService"] = _0x3f62c8;
    this['mailerService'] = _0x5ed871;
    this["verificationService"] = _0xce4972;
    this['userBalanceService'] = _0x4d8a6c;
    this["redisCacheService"] = _0x4ed37a;
    this["globalConfigService"] = _0x684e75;
  }

  async ["onModuleInit"]() {
    this['getIp']();
  }

  async ["register"](_0x5b44ec, _0x21569d) {
    await this["verificationService"]['verifyCaptcha'](_0x5b44ec);

    const _0x3958d1 = await this["userService"]["createUserAndVerifycation"](_0x5b44ec, _0x21569d),
          {
      "username": _0x195e06,
      "email": _0x19b799,
      "client": _0x4d2b8d,
      "id": _0xea76a1
    } = _0x3958d1,
          _0x18d907 = {
      'username': _0x195e06,
      'email': _0x19b799,
      'id': _0xea76a1
    };

    _0x4d2b8d && (_0x18d907["client"] = _0x4d2b8d);
    return _0x18d907;
  }

  async ["registerByPhone"](_0x1fd362, _0x287f2d) {
    const {
      "username": _0x2c99b5,
      "password": _0xcb9e30,
      "phone": _0x26b618,
      "phoneCode": _0x3cc947,
      "invitedBy": _0x270b25
    } = _0x1fd362;
    await this["userService"]["verifyUserRegisterByPhone"](_0x1fd362);

    const _0x229d08 = await this["globalConfigService"]["getNamespace"](),
          _0x423b43 = _0x229d08 + ":PHONECODE:" + _0x26b618,
          _0x357e11 = await this['redisCacheService']['get']({
      'key': _0x423b43
    });

    if (!_0x357e11) {
      throw new common_1['HttpException']("验证码已过期、请重新发送！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    if (_0x3cc947 !== _0x357e11) {
      throw new common_1["HttpException"]("验证码填写错误、请重新输入！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x349c9d = (0, utils_1["createRandomUid"])() + '@nine.com',
          _0x5c0513 = {
      'username': _0x2c99b5,
      'password': _0xcb9e30,
      'phone': _0x26b618,
      'invitedBy': _0x270b25,
      'email': _0x349c9d,
      'status': user_constant_1['UserStatusEnum']["ACTIVE"],
      "avatar": _0x5cf099
    },
          _0x5cf099 = await this["globalConfigService"]['getConfigs'](["userDefautlAvatar"]);

    const _0x3dc698 = bcrypt["hashSync"](_0xcb9e30, 10);

    _0x5c0513['password'] = _0x3dc698;

    const _0x2a6b12 = await this["userService"]["createUser"](_0x5c0513);

    let _0xb5981;

    _0x270b25 && (_0xb5981 = await this['userService']['qureyUserInfoByInviteCode'](_0x270b25));
    await this["userBalanceService"]["addBalanceToNewUser"](_0x2a6b12['id'], _0xb5981 === null || _0xb5981 === void 0 ? void 0 : _0xb5981['id']);
    console["log"]('输入一样进入注册流程');
    return;
  }

  async ["login"](_0x3c2b31, _0x369ffe) {
    const _0xb2a78e = await this['userService']["verifyUserCredentials"](_0x3c2b31),
          {
      "username": _0x48361b,
      "id": _0xf9ee10,
      "email": _0x5448e9,
      "role": _0x30b7ce,
      "openId": _0x1fe28c,
      "client": _0x5cc07a
    } = _0xb2a78e,
          _0x10134f = (0, utils_1["getClientIp"])(_0x369ffe);

    await this["userService"]["savaLoginIp"](_0xf9ee10, _0x10134f);

    const _0x403e41 = await this["jwtService"]['sign']({
      'username': _0x48361b,
      'id': _0xf9ee10,
      'email': _0x5448e9,
      'role': _0x30b7ce,
      'openId': _0x1fe28c,
      'client': _0x5cc07a
    });

    await this['redisCacheService']['saveToken'](_0xf9ee10, _0x403e41);
    return _0x403e41;
  }

  async ["loginByPhone"](_0x4bd975, _0x146c52) {
    const _0x4f841e = await this["userService"]['verifyUserCredentials'](_0x4bd975),
          {
      "username": _0xf05afe,
      "id": _0x3aeaa8,
      "email": _0x1e5600,
      "role": _0x557ba5,
      "openId": _0x3063d1,
      "client": _0x3a0977
    } = _0x4f841e,
          _0x5945eb = (0, utils_1["getClientIp"])(_0x146c52);

    await this["userService"]["savaLoginIp"](_0x3aeaa8, _0x5945eb);

    const {
      "phone": _0x3b1fc9
    } = _0x4bd975,
          _0x4aa8ad = await this['jwtService']["sign"]({
      'username': _0xf05afe,
      'id': _0x3aeaa8,
      'email': _0x1e5600,
      'role': _0x557ba5,
      'openId': _0x3063d1,
      'client': _0x3a0977,
      'phone': _0x3b1fc9
    });

    await this["redisCacheService"]["saveToken"](_0x3aeaa8, _0x4aa8ad);
    return _0x4aa8ad;
  }

  async ["loginByOpenId"](_0x470a22, _0x3c9f09) {
    const {
      "status": _0xceba9c
    } = _0x470a22;

    if (_0xceba9c !== user_constant_1["UserStatusEnum"]["ACTIVE"]) {
      throw new common_1["HttpException"](user_constant_1["UserStatusErrMsg"][_0xceba9c], common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const {
      "username": _0x7aa216,
      "id": _0x2b64e1,
      "email": _0x420d26,
      "role": _0x27f811,
      "openId": _0x461cdf,
      "client": _0x20ca22
    } = _0x470a22,
          _0x18aabf = (0, utils_1["getClientIp"])(_0x3c9f09);

    await this["userService"]["savaLoginIp"](_0x2b64e1, _0x18aabf);

    const _0x423bbe = await this["jwtService"]['sign']({
      'username': _0x7aa216,
      'id': _0x2b64e1,
      'email': _0x420d26,
      'role': _0x27f811,
      'openId': _0x461cdf,
      'client': _0x20ca22
    });

    await this["redisCacheService"]["saveToken"](_0x2b64e1, _0x423bbe);
    return _0x423bbe;
  }

  async ["getInfo"](_0x1333b0) {
    const {
      "id": _0x872a06
    } = _0x1333b0["user"];
    return await this["userService"]["getUserInfo"](_0x872a06);
  }

  async ["activateAccount"](_0x1eb90f, _0x54a43c) {
    const _0xfd93be = await this["configEntity"]["find"]({
      'where': {
        'configKey': (0, typeorm_1['In'])(["registerSuccessEmailTitle", "registerSuccessEmailTeamName", 'registerSuccessEmaileAppend', "registerFailEmailTitle", "registerFailEmailTeamName"])
      }
    }),
          _0x16bd3b = _0xfd93be["reduce"]((_0x195ff1, _0x596b84) => {
      _0x195ff1[_0x596b84["configKey"]] = _0x596b84["configVal"];
      return _0x195ff1;
    }, {});

    try {
      const _0x10c9c5 = await this['verificationService']['verifyCode'](_0x1eb90f, verification_constant_1['VerificationEnum']["Registration"]),
            {
        "type": _0x3f6025,
        "userId": _0x29540d
      } = _0x10c9c5;

      if (_0x3f6025 !== verification_constant_1['VerificationEnum']['Registration']) {
        throw new common_1["HttpException"]("验证码类型错误", common_1['HttpStatus']["BAD_REQUEST"]);
      }

      const _0x5e563a = await this['userService']["getUserStatus"](_0x29540d);

      if (_0x5e563a === user_constant_1["UserStatusEnum"]["ACTIVE"]) {
        throw new common_1["HttpException"]("账户已被激活过", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      await this["userService"]["updateUserStatus"](_0x10c9c5["userId"], user_constant_1["UserStatusEnum"]["ACTIVE"]);

      const _0x2a6f25 = await this['userService']["queryUserInfoById"](_0x10c9c5["userId"]),
            {
        "username": _0x5079d2,
        "email": _0x4c5007,
        "id": _0x316495,
        "invitedBy": _0x40f164
      } = _0x2a6f25;

      let _0x4a24a8;

      _0x40f164 && (_0x4a24a8 = await this["userService"]["qureyUserInfoByInviteCode"](_0x40f164));
      await this["userBalanceService"]["addBalanceToNewUser"](_0x316495, _0x4a24a8 === null || _0x4a24a8 === void 0 ? void 0 : _0x4a24a8['id']);

      _0x54a43c["redirect"]('/api/auth/registerSuccess?id=' + _0x316495["toString"]()["padStart"](4, '0') + "&username=" + _0x5079d2 + "&email=" + _0x4c5007 + "&registerSuccessEmailTitle=" + _0x16bd3b['registerSuccessEmailTitle'] + "&registerSuccessEmailTeamName=" + _0x16bd3b['registerSuccessEmailTeamName'] + "&registerSuccessEmaileAppend=" + _0x16bd3b["registerSuccessEmaileAppend"]);
    } catch (_0x29095d) {
      console["log"]("error: ", _0x29095d);
      const _0x3e4ca1 = _0x29095d["response"];

      _0x54a43c["redirect"]("/api/auth/registerError?message=" + _0x3e4ca1 + "&registerFailEmailTitle=" + _0x16bd3b['registerFailEmailTitle'] + "&registerFailEmailTeamName=" + _0x16bd3b["registerFailEmailTeamName"]);
    }
  }

  async ['updatePassword'](_0x1c46f6, _0x54cfa3) {
    const {
      "id": _0x2667cb,
      "client": _0x3a7a15,
      "role": _0x13ce78
    } = _0x1c46f6["user"];

    if (_0x3a7a15 && Number(_0x3a7a15) > 0) {
      throw new common_1['HttpException']("无权此操作、请联系管理员！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    if (_0x13ce78 === "admin") {
      throw new common_1['HttpException']('非法操作、请联系管理员！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x5b74f1 = await this['userService']['verifyUserPassword'](_0x2667cb, _0x54cfa3['oldPassword']);

    if (!_0x5b74f1) {
      throw new common_1['HttpException']('旧密码错误、请检查提交', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    this['userService']["updateUserPassword"](_0x2667cb, _0x54cfa3["password"]);
    return "密码修改成功";
  }

  async ['updatePassByOther'](_0x430647, _0x28becf) {
    const {
      "id": _0x2bada4,
      "client": _0x1c95e4
    } = _0x430647["user"];

    if (!_0x1c95e4) {
      throw new common_1["HttpException"]('无权此操作！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    this['userService']["updateUserPassword"](_0x2bada4, _0x28becf["password"]);
    return "密码修改成功";
  }

  ["getIp"]() {
    let _0x192318;

    const _0x5db08b = os['networkInterfaces']();

    Object["keys"](_0x5db08b)['forEach'](_0x11c59d => {
      const _0x41c979 = _0x5db08b[_0x11c59d];

      for (let _0xe46726 = 0; _0xe46726 < _0x41c979["length"]; _0xe46726++) {
        const _0x2f7a6c = _0x41c979[_0xe46726];

        if (_0x2f7a6c["family"] === "IPv4" && _0x2f7a6c['address'] !== "127.0.0.1" && !_0x2f7a6c["internal"]) {
          _0x192318 = _0x2f7a6c["address"];
          break;
        }
      }
    });
    this['ipAddress'] = _0x192318;
  }

  async ["captcha"](_0x4ae0cb) {
    const _0x5aee8d = await this["globalConfigService"]["getNamespace"](),
          {
      "color": color = "#fff"
    } = _0x4ae0cb,
          _0x21ac5b = svgCaptcha["createMathExpr"]({
      'background': color,
      'height': 34,
      'width': 120,
      'noise': 3
    }),
          _0x33b821 = (0, utils_1["createRandomUid"])(),
          _0x220531 = _0x5aee8d + ":CAPTCHA:" + _0x33b821;

    await this["redisCacheService"]["set"]({
      'key': _0x220531,
      'val': _0x21ac5b["text"]
    }, 300);
    return {
      'svgCode': _0x21ac5b["data"],
      'code': _0x33b821
    };
  }

  async ["sendPhoneCode"](_0x198b76) {
    await this["verificationService"]['verifyCaptcha'](_0x198b76);

    const {
      "phone": _0x4d6333
    } = _0x198b76,
          _0x32b62f = await this["globalConfigService"]['getNamespace'](),
          _0x403670 = _0x32b62f + ":PHONECODE:" + _0x4d6333,
          _0x42fb27 = await this['redisCacheService']["ttl"](_0x403670);

    if (_0x42fb27 && _0x42fb27 > 0) {
      throw new common_1["HttpException"](_0x42fb27 + "秒内不得重复发送短信！", common_1['HttpStatus']['BAD_REQUEST']);
    }

    const _0x2b10fd = (0, utils_1["createRandomCode"])(),
          _0x3a4e55 = {
      'phone': _0x4d6333,
      'code': _0x2b10fd
    };

    console["log"]("messageInfo: ", _0x3a4e55);
    await this["verificationService"]['sendPhoneCode'](_0x3a4e55);
    await this["redisCacheService"]["set"]({
      'key': _0x403670,
      'val': _0x2b10fd
    }, 60);
    return '验证码发送成功、请填写验证码完成注册！';
  }

};
AuthService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_2['InjectRepository'])(config_entity_1["ConfigEntity"])), __metadata("design:paramtypes", [typeorm_1["Repository"], user_service_1['UserService'], jwt_1["JwtService"], mailer_service_1["MailerService"], verification_service_1["VerificationService"], userBalance_service_1["UserBalanceService"], redisCache_service_1["RedisCacheService"], globalConfig_service_1['GlobalConfigService']])], AuthService);
exports['AuthService'] = AuthService;