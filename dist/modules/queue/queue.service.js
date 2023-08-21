'use strict';

var __decorate = this && this["__decorate"] || function (_0x29d336, _0x1d1ffe, _0xc6ad4, _0x388e24) {
  var _0x4243b6 = arguments["length"],
      _0x53350b = _0x4243b6 < 3 ? _0x1d1ffe : _0x388e24 === null ? _0x388e24 = Object['getOwnPropertyDescriptor'](_0x1d1ffe, _0xc6ad4) : _0x388e24,
      _0x2af46a;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x53350b = Reflect['decorate'](_0x29d336, _0x1d1ffe, _0xc6ad4, _0x388e24);
  } else {
    for (var _0xb05c21 = _0x29d336["length"] - 1; _0xb05c21 >= 0; _0xb05c21--) {
      if (_0x2af46a = _0x29d336[_0xb05c21]) {
        _0x53350b = (_0x4243b6 < 3 ? _0x2af46a(_0x53350b) : _0x4243b6 > 3 ? _0x2af46a(_0x1d1ffe, _0xc6ad4, _0x53350b) : _0x2af46a(_0x1d1ffe, _0xc6ad4)) || _0x53350b;
      }
    }
  }

  _0x4243b6 > 3 && _0x53350b && Object["defineProperty"](_0x1d1ffe, _0xc6ad4, _0x53350b);
  return _0x53350b;
},
    __metadata = this && this['__metadata'] || function (_0x14e9d1, _0x3d31a0) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x14e9d1, _0x3d31a0);
  }
},
    __param = this && this["__param"] || function (_0x3eb706, _0x3b2427) {
  return function (_0x4ad855, _0x3aabc2) {
    _0x3b2427(_0x4ad855, _0x3aabc2, _0x3eb706);
  };
};

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["QueueService"] = void 0;

const common_1 = require('@nestjs/common'),
      bull_1 = require("@nestjs/bull"),
      utils_1 = require("../../common/utils"),
      midjourney_service_1 = require('../midjourney/midjourney.service'),
      midjourney_constant_1 = require("../../common/constants/midjourney.constant"),
      userBalance_service_1 = require("../userBalance/userBalance.service"),
      globalConfig_service_1 = require("../globalConfig/globalConfig.service");

