'use strict';

var __decorate = this && this['__decorate'] || function (_0x59a4ed, _0x43da3d, _0x570e43, _0x19cd5d) {
  var _0x51a7e6 = arguments["length"],
      _0x1de83a = _0x51a7e6 < 3 ? _0x43da3d : _0x19cd5d === null ? _0x19cd5d = Object["getOwnPropertyDescriptor"](_0x43da3d, _0x570e43) : _0x19cd5d,
      _0x11b97c;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x1de83a = Reflect["decorate"](_0x59a4ed, _0x43da3d, _0x570e43, _0x19cd5d);
  } else {
    for (var _0x4c1ccb = _0x59a4ed["length"] - 1; _0x4c1ccb >= 0; _0x4c1ccb--) {
      if (_0x11b97c = _0x59a4ed[_0x4c1ccb]) {
        _0x1de83a = (_0x51a7e6 < 3 ? _0x11b97c(_0x1de83a) : _0x51a7e6 > 3 ? _0x11b97c(_0x43da3d, _0x570e43, _0x1de83a) : _0x11b97c(_0x43da3d, _0x570e43)) || _0x1de83a;
      }
    }
  }

  _0x51a7e6 > 3 && _0x1de83a && Object['defineProperty'](_0x43da3d, _0x570e43, _0x1de83a);
  return _0x1de83a;
},
    __metadata = this && this["__metadata"] || function (_0xea6813, _0x4ff26d) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === 'function') {
    return Reflect['metadata'](_0xea6813, _0x4ff26d);
  }
},
    __param = this && this["__param"] || function (_0x413485, _0x5a668d) {
  return function (_0x3e5c02, _0x5578ea) {
    _0x5a668d(_0x3e5c02, _0x5578ea, _0x413485);
  };
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["StatisticService"] = void 0;

const common_1 = require("@nestjs/common"),
      typeorm_1 = require('@nestjs/typeorm'),
      user_entity_1 = require("../user/user.entity"),
      typeorm_2 = require("typeorm"),
      chatLog_entity_1 = require('../chatLog/chatLog.entity'),
      balance_constant_1 = require('../../common/constants/balance.constant'),
      date_1 = require('../../common/utils/date'),
      axios_1 = require('axios'),
      config_entity_1 = require("../globalConfig/config.entity"),
      order_entity_1 = require("../order/order.entity"),
      midjourney_entity_1 = require("../midjourney/midjourney.entity"),
      midjourney_constant_1 = require("../../common/constants/midjourney.constant");

let StatisticService = class StatisticService {
  constructor(_0x52fc79, _0x36b584, _0x578eab, _0x2f1782, _0x11b657) {
    this["userEntity"] = _0x52fc79;
    this["chatLogEntity"] = _0x36b584;
    this['configEntity'] = _0x578eab;
    this["orderEntity"] = _0x2f1782;
    this["midjourneyEntity"] = _0x11b657;
  }

  async ["getBaseStatistic"]() {
    const _0x242c70 = await this['countUsers'](),
          _0x3f107b = await this["countNewUsersToday"](),
          _0x59d259 = await this['countChats'](),
          _0x88cdb4 = await this["countNewChatsToday"](),
          _0x348770 = await this["countDraws"](),
          _0x28ed9d = await this["countNewDrawsToday"](),
          _0x368a2e = await this["countNewMidhourneysToday"](),
          _0x4f0ff7 = await this["countOrders"](),
          _0xf28354 = await this["countNewOrdersToday"]();

    return {
      'userCount': _0x242c70,
      'newUserCount': _0x3f107b,
      'chatCount': _0x59d259,
      'newChatCount': _0x88cdb4,
      'drawCount': _0x348770,
      'newDrawCount': _0x368a2e + _0x28ed9d,
      'orderCount': _0x4f0ff7,
      'newOrderCount': _0xf28354
    };
  }

  async ["getChatStatistic"]({
    "days": days = 7
  }) {
    const _0x56b4c3 = await this['countChatsByTimeRange'](days),
          _0x7330ce = await this["countDrawsByTimeRange"](days),
          _0x4a8ec4 = await this["countMjDrawsByTimeRange"](days);

    return {
      'date': _0x56b4c3["map"](_0x2f655c => _0x2f655c['date']),
      'chat': _0x56b4c3["map"](_0x3abcdc => _0x3abcdc['value']),
      'draw': _0x7330ce["map"]((_0x44c6e6, _0x3a6137) => {
        return _0x44c6e6["value"] + _0x4a8ec4[_0x3a6137]["value"];
      })
    };
  }

  async ['getBaiduVisit']({
    "days": days = 7
  }) {
    const _0x45fb83 = await this['getBaiduStatistics'](days);

    return _0x45fb83;
  }

  async ["countUsers"]() {
    const _0x2e536f = await this["userEntity"]["count"]();

    return _0x2e536f;
  }

  async ["countNewUsersToday"]() {
    const _0x56199c = new Date();

    _0x56199c["setHours"](0, 0, 0, 0);

    const _0x22b756 = new Date(_0x56199c['getTime']() + 86400000),
          _0x5873d8 = this["userEntity"]["createQueryBuilder"]("user"),
          _0x47efb4 = await _0x5873d8["where"]("user.createdAt >= :today", {
      'today': _0x56199c
    })['andWhere']("user.createdAt < :tomorrow", {
      'tomorrow': _0x22b756
    })["getCount"]();

    return _0x47efb4;
  }

  async ["countChats"]() {
    const _0x184837 = await this["chatLogEntity"]["count"]({
      'where': {
        'type': balance_constant_1['DeductionKey']["CHAT_TYPE"]
      }
    });

    return _0x184837;
  }

  async ['countNewChatsToday']() {
    const _0x37876a = new Date();

    _0x37876a['setHours'](0, 0, 0, 0);

    const _0x23a401 = new Date(_0x37876a["getTime"]() + 86400000),
          _0x3ad00e = this["chatLogEntity"]['createQueryBuilder']('chatLog'),
          _0x4495bd = await _0x3ad00e["where"]("chatLog.type = :type", {
      'type': balance_constant_1["DeductionKey"]['CHAT_TYPE']
    })["andWhere"]("chatLog.createdAt >= :today", {
      'today': _0x37876a
    })["andWhere"]("chatLog.createdAt < :tomorrow", {
      'tomorrow': _0x23a401
    })["getCount"]();

    return _0x4495bd;
  }

  async ["countDraws"]() {
    const _0xc186f4 = await this["chatLogEntity"]["count"]({
      'where': {
        'type': balance_constant_1["DeductionKey"]['PAINT_TYPE']
      }
    });

    return _0xc186f4;
  }

  async ["countNewDrawsToday"]() {
    const _0x24fd72 = new Date();

    _0x24fd72['setHours'](0, 0, 0, 0);

    const _0x2597d8 = new Date(_0x24fd72["getTime"]() + 86400000),
          _0x37e5ff = this["chatLogEntity"]["createQueryBuilder"]("chatLog"),
          _0x5b4777 = await _0x37e5ff['where']("chatLog.type = :type", {
      'type': balance_constant_1["DeductionKey"]['PAINT_TYPE']
    })["andWhere"]("chatLog.createdAt >= :today", {
      'today': _0x24fd72
    })["andWhere"]("chatLog.createdAt < :tomorrow", {
      'tomorrow': _0x2597d8
    })["getCount"]();

    return _0x5b4777;
  }

  async ["countNewMidhourneysToday"]() {
    const _0x227aaf = new Date();

    _0x227aaf["setHours"](0, 0, 0, 0);

    const _0x1eb585 = new Date(_0x227aaf["getTime"]() + 86400000),
          _0x55cf72 = this["midjourneyEntity"]['createQueryBuilder']('midjourney'),
          _0x5afa08 = await _0x55cf72["where"]("midjourney.createdAt >= :today", {
      'today': _0x227aaf
    })["andWhere"]("midjourney.createdAt < :tomorrow", {
      'tomorrow': _0x1eb585
    })['getCount']();

    return _0x5afa08;
  }

  async ["countChatsByTimeRange"](_0x27af5b) {
    var _0x51eaf3, _0x17853b;

    const _0x5f00bd = new Date();

    _0x5f00bd["setHours"](0, 0, 0, 0);

    const _0x2baa30 = new Date(_0x5f00bd["getTime"]() - (_0x27af5b - 1) * 24 * 60 * 60 * 1000),
          _0x31d36c = this["chatLogEntity"]["createQueryBuilder"]('chatlog'),
          _0x307ac2 = await _0x31d36c["select"]("DATE(chatlog.createdAt) as date, COUNT(*) as count")["where"]("chatlog.type = :type", {
      'type': balance_constant_1["DeductionKey"]["CHAT_TYPE"]
    })["andWhere"]("chatlog.createdAt >= :startDate", {
      'startDate': _0x2baa30
    })['groupBy']("date")["orderBy"]("date")['getRawMany'](),
          _0x3c8240 = [];

    for (let _0x40bd4b = 0; _0x40bd4b < _0x27af5b; _0x40bd4b++) {
      const _0x36a99e = (0, date_1["formatDate"])(new Date(_0x2baa30), "M.DD"),
            _0x577d5a = (_0x17853b = (_0x51eaf3 = _0x307ac2['find'](_0x53f6c3 => (0, date_1["formatDate"])(new Date(_0x53f6c3['date']), "M.DD") === _0x36a99e)) === null || _0x51eaf3 === void 0 ? void 0 : _0x51eaf3["count"]) !== null && _0x17853b !== void 0 ? _0x17853b : 0;

      _0x577d5a > 0 ? _0x3c8240["push"]({
        'date': _0x36a99e,
        'value': Number(_0x577d5a)
      }) : _0x3c8240["push"]({
        'date': _0x36a99e,
        'value': 0
      });

      _0x2baa30['setDate'](_0x2baa30["getDate"]() + 1);
    }

    return _0x3c8240;
  }

  async ['countDrawsByTimeRange'](_0x2056f0) {
    var _0x3d4f8a, _0x8b7911;

    const _0x466c2a = new Date();

    _0x466c2a['setHours'](0, 0, 0, 0);

    const _0x1be07a = new Date(_0x466c2a["getTime"]() - (_0x2056f0 - 1) * 24 * 60 * 60 * 1000),
          _0xe2b16b = this["chatLogEntity"]["createQueryBuilder"]('chatlog'),
          _0x551d54 = await _0xe2b16b["select"]("DATE(chatlog.createdAt) as date, COUNT(*) as count")["where"]("chatlog.type = :type", {
      'type': balance_constant_1["DeductionKey"]["PAINT_TYPE"]
    })["andWhere"]("chatlog.createdAt >= :startDate", {
      'startDate': _0x1be07a
    })['groupBy']("date")["orderBy"]("date")["getRawMany"](),
          _0x595cb8 = [];

    for (let _0x30fc8d = 0; _0x30fc8d < _0x2056f0; _0x30fc8d++) {
      const _0x3c0a31 = (0, date_1["formatDate"])(new Date(_0x1be07a), 'M.DD'),
            _0x2c3a27 = (_0x8b7911 = (_0x3d4f8a = _0x551d54["find"](_0xb101e2 => (0, date_1["formatDate"])(new Date(_0xb101e2["date"]), "M.DD") === _0x3c0a31)) === null || _0x3d4f8a === void 0 ? void 0 : _0x3d4f8a["count"]) !== null && _0x8b7911 !== void 0 ? _0x8b7911 : 0;

      _0x2c3a27 > 0 ? _0x595cb8["push"]({
        'date': _0x3c0a31,
        'value': Number(_0x2c3a27)
      }) : _0x595cb8["push"]({
        'date': _0x3c0a31,
        'value': 0
      });

      _0x1be07a["setDate"](_0x1be07a["getDate"]() + 1);
    }

    return _0x595cb8;
  }

  async ["countMjDrawsByTimeRange"](_0x4b34db) {
    var _0x334ef8, _0x381e47;

    const _0x436eaf = new Date();

    _0x436eaf["setHours"](0, 0, 0, 0);

    const _0x472d23 = new Date(_0x436eaf["getTime"]() - (_0x4b34db - 1) * 24 * 60 * 60 * 1000),
          _0x1b2861 = this["midjourneyEntity"]['createQueryBuilder']('midjourney'),
          _0x15bd91 = await _0x1b2861["select"]("DATE(midjourney.createdAt) as date, COUNT(*) as count")["where"]("midjourney.status = :status", {
      'status': midjourney_constant_1['MidjourneyStatusEnum']["DRAWED"]
    })['andWhere']("midjourney.createdAt >= :startDate", {
      'startDate': _0x472d23
    })["groupBy"]("date")["orderBy"]("date")["getRawMany"](),
          _0x413457 = [];

    for (let _0x591973 = 0; _0x591973 < _0x4b34db; _0x591973++) {
      const _0x84ad36 = (0, date_1["formatDate"])(new Date(_0x472d23), "M.DD"),
            _0x3aada4 = (_0x381e47 = (_0x334ef8 = _0x15bd91['find'](_0x4d1ca8 => (0, date_1['formatDate'])(new Date(_0x4d1ca8["date"]), "M.DD") === _0x84ad36)) === null || _0x334ef8 === void 0 ? void 0 : _0x334ef8['count']) !== null && _0x381e47 !== void 0 ? _0x381e47 : 0;

      _0x3aada4 > 0 ? _0x413457["push"]({
        'date': _0x84ad36,
        'value': Number(_0x3aada4)
      }) : _0x413457["push"]({
        'date': _0x84ad36,
        'value': 0
      });

      _0x472d23["setDate"](_0x472d23["getDate"]() + 1);
    }

    return _0x413457;
  }

  async ["getBaiduStatistics"](_0xf98f97) {
    var _0x5733ca, _0x3063c4;

    const _0x43fb58 = (0, date_1["formatDate"])(new Date(), "YYYYMMDD"),
          _0x5762a3 = (0, date_1['formatDate'])(new Date(Date['now']() - Number(_0xf98f97 - 1) * 24 * 60 * 60 * 1000), "YYYYMMDD"),
          _0x3e244f = "pv_count,visitor_count,ip_count,bounce_ratio,avg_visit_time",
          _0x1afa99 = "overview/getTimeTrendRpt",
          _0x11a587 = await this["configEntity"]['find']({
      'where': {
        'configKey': (0, typeorm_2['In'])(["baiduToken", "baiduSiteId"])
      }
    }),
          _0x240f0e = (_0x5733ca = _0x11a587["find"](_0x11f7da => _0x11f7da["configKey"] === "baiduSiteId")) === null || _0x5733ca === void 0 ? void 0 : _0x5733ca["configVal"],
          _0x5008ae = (_0x3063c4 = _0x11a587["find"](_0x4cc5d9 => _0x4cc5d9['configKey'] === "baiduToken")) === null || _0x3063c4 === void 0 ? void 0 : _0x3063c4["configVal"];

    if (!_0x240f0e || !_0x5008ae) {
      return [];
    }

    if (!_0x240f0e) {
      throw new common_1["HttpException"]('请先配置百度统计siteId', common_1['HttpStatus']["BAD_REQUEST"]);
    }

    if (!_0x5008ae) {
      throw new common_1["HttpException"]("请先配置百度统计accessToken", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x345507 = "https://openapi.baidu.com/rest/2.0/tongji/report/getData?access_token=" + _0x5008ae + "&site_id=" + _0x240f0e + "&method=" + _0x1afa99 + '&start_date=' + _0x5762a3 + "&end_date=" + _0x43fb58 + '&metrics=' + _0x3e244f,
          _0x5df369 = await axios_1["default"]["get"](_0x345507),
          {
      "error_code": _0x13e17d,
      "message": _0x5da1ff
    } = _0x5df369["data"];

    if (_0x13e17d === 111) {
      throw new common_1['HttpException'](_0x5da1ff || "百度授权码过期", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    if (_0x13e17d && _0x13e17d !== 200) {
      throw new common_1["HttpException"](_0x5da1ff || "获取百度统计数据失败", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    return _0x5df369["data"]["result"];
  }

  async ["countOrders"]() {
    const _0x4f4d74 = await this['orderEntity']["count"]();

    return _0x4f4d74;
  }

  async ['countNewOrdersToday']() {
    const _0x4e8610 = new Date();

    _0x4e8610["setHours"](0, 0, 0, 0);

    const _0x145aa8 = new Date(_0x4e8610["getTime"]() + 86400000),
          _0x4639aa = this['orderEntity']["createQueryBuilder"]("order"),
          _0x2dcb06 = await _0x4639aa["where"]("order.createdAt >= :today", {
      'today': _0x4e8610
    })['andWhere']("order.createdAt < :tomorrow", {
      'tomorrow': _0x145aa8
    })['getCount']();

    return _0x2dcb06;
  }

};
StatisticService = __decorate([(0, common_1['Injectable'])(), __param(0, (0, typeorm_1["InjectRepository"])(user_entity_1["UserEntity"])), __param(1, (0, typeorm_1["InjectRepository"])(chatLog_entity_1["ChatLogEntity"])), __param(2, (0, typeorm_1["InjectRepository"])(config_entity_1["ConfigEntity"])), __param(3, (0, typeorm_1["InjectRepository"])(order_entity_1['OrderEntity'])), __param(4, (0, typeorm_1["InjectRepository"])(midjourney_entity_1['MidjourneyEntity'])), __metadata("design:paramtypes", [typeorm_2["Repository"], typeorm_2["Repository"], typeorm_2["Repository"], typeorm_2["Repository"], typeorm_2["Repository"]])], StatisticService);
exports["StatisticService"] = StatisticService;