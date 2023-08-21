'use strict';

var __decorate = this && this["__decorate"] || function (_0x27d338, _0x2ac99d, _0xe6be61, _0x2e515d) {
  var _0x5cd0e3 = arguments["length"],
      _0x2b3362 = _0x5cd0e3 < 3 ? _0x2ac99d : _0x2e515d === null ? _0x2e515d = Object['getOwnPropertyDescriptor'](_0x2ac99d, _0xe6be61) : _0x2e515d,
      _0x1dc339;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x2b3362 = Reflect["decorate"](_0x27d338, _0x2ac99d, _0xe6be61, _0x2e515d);
  } else {
    for (var _0x599305 = _0x27d338["length"] - 1; _0x599305 >= 0; _0x599305--) {
      if (_0x1dc339 = _0x27d338[_0x599305]) {
        _0x2b3362 = (_0x5cd0e3 < 3 ? _0x1dc339(_0x2b3362) : _0x5cd0e3 > 3 ? _0x1dc339(_0x2ac99d, _0xe6be61, _0x2b3362) : _0x1dc339(_0x2ac99d, _0xe6be61)) || _0x2b3362;
      }
    }
  }

  _0x5cd0e3 > 3 && _0x2b3362 && Object["defineProperty"](_0x2ac99d, _0xe6be61, _0x2b3362);
  return _0x2b3362;
},
    __metadata = this && this['__metadata'] || function (_0x392be3, _0x2ad256) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x392be3, _0x2ad256);
  }
},
    __param = this && this["__param"] || function (_0x2c6c76, _0x327efb) {
  return function (_0x5d73a9, _0x3836c2) {
    _0x327efb(_0x5d73a9, _0x3836c2, _0x2c6c76);
  };
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports['ChatGroupService'] = void 0;

const common_1 = require('@nestjs/common'),
      chatGroup_entity_1 = require('./chatGroup.entity'),
      typeorm_1 = require("@nestjs/typeorm"),
      typeorm_2 = require("typeorm"),
      app_entity_1 = require("../app/app.entity");

let ChatGroupService = class ChatGroupService {
  constructor(_0x5110b4, _0x182606) {
    this["chatGroupEntity"] = _0x5110b4;
    this['appEntity'] = _0x182606;
  }

  async ["create"](_0x48df37, _0x4d1e95) {
    const {
      "id": _0x416bb7
    } = _0x4d1e95["user"],
          {
      "appId": _0x37411c
    } = _0x48df37,
          _0x10bfdd = {
      'title': "新对话",
      'userId': _0x416bb7
    };

    if (_0x37411c) {
      const _0x386e7c = await this["appEntity"]["findOne"]({
        'where': {
          'id': _0x37411c
        }
      });

      if (!_0x386e7c) {
        throw new common_1['HttpException']('非法操作、您在使用一个不存在的应用！', common_1["HttpStatus"]['BAD_REQUEST']);
      } else {
        const {
          "status": _0x2fc12b,
          "name": _0x59803a
        } = _0x386e7c,
              _0x190759 = await this["chatGroupEntity"]["count"]({
          'where': {
            'userId': _0x416bb7,
            'appId': _0x37411c,
            'isDelete': false
          }
        });

        if (_0x190759 > 0) {
          throw new common_1["HttpException"]('当前应用已经开启了一个对话无需新建了！', common_1["HttpStatus"]['BAD_REQUEST']);
        }

        if (![1, 3, 4, 5]["includes"](_0x2fc12b)) {
          throw new common_1["HttpException"]("非法操作、您在使用一个未启用的应用！", common_1['HttpStatus']["BAD_REQUEST"]);
        }

        _0x59803a && (_0x10bfdd["title"] = _0x59803a);
        _0x37411c && (_0x10bfdd['appId'] = _0x37411c);
      }
    }

    return await this["chatGroupEntity"]["save"](_0x10bfdd);
  }

  async ["query"](_0x5b2b3d) {
    const {
      "id": _0x54680e
    } = _0x5b2b3d["user"],
          _0x57a1f7 = {
      'userId': _0x54680e,
      'isDelete': false
    };
    return await this["chatGroupEntity"]["find"]({
      'where': _0x57a1f7,
      'order': {
        'isSticky': "DESC",
        'id': "DESC"
      }
    });
  }

  async ["update"](_0x2e63be, _0x194d2c) {
    const {
      "title": _0x58dd0c,
      "isSticky": _0x262c24,
      "groupId": _0x2f66b3
    } = _0x2e63be,
          {
      "id": _0x129daf
    } = _0x194d2c["user"],
          _0x55fe57 = await this["chatGroupEntity"]["findOne"]({
      'where': {
        'id': _0x2f66b3,
        'userId': _0x129daf
      }
    });

    if (!_0x55fe57) {
      throw new common_1["HttpException"]('非法操作、您在修改一个非法资源！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const {
      "appId": _0x1c9681
    } = _0x55fe57;

    if (_0x1c9681) {
      throw new common_1["HttpException"]("应用对话名称不能修改哟！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x1d0cb3 = {};
    _0x58dd0c && (_0x1d0cb3["title"] = _0x58dd0c);
    typeof _0x262c24 !== 'undefined' && (_0x1d0cb3["isSticky"] = _0x262c24);

    const _0x299c79 = await this["chatGroupEntity"]['update']({
      'id': _0x2f66b3
    }, _0x1d0cb3);

    if (_0x299c79['affected']) {
      return true;
    } else {
      throw new common_1["HttpException"]("更新对话失败！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["del"](_0xf0dea4, _0x149cf5) {
    const {
      "groupId": _0x14da01
    } = _0xf0dea4,
          {
      "id": _0x109177
    } = _0x149cf5['user'],
          _0xaf92e4 = await this["chatGroupEntity"]['findOne']({
      'where': {
        'id': _0x14da01,
        'userId': _0x109177
      }
    });

    if (!_0xaf92e4) {
      throw new common_1["HttpException"]("非法操作、您在删除一个非法资源！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x2a0b78 = await this["chatGroupEntity"]["update"]({
      'id': _0x14da01
    }, {
      'isDelete': true
    });

    if (_0x2a0b78['affected']) {
      return "删除成功";
    } else {
      throw new common_1["HttpException"]("删除失败！", common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["delAll"](_0x471ff4) {
    const {
      "id": _0x4c452d
    } = _0x471ff4["user"],
          _0x1b1d70 = await this['chatGroupEntity']["update"]({
      'userId': _0x4c452d,
      'isSticky': false,
      'isDelete': false
    }, {
      'isDelete': true
    });

    if (_0x1b1d70["affected"]) {
      return "删除成功";
    } else {
      throw new common_1['HttpException']("删除失败！", common_1['HttpStatus']['BAD_REQUEST']);
    }
  }

};
ChatGroupService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_1["InjectRepository"])(chatGroup_entity_1["ChatGroupEntity"])), __param(1, (0, typeorm_1["InjectRepository"])(app_entity_1['AppEntity'])), __metadata("design:paramtypes", [typeorm_2["Repository"], typeorm_2["Repository"]])], ChatGroupService);
exports['ChatGroupService'] = ChatGroupService;