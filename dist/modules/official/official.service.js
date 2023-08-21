'use strict';

var __decorate = this && this["__decorate"] || function (_0x4e2f06, _0xba27c3, _0x3a867c, _0x4a907b) {
  var _0x20eaf7 = arguments["length"],
      _0x3e8060 = _0x20eaf7 < 3 ? _0xba27c3 : _0x4a907b === null ? _0x4a907b = Object["getOwnPropertyDescriptor"](_0xba27c3, _0x3a867c) : _0x4a907b,
      _0xa4790d;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3e8060 = Reflect["decorate"](_0x4e2f06, _0xba27c3, _0x3a867c, _0x4a907b);
  } else {
    for (var _0x3b0170 = _0x4e2f06["length"] - 1; _0x3b0170 >= 0; _0x3b0170--) {
      if (_0xa4790d = _0x4e2f06[_0x3b0170]) {
        _0x3e8060 = (_0x20eaf7 < 3 ? _0xa4790d(_0x3e8060) : _0x20eaf7 > 3 ? _0xa4790d(_0xba27c3, _0x3a867c, _0x3e8060) : _0xa4790d(_0xba27c3, _0x3a867c)) || _0x3e8060;
      }
    }
  }

  _0x20eaf7 > 3 && _0x3e8060 && Object["defineProperty"](_0xba27c3, _0x3a867c, _0x3e8060);
  return _0x3e8060;
},
    __metadata = this && this["__metadata"] || function (_0x37ba23, _0x310ece) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x37ba23, _0x310ece);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['OfficialService'] = void 0;

const globalConfig_service_1 = require("./../globalConfig/globalConfig.service"),
      auth_service_1 = require("./../auth/auth.service"),
      user_service_1 = require("./../user/user.service"),
      autoreply_service_1 = require("./../autoreply/autoreply.service"),
      common_1 = require("@nestjs/common"),
      crypto = require('crypto'),
      axios_1 = require("axios"),
      utils_1 = require("../../common/utils");

