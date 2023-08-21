'use strict';

var __decorate = this && this["__decorate"] || function (_0x5e31e9, _0x14c58e, _0x3ce656, _0x37c530) {
  var _0x3d3bc2 = arguments['length'],
      _0x3046fc = _0x3d3bc2 < 3 ? _0x14c58e : _0x37c530 === null ? _0x37c530 = Object["getOwnPropertyDescriptor"](_0x14c58e, _0x3ce656) : _0x37c530,
      _0x4b0460;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x3046fc = Reflect["decorate"](_0x5e31e9, _0x14c58e, _0x3ce656, _0x37c530);
  } else {
    for (var _0x530615 = _0x5e31e9['length'] - 1; _0x530615 >= 0; _0x530615--) {
      if (_0x4b0460 = _0x5e31e9[_0x530615]) {
        _0x3046fc = (_0x3d3bc2 < 3 ? _0x4b0460(_0x3046fc) : _0x3d3bc2 > 3 ? _0x4b0460(_0x14c58e, _0x3ce656, _0x3046fc) : _0x4b0460(_0x14c58e, _0x3ce656)) || _0x3046fc;
      }
    }
  }

  _0x3d3bc2 > 3 && _0x3046fc && Object['defineProperty'](_0x14c58e, _0x3ce656, _0x3046fc);
  return _0x3046fc;
},
    __metadata = this && this['__metadata'] || function (_0x5a3d4e, _0x5be63c) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x5a3d4e, _0x5be63c);
  }
},
    __param = this && this["__param"] || function (_0xfa8331, _0x428882) {
  return function (_0x57e738, _0x76de9e) {
    _0x428882(_0x57e738, _0x76de9e, _0xfa8331);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["BadwordsService"] = void 0;

const globalConfig_service_1 = require('./../globalConfig/globalConfig.service'),
      common_1 = require("@nestjs/common"),
      badwords_entity_1 = require('./badwords.entity'),
      typeorm_1 = require("typeorm"),
      typeorm_2 = require('@nestjs/typeorm'),
      axios_1 = require("axios");

let BadwordsService = class BadwordsService {
  constructor(_0x1f800a, _0x549763) {
    this["badWordsEntity"] = _0x1f800a;
    this['globalConfigService'] = _0x549763;
    this["badWords"] = [];
  }

  async ["onModuleInit"]() {
    this["loadBadWords"]();
  }

  async ["checkBadWords"](_0x19f2b9) {
    const _0x7db4dd = await this['globalConfigService']['getConfigs'](['baiduTextAccessToken']);

    if (_0x7db4dd) {
      const {
        "success": _0x2af51d,
        "msg": _0x4ae7a3
      } = await this["baiduCheckBadWords"](_0x19f2b9, _0x7db4dd);

      if (!_0x2af51d) {
        throw new common_1["HttpException"](_0x4ae7a3, common_1["HttpStatus"]["BAD_REQUEST"]);
      }
    }

    const _0x5e6a30 = this["badWords"]['some'](_0x5f5138 => {
      if (_0x19f2b9["includes"](_0x5f5138)) {
        return true;
      }
    });

    return _0x5e6a30;
  }

  async ["baiduCheckBadWords"](_0x41d06e, _0x10b43e) {
    const _0x5cb337 = "https://aip.baidubce.com/rest/2.0/solution/v1/text_censor/v2/user_defined?access_token=" + _0x10b43e + '}',
          _0x4118ca = {
      'Content-Type': "application/x-www-form-urlencoded",
      'Accept': "application/json"
    },
          _0x3ab5f2 = await axios_1['default']["post"](_0x5cb337, {
      'text': _0x41d06e
    }, {
      'headers': _0x4118ca
    }),
          {
      "conclusion": _0x298c24,
      "error_code": _0x1cb823,
      "error_msg": _0x10f643,
      "conclusionType": _0x1b930c,
      "data": _0x47b46e
    } = _0x3ab5f2["data"];

    _0x1cb823 && console['log']("百度文本检测出现错误、请查看配置信息: ", _0x10f643);

    if (_0x1b930c === 1) {
      return {
        'success': true,
        'msg': "百度文本检测合规"
      };
    } else {
      let _0x384731 = '';
      _0x47b46e["length"] && (_0x384731 = _0x47b46e[0]["msg"]);
      return {
        'success': false,
        'msg': "您的言语中" + _0x384731 + "、请注意您的发言！"
      };
    }
  }

  async ["loadBadWords"]() {
    const _0x1837d7 = await this["badWordsEntity"]["find"]({
      'where': {
        'status': 1
      },
      'select': ["word"]
    });

    this["badWords"] = _0x1837d7["map"](_0x1873f6 => _0x1873f6["word"]);
  }

  async ["queryBadWords"](_0x3c208a) {
    const {
      "page": page = 1,
      "size": size = 500,
      "word": _0x2eb48e,
      "status": _0x332c2d
    } = _0x3c208a,
          _0x54244f = {};
    [0, 1, '0', '1']["includes"](_0x332c2d) && (_0x54244f['status'] = _0x332c2d);
    _0x2eb48e && (_0x54244f["word"] = (0, typeorm_1["Like"])('%' + _0x2eb48e + '%'));
    const [_0x2569e4, _0x453845] = await this["badWordsEntity"]["findAndCount"]({
      'where': _0x54244f,
      'skip': (page - 1) * size,
      'take': size,
      'order': {
        'id': 'ASC'
      }
    });
    return {
      'rows': _0x2569e4,
      'count': _0x453845
    };
  }

  async ["delBadWords"](_0x3977f3) {
    const _0x4d304d = await this["badWordsEntity"]["findOne"]({
      'where': {
        'id': _0x3977f3['id']
      }
    });

    if (!_0x4d304d) {
      throw new common_1["HttpException"]("敏感词不存在,请检查您的提交信息", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x5647bf = await this["badWordsEntity"]["delete"]({
      'id': _0x3977f3['id']
    });

    if (_0x5647bf["affected"] > 0) {
      await this["loadBadWords"]();
      return "删除敏感词成功";
    } else {
      throw new common_1["HttpException"]("删除敏感词失败", common_1['HttpStatus']['BAD_REQUEST']);
    }
  }

  async ["updateBadWords"](_0x1651b9) {
    const {
      "id": _0x47a186,
      "word": _0x5ec441,
      "status": _0x4a514c
    } = _0x1651b9,
          _0x1443e2 = await this["badWordsEntity"]['findOne']({
      'where': {
        'word': _0x5ec441
      }
    });

    if (_0x1443e2) {
      throw new common_1["HttpException"]("敏感词已经存在了、请勿重复添加", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    const _0x458645 = await this["badWordsEntity"]["update"]({
      'id': _0x47a186
    }, {
      'word': _0x5ec441,
      'status': _0x4a514c
    });

    if (_0x458645["affected"] > 0) {
      await this["loadBadWords"]();
      return "更新敏感词成功";
    } else {
      throw new common_1["HttpException"]("更新敏感词失败", common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["addBadWord"](_0x16131f) {
    const {
      "word": _0x1c579c
    } = _0x16131f,
          _0x4a303f = await this["badWordsEntity"]["findOne"]({
      'where': {
        'word': _0x1c579c
      }
    });

    if (_0x4a303f) {
      throw new common_1["HttpException"]("敏感词已存在,请检查您的提交信息", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    await this['badWordsEntity']["save"]({
      'word': _0x1c579c
    });
    await this['loadBadWords']();
    return "添加敏感词成功";
  }

};
BadwordsService = __decorate([(0, common_1['Injectable'])(), __param(0, (0, typeorm_2["InjectRepository"])(badwords_entity_1['BadWordsEntity'])), __metadata("design:paramtypes", [typeorm_1['Repository'], globalConfig_service_1["GlobalConfigService"]])], BadwordsService);
exports['BadwordsService'] = BadwordsService;