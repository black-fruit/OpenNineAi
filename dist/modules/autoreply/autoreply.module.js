'use strict';

var __decorate = this && this['__decorate'] || function (_0x547c5, _0x199fba, _0x526b84, _0xba95ce) {
  var _0x51413b = arguments['length'],
      _0x5c3c06 = _0x51413b < 3 ? _0x199fba : _0xba95ce === null ? _0xba95ce = Object['getOwnPropertyDescriptor'](_0x199fba, _0x526b84) : _0xba95ce,
      _0x1cecdb;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x5c3c06 = Reflect["decorate"](_0x547c5, _0x199fba, _0x526b84, _0xba95ce);
  } else {
    for (var _0x124796 = _0x547c5['length'] - 1; _0x124796 >= 0; _0x124796--) {
      if (_0x1cecdb = _0x547c5[_0x124796]) {
        _0x5c3c06 = (_0x51413b < 3 ? _0x1cecdb(_0x5c3c06) : _0x51413b > 3 ? _0x1cecdb(_0x199fba, _0x526b84, _0x5c3c06) : _0x1cecdb(_0x199fba, _0x526b84)) || _0x5c3c06;
      }
    }
  }

  _0x51413b > 3 && _0x5c3c06 && Object["defineProperty"](_0x199fba, _0x526b84, _0x5c3c06);
  return _0x5c3c06;
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["AutoreplyModule"] = void 0;

const common_1 = require("@nestjs/common"),
      autoreply_controller_1 = require("./autoreply.controller"),
      autoreply_service_1 = require("./autoreply.service"),
      typeorm_1 = require('@nestjs/typeorm'),
      autoreplay_entity_1 = require("./autoreplay.entity");

let AutoreplyModule = class AutoreplyModule {};
AutoreplyModule = __decorate([(0, common_1["Global"])(), (0, common_1["Module"])({
  'imports': [typeorm_1["TypeOrmModule"]["forFeature"]([autoreplay_entity_1["AutoReplyEntity"]])],
  'controllers': [autoreply_controller_1["AutoreplyController"]],
  'providers': [autoreply_service_1["AutoreplyService"]],
  'exports': [autoreply_service_1['AutoreplyService']]
})], AutoreplyModule);
exports["AutoreplyModule"] = AutoreplyModule;