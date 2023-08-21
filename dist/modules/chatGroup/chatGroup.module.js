'use strict';

var __decorate = this && this["__decorate"] || function (_0x2901f4, _0x257a70, _0x2f8094, _0x265da4) {
  var _0x578827 = arguments["length"],
      _0x483980 = _0x578827 < 3 ? _0x257a70 : _0x265da4 === null ? _0x265da4 = Object["getOwnPropertyDescriptor"](_0x257a70, _0x2f8094) : _0x265da4,
      _0x5e6c6a;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x483980 = Reflect["decorate"](_0x2901f4, _0x257a70, _0x2f8094, _0x265da4);
  } else {
    for (var _0x34b77c = _0x2901f4["length"] - 1; _0x34b77c >= 0; _0x34b77c--) {
      if (_0x5e6c6a = _0x2901f4[_0x34b77c]) {
        _0x483980 = (_0x578827 < 3 ? _0x5e6c6a(_0x483980) : _0x578827 > 3 ? _0x5e6c6a(_0x257a70, _0x2f8094, _0x483980) : _0x5e6c6a(_0x257a70, _0x2f8094)) || _0x483980;
      }
    }
  }

  _0x578827 > 3 && _0x483980 && Object["defineProperty"](_0x257a70, _0x2f8094, _0x483980);
  return _0x483980;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["ChatGroupModule"] = void 0;

const common_1 = require("@nestjs/common"),
      chatGroup_controller_1 = require("./chatGroup.controller"),
      chatGroup_service_1 = require("./chatGroup.service"),
      typeorm_1 = require('@nestjs/typeorm'),
      chatGroup_entity_1 = require("./chatGroup.entity"),
      app_entity_1 = require("../app/app.entity");

let ChatGroupModule = class ChatGroupModule {};
ChatGroupModule = __decorate([(0, common_1["Global"])(), (0, common_1['Module'])({
  'imports': [typeorm_1['TypeOrmModule']["forFeature"]([chatGroup_entity_1["ChatGroupEntity"], app_entity_1['AppEntity']])],
  'controllers': [chatGroup_controller_1['ChatGroupController']],
  'providers': [chatGroup_service_1["ChatGroupService"]]
})], ChatGroupModule);
exports["ChatGroupModule"] = ChatGroupModule;