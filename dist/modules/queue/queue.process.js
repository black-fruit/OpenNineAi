'use strict';

var __decorate = this && this["__decorate"] || function (_0x5af2bb, _0x6f8d5f, _0x3f1b30, _0x126a7d) {
  var _0x497aef = arguments["length"],
      _0x1c7100 = _0x497aef < 3 ? _0x6f8d5f : _0x126a7d === null ? _0x126a7d = Object["getOwnPropertyDescriptor"](_0x6f8d5f, _0x3f1b30) : _0x126a7d,
      _0x5d5895;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x1c7100 = Reflect["decorate"](_0x5af2bb, _0x6f8d5f, _0x3f1b30, _0x126a7d);
  } else {
    for (var _0x2037e6 = _0x5af2bb["length"] - 1; _0x2037e6 >= 0; _0x2037e6--) {
      if (_0x5d5895 = _0x5af2bb[_0x2037e6]) {
        _0x1c7100 = (_0x497aef < 3 ? _0x5d5895(_0x1c7100) : _0x497aef > 3 ? _0x5d5895(_0x6f8d5f, _0x3f1b30, _0x1c7100) : _0x5d5895(_0x6f8d5f, _0x3f1b30)) || _0x1c7100;
      }
    }
  }

  _0x497aef > 3 && _0x1c7100 && Object["defineProperty"](_0x6f8d5f, _0x3f1b30, _0x1c7100);
  return _0x1c7100;
},
    __metadata = this && this['__metadata'] || function (_0x4574a2, _0x339c41) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect['metadata'](_0x4574a2, _0x339c41);
  }
},
    QueueProcessor_1;

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["QueueProcessor"] = void 0;

const bull_1 = require("@nestjs/bull"),
      common_1 = require("@nestjs/common"),
      midjourney_service_1 = require("../midjourney/midjourney.service");

let QueueProcessor = QueueProcessor_1 = class QueueProcessor {
  constructor(_0x2c8b48) {
    this["midjourneyService"] = _0x2c8b48;
    this["logger"] = new common_1["Logger"](QueueProcessor_1["name"]);
  }

  async ["handleJob"](_0x2a2de0) {
    const _0x513d73 = await this["midjourneyService"]["draw"](_0x2a2de0["data"], _0x2a2de0['id']);

    return _0x513d73;
  }

  ["onQueueActive"](_0x33b469) {}

  ["onQueueError"](_0x242fe0) {
    console["log"]("队列发生错误", _0x242fe0);
  }

  ["onQueueProgress"](_0x1410c8, _0x23028c) {
    console['log']('队列任务的一个回调用于通知当前进度', _0x1410c8['id'], _0x23028c);
  }

  ['onQueueCompleted'](_0x4a05f0, _0xd6af8f) {}

  ["onQueueFailed"](_0x226225, _0x39f77) {
    common_1['Logger']["error"]("Queue failed: " + _0x39f77['message'] + ": 绘画失败 " + _0x226225['id'], "QueueProcessor");
    this["midjourneyService"]['drawFailed'](_0x226225["data"]);
  }

  ['onQueuePaused']() {
    console["log"]("队列暂停的时候调用");
  }

  ["onQueueResumed"]() {
    console['log']("队列恢复的时候调用");
  }

  ["onQueueCleaned"](_0x3c8d7c, _0x52482a) {
    common_1['Logger']["log"]("Queue cleaned: " + _0x3c8d7c["length"] + " jobs of type " + _0x52482a + " were cleaned.", "QueueProcessor");
  }

  ['onQueueDrained']() {}

};

__decorate([(0, bull_1["Process"])({
  'name': "mjDraw",
  'concurrency': process["env"]["CONCURRENCY"] ? +process["env"]["CONCURRENCY"] : 3
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], QueueProcessor["prototype"], "handleJob", null);

__decorate([(0, bull_1["OnQueueActive"])(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], QueueProcessor['prototype'], "onQueueActive", null);

__decorate([(0, bull_1["OnQueueError"])(), __metadata('design:type', Function), __metadata("design:paramtypes", [Error]), __metadata("design:returntype", void 0)], QueueProcessor["prototype"], "onQueueError", null);

__decorate([(0, bull_1["OnQueueProgress"])(), __metadata('design:type', Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], QueueProcessor["prototype"], 'onQueueProgress', null);

__decorate([(0, bull_1["OnQueueCompleted"])(), __metadata("design:type", Function), __metadata('design:paramtypes', [Object, Object]), __metadata("design:returntype", void 0)], QueueProcessor["prototype"], "onQueueCompleted", null);

__decorate([(0, bull_1['OnQueueFailed'])(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Error]), __metadata("design:returntype", void 0)], QueueProcessor["prototype"], "onQueueFailed", null);

__decorate([(0, bull_1["OnQueuePaused"])(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], QueueProcessor["prototype"], "onQueuePaused", null);

__decorate([(0, bull_1['OnQueueResumed'])(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], QueueProcessor["prototype"], "onQueueResumed", null);

__decorate([(0, bull_1["OnQueueCleaned"])(), __metadata("design:type", Function), __metadata("design:paramtypes", [Array, String]), __metadata("design:returntype", void 0)], QueueProcessor['prototype'], "onQueueCleaned", null);

__decorate([(0, bull_1['OnQueueDrained'])(), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata('design:returntype', void 0)], QueueProcessor["prototype"], "onQueueDrained", null);

QueueProcessor = QueueProcessor_1 = __decorate([(0, bull_1["Processor"])('MJDRAW'), __metadata("design:paramtypes", [midjourney_service_1["MidjourneyService"]])], QueueProcessor);
exports['QueueProcessor'] = QueueProcessor;