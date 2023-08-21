'use strict';

var __decorate = this && this['__decorate'] || function (_0x1909da, _0x66fb15, _0x2e428b, _0x2cdc16) {
  var _0x2bd4bc = arguments["length"],
      _0x1358b4 = _0x2bd4bc < 3 ? _0x66fb15 : _0x2cdc16 === null ? _0x2cdc16 = Object["getOwnPropertyDescriptor"](_0x66fb15, _0x2e428b) : _0x2cdc16,
      _0xe8d210;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x1358b4 = Reflect["decorate"](_0x1909da, _0x66fb15, _0x2e428b, _0x2cdc16);
  } else {
    for (var _0x2a4145 = _0x1909da["length"] - 1; _0x2a4145 >= 0; _0x2a4145--) {
      if (_0xe8d210 = _0x1909da[_0x2a4145]) {
        _0x1358b4 = (_0x2bd4bc < 3 ? _0xe8d210(_0x1358b4) : _0x2bd4bc > 3 ? _0xe8d210(_0x66fb15, _0x2e428b, _0x1358b4) : _0xe8d210(_0x66fb15, _0x2e428b)) || _0x1358b4;
      }
    }
  }

  _0x2bd4bc > 3 && _0x1358b4 && Object["defineProperty"](_0x66fb15, _0x2e428b, _0x1358b4);
  return _0x1358b4;
},
    __metadata = this && this["__metadata"] || function (_0x3a4335, _0x1019d4) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x3a4335, _0x1019d4);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["FanyiService"] = void 0;

const globalConfig_service_1 = require("./../globalConfig/globalConfig.service"),
      common_1 = require("@nestjs/common"),
      axios_1 = require('axios'),
      crypto = require('crypto');

let FanyiService = class FanyiService {
  constructor(_0x573a77) {
    this["globalConfigService"] = _0x573a77;
  }

  async ["convertToEnglish"](_0x56fa87) {
    if (!_0x56fa87) {
      throw new common_1["HttpException"]('请输入要翻译的内容!', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const {
      "baiduFanyiAppId": _0x3226f1,
      "baiduFanyiSecret": _0x3ba86e
    } = await this["globalConfigService"]["getConfigs"](['baiduFanyiAppId', 'baiduFanyiSecret']);

    if (!_0x3226f1 || !_0x3ba86e) {
      throw new common_1["HttpException"]("当前管理员还未开放翻译服务、请联系管理员开通吧!", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    const _0x4d8df5 = Date['now']()["toString"](),
          _0x45d00e = crypto["createHash"]('md5')["update"](_0x3226f1 + _0x56fa87 + _0x4d8df5 + _0x3ba86e)["digest"]("hex"),
          _0xa1b450 = "https://fanyi-api.baidu.com/api/trans/vip/translate",
          _0x18d716 = {
      'q': _0x56fa87["toString"](),
      'from': "auto",
      'to': 'en',
      'appid': _0x3226f1,
      'salt': _0x4d8df5,
      'sign': _0x45d00e
    },
          _0x299353 = await axios_1["default"]["post"](_0xa1b450, _0x18d716, {
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded"
      }
    }),
          {
      "from": _0x50154e,
      "to": _0x7b3187,
      "trans_result": _0x113288,
      "error_code": _0x2594e1,
      "error_msg": _0x253c37
    } = _0x299353["data"];

    if (_0x2594e1) {
      throw new common_1["HttpException"]("翻译失败[" + _0x2594e1 + '][' + _0x253c37 + ']!', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    if (!_0x113288 || !_0x113288["length"]) {
      throw new common_1["HttpException"]("翻译失败[" + _0x2594e1 + '][' + _0x253c37 + ']!', common_1["HttpStatus"]["BAD_REQUEST"]);
    } else {
      return _0x113288[0]["dst"];
    }

    return _0x113288;
  }

};
FanyiService = __decorate([(0, common_1["Injectable"])(), __metadata("design:paramtypes", [globalConfig_service_1["GlobalConfigService"]])], FanyiService);
exports["FanyiService"] = FanyiService;