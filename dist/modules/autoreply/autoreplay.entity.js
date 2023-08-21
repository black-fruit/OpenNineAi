'use strict';

var __decorate = this && this["__decorate"] || function (_0xd55997, _0x1e9c71, _0xfc5bd7, _0x413aa0) {
  var _0x4bd4d3 = arguments["length"],
      _0x16d625 = _0x4bd4d3 < 3 ? _0x1e9c71 : _0x413aa0 === null ? _0x413aa0 = Object["getOwnPropertyDescriptor"](_0x1e9c71, _0xfc5bd7) : _0x413aa0,
      _0x52b280;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x16d625 = Reflect["decorate"](_0xd55997, _0x1e9c71, _0xfc5bd7, _0x413aa0);
  } else {
    for (var _0x5dc8f3 = _0xd55997["length"] - 1; _0x5dc8f3 >= 0; _0x5dc8f3--) {
      if (_0x52b280 = _0xd55997[_0x5dc8f3]) {
        _0x16d625 = (_0x4bd4d3 < 3 ? _0x52b280(_0x16d625) : _0x4bd4d3 > 3 ? _0x52b280(_0x1e9c71, _0xfc5bd7, _0x16d625) : _0x52b280(_0x1e9c71, _0xfc5bd7)) || _0x16d625;
      }
    }
  }

  _0x4bd4d3 > 3 && _0x16d625 && Object["defineProperty"](_0x1e9c71, _0xfc5bd7, _0x16d625);
  return _0x16d625;
},
    __metadata = this && this["__metadata"] || function (_0x520132, _0xd63b6e) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect['metadata'](_0x520132, _0xd63b6e);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports['AutoReplyEntity'] = void 0;

const typeorm_1 = require('typeorm'),
      baseEntity_1 = require("../../common/entity/baseEntity");

let AutoReplyEntity = class AutoReplyEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1['Column'])({
  'comment': "提问的问题",
  'type': "text"
}), __metadata("design:type", String)], AutoReplyEntity["prototype"], 'prompt', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "定义的答案",
  'type': "text"
}), __metadata("design:type", String)], AutoReplyEntity["prototype"], "answer", void 0);

__decorate([(0, typeorm_1["Column"])({
  'default': 1,
  'comment': "启用当前自动回复状态， 0：关闭 1：启用"
}), __metadata("design:type", Number)], AutoReplyEntity["prototype"], "status", void 0);

AutoReplyEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': 'auto_reply'
})], AutoReplyEntity);
exports['AutoReplyEntity'] = AutoReplyEntity;