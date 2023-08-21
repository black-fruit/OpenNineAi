'use strict';

var __decorate = this && this["__decorate"] || function (_0x2fed58, _0x5e543c, _0x49f571, _0x192060) {
  var _0x511ea8 = arguments["length"],
      _0x4d1548 = _0x511ea8 < 3 ? _0x5e543c : _0x192060 === null ? _0x192060 = Object["getOwnPropertyDescriptor"](_0x5e543c, _0x49f571) : _0x192060,
      _0x4117b2;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x4d1548 = Reflect["decorate"](_0x2fed58, _0x5e543c, _0x49f571, _0x192060);
  } else {
    for (var _0x364818 = _0x2fed58["length"] - 1; _0x364818 >= 0; _0x364818--) {
      if (_0x4117b2 = _0x2fed58[_0x364818]) {
        _0x4d1548 = (_0x511ea8 < 3 ? _0x4117b2(_0x4d1548) : _0x511ea8 > 3 ? _0x4117b2(_0x5e543c, _0x49f571, _0x4d1548) : _0x4117b2(_0x5e543c, _0x49f571)) || _0x4d1548;
      }
    }
  }

  _0x511ea8 > 3 && _0x4d1548 && Object['defineProperty'](_0x5e543c, _0x49f571, _0x4d1548);
  return _0x4d1548;
},
    __metadata = this && this["__metadata"] || function (_0x2de158, _0x9503dd) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x2de158, _0x9503dd);
  }
},
    __param = this && this['__param'] || function (_0x5a58a9, _0x465ff3) {
  return function (_0x1d0fa6, _0x25d5cd) {
    _0x465ff3(_0x1d0fa6, _0x25d5cd, _0x5a58a9);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['MjService'] = void 0;

const globalConfig_service_1 = require("./../globalConfig/globalConfig.service"),
      upload_service_1 = require('./../upload/upload.service'),
      common_1 = require('@nestjs/common'),
      axios_1 = require("axios"),
      chatLog_service_1 = require("../chatLog/chatLog.service"),
      balance_constant_1 = require('../../common/constants/balance.constant'),
      utils_1 = require("../../common/utils"),
      chatLog_entity_1 = require("../chatLog/chatLog.entity"),
      typeorm_1 = require("typeorm"),
      typeorm_2 = require("@nestjs/typeorm"),
      balance_entity_1 = require('../userBalance/balance.entity'),
      fanyi_service_1 = require("../fanyi/fanyi.service"),
      badwords_service_1 = require("../badwords/badwords.service");

let MjService = class MjService {
  constructor(_0x30f06f, _0x307ffa, _0x19d927, _0x363578, _0x523fcb, _0x4f3637, _0x38f437) {
    this["chatLogEntity"] = _0x30f06f;
    this["balanceEntity"] = _0x307ffa;
    this["uploadService"] = _0x19d927;
    this["chatLogService"] = _0x363578;
    this["globalConfigService"] = _0x523fcb;
    this["fanyiService"] = _0x4f3637;
    this['badwordsService'] = _0x38f437;
    this["rateLimits"] = {};
    this["drawWorking"] = [];
    this["enlargeWorking"] = [];
    this["queueCount"] = 0;
    this["freeQueueUsers"] = {};
  }

  async ["mjDraw"](_0x3daefd) {
    const {
      "jobId": _0x1adcf5,
      "prompt": _0x47071c,
      "startTime": _0x26c7d2,
      "userId": _0x369045
    } = _0x3daefd;
    console["log"]("绘画任务开始", "mjservice");
    await new Promise(_0x51438e => setTimeout(_0x51438e, 5000));
    return {
      'a': 1,
      'b': 2
    };
  }

  async ["draw"](_0x481432, _0x3c222f) {
    await this["checkAuth"](_0x3c222f);

    if (await this["badwordsService"]["checkBadWords"](_0x481432["prompt"])) {
      throw new common_1["HttpException"]("您的绘画描述词中含有不合规信息、请检查后重新提交！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x5e912b = _0x481432["prompt"];
    let _0x29561e = _0x481432["prompt"];
    const {
      "baiduFanyiAppId": _0xada1f0,
      "baiduFanyiSecret": _0xac6cdf
    } = await this["globalConfigService"]['getConfigs'](["baiduFanyiAppId", "baiduFanyiSecret"]);
    _0xada1f0 && _0xac6cdf && (_0x29561e = await this["fanyiService"]["convertToEnglish"](_0x5e912b));

    const _0x2a1dca = '[' + (0, utils_1["createRandomUid"])() + ']',
          _0x3ce786 = _0x2a1dca + " " + _0x29561e;

    console["log"]("randomId: ", _0x2a1dca);
    console['log']("prompt -------->  ", _0x3ce786);

    const _0x21a53c = this["drawWorking"]['find'](_0x21e5ac => _0x21e5ac['includes'](_0x481432["prompt"]));

    if (_0x21a53c) {
      throw new common_1['HttpException']("当前提示词已经在任务队列中了、请勿重复提交。。。", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    if (this["queueCount"] >= 3) {
      throw new common_1['HttpException']('当前绘图任务满载、请排队等候、队列任务完成后即可开始您的任务...', common_1["HttpStatus"]['BAD_REQUEST']);
    }

    await this["checkRateLimit"](_0x3c222f);
    this['queueCount']++;
    console["log"]("开始请求用户" + _0x3c222f["user"]['id'] + " 队列+1: ", this["queueCount"]);

    try {
      const _0xc78beb = await this['chatLogEntity']["find"]({
        'where': {
          'prompt': (0, typeorm_1["Like"])('%' + _0x3ce786 + '%')
        }
      }),
            _0x3d5731 = _0xc78beb["map"](_0x2c604e => _0x2c604e["message_id"]);

      this['drawWorking']["push"](_0x3ce786);

      let _0x30d47f;

      const _0x4bf090 = await this["sendDrawInteractions"](_0x3ce786, _0x3d5731, _0x2a1dca);

      _0x4bf090 ? (console["log"]('历史中存在当前图片、直接获取！'), _0x30d47f = _0x4bf090) : _0x30d47f = await this["pollForResult"](_0x3ce786, _0x3d5731, _0x2a1dca);
      this["queueCount"]--;
      this["queueCount"] < 0 && (this["queueCount"] = 0);
      console["log"]("绘制图片任务结束 队列-1: ", this["queueCount"]);
      const {
        "id": _0x2a5b97,
        "content": _0x3a43e0,
        "channel_id": _0xf4a8f2,
        "attachments": attachments = [],
        "timestamp": _0xd0835
      } = _0x30d47f;

      if (!attachments["length"] || !attachments[0]["url"]) {
        throw new common_1["HttpException"]("绘画失败", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const {
        "filename": _0x2bd0a0,
        "url": _0x209258,
        "width": _0x58014e,
        "height": _0x5ea94c,
        "size": _0x3c482c
      } = attachments[0];
      console["log"]("拿到了远程地址: ", _0x209258);

      const _0x36d6a8 = await this["uploadService"]["uploadFileFromUrl"]({
        'filename': _0x2bd0a0,
        'url': _0x209258
      });

      console['log']("存入图片完成: ", _0x36d6a8);
      const _0x40f5c7 = {
        'curIp': (0, utils_1["getClientIp"])(_0x3c222f),
        'userId': _0x3c222f["user"]['id'],
        'type': balance_constant_1["DeductionKey"]["PAINT_TYPE"],
        'prompt': _0x3ce786,
        'answer': _0x36d6a8,
        'model': 'mj',
        'extend': this["removeEmoji"](JSON['stringify'](_0x30d47f)),
        'message_id': _0x2a5b97,
        'variationId': _0x2a5b97,
        'upscaleId': _0x2a5b97,
        'group': 1,
        'fileInfo': JSON["stringify"]({
          'width': _0x58014e,
          'height': _0x5ea94c,
          'size': _0x3c482c,
          'filename': _0x2bd0a0,
          'cosUrl': _0x36d6a8
        })
      };
      await this["chatLogService"]["saveChatLog"](_0x40f5c7);
      await this["deductBalance"](_0x3c222f);
      this["drawWorking"] = this["drawWorking"]["filter"](_0x4a3f2b => _0x4a3f2b !== _0x481432["prompt"]);
      return _0x36d6a8;
    } catch (_0x24e7ca) {
      this['queueCount']--;
      this["queueCount"] < 0 && (this["queueCount"] = 0);
      console["log"]("绘制图片任务异常中断 队列-1: ", this["queueCount"]);
      this["drawWorking"] = this["drawWorking"]["filter"](_0x334b81 => _0x334b81 !== _0x481432["prompt"]);
      throw new common_1['HttpException'](_0x24e7ca['response'], common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["upscaleSingleImg"](_0x3bba17, _0x43f9d6) {
    if (this["queueCount"] >= 3) {
      throw new common_1['HttpException']("当前绘图任务满载、请排队等候、队列任务完成后即可开始您的任务...", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    this['queueCount']++;
    console['log']('用户' + _0x43f9d6["user"]['id'] + "开始请求放大图片 队列+1: ", this['queueCount']);
    const {
      "message_id": _0x27f7db,
      "orderId": _0x4a41e3
    } = _0x3bba17;

    try {
      const _0x16379c = await this["chatLogEntity"]['findOne']({
        'where': {
          'message_id': _0x27f7db
        }
      });

      if (!_0x16379c) {
        throw new common_1["HttpException"]('历史记录中不存在当前图片、请确认您放大的图片是否存在', common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const _0x36e3fb = await this["chatLogEntity"]['findOne']({
        'where': {
          'upscaleId': _0x27f7db,
          'action': "enlarge",
          'orderId': _0x4a41e3
        }
      });

      if (_0x36e3fb) {
        throw new common_1["HttpException"]("当前图片已经放大过了、请勿重复放大!", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const {
        "prompt": _0x430843,
        "extend": _0x198244
      } = _0x16379c,
            _0x5bca31 = JSON['parse'](_0x198244),
            {
        "components": components = []
      } = _0x5bca31;

      if (!components["length"]) {
        throw new common_1["HttpException"]("当前图片没有绘画信息、无法放大!", common_1['HttpStatus']["BAD_REQUEST"]);
      }

      const _0x201a9b = components[0]["components"][_0x4a41e3 - 1],
            {
        "custom_id": _0x5466be
      } = _0x201a9b;
      console["log"]("放大custom_id: ", _0x5466be);
      const _0x587af9 = {
        'message_id': _0x27f7db,
        'custom_id': _0x5466be,
        'prompt': _0x430843,
        'orderId': _0x4a41e3
      };
      await this["sendSmInteractions"](_0x587af9);
      console["log"]('发送放大指令成功');

      const _0x3ecd9b = await this['chatLogEntity']["find"]({
        'where': {
          'prompt': (0, typeorm_1['Like'])('%' + _0x430843 + '%')
        }
      }),
            _0x59b382 = _0x3ecd9b['map'](_0x36c8af => _0x36c8af['message_id']);

      console["log"]("历史这些id已经被获取过了 不能拿了: ", _0x59b382);

      const _0x58a45e = await this['pollForUpscaleResult'](_0x587af9, _0x59b382);

      this["queueCount"]--;
      this['queueCount'] < 0 && (this["queueCount"] = 0);
      console["log"]("放大图片任务结束 队列-1: ", this["queueCount"]);
      const {
        "id": _0x492093,
        "content": _0xe69ffa,
        "channel_id": _0x3f6c5f,
        "attachments": attachments = [],
        "timestamp": _0x8225b2
      } = _0x58a45e;

      if (!attachments["length"] || !attachments[0]["url"]) {
        throw new common_1["HttpException"]('放大当前图片失败', common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const {
        "filename": _0x47597d,
        "url": _0x2256b5,
        "width": _0x544988,
        "height": _0x477fa0,
        "size": _0x58ecaf
      } = attachments[0],
            _0xe172d7 = await this["uploadService"]["uploadFileFromUrl"]({
        'filename': _0x47597d,
        'url': _0x2256b5
      });

      console["log"]("cosUrl: ", _0xe172d7);
      const _0x197ea9 = {
        'curIp': (0, utils_1['getClientIp'])(_0x43f9d6),
        'userId': _0x43f9d6["user"]['id'],
        'type': balance_constant_1["DeductionKey"]['PAINT_TYPE'],
        'prompt': _0x430843,
        'answer': _0xe172d7,
        'model': 'mj',
        'extend': this["removeEmoji"](JSON['stringify'](_0x58a45e)),
        'message_id': _0x27f7db,
        'upscaleId': _0x492093,
        'variationId': _0x492093,
        'action': "enlarge",
        'orderId': _0x587af9["orderId"],
        'fileInfo': JSON['stringify']({
          'width': _0x544988,
          'height': _0x477fa0,
          'size': _0x58ecaf,
          'filename': _0x47597d,
          'cosUrl': _0xe172d7
        })
      };
      await this['chatLogService']["saveChatLog"](_0x197ea9);
      return _0xe172d7;
    } catch (_0x339ada) {
      console["log"]("error: ", _0x339ada);
      this["queueCount"]--;
      this["queueCount"] < 0 && (this["queueCount"] = 0);
      console["log"]("放大图片任务异常中断 队列-1: ", this["queueCount"]);
      throw new common_1["HttpException"](_0x339ada["response"], common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ['variationSingleImg'](_0x4ab203, _0x1105d3) {
    if (this["queueCount"] >= 3) {
      throw new common_1["HttpException"]('当前绘图任务满载、请排队等候、队列任务完成后即可开始您的任务...', common_1["HttpStatus"]['BAD_REQUEST']);
    }

    await this["checkAuth"](_0x1105d3);
    await this["checkRateLimit"](_0x1105d3);
    this["queueCount"]++;
    console["log"]('用户' + _0x1105d3['user']['id'] + "开始请求变换图片 队列+1: ", this["queueCount"]);
    const {
      "message_id": _0xd4dc9b,
      "orderId": _0x2073fc
    } = _0x4ab203;

    try {
      const _0x1b5550 = await this["chatLogEntity"]["findOne"]({
        'where': {
          'message_id': _0xd4dc9b
        }
      });

      if (!_0x1b5550) {
        throw new common_1["HttpException"]('历史记录中不存在当前图片、请确认您需要变换的图片是否存在', common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const {
        "prompt": _0x5519c9,
        "extend": _0x59288c
      } = _0x1b5550,
            _0x24f3f0 = JSON["parse"](_0x59288c),
            {
        "components": components = []
      } = _0x24f3f0;

      if (!components["length"]) {
        throw new common_1["HttpException"]('当前图片没有绘画信息、无法变体!', common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const _0xab9c84 = components[1]["components"][_0x2073fc - 1],
            {
        "custom_id": _0x123f5f
      } = _0xab9c84,
            _0x5a64b0 = await this["chatLogEntity"]["find"]({
        'where': {
          'variationId': (0, typeorm_1["Not"])((0, typeorm_1['IsNull'])()),
          'prompt': (0, typeorm_1["Like"])('%' + _0x5519c9 + '%')
        }
      }),
            _0x179ace = _0x5a64b0["map"](_0x3c67d1 => _0x3c67d1["variationId"]),
            _0x1777aa = {
        'message_id': _0xd4dc9b,
        'custom_id': _0x123f5f,
        'prompt': _0x5519c9,
        'orderId': _0x2073fc
      };

      await this["sendSmInteractions"](_0x1777aa);

      const _0x297f0a = await this["pollForVariationResult"](_0x1777aa, _0x179ace);

      this["queueCount"]--;
      this['queueCount'] < 0 && (this["queueCount"] = 0);
      console['log']("变换图片任务结束 队列-1: ", this["queueCount"]);
      const {
        "id": _0x4002a7,
        "content": _0x585b7f,
        "channel_id": _0x1df018,
        "attachments": attachments = [],
        "timestamp": _0x24197d
      } = _0x297f0a;

      if (!attachments["length"] || !attachments[0]["url"]) {
        throw new common_1["HttpException"]("变换当前图片失败", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const {
        "filename": _0x3b969e,
        "url": _0x34352e,
        "width": _0x4aaf4f,
        "height": _0x3754ff,
        "size": _0x598011
      } = attachments[0],
            _0x45abc9 = await this['uploadService']["uploadFileFromUrl"]({
        'filename': _0x3b969e,
        'url': _0x34352e
      }),
            _0x4f0b71 = {
        'curIp': (0, utils_1["getClientIp"])(_0x1105d3),
        'userId': _0x1105d3["user"]['id'],
        'type': balance_constant_1["DeductionKey"]["PAINT_TYPE"],
        'prompt': _0x5519c9,
        'answer': _0x45abc9,
        'model': 'mj',
        'group': 1,
        'extend': this["removeEmoji"](JSON["stringify"](_0x297f0a)),
        'message_id': _0x4002a7,
        'upscaleId': _0x4002a7,
        'variationId': _0x4002a7,
        'action': "enlarge",
        'orderId': _0x1777aa["orderId"],
        'fileInfo': JSON["stringify"]({
          'width': _0x4aaf4f,
          'height': _0x3754ff,
          'size': _0x598011,
          'filename': _0x3b969e,
          'cosUrl': _0x45abc9
        })
      };

      await this["chatLogService"]['saveChatLog'](_0x4f0b71);
      return _0x45abc9;
    } catch (_0x435d36) {
      console['log']("error: ", _0x435d36);
      this["queueCount"]--;
      this['queueCount'] < 0 && (this['queueCount'] = 0);
      console['log']("变化图片任务异常中断 队列-1: ", this['queueCount']);
      throw new common_1["HttpException"](_0x435d36["response"], common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["sendSmInteractions"](_0x576d0c) {
    const {
      "message_id": _0x11f375,
      "custom_id": _0x3d8f9b
    } = _0x576d0c,
          {
      "application_id": _0x898bc0,
      "guild_id": _0xb6d6fe,
      "channel_id": _0x4d354c,
      "session_id": _0x1409e9,
      "version": _0x3be137,
      "id": _0x3bcac9,
      "authorization": _0x1eb019,
      "mjProxy": _0x1ff8c6
    } = await this["getMjDefaultParams"](),
          _0x2844f0 = _0x1ff8c6 == 1 ? "http://172.247.48.137:8000/mj/draw" : 'https://discord.com/api/v9/interactions',
          _0x1148ec = {
      'authorization': _0x1eb019
    },
          _0x12927b = {
      'type': 3,
      'guild_id': _0xb6d6fe,
      'channel_id': _0x4d354c,
      'message_flags': 0,
      'message_id': _0x11f375,
      'application_id': _0x898bc0,
      'session_id': _0x1409e9,
      'data': {
        'component_type': 2,
        'custom_id': _0x3d8f9b
      }
    };

    try {
      await axios_1["default"]["post"](_0x2844f0, _0x12927b, {
        'headers': _0x1148ec
      });
      console["log"]("绘图指令完成");
    } catch (_0xafb7c5) {
      console['log']("error: ", _0xafb7c5);
      throw new common_1["HttpException"]('放大单张图片请求失败...', common_1['HttpStatus']['BAD_REQUEST']);
    }
  }

  async ["pollForUpscaleResult"](_0x250319, _0x24ff44) {
    const {
      "message_id": _0x309e14,
      "custom_id": _0x27b731,
      "prompt": _0xea2038,
      "orderId": _0x1a3ee7
    } = _0x250319;
    let _0x59b50e = null,
        _0x19eb15 = 0;

    while (!_0x59b50e && _0x19eb15 < 10) {
      try {
        const _0x26ce72 = Date["now"](),
              _0x31c311 = await this['queryMessageList']();

        console['log']("第 " + (_0x19eb15 + 1) + " 次开始查询 => 当前查询结果：" + _0x31c311['length']);
        _0x31c311 && _0x31c311["length"] && (_0x59b50e = await this['findCurrentEnlargeImgResult'](_0x31c311, _0x250319, _0x24ff44));

        const _0xf48aa7 = Date['now']() - _0x26ce72,
              _0x4792ce = 3000;

        await this['sleep'](Math["max"](_0x4792ce - _0xf48aa7, 0));
        _0x19eb15++;
      } catch (_0x49817d) {
        console["error"]("查询期间出现错误：" + _0x49817d['message']);
      }
    }

    return _0x59b50e;
  }

  async ['pollForVariationResult'](_0x2a1cc5, _0x48a461) {
    const {
      "message_id": _0x5725ae,
      "custom_id": _0x194d76,
      "prompt": _0x2c5ebf,
      "orderId": _0x1d0efd
    } = _0x2a1cc5;
    console['log']("开始轮询单张变换图片结果");
    let _0x3f0a67 = null,
        _0x47ca85 = 0;

    while (!_0x3f0a67 && _0x47ca85 < 10) {
      try {
        console['log']("第 " + (_0x47ca85 + 1) + " 次开始查询[变换图片]");

        const _0x1d7c32 = Date['now'](),
              _0x5c9125 = await this['queryMessageList']();

        _0x5c9125 && _0x5c9125['length'] && (_0x3f0a67 = await this["findCurrentVariationImgResult"](_0x5c9125, _0x2a1cc5, _0x48a461));

        const _0x1f4226 = Date["now"]() - _0x1d7c32,
              _0x22a353 = 8000;

        await this["sleep"](Math['max'](_0x22a353 - _0x1f4226, 0));
        _0x47ca85++;
      } catch (_0x725b02) {
        console["error"]("查询期间出现错误：" + _0x725b02['message']);
      }
    }

    if (!_0x3f0a67) {
      throw new common_1["HttpException"]("变换当前图片超时！", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    return _0x3f0a67;
  }

  async ['findCurrentEnlargeImgResult'](_0x38c9bb, _0x126b59, _0x2f9c29) {
    const {
      "message_id": _0x5e3f25,
      "custom_id": _0x5b146d,
      "prompt": _0x581470,
      "orderId": _0x286dba
    } = _0x126b59,
          _0x210102 = _0x581470["substring"](0, 12);

    console["log"]("本次放大图片的id: ", _0x210102);

    const _0x99ca19 = _0x38c9bb["find"](_0x4352e8 => {
      const {
        "content": _0x4e2400
      } = _0x4352e8;

      if (!this["extractContent"](_0x4e2400)) {
        return false;
      }

      const {
        "prompt": _0x5bf938,
        "order": _0x4db8ec
      } = this['extractContent'](_0x4e2400);
      return _0x5bf938["includes"](_0x210102) && _0x126b59["orderId"] === _0x4db8ec && !_0x2f9c29["includes"](_0x4352e8['id']);
    });

    return _0x99ca19;
  }

  async ['findCurrentVariationImgResult'](_0x41a8e4, _0x7c8128, _0xf5d035) {
    const {
      "message_id": _0x5a4844,
      "custom_id": _0x454550,
      "prompt": _0x224f10,
      "orderId": _0x893796
    } = _0x7c8128,
          _0x1c1604 = _0x224f10["substring"](0, 12),
          _0x23406a = _0x41a8e4['find'](_0x5ec9e7 => {
      const {
        "content": _0x2dcc1a
      } = _0x5ec9e7,
            _0x12aaed = _0x2dcc1a['match'](/\*\*(.+?)\*\*/),
            _0x19f0e5 = _0x12aaed ? _0x12aaed[1] : '';

      if (!_0x19f0e5) {
        return false;
      }

      return _0x19f0e5["includes"](_0x1c1604) && !_0xf5d035['includes'](_0x5ec9e7['id']);
    });

    return _0x23406a;
  }

  async ["sendDrawInteractions"](_0x5ace1a, _0x1b8945, _0x31c42c) {
    const _0x1542a3 = await this["queryMessageList"](),
          _0x5f4439 = await this["findCurrentPromptResult"](_0x1542a3, _0x31c42c, _0x1b8945);

    if (_0x5f4439) {
      console["log"]("有历史信息之间返回: ", _0x5f4439);
      return _0x5f4439;
    }

    const {
      "application_id": _0x4f9b28,
      "guild_id": _0x390adc,
      "channel_id": _0x2d0db4,
      "session_id": _0xb74d59,
      "version": _0x34ae28,
      "id": _0xc8e077,
      "authorization": _0x11a224,
      "mjProxy": _0x3209e2
    } = await this["getMjDefaultParams"](),
          _0xb2c553 = {
      'type': 2,
      'application_id': _0x4f9b28,
      'guild_id': _0x390adc,
      'channel_id': _0x2d0db4,
      'session_id': _0xb74d59,
      'data': {
        'version': _0x34ae28,
        'id': _0xc8e077,
        'name': 'imagine',
        'type': 1,
        'options': [{
          'type': 3,
          'name': "prompt",
          'value': _0x5ace1a
        }],
        'attachments': []
      }
    };

    try {
      const _0x1c20bf = _0x3209e2 == 1 ? "http://172.247.48.137:8000/mj/draw" : "https://discord.com/api/v9/interactions",
            _0x3eba48 = {
        'authorization': _0x11a224
      },
            _0x52ae01 = await axios_1["default"]['post'](_0x1c20bf, _0xb2c553, {
        'headers': _0x3eba48
      });

      console["log"]("发送绘画指令结果: ", _0x52ae01["data"]);
      return false;
    } catch (_0x3ec1a6) {
      console['log']("axios: ", _0x3ec1a6);
      throw new common_1['HttpException']("绘画请求失败、当前使用人数过多、请稍后试试吧、排队中...", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["pollForResult"](_0x1a54e4, _0xc336b7, _0x236b0c) {
    console["log"]("开始查询绘画结果轮询");

    const _0x1e3cdc = Date["now"]();

    try {
      const _0x3daf04 = 13,
            _0x30c462 = 12000,
            _0x30190c = 5000,
            _0x3cf31d = 60000;
      let _0x1f6193 = 0,
          _0x5360d8 = false,
          _0x4ef1e1 = null;

      while (!_0x4ef1e1 && _0x1f6193 < _0x3daf04) {
        console["log"]("第 " + (_0x1f6193 + 1) + " 次开始查询");
        Date["now"]() - _0x1e3cdc >= _0x3cf31d && (_0x5360d8 = true);
        await this['sleep'](_0x5360d8 ? _0x30190c : _0x30c462);

        const _0x5f0690 = await this["queryMessageList"]();

        _0x4ef1e1 = await this['findCurrentPromptResult'](_0x5f0690, _0x236b0c, _0xc336b7);
        _0x1f6193++;
      }

      if (!_0x4ef1e1) {
        throw new common_1['HttpException']("绘画超时，请稍后再试！", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const _0x34e44d = Date["now"]();

      console["log"]("本次绘图耗时: " + Math["floor"]((_0x34e44d - _0x1e3cdc) / 1000) + " S");
      return _0x4ef1e1;
    } catch (_0xb35e1b) {
      console["error"](_0xb35e1b['message']);
      throw new common_1["HttpException"]('网络连接失败，请稍后再试！', common_1["HttpStatus"]["INTERNAL_SERVER_ERROR"]);
    }
  }

  async ["findCurrentPromptResult"](_0x22419a, _0x4bb6c7, _0x1dee5b) {
    if (!_0x22419a || !_0x22419a["length"]) {
      return;
    }

    console["log"]("本次比对的随机ID: ", _0x4bb6c7);

    const _0x1d3bf4 = _0x22419a["find"](_0x4e5b91 => {
      const {
        "attachments": attachments = [],
        "content": _0x2f30a1,
        "edited_timestamp": _0x4e14aa
      } = _0x4e5b91;
      return _0x2f30a1["includes"](_0x4bb6c7) && attachments['length'] > 0 && !_0x4e14aa && !_0x1dee5b["includes"](_0x4e5b91['id']);
    });

    return _0x1d3bf4 || null;
  }

  async ["queryMessageList"]() {
    try {
      const {
        "application_id": _0x5aec83,
        "guild_id": _0xd8a785,
        "channel_id": _0x801588,
        "session_id": _0xc12d67,
        "version": _0x2ce073,
        "id": _0x3a5bf8,
        "authorization": _0xd84c4f,
        "mjProxy": _0x361a2e
      } = await this["getMjDefaultParams"](),
            _0xc7a7e9 = _0x361a2e == 1 ? "http://172.247.48.137:8000/mj/list?channel_id=" + _0x801588 : "https://discord.com/api/v9/channels/" + _0x801588 + "/messages?limit=50",
            _0x4b36d8 = {
        'authorization': _0xd84c4f
      },
            _0x51e652 = await axios_1["default"]['get'](_0xc7a7e9, {
        'headers': _0x4b36d8
      });

      return _0x51e652["data"];
    } catch (_0x2b2f17) {
      console["log"]("axios get: ", _0x2b2f17);
      throw new common_1["HttpException"]("查询绘制结果失败...", common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["sleep"](_0x10f877) {
    return new Promise(_0x3a58ac => setTimeout(_0x3a58ac, _0x10f877));
  }

  ["extractContent"](_0x3dd427) {
    const _0x310041 = _0x3dd427["match"](/\*\*(.+?)\*\*/),
          _0xeedc3b = _0x3dd427['match'](/- Image #(\d+)/);

    if (!_0x310041 || !_0xeedc3b) {
      return null;
    }

    const _0x175277 = _0x310041[1],
          _0x2e7cf0 = parseInt(_0xeedc3b[1]);

    return {
      'prompt': _0x175277,
      'order': _0x2e7cf0
    };
  }

  async ["getMjDefaultParams"]() {
    const _0x64dbf5 = await this["globalConfigService"]['getConfigs'](["mjId", "mjApplicationId", 'mjGuildId', "mjChannelId", "mjSessionId", "mjVersion", "mjAuthorization", "mjRateLimit", "mjProxy"]),
          _0x5b9229 = {
      'application_id': _0x64dbf5["mjApplicationId"],
      'guild_id': _0x64dbf5["mjGuildId"],
      'channel_id': _0x64dbf5["mjChannelId"],
      'session_id': _0x64dbf5["mjSessionId"],
      'version': _0x64dbf5["mjVersion"],
      'id': _0x64dbf5["mjId"],
      'authorization': _0x64dbf5["mjAuthorization"],
      'mjRateLimit': _0x64dbf5['mjRateLimit'],
      'mjProxy': _0x64dbf5['mjProxy'] || 0
    };

    return _0x5b9229;
  }

  ["removeEmoji"](_0x883db) {
    const _0xb29bb1 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    return _0x883db["replace"](_0xb29bb1, '');
  }

  async ['checkAuth'](_0xeed5b9) {
    const _0x2089c4 = await this['balanceEntity']['findOne']({
      'where': {
        'userId': _0xeed5b9["user"]['id']
      }
    }),
          {
      "id": _0x12b5db,
      "balance": _0x9bb57d
    } = _0x2089c4;

    if (!_0x9bb57d || (_0x2089c4 === null || _0x2089c4 === void 0 ? void 0 : _0x2089c4["balance"]) < 1) {
      throw new common_1["HttpException"]('您当前暂无MJ绘画余额！！！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["checkFree"](_0x3e49c9) {
    const {
      "id": _0x3c699b,
      "role": _0xea86cc
    } = _0x3e49c9["user"];
    !this['freeQueueUsers'][_0x3c699b] ? this["freeQueueUsers"][_0x3c699b] = 1 : this["freeQueueUsers"][_0x3c699b] = this["freeQueueUsers"][_0x3c699b] + 1;
    console["log"]("当前用户" + _0x3c699b + '使用的次数：', this['freeQueueUsers'][_0x3c699b]);
  }

  async ["checkRateLimit"](_0x1ba0e3) {
    const {
      "id": _0x10b31e,
      "role": _0x1cba05
    } = _0x1ba0e3['user'];

    if (["admin", 'super']["includes"](_0x1cba05)) {
      return true;
    }

    const {
      "mjRateLimit": _0xed47d4
    } = await this["getMjDefaultParams"]();

    if (this["rateLimits"][_0x10b31e]) {
      const _0x47311b = this['rateLimits'][_0x10b31e];

      if (_0x47311b > Date["now"]()) {
        console['log']("当前用户 " + _0x10b31e + " 请求过于频繁！");
        throw new common_1["HttpException"]("由于速率限制、当前普通用户限制为" + _0xed47d4 + "秒请求一次、请合理使用！", common_1["HttpStatus"]["BAD_REQUEST"]);
      } else {
        this["rateLimits"][_0x10b31e] = Date["now"]() + Number(_0xed47d4) * 1000;
      }
    } else {
      const _0x284adb = Date["now"]();

      this["rateLimits"][_0x10b31e] = _0x284adb + 1000 * Number(_0xed47d4);
    }
  }

  async ["deductBalance"](_0xd95179) {
    await this['balanceEntity']["createQueryBuilder"]()["update"](balance_entity_1["BalanceEntity"])['set']({
      'balance': () => "balance - 1"
    })['where']("userId = :userId", {
      'userId': _0xd95179["user"]['id']
    })["execute"]();
  }

  async ["test"]() {
    return 1;

    try {
      console["log"]('绘图指令完成');
    } catch (_0xbc4956) {
      console["log"]("error: ", _0xbc4956);
      throw new common_1["HttpException"]("放大单张图片请求失败...", common_1["HttpStatus"]['BAD_REQUEST']);
    }
  }

};
MjService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_2['InjectRepository'])(chatLog_entity_1["ChatLogEntity"])), __param(1, (0, typeorm_2["InjectRepository"])(balance_entity_1['BalanceEntity'])), __metadata("design:paramtypes", [typeorm_1["Repository"], typeorm_1['Repository'], upload_service_1['UploadService'], chatLog_service_1["ChatLogService"], globalConfig_service_1["GlobalConfigService"], fanyi_service_1["FanyiService"], badwords_service_1['BadwordsService']])], MjService);
exports["MjService"] = MjService;