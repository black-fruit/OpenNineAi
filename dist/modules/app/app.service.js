'use strict';

var __decorate = this && this['__decorate'] || function (_0x4f3b2f, _0x1ac48d, _0x54713b, _0x16d97b) {
  var _0xa4f674 = arguments["length"],
      _0x34f8b6 = _0xa4f674 < 3 ? _0x1ac48d : _0x16d97b === null ? _0x16d97b = Object["getOwnPropertyDescriptor"](_0x1ac48d, _0x54713b) : _0x16d97b,
      _0x30648c;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === 'function') {
    _0x34f8b6 = Reflect["decorate"](_0x4f3b2f, _0x1ac48d, _0x54713b, _0x16d97b);
  } else {
    for (var _0x2f2d3d = _0x4f3b2f["length"] - 1; _0x2f2d3d >= 0; _0x2f2d3d--) {
      if (_0x30648c = _0x4f3b2f[_0x2f2d3d]) {
        _0x34f8b6 = (_0xa4f674 < 3 ? _0x30648c(_0x34f8b6) : _0xa4f674 > 3 ? _0x30648c(_0x1ac48d, _0x54713b, _0x34f8b6) : _0x30648c(_0x1ac48d, _0x54713b)) || _0x34f8b6;
      }
    }
  }

  _0xa4f674 > 3 && _0x34f8b6 && Object["defineProperty"](_0x1ac48d, _0x54713b, _0x34f8b6);
  return _0x34f8b6;
},
    __metadata = this && this['__metadata'] || function (_0x5e8aed, _0x3b60fe) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x5e8aed, _0x3b60fe);
  }
},
    __param = this && this['__param'] || function (_0x254112, _0xca2d93) {
  return function (_0x12386b, _0x5e0494) {
    _0xca2d93(_0x12386b, _0x5e0494, _0x254112);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["AppService"] = void 0;

const common_1 = require("@nestjs/common"),
      appCats_entity_1 = require("./appCats.entity"),
      typeorm_1 = require("typeorm"),
      typeorm_2 = require('@nestjs/typeorm'),
      app_entity_1 = require("./app.entity"),
      userApps_entity_1 = require("./userApps.entity");

let AppService = class AppService {
  constructor(_0x30d829, _0x51ed8d, _0x51b3bb) {
    this["appCatsEntity"] = _0x30d829;
    this["appEntity"] = _0x51ed8d;
    this["userAppsEntity"] = _0x51b3bb;
  }

  async ["createAppCat"](_0x34de4d) {
    const {
      "name": _0x277b73
    } = _0x34de4d,
          _0x396d9f = await this["appCatsEntity"]['findOne']({
      'where': {
        'name': _0x277b73
      }
    });

    if (_0x396d9f) {
      throw new common_1["HttpException"]("该分类名称已存在！", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    return await this["appCatsEntity"]['save'](_0x34de4d);
  }

  async ["delAppCat"](_0x182acb) {
    const {
      "id": _0x120872
    } = _0x182acb,
          _0x1c17a0 = await this["appCatsEntity"]["findOne"]({
      'where': {
        'id': _0x120872
      }
    });

    if (!_0x1c17a0) {
      throw new common_1["HttpException"]("该分类不存在！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x498b18 = await this["appEntity"]["count"]({
      'where': {
        'catId': _0x120872
      }
    });

    if (_0x498b18 > 0) {
      throw new common_1["HttpException"]("该分类下存在App，不可删除！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x445010 = await this['appCatsEntity']["delete"](_0x120872);

    if (_0x445010["affected"] > 0) {
      return "删除成功";
    }

    throw new common_1["HttpException"]('删除失败！', common_1["HttpStatus"]["BAD_REQUEST"]);
  }

  async ['updateAppCats'](_0x5daa61) {
    const {
      "id": _0x287b9b,
      "name": _0x38a694
    } = _0x5daa61,
          _0x3ac065 = await this["appCatsEntity"]['findOne']({
      'where': {
        'name': _0x38a694,
        'id': (0, typeorm_1["Not"])(_0x287b9b)
      }
    });

    if (_0x3ac065) {
      throw new common_1["HttpException"]('该分类名称已存在！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x2400a7 = await this['appCatsEntity']['update']({
      'id': _0x287b9b
    }, _0x5daa61);

    if (_0x2400a7["affected"] > 0) {
      return '修改成功';
    }

    throw new common_1["HttpException"]("修改失败！", common_1["HttpStatus"]["BAD_REQUEST"]);
  }

  async ['appCatsList'](_0x44a542) {
    const {
      "page": page = 1,
      "size": size = 10,
      "name": _0x317756,
      "status": _0x3db905
    } = _0x44a542,
          _0x56e492 = {};
    _0x317756 && (_0x56e492["name"] = (0, typeorm_1['Like'])('%' + _0x317756 + '%'));
    [0, 1, '0', '1']["includes"](_0x3db905) && (_0x56e492["status"] = _0x3db905);

    const [_0x258cbf, _0x5c3ffd] = await this["appCatsEntity"]['findAndCount']({
      'where': _0x56e492,
      'order': {
        'order': 'DESC'
      },
      'skip': (page - 1) * size,
      'take': size
    }),
          _0x1b083d = _0x258cbf['map'](_0x336eb1 => _0x336eb1['id']),
          _0x3041eb = await this['appEntity']['find']({
      'where': {
        'catId': (0, typeorm_1['In'])(_0x1b083d)
      }
    }),
          _0x26650c = {};

    _0x3041eb["forEach"](_0x2b23bf => {
      _0x26650c[_0x2b23bf["catId"]] ? _0x26650c[_0x2b23bf["catId"]] += 1 : _0x26650c[_0x2b23bf["catId"]] = 1;
    });

    _0x258cbf["forEach"](_0x567652 => _0x567652["appCount"] = _0x26650c[_0x567652['id']] || 0);

    return {
      'rows': _0x258cbf,
      'count': _0x5c3ffd
    };
  }

  async ["appList"](_0x2e0347, _0x147eb2, _0x140b2a = 'id') {
    var _0x5d6d92;

    const {
      "page": page = 1,
      "size": size = 10,
      "name": _0x32a642,
      "status": _0x528050,
      "catId": _0x475043,
      "role": _0x2d4379
    } = _0x147eb2,
          _0xf04351 = {};
    _0x32a642 && (_0xf04351['name'] = (0, typeorm_1["Like"])('%' + _0x32a642 + '%'));
    _0x475043 && (_0xf04351["catId"] = _0x475043);
    _0x2d4379 && (_0xf04351['role'] = _0x2d4379);
    _0x528050 && (_0xf04351["status"] = _0x528050);

    const [_0x4e6bf9, _0x4a38b1] = await this['appEntity']["findAndCount"]({
      'where': _0xf04351,
      'order': {
        [_0x140b2a]: 'DESC'
      },
      'skip': (page - 1) * size,
      'take': size
    }),
          _0x3c4bf6 = _0x4e6bf9["map"](_0x31cff9 => _0x31cff9["catId"]),
          _0x53afbe = await this["appCatsEntity"]['find']({
      'where': {
        'id': (0, typeorm_1['In'])(_0x3c4bf6)
      }
    });

    _0x4e6bf9["forEach"](_0xe2fb72 => {
      const _0x4c6053 = _0x53afbe["find"](_0x5b09a1 => _0x5b09a1['id'] === _0xe2fb72["catId"]);

      _0xe2fb72["catName"] = _0x4c6053 ? _0x4c6053["name"] : '';
    });

    ((_0x5d6d92 = _0x2e0347 === null || _0x2e0347 === void 0 ? void 0 : _0x2e0347["user"]) === null || _0x5d6d92 === void 0 ? void 0 : _0x5d6d92["role"]) !== "super" && _0x4e6bf9["forEach"](_0x3f4463 => {
      delete _0x3f4463["preset"];
    });
    return {
      'rows': _0x4e6bf9,
      'count': _0x4a38b1
    };
  }

  async ['frontAppList'](_0x25c331, _0x4b1040, _0x3d8c68 = 'id') {
    var _0x4d42e3;

    const {
      "page": page = 1,
      "size": size = 1000,
      "name": _0x104014,
      "catId": _0x161e28,
      "role": _0x4eba7e
    } = _0x4b1040,
          _0x3d072a = [{
      'status': (0, typeorm_1['In'])([1, 4]),
      'userId': (0, typeorm_1["IsNull"])(),
      'public': false
    }, {
      'userId': (0, typeorm_1["MoreThan"])(0),
      'public': true
    }],
          [_0x43c9d2, _0xa9f03d] = await this['appEntity']['findAndCount']({
      'where': _0x3d072a,
      'order': {
        'order': 'DESC'
      },
      'skip': (page - 1) * size,
      'take': size
    }),
          _0x252e37 = _0x43c9d2["map"](_0x3e11fd => _0x3e11fd["catId"]),
          _0x59b6a1 = await this["appCatsEntity"]["find"]({
      'where': {
        'id': (0, typeorm_1['In'])(_0x252e37)
      }
    });

    _0x43c9d2["forEach"](_0x215805 => {
      const _0x3bfcb5 = _0x59b6a1["find"](_0x1d4758 => _0x1d4758['id'] === _0x215805["catId"]);

      _0x215805["catName"] = _0x3bfcb5 ? _0x3bfcb5["name"] : '';
    });

    ((_0x4d42e3 = _0x25c331 === null || _0x25c331 === void 0 ? void 0 : _0x25c331["user"]) === null || _0x4d42e3 === void 0 ? void 0 : _0x4d42e3["role"]) !== "super" && _0x43c9d2["forEach"](_0x2e1414 => {
      delete _0x2e1414["preset"];
    });
    return {
      'rows': _0x43c9d2,
      'count': _0xa9f03d
    };
  }

  async ["createApp"](_0x228411) {
    const {
      "name": _0x59c350,
      "catId": _0x5f03c7
    } = _0x228411;
    _0x228411["role"] = "system";

    const _0x5b3979 = await this["appEntity"]["findOne"]({
      'where': {
        'name': _0x59c350
      }
    });

    if (_0x5b3979) {
      throw new common_1["HttpException"]("该应用名称已存在！", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    const _0x2a3ebc = await this["appCatsEntity"]["findOne"]({
      'where': {
        'id': _0x5f03c7
      }
    });

    if (!_0x2a3ebc) {
      throw new common_1["HttpException"]("该分类不存在！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    return await this["appEntity"]["save"](_0x228411);
  }

  async ["customApp"](_0x47ed68, _0x3415ed) {
    const {
      "id": _0x20bf8b
    } = _0x3415ed["user"],
          {
      "name": _0xe88a6,
      "catId": _0x3013a4,
      "des": _0x32d3b5,
      "preset": _0x5a7d37,
      "coverImg": _0x46da97,
      "demoData": _0x472093,
      "public": _0x571c7d,
      "appId": _0x3c9942
    } = _0x47ed68;

    if (_0x3c9942) {
      const _0x5126c3 = await this['appEntity']['findOne']({
        'where': {
          'id': _0x3c9942,
          'userId': _0x20bf8b
        }
      });

      if (!_0x5126c3) {
        throw new common_1["HttpException"]("您正在编辑一个不存在的应用！", common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const _0x1bb3fc = {
        'name': _0xe88a6,
        'catId': _0x3013a4,
        'des': _0x32d3b5,
        'preset': _0x5a7d37,
        'coverImg': _0x46da97,
        'demoData': _0x472093,
        'public': _0x571c7d,
        'status': _0x571c7d ? 3 : 1
      },
            _0xc8d259 = await this['appEntity']["update"]({
        'id': _0x3c9942,
        'userId': _0x20bf8b
      }, _0x1bb3fc);

      if (_0xc8d259["affected"]) {
        return "修改成功";
      } else {
        throw new common_1["HttpException"]("修改失败！", common_1['HttpStatus']["BAD_REQUEST"]);
      }
    }

    if (!_0x3c9942) {
      const _0x4baba7 = await this['appCatsEntity']["findOne"]({
        'where': {
          'id': _0x3013a4
        }
      });

      if (!_0x4baba7) {
        throw new common_1["HttpException"]('该分类不存在！', common_1["HttpStatus"]['BAD_REQUEST']);
      }

      const _0x5e8228 = await this['appEntity']['findOne']({
        'where': {
          'name': _0xe88a6
        }
      });

      if (_0x5e8228) {
        throw new common_1['HttpException']("该应用名称已存在！", common_1['HttpStatus']["BAD_REQUEST"]);
      }

      const _0x164781 = {
        'name': _0xe88a6,
        'catId': _0x3013a4,
        'des': _0x32d3b5,
        'preset': _0x5a7d37,
        'coverImg': _0x46da97,
        'status': _0x571c7d ? 3 : 1,
        'demoData': _0x472093,
        'public': _0x571c7d,
        'role': 'user',
        'userId': _0x20bf8b
      },
            _0xa47de6 = await this['appEntity']["save"](_0x164781),
            _0x311287 = {
        'appId': _0xa47de6['id'],
        'userId': _0x20bf8b,
        'appType': 'user',
        'public': _0x571c7d,
        'status': _0x571c7d ? 3 : 1,
        'catId': _0x3013a4
      };

      return this['userAppsEntity']["save"](_0x311287);
    }
  }

  async ["updateApp"](_0x552b2e) {
    const {
      "id": _0x121086,
      "name": _0x3556b1,
      "catId": _0x23fb45,
      "status": _0x2388e5
    } = _0x552b2e,
          _0x5d160a = await this["appEntity"]["findOne"]({
      'where': {
        'name': _0x3556b1,
        'id': (0, typeorm_1["Not"])(_0x121086)
      }
    });

    if (_0x5d160a) {
      throw new common_1['HttpException']("该应用名称已存在！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x365559 = await this["appCatsEntity"]["findOne"]({
      'where': {
        'id': _0x23fb45
      }
    });

    if (!_0x365559) {
      throw new common_1['HttpException']("该分类不存在！", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x1ac919 = await this["appEntity"]['findOne']({
      'where': {
        'id': _0x121086
      }
    });

    _0x1ac919["status"] !== _0x552b2e["status"] && (await this["userAppsEntity"]["update"]({
      'appId': _0x121086
    }, {
      'status': _0x2388e5
    }));

    const _0x17cb67 = await this["appEntity"]["update"]({
      'id': _0x121086
    }, _0x552b2e);

    if (_0x17cb67["affected"] > 0) {
      return '修改App信息成功';
    }

    throw new common_1["HttpException"]("修改App信息失败！", common_1['HttpStatus']['BAD_REQUEST']);
  }

  async ["delApp"](_0x41452c) {
    const {
      "id": _0x2fcba0
    } = _0x41452c,
          _0x277140 = await this['appEntity']["findOne"]({
      'where': {
        'id': _0x2fcba0
      }
    });

    if (!_0x277140) {
      throw new common_1["HttpException"]('该应用不存在！', common_1['HttpStatus']['BAD_REQUEST']);
    }

    const _0x183655 = await this['userAppsEntity']['count']({
      'where': {
        'appId': _0x2fcba0
      }
    });

    if (_0x183655 > 0) {
      throw new common_1["HttpException"]("该应用已被用户关联使用中，不可删除！", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    const _0x27bd92 = await this["appEntity"]["delete"](_0x2fcba0);

    if (_0x27bd92["affected"] > 0) {
      return "删除App成功";
    }

    throw new common_1["HttpException"]("删除App失败！", common_1["HttpStatus"]["BAD_REQUEST"]);
  }

  async ["auditPass"](_0x1133d1) {
    const {
      "id": _0xe6731e
    } = _0x1133d1,
          _0x32cfc9 = await this['appEntity']["findOne"]({
      'where': {
        'id': _0xe6731e,
        'status': 3
      }
    });

    console["log"]("a: ", _0x32cfc9);

    if (!_0x32cfc9) {
      throw new common_1["HttpException"]("该应用不存在！", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    await this['appEntity']["update"]({
      'id': _0xe6731e
    }, {
      'status': 4
    });
    await this["userAppsEntity"]["update"]({
      'appId': _0xe6731e
    }, {
      'status': 4
    });
    return "应用审核通过";
  }

  async ["auditFail"](_0x23082e) {
    const {
      "id": _0x216b77
    } = _0x23082e,
          _0x2c5f5d = await this["appEntity"]["findOne"]({
      'where': {
        'id': _0x216b77,
        'status': 3
      }
    });

    if (!_0x2c5f5d) {
      throw new common_1["HttpException"]('该应用不存在！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    await this["appEntity"]["update"]({
      'id': _0x216b77
    }, {
      'status': 5
    });
    await this["userAppsEntity"]["update"]({
      'appId': _0x216b77
    }, {
      'status': 5
    });
    return "应用审核拒绝完成";
  }

  async ["delMineApp"](_0x221534, _0x574e1c) {
    const {
      "id": _0x21e571
    } = _0x221534,
          _0x538112 = await this["appEntity"]["findOne"]({
      'where': {
        'id': _0x21e571,
        'userId': _0x574e1c["user"]['id']
      }
    });

    if (!_0x538112) {
      throw new common_1['HttpException']('您正在操作一个不存在的资源！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    await this["appEntity"]["delete"](_0x21e571);
    await this["userAppsEntity"]["delete"]({
      'appId': _0x21e571,
      'userId': _0x574e1c["user"]['id']
    });
    return "删除应用成功！";
  }

  async ["collect"](_0x55422b, _0xae24c8) {
    const {
      "appId": _0x4add51
    } = _0x55422b,
          {
      "id": _0x141d62
    } = _0xae24c8["user"],
          _0x35a6fb = await this["userAppsEntity"]["findOne"]({
      'where': {
        'appId': _0x4add51,
        'userId': _0x141d62
      }
    });

    if (_0x35a6fb) {
      const _0x418d57 = await this["userAppsEntity"]['delete']({
        'appId': _0x4add51,
        'userId': _0x141d62
      });

      if (_0x418d57["affected"] > 0) {
        return "取消收藏成功!";
      } else {
        throw new common_1["HttpException"]("取消收藏失败！", common_1["HttpStatus"]["BAD_REQUEST"]);
      }
    }

    const _0x17cb65 = await this["appEntity"]["findOne"]({
      'where': {
        'id': _0x4add51
      }
    }),
          {
      "id": _0x1be091,
      "role": _0x932305,
      "catId": _0x2a1a4e
    } = _0x17cb65,
          _0x3b5025 = {
      'userId': _0x141d62,
      'appId': _0x1be091,
      'catId': _0x2a1a4e,
      'appRole': _0x932305,
      'public': true,
      'status': 1
    };

    await this["userAppsEntity"]["save"](_0x3b5025);
    return "已将应用加入到我的个人工作台！";
  }

  async ["mineApps"](_0xa9fadc, _0x3d47d8 = {
    'page': 1,
    'size': 30
  }) {
    const {
      "id": _0x557749
    } = _0xa9fadc["user"],
          {
      "page": page = 1,
      "size": size = 30
    } = _0x3d47d8,
          [_0x2ead61, _0x2582b1] = await this["userAppsEntity"]['findAndCount']({
      'where': {
        'userId': _0x557749,
        'status': (0, typeorm_1['In'])([1, 3, 4, 5])
      },
      'order': {
        'id': "DESC"
      },
      'skip': (page - 1) * size,
      'take': size
    }),
          _0x539af2 = _0x2ead61["map"](_0x22a8da => _0x22a8da["appId"]),
          _0x368511 = await this['appEntity']["find"]({
      'where': {
        'id': (0, typeorm_1['In'])(_0x539af2)
      }
    });

    _0x2ead61["forEach"](_0x630d26 => {
      const _0x363713 = _0x368511['find'](_0xdd896a => _0xdd896a['id'] === _0x630d26["appId"]);

      _0x630d26["appName"] = _0x363713 ? _0x363713["name"] : '';
      _0x630d26["appRole"] = _0x363713 ? _0x363713["role"] : '';
      _0x630d26["appDes"] = _0x363713 ? _0x363713["des"] : '';
      _0x630d26["coverImg"] = _0x363713 ? _0x363713['coverImg'] : '';
      _0x630d26["demoData"] = _0x363713 ? _0x363713["demoData"] : '';
      _0x630d26["preset"] = _0x363713["userId"] === _0x557749 ? _0x363713["preset"] : '******';
    });

    return {
      'rows': _0x2ead61,
      'count': _0x2582b1
    };
  }

};
AppService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_2["InjectRepository"])(appCats_entity_1['AppCatsEntity'])), __param(1, (0, typeorm_2["InjectRepository"])(app_entity_1["AppEntity"])), __param(2, (0, typeorm_2["InjectRepository"])(userApps_entity_1['UserAppsEntity'])), __metadata('design:paramtypes', [typeorm_1["Repository"], typeorm_1["Repository"], typeorm_1["Repository"]])], AppService);
exports["AppService"] = AppService;