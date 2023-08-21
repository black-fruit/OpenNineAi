'use strict';

var __decorate = this && this['__decorate'] || function (_0x2212d8, _0x2a6355, _0x42c4e4, _0x2feeb9) {
  var _0x2d6e5b = arguments["length"],
      _0x2ef6e9 = _0x2d6e5b < 3 ? _0x2a6355 : _0x2feeb9 === null ? _0x2feeb9 = Object["getOwnPropertyDescriptor"](_0x2a6355, _0x42c4e4) : _0x2feeb9,
      _0x252d25;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x2ef6e9 = Reflect["decorate"](_0x2212d8, _0x2a6355, _0x42c4e4, _0x2feeb9);
  } else {
    for (var _0x11bac3 = _0x2212d8["length"] - 1; _0x11bac3 >= 0; _0x11bac3--) {
      if (_0x252d25 = _0x2212d8[_0x11bac3]) {
        _0x2ef6e9 = (_0x2d6e5b < 3 ? _0x252d25(_0x2ef6e9) : _0x2d6e5b > 3 ? _0x252d25(_0x2a6355, _0x42c4e4, _0x2ef6e9) : _0x252d25(_0x2a6355, _0x42c4e4)) || _0x2ef6e9;
      }
    }
  }

  _0x2d6e5b > 3 && _0x2ef6e9 && Object["defineProperty"](_0x2a6355, _0x42c4e4, _0x2ef6e9);
  return _0x2ef6e9;
},
    __metadata = this && this["__metadata"] || function (_0x4bd49b, _0x49405a) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x4bd49b, _0x49405a);
  }
},
    __param = this && this['__param'] || function (_0x198f9c, _0x2726c0) {
  return function (_0x15e639, _0x169fbf) {
    _0x2726c0(_0x15e639, _0x169fbf, _0x198f9c);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["MidjourneyService"] = void 0;

const user_entity_1 = require("./../user/user.entity"),
      common_1 = require('@nestjs/common'),
      typeorm_1 = require("@nestjs/typeorm"),
      midjourney_entity_1 = require('./midjourney.entity'),
      typeorm_2 = require("typeorm"),
      axios_1 = require('axios'),
      globalConfig_service_1 = require("../globalConfig/globalConfig.service"),
      midjourney_constant_1 = require("../../common/constants/midjourney.constant"),
      upload_service_1 = require("../upload/upload.service"),
      badwords_service_1 = require("../badwords/badwords.service"),
      userBalance_service_1 = require('../userBalance/userBalance.service'),
      utils_1 = require("../../common/utils"),
      redisCache_service_1 = require("../redisCache/redisCache.service");

let MidjourneyService = class MidjourneyService {
  constructor(_0x5ca248, _0x57acab, _0x2e3f31, _0x3dfec7, _0x26624c, _0x3bf631, _0x2411ad) {
    this['midjourneyEntity'] = _0x5ca248;
    this["userEntity"] = _0x57acab;
    this["globalConfigService"] = _0x2e3f31;
    this["uploadService"] = _0x3dfec7;
    this["badwordsService"] = _0x26624c;
    this['userBalanceService'] = _0x3bf631;
    this["redisCacheService"] = _0x2411ad;
    this["lockPrompt"] = [];
  }

  async ["sleep"](_0x2c4a2b) {
    return new Promise(_0x40c55d => setTimeout(_0x40c55d, _0x2c4a2b));
  }

  async ["draw"](_0x449ea, _0x48ac15) {
    const {
      "id": _0x57c2aa,
      "action": _0xf7c047
    } = _0x449ea,
          _0x15022c = await this['midjourneyEntity']["findOne"]({
      'where': {
        'id': _0x57c2aa
      }
    });

    try {
      await this["bindJobId"](_0x57c2aa, _0x48ac15);
      await this['updateDrawStatus'](_0x57c2aa, midjourney_constant_1["MidjourneyStatusEnum"]["DRAWING"]);

      if (_0xf7c047 === midjourney_constant_1["MidjourneyActionEnum"]["DRAW"] || _0xf7c047 === midjourney_constant_1['MidjourneyActionEnum']["GENERATE"]) {
        await this["sendDrawCommand"](_0x15022c, _0x449ea);

        const _0x2b9e29 = await this['pollComparisonResultDraw'](_0x15022c);

        await this['updateDrawData'](_0x449ea, _0x2b9e29);
      }

      if (_0xf7c047 === midjourney_constant_1["MidjourneyActionEnum"]["UPSCALE"]) {
        const {
          "message_id": _0x45d21c,
          "custom_id": _0x13b675
        } = _0x15022c;
        await this["sendSmInteractions"]({
          'message_id': _0x45d21c,
          'custom_id': _0x13b675
        }, _0x449ea);
        common_1["Logger"]["debug"]('记录' + _0x57c2aa + '已经成功发送了图片放大指令', "MidjourneyService");

        const _0x317a15 = await this['pollComparisonResultUpscale'](_0x15022c);

        await this["updateDrawData"](_0x449ea, _0x317a15);
      }

      if (_0xf7c047 === midjourney_constant_1["MidjourneyActionEnum"]["VARIATION"]) {
        const {
          "message_id": _0xfdc272,
          "custom_id": _0x569f45
        } = _0x15022c;
        await this["sendSmInteractions"]({
          'message_id': _0xfdc272,
          'custom_id': _0x569f45
        }, _0x449ea);
        common_1["Logger"]["debug"]('记录' + _0x57c2aa + '已经成功发送了图片变化指令', 'MidjourneyService');

        const _0x50952a = await this["pollComparisonResultVariation"](_0x15022c);

        await this["updateDrawData"](_0x449ea, _0x50952a);
        this['lockPrompt'] = this['lockPrompt']["filter"](_0x474d6b => _0x474d6b !== _0x15022c["randomDrawId"]);
      }

      if (_0xf7c047 === midjourney_constant_1["MidjourneyActionEnum"]["REGENERATE"]) {
        const {
          "message_id": _0x2d3afc,
          "custom_id": _0x2c9342
        } = _0x15022c;
        await this['sendReGenerateInteractions']({
          'message_id': _0x2d3afc,
          'custom_id': _0x2c9342
        }, _0x449ea);
        common_1["Logger"]["debug"]('记录' + _0x57c2aa + "已经成功发送了重新生成图片指令", 'MidjourneyService');

        const _0x1dd44a = await this['pollComparisonResultReGenerate'](_0x15022c);

        await this["updateDrawData"](_0x449ea, _0x1dd44a);
        this['lockPrompt'] = this['lockPrompt']['filter'](_0x146267 => _0x146267 !== _0x15022c["randomDrawId"]);
      }

      if (_0xf7c047 === midjourney_constant_1['MidjourneyActionEnum']['VARY']) {
        const {
          "message_id": _0x2abcb1,
          "custom_id": _0x2da1ab
        } = _0x15022c;
        await this['sendVaryInteractions']({
          'message_id': _0x2abcb1,
          'custom_id': _0x2da1ab
        }, _0x449ea);
        common_1['Logger']['debug']('记录' + _0x57c2aa + "已经成功发送单张图片增强指令", "MidjourneyService");

        const _0x49dfd4 = await this["pollComparisonResultVary"](_0x15022c);

        await this["updateDrawData"](_0x449ea, _0x49dfd4);
        this["lockPrompt"] = this["lockPrompt"]["filter"](_0x4dbf45 => _0x4dbf45 !== _0x15022c["randomDrawId"]);
      }

      if (_0xf7c047 === midjourney_constant_1["MidjourneyActionEnum"]['ZOOM']) {
        const {
          "message_id": _0x5a5829,
          "custom_id": _0x27a7cf
        } = _0x15022c;
        await this['sendZoomInteractions']({
          'message_id': _0x5a5829,
          'custom_id': _0x27a7cf
        }, _0x449ea);
        common_1["Logger"]["debug"]('记录' + _0x57c2aa + '已经成功发送单张图片缩放指令', "MidjourneyService");

        const _0x12af72 = await this["pollComparisonResultZoom"](_0x15022c);

        await this["updateDrawData"](_0x449ea, _0x12af72);
        this["lockPrompt"] = this["lockPrompt"]["filter"](_0x220a5a => _0x220a5a !== _0x15022c["randomDrawId"]);
      }

      return true;
    } catch (_0x355515) {
      this['lockPrompt'] = this["lockPrompt"]["filter"](_0x93d0ea => _0x93d0ea !== _0x15022c["randomDrawId"]);
      await this["drawFailed"](_0x449ea);
      console['log']("error: ", _0x355515);
      return true;
    }
  }

  async ["addDrawQueue"](_0x15f8fc) {
    const {
      "prompt": _0x5a0515,
      "imgUrl": imgUrl = '',
      "extraParam": extraParam = '',
      "action": action = 1,
      "userId": _0x36bd33,
      "randomDrawId": _0xb240b7,
      "orderId": _0x57a8cc,
      "custom_id": _0x5a0e8b,
      "message_id": _0x5aec86
    } = _0x15f8fc,
          _0x21a9c2 = imgUrl ? imgUrl + " " + _0x5a0515 + " " + extraParam : _0x5a0515 + " " + extraParam;

    if (await this["badwordsService"]["checkBadWords"](_0x21a9c2)) {
      throw new common_1["HttpException"]("您的绘画描述词中含有不合规信息、请检查后重新提交！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x1ebec7 = {
      'userId': _0x36bd33,
      'extraParam': extraParam,
      'prompt': _0x5a0515,
      'imgUrl': imgUrl,
      'fullPrompt': _0x21a9c2,
      'randomDrawId': _0xb240b7,
      'status': midjourney_constant_1["MidjourneyStatusEnum"]["WAITING"],
      'action': action,
      'orderId': _0x57a8cc,
      'custom_id': _0x5a0e8b,
      'message_id': _0x5aec86
    },
          _0x5138fb = await this['midjourneyEntity']['save'](_0x1ebec7);

    return _0x5138fb;
  }

  async ["updateDrawStatus"](_0x5cabfd, _0x11ac53) {
    await this["midjourneyEntity"]["update"]({
      'id': _0x5cabfd
    }, {
      'status': _0x11ac53
    });
  }

  async ["updateDrawData"](_0x438dc9, _0x1ce565) {
    try {
      const {
        "id": _0x9b61c9,
        "content": _0x3f0107,
        "channel_id": _0x58223b,
        "attachments": attachments = [],
        "timestamp": _0x3e5ed0,
        "durationSpent": _0x56d99b
      } = _0x1ce565,
            {
        "filename": _0x47bd92,
        "url": _0x42ae0b,
        "proxy_url": _0x427163,
        "width": _0x4f4c36,
        "height": _0x19f083,
        "size": _0x26848a
      } = attachments[0];
      common_1["Logger"]["debug"]("------> 开始上传图片！！！", "MidjourneyService");

      const _0x49e60a = new Date(),
            _0x46abb3 = await this['uploadService']["uploadFileFromUrl"]({
        'filename': _0x47bd92,
        'url': _0x42ae0b
      }),
            _0x10858e = new Date();

      common_1["Logger"]["debug"]("本次图片上传耗时为" + (_0x10858e["getTime"]() - _0x49e60a['getTime']()) / 1000 + '秒', "MidjourneyService");

      const _0x42f7d8 = await this["uploadService"]['getUploadType'](),
            _0x12622a = {
        'status': midjourney_constant_1['MidjourneyStatusEnum']['DRAWED'],
        'message_id': _0x9b61c9,
        'progress': 100,
        'fileInfo': JSON["stringify"]({
          'width': _0x4f4c36,
          'height': _0x19f083,
          'size': _0x26848a,
          'filename': _0x47bd92,
          'cosUrl': _0x46abb3,
          'cosType': _0x42f7d8
        }),
        'extend': this["removeEmoji"](JSON["stringify"](_0x1ce565)),
        'durationSpent': _0x56d99b
      };

      await this['midjourneyEntity']['update']({
        'id': _0x438dc9['id']
      }, _0x12622a);
    } catch (_0x4a28ac) {
      console['log']("TODO->存储图片失败", _0x438dc9);
    }
  }

  async ["getHistroyMessageIds"](_0x39e662) {
    const _0x1ae6b6 = await this["midjourneyEntity"]["find"]({
      'where': {
        'randomDrawId': _0x39e662,
        'status': midjourney_constant_1["MidjourneyStatusEnum"]["DRAWED"]
      }
    });

    return _0x1ae6b6["map"](_0x3fad3f => _0x3fad3f["message_id"]);
  }

  async ['sendDrawCommand'](_0x31b789, _0x5f1c0b) {
    const {
      "fullPrompt": _0x484563,
      "randomDrawId": _0x2e9b58,
      "imgUrl": _0x3364e2
    } = _0x31b789,
          _0x4b74c3 = _0x3364e2 ? '[' + _0x2e9b58 + "] " + _0x3364e2 + " " + _0x484563 : '[' + _0x2e9b58 + "] " + _0x484563;

    common_1["Logger"]["debug"]("本次绘图指令为" + _0x4b74c3, "MidjourneyService");
    const {
      "application_id": _0x17eb22,
      "guild_id": _0x338779,
      "channel_id": _0x498c0f,
      "session_id": _0x27701b,
      "version": _0x3d8f9a,
      "id": _0x4ea057,
      "authorization": _0x40686e,
      "mjProxy": _0x2279d9
    } = await this['getMjDefaultParams']();

    try {
      const _0x1be499 = (await this['globalConfigService']["getConfigs"](["mjProxyUrl"])) || "http://172.247.48.137:8000";

      return false;
    } catch (_0xf15a2) {
      common_1['Logger']["error"]("发送绘画指令失败", 'MidjourneyService');
      throw new common_1["HttpException"]("发送绘图指令失败、请联系管理员检测绘画配置！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ['sendSmInteractions'](_0x54546a, _0x4e96f1) {
    const {
      "message_id": _0xd10a2,
      "custom_id": _0x37c510
    } = _0x54546a,
          {
      "application_id": _0x22c600,
      "guild_id": _0x1c50bb,
      "channel_id": _0x2d3f2f,
      "session_id": _0x3cd4e0,
      "version": _0x188f14,
      "id": _0x345fc5,
      "authorization": _0x569497,
      "mjProxy": _0x2aaa89
    } = await this['getMjDefaultParams'](),
          _0x254e66 = (await this["globalConfigService"]['getConfigs'](["mjProxyUrl"])) || 'http://172.247.48.137:8000',
          _0xb67758 = _0x2aaa89 == 1 ? _0x254e66 + "/mj/draw" : "https://discord.com/api/v9/interactions",
          _0x12528b = {
      'authorization': _0x569497
    },
          _0x1b13f4 = {
      'type': 3,
      'guild_id': _0x1c50bb,
      'channel_id': _0x2d3f2f,
      'message_flags': 0,
      'message_id': _0xd10a2,
      'application_id': _0x22c600,
      'session_id': _0x3cd4e0,
      'data': {
        'component_type': 2,
        'custom_id': _0x37c510
      }
    };

    try {
      await axios_1["default"]["post"](_0xb67758, _0x1b13f4, {
        'headers': _0x12528b
      });
    } catch (_0x34434a) {
      console["log"]("发送放大变幻指令失败: ", _0x34434a);
      common_1['Logger']["error"]('发送放大变幻指令失败', "MidjourneyService");
      throw new common_1['HttpException']("对图片放大变幻失败...", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["sendReGenerateInteractions"](_0x3f9b13, _0x48f791) {
    const {
      "message_id": _0x4e42bf,
      "custom_id": _0x1108bf
    } = _0x3f9b13,
          {
      "application_id": _0xf2d3b1,
      "guild_id": _0x2e75d2,
      "channel_id": _0x12e5a7,
      "session_id": _0x7131a4,
      "version": _0x9eca56,
      "id": _0x394c9c,
      "authorization": _0x183fc4,
      "mjProxy": _0xb4c116
    } = await this["getMjDefaultParams"](),
          _0x5166a7 = (await this["globalConfigService"]['getConfigs'](["mjProxyUrl"])) || "http://172.247.48.137:8000",
          _0x170477 = _0xb4c116 == 1 ? _0x5166a7 + "/mj/draw" : 'https://discord.com/api/v9/interactions',
          _0x5adb94 = {
      'authorization': _0x183fc4
    },
          _0xbb9cc2 = {
      'type': 3,
      'guild_id': _0x2e75d2,
      'channel_id': _0x12e5a7,
      'message_id': _0x4e42bf,
      'application_id': _0xf2d3b1,
      'session_id': _0x7131a4,
      'data': {
        'component_type': 2,
        'custom_id': _0x1108bf
      }
    };

    try {
      await axios_1["default"]["post"](_0x170477, _0xbb9cc2, {
        'headers': _0x5adb94
      });
    } catch (_0x1f5eeb) {
      console["log"]("发送重新生成指令失败: ", _0x1f5eeb);
      common_1['Logger']['error']("发送放大变幻指令失败", 'MidjourneyService');
      throw new common_1['HttpException']("对图片放大变幻失败...", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["sendVaryInteractions"](_0x224267, _0x9efc1e) {
    const {
      "message_id": _0x3e65ca,
      "custom_id": _0x2c6a4c
    } = _0x224267,
          {
      "application_id": _0x2f1438,
      "guild_id": _0x1e145e,
      "channel_id": _0x48edf9,
      "session_id": _0x416cc2,
      "version": _0x35c9d6,
      "id": _0x4f12b1,
      "authorization": _0x4e01ef,
      "mjProxy": _0xcedf37
    } = await this["getMjDefaultParams"](),
          _0x19e633 = (await this['globalConfigService']["getConfigs"](["mjProxyUrl"])) || 'http://172.247.48.137:8000',
          _0xfbeaf7 = _0xcedf37 == 1 ? _0x19e633 + "/mj/draw" : "https://discord.com/api/v9/interactions",
          _0x498601 = {
      'authorization': _0x4e01ef
    },
          _0x4d7f87 = {
      'type': 3,
      'guild_id': _0x1e145e,
      'channel_id': _0x48edf9,
      'message_id': _0x3e65ca,
      'application_id': _0x2f1438,
      'session_id': _0x416cc2,
      'data': {
        'component_type': 2,
        'custom_id': _0x2c6a4c
      }
    };

    try {
      await axios_1["default"]["post"](_0xfbeaf7, _0x4d7f87, {
        'headers': _0x498601
      });
    } catch (_0x97067c) {
      console["log"]("发送对单张图片增强指令失败: ", _0x97067c);
      common_1["Logger"]["error"]("发送单张图片增强指令失败", 'MidjourneyService');
      throw new common_1["HttpException"]('对图片单张增强失败...', common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["sendZoomInteractions"](_0x51edc1, _0xd2cbad) {
    const {
      "message_id": _0x204f7d,
      "custom_id": _0x2a16d8
    } = _0x51edc1,
          {
      "application_id": _0x298969,
      "guild_id": _0x3f0515,
      "channel_id": _0x5f4a57,
      "session_id": _0x4cb0d3,
      "version": _0xbd0357,
      "id": _0x15fb95,
      "authorization": _0x847040,
      "mjProxy": _0x21525e
    } = await this["getMjDefaultParams"](),
          _0x33147b = (await this["globalConfigService"]["getConfigs"](['mjProxyUrl'])) || 'http://172.247.48.137:8000',
          _0x5eae31 = _0x21525e == 1 ? _0x33147b + '/mj/draw' : "https://discord.com/api/v9/interactions",
          _0x3edd2f = {
      'authorization': _0x847040
    },
          _0x17ee39 = {
      'type': 3,
      'guild_id': _0x3f0515,
      'channel_id': _0x5f4a57,
      'message_id': _0x204f7d,
      'application_id': _0x298969,
      'session_id': _0x4cb0d3,
      'data': {
        'component_type': 2,
        'custom_id': _0x2a16d8
      }
    };

    try {
      await axios_1["default"]['post'](_0x5eae31, _0x17ee39, {
        'headers': _0x3edd2f
      });
    } catch (_0x1005d5) {
      console["log"]("发送对单张图片增强指令失败: ", _0x1005d5);
      common_1['Logger']["error"]("发送单张图片增强指令失败", "MidjourneyService");
      throw new common_1["HttpException"]("对图片单张增强失败...", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["pollComparisonResultDraw"](_0x5f03b3) {
    common_1['Logger']["debug"]("开始查询绘画结果", 'MidjourneyService');

    const _0x232a60 = Date["now"](),
          _0x5ce946 = 10000,
          _0x271f16 = 30000,
          _0xe134a3 = (await this["globalConfigService"]["getConfigs"](["mjTimeoutMs"])) || 150000;

    let _0xa620de = 0,
        _0x2aed7b = null,
        _0x1c30b4 = false;

    try {
      while (!_0x1c30b4 && Date['now']() - _0x232a60 < _0xe134a3) {
        let _0x36df9a;

        Date["now"]() - _0x232a60 < 90000 ? _0x36df9a = _0x5ce946 : _0x36df9a = _0x271f16;
        await this["sleep"](_0x36df9a);
        common_1["Logger"]["debug"]("【绘制图片】第 " + (_0xa620de + 1) + " 次开始查询", "MidjourneyService");
        _0x2aed7b = await this['findCurrentPromptResult'](_0x5f03b3["randomDrawId"]);

        if (_0x2aed7b) {
          const {
            "content": _0x13ce8a
          } = _0x2aed7b,
                _0x12a44a = await this["parseProgress"](_0x13ce8a);

          common_1["Logger"]['debug']("【绘制图片】第 " + (_0xa620de + 1) + " 次、 当前绘画进度为" + _0x12a44a + '%', "MidjourneyService");
          await this['midjourneyEntity']["update"]({
            'id': _0x5f03b3['id']
          }, {
            'progress': _0x12a44a !== null && _0x12a44a !== void 0 ? _0x12a44a : 100
          });
        }

        _0x1c30b4 = _0x2aed7b && !_0x2aed7b["edited_timestamp"];
        _0xa620de++;
      }

      if (!_0x2aed7b) {
        await this["updateDrawStatus"](_0x5f03b3['id'], midjourney_constant_1['MidjourneyStatusEnum']["DRAWTIMEOUT"]);
        throw new common_1["HttpException"]("绘画超时，请稍后再试！", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const _0x3d9a94 = Date["now"]();

      return Object["assign"](Object["assign"]({}, _0x2aed7b), {
        'durationSpent': Math["floor"]((_0x3d9a94 - _0x232a60) / 1000)
      });
    } catch (_0xf9b714) {
      console['log']("获取图片列表结果失败: ", _0xf9b714);
    }
  }

  async ["pollComparisonResultUpscale"](_0x162fa7) {
    common_1["Logger"]["debug"]("开始查询放大图片信息", "MidjourneyService");

    const _0x1a1924 = Date["now"](),
          {
      "message_id": _0x394fec,
      "custom_id": _0x30e94f,
      "randomDrawId": _0x4072a4,
      "orderId": _0x5e2934
    } = _0x162fa7;

    let _0x50c692 = null,
        _0x58dc2a = 0;

    while (!_0x50c692 && _0x58dc2a < 10) {
      common_1['Logger']["debug"]('开始比对放大图片第' + (_0x58dc2a + 1) + '次', "MidjourneyService");
      _0x50c692 = await this["findCurrentEnlargeImgResult"](_0x4072a4, _0x5e2934);
      await new Promise(_0x5a7a67 => setTimeout(_0x5a7a67, Math['floor'](Math["random"]() * 2001) + 3000));
      _0x58dc2a++;
    }

    if (!_0x50c692) {
      await this["updateDrawStatus"](_0x162fa7['id'], midjourney_constant_1["MidjourneyStatusEnum"]["DRAWTIMEOUT"]);
      throw new common_1["HttpException"]("放大图片超时，请稍后再试！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x24de93 = Date['now']();

    return Object["assign"](Object["assign"]({}, _0x50c692), {
      'durationSpent': Math["floor"]((_0x24de93 - _0x1a1924) / 1000)
    });
  }

  async ['pollComparisonResultReGenerate'](_0x4c2938) {
    common_1["Logger"]["debug"]('开始查询重复绘制的图片信息', 'MidjourneyService');

    const _0x2a4882 = (await this["globalConfigService"]["getConfigs"](["mjTimeoutMs"])) || 150000,
          _0x4887da = Date["now"](),
          {
      "message_id": _0x1699cc,
      "custom_id": _0x187cd7,
      "randomDrawId": _0x348313,
      "orderId": _0x336a53
    } = _0x4c2938;

    let _0xf8f81c = null,
        _0x24ebb1 = 0,
        _0x41613b = 0;

    while (!_0xf8f81c && _0x24ebb1 < _0x2a4882) {
      common_1["Logger"]["debug"]('开始比对重新绘制图片第' + (_0x41613b + 1) + '次', "MidjourneyService");
      _0xf8f81c = await this["findCurrentReGenerateImgResult"](_0x348313, _0x1699cc);

      const _0x5bb803 = Math["floor"](Math["random"]() * 2001) + 8000;

      console["log"]('睡眠' + _0x5bb803 + '秒');
      await new Promise(_0x484c95 => setTimeout(_0x484c95, _0x5bb803));
      _0x24ebb1 += _0x5bb803;
      _0x41613b++;
    }

    if (!_0xf8f81c) {
      await this['updateDrawStatus'](_0x4c2938['id'], midjourney_constant_1["MidjourneyStatusEnum"]["DRAWTIMEOUT"]);
      throw new common_1["HttpException"]('重新绘制图片超时，请稍后再试！', common_1["HttpStatus"]['BAD_REQUEST']);
    }

    const _0x3f4003 = Date["now"]();

    return Object["assign"](Object["assign"]({}, _0xf8f81c), {
      'durationSpent': Math["floor"]((_0x3f4003 - _0x4887da) / 1000)
    });
  }

  async ["pollComparisonResultVary"](_0x4b3271) {
    common_1['Logger']["debug"]("开始查询单张图片增强的图片信息", "MidjourneyService");

    const _0x18e550 = (await this["globalConfigService"]['getConfigs'](["mjTimeoutMs"])) || 150000,
          _0x582e44 = Date["now"](),
          {
      "message_id": _0x564d4c,
      "custom_id": _0x250333,
      "randomDrawId": _0x5e1e39,
      "orderId": _0x1eeac4
    } = _0x4b3271;

    let _0x59f79b = null,
        _0x4a34fb = 0,
        _0x4e7cb4 = 0;

    while (!_0x59f79b && _0x4a34fb < _0x18e550) {
      common_1["Logger"]["debug"]("开始单张图片增强第" + (_0x4e7cb4 + 1) + '次', "MidjourneyService");
      _0x59f79b = await this["findCurrentVaryImgResult"](_0x5e1e39, _0x564d4c);

      const _0xf48ecd = Math['floor'](Math["random"]() * 2001) + 8000;

      await new Promise(_0x198837 => setTimeout(_0x198837, _0xf48ecd));
      _0x4a34fb += _0xf48ecd;
      _0x4e7cb4++;
    }

    if (!_0x59f79b) {
      await this['updateDrawStatus'](_0x4b3271['id'], midjourney_constant_1['MidjourneyStatusEnum']["DRAWTIMEOUT"]);
      throw new common_1["HttpException"]("单张图片增强超时，请稍后再试！", common_1['HttpStatus']['BAD_REQUEST']);
    }

    const _0x35efda = Date["now"]();

    return Object['assign'](Object["assign"]({}, _0x59f79b), {
      'durationSpent': Math['floor']((_0x35efda - _0x582e44) / 1000)
    });
  }

  async ['pollComparisonResultZoom'](_0x3a592a) {
    common_1["Logger"]["debug"]("开始查询单张图片缩放的图片信息", "MidjourneyService");

    const _0x2cd658 = (await this["globalConfigService"]["getConfigs"](['mjTimeoutMs'])) || 150000,
          _0x1003e9 = Date["now"](),
          {
      "message_id": _0x137f04,
      "custom_id": _0x49c0cb,
      "randomDrawId": _0x57aa39,
      "orderId": _0x3a4fa2
    } = _0x3a592a;

    let _0xfaf506 = null,
        _0x443186 = 0,
        _0x4f4390 = 0;

    while (!_0xfaf506 && _0x443186 < _0x2cd658) {
      common_1["Logger"]["debug"]("开始单张图片缩放第" + (_0x4f4390 + 1) + '次', "MidjourneyService");
      _0xfaf506 = await this["findCurrentZoomImgResult"](_0x57aa39, _0x137f04);

      const _0x1117ef = Math["floor"](Math["random"]() * 2001) + 8000;

      await new Promise(_0xf93122 => setTimeout(_0xf93122, _0x1117ef));
      _0x443186 += _0x1117ef;
      _0x4f4390++;
    }

    if (!_0xfaf506) {
      await this['updateDrawStatus'](_0x3a592a['id'], midjourney_constant_1["MidjourneyStatusEnum"]["DRAWTIMEOUT"]);
      throw new common_1["HttpException"]("单张图片缩放超时，请稍后再试！", common_1['HttpStatus']['BAD_REQUEST']);
    }

    const _0x4a6b5d = Date["now"]();

    return Object["assign"](Object['assign']({}, _0xfaf506), {
      'durationSpent': Math["floor"]((_0x4a6b5d - _0x1003e9) / 1000)
    });
  }

  async ['pollComparisonResultVariation'](_0x134e23) {
    common_1["Logger"]["debug"]("开始轮询单张变换图片结果", "MidjourneyService");
    let _0x4646e5 = null;

    const _0x916493 = Date["now"]();

    while (!_0x4646e5) {
      common_1['Logger']["debug"]("变换图片获取中------>", "MidjourneyService");
      _0x4646e5 = await this["findCurrentVariationImgResult"](_0x134e23["randomDrawId"]);
      const _0x4aafc5 = 10000;
      await this["sleep"](_0x4aafc5);

      const _0xe2ba40 = Date['now'](),
            _0x3dfcc6 = Math["floor"](_0xe2ba40 - _0x916493),
            _0x3bf52e = (await this["globalConfigService"]["getConfigs"](["mjTimeoutMs"])) || 150000;

      if (_0x3dfcc6 >= _0x3bf52e) {
        await this["updateDrawStatus"](_0x134e23['id'], midjourney_constant_1['MidjourneyStatusEnum']["DRAWTIMEOUT"]);
        throw new common_1["HttpException"]("变换当前图片超时！", common_1["HttpStatus"]["BAD_REQUEST"]);
      }
    }

    return Object['assign'](Object["assign"]({}, _0x4646e5), {
      'durationSpent': Math["floor"](Date["now"]() - _0x916493)
    });
  }

  async ["findCurrentEnlargeImgResult"](_0x27b382, _0x3f23e9) {
    const _0x4231b8 = await this["getMessageList"](),
          _0x40733a = await this['getHistroyMessageIds'](_0x27b382),
          _0x29777a = _0x4231b8["find"](_0x334835 => {
      const {
        "content": _0x5e0e71
      } = _0x334835;

      if (!this["extractContent"](_0x5e0e71)) {
        return false;
      }

      const {
        "prompt": _0x696449,
        "order": _0x1738c6
      } = this["extractContent"](_0x5e0e71);
      return _0x5e0e71["includes"](_0x27b382) && _0x3f23e9 === _0x1738c6 && !_0x40733a['includes'](_0x334835['id']);
    });

    return _0x29777a;
  }

  async ["findCurrentVariationImgResult"](_0x37f152) {
    const _0x183cc9 = await this["getMessageList"](),
          _0x3fbde2 = await this['getHistroyMessageIds'](_0x37f152),
          _0x2be952 = _0x183cc9["find"](_0x34651d => {
      const {
        "content": _0x59997a
      } = _0x34651d;
      return _0x59997a["includes"](_0x37f152) && !_0x3fbde2['includes'](_0x34651d['id']) && this["isVariationsImage"](_0x59997a);
    });

    if (_0x2be952) {
      if (this["lockPrompt"]["includes"](_0x37f152)) {
        common_1['Logger']["debug"]('【变体图片】当前图片已经被锁定，等待同任务完成', 'MidjourneyService');
        return null;
      } else {
        this["lockPrompt"]["push"](_0x37f152);
      }
    }

    return _0x2be952;
  }

  async ['findCurrentReGenerateImgResult'](_0x309e90, _0x4867b6) {
    const _0x3a0793 = await this["getMessageList"](),
          _0x2ceef7 = await this["getHistroyMessageIds"](_0x309e90),
          _0x27a2c4 = _0x3a0793["find"](_0x63ad63 => {
      const {
        "content": _0x5b8402
      } = _0x63ad63;
      return _0x5b8402["includes"](_0x309e90) && !_0x2ceef7["includes"](_0x63ad63['id']) && _0x63ad63['id'] !== _0x4867b6 && this["isReGenerateImage"](_0x5b8402);
    });

    if (_0x27a2c4) {
      if (this['lockPrompt']["includes"](_0x309e90)) {
        common_1["Logger"]['debug']("【重新生成图片】当前图片已经被锁定，等待同任务完成", "MidjourneyService");
        return null;
      } else {
        this['lockPrompt']['push'](_0x309e90);
      }
    }

    return _0x27a2c4;
  }

  async ["findCurrentZoomImgResult"](_0x5533da, _0x3517ae) {
    const _0x9c1814 = await this["getMessageList"](),
          _0x3df4bb = await this["getHistroyMessageIds"](_0x5533da),
          _0x5443f7 = _0x9c1814["find"](_0x406b58 => {
      const {
        "content": _0x3ea246
      } = _0x406b58;
      return _0x3ea246["includes"](_0x5533da) && !_0x3df4bb['includes'](_0x406b58['id']) && _0x406b58['id'] !== _0x3517ae && this["isZoomImage"](_0x3ea246);
    });

    if (_0x5443f7) {
      if (this["lockPrompt"]["includes"](_0x5533da)) {
        common_1["Logger"]["debug"]("【重新生成图片】当前图片已经被锁定，等待同任务完成", "MidjourneyService");
        return null;
      } else {
        this["lockPrompt"]["push"](_0x5533da);
      }
    }

    return _0x5443f7;
  }

  async ["findCurrentVaryImgResult"](_0x74590f, _0x16f80e) {
    const _0x25499a = await this["getMessageList"](),
          _0x25a3ec = await this["getHistroyMessageIds"](_0x74590f),
          _0x441e34 = _0x25499a["find"](_0x2e5f5f => {
      const {
        "content": _0x406042
      } = _0x2e5f5f;
      return _0x406042["includes"](_0x74590f) && !_0x25a3ec["includes"](_0x2e5f5f['id']) && _0x2e5f5f['id'] !== _0x16f80e && this["isVaryImage"](_0x406042);
    });

    if (_0x441e34) {
      if (this["lockPrompt"]["includes"](_0x74590f)) {
        common_1["Logger"]["debug"]("【单张图片增强】当前图片已经被锁定，等待同任务完成", "MidjourneyService");
        return null;
      } else {
        this["lockPrompt"]['push'](_0x74590f);
      }
    }

    return _0x441e34;
  }

  ["extractContent"](_0x599479) {
    const _0x3c9fcb = _0x599479["match"](/\*\*(.+?)\*\*/),
          _0xc5167a = _0x599479['match'](/- Image #(\d+)/);

    if (!_0x3c9fcb || !_0xc5167a) {
      return null;
    }

    const _0x15488e = _0x3c9fcb[1],
          _0x43f74d = parseInt(_0xc5167a[1]);

    return {
      'prompt': _0x15488e,
      'order': _0x43f74d
    };
  }

  async ["findCurrentPromptResult"](_0x3b27de) {
    const _0x3885c9 = await this["getHistroyMessageIds"](_0x3b27de),
          _0x4ab7ea = await this["getMessageList"]();

    if (!_0x4ab7ea || !_0x4ab7ea['length']) {
      return;
    }

    const _0x10e14e = _0x4ab7ea["find"](_0x44af72 => {
      const {
        "attachments": attachments = [],
        "content": _0x2f332f,
        "edited_timestamp": _0x5a617d
      } = _0x44af72;
      return _0x2f332f['includes'](_0x3b27de) && attachments["length"] > 0 && !_0x3885c9["includes"](_0x44af72 === null || _0x44af72 === void 0 ? void 0 : _0x44af72['id']);
    });

    return _0x10e14e || null;
  }

  ["isVariationsImage"](_0x35685f) {
    const _0xa0b518 = /- Variations/;
    return _0xa0b518["test"](_0x35685f);
  }

  ["isSingleImage"](_0xf6ba43) {
    const _0x26ea76 = /Image #\d+/;
    return _0x26ea76["test"](_0xf6ba43);
  }

  ["isReGenerateImage"](_0x3b9d18) {
    return !this["isVariationsImage"](_0x3b9d18) && !this["isSingleImage"](_0x3b9d18);
  }

  ["isVaryImage"](_0x26aa15) {
    const _0x326f95 = /- Variations \(.*?\)/;
    return _0x326f95["test"](_0x26aa15);
  }

  ["isZoomImage"](_0x418311) {
    const _0x12168c = /- Zoom Out/;
    return _0x12168c["test"](_0x418311);
  }

  async ["getMjDefaultParams"]() {
    const _0x4fcd74 = await this["globalConfigService"]["getConfigs"](["mjId", "mjApplicationId", "mjGuildId", 'mjChannelId', 'mjSessionId', 'mjVersion', 'mjAuthorization', "mjRateLimit", "mjProxy"]),
          _0x2c1777 = {
      'application_id': _0x4fcd74["mjApplicationId"],
      'guild_id': _0x4fcd74["mjGuildId"],
      'channel_id': _0x4fcd74["mjChannelId"],
      'session_id': _0x4fcd74['mjSessionId'],
      'version': _0x4fcd74['mjVersion'],
      'id': _0x4fcd74['mjId'],
      'authorization': _0x4fcd74["mjAuthorization"],
      'mjRateLimit': _0x4fcd74["mjRateLimit"],
      'mjProxy': _0x4fcd74["mjProxy"] || 0
    };

    return _0x2c1777;
  }

  async ['getMessageList']() {
    try {
      const {
        "application_id": _0x405f9a,
        "guild_id": _0x80fe37,
        "channel_id": _0x585ed9,
        "session_id": _0x1e687d,
        "version": _0x719189,
        "id": _0xd530d2,
        "authorization": _0x474874,
        "mjProxy": _0x237d78
      } = await this["getMjDefaultParams"](),
            _0xbaf01b = (await this["globalConfigService"]["getConfigs"](["mjProxyUrl"])) || 'http://172.247.48.137:8000',
            _0x27fe9f = _0x237d78 == 1 ? _0xbaf01b + "/mj/list?channel_id=" + _0x585ed9 : 'https://discord.com/api/v9/channels/' + _0x585ed9 + '/messages?limit=50',
            _0x5f457a = {
        'authorization': _0x474874
      },
            _0x3bcdd8 = await axios_1['default']['get'](_0x27fe9f, {
        'headers': _0x5f457a
      });

      return _0x3bcdd8["data"];
    } catch (_0x43aa38) {
      common_1["Logger"]["error"]("查询绘制结果失败: getMessageList", _0x43aa38, "MidjourneyService");
      return [];
    }
  }

  ["parseProgress"](_0x4ca039) {
    const _0x4cc36e = /\((\d+)%\)/,
          _0x397b22 = _0x4ca039["match"](_0x4cc36e);

    return _0x397b22 ? parseInt(_0x397b22[1], 10) : null;
  }

  ["removeEmoji"](_0x4063e0) {
    const _0x354817 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    return _0x4063e0['replace'](_0x354817, '');
  }

  async ['bindJobId'](_0x2dc3ee, _0x1f3cf7) {
    await this['midjourneyEntity']["update"]({
      'id': _0x2dc3ee
    }, {
      'jobId': _0x1f3cf7
    });
  }

  async ["getDrawList"](_0x4aa1be, _0x5c344d) {
    try {
      const {
        "page": page = 1,
        "size": size = 30
      } = _0x5c344d,
            [_0x426dd3, _0x6b99b4] = await this["midjourneyEntity"]["findAndCount"]({
        'where': {
          'userId': _0x4aa1be['user']['id'],
          'isDelete': 0
        },
        'order': {
          'id': 'DESC'
        },
        'take': size,
        'skip': (page - 1) * size
      });

      _0x426dd3["forEach"](_0x54c6c7 => {
        var _0x23c772, _0x147e20;

        const {
          "extend": _0x1db6a5
        } = _0x54c6c7;
        _0x54c6c7["fileInfo"] = this["formatFileInfo"](_0x54c6c7["fileInfo"]);
        _0x54c6c7["isGroup"] = ((_0x147e20 = (_0x23c772 = JSON["parse"](_0x1db6a5)) === null || _0x23c772 === void 0 ? void 0 : _0x23c772['components'][0]) === null || _0x147e20 === void 0 ? void 0 : _0x147e20["components"]["length"]) === 5;
      });

      const _0x9cd3d2 = await this["midjourneyEntity"]["count"]({
        'where': {
          'isDelete': 0,
          'status': (0, typeorm_2['In'])([1, 2])
        }
      }),
            _0x5565c9 = {
        'rows': (0, utils_1["formatCreateOrUpdateDate"])(_0x426dd3),
        'count': _0x6b99b4,
        'countQueue': _0x9cd3d2
      };

      return _0x5565c9;
    } catch (_0x4e4977) {
      throw new common_1["HttpException"]("获取我得绘制列表失败", common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  ["formatFileInfo"](_0x172c7c) {
    if (!_0x172c7c) {
      return {};
    }

    const _0x369f51 = JSON["parse"](_0x172c7c),
          {
      "url": _0x1dbae0,
      "filename": _0x32350f,
      "size": _0x196645,
      "cosUrl": _0x477dec,
      "width": _0x29cb38,
      "height": _0x384b15
    } = _0x369f51,
          _0x1d38ac = 310,
          _0x3a3160 = _0x477dec['includes']("cos") ? "tencent" : _0x477dec['includes']('oss') ? 'ali' : "chevereto";

    let _0x3fdc38;

    if (_0x3a3160 === 'tencent') {
      const _0x5112ea = _0x29cb38 / _0x384b15,
            _0x94a981 = Math["round"](_0x1d38ac / _0x5112ea);

      _0x3fdc38 = _0x477dec + ("?imageView2/1/w/310/h/" + _0x94a981 + '/q/55');
    }

    if (_0x3a3160 === 'ali') {
      const _0x58dfb3 = _0x384b15 / _0x29cb38,
            _0x59de20 = Math["round"](_0x1d38ac / _0x58dfb3);

      _0x3fdc38 = _0x477dec + ("?x-oss-process=image/resize,w_" + _0x59de20);
    }

    _0x3a3160 === "chevereto" && (_0x3fdc38 = _0x477dec["replace"](/\.png$/, ".md.png"));
    _0x369f51["thumbImg"] = _0x3fdc38;
    return _0x369f51;
  }

  async ['getDrawActionDetail'](_0x190f39, _0x1d9600, _0x36cd21) {
    const _0xe5999f = await this["midjourneyEntity"]['findOne']({
      'where': {
        'id': _0x1d9600
      }
    });

    if (!_0xe5999f) {
      throw new common_1["HttpException"]("当前绘画信息不存在！", common_1['HttpStatus']['BAD_REQUEST']);
    }

    const {
      "extend": _0x4864cb,
      "message_id": _0x33d1bf,
      "prompt": _0x248ce9,
      "imgUrl": _0x218883,
      "extraParam": _0x406621,
      "randomDrawId": _0x2e75d3
    } = _0xe5999f,
          _0x5b128e = JSON['parse'](_0x4864cb),
          {
      "components": components = []
    } = _0x5b128e;

    if (!components["length"]) {
      throw new common_1["HttpException"]("当前图片没有绘画信息、无法放大!", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    let _0x2f104e = {};
    _0x190f39 === midjourney_constant_1["MidjourneyActionEnum"]['UPSCALE'] && (_0x2f104e = components[0]['components'][_0x36cd21 - 1]);
    _0x190f39 === midjourney_constant_1['MidjourneyActionEnum']['VARIATION'] && (_0x2f104e = components[1]['components'][_0x36cd21 - 1]);
    _0x190f39 === midjourney_constant_1["MidjourneyActionEnum"]['REGENERATE'] && (_0x2f104e = components[0]["components"][_0x36cd21 - 1]);
    _0x190f39 === midjourney_constant_1["MidjourneyActionEnum"]['VARY'] && (_0x2f104e = components[0]["components"][_0x36cd21 - 1]);
    _0x190f39 === midjourney_constant_1['MidjourneyActionEnum']["ZOOM"] && (_0x2f104e = components[1]['components'][_0x36cd21 - 1]);
    const {
      "custom_id": _0x1e03dd
    } = _0x2f104e;
    return {
      'custom_id': _0x1e03dd,
      'message_id': _0x33d1bf,
      'prompt': _0x248ce9,
      'imgUrl': _0x218883,
      'extraParam': _0x406621,
      'randomDrawId': _0x2e75d3
    };
  }

  async ['checkIsUpscale'](_0x3ff253) {
    const _0xd4ab5 = await this["midjourneyEntity"]["count"]({
      'where': {
        'custom_id': _0x3ff253,
        'status': midjourney_constant_1["MidjourneyStatusEnum"]["DRAWED"]
      }
    });

    if (_0xd4ab5 > 0) {
      throw new common_1["HttpException"]("当前图片已经放大过了！", common_1["HttpStatus"]['BAD_REQUEST']);
    }
  }

  async ["deleteDraw"](_0x315aed, _0x47d602) {
    const _0x173f13 = await this["midjourneyEntity"]["findOne"]({
      'where': {
        'id': _0x315aed,
        'userId': _0x47d602['user']['id'],
        'isDelete': 0
      }
    });

    if (!_0x173f13) {
      throw new common_1['HttpException']("当前图片不存在！", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    if (_0x173f13["status"] === 2) {
      throw new common_1["HttpException"]("绘制中的图片任务、禁止删除！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x37ed23 = await this["midjourneyEntity"]["update"]({
      'id': _0x315aed
    }, {
      'isDelete': 1
    });

    if (_0x37ed23["affected"] > 0) {
      return "删除成功！";
    } else {
      throw new common_1["HttpException"]("删除失败！", common_1["HttpStatus"]['BAD_REQUEST']);
    }
  }

  async ["checkLimit"](_0x7640d7) {
    const {
      "role": _0xa77935,
      "id": _0x51f6bd
    } = _0x7640d7['user'];

    if (["super", "admin"]['includes'](_0xa77935)) {
      return;
    }

    const _0x562c07 = await this["midjourneyEntity"]['count']({
      'where': {
        'userId': _0x51f6bd,
        'isDelete': 0,
        'status': (0, typeorm_2['In'])([1, 2])
      }
    });

    if (_0x562c07 >= 2) {
      throw new common_1["HttpException"]('当前管理员限制单用户同时最多能执行两个任务！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ['drawFailed'](_0x2eb2fb) {
    const {
      "id": _0x5b69d4,
      "userId": _0x7ce931,
      "action": _0x5bd461
    } = _0x2eb2fb,
          _0x2a4eaf = _0x5bd461 === 2 ? 1 : 4;

    await this["userBalanceService"]["refundMjBalance"](_0x7ce931, _0x2a4eaf);
    await this["midjourneyEntity"]["update"]({
      'id': _0x5b69d4
    }, {
      'status': 4
    });
  }

  async ["getList"](_0x9fcfd3) {
    const {
      "page": page = 1,
      "size": size = 20,
      "rec": _0x5bfe30,
      "userId": _0x4751cb,
      "status": _0xdccebc
    } = _0x9fcfd3;

    if (Number(size) === 999) {
      const _0x2862d9 = await this["redisCacheService"]['get']({
        'key': "midjourney:getList"
      });

      if (_0x2862d9) {
        return JSON['parse'](_0x2862d9);
      }
    }

    const _0x140259 = {
      'isDelete': 0
    };
    _0x5bfe30 && Object["assign"](_0x140259, {
      'rec': _0x5bfe30
    });
    _0x4751cb && Object["assign"](_0x140259, {
      'userId': _0x4751cb
    });
    _0xdccebc && Object["assign"](_0x140259, {
      'status': _0xdccebc
    });
    const [_0x654a13, _0x248899] = await this["midjourneyEntity"]["findAndCount"]({
      'where': _0x140259,
      'order': {
        'id': "DESC"
      },
      'take': size,
      'skip': (page - 1) * size,
      'select': ["fileInfo", "extend", "prompt", "createdAt", 'id', 'extend', 'fullPrompt', "rec"]
    });

    _0x654a13["forEach"](_0x2c76dd => {
      var _0xc95d28, _0x865599;

      const {
        "extend": _0x4e4703
      } = _0x2c76dd;
      _0x2c76dd["fileInfo"] = this['formatFileInfo'](_0x2c76dd["fileInfo"]);
      _0x2c76dd["isGroup"] = ((_0x865599 = (_0xc95d28 = JSON["parse"](_0x4e4703)) === null || _0xc95d28 === void 0 ? void 0 : _0xc95d28['components'][0]) === null || _0x865599 === void 0 ? void 0 : _0x865599["components"]["length"]) === 5;
    });

    if (Number(size) === 999) {
      const _0x38bafd = {
        'rows': _0x654a13["map"](_0x5ec69c => {
          const {
            "fileInfo": _0x5ab54e,
            "prompt": _0x3612d5,
            "createdAt": _0x10441b,
            "id": _0x59e7dc,
            "fullPrompt": _0x9c8e7c,
            "rec": _0x2b47c1
          } = _0x5ec69c;
          return {
            'fileInfo': _0x5ab54e,
            'prompt': _0x3612d5,
            'createdAt': _0x10441b,
            'id': _0x59e7dc,
            'fullPrompt': _0x9c8e7c,
            'rec': _0x2b47c1
          };
        }),
        'count': _0x248899
      };
      await this["redisCacheService"]['set']({
        'key': 'midjourney:getList',
        'val': JSON["stringify"](_0x38bafd)
      }, 300);
      return _0x38bafd;
    }

    const _0x1a9df5 = {
      'rows': _0x654a13,
      'count': _0x248899
    };
    return _0x1a9df5;
  }

  async ['getAdminDrawList'](_0xdb7ee7, _0x207ae2) {
    const {
      "page": page = 1,
      "size": size = 10,
      "rec": _0x2adfba,
      "userId": _0x1c59da,
      "status": _0x5a414d
    } = _0x207ae2,
          _0x46600c = {
      'isDelete': 0
    };
    _0x2adfba && Object["assign"](_0x46600c, {
      'rec': _0x2adfba
    });
    _0x1c59da && Object["assign"](_0x46600c, {
      'userId': _0x1c59da
    });
    _0x5a414d && Object["assign"](_0x46600c, {
      'status': _0x5a414d
    });

    const [_0x4cd3e8, _0x19b29c] = await this["midjourneyEntity"]["findAndCount"]({
      'where': _0x46600c,
      'order': {
        'id': "DESC"
      },
      'take': size,
      'skip': (page - 1) * size
    }),
          _0x5cd5b8 = _0x4cd3e8["map"](_0x54b822 => _0x54b822["userId"]),
          _0x42e65b = await this["userEntity"]["find"]({
      'where': {
        'id': (0, typeorm_2['In'])(_0x5cd5b8)
      },
      'select': ['id', "username", "avatar", "email"]
    });

    _0x4cd3e8['forEach'](_0x5b4c77 => {
      _0x5b4c77["userInfo"] = _0x42e65b["find"](_0x450c5c => _0x450c5c['id'] === _0x5b4c77['userId']);
    });

    _0x4cd3e8["forEach"](_0x26377d => {
      var _0x4393a3, _0x1197ca;

      const {
        "extend": _0xdbb966
      } = _0x26377d;
      _0x26377d['fileInfo'] = this["formatFileInfo"](_0x26377d["fileInfo"]);
      _0x26377d["isGroup"] = ((_0x1197ca = (_0x4393a3 = JSON["parse"](_0xdbb966)) === null || _0x4393a3 === void 0 ? void 0 : _0x4393a3["components"][0]) === null || _0x1197ca === void 0 ? void 0 : _0x1197ca['components']["length"]) === 5;
    });

    _0xdb7ee7['user']["role"] !== 'super' && _0x4cd3e8["forEach"](_0x39663f => {
      _0x39663f["userInfo"]["email"] = _0x39663f["userInfo"]["email"]["replace"](/(.{2}).+(.{2}@.+)/, "$1****$2");
    });
    return {
      'rows': _0x4cd3e8,
      'count': _0x19b29c
    };
  }

  async ['recDraw'](_0x563699) {
    const {
      "id": _0xaab485
    } = _0x563699,
          _0x4af7fc = await this["midjourneyEntity"]["findOne"]({
      'where': {
        'id': _0xaab485,
        'status': 3,
        'isDelete': 0
      }
    });

    if (!_0x4af7fc) {
      throw new common_1["HttpException"]("当前图片不存在！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const {
      "rec": _0x5747df
    } = _0x4af7fc,
          _0x4f9adb = await this["midjourneyEntity"]["update"]({
      'id': _0xaab485
    }, {
      'rec': _0x5747df === 1 ? 0 : 1
    });

    if (_0x4f9adb["affected"] > 0) {
      return "操作成功！";
    }
  }

  async ['cleanQueue']() {
    try {
      await this["midjourneyEntity"]['update']({
        'status': 2
      }, {
        'status': 4
      });
    } catch (_0x5366d6) {
      console["log"]("TODO->error: ", _0x5366d6);
    }
  }

  async ["delLog"](_0x568a8d, _0x4c7d09) {
    const {
      "id": _0x409628
    } = _0x4c7d09;

    if (!_0x409628) {
      throw new common_1["HttpException"]('非法操作！', common_1['HttpStatus']["BAD_REQUEST"]);
    }

    const _0x1e5b2f = await this["midjourneyEntity"]["delete"]({
      'id': _0x409628
    });

    if (_0x1e5b2f["affected"] > 0) {
      return '删除记录成功！';
    } else {
      throw new common_1['HttpException']("删除记录失败！", common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

};
MidjourneyService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_1["InjectRepository"])(midjourney_entity_1['MidjourneyEntity'])), __param(1, (0, typeorm_1["InjectRepository"])(user_entity_1['UserEntity'])), __metadata('design:paramtypes', [typeorm_2['Repository'], typeorm_2["Repository"], globalConfig_service_1['GlobalConfigService'], upload_service_1["UploadService"], badwords_service_1["BadwordsService"], userBalance_service_1["UserBalanceService"], redisCache_service_1["RedisCacheService"]])], MidjourneyService);
exports["MidjourneyService"] = MidjourneyService;