let QueueService = class QueueService {
  constructor(_0x4193d7, _0x302f29, _0x68e104, _0x3eff1b) {
    this["mjDrawQueue"] = _0x4193d7;
    this['midjourneyService'] = _0x302f29;
    this['userBalanceService'] = _0x68e104;
    this['globalConfigService'] = _0x3eff1b;
    this['jobIds'] = [];
  }

  async ["onApplicationBootstrap"]() {
    common_1["Logger"]["debug"]("服务启动时清除所有之前未执行完毕的队列任务！", 'QueueService');
    await this["mjDrawQueue"]['clean'](0, "active");
    await this["midjourneyService"]["cleanQueue"]();
  }

  async ["addMjDrawQueue"](_0x1589e2, _0xdbdbc0) {
    const {
      "prompt": _0x3a4dba,
      "imgUrl": _0x344f40,
      "extraParam": _0x248cd4,
      "orderId": _0x4c17ac,
      "action": action = 1,
      "drawId": _0x602ba8
    } = _0x1589e2;
    await this['midjourneyService']["checkLimit"](_0xdbdbc0);
    await this["userBalanceService"]["validateBalance"](_0xdbdbc0["user"]['id'], "mjDraw", action === 2 ? 1 : 4);

    if (action === midjourney_constant_1["MidjourneyActionEnum"]["DRAW"] || action === midjourney_constant_1["MidjourneyActionEnum"]['GENERATE']) {
      const _0x297c10 = '' + (0, utils_1["createRandomUid"])(),
            _0x348c7e = Object["assign"](Object['assign']({}, _0x1589e2), {
        'userId': _0xdbdbc0["user"]['id'],
        'randomDrawId': _0x297c10
      }),
            _0x24879d = await this["midjourneyService"]["addDrawQueue"](_0x348c7e),
            _0x3999f0 = (await this['globalConfigService']["getConfigs"](["mjTimeoutMs"])) || 200000,
            _0x23e1f9 = await this["mjDrawQueue"]['add']("mjDraw", {
        'id': _0x24879d['id'],
        'action': _0x344f40 ? 4 : 1,
        'userId': _0xdbdbc0["user"]['id']
      }, {
        'delay': 1000,
        'timeout': +_0x3999f0
      });

      this['jobIds']["push"](_0x23e1f9['id']);
      await this["userBalanceService"]['deductFromBalance'](_0xdbdbc0["user"]['id'], "mjDraw", 4, 4);
      return true;
    }

    if (!_0x602ba8 || !_0x4c17ac) {
      throw new common_1["HttpException"]("缺少必要参数！", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    if (action === midjourney_constant_1['MidjourneyActionEnum']["UPSCALE"]) {
      const _0x274805 = await this["midjourneyService"]["getDrawActionDetail"](action, _0x602ba8, _0x4c17ac),
            {
        "custom_id": _0x5bfa6c
      } = _0x274805;

      await this["midjourneyService"]["checkIsUpscale"](_0x5bfa6c);

      const _0x514ae1 = Object["assign"](Object["assign"](Object["assign"]({}, _0x1589e2), {
        'userId': _0xdbdbc0["user"]['id']
      }), _0x274805),
            _0x4c7c2e = await this["midjourneyService"]['addDrawQueue'](_0x514ae1),
            _0x1d2bef = (await this["globalConfigService"]['getConfigs'](["mjTimeoutMs"])) || 200000,
            _0x1df373 = await this["mjDrawQueue"]["add"]("mjDraw", {
        'id': _0x4c7c2e['id'],
        'action': action,
        'userId': _0xdbdbc0["user"]['id']
      }, {
        'delay': 1000,
        'timeout': +_0x1d2bef
      });

      await this['userBalanceService']['deductFromBalance'](_0xdbdbc0["user"]['id'], "mjDraw", 1, 1);
      this["jobIds"]["push"](_0x1df373['id']);
      return;
    }

    if (action === midjourney_constant_1['MidjourneyActionEnum']['VARIATION']) {
      const _0x58c1fe = await this['midjourneyService']["getDrawActionDetail"](action, _0x602ba8, _0x4c17ac),
            _0x3185e0 = Object["assign"](Object["assign"](Object['assign']({}, _0x1589e2), {
        'userId': _0xdbdbc0["user"]['id']
      }), _0x58c1fe),
            _0x508706 = await this['midjourneyService']["addDrawQueue"](_0x3185e0),
            _0x13e95d = (await this["globalConfigService"]['getConfigs'](["mjTimeoutMs"])) || 200000,
            _0x3cef02 = await this["mjDrawQueue"]["add"]("mjDraw", {
        'id': _0x508706['id'],
        'action': action,
        'userId': _0xdbdbc0["user"]['id']
      }, {
        'delay': 1000,
        'timeout': +_0x13e95d
      });

      this['jobIds']["push"](_0x3cef02['id']);
      await this["userBalanceService"]["deductFromBalance"](_0xdbdbc0["user"]['id'], 'mjDraw', 4, 4);
      return;
    }

    if (action === midjourney_constant_1["MidjourneyActionEnum"]["REGENERATE"]) {
      const _0x2977b9 = await this["midjourneyService"]["getDrawActionDetail"](action, _0x602ba8, _0x4c17ac),
            _0x20c0d7 = Object["assign"](Object["assign"](Object['assign']({}, _0x1589e2), {
        'userId': _0xdbdbc0["user"]['id']
      }), _0x2977b9),
            _0x10f513 = await this["midjourneyService"]["addDrawQueue"](_0x20c0d7),
            _0x2e01e9 = (await this["globalConfigService"]["getConfigs"](["mjTimeoutMs"])) || 200000,
            _0x342d80 = await this['mjDrawQueue']['add']("mjDraw", {
        'id': _0x10f513['id'],
        'action': action,
        'userId': _0xdbdbc0['user']['id']
      }, {
        'delay': 1000,
        'timeout': +_0x2e01e9
      });

      this['jobIds']["push"](_0x342d80['id']);
      await this['userBalanceService']['deductFromBalance'](_0xdbdbc0["user"]['id'], "mjDraw", 4, 4);
      return;
    }

    if (action === midjourney_constant_1["MidjourneyActionEnum"]["VARY"]) {
      const _0x48cbbc = await this['midjourneyService']["getDrawActionDetail"](action, _0x602ba8, _0x4c17ac),
            _0x256491 = Object["assign"](Object["assign"](Object['assign']({}, _0x1589e2), {
        'userId': _0xdbdbc0['user']['id']
      }), _0x48cbbc),
            _0x5254f1 = await this['midjourneyService']['addDrawQueue'](_0x256491),
            _0x455107 = (await this["globalConfigService"]['getConfigs'](["mjTimeoutMs"])) || 200000,
            _0x5d6718 = await this['mjDrawQueue']["add"]("mjDraw", {
        'id': _0x5254f1['id'],
        'action': action,
        'userId': _0xdbdbc0["user"]['id']
      }, {
        'delay': 1000,
        'timeout': +_0x455107
      });

      this["jobIds"]["push"](_0x5d6718['id']);
      await this["userBalanceService"]["deductFromBalance"](_0xdbdbc0["user"]['id'], "mjDraw", 4, 4);
      return;
    }

    if (action === midjourney_constant_1["MidjourneyActionEnum"]["ZOOM"]) {
      const _0x5b6789 = await this["midjourneyService"]["getDrawActionDetail"](action, _0x602ba8, _0x4c17ac),
            _0x1276ed = Object["assign"](Object['assign'](Object["assign"]({}, _0x1589e2), {
        'userId': _0xdbdbc0["user"]['id']
      }), _0x5b6789),
            _0x47d761 = await this["midjourneyService"]['addDrawQueue'](_0x1276ed),
            _0x474b69 = (await this["globalConfigService"]["getConfigs"](["mjTimeoutMs"])) || 200000,
            _0x2f896c = await this['mjDrawQueue']["add"]('mjDraw', {
        'id': _0x47d761['id'],
        'action': action,
        'userId': _0xdbdbc0["user"]['id']
      }, {
        'delay': 1000,
        'timeout': +_0x474b69
      });

      this["jobIds"]["push"](_0x2f896c['id']);
      await this['userBalanceService']["deductFromBalance"](_0xdbdbc0["user"]['id'], "mjDraw", 4, 4);
      return;
    }
  }

  async ["getQueue"]() {
    return {
      'jobIds': this["jobIds"]
    };
  }

};
QueueService = __decorate([__param(0, (0, bull_1["InjectQueue"])("MJDRAW")), __metadata("design:paramtypes", [Object, midjourney_service_1["MidjourneyService"], userBalance_service_1["UserBalanceService"], globalConfig_service_1['GlobalConfigService']])], QueueService);
exports["QueueService"] = QueueService;