'use strict';

var __decorate = this && this["__decorate"] || function (_0x1c816f, _0x15e097, _0x91f870, _0x455655) {
  var _0x4fad99 = arguments["length"],
      _0x539269 = _0x4fad99 < 3 ? _0x15e097 : _0x455655 === null ? _0x455655 = Object['getOwnPropertyDescriptor'](_0x15e097, _0x91f870) : _0x455655,
      _0x19655c;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x539269 = Reflect["decorate"](_0x1c816f, _0x15e097, _0x91f870, _0x455655);
  } else {
    for (var _0x2485c4 = _0x1c816f["length"] - 1; _0x2485c4 >= 0; _0x2485c4--) {
      if (_0x19655c = _0x1c816f[_0x2485c4]) {
        _0x539269 = (_0x4fad99 < 3 ? _0x19655c(_0x539269) : _0x4fad99 > 3 ? _0x19655c(_0x15e097, _0x91f870, _0x539269) : _0x19655c(_0x15e097, _0x91f870)) || _0x539269;
      }
    }
  }

  _0x4fad99 > 3 && _0x539269 && Object["defineProperty"](_0x15e097, _0x91f870, _0x539269);
  return _0x539269;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["QueueModule"] = void 0;

const common_1 = require("@nestjs/common"),
      queue_controller_1 = require("./queue.controller"),
      queue_service_1 = require('./queue.service'),
      bull_1 = require("@nestjs/bull"),
      queue_process_1 = require("./queue.process");

let QueueModule = class QueueModule {};
QueueModule = __decorate([(0, common_1["Module"])({
  'imports': [bull_1['BullModule']["registerQueueAsync"]({
    'name': "MJDRAW",
    'useFactory': () => {
      const _0x49aa91 = {
        'port': +process['env']["REDIS_PORT"],
        'host': process["env"]["REDIS_HOST"]
      };
      process['env']["REDIS_PASSWORD"] && (_0x49aa91["password"] = process["env"]["REDIS_PASSWORD"]);
      return {
        'redis': _0x49aa91
      };
    }
  })],
  'controllers': [queue_controller_1["QueueController"]],
  'providers': [queue_service_1["QueueService"], queue_process_1["QueueProcessor"]]
})], QueueModule);
exports['QueueModule'] = QueueModule;