let OfficialService = class OfficialService {
  constructor(_0x44642d, _0x5389aa, _0x4e2ad1, _0x5a09d0) {
    this["autoreplyService"] = _0x44642d;
    this['userService'] = _0x5389aa;
    this["authService"] = _0x4e2ad1;
    this['globalConfigService'] = _0x5a09d0;
    this['sceneStrMap'] = {};
    this['scanedSceneStrMap'] = {};
  }

  async ["onModuleInit"]() {
    await this["globalConfigService"]['getWechatAccessToken'](true);
  }

  async ['getQRSceneStr'](_0x4e759a) {
    const {
      "invitedBy": _0x4e86d4
    } = _0x4e759a;

    let _0x80b5f = (0, utils_1["createRandomNonceStr"])(32);

    _0x4e86d4 && (_0x80b5f += ':' + _0x4e86d4);
    this['sceneStrMap'][_0x80b5f] = true;
    return _0x80b5f;
  }

  async ["getQRSceneStrByBind"](_0x2b6980) {
    const {
      "id": _0x46faaf
    } = _0x2b6980["user"],
          _0x59c301 = (0, utils_1["createRandomNonceStr"])(32) + '/' + _0x46faaf;

    this["sceneStrMap"][_0x59c301] = true;
    return _0x59c301;
  }

  async ["getQRCodeTicket"](_0x57274d) {
    return this["fetchQRCodeTicket"](_0x57274d);
  }

  async ["getRedirectUrl"](_0x4125fd) {
    const _0x33d22b = await this['globalConfigService']["getConfigs"](["wechatOfficialAppId"]),
          _0x582576 = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + _0x33d22b + '&redirect_uri=' + encodeURIComponent(_0x4125fd) + '&response_type=code&scope=snsapi_base&state=weChatLogin#wechat_redirect';

    console["log"]("回跳跳转地址: ", _0x582576);
    return _0x582576;
  }

  async ["getJsapiTicket"](_0x297313) {
    const _0x30fb94 = (0, utils_1["createRandomNonceStr"])(32),
          _0x5ae85e = (Date["now"]() / 1000)["toFixed"](0),
          _0x29c72a = await this["globalConfigService"]["getConfigs"](["wechatJsapiTicket"]);

    console["log"]("jsapiTicket: ", _0x29c72a);

    const _0x54d946 = await this['globalConfigService']["getConfigs"](["wechatOfficialAppId"]);

    console["log"]("appId: ", _0x54d946);

    const _0x12d84b = 'jsapi_ticket=' + _0x29c72a + "&noncestr=" + _0x30fb94 + "&timestamp=" + _0x5ae85e + '&url=' + _0x297313;

    console["log"]("str: ", _0x12d84b);

    const _0x31d1d0 = this["sha1"](_0x12d84b);

    return {
      'appId': _0x54d946,
      'nonceStr': _0x30fb94,
      'timestamp': _0x5ae85e,
      'signature': _0x31d1d0
    };
  }

  async ["fetchQRCodeTicket"](_0x57cd41) {
    const _0x577a1a = await this["globalConfigService"]["getConfigs"](['wechatAccessToken']),
          _0x5a04b5 = {
      'action_name': "QR_STR_SCENE",
      'action_info': {
        'scene': {
          'scene_str': _0x57cd41
        }
      }
    },
          _0x41c092 = await axios_1["default"]["post"]("https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=" + _0x577a1a, _0x5a04b5),
          {
      "data": {
        "errmsg": _0x5d3087,
        "ticket": _0x6f0998
      }
    } = _0x41c092;

    if (_0x5d3087) {
      throw new common_1['HttpException'](_0x5d3087, common_1["HttpStatus"]['BAD_REQUEST']);
    }

    return _0x6f0998;
  }

  async ["loginByCode"](_0x2829f3, _0x474a6c) {
    const _0x423a95 = await this["globalConfigService"]["getConfigs"](["wechatOfficialAppId"]),
          _0xae2565 = await this["globalConfigService"]['getConfigs'](['wechatOfficialAppSecret']),
          _0x413daf = await axios_1['default']["get"]("https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + _0x423a95 + "&secret=" + _0xae2565 + "&code=" + _0x474a6c + "&grant_type=authorization_code"),
          {
      "data": {
        "errmsg": _0xba48b9,
        "openid": _0x473104
      }
    } = _0x413daf;

    if (_0xba48b9) {
      throw new common_1["HttpException"](_0xba48b9, common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    let _0xe72dc0;

    _0xe72dc0 = await this["userService"]['getUserOpenId'](_0x473104);
    !_0xe72dc0 && (_0xe72dc0 = await this["userService"]["getUserFromOpenId"](_0x473104));
    return this["authService"]["loginByOpenId"](_0xe72dc0, _0x2829f3);
  }

  async ["scan"](_0x1affdc, _0x3aba6a) {
    if (!this["sceneStrMap"][_0x3aba6a]) {
      throw new common_1["HttpException"]("非法参数", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    const _0x412c69 = await this['userService']["getUserFromOpenId"](_0x1affdc, _0x3aba6a);

    this["scanedSceneStrMap"][_0x3aba6a] = _0x412c69['id'];
  }

  async ["loginBySceneStr"](_0x2c3467, _0x547655) {
    if (!this["sceneStrMap"][_0x547655]) {
      return;
    }

    const _0x1835e2 = this["scanedSceneStrMap"][_0x547655];

    if (!_0x1835e2) {
      return '';
    }

    const _0x47ed48 = await this["userService"]['getUserById'](_0x1835e2);

    delete this['scanedSceneStrMap'][_0x547655];
    return this["authService"]["loginByOpenId"](_0x47ed48, _0x2c3467);
  }

  async ['scanBindWx'](_0x4e7025, _0x2a6b7c) {
    if (!this["sceneStrMap"][_0x2a6b7c]) {
      throw new common_1["HttpException"]('非法参数', common_1["HttpStatus"]['BAD_REQUEST']);
    }

    const _0x31f681 = _0x2a6b7c['split']('/')[1],
          _0x38363a = await this["userService"]["bindWx"](_0x4e7025, _0x31f681);

    this["scanedSceneStrMap"][_0x2a6b7c] = _0x38363a;
  }

  async ["bindWxBySceneStr"](_0x30a3c5, _0x15f8d7) {
    if (!this["sceneStrMap"][_0x15f8d7]) {
      throw new common_1['HttpException']("非法参数", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const {
      "id": _0x5a12a1
    } = _0x30a3c5['user'],
          _0x388ee7 = this["scanedSceneStrMap"][_0x15f8d7];

    if (!_0x388ee7) {
      return '';
    }

    delete this['scanedSceneStrMap'][_0x15f8d7];
    return _0x388ee7;
  }

  async ["verify"](_0x9e1e4d, _0x48da0a, _0x48e8c2) {
    const _0x10d771 = (await this["globalConfigService"]["getConfigs"](['wechatOfficialToken'])) || "jiangly";

    return (await this["sha1"]([_0x10d771, _0x48da0a, _0x48e8c2]["sort"]()['join'](''))) == _0x9e1e4d;
  }

  ["sha1"](_0x599793) {
    return crypto["createHash"]("sha1")["update"](_0x599793)["digest"]("hex");
  }

  async ["genXmlMsgByConfig"](_0x140e0c, _0x83aecd) {
    const _0x537a10 = await this["globalConfigService"]["getConfigs"]([_0x83aecd]);

    return this["genXmlMsg"](_0x140e0c, _0x537a10);
  }

  async ['genXmlMsg'](_0x1af2e6, _0x2b9c01) {
    return "\n    <xml>\n        <ToUserName><![CDATA[" + _0x1af2e6["fromusername"][0] + "]]></ToUserName>\n        <FromUserName><![CDATA[" + _0x1af2e6["tousername"][0] + "]]></FromUserName>\n        <CreateTime>" + new Date()["getTime"]() + "</CreateTime>\n        <MsgType><![CDATA[text]]></MsgType>\n        <Content><![CDATA[" + _0x2b9c01 + "]]></Content>\n    </xml>";
  }

  async ["aotoPlay"](_0x259b6d) {
    let _0x24e9b7 = await this['autoreplyService']["checkAutoReply"](_0x259b6d);

    if (!_0x24e9b7) {
      const _0x5d4819 = await this["globalConfigService"]["getConfigs"](['officialAutoReplyText']);

      _0x24e9b7 = _0x5d4819;
    }

    return _0x24e9b7;
  }

};
OfficialService = __decorate([(0, common_1["Injectable"])(), __metadata("design:paramtypes", [autoreply_service_1['AutoreplyService'], user_service_1["UserService"], auth_service_1["AuthService"], globalConfig_service_1["GlobalConfigService"]])], OfficialService);
exports['OfficialService'] = OfficialService;