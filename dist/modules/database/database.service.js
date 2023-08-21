'use strict';

var __decorate = this && this["__decorate"] || function (_0x90b129, _0x4465c0, _0xb28d18, _0x3e2396) {
  var _0x4fe53f = arguments['length'],
      _0x3adeb0 = _0x4fe53f < 3 ? _0x4465c0 : _0x3e2396 === null ? _0x3e2396 = Object["getOwnPropertyDescriptor"](_0x4465c0, _0xb28d18) : _0x3e2396,
      _0x2f1625;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x3adeb0 = Reflect["decorate"](_0x90b129, _0x4465c0, _0xb28d18, _0x3e2396);
  } else {
    for (var _0x5885d2 = _0x90b129["length"] - 1; _0x5885d2 >= 0; _0x5885d2--) {
      if (_0x2f1625 = _0x90b129[_0x5885d2]) {
        _0x3adeb0 = (_0x4fe53f < 3 ? _0x2f1625(_0x3adeb0) : _0x4fe53f > 3 ? _0x2f1625(_0x4465c0, _0xb28d18, _0x3adeb0) : _0x2f1625(_0x4465c0, _0xb28d18)) || _0x3adeb0;
      }
    }
  }

  _0x4fe53f > 3 && _0x3adeb0 && Object["defineProperty"](_0x4465c0, _0xb28d18, _0x3adeb0);
  return _0x3adeb0;
},
    __metadata = this && this["__metadata"] || function (_0x176fdd, _0x2ba263) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x176fdd, _0x2ba263);
  }
};

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["DatabaseService"] = void 0;

const common_1 = require("@nestjs/common"),
      typeorm_1 = require("typeorm"),
      bcrypt = require("bcryptjs");

let DatabaseService = class DatabaseService {
  constructor(_0x22b631) {
    this['connection'] = _0x22b631;
  }

  async ["onModuleInit"]() {
    await this["checkSuperAdmin"]();
    await this["checkSiteBaseConfig"]();
  }

  async ["checkSuperAdmin"]() {
    const _0x315463 = await this["connection"]["query"]("SELECT * FROM users WHERE role = 'super'");

    if (!_0x315463 || _0x315463["length"] === 0) {
      const _0x151e5b = bcrypt["hashSync"]("nine-super", 10),
            _0x547f70 = bcrypt["hashSync"]("123456", 10),
            _0x1a5e98 = "default@cooper.com",
            _0x942b70 = "defaultAdmin@cooper.com",
            _0x2456c0 = {
        'username': 'super',
        'password': _0x151e5b,
        'status': 1,
        'email': _0x1a5e98,
        'sex': 1,
        'role': "super"
      },
            _0x3c2dbb = {
        'username': "admin",
        'password': _0x547f70,
        'status': 1,
        'email': _0x942b70,
        'sex': 1,
        'role': "admin"
      };

      await this['createDefaultUser'](_0x2456c0);
      await this["createDefaultUser"](_0x3c2dbb);
    }
  }

  async ["createDefaultUser"](_0x3371d7) {
    try {
      const {
        "username": _0x1d91d,
        "password": _0x135bca,
        "status": _0x1bb8a8,
        "email": _0x1e1690,
        "role": _0x3ebeed
      } = _0x3371d7,
            _0x26c510 = await this["connection"]["query"]("INSERT INTO users (username, password, status, email, role) VALUES ('" + _0x1d91d + "', '" + _0x135bca + "', '" + _0x1bb8a8 + "', '" + _0x1e1690 + "', '" + _0x3ebeed + "')");

      common_1['Logger']["log"]("初始化创建" + _0x3ebeed + "用户成功、用户名为[" + _0x1d91d + "]、初始密码为[" + (_0x1d91d === "super" ? 'nine-super' : '123456') + "] ==============> 请注意查阅", "DatabaseService");
    } catch (_0x5e1ab2) {
      console['log']("error: ", _0x5e1ab2);
      throw new common_1["HttpException"]("创建默认超级管理员失败！", common_1["HttpStatus"]["INTERNAL_SERVER_ERROR"]);
    }
  }

  async ["checkSiteBaseConfig"]() {
    const _0x32417f = ['siteName', "qqNumber", "vxNumber", "robotAvatar", "userDefautlAvatar"],
          _0x38981c = await this["connection"]["query"]("\n  SELECT COUNT(*) AS count FROM config WHERE `configKey` IN (" + _0x32417f['map'](_0x15ede9 => "'" + _0x15ede9 + "'")['join'](',') + ")\n"),
          _0x41636d = parseInt(_0x38981c[0]["count"]);

    _0x41636d === 0 && (await this["createBaseSiteConfig"]());
  }

  async ["createBaseSiteConfig"]() {
    try {
      const _0x4c1034 = "\n  <script>\n  var _hmt = _hmt || [];\n  (function() {\n    var hm = document.createElement(\"script\");\n    hm.src = \"https://hm.baidu.com/hm.js?cb8c9a3bcadbc200e950b05f9c61a385\";\n    var s = document.getElementsByTagName(\"script\")[0];\n    s.parentNode.insertBefore(hm, s);\n  })();\n  </script>\n",
            _0x1757f4 = "\n#### 公告设置\n - 前往后台设置\n - 前往后台设置\n - 前往后台设置\n - 前往后台设置\n - 前往后台设置\n - 前往后台设置\n";
      common_1['Logger']["log"]("初始化网站配置信息成功、如您需要修改网站配置信息，请前往管理系统系统配置设置 ==============> 请注意查阅", "DatabaseService");
    } catch (_0x3a76ce) {
      console["log"]("error: ", _0x3a76ce);
      throw new common_1["HttpException"]("创建默认网站配置失败！", common_1["HttpStatus"]["INTERNAL_SERVER_ERROR"]);
    }
  }

};
DatabaseService = __decorate([(0, common_1['Injectable'])(), __metadata("design:paramtypes", [typeorm_1['Connection']])], DatabaseService);
exports["DatabaseService"] = DatabaseService;