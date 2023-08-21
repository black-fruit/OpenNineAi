'use strict';

var __decorate = this && this['__decorate'] || function (_0xf39230, _0x18ec56, _0x45a3c6, _0x4a28bc) {
  var _0x37c0fd = arguments["length"],
      _0x45213c = _0x37c0fd < 3 ? _0x18ec56 : _0x4a28bc === null ? _0x4a28bc = Object["getOwnPropertyDescriptor"](_0x18ec56, _0x45a3c6) : _0x4a28bc,
      _0x36966f;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x45213c = Reflect['decorate'](_0xf39230, _0x18ec56, _0x45a3c6, _0x4a28bc);
  } else {
    for (var _0x43342c = _0xf39230["length"] - 1; _0x43342c >= 0; _0x43342c--) {
      if (_0x36966f = _0xf39230[_0x43342c]) {
        _0x45213c = (_0x37c0fd < 3 ? _0x36966f(_0x45213c) : _0x37c0fd > 3 ? _0x36966f(_0x18ec56, _0x45a3c6, _0x45213c) : _0x36966f(_0x18ec56, _0x45a3c6)) || _0x45213c;
      }
    }
  }

  _0x37c0fd > 3 && _0x45213c && Object['defineProperty'](_0x18ec56, _0x45a3c6, _0x45213c);
  return _0x45213c;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["AppModule"] = void 0;

const common_1 = require("@nestjs/common"),
      nestjs_config_1 = require("nestjs-config"),
      abort_interceptor_1 = require("./common/interceptors/abort.interceptor"),
      database_module_1 = require("./modules/database/database.module"),
      path_1 = require("path"),
      user_module_1 = require("./modules/user/user.module"),
      auth_module_1 = require("./modules/auth/auth.module"),
      mailer_module_1 = require("./modules/mailer/mailer.module"),
      verification_module_1 = require('./modules/verification/verification.module'),
      chatgpt_module_1 = require("./modules/chatgpt/chatgpt.module"),
      crami_module_1 = require("./modules/crami/crami.module"),
      userBalance_module_1 = require("./modules/userBalance/userBalance.module"),
      chatLog_module_1 = require("./modules/chatLog/chatLog.module"),
      upload_module_1 = require('./modules/upload/upload.module'),
      draw_module_1 = require('./modules/draw/draw.module'),
      redisCache_module_1 = require("./modules/redisCache/redisCache.module"),
      globalConfig_module_1 = require('./modules/globalConfig/globalConfig.module'),
      statistic_module_1 = require("./modules/statistic/statistic.module"),
      badwords_module_1 = require('./modules/badwords/badwords.module'),
      autoreply_module_1 = require("./modules/autoreply/autoreply.module"),
      app_module_1 = require("./modules/app/app.module"),
      pay_module_1 = require("./modules/pay/pay.module"),
      order_module_1 = require('./modules/order/order.module'),
      fanyi_module_1 = require("./modules/fanyi/fanyi.module"),
      official_module_1 = require("./modules/official/official.module"),
      task_module_1 = require("./modules/task/task.module"),
      queue_module_1 = require('./modules/queue/queue.module'),
      midjourney_module_1 = require("./modules/midjourney/midjourney.module"),
      chatGroup_module_1 = require("./modules/chatGroup/chatGroup.module"),
      serve_static_1 = require("@nestjs/serve-static"),
      fetch = require("isomorphic-fetch"),
      path_2 = require("path");

global['fetch'] = fetch;

const core_1 = require("@nestjs/core"),
      sales_module_1 = require("./modules/sales/sales.module"),
      signin_module_1 = require("./modules/signin/signin.module");

let AppModule = class AppModule {};
AppModule = __decorate([(0, common_1['Global'])(), (0, common_1["Module"])({
  'imports': [serve_static_1["ServeStaticModule"]["forRoot"]({
    'rootPath': (0, path_2['join'])(__dirname, '..', "public")
  }), nestjs_config_1['ConfigModule']["load"]((0, path_1["resolve"])(__dirname, 'config', '**/!(*.d).{ts,js}')), database_module_1["DatabaseModule"], user_module_1['UserModule'], auth_module_1["AuthModule"], mailer_module_1["MailerModule"], verification_module_1["VerificationModule"], chatgpt_module_1["ChatgptModule"], crami_module_1["CramiModule"], userBalance_module_1["UserBalanceModule"], chatLog_module_1['ChatLogModule'], upload_module_1["UploadModule"], draw_module_1["DrawModule"], redisCache_module_1["RedisCacheModule"], globalConfig_module_1["GlobalConfigModule"], statistic_module_1["StatisticModule"], badwords_module_1['BadwordsModule'], autoreply_module_1["AutoreplyModule"], app_module_1["AppModule"], pay_module_1["PayModule"], order_module_1['OrderModule'], fanyi_module_1["FanyiModule"], official_module_1["OfficialModule"], task_module_1["TaskModule"], queue_module_1["QueueModule"], midjourney_module_1['MidjourneyModule'], chatGroup_module_1["ChatGroupModule"], sales_module_1["SalesModule"], signin_module_1["SigninModule"]],
  'providers': [{
    'provide': core_1['APP_INTERCEPTOR'],
    'useClass': abort_interceptor_1['AbortInterceptor']
  }]
})], AppModule);
exports['AppModule'] = AppModule;