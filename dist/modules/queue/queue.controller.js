'use strict';

var __decorate = this && this["__decorate"] || function (_0x38109d, _0x15d1e5, _0x3685aa, _0xdce4ea) {
  var _0x3e6a52 = arguments["length"],
      _0x15dc2f = _0x3e6a52 < 3 ? _0x15d1e5 : _0xdce4ea === null ? _0xdce4ea = Object["getOwnPropertyDescriptor"](_0x15d1e5, _0x3685aa) : _0xdce4ea,
      _0x39bc68;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x15dc2f = Reflect['decorate'](_0x38109d, _0x15d1e5, _0x3685aa, _0xdce4ea);
  } else {
    for (var _0x448ad1 = _0x38109d["length"] - 1; _0x448ad1 >= 0; _0x448ad1--) {
      if (_0x39bc68 = _0x38109d[_0x448ad1]) {
        _0x15dc2f = (_0x3e6a52 < 3 ? _0x39bc68(_0x15dc2f) : _0x3e6a52 > 3 ? _0x39bc68(_0x15d1e5, _0x3685aa, _0x15dc2f) : _0x39bc68(_0x15d1e5, _0x3685aa)) || _0x15dc2f;
      }
    }
  }

  _0x3e6a52 > 3 && _0x15dc2f && Object["defineProperty"](_0x15d1e5, _0x3685aa, _0x15dc2f);
  return _0x15dc2f;
},
    __metadata = this && this['__metadata'] || function (_0x174c74, _0x8a7d52) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x174c74, _0x8a7d52);
  }
},
    __param = this && this['__param'] || function (_0x259a60, _0x22f205) {
  return function (_0x51892d, _0x12980e) {
    _0x22f205(_0x51892d, _0x12980e, _0x259a60);
  };
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["QueueController"] = void 0;

const queue_service_1 = require("./queue.service"),
      common_1 = require('@nestjs/common'),
      swagger_1 = require('@nestjs/swagger'),
      mjDraw_dto_1 = require("./dto/mjDraw.dto"),
      jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard");

let QueueController = class QueueController {
  constructor(_0xacb361) {
    this["queueService"] = _0xacb361;
  }

  async ["mjDraw"](_0x51b968, _0x204e4f) {
    return await this["queueService"]['addMjDrawQueue'](_0x51b968, _0x204e4f);
  }

  async ["getQueue"]() {
    return await this["queueService"]["getQueue"]();
  }

};

__decorate([(0, common_1["Post"])("addMjDrawQueue"), (0, swagger_1["ApiOperation"])({
  'summary': "提交绘制图片任务"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [mjDraw_dto_1["MjDrawDto"], Object]), __metadata("design:returntype", Promise)], QueueController["prototype"], "mjDraw", null);

__decorate([(0, common_1["Get"])("getQueue"), (0, swagger_1["ApiOperation"])({
  'summary': "查询任务队列"
}), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Promise)], QueueController['prototype'], "getQueue", null);

QueueController = __decorate([(0, swagger_1["ApiTags"])('Queue'), (0, common_1["Controller"])('queue'), __metadata("design:paramtypes", [queue_service_1["QueueService"]])], QueueController);
exports["QueueController"] = QueueController;