'use strict';

var __decorate = this && this["__decorate"] || function (_0x41b010, _0x56e2a8, _0x5995aa, _0x23c954) {
  var _0x3c63db = arguments["length"],
      _0x372a2b = _0x3c63db < 3 ? _0x56e2a8 : _0x23c954 === null ? _0x23c954 = Object["getOwnPropertyDescriptor"](_0x56e2a8, _0x5995aa) : _0x23c954,
      _0x4f263d;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x372a2b = Reflect["decorate"](_0x41b010, _0x56e2a8, _0x5995aa, _0x23c954);
  } else {
    for (var _0x54ed9a = _0x41b010["length"] - 1; _0x54ed9a >= 0; _0x54ed9a--) {
      if (_0x4f263d = _0x41b010[_0x54ed9a]) {
        _0x372a2b = (_0x3c63db < 3 ? _0x4f263d(_0x372a2b) : _0x3c63db > 3 ? _0x4f263d(_0x56e2a8, _0x5995aa, _0x372a2b) : _0x4f263d(_0x56e2a8, _0x5995aa)) || _0x372a2b;
      }
    }
  }

  _0x3c63db > 3 && _0x372a2b && Object["defineProperty"](_0x56e2a8, _0x5995aa, _0x372a2b);
  return _0x372a2b;
},
    __metadata = this && this["__metadata"] || function (_0x552c1a, _0x321d9b) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x552c1a, _0x321d9b);
  }
},
    __param = this && this['__param'] || function (_0xc509e, _0x513a97) {
  return function (_0x22ab17, _0x280c35) {
    _0x513a97(_0x22ab17, _0x280c35, _0xc509e);
  };
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports['StatisticController'] = void 0;

const statistic_service_1 = require("./statistic.service"),
      common_1 = require("@nestjs/common"),
      swagger_1 = require("@nestjs/swagger"),
      queryStatisticDto_dto_1 = require('./dto/queryStatisticDto.dto'),
      adminAuth_guard_1 = require("../../common/auth/adminAuth.guard");

let StatisticController = class StatisticController {
  constructor(_0x310912) {
    this['statisticService'] = _0x310912;
  }

  ["getBaseStatistic"]() {
    return this["statisticService"]["getBaseStatistic"]();
  }

  ["getChatStatistic"](_0xf657d) {
    return this['statisticService']["getChatStatistic"](_0xf657d);
  }

  ["getBaiduStatistics"](_0x15115d) {
    return this["statisticService"]["getBaiduVisit"](_0x15115d);
  }

};

__decorate([(0, common_1["Get"])("base"), (0, swagger_1["ApiOperation"])({
  'summary': "获取基础统计数据"
}), (0, common_1["UseGuards"])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata('design:returntype', void 0)], StatisticController["prototype"], "getBaseStatistic", null);

__decorate([(0, common_1['Get'])('chatStatistic'), (0, swagger_1["ApiOperation"])({
  'summary': '获取聊天绘画统计数据'
}), (0, common_1["UseGuards"])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Query"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [queryStatisticDto_dto_1["QueryStatisticDto"]]), __metadata("design:returntype", void 0)], StatisticController['prototype'], "getChatStatistic", null);

__decorate([(0, common_1["Get"])("baiduVisit"), (0, swagger_1["ApiOperation"])({
  'summary': '获取百度统计数据'
}), (0, common_1["UseGuards"])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [queryStatisticDto_dto_1["QueryStatisticDto"]]), __metadata('design:returntype', void 0)], StatisticController["prototype"], "getBaiduStatistics", null);

StatisticController = __decorate([(0, swagger_1["ApiTags"])("statistic"), (0, common_1["Controller"])("statistic"), __metadata("design:paramtypes", [statistic_service_1["StatisticService"]])], StatisticController);
exports["StatisticController"] = StatisticController;