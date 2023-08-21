'use strict';

var __decorate = this && this["__decorate"] || function (_0x14539f, _0x261968, _0x314a41, _0x306703) {
  var _0x1d5ce3 = arguments['length'],
      _0x3686a2 = _0x1d5ce3 < 3 ? _0x261968 : _0x306703 === null ? _0x306703 = Object["getOwnPropertyDescriptor"](_0x261968, _0x314a41) : _0x306703,
      _0x714260;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3686a2 = Reflect["decorate"](_0x14539f, _0x261968, _0x314a41, _0x306703);
  } else {
    for (var _0x3f659b = _0x14539f["length"] - 1; _0x3f659b >= 0; _0x3f659b--) {
      if (_0x714260 = _0x14539f[_0x3f659b]) {
        _0x3686a2 = (_0x1d5ce3 < 3 ? _0x714260(_0x3686a2) : _0x1d5ce3 > 3 ? _0x714260(_0x261968, _0x314a41, _0x3686a2) : _0x714260(_0x261968, _0x314a41)) || _0x3686a2;
      }
    }
  }

  _0x1d5ce3 > 3 && _0x3686a2 && Object["defineProperty"](_0x261968, _0x314a41, _0x3686a2);
  return _0x3686a2;
},
    __metadata = this && this["__metadata"] || function (_0x353fee, _0x1f8b00) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect['metadata'](_0x353fee, _0x1f8b00);
  }
},
    __param = this && this["__param"] || function (_0x5c6c4e, _0x39d0c9) {
  return function (_0x3a9348, _0x387309) {
    _0x39d0c9(_0x3a9348, _0x387309, _0x5c6c4e);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["OfficialController"] = void 0;

const common_1 = require("@nestjs/common"),
      swagger_1 = require('@nestjs/swagger'),
      jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard"),
      official_service_1 = require("./official.service"),
      getQrCode_dto_1 = require("./dto/getQrCode.dto"),
      getQrSceneStr_dto_1 = require("./dto/getQrSceneStr.dto");

let OfficialController = class OfficialController {
  constructor(_0xe88ff5) {
    this["officialService"] = _0xe88ff5;
  }

  async ["notify"](_0x17856f, _0x8f4096, _0x381c14) {
    console["log"]("get 通知>>>", _0x8f4096, _0x381c14);

    const _0x4627f7 = await this["officialService"]["verify"](_0x8f4096['signature'], _0x8f4096["nonce"], _0x8f4096["timestamp"]);

    return _0x4627f7 ? _0x8f4096["echostr"] : '';
  }

  async ["notifyPost"](_0x41ec67, _0x1e2327, _0x45b229, _0xbdc5a4) {
    const {
      "xml": _0x2cb359
    } = _0x45b229;
    console["log"]("xml: ", _0x2cb359);

    if (_0x2cb359["msgtype"][0] == 'event') {
      if (_0x2cb359['event'][0] == "VIEW" || _0x2cb359['event'][0] == 'CLICK') {
        return _0xbdc5a4['status'](200)['send']('');
      }

      if (_0x2cb359["event"][0] == "SCAN") {
        console["log"]('扫码');
        const _0x3e0b76 = _0x2cb359["eventkey"][0];

        if (_0x3e0b76["includes"]('/')) {
          this["officialService"]["scanBindWx"](_0x2cb359["fromusername"][0], _0x3e0b76);

          const _0x373c2c = await this["officialService"]["genXmlMsgByConfig"](_0x2cb359, "officialBindAccountText");

          return _0xbdc5a4["status"](200)['send'](_0x373c2c);
        }

        this['officialService']["scan"](_0x2cb359['fromusername'][0], _0x3e0b76);

        const _0x5cc95e = await this["officialService"]["genXmlMsgByConfig"](_0x2cb359, "officialScanLoginText");

        return _0xbdc5a4["status"](200)["send"](_0x5cc95e);
      }

      if (_0x2cb359["event"][0] == 'subscribe') {
        console["log"]('订阅', _0x2cb359["eventkey"][0]);

        const _0x356e2e = _0x2cb359["eventkey"][0]["split"]('qrscene_')[1];

        console["log"]("sceneStr: ", _0x356e2e);

        if (!_0x356e2e) {
          const _0x1269d0 = await this['officialService']['genXmlMsgByConfig'](_0x2cb359, "officialSubscribeText");

          return _0xbdc5a4['status'](200)['send'](_0x1269d0);
        }

        if (_0x356e2e["includes"]('/')) {
          this["officialService"]['scanBindWx'](_0x2cb359["fromusername"][0], _0x356e2e);

          const _0x35d8c9 = await this["officialService"]['genXmlMsgByConfig'](_0x2cb359, "officialBindAccountText");

          return _0xbdc5a4["status"](200)["send"](_0x35d8c9);
        }

        this["officialService"]["scan"](_0x2cb359['fromusername'][0], _0x356e2e);

        const _0x4d1a45 = await this["officialService"]["genXmlMsgByConfig"](_0x2cb359, 'officialSubscribeText');

        return _0xbdc5a4["status"](200)["send"](_0x4d1a45);
      }

      if (_0x2cb359['event'][0] == "unsubscribe") {
        return _0xbdc5a4['status'](200)['send']('');
      }
    }

    if (_0x2cb359["msgtype"][0] == 'text') {
      console["log"]('客户端发送了文字消息');

      const _0x524797 = await this["officialService"]["aotoPlay"](_0x2cb359["content"][0]),
            _0x171185 = await this["officialService"]["genXmlMsg"](_0x2cb359, _0x524797);

      return _0xbdc5a4["status"](200)["send"](_0x171185);
    }

    return "success";
  }

  async ["getQRSceneStr"](_0xd6ef22) {
    return this["officialService"]['getQRSceneStr'](_0xd6ef22);
  }

  async ['getQRSceneStrByBind'](_0x32b7e0) {
    return this["officialService"]['getQRSceneStrByBind'](_0x32b7e0);
  }

  async ["getQRCode"](_0x70ae27) {
    if (process["env"]["ISDEV"] === "TRUE") {
      return '';
    }

    const _0x5d4e37 = await this["officialService"]["getQRCodeTicket"](_0x70ae27["sceneStr"]);

    return "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + encodeURIComponent(_0x5d4e37);
  }

  async ["loginBySceneStr"](_0x3a3777, _0x20ca42) {
    return this["officialService"]["loginBySceneStr"](_0x3a3777, _0x20ca42["sceneStr"]);
  }

  async ['bindWxBySceneStr'](_0x4baac1, _0x294066) {
    return this['officialService']['bindWxBySceneStr'](_0x4baac1, _0x294066['sceneStr']);
  }

  async ["getRedirectUrl"](_0x43173f) {
    return this["officialService"]["getRedirectUrl"](_0x43173f["url"]);
  }

  async ["getJsapiTicket"](_0x44efe6) {
    return this['officialService']['getJsapiTicket'](_0x44efe6["url"]);
  }

  async ["loginByCode"](_0x37f708, _0x12b315) {
    return this["officialService"]["loginByCode"](_0x37f708, _0x12b315["code"]);
  }

};

__decorate([(0, common_1["Get"])('notify'), (0, swagger_1["ApiOperation"])({
  'summary': "公众号通知接口GET"
}), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Query"])()), __param(2, (0, common_1["Body"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object, Object, Object]), __metadata("design:returntype", Promise)], OfficialController["prototype"], "notify", null);

__decorate([(0, common_1['Post'])('notify'), (0, swagger_1["ApiOperation"])({
  'summary': "公众号通知接口POST"
}), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Query"])()), __param(2, (0, common_1["Body"])()), __param(3, (0, common_1["Res"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, Object, Object]), __metadata("design:returntype", Promise)], OfficialController["prototype"], "notifyPost", null);

__decorate([(0, common_1['Post'])("getQRSceneStr"), (0, swagger_1["ApiOperation"])({
  'summary': "获取登录二维码sceneStr"
}), __param(0, (0, common_1['Body'])()), __metadata("design:type", Function), __metadata('design:paramtypes', [getQrSceneStr_dto_1['GetQrSceneStrDto']]), __metadata("design:returntype", Promise)], OfficialController["prototype"], 'getQRSceneStr', null);

__decorate([(0, common_1["Post"])('getQRSceneStrByBind'), (0, swagger_1["ApiOperation"])({
  'summary': "获取绑定二维码的sceneStr"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1['JwtAuthGuard']), __param(0, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], OfficialController["prototype"], "getQRSceneStrByBind", null);

__decorate([(0, common_1["Get"])("getQRCode"), (0, swagger_1["ApiOperation"])({
  'summary': '获取二维码'
}), __param(0, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [getQrCode_dto_1["GetQrCodeDto"]]), __metadata('design:returntype', Promise)], OfficialController["prototype"], "getQRCode", null);

__decorate([(0, common_1["Post"])("loginBySceneStr"), (0, swagger_1["ApiOperation"])({
  'summary': "扫码登录轮询查询"
}), __param(0, (0, common_1['Req'])()), __param(1, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, getQrCode_dto_1["GetQrCodeDto"]]), __metadata('design:returntype', Promise)], OfficialController["prototype"], "loginBySceneStr", null);

__decorate([(0, common_1["Post"])("bindWxBySceneStr"), (0, swagger_1['ApiOperation'])({
  'summary': "扫码绑定轮询查询"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), __param(0, (0, common_1['Req'])()), __param(1, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, getQrCode_dto_1["GetQrCodeDto"]]), __metadata('design:returntype', Promise)], OfficialController["prototype"], "bindWxBySceneStr", null);

__decorate([(0, common_1['Post'])("getRedirectUrl"), (0, swagger_1['ApiOperation'])({
  'summary': "获取登录跳转地址"
}), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [Object]), __metadata("design:returntype", Promise)], OfficialController['prototype'], "getRedirectUrl", null);

__decorate([(0, common_1["Post"])("getJsapiTicket"), (0, swagger_1['ApiOperation'])({
  'summary': "获取注册配置"
}), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', Promise)], OfficialController['prototype'], "getJsapiTicket", null);

__decorate([(0, common_1["Post"])("loginByCode"), (0, swagger_1['ApiOperation'])({
  'summary': "公众号静默登录"
}), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Body"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object, Object]), __metadata('design:returntype', Promise)], OfficialController["prototype"], "loginByCode", null);

OfficialController = __decorate([(0, swagger_1["ApiTags"])("official"), (0, common_1["Controller"])('official'), __metadata('design:paramtypes', [official_service_1['OfficialService']])], OfficialController);
exports["OfficialController"] = OfficialController;