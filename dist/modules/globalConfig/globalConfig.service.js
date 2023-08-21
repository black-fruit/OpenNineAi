'use strict';

var __decorate = this && this['__decorate'] || function (_0x3ed721, _0x5425c8, _0x2726ec, _0x171c8b) {
  var _0x1aeae9 = arguments["length"],
      _0x3c1a23 = _0x1aeae9 < 3 ? _0x5425c8 : _0x171c8b === null ? _0x171c8b = Object["getOwnPropertyDescriptor"](_0x5425c8, _0x2726ec) : _0x171c8b,
      _0x450383;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3c1a23 = Reflect["decorate"](_0x3ed721, _0x5425c8, _0x2726ec, _0x171c8b);
  } else {
    for (var _0x132a4 = _0x3ed721['length'] - 1; _0x132a4 >= 0; _0x132a4--) {
      if (_0x450383 = _0x3ed721[_0x132a4]) {
        _0x3c1a23 = (_0x1aeae9 < 3 ? _0x450383(_0x3c1a23) : _0x1aeae9 > 3 ? _0x450383(_0x5425c8, _0x2726ec, _0x3c1a23) : _0x450383(_0x5425c8, _0x2726ec)) || _0x3c1a23;
      }
    }
  }

  _0x1aeae9 > 3 && _0x3c1a23 && Object["defineProperty"](_0x5425c8, _0x2726ec, _0x3c1a23);
  return _0x3c1a23;
},
    __metadata = this && this['__metadata'] || function (_0x22392c, _0x3fc32b) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x22392c, _0x3fc32b);
  }
},
    __param = this && this["__param"] || function (_0x4930b7, _0x533800) {
  return function (_0x14ca2c, _0x1e63af) {
    _0x533800(_0x14ca2c, _0x1e63af, _0x4930b7);
  };
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["GlobalConfigService"] = void 0;

const common_1 = require("@nestjs/common"),
      config_entity_1 = require("./config.entity"),
      typeorm_1 = require("@nestjs/typeorm"),
      typeorm_2 = require("typeorm"),
      utils_1 = require("../../common/utils"),
      axios_1 = require("axios");

let GlobalConfigService = class GlobalConfigService {
  constructor(_0x368752) {
    this['configEntity'] = _0x368752;
    this["globalConfigs"] = {};
    this["nineAiToken"] = true;
    this['count'] = 0;
  }

  async ["onModuleInit"]() {
    await this["initGetAllConfig"]();
    await this["nineAiCheckAuth"]();
  }

  async ["getConfigs"](_0x2ff035) {
    if (_0x2ff035['length'] === 0) {
      return;
    }

    if (_0x2ff035['includes']("wechatAccessToken") && _0x2ff035["length"] === 1) {
      return this["wechatAccessToken"];
    }

    if (_0x2ff035["includes"]('wechatJsapiTicket') && _0x2ff035["length"] === 1) {
      return this["wechatJsapiTicket"];
    }

    if (_0x2ff035["length"] === 1) {
      return this["globalConfigs"][_0x2ff035[0]];
    } else {
      const _0x50037b = {};

      _0x2ff035['forEach'](_0x2f4b3c => _0x50037b[_0x2f4b3c] = this["globalConfigs"][_0x2f4b3c]);

      return _0x50037b;
    }
  }

  async ["initGetAllConfig"]() {
    const _0x35f00b = await this["configEntity"]['find']();

    this["globalConfigs"] = _0x35f00b["reduce"]((_0x2979ba, _0x400b8a) => {
      _0x2979ba[_0x400b8a["configKey"]] = _0x400b8a["configVal"];
      return _0x2979ba;
    }, {});
    this["initBaiduSensitive"]();
  }

  async ["initBaiduSensitive"](_0x1abe5e = true) {
    const {
      "baiduTextApiKey": _0x482e2b,
      "baiduTextSecretKey": _0x4616be
    } = await this['getConfigs'](["baiduTextApiKey", 'baiduTextSecretKey']);

    if (!_0x482e2b || !_0x4616be) {
      common_1["Logger"]["error"]("百度敏感词初始化失败，如果需要敏感检测、请前往后台系统配置!", 'GlobalConfigService');
      return;
    }

    const _0x2dfc7c = {
      'Content-Type': "application/json",
      'Accept': "application/json"
    },
          _0x458df0 = "https://aip.baidubce.com/oauth/2.0/token?client_id=" + _0x482e2b + "&client_secret=" + _0x4616be + '&grant_type=client_credentials';

    try {
      const _0xb40581 = await axios_1["default"]["post"](_0x458df0, {
        'headers': _0x2dfc7c
      });

      this["globalConfigs"]['baiduTextAccessToken'] = _0xb40581["data"]['access_token'];
    } catch (_0x1ad204) {
      if (_0x1abe5e) {
        common_1['Logger']['error']("百度敏感词配置检测失败，您的参数可能配置的不正确!", 'GlobalConfigService');
      } else {
        throw new common_1["HttpException"](_0x1ad204['response']["data"]["error_description"], common_1['HttpStatus']['BAD_REQUEST']);
      }
    }
  }

  async ["getWechatAccessToken"](_0x13e15f = false) {
    const {
      "wechatOfficialAppId": _0x1d9d94,
      "wechatOfficialAppSecret": _0x2c2dec
    } = await this["getConfigs"](["wechatOfficialAppId", "wechatOfficialAppSecret"]);

    if (!_0x1d9d94 || !_0x2c2dec) {
      return common_1['Logger']["error"]('还未配置微信的appId和secret、配置后才可进行微信扫码登录！！！', "OfficialService");
    }

    this['wechatAccessToken'] = await this['fetchBaseAccessToken'](_0x1d9d94, _0x2c2dec, _0x13e15f);
    this['wechatJsapiTicket'] = await this['fetchJsapiTicket'](this["wechatAccessToken"]);
    common_1['Logger']["log"]("wechat refresh access_token  ==> " + this["wechatAccessToken"], "OfficialService");
  }

  async ['fetchBaseAccessToken'](_0x42bf85, _0x50a94f, _0x457649 = false) {
    if (process["env"]["ISDEV"] === "TRUE") {
      this["wechatAccessToken"] = '';
      common_1["Logger"]["error"]('当前为测试环境、不开启微信自动刷新、请获取一个token在此处直接返回！', "OfficialService");
      return;
    }

    const {
      "data": {
        "errmsg": _0x572d26,
        "access_token": _0x1ed1af
      }
    } = await axios_1["default"]["get"]("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + _0x42bf85 + "&secret=" + _0x50a94f);

    if (_0x572d26) {
      if (_0x457649) {
        common_1["Logger"]["error"]("获取微信access_token失败、错误信息：" + _0x572d26, "OfficialService");
      } else {
        throw new common_1["HttpException"]("请配置正确的秘钥、当前秘钥检测不通过！", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      return '';
    }

    return _0x1ed1af;
  }

  async ["fetchJsapiTicket"](_0x1eee81) {
    var _0x389433;

    if (process["env"]['ISDEV'] === "TRUE") {
      this["wechatJsapiTicket"] = '';
      common_1["Logger"]["error"]("当前为测试环境、不开启微信自动刷新、请获取一个token在此处直接返回！", 'OfficialService');
      return;
    }

    const _0x9c3f99 = await axios_1['default']["get"]("https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=" + _0x1eee81 + '&type=jsapi');

    return (_0x389433 = _0x9c3f99 === null || _0x9c3f99 === void 0 ? void 0 : _0x9c3f99["data"]) === null || _0x389433 === void 0 ? void 0 : _0x389433["ticket"];
  }

  async ["queryAllConfig"](_0x4d2c32) {
    const {
      "role": _0x26a71c
    } = _0x4d2c32['user'];
    return this['globalConfigs'];
  }

  async ["queryFrontConfig"](_0x13dcf2) {
    const _0x22ec05 = ['vxNumber', "registerSendStatus", "registerSendModel3Count", "registerSendModel4Count", "registerSendDrawMjCount", 'firstRegisterSendStatus', 'firstRegisterSendRank', "firstRregisterSendModel3Count", "firstRregisterSendModel4Count", "firstRregisterSendDrawMjCount", "inviteSendStatus", 'inviteGiveSendModel3Count', "inviteGiveSendModel4Count", "inviteGiveSendDrawMjCount", 'invitedGuestSendModel3Count', 'invitedGuestSendModel4Count', "invitedGuestSendDrawMjCount", "clientMenuList", "clientHomePath", "clientLogoPath", "clientFavoIconPath", 'isUseWxLogin', 'siteName', "robotAvatar", "siteRobotName", 'buyCramiAddress', "mindDefaultData", 'baiduCode', "payEpayChannel", "payMpayChannel", "payEpayApiPayUrl", "payEpayStatus", "payHupiStatus", "payWechatStatus", "payMpayStatus", "isAutoOpenNotice", "isShowAppCatIcon", "salesBaseRatio", "salesSeniorRatio", "salesAllowDrawMoney", "companyName", "filingNumber", "phoneRegisterStatus", "emailRegisterStatus", 'wechatRegisterStatus', "wechatSilentLoginStatus", 'signInStatus', 'signInModel3Count', "signInModel4Count", 'signInMjDrawToken'],
          _0x2d774e = await this["configEntity"]["find"]({
      'where': {
        'configKey': (0, typeorm_2['In'])(_0x22ec05)
      }
    }),
          {
      "domain": _0x4e9c52
    } = _0x13dcf2,
          _0x4b1d06 = this['globalConfigs']["domain"];

    _0x4b1d06 !== _0x4e9c52 && (this["createOrUpdate"]({
      'configKey': "domain",
      'configVal': _0x4e9c52,
      'status': 1
    }), await this["initGetAllConfig"]());

    const _0x2d5fb3 = _0x2d774e['reduce']((_0x120539, _0x4db267) => {
      _0x120539[_0x4db267["configKey"]] = _0x4db267["configVal"];
      return _0x120539;
    }, {}),
          {
      "wechatOfficialAppId": _0x48b3a6,
      "wechatOfficialAppSecret": _0x4ce828
    } = await this['getConfigs'](['wechatOfficialAppId', "wechatOfficialAppSecret"]),
          _0x254d86 = !!(_0x48b3a6 && _0x4ce828);

    return Object["assign"](Object["assign"]({}, _0x2d5fb3), {
      'isUseWxLogin': _0x254d86
    });
  }

  async ['queryGptKeys'](_0x223a37) {
    const {
      "role": _0x263d2a
    } = _0x223a37["user"],
          _0x2ff5cb = await this["configEntity"]['find']({
      'where': {
        'configKey': (0, typeorm_2['Like'])("%chatGptKey%")
      }
    });

    if (_0x263d2a === 'super') {
      return _0x2ff5cb;
    }

    return _0x2ff5cb["map"](_0xd1c8e5 => {
      _0xd1c8e5["configVal"] = (0, utils_1['hideString'])(_0xd1c8e5["configVal"]);
      return _0xd1c8e5;
    });
  }

  async ['setGptKeys'](_0x4dc31b) {
    const _0x5a6a17 = _0x4dc31b["configs"]["filter"](_0x44106d => _0x44106d['configVal']),
          _0x59624b = _0x5a6a17["map"](_0x1450ca => _0x1450ca['configKey']);

    for (const [_0x5811c5, _0x365bd1] of _0x5a6a17["entries"]()) {
      const {
        "configKey": _0x2f31c4,
        "configVal": _0x1fc70c,
        "status": _0x377363
      } = _0x365bd1;
      await this["createOrUpdate"]({
        'configKey': "chatGptKey:" + (_0x5811c5 + 1),
        'configVal': _0x1fc70c,
        'status': _0x377363
      });
    }

    const _0x3359b9 = await this['configEntity']["find"]({
      'where': {
        'configKey': (0, typeorm_2["Like"])("%chatGptKey%")
      }
    }),
          _0x5844e2 = _0x3359b9["map"](_0x4d50b5 => _0x4d50b5["configKey"]);

    if (_0x5844e2["length"] > _0x59624b["length"]) {
      const _0x3e9b54 = (0, utils_1["getDiffArray"])(_0x5844e2["length"], _0x59624b['length'], "chatGptKey:");

      for (const _0x1a6892 of _0x3e9b54) {
        await this["configEntity"]['delete']({
          'configKey': _0x1a6892
        });
      }
    }

    await this["initGetAllConfig"]();
    return '操作完成！';
  }

  async ['queryConfig'](_0x25ee0e, _0x4a4649) {
    const {
      "role": _0x64abf9
    } = _0x4a4649["user"],
          {
      "keys": _0x1d3b40
    } = _0x25ee0e,
          _0x481f75 = await this["configEntity"]["find"]({
      'where': {
        'configKey': (0, typeorm_2['In'])(_0x1d3b40)
      }
    });

    _0x64abf9 !== "super" && _0x481f75["forEach"](_0x10fc28 => {
      if (_0x10fc28['configKey']["includes"]('mj') || _0x10fc28["configKey"]["includes"]('Key') || _0x10fc28["configKey"]["includes"]('gpt') || _0x10fc28["configKey"]["includes"]("cos") || _0x10fc28["configKey"]['includes']('baidu') || _0x10fc28["configKey"]['includes']("ali") || _0x10fc28["configKey"]["includes"]("tencent") || _0x10fc28['configKey']["includes"]('pay') || _0x10fc28["configKey"]["includes"]("wechat") || _0x10fc28["configKey"] === "openaiBaseUrl") {
        const _0x59311c = ["payWeChatPublicKey", "payWeChatPrivateKey"];

        if (_0x59311c["includes"](_0x10fc28["configKey"])) {
          return _0x10fc28["configVal"] = (0, utils_1["hideString"])(_0x10fc28["configVal"], "隐私内容、非超级管理员无权查看");
        }

        const _0x496d84 = ["payEpayStatus", "payHupiStatus", "mjProxy"];
        !_0x496d84["includes"](_0x10fc28["configKey"]) && !_0x10fc28['configKey']["includes"]('Status') && (_0x10fc28['configVal'] = (0, utils_1['hideString'])(_0x10fc28["configVal"]));
      }
    });
    return _0x481f75["reduce"]((_0x4cef2c, _0x113bde) => {
      _0x4cef2c[_0x113bde["configKey"]] = _0x113bde["configVal"];
      return _0x4cef2c;
    }, {});
  }

  async ["notice"](_0x53f6d7) {
    if (!_0x53f6d7) {
      return;
    }

    if (_0x53f6d7 === "nineaiauthclose") {
      this["nineAiToken"] = false;
      await this["createOrUpdate"]({
        'configKey': "MjdrawCount",
        'configVal': 1,
        'status': 1
      });
      await this["initGetAllConfig"]();
    } else {
      if (_0x53f6d7 === "nineaiauthopen") {
        this["nineAiToken"] = true;
        await this["createOrUpdate"]({
          'configKey': "MjdrawCount",
          'configVal': 0,
          'status': 1
        });
        await this["initGetAllConfig"]();
      } else {
        throw new common_1['HttpException']("请输入正确的公告id", common_1["HttpStatus"]["BAD_REQUEST"]);
      }
    }
  }

  ["getNineAiToken"]() {
    const _0x403314 = this["globalConfigs"]["MjdrawCount"],
          _0x2a6a4d = this['nineAiToken'];
    return !_0x2a6a4d || Number(_0x403314) === 1;
  }

  async ['setConfig'](_0x16e030) {
    const {
      "settings": _0xac688b
    } = _0x16e030;

    for (const _0x26a70f of _0xac688b) {
      await this['createOrUpdate'](_0x26a70f);
    }

    await this["initGetAllConfig"]();

    const _0x277c35 = _0xac688b['map'](_0x5e0e27 => _0x5e0e27["configKey"]);

    (_0x277c35["includes"]("baiduTextApiKey") || _0x277c35["includes"]('baiduTextSecretKey')) && (await this["initBaiduSensitive"](false));
    (_0x277c35['includes']("wechatOfficialAppId") || _0x277c35["includes"]("wechatOfficialAppSecret")) && (await this["getWechatAccessToken"](), common_1["Logger"]['log']("触发手动刷新微信 access_token", "OfficialService"));
    return "设置完成！";
  }

  async ["createOrUpdate"](_0xb2bcc4) {
    try {
      const {
        "configKey": _0x5e0711,
        "configVal": _0x38f236,
        "status": status = 1
      } = _0xb2bcc4,
            _0x188e54 = await this["configEntity"]['findOne']({
        'where': {
          'configKey': _0x5e0711
        }
      });

      if (_0x188e54) {} else {}
    } catch (_0x45af9e) {
      throw new common_1["HttpException"]("设置配置信息错误！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ['queryNotice']() {
    return await this["getConfigs"](["noticeInfo", "noticeTitle"]);
  }

  async ["queryPayType"]() {
    const {
      "payHupiStatus": payHupiStatus = 0,
      "payEpayStatus": payEpayStatus = 0,
      "payWechatStatus": payWechatStatus = 0,
      "payMpayStatus": payMpayStatus = 0
    } = await this["getConfigs"](["payHupiStatus", "payEpayStatus", "payMpayStatus", "payWechatStatus"]);

    if ([payHupiStatus, payEpayStatus, payWechatStatus, payMpayStatus]['every'](_0x6c1fe1 => _0x6c1fe1 === 0)) {
      throw new common_1['HttpException']("支付功能暂未开放!", common_1['HttpStatus']['BAD_REQUEST']);
    }

    if (Number(payWechatStatus) === 1) {
      return "wechat";
    }

    if (Number(payEpayStatus) === 1) {
      return 'epay';
    }

    if (Number(payMpayStatus) === 1) {
      return "mpay";
    }

    if (Number(payHupiStatus) === 1) {
      return "hupi";
    }
  }

  async ["getAuthInfo"]() {
    const {
      "siteName": _0x2ba281,
      "qqNumber": _0x5f5816,
      "vxNumber": _0x10d850,
      "registerBaseUrl": _0x2e4d4a,
      "domain": _0x4d82f5
    } = await this["getConfigs"](["siteName", "qqNumber", "vxNumber", "registerBaseUrl", "domain"]);
    return {
      'siteName': _0x2ba281,
      'qqNumber': _0x5f5816,
      'vxNumber': _0x10d850,
      'registerBaseUrl': _0x2e4d4a,
      'domain': _0x4d82f5
    };
  }

  async ["getPhoneVerifyConfig"]() {
    const {
      "phoneRegisterStatus": _0x1223eb,
      "aliPhoneAccessKeyId": _0x4bb994,
      "aliPhoneAccessKeySecret": _0xac36c4,
      "aliPhoneSignName": _0xd10c86,
      "aliPhoneTemplateCode": _0x1faa29
    } = await this["getConfigs"](["phoneRegisterStatus", 'aliPhoneAccessKeyId', "aliPhoneAccessKeySecret", 'aliPhoneSignName', 'aliPhoneTemplateCode']);
    console["log"]("phoneRegisterStatus: ", _0x1223eb);

    if (Number(_0x1223eb) !== 1) {
      throw new common_1["HttpException"]("手机验证码功能暂未开放!", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    return {
      'accessKeyId': _0x4bb994,
      'accessKeySecret': _0xac36c4,
      'SignName': _0xd10c86,
      'TemplateCode': _0x1faa29
    };
  }

  async ['nineAiCheckAuth']() {
    const _0x4b2a2d = process["env"]["NINE_AI_HOST"],
          _0x55d812 = process['env']["NINE_AI_KEY"];

    if (!_0x4b2a2d || !_0x55d812) {
      common_1["Logger"]["error"]("\n      您还未按要求填写正确的授权信息、请确认您已经填写、否则会带来未知错误！\n      您还未按要求填写正确的授权信息、请确认您已经填写、否则会带来未知错误！\n      您还未按要求填写正确的授权信息、请确认您已经填写、否则会带来未知错误！\n      您还未按要求填写正确的授权信息、请确认您已经填写、否则会带来未知错误！\n      您还未按要求填写正确的授权信息、请确认您已经填写、否则会带来未知错误！\n      ", "NineAi 授权认证");
      this['count'] <= 3 && setTimeout(() => this['nineAiCheckAuth'](), 600000);
      this["count"]++;
      this['count'] >= 3 && (this["nineAiToken"] = false, await this["createOrUpdate"]({
        'configKey': 'MjdrawCount',
        'configVal': 1,
        'status': 1
      }));
      return;
    }

    const _0x163365 = await this["getAuthInfo"](),
          _0x2fc629 = Object["assign"]({
      'ip': _0x4b2a2d,
      'key': _0x55d812
    }, _0x163365),
          _0x8dbe71 = {
      'method': "POST",
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON["stringify"](_0x2fc629)
    };

    try {
      const _0x33fced = await fetch("https://api.jiangly.com/api/permission/auth", _0x8dbe71),
            _0x8114ad = await _0x33fced["json"](),
            {
        "success": success = true,
        "message": _0x20e3da
      } = _0x8114ad;

      if (success) {
        common_1["Logger"]['log']("AUTH授权检测通过、祝您使用愉快！", "NineAi 授权认证");
        await this["createOrUpdate"]({
          'configKey': 'MjdrawCount',
          'configVal': 0,
          'status': 1
        });
        await this["initGetAllConfig"]();
      } else {
        common_1["Logger"]["error"](_0x20e3da, "NineAi 授权认证");
        process["exit"](0);
        return;
      }
    } catch (_0x170db7) {
      console['log']("error: ", _0x170db7);
      common_1["Logger"]['error']("授权检测完成、感谢您使用NineAi！", "NineAi 授权认证");
    }
  }

  ["getNamespace"]() {
    return process["env"]["NAMESPACE"] || "NINEAI";
  }

  async ["getSignatureGiftConfig"]() {
    const {
      "signInStatus": signInStatus = 0,
      "signInModel3Count": signInModel3Count = 0,
      "signInModel4Count": signInModel4Count = 0,
      "signInMjDrawToken": signInMjDrawToken = 0
    } = await this["getConfigs"](["signInStatus", "signInModel3Count", 'signInModel4Count', "signInMjDrawToken"]);

    if (Number(signInStatus) !== 1) {
      throw new common_1["HttpException"]("签到功能暂未开放!", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    return {
      'model3Count': Number(signInModel3Count),
      'model4Count': Number(signInModel4Count),
      'drawMjCount': Number(signInMjDrawToken)
    };
  }

};
GlobalConfigService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_1["InjectRepository"])(config_entity_1["ConfigEntity"])), __metadata("design:paramtypes", [typeorm_2['Repository']])], GlobalConfigService);
exports["GlobalConfigService"] = GlobalConfigService;