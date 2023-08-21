'use strict';

var __decorate = this && this["__decorate"] || function (_0x3266ec, _0x27259c, _0x261a22, _0x3e089a) {
  var _0x4daf7c = arguments['length'],
      _0x3a312e = _0x4daf7c < 3 ? _0x27259c : _0x3e089a === null ? _0x3e089a = Object["getOwnPropertyDescriptor"](_0x27259c, _0x261a22) : _0x3e089a,
      _0x294311;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3a312e = Reflect["decorate"](_0x3266ec, _0x27259c, _0x261a22, _0x3e089a);
  } else {
    for (var _0x32f9ec = _0x3266ec['length'] - 1; _0x32f9ec >= 0; _0x32f9ec--) {
      if (_0x294311 = _0x3266ec[_0x32f9ec]) {
        _0x3a312e = (_0x4daf7c < 3 ? _0x294311(_0x3a312e) : _0x4daf7c > 3 ? _0x294311(_0x27259c, _0x261a22, _0x3a312e) : _0x294311(_0x27259c, _0x261a22)) || _0x3a312e;
      }
    }
  }

  _0x4daf7c > 3 && _0x3a312e && Object["defineProperty"](_0x27259c, _0x261a22, _0x3a312e);
  return _0x3a312e;
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["ChatLogModule"] = void 0;

const common_1 = require("@nestjs/common"),
      chatLog_service_1 = require("./chatLog.service"),
      typeorm_1 = require('@nestjs/typeorm'),
      chatLog_entity_1 = require('./chatLog.entity'),
      chatLog_controller_1 = require("./chatLog.controller"),
      user_entity_1 = require("../user/user.entity"),
      badwords_entity_1 = require("../badwords/badwords.entity"),
      chatGroup_entity_1 = require('../chatGroup/chatGroup.entity');

let ChatLogModule = class ChatLogModule {};
ChatLogModule = __decorate([(0, common_1["Global"])(), (0, common_1["Module"])({
  'imports': [typeorm_1['TypeOrmModule']["forFeature"]([chatLog_entity_1["ChatLogEntity"], user_entity_1["UserEntity"], badwords_entity_1["BadWordsEntity"], chatGroup_entity_1['ChatGroupEntity']])],
  'controllers': [chatLog_controller_1["ChatLogController"]],
  'providers': [chatLog_service_1["ChatLogService"]],
  'exports': [chatLog_service_1["ChatLogService"]]
})], ChatLogModule);
exports["ChatLogModule"] = ChatLogModule;