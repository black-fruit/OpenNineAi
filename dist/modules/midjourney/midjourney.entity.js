'use strict';

var __decorate = this && this['__decorate'] || function (_0x42722c, _0x25148f, _0x6bc290, _0x352960) {
  var _0x549905 = arguments["length"],
      _0x3dbf10 = _0x549905 < 3 ? _0x25148f : _0x352960 === null ? _0x352960 = Object["getOwnPropertyDescriptor"](_0x25148f, _0x6bc290) : _0x352960,
      _0xa6044f;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3dbf10 = Reflect["decorate"](_0x42722c, _0x25148f, _0x6bc290, _0x352960);
  } else {
    for (var _0x1327e5 = _0x42722c["length"] - 1; _0x1327e5 >= 0; _0x1327e5--) {
      if (_0xa6044f = _0x42722c[_0x1327e5]) {
        _0x3dbf10 = (_0x549905 < 3 ? _0xa6044f(_0x3dbf10) : _0x549905 > 3 ? _0xa6044f(_0x25148f, _0x6bc290, _0x3dbf10) : _0xa6044f(_0x25148f, _0x6bc290)) || _0x3dbf10;
      }
    }
  }

  _0x549905 > 3 && _0x3dbf10 && Object["defineProperty"](_0x25148f, _0x6bc290, _0x3dbf10);
  return _0x3dbf10;
},
    __metadata = this && this["__metadata"] || function (_0x24de1b, _0x59e2fe) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x24de1b, _0x59e2fe);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["MidjourneyEntity"] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let MidjourneyEntity = class MidjourneyEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1['Column'])({
  'comment': "用户ID"
}), __metadata("design:type", Number)], MidjourneyEntity["prototype"], 'userId', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "任务ID",
  'nullable': true
}), __metadata("design:type", Number)], MidjourneyEntity["prototype"], "jobId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "额外参数",
  'nullable': true
}), __metadata("design:type", String)], MidjourneyEntity['prototype'], 'extraParam', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "绘画描述词",
  'type': "text"
}), __metadata("design:type", String)], MidjourneyEntity["prototype"], "prompt", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "垫图图片基础地址",
  'nullable': true
}), __metadata('design:type', String)], MidjourneyEntity["prototype"], 'imgUrl', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "垫图图片 + 绘画描述词 + 额外参数 = 完整的prompt",
  'type': "text"
}), __metadata('design:type', String)], MidjourneyEntity["prototype"], "fullPrompt", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "随机产生的绘画ID用于拿取比对结果"
}), __metadata("design:type", String)], MidjourneyEntity["prototype"], "randomDrawId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '当前绘制任务的进度',
  'nullable': true
}), __metadata("design:type", Number)], MidjourneyEntity["prototype"], "progress", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '当前绘制任务的耗时',
  'nullable': true
}), __metadata("design:type", Number)], MidjourneyEntity["prototype"], "durationSpent", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "当前绘制任务的状态"
}), __metadata("design:type", Number)], MidjourneyEntity["prototype"], 'status', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "mj绘画的动作、绘图、放大、变换、图生图"
}), __metadata("design:type", Number)], MidjourneyEntity["prototype"], "action", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': '一组图片的第几张、放大或者变换的时候需要使用',
  'nullable': true
}), __metadata("design:type", Number)], MidjourneyEntity["prototype"], 'orderId', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "是否推荐0: 默认不推荐 1: 推荐",
  'nullable': true,
  'default': 0
}), __metadata('design:type', Number)], MidjourneyEntity['prototype'], "rec", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "绘画的ID每条不一样",
  'nullable': true
}), __metadata('design:type', String)], MidjourneyEntity["prototype"], 'message_id', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "对图片放大或者变体的ID",
  'nullable': true
}), __metadata('design:type', String)], MidjourneyEntity["prototype"], "custom_id", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "图片信息尺寸",
  'nullable': true,
  'type': "text"
}), __metadata("design:type", String)], MidjourneyEntity['prototype'], "fileInfo", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "扩展参数",
  'nullable': true,
  'type': "text"
}), __metadata("design:type", String)], MidjourneyEntity["prototype"], "extend", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "是否删除 0: 未删除 1: 已删除",
  'nullable': true,
  'default': 0
}), __metadata("design:type", Number)], MidjourneyEntity['prototype'], 'isDelete', void 0);

MidjourneyEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': "midjourney"
})], MidjourneyEntity);
exports["MidjourneyEntity"] = MidjourneyEntity;