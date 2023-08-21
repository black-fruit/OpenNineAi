'use strict';

var __decorate = this && this["__decorate"] || function (_0x1a1fa9, _0x54fe7c, _0x18eec3, _0x506525) {
  var _0x3c3b6b = arguments["length"],
      _0x34bb23 = _0x3c3b6b < 3 ? _0x54fe7c : _0x506525 === null ? _0x506525 = Object["getOwnPropertyDescriptor"](_0x54fe7c, _0x18eec3) : _0x506525,
      _0xb77e32;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x34bb23 = Reflect['decorate'](_0x1a1fa9, _0x54fe7c, _0x18eec3, _0x506525);
  } else {
    for (var _0xc10085 = _0x1a1fa9["length"] - 1; _0xc10085 >= 0; _0xc10085--) {
      if (_0xb77e32 = _0x1a1fa9[_0xc10085]) {
        _0x34bb23 = (_0x3c3b6b < 3 ? _0xb77e32(_0x34bb23) : _0x3c3b6b > 3 ? _0xb77e32(_0x54fe7c, _0x18eec3, _0x34bb23) : _0xb77e32(_0x54fe7c, _0x18eec3)) || _0x34bb23;
      }
    }
  }

  _0x3c3b6b > 3 && _0x34bb23 && Object["defineProperty"](_0x54fe7c, _0x18eec3, _0x34bb23);
  return _0x34bb23;
},
    __metadata = this && this["__metadata"] || function (_0x2831fb, _0x454e82) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x2831fb, _0x454e82);
  }
},
    __param = this && this['__param'] || function (_0x24007c, _0x5f9e3f) {
  return function (_0x1e0665, _0x486599) {
    _0x5f9e3f(_0x1e0665, _0x486599, _0x24007c);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['AutoreplyService'] = void 0;

const common_1 = require("@nestjs/common"),
      autoreplay_entity_1 = require("./autoreplay.entity"),
      typeorm_1 = require('typeorm'),
      typeorm_2 = require("@nestjs/typeorm");

let AutoreplyService = class AutoreplyService {
  constructor(_0x3f8b54) {
    this["autoReplyEntity"] = _0x3f8b54;
    this["autoReplyKes"] = [];
    this["autoReplyMap"] = {};
    this['autoReplyFuzzyMatch'] = true;
  }

  async ["onModuleInit"]() {
    this["loadAutoReplyList"]();
  }

  async ["loadAutoReplyList"]() {
    const _0x214512 = await this["autoReplyEntity"]['find']({
      'where': {
        'status': 1
      },
      'select': ['prompt', "answer"]
    });

    this['autoReplyMap'] = {};

    _0x214512["forEach"](_0x36a85b => this["autoReplyMap"][_0x36a85b["prompt"]] = _0x36a85b["answer"]);

    this["autoReplyKes"] = Object['keys'](this['autoReplyMap']);
  }

  async ["checkAutoReply"](_0xfe20a8) {
    let _0x22080c = _0xfe20a8;
    this["autoReplyFuzzyMatch"] && (_0x22080c = this["autoReplyKes"]["find"](_0x20e5b2 => _0x20e5b2["includes"](_0xfe20a8)));
    return _0x22080c ? this["autoReplyMap"][_0x22080c] : '';
  }

  async ["queryAutoreply"](_0xc47ddf) {
    const {
      "page": page = 1,
      "size": size = 10,
      "prompt": _0x2ad88c,
      "status": _0x1624a6
    } = _0xc47ddf,
          _0xc03454 = {};
    [0, 1, '0', '1']['includes'](_0x1624a6) && (_0xc03454["status"] = _0x1624a6);
    _0x2ad88c && (_0xc03454['prompt'] = (0, typeorm_1['Like'])('%' + _0x2ad88c + '%'));
    const [_0x4ece79, _0x3c979d] = await this["autoReplyEntity"]["findAndCount"]({
      'where': _0xc03454,
      'skip': (page - 1) * size,
      'take': size,
      'order': {
        'id': "DESC"
      }
    });
    return {
      'rows': _0x4ece79,
      'count': _0x3c979d
    };
  }

  async ["addAutoreply"](_0x3a5e0a) {
    const {
      "prompt": _0x1851dc
    } = _0x3a5e0a,
          _0x41d298 = await this["autoReplyEntity"]["findOne"]({
      'where': {
        'prompt': _0x1851dc
      }
    });

    if (_0x41d298) {
      throw new common_1['HttpException']('该问题已存在,请检查您的提交信息', common_1['HttpStatus']["BAD_REQUEST"]);
    }

    await this["autoReplyEntity"]["save"](_0x3a5e0a);
    await this['loadAutoReplyList']();
    return "添加问题成功！";
  }

  async ["updateAutoreply"](_0x14d8f9) {
    const {
      "id": _0xc86675
    } = _0x14d8f9,
          _0x4223a5 = await this["autoReplyEntity"]['update']({
      'id': _0xc86675
    }, _0x14d8f9);

    if (_0x4223a5["affected"] > 0) {
      await this["loadAutoReplyList"]();
      return "更新问题成功";
    }

    throw new common_1["HttpException"]("更新失败", common_1["HttpStatus"]["BAD_REQUEST"]);
  }

  async ["delAutoreply"](_0x33b457) {
    const {
      "id": _0x1c6dca
    } = _0x33b457,
          _0x29555e = await this["autoReplyEntity"]['findOne']({
      'where': {
        'id': _0x1c6dca
      }
    });

    if (!_0x29555e) {
      throw new common_1['HttpException']("该问题不存在,请检查您的提交信息", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    const _0x396c6e = await this["autoReplyEntity"]["delete"]({
      'id': _0x1c6dca
    });

    if (_0x396c6e["affected"] > 0) {
      await this["loadAutoReplyList"]();
      return "删除问题成功";
    }

    throw new common_1["HttpException"]("删除失败", common_1["HttpStatus"]['BAD_REQUEST']);
  }

};
AutoreplyService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_2["InjectRepository"])(autoreplay_entity_1["AutoReplyEntity"])), __metadata("design:paramtypes", [typeorm_1["Repository"]])], AutoreplyService);
exports["AutoreplyService"] = AutoreplyService;