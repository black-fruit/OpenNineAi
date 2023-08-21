'use strict';

var __decorate = this && this['__decorate'] || function (_0x1b76a4, _0x16ff25, _0xb83490, _0x5ce28a) {
  var _0xfbe11 = arguments["length"],
      _0x49574f = _0xfbe11 < 3 ? _0x16ff25 : _0x5ce28a === null ? _0x5ce28a = Object["getOwnPropertyDescriptor"](_0x16ff25, _0xb83490) : _0x5ce28a,
      _0x467a35;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x49574f = Reflect["decorate"](_0x1b76a4, _0x16ff25, _0xb83490, _0x5ce28a);
  } else {
    for (var _0x146074 = _0x1b76a4["length"] - 1; _0x146074 >= 0; _0x146074--) {
      if (_0x467a35 = _0x1b76a4[_0x146074]) {
        _0x49574f = (_0xfbe11 < 3 ? _0x467a35(_0x49574f) : _0xfbe11 > 3 ? _0x467a35(_0x16ff25, _0xb83490, _0x49574f) : _0x467a35(_0x16ff25, _0xb83490)) || _0x49574f;
      }
    }
  }

  _0xfbe11 > 3 && _0x49574f && Object['defineProperty'](_0x16ff25, _0xb83490, _0x49574f);
  return _0x49574f;
},
    __metadata = this && this["__metadata"] || function (_0xfbca3c, _0x40fee2) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0xfbca3c, _0x40fee2);
  }
},
    __param = this && this["__param"] || function (_0x43be1b, _0x4da0f2) {
  return function (_0x3d9537, _0x4e0aa5) {
    _0x4da0f2(_0x3d9537, _0x4e0aa5, _0x43be1b);
  };
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["ChatgptService"] = void 0;

const upload_service_1 = require("./../upload/upload.service"),
      user_service_1 = require("./../user/user.service"),
      nestjs_config_1 = require('nestjs-config'),
      common_1 = require("@nestjs/common"),
      errorMessage_constant_1 = require("../../common/constants/errorMessage.constant"),
      utils_1 = require("../../common/utils"),
      axios_1 = require("axios"),
      userBalance_service_1 = require('../userBalance/userBalance.service'),
      balance_constant_1 = require("../../common/constants/balance.constant"),
      chatLog_service_1 = require('../chatLog/chatLog.service'),
      uuid = require('uuid'),
      config_entity_1 = require("../globalConfig/config.entity"),
      typeorm_1 = require('typeorm'),
      typeorm_2 = require('@nestjs/typeorm'),
      badwords_service_1 = require("../badwords/badwords.service"),
      autoreply_service_1 = require("../autoreply/autoreply.service"),
      gptkeys_entity_1 = require("./gptkeys.entity"),
      globalConfig_service_1 = require('../globalConfig/globalConfig.service'),
      whiteList_entity_1 = require("./whiteList.entity"),
      user_entity_1 = require("../user/user.entity"),
      fanyi_service_1 = require('../fanyi/fanyi.service'),
      dayjs = require("dayjs"),
      app_entity_1 = require("../app/app.entity");

let ChatgptService = class ChatgptService {
  constructor(_0x3e4874, _0x1b6784, _0x15fa25, _0x23119c, _0x7dc9f0, _0x19c65e, _0x5471f7, _0x44f738, _0x4414a7, _0x3279bc, _0x7b4c4e, _0x53790a, _0x1ea06b, _0x4187be) {
    this['userEntity'] = _0x3e4874;
    this['gptKeysEntity'] = _0x1b6784;
    this["configEntity"] = _0x15fa25;
    this["whiteListEntity"] = _0x23119c;
    this["appEntity"] = _0x7dc9f0;
    this["configService"] = _0x19c65e;
    this['userBalanceService'] = _0x5471f7;
    this["chatLogService"] = _0x44f738;
    this["userService"] = _0x4414a7;
    this["uploadService"] = _0x3279bc;
    this["badwordsService"] = _0x7b4c4e;
    this["autoreplyService"] = _0x53790a;
    this["globalConfigService"] = _0x1ea06b;
    this["fanyiService"] = _0x4187be;
    this["whiteListUser"] = [];
    this["keyPool"] = {
      'list3': [],
      'list4': []
    };
  }

  async ["onModuleInit"]() {
    await this["getAllKeyList"]();

    let _0x11cf53 = await (0, utils_1['importDynamic'])("chatgpt-nine-ai"),
        _0x3a6c94 = await (0, utils_1["importDynamic"])("@keyv/redis"),
        _0x276725 = await (0, utils_1['importDynamic'])('keyv');

    _0x11cf53 = (_0x11cf53 === null || _0x11cf53 === void 0 ? void 0 : _0x11cf53["default"]) ? _0x11cf53['default'] : _0x11cf53;
    _0x3a6c94 = (_0x3a6c94 === null || _0x3a6c94 === void 0 ? void 0 : _0x3a6c94['default']) ? _0x3a6c94["default"] : _0x3a6c94;
    _0x276725 = (_0x276725 === null || _0x276725 === void 0 ? void 0 : _0x276725["default"]) ? _0x276725['default'] : _0x276725;

    const {
      "ChatGPTAPI": _0x2ab22a,
      "ChatGPTError": _0x31db9e,
      "ChatGPTUnofficialProxyAPI": _0x312e64
    } = _0x11cf53,
          _0x253227 = +process["env"]["REDIS_PORT"],
          _0xdb5069 = process["env"]['REDIS_HOST'],
          _0x2fba8b = process['env']['REDIS_PASSWORD'],
          _0x60495d = process["env"]["REDIS_USER"],
          _0x2eda48 = "redis://" + (_0x60495d || '') + ':' + (_0x2fba8b || '') + '@' + _0xdb5069 + ':' + _0x253227,
          _0x4b3f8d = new _0x3a6c94(_0x2eda48),
          _0x156708 = new _0x276725({
      'store': _0x4b3f8d,
      'namespace': 'nineai-chatlog'
    });

    this["api"] = new _0x2ab22a({
      'apiKey': "nine-ai-default-key",
      'apiBaseUrl': "https://api.openai.com/v1",
      'messageStore': _0x156708
    });
  }

  async ["getRandomGptKeyDetail"](_0x5ae450) {
    const {
      "list3": _0x262511,
      "list4": _0x362619
    } = this['keyPool'];

    if (_0x262511["length"] === 0 && _0x362619['length'] === 0) {
      throw new common_1['HttpException']("未配置有效key、请先前往后台系统配置！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    if (_0x5ae450 === 3) {
      if (_0x262511['length'] === 0) {
        throw new common_1["HttpException"]("未配置[卡池3]的有效key、请先前往后台系统配置！", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      return (0, utils_1['selectKeyWithWeight'])(_0x262511);
    }

    if (_0x5ae450 === 4) {
      if (_0x362619["length"] === 0) {
        const _0x19e5f4 = await this["globalConfigService"]["getConfigs"](["openaiaAtoDowngrade"]);

        if (Number(_0x19e5f4) !== 1) {
          throw new common_1["HttpException"]("未配置[卡池4]的有效key、请先前往后台系统配置！", common_1["HttpStatus"]['BAD_REQUEST']);
        }

        common_1['Logger']["error"]('有4的权限但是卡池没有配置、降级为3的卡池');

        if (_0x262511["length"] === 0) {
          throw new common_1["HttpException"]('未配置有效key、请先前往后台系统配置！', common_1["HttpStatus"]["BAD_REQUEST"]);
        } else {
          return (0, utils_1["selectKeyWithWeight"])(_0x262511);
        }
      } else {
        return (0, utils_1["selectKeyWithWeight"])(_0x362619);
      }
    }
  }

  async ['getGptParams'](_0x8afc73, _0x1ea0bb, _0x50f1ad) {
    const {
      "parentMessageId": parentMessageId = 0,
      "temperature": temperature = 0.5,
      "top_p": _0x1f28a8,
      "model": _0x258650 = 3
    } = _0x1ea0bb,
          _0xc7ab39 = await this["getModelAndKeyFromUser"](_0x8afc73, _0x258650),
          {
      "openaiTimeoutMs": _0x5e927e
    } = _0xc7ab39,
          _0x371896 = await this["globalConfigService"]['getConfigs'](["openaiTimeoutMs"]),
          _0x121ba0 = _0x5e927e || _0x371896 || 100000,
          {
      "model": _0x551e16,
      "key": _0x348cd1
    } = _0xc7ab39,
          _0x26221f = {
      'parentMessageId': parentMessageId,
      'timeoutMs': +_0x121ba0,
      'completionParams': {
        'model': _0x551e16,
        'temperature': temperature
      }
    };

    _0x50f1ad && (_0x26221f['systemMessage'] = _0x50f1ad);
    return {
      'options': _0x26221f,
      'detailKeyInfo': _0xc7ab39
    };
  }

  async ["chatProcess"](_0x36c00a, _0x2ad84d, _0x21de94) {
    var _0x4ffa71, _0x252a35, _0x483b7b, _0x2c2d27, _0x185ffd;

    const _0x19df55 = _0x2ad84d["abortController"],
          {
      "options": options = {},
      "systemMessage": _0x39f566,
      "appId": _0x487bdc,
      "cusromPrompt": _0x1f12bf
    } = _0x36c00a,
          {
      "prompt": _0x3fa50b
    } = _0x36c00a,
          {
      "groupId": _0xc15399,
      "temperature": temperature = 0.5,
      "usingNetwork": _0xd066e3
    } = options,
          {
      "model": model = 3
    } = options;
    await this["userService"]["checkUserStatus"](_0x2ad84d['user']['id']);
    await this["userBalanceService"]["validateBalance"](_0x2ad84d["user"]['id'], (options === null || options === void 0 ? void 0 : options["model"]) === 4 ? 'model4' : "model3", 1);
    _0x21de94 && _0x21de94['setHeader']('Content-type', "application/octet-stream; charset=utf-8");

    if (await this["badwordsService"]['checkBadWords'](_0x3fa50b)) {
      const _0x52fbbb = {
        'message': "内容中含有敏感词汇、我们已对您的账号进行标记、多次违规将触发账号永久封禁、请注意您的言论！",
        'code': 500
      };

      if (_0x21de94) {
        _0x21de94["write"](JSON["stringify"](_0x52fbbb));

        return _0x21de94["end"]();
      } else {
        throw new common_1['HttpException'](_0x52fbbb["message"], common_1["HttpStatus"]["BAD_REQUEST"]);
      }
    }

    const _0x22b150 = await this['autoreplyService']['checkAutoReply'](_0x3fa50b);

    if (_0x22b150 && _0x21de94) {
      const _0x38e1f8 = {
        'message': _0x22b150,
        'code': 500
      };

      _0x21de94["write"](JSON["stringify"](_0x38e1f8));

      return _0x21de94["end"]();
    }

    let _0x1b2970 = _0x39f566;

    if (_0x487bdc) {
      const _0x146cac = await this["appEntity"]["findOne"]({
        'where': {
          'id': _0x487bdc,
          'status': (0, typeorm_1['In'])([1, 3, 4, 5])
        }
      });

      if (!_0x146cac) {
        throw new common_1["HttpException"]('你当前使用的应用已被下架、请删除当前对话开启新的对话吧！', common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      _0x146cac["preset"] && (_0x1b2970 = _0x146cac['preset']);
    } else {
      if (_0x1f12bf) {
        _0x1b2970 = _0x39f566;
      } else {
        const _0x370733 = new Date()["toISOString"]()["split"]('T')[0],
              _0x29ee98 = await this['globalConfigService']['getConfigs'](["systemPreMessage"]);

        _0x1b2970 = _0x29ee98 + ("\n Respond using markdown. \n Current date: " + _0x370733);
      }
    }

    let _0x5e1c6f = '';

    if (_0xd066e3) {
      _0x5e1c6f = await (0, utils_1["compileNetwork"])(_0x3fa50b);

      const _0x48e7a8 = new Date()["toISOString"]()["split"]('T')[0],
            _0x3dd72b = await this['globalConfigService']["getConfigs"](["systemPreMessage"]);

      _0x1b2970 = _0x3dd72b + ("\n Respond using markdown. \n Current date: " + _0x48e7a8);
    }

    const _0x2990dd = await this["getGptParams"](_0x2ad84d['user']['id'], options, _0x1b2970),
          {
      "options": _0x42459f,
      "detailKeyInfo": _0x36b775
    } = _0x2990dd,
          {
      "key": _0x2140a1,
      "maxToken": _0x76c7f5,
      "maxTokenRes": _0x17783e,
      "proxyUrl": _0x5c3a9b
    } = await this['formatModelToken'](_0x36b775);

    this["api"]["apiKey"] = (0, utils_1["removeSpecialCharacters"])(_0x2140a1);
    this["api"]["apiBaseUrl"] = _0x5c3a9b + "/v1";
    this["api"]['maxModelTokens'] = _0x76c7f5;
    this['api']['maxResponseTokens'] = _0x17783e;
    common_1["Logger"]["debug"](_0x36b775['model'] + "->userId " + _0x2ad84d["user"]['id'] + "-> maxModelTokens: " + _0x76c7f5 + " maxResponseTokens: " + _0x17783e + " ", "ChatgptService");
    _0x21de94 && _0x21de94["status"](200);
    let _0x5be1ce = null;

    try {
      if (_0x21de94) {
        let _0x109ccd = null,
            _0x353641 = false;

        _0x21de94['on']("close", async () => {
          var _0x153781, _0x5287b4, _0x14c8d9, _0xc19572;

          if (_0x353641) {
            return;
          }

          _0x19df55['abort']();

          const _0x3d7e6c = (await this["api"]["getTokenCount"](_0x3fa50b)) || 0,
                _0x32f780 = await this["api"]["getTokenCount"]((_0x109ccd === null || _0x109ccd === void 0 ? void 0 : _0x109ccd["text"]) || ''),
                _0x5b8411 = _0x3d7e6c + _0x32f780,
                _0x23d199 = (0, utils_1["getClientIp"])(_0x2ad84d);

          await this["chatLogService"]["saveChatLog"]({
            'appId': _0x487bdc,
            'curIp': _0x23d199,
            'userId': _0x2ad84d['user']['id'],
            'type': balance_constant_1['DeductionKey']["CHAT_TYPE"],
            'prompt': _0x3fa50b,
            'answer': '',
            'promptTokens': _0x3d7e6c,
            'completionTokens': 0,
            'totalTokens': _0x3d7e6c,
            'model': (_0x153781 = _0x109ccd === null || _0x109ccd === void 0 ? void 0 : _0x109ccd['detail']) === null || _0x153781 === void 0 ? void 0 : _0x153781["model"],
            'role': "user",
            'groupId': _0xc15399,
            'requestOptions': JSON["stringify"]({
              'options': null,
              'prompt': _0x3fa50b
            })
          });
          await this["chatLogService"]['saveChatLog']({
            'appId': _0x487bdc,
            'curIp': _0x23d199,
            'userId': _0x2ad84d["user"]['id'],
            'type': balance_constant_1["DeductionKey"]["CHAT_TYPE"],
            'prompt': _0x3fa50b,
            'answer': _0x109ccd === null || _0x109ccd === void 0 ? void 0 : _0x109ccd["text"],
            'promptTokens': _0x3d7e6c,
            'completionTokens': _0x32f780,
            'totalTokens': _0x5b8411,
            'model': (_0x5287b4 = _0x109ccd === null || _0x109ccd === void 0 ? void 0 : _0x109ccd["detail"]) === null || _0x5287b4 === void 0 ? void 0 : _0x5287b4["model"],
            'role': 'assistant',
            'groupId': _0xc15399,
            'requestOptions': JSON["stringify"]({
              'options': {
                'model': (_0x14c8d9 = _0x109ccd === null || _0x109ccd === void 0 ? void 0 : _0x109ccd['detail']) === null || _0x14c8d9 === void 0 ? void 0 : _0x14c8d9['model'],
                'temperature': temperature
              },
              'prompt': _0x3fa50b
            }),
            'conversationOptions': JSON["stringify"]({
              'conversationId': _0x109ccd === null || _0x109ccd === void 0 ? void 0 : _0x109ccd["conversationId"],
              'model': (_0xc19572 = _0x109ccd === null || _0x109ccd === void 0 ? void 0 : _0x109ccd["detail"]) === null || _0xc19572 === void 0 ? void 0 : _0xc19572['model'],
              'parentMessageId': _0x109ccd === null || _0x109ccd === void 0 ? void 0 : _0x109ccd['id'],
              'temperature': temperature
            })
          });
          let _0x42948f = 3;
          [3, 4]["includes"](model) ? _0x42948f = model : _0x42948f = model['includes'](4) ? 4 : 3;
          await this["userBalanceService"]["deductFromBalance"](_0x2ad84d['user']['id'], "model" + _0x42948f, 1, _0x5b8411);
        });

        let _0x30b16c = true;
        _0x5be1ce = await this["api"]["sendMessage"](_0xd066e3 ? _0x5e1c6f : _0x3fa50b, Object["assign"](Object['assign']({}, _0x42459f), {
          'onProgress': _0x4c0898 => {
            _0x21de94["write"](_0x30b16c ? JSON["stringify"](_0x4c0898) : "\n" + JSON["stringify"](_0x4c0898));

            _0x30b16c = false;
            _0x109ccd = _0x4c0898;
          },
          'abortSignal': _0x19df55["signal"]
        }));
        _0x353641 = true;
      } else {
        _0x5be1ce = await this["api"]["sendMessage"](_0xd066e3 ? _0x5e1c6f : _0x3fa50b, _0x42459f);
      }

      const {
        "prompt_tokens": prompt_tokens = 0,
        "completion_tokens": completion_tokens = 0,
        "total_tokens": total_tokens = 0
      } = (_0x4ffa71 = _0x5be1ce === null || _0x5be1ce === void 0 ? void 0 : _0x5be1ce["detail"]) === null || _0x4ffa71 === void 0 ? void 0 : _0x4ffa71["usage"];
      let _0x4c894a = 3;
      [3, 4]["includes"](model) ? _0x4c894a = model : _0x4c894a = model["includes"](4) ? 4 : 3;
      await this["userBalanceService"]["deductFromBalance"](_0x2ad84d["user"]['id'], "model" + _0x4c894a, 1, total_tokens);

      const _0x185e8d = (0, utils_1["getClientIp"])(_0x2ad84d);

      await this["chatLogService"]['saveChatLog']({
        'appId': _0x487bdc,
        'curIp': _0x185e8d,
        'userId': _0x2ad84d["user"]['id'],
        'type': balance_constant_1["DeductionKey"]["CHAT_TYPE"],
        'prompt': _0x3fa50b,
        'answer': '',
        'promptTokens': prompt_tokens,
        'completionTokens': 0,
        'totalTokens': prompt_tokens,
        'model': (_0x252a35 = _0x5be1ce === null || _0x5be1ce === void 0 ? void 0 : _0x5be1ce["detail"]) === null || _0x252a35 === void 0 ? void 0 : _0x252a35["model"],
        'role': "user",
        'groupId': _0xc15399,
        'requestOptions': JSON["stringify"]({
          'options': null,
          'prompt': _0x3fa50b
        })
      });
      await this["chatLogService"]["saveChatLog"]({
        'appId': _0x487bdc,
        'curIp': _0x185e8d,
        'userId': _0x2ad84d['user']['id'],
        'type': balance_constant_1['DeductionKey']['CHAT_TYPE'],
        'prompt': _0x3fa50b,
        'answer': _0x5be1ce === null || _0x5be1ce === void 0 ? void 0 : _0x5be1ce["text"],
        'promptTokens': prompt_tokens,
        'completionTokens': completion_tokens,
        'totalTokens': total_tokens,
        'model': (_0x483b7b = _0x5be1ce === null || _0x5be1ce === void 0 ? void 0 : _0x5be1ce["detail"]) === null || _0x483b7b === void 0 ? void 0 : _0x483b7b['model'],
        'role': "assistant",
        'groupId': _0xc15399,
        'requestOptions': JSON["stringify"]({
          'options': {
            'model': (_0x2c2d27 = _0x5be1ce === null || _0x5be1ce === void 0 ? void 0 : _0x5be1ce["detail"]) === null || _0x2c2d27 === void 0 ? void 0 : _0x2c2d27["model"],
            'temperature': temperature
          },
          'prompt': _0x3fa50b
        }),
        'conversationOptions': JSON["stringify"]({
          'conversationId': _0x5be1ce["conversationId"],
          'model': (_0x185ffd = _0x5be1ce === null || _0x5be1ce === void 0 ? void 0 : _0x5be1ce['detail']) === null || _0x185ffd === void 0 ? void 0 : _0x185ffd["model"],
          'parentMessageId': _0x5be1ce['id'],
          'temperature': temperature
        })
      });
      common_1["Logger"]["debug"]("本次使用的: model: " + model + " key -> " + _0x2140a1, "ChatgptService");

      const _0x32b6ec = await this["userBalanceService"]["queryUserBalance"](_0x2ad84d['user']['id']);

      _0x5be1ce["detail"]["userBanance"] = Object["assign"]({}, _0x32b6ec);
      return _0x21de94 ? _0x21de94["write"]("\n" + JSON["stringify"](_0x5be1ce)) : _0x5be1ce["text"];
    } catch (_0x5ebf21) {
      console["log"]("openai-error", _0x5ebf21);
      const _0x47b8d6 = _0x5ebf21["statusCode"];

      if (_0x5ebf21["status"] && _0x5ebf21["status"] === 402) {
        const _0xd6c28f = {
          'message': _0x5ebf21["message"],
          'code': 402
        };

        if (_0x21de94) {
          return _0x21de94["write"](JSON["stringify"](_0xd6c28f));
        } else {
          throw new common_1["HttpException"](_0x5ebf21["message"], common_1["HttpStatus"]["PAYMENT_REQUIRED"]);
        }
      }

      if (!_0x47b8d6) {
        if (_0x21de94) {
          return _0x21de94["write"](JSON["stringify"]({
            'message': _0x5ebf21['message'],
            'code': 500
          }));
        } else {
          throw new common_1["HttpException"](_0x5ebf21['message'], common_1["HttpStatus"]['BAD_REQUEST']);
        }
      }

      (_0x5ebf21 === null || _0x5ebf21 === void 0 ? void 0 : _0x5ebf21['statusCode']) === 429 && _0x5ebf21['message']["includes"]("You exceeded your current quota, please check your plan and billing details.") && (await this['lockKey'](_0x2140a1));
      _0x47b8d6 === 400 && console["log"]('上下文过长错误！！！！', _0x5ebf21, _0x5ebf21["message"]);

      const _0x14ee8 = errorMessage_constant_1["OpenAiErrorCodeMessage"][_0x47b8d6] ? errorMessage_constant_1["OpenAiErrorCodeMessage"][_0x47b8d6] : "服务异常、请重新试试吧！！！",
            _0x37e539 = {
        'message': _0x14ee8 || "Please check the back-end console",
        'code': _0x47b8d6 === 401 ? 400 : _0x47b8d6 || 500
      };

      if (_0x21de94) {
        return _0x21de94["write"](JSON["stringify"](_0x37e539));
      } else {
        throw new common_1["HttpException"](_0x37e539['message'], common_1["HttpStatus"]["BAD_REQUEST"]);
      }
    } finally {
      _0x21de94 && _0x21de94["end"]();
    }
  }

  async ['draw'](_0x583a5a, _0x38191d) {
    var _0x553dac, _0x408b93, _0x167bf5, _0x13d061;

    if (await this['badwordsService']["checkBadWords"](_0x583a5a["prompt"])) {
      throw new common_1["HttpException"]("您的绘画描述词中含有不合规信息、请检查后重新提交！", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    common_1['Logger']["log"]("draw paompt info <======*******======> " + _0x583a5a["prompt"], "DrawService");
    await this['userService']['checkUserStatus'](_0x38191d['user']['id']);
    await this['userBalanceService']["validateBalance"](_0x38191d["user"]['id'], balance_constant_1["DeductionKey"]["PAINT_TYPE"], _0x583a5a['n'] || 1);

    const _0x1d7176 = (await this['globalConfigService']['getConfigs'](["openaiBaseUrl"])) || "https://api.openai.com",
          _0x45d212 = _0x1d7176 + "/v1/images/generations";

    let _0x3fdc70 = [];

    const _0x406f4a = await this["getRandomGptKeyDetail"](3),
          {
      "key": _0x2495de
    } = _0x406f4a;

    try {
      const _0x2cc032 = await axios_1["default"]["post"](_0x45d212, Object['assign'](Object['assign']({}, _0x583a5a), {
        'response_format': 'b64_json'
      }), {
        'headers': {
          'Authorization': "Bearer " + _0x2495de
        }
      });

      _0x3fdc70 = _0x2cc032["data"]["data"];
    } catch (_0x3b020e) {
      console["log"]("openai-draw", _0x3b020e);

      const _0x4ab971 = ((_0x553dac = _0x3b020e === null || _0x3b020e === void 0 ? void 0 : _0x3b020e["response"]) === null || _0x553dac === void 0 ? void 0 : _0x553dac["status"]) || 500,
            _0x51efb6 = (_0x13d061 = (_0x167bf5 = (_0x408b93 = _0x3b020e === null || _0x3b020e === void 0 ? void 0 : _0x3b020e['response']) === null || _0x408b93 === void 0 ? void 0 : _0x408b93["data"]) === null || _0x167bf5 === void 0 ? void 0 : _0x167bf5["error"]) === null || _0x13d061 === void 0 ? void 0 : _0x13d061["message"];

      if (_0x4ab971 === 429) {
        throw new common_1["HttpException"]("当前请求已过载、请稍等会儿再试试吧！", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      if (_0x4ab971 === 400 || _0x51efb6["includes"]("Your request was rejected as a result of our safety system")) {
        throw new common_1["HttpException"]("您的请求已被系统拒绝。您的提示可能存在一些非法的文本。", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      if (_0x4ab971 === 500) {
        throw new common_1["HttpException"]("绘制图片失败，请检查你的提示词是否有非法描述！", common_1['HttpStatus']["BAD_REQUEST"]);
      }

      if (_0x4ab971 === 401) {
        throw new common_1["HttpException"]("绘制图片失败，此次绘画被拒绝了！", common_1['HttpStatus']['BAD_REQUEST']);
      }

      throw new common_1["HttpException"]('绘制图片失败，请稍后试试吧！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x2995dc = [];

    for (const _0x3f9939 of _0x3fdc70) {
      const _0x5a729b = uuid['v4']()['slice'](0, 10) + ".png",
            _0x392de0 = Buffer["from"](_0x3f9939['b64_json'], "base64");

      _0x2995dc["push"](this["uploadService"]["uploadFile"]({
        'filename': _0x5a729b,
        'buffer': _0x392de0
      }));
    }

    const _0xb58ee4 = await Promise["all"](_0x2995dc);

    await this["userBalanceService"]['deductFromBalance'](_0x38191d["user"]['id'], "model3", _0x583a5a['n'], _0x583a5a['n'] || 1);

    const _0x1c5a00 = (0, utils_1["getClientIp"])(_0x38191d),
          _0x520f63 = [],
          _0x16b9b5 = await this["uploadService"]["getUploadType"](),
          [_0x143ac, _0x3901a4] = _0x583a5a["size"]["split"]('x');

    _0xb58ee4['forEach'](_0x5c3b45 => {
      _0x520f63["push"](this["chatLogService"]["saveChatLog"]({
        'curIp': _0x1c5a00,
        'userId': _0x38191d['user']['id'],
        'type': balance_constant_1["DeductionKey"]['PAINT_TYPE'],
        'prompt': _0x583a5a["prompt"],
        'answer': _0x5c3b45,
        'fileInfo': JSON["stringify"]({
          'cosType': _0x16b9b5,
          'width': _0x143ac,
          'height': _0x3901a4,
          'cosUrl': _0x5c3b45
        }),
        'promptTokens': 0,
        'completionTokens': 0,
        'totalTokens': 0,
        'model': "DALL-E2"
      }));
    });

    await Promise["all"](_0x520f63);
    return _0xb58ee4;
  }

  async ["getKeyDetail"](_0x3f28f) {
    var _0x2c336a;

    const _0x293a70 = (await this["globalConfigService"]["getConfigs"](["openaiBaseUrl"])) || "https://api.openai.com";

    try {
      const _0x381eba = {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + _0x3f28f
      },
            _0x2232de = dayjs()['format']("YYYY-MM-DD"),
            _0x82a64b = dayjs()['subtract'](99, "day")["format"]("YYYY-MM-DD"),
            _0xa8b4d7 = await axios_1["default"]['get'](_0x293a70 + "/v1/dashboard/billing/usage?start_date=" + _0x82a64b + '&end_date=' + _0x2232de, {
        'headers': _0x381eba
      }),
            _0x4f8162 = (_0x2c336a = _0xa8b4d7 === null || _0xa8b4d7 === void 0 ? void 0 : _0xa8b4d7['data']['total_usage']) !== null && _0x2c336a !== void 0 ? _0x2c336a : 0,
            _0x222b82 = await axios_1["default"]["get"](_0x293a70 + "/v1/dashboard/billing/subscription", {
        'headers': _0x381eba
      }),
            {
        "has_payment_method": _0x855fa1,
        "hard_limit_usd": _0x23fb7a,
        "access_until": _0x53af57
      } = _0x222b82['data'],
            _0xcf0159 = (_0x4f8162 / 100)["toFixed"](2),
            _0x36230d = Number(_0x23fb7a)["toFixed"](0);

      return {
        'totalAmount': _0x36230d + '$',
        'useAmount': _0xcf0159 + '$',
        'balance': (Number(_0x36230d) - Number(_0xcf0159))["toFixed"](2) + '$',
        'isBindCard': _0x855fa1,
        'expirDate': dayjs(_0x53af57 * 1000)["format"]("YYYY年M月D日"),
        'status': 1
      };
    } catch (_0xa2a213) {
      return {
        'status': -1
      };
    }
  }

  async ["getModelAndKeyFromUser"](_0x109270, _0xb76987) {
    let _0x495020 = {};
    _0xb76987 === 3 ? _0x495020 = await this["getRandomGptKeyDetail"](3) : _0x495020 = await this["getRandomGptKeyDetail"](4);
    const {
      "model": _0x147e39,
      "key": _0x426355,
      "id": _0x2eaa8a
    } = _0x495020;
    await this["gptKeysEntity"]['createQueryBuilder']()["update"](gptkeys_entity_1["GptKeysEntity"])['set']({
      'useCount': () => "useCount + 1"
    })["where"]("id = :id", {
      'id': _0x2eaa8a
    })["execute"]();
    return _0x495020;
  }

  async ['getGptModelList'](_0x494d35) {
    const _0x4e39a7 = (await this["globalConfigService"]['getConfigs'](["openaiBaseUrl"])) || "https://api.openai.com",
          _0x448d8b = _0x4e39a7 + "/v1/models";

    try {
      const _0x4fd75 = await axios_1["default"]["get"](_0x448d8b, {
        'headers': {
          'Authorization': "Bearer " + _0x494d35
        }
      }),
            _0xc39930 = _0x4fd75["data"]["data"]["map"](_0x3cf325 => _0x3cf325['id']),
            _0x369d48 = ["gpt-4", 'gpt-4-0314', "gpt-4-0613", "gpt-3.5-turbo", "gpt-3.5-turbo-0301", 'gpt-3.5-turbo-16k-0613', "gpt-3.5-turbo-16k", "code-davinci-002", 'ada', "davinci"],
            _0x46412e = _0x369d48['filter'](_0x4a55f0 => _0xc39930["includes"](_0x4a55f0));

      return _0x46412e;
    } catch (_0xae5f31) {
      throw new common_1["HttpException"]("获取模型列表失败，请检查你的key是否正确！", common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["getKeyList"](_0x1a2966, _0x1b2713) {
    try {
      const _0x230cc3 = {},
            {
        "page": page = 1,
        "size": size = 10,
        "key": _0xd88bf2,
        "status": _0x547350,
        "keyStatus": _0x5927aa,
        "model": _0x331f8
      } = _0x1a2966;
      _0xd88bf2 && (_0x230cc3["key"] = (0, typeorm_1["Like"])('%' + _0xd88bf2 + '%'));
      _0x5927aa && (_0x230cc3['keyStatus'] = _0x5927aa);
      _0x331f8 && (_0x230cc3["model"] = _0x331f8);
      [0, 1, '0', '1', '-1', -1]["includes"](_0x547350) && (_0x230cc3["status"] = _0x547350);
      const [_0x1ea6be, _0x363fb7] = await this["gptKeysEntity"]['findAndCount']({
        'skip': (page - 1) * size,
        'take': size,
        'where': _0x230cc3,
        'order': {
          'id': "DESC"
        }
      }),
            _0x28edb9 = [];

      _0x1ea6be["forEach"](_0x36a151 => _0x28edb9['push'](this["getKeyDetail"](_0x36a151['key'])));

      const _0x29e796 = await Promise['all'](_0x28edb9);

      _0x1ea6be['forEach']((_0x58bb9b, _0x4a6e86) => _0x58bb9b["keyDetail"] = _0x29e796[_0x4a6e86]);

      _0x1b2713["user"]["role"] !== "super" && _0x1ea6be["forEach"](_0x47b3fe => {
        _0x47b3fe['key'] = _0x47b3fe['key'] ? (0, utils_1["hideString"])(_0x47b3fe["key"]) : '';
        _0x47b3fe["openaiProxyUrl"] = _0x47b3fe['openaiProxyUrl'] ? (0, utils_1["hideString"])(_0x47b3fe["openaiProxyUrl"]) : '';
      });
      return {
        'rows': _0x1ea6be,
        'count': _0x363fb7
      };
    } catch (_0x181ae7) {
      console['log']("error: ", _0x181ae7);
      throw new common_1["HttpException"]("查询key列表失败", common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["addKey"](_0x487a92) {
    const {
      "key": _0x217a3b
    } = _0x487a92,
          _0x4d4a54 = await this["gptKeysEntity"]['findOne']({
      'where': {
        'key': _0x217a3b
      }
    });

    if (_0x4d4a54) {
      throw new common_1["HttpException"]('key已存在', common_1['HttpStatus']['BAD_REQUEST']);
    }

    const _0x7d9cc8 = await this['gptKeysEntity']["save"](_0x487a92);

    await this["getAllKeyList"]();
    return _0x7d9cc8;
  }

  async ['bulkCreateKey'](_0x1cc3c3) {
    const {
      "keyList": _0x4c5df0
    } = _0x1cc3c3,
          _0x161c0d = await this["gptKeysEntity"]["find"]({
      'where': {
        'key': (0, typeorm_1['In'])(_0x4c5df0)
      }
    }),
          _0x333968 = _0x161c0d['map'](_0x1ae13b => _0x1ae13b["key"]),
          _0x259964 = _0x4c5df0['filter'](_0x48f1c8 => !_0x333968["includes"](_0x48f1c8)),
          _0x4076bf = _0x259964['map'](_0x33adac => {
      return {
        'key': _0x33adac,
        'status': 1,
        'model': "gpt-3.5-turbo-16k-0613"
      };
    });

    let _0x36739f = "本次成功添加" + _0x4076bf["length"] + "个key";

    _0x333968['length'] && (_0x36739f += "、重复key" + _0x333968["length"] + '个已被排除！');
    return _0x36739f;
  }

  async ['updateKey'](_0x51a40d) {
    const {
      "id": _0x4fd947
    } = _0x51a40d,
          _0x5d1343 = await this['gptKeysEntity']["findOne"]({
      'where': {
        'id': _0x4fd947
      }
    });

    if (!_0x5d1343) {
      throw new common_1["HttpException"]("key不存在", common_1['HttpStatus']['BAD_REQUEST']);
    }

    const _0x22e857 = await this["gptKeysEntity"]["update"]({
      'id': _0x4fd947
    }, _0x51a40d);

    if (_0x22e857["affected"] > 0) {
      await this["getAllKeyList"]();
      return "修改成功";
    } else {
      throw new common_1['HttpException']("修改失败", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["deleteKey"](_0x2e8258) {
    const {
      "id": _0x5d20fe
    } = _0x2e8258,
          _0x33b851 = await this["gptKeysEntity"]["findOne"]({
      'where': {
        'id': _0x5d20fe
      }
    });

    if (!_0x33b851) {
      throw new common_1["HttpException"]("key不存在", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    const _0x35fa37 = await this["gptKeysEntity"]["delete"]({
      'id': _0x5d20fe
    });

    if (_0x35fa37["affected"] > 0) {
      await this["getAllKeyList"]();
      return "删除成功";
    } else {
      throw new common_1['HttpException']("删除失败", common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["getAllKeyList"]() {
    const _0x48b297 = await this["gptKeysEntity"]['find']({
      'where': {
        'status': 1
      },
      'select': ['id', "key", "weight", "model", "maxModelTokens", "maxResponseTokens", 'openaiProxyUrl', "openaiTimeoutMs"]
    }),
          _0x5aeb8d = _0x48b297['filter'](_0x3fa766 => _0x3fa766["model"]["includes"]('gpt-3')),
          _0x9557e8 = _0x48b297["filter"](_0x1bfab2 => _0x1bfab2["model"]["includes"]('gpt-4'));

    this["keyPool"] = {
      'list3': _0x5aeb8d,
      'list4': _0x9557e8
    };
  }

  async ['getUserWhiteList']() {
    const _0x315bee = await this['whiteListEntity']['find']({
      'where': {
        'status': 1,
        'count': (0, typeorm_1["MoreThan"])(0)
      },
      'select': ['userId']
    });

    this["whiteListUser"] = _0x315bee["map"](_0x414265 => _0x414265['userId']);
  }

  async ['addWhiteUser'](_0x458f33) {
    const {
      "userId": _0x31a63e,
      "count": _0x1ea804
    } = _0x458f33,
          _0x333d2f = await this["whiteListEntity"]["findOne"]({
      'where': {
        'userId': _0x31a63e
      }
    });

    if (_0x333d2f) {
      throw new common_1["HttpException"]("用户已在白名单中！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x98815a = await this["whiteListEntity"]["save"](_0x458f33);

    await this["getUserWhiteList"]();
    return _0x98815a;
  }

  async ['updateWhiteUser'](_0x5f3d9b) {
    const {
      "id": _0x349ad6
    } = _0x5f3d9b,
          _0xec77ed = await this["whiteListEntity"]["findOne"]({
      'where': {
        'id': _0x349ad6
      }
    });

    if (!_0xec77ed) {
      throw new common_1["HttpException"]("当前记录不存在！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x43e8c3 = await this["whiteListEntity"]["update"]({
      'id': _0x349ad6
    }, _0x5f3d9b);

    if (_0x43e8c3["affected"] > 0) {
      await this["getUserWhiteList"]();
      return "修改白名单成功";
    } else {
      throw new common_1['HttpException']('修改白名单失败', common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["getWhiteListUser"](_0x237378, _0x286c0b) {
    const {
      "page": page = 1,
      "size": size = 10
    } = _0x237378,
          [_0x208bbc, _0x423cdb] = await this["whiteListEntity"]["findAndCount"]({
      'skip': (page - 1) * size,
      'take': size,
      'order': {
        'id': 'DESC'
      }
    }),
          _0x59e6a5 = _0x208bbc['map'](_0x812260 => _0x812260["userId"]),
          _0x402185 = await this['userEntity']["find"]({
      'where': {
        'id': (0, typeorm_1['In'])(_0x59e6a5)
      }
    });

    _0x208bbc["forEach"](_0x2ff15b => {
      var _0x1efab2, _0x1f7cdc;

      const _0x1465cd = _0x402185["find"](_0x45828f => _0x45828f['id'] === _0x2ff15b["userId"]);

      _0x2ff15b['username'] = (_0x1efab2 = _0x1465cd === null || _0x1465cd === void 0 ? void 0 : _0x1465cd["username"]) !== null && _0x1efab2 !== void 0 ? _0x1efab2 : '';
      _0x2ff15b["email"] = (_0x1f7cdc = _0x1465cd === null || _0x1465cd === void 0 ? void 0 : _0x1465cd["email"]) !== null && _0x1f7cdc !== void 0 ? _0x1f7cdc : '';
    });

    _0x286c0b['user']["role"] !== "super" && _0x208bbc['forEach'](_0x5ec31e => _0x5ec31e["email"] = (0, utils_1["maskEmail"])(_0x5ec31e["email"]));
    return {
      'rows': _0x208bbc,
      'count': _0x423cdb
    };
  }

  async ["lockKey"](_0x146ff3) {
    common_1["Logger"]["error"]("key: " + _0x146ff3 + " 欠费，已被系统自动锁定");
    await this["getAllKeyList"]();
  }

  async ['formatModelToken'](_0x1595c4) {
    const {
      "openaiModel3MaxTokens": openaiModel3MaxTokens = 0,
      "openaiModel3MaxTokensRes": openaiModel3MaxTokensRes = 0,
      "openaiModel3MaxTokens16k": openaiModel3MaxTokens16k = 0,
      "openaiModel3MaxTokens16kRes": openaiModel3MaxTokens16kRes = 0,
      "openaiModel4MaxTokens": openaiModel4MaxTokens = 0,
      "openaiModel4MaxTokensRes": openaiModel4MaxTokensRes = 0,
      "openaiModel4MaxTokens32k": openaiModel4MaxTokens32k = 0,
      "openaiModel4MaxTokens32kRes": openaiModel4MaxTokens32kRes = 0,
      "openaiBaseUrl": openaiBaseUrl = ''
    } = await this['globalConfigService']["getConfigs"](["openaiModel3MaxTokens", 'openaiModel3MaxTokensRes', 'openaiModel3MaxTokens16k', "openaiModel3MaxTokens16kRes", "openaiModel4MaxTokens", "openaiModel4MaxTokensRes", "openaiModel4MaxTokens32k", 'openaiModel4MaxTokens32kRes', "openaiBaseUrl"]);
    let _0x4fa2ec = null,
        _0x4a8f5b = null,
        _0x4a8722 = null;
    const {
      "model": _0x721b63,
      "maxModelTokens": maxModelTokens = 0,
      "maxResponseTokens": maxResponseTokens = 0,
      "openaiProxyUrl": openaiProxyUrl = '',
      "key": _0x520d4b
    } = _0x1595c4;
    _0x721b63['toLowerCase']()["includes"]("gpt-4") && (_0x721b63['toLowerCase']()['includes']('32k') ? (_0x4fa2ec = maxModelTokens || openaiModel4MaxTokens32k || 32768, _0x4a8f5b = maxResponseTokens || openaiModel4MaxTokens32kRes || 16384) : (_0x4fa2ec = maxModelTokens || openaiModel4MaxTokens || 8192, _0x4a8f5b = maxResponseTokens || openaiModel4MaxTokensRes || 4096));
    _0x721b63["toLowerCase"]()["includes"]('gpt-3') && (_0x721b63['toLowerCase']()["includes"]("16k") ? (_0x4fa2ec = maxModelTokens || openaiModel3MaxTokens16k || 16384, _0x4a8f5b = maxResponseTokens || openaiModel3MaxTokens16kRes || 8192) : (_0x4fa2ec = maxModelTokens || openaiModel3MaxTokens || 4096, _0x4a8f5b = maxResponseTokens || openaiModel3MaxTokensRes || 1000));
    _0x4a8722 = openaiProxyUrl || openaiBaseUrl || 'https://api.openai.com';
    _0x4a8f5b >= _0x4fa2ec && (_0x4a8f5b = Math['floor'](_0x4fa2ec / 2), common_1["Logger"]["debug"]("key: " + _0x520d4b + " 回复数不得大于等于模型上下文数, 已自动调整为 maxTokenRes: " + _0x4a8f5b));
    return {
      'key': _0x520d4b,
      'maxToken': _0x4fa2ec,
      'maxTokenRes': _0x4a8f5b,
      'proxyUrl': _0x4a8722
    };
  }

};
ChatgptService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_2["InjectRepository"])(user_entity_1['UserEntity'])), __param(1, (0, typeorm_2["InjectRepository"])(gptkeys_entity_1["GptKeysEntity"])), __param(2, (0, typeorm_2["InjectRepository"])(config_entity_1["ConfigEntity"])), __param(3, (0, typeorm_2["InjectRepository"])(whiteList_entity_1["WhiteListEntity"])), __param(4, (0, typeorm_2["InjectRepository"])(app_entity_1['AppEntity'])), __metadata('design:paramtypes', [typeorm_1["Repository"], typeorm_1["Repository"], typeorm_1['Repository'], typeorm_1["Repository"], typeorm_1["Repository"], nestjs_config_1["ConfigService"], userBalance_service_1['UserBalanceService'], chatLog_service_1["ChatLogService"], user_service_1["UserService"], upload_service_1["UploadService"], badwords_service_1["BadwordsService"], autoreply_service_1['AutoreplyService'], globalConfig_service_1['GlobalConfigService'], fanyi_service_1['FanyiService']])], ChatgptService);
exports["ChatgptService"] = ChatgptService;