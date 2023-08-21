'use strict';

var __decorate = this && this['__decorate'] || function (_0x44f347, _0x18a47e, _0x250b1c, _0x17a472) {
  var _0x51b0c7 = arguments['length'],
      _0x52d533 = _0x51b0c7 < 3 ? _0x18a47e : _0x17a472 === null ? _0x17a472 = Object['getOwnPropertyDescriptor'](_0x18a47e, _0x250b1c) : _0x17a472,
      _0x2e4e71;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x52d533 = Reflect["decorate"](_0x44f347, _0x18a47e, _0x250b1c, _0x17a472);
  } else {
    for (var _0x2ba488 = _0x44f347["length"] - 1; _0x2ba488 >= 0; _0x2ba488--) {
      if (_0x2e4e71 = _0x44f347[_0x2ba488]) {
        _0x52d533 = (_0x51b0c7 < 3 ? _0x2e4e71(_0x52d533) : _0x51b0c7 > 3 ? _0x2e4e71(_0x18a47e, _0x250b1c, _0x52d533) : _0x2e4e71(_0x18a47e, _0x250b1c)) || _0x52d533;
      }
    }
  }

  _0x51b0c7 > 3 && _0x52d533 && Object["defineProperty"](_0x18a47e, _0x250b1c, _0x52d533);
  return _0x52d533;
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["ChatgptModule"] = void 0;

const common_1 = require("@nestjs/common"),
      chatgpt_controller_1 = require("./chatgpt.controller"),
      chatgpt_service_1 = require('./chatgpt.service'),
      userBalance_service_1 = require("../userBalance/userBalance.service"),
      typeorm_1 = require("@nestjs/typeorm"),
      balance_entity_1 = require("../userBalance/balance.entity"),
      user_service_1 = require("../user/user.service"),
      user_entity_1 = require('../user/user.entity'),
      verification_service_1 = require("../verification/verification.service"),
      verifycation_entity_1 = require("../verification/verifycation.entity"),
      chatLog_service_1 = require("../chatLog/chatLog.service"),
      chatLog_entity_1 = require("../chatLog/chatLog.entity"),
      accountLog_entity_1 = require('../userBalance/accountLog.entity'),
      config_entity_1 = require('../globalConfig/config.entity'),
      gptkeys_entity_1 = require('./gptkeys.entity'),
      whiteList_entity_1 = require("./whiteList.entity"),
      cramiPackage_entity_1 = require('../crami/cramiPackage.entity'),
      chatGroup_entity_1 = require('../chatGroup/chatGroup.entity'),
      app_entity_1 = require("../app/app.entity"),
      userBalance_entity_1 = require("../userBalance/userBalance.entity"),
      salesUsers_entity_1 = require('../sales/salesUsers.entity'),
      redisCache_service_1 = require("../redisCache/redisCache.service");

let ChatgptModule = class ChatgptModule {};
ChatgptModule = __decorate([(0, common_1["Module"])({
  'imports': [typeorm_1["TypeOrmModule"]["forFeature"]([balance_entity_1["BalanceEntity"], user_entity_1["UserEntity"], verifycation_entity_1["VerifycationEntity"], chatLog_entity_1['ChatLogEntity'], accountLog_entity_1["AccountLogEntity"], config_entity_1["ConfigEntity"], gptkeys_entity_1["GptKeysEntity"], whiteList_entity_1["WhiteListEntity"], user_entity_1['UserEntity'], cramiPackage_entity_1["CramiPackageEntity"], chatGroup_entity_1["ChatGroupEntity"], app_entity_1["AppEntity"], userBalance_entity_1["UserBalanceEntity"], salesUsers_entity_1["SalesUsersEntity"]])],
  'controllers': [chatgpt_controller_1["ChatgptController"]],
  'providers': [chatgpt_service_1['ChatgptService'], userBalance_service_1["UserBalanceService"], user_service_1["UserService"], verification_service_1["VerificationService"], chatLog_service_1["ChatLogService"], redisCache_service_1["RedisCacheService"]]
})], ChatgptModule);
exports["ChatgptModule"] = ChatgptModule;