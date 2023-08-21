'use strict';

var __decorate = this && this["__decorate"] || function (_0x5259e2, _0x470a1b, _0x3190b9, _0x50a458) {
  var _0xeee427 = arguments['length'],
      _0x53e397 = _0xeee427 < 3 ? _0x470a1b : _0x50a458 === null ? _0x50a458 = Object["getOwnPropertyDescriptor"](_0x470a1b, _0x3190b9) : _0x50a458,
      _0x9f7408;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x53e397 = Reflect["decorate"](_0x5259e2, _0x470a1b, _0x3190b9, _0x50a458);
  } else {
    for (var _0x3411d6 = _0x5259e2['length'] - 1; _0x3411d6 >= 0; _0x3411d6--) {
      if (_0x9f7408 = _0x5259e2[_0x3411d6]) {
        _0x53e397 = (_0xeee427 < 3 ? _0x9f7408(_0x53e397) : _0xeee427 > 3 ? _0x9f7408(_0x470a1b, _0x3190b9, _0x53e397) : _0x9f7408(_0x470a1b, _0x3190b9)) || _0x53e397;
      }
    }
  }

  _0xeee427 > 3 && _0x53e397 && Object["defineProperty"](_0x470a1b, _0x3190b9, _0x53e397);
  return _0x53e397;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['TaskModule'] = void 0;

const typeorm_1 = require("@nestjs/typeorm"),
      common_1 = require('@nestjs/common'),
      task_service_1 = require("./task.service"),
      schedule_1 = require('@nestjs/schedule'),
      userBalance_entity_1 = require("../userBalance/userBalance.entity");

let TaskModule = class TaskModule {};
TaskModule = __decorate([(0, common_1["Module"])({
  'imports': [schedule_1["ScheduleModule"]["forRoot"](), typeorm_1["TypeOrmModule"]["forFeature"]([userBalance_entity_1["UserBalanceEntity"]])],
  'providers': [task_service_1["TaskService"]]
})], TaskModule);
exports['TaskModule'] = TaskModule;