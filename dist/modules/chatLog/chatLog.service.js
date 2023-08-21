'use strict';

var __decorate = this && this['__decorate'] || function (_0x129728, _0x39af9d, _0x212a99, _0x42bedb) {
  var _0x1e7d13 = arguments["length"],
      _0x4abbbf = _0x1e7d13 < 3 ? _0x39af9d : _0x42bedb === null ? _0x42bedb = Object["getOwnPropertyDescriptor"](_0x39af9d, _0x212a99) : _0x42bedb,
      _0x27c8f5;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x4abbbf = Reflect['decorate'](_0x129728, _0x39af9d, _0x212a99, _0x42bedb);
  } else {
    for (var _0xfd3295 = _0x129728["length"] - 1; _0xfd3295 >= 0; _0xfd3295--) {
      if (_0x27c8f5 = _0x129728[_0xfd3295]) {
        _0x4abbbf = (_0x1e7d13 < 3 ? _0x27c8f5(_0x4abbbf) : _0x1e7d13 > 3 ? _0x27c8f5(_0x39af9d, _0x212a99, _0x4abbbf) : _0x27c8f5(_0x39af9d, _0x212a99)) || _0x4abbbf;
      }
    }
  }

  _0x1e7d13 > 3 && _0x4abbbf && Object['defineProperty'](_0x39af9d, _0x212a99, _0x4abbbf);
  return _0x4abbbf;
},
    __metadata = this && this["__metadata"] || function (_0x804f4c, _0x1bf1fb) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x804f4c, _0x1bf1fb);
  }
},
    __param = this && this["__param"] || function (_0x567fb5, _0x5138c9) {
  return function (_0x18fbc6, _0x4a1257) {
    _0x5138c9(_0x18fbc6, _0x4a1257, _0x567fb5);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["ChatLogService"] = void 0;

const common_1 = require("@nestjs/common"),
      typeorm_1 = require('@nestjs/typeorm'),
      chatLog_entity_1 = require('./chatLog.entity'),
      typeorm_2 = require("typeorm"),
      balance_constant_1 = require("../../common/constants/balance.constant"),
      user_entity_1 = require("../user/user.entity"),
      utils_1 = require("../../common/utils"),
      ExcelJS = require("exceljs"),
      chatGroup_entity_1 = require("../chatGroup/chatGroup.entity");

let ChatLogService = class ChatLogService {
  constructor(_0x53827f, _0x2290ab, _0x93f4f8) {
    this["chatLogEntity"] = _0x53827f;
    this["userEntity"] = _0x2290ab;
    this["chatGroupEntity"] = _0x93f4f8;
  }

  async ["saveChatLog"](_0xdfc40) {
    return await this["chatLogEntity"]["save"](_0xdfc40);
  }

  async ["querDrawLog"](_0x980463, _0x4305cb) {
    const {
      "id": _0x211171
    } = _0x980463["user"],
          {
      "model": _0x392bd4
    } = _0x4305cb,
          _0x467a4f = {
      'userId': _0x211171,
      'type': balance_constant_1["DeductionKey"]["PAINT_TYPE"]
    };
    _0x392bd4 && (_0x467a4f["model"] = _0x392bd4);

    const _0xc6cb0c = await this["chatLogEntity"]["find"]({
      'where': _0x467a4f,
      'order': {
        'id': "DESC"
      },
      'select': ['id', "answer", "prompt", "message_id", 'group', "model", "extend", "type"]
    });

    _0xc6cb0c["forEach"](_0x1b59b1 => {
      var _0x18bf78;

      if (_0x1b59b1['type'] === "paintCount") {
        const _0x240f26 = _0x1b59b1["model"] === 'mj' ? 310 : 160,
              _0xae359c = _0x1b59b1["answer"]["includes"]("cos") ? 'tencent' : 'ali',
              _0xdf5222 = _0xae359c === "tencent" ? '?imageView2/1/w/' + _0x240f26 + "/q/55" : "?x-oss-process=image/resize,w_" + _0x240f26;

        _0x1b59b1["thumbImg"] = _0x1b59b1["answer"] + _0xdf5222;

        const _0x168bab = _0x1b59b1["extend"] ? JSON['parse'](_0x1b59b1["extend"]) : null;

        _0x168bab && (_0x168bab ? _0x1b59b1['isGroup'] = ((_0x18bf78 = _0x168bab === null || _0x168bab === void 0 ? void 0 : _0x168bab["components"][0]) === null || _0x18bf78 === void 0 ? void 0 : _0x18bf78["components"]["length"]) === 5 : _0x1b59b1["isGroup"] = false);
      }
    });

    return _0xc6cb0c;
  }

  async ["querAllDrawLog"](_0x7417c0) {
    const {
      "page": page = 1,
      "size": size = 20,
      "rec": _0x3a063c,
      "userId": _0x4c4080,
      "model": _0x5048b0
    } = _0x7417c0,
          _0x2ee0e9 = {
      'type': balance_constant_1['DeductionKey']['PAINT_TYPE'],
      'prompt': (0, typeorm_2["Not"])(''),
      'answer': (0, typeorm_2["Not"])('')
    };
    _0x3a063c && Object['assign'](_0x2ee0e9, {
      'rec': _0x3a063c
    });
    _0x4c4080 && Object["assign"](_0x2ee0e9, {
      'userId': _0x4c4080
    });
    _0x5048b0 && Object["assign"](_0x2ee0e9, {
      'model': _0x5048b0
    });
    const [_0x39be93, _0x3ce9c5] = await this["chatLogEntity"]["findAndCount"]({
      'order': {
        'id': "DESC"
      },
      'skip': (page - 1) * size,
      'take': size,
      'where': _0x2ee0e9
    });

    _0x39be93['forEach'](_0x3dda89 => {
      var _0x30db90;

      if (_0x3dda89['type'] === 'paintCount') {
        const _0x19556f = _0x3dda89["model"] === 'mj' ? 310 : 160,
              _0x578665 = _0x3dda89['answer']["includes"]("cos") ? 'tencent' : "ali",
              _0x448a95 = _0x578665 === "tencent" ? "?imageView2/1/w/" + _0x19556f + "/q/55" : "?x-oss-process=image/resize,w_" + _0x19556f;

        _0x3dda89['thumbImg'] = _0x3dda89["answer"] + _0x448a95;

        const _0x2bc59d = _0x3dda89["extend"] ? JSON["parse"](_0x3dda89["extend"]) : null;

        _0x2bc59d && (_0x2bc59d ? _0x3dda89["isGroup"] = ((_0x30db90 = _0x2bc59d === null || _0x2bc59d === void 0 ? void 0 : _0x2bc59d['components'][0]) === null || _0x30db90 === void 0 ? void 0 : _0x30db90["components"]["length"]) === 5 : _0x3dda89["isGroup"] = false);
      }
    });

    return {
      'rows': _0x39be93,
      'count': _0x3ce9c5
    };
  }

  async ["recDrawImg"](_0x4c1a3e) {
    const {
      "id": _0x150f01
    } = _0x4c1a3e,
          _0x4d2c75 = await this["chatLogEntity"]["findOne"]({
      'where': {
        'id': _0x150f01,
        'type': balance_constant_1["DeductionKey"]["PAINT_TYPE"]
      }
    });

    if (!_0x4d2c75) {
      throw new common_1['HttpException']('你推荐的图片不存在、请检查！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    const _0x2762c2 = _0x4d2c75["rec"] === 1 ? 0 : 1,
          _0x7ad23d = await this["chatLogEntity"]["update"]({
      'id': _0x150f01
    }, {
      'rec': _0x2762c2
    });

    if (_0x7ad23d["affected"] > 0) {
      return (_0x2762c2 ? '推荐' : "取消推荐") + "图片成功！";
    }

    throw new common_1["HttpException"]("你操作的图片不存在、请检查！", common_1["HttpStatus"]['BAD_REQUEST']);
  }

  async ['exportExcel'](_0x4b3bb8, _0x29b446) {
    const _0x3b01dc = {
      'type': balance_constant_1["DeductionKey"]["CHAT_TYPE"]
    },
          {
      "page": page = 1,
      "size": size = 30,
      "prompt": _0x298909,
      "email": _0x4978bf
    } = _0x4b3bb8;
    _0x298909 && Object['assign'](_0x3b01dc, {
      'prompt': (0, typeorm_2['Like'])('%' + _0x298909 + '%')
    });

    if (_0x4978bf) {
      const _0x5281ed = await this["userEntity"]["findOne"]({
        'where': {
          'email': _0x4978bf
        }
      });

      (_0x5281ed === null || _0x5281ed === void 0 ? void 0 : _0x5281ed['id']) && Object['assign'](_0x3b01dc, {
        'userId': _0x5281ed['id']
      });
    }

    const [_0x4f1cf5, _0x1082a9] = await this["chatLogEntity"]["findAndCount"]({
      'order': {
        'id': 'DESC'
      },
      'skip': (page - 1) * size,
      'take': size,
      'where': _0x3b01dc
    }),
          _0x43d3f8 = _0x4f1cf5["map"](_0x163608 => _0x163608["userId"]),
          _0x3a9afc = await this["userEntity"]["find"]({
      'where': {
        'id': (0, typeorm_2['In'])(_0x43d3f8)
      }
    }),
          _0x58accf = _0x4f1cf5['map'](_0x1041f0 => {
      const _0x3af42f = _0x3a9afc["find"](_0x50aba6 => _0x50aba6['id'] === _0x1041f0["userId"]);

      return {
        'username': _0x3af42f ? _0x3af42f['username'] : '',
        'email': _0x3af42f ? _0x3af42f["email"] : '',
        'prompt': _0x1041f0["prompt"],
        'answer': _0x1041f0["answer"],
        'createdAt': (0, utils_1['formatDate'])(_0x1041f0["createdAt"])
      };
    }),
          _0x25d9e9 = new ExcelJS["Workbook"](),
          _0x6d2b = _0x25d9e9["addWorksheet"]("chatlog");

    _0x6d2b["columns"] = [{
      'header': '用户名',
      'key': "username",
      'width': 20
    }, {
      'header': "用户邮箱",
      'key': "email",
      'width': 20
    }, {
      'header': "提问时间",
      'key': "createdAt",
      'width': 20
    }, {
      'header': "提问问题",
      'key': "prompt",
      'width': 80
    }, {
      'header': "回答答案",
      'key': "answer",
      'width': 150
    }];

    _0x58accf['forEach'](_0xe582d5 => _0x6d2b["addRow"](_0xe582d5));

    _0x29b446["setHeader"]('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    _0x29b446["setHeader"]("Content-Disposition", "attachment; filename=chat.xlsx");

    await _0x25d9e9['xlsx']['write'](_0x29b446);

    _0x29b446["end"]();
  }

  async ['querAllChatLog'](_0x3d603e, _0x3fd234) {
    const {
      "page": page = 1,
      "size": size = 20,
      "userId": _0x363fc1,
      "prompt": _0xd7cf2f
    } = _0x3d603e,
          _0x2e6f7a = {
      'type': balance_constant_1['DeductionKey']['CHAT_TYPE'],
      'prompt': (0, typeorm_2["Not"])('')
    };
    _0x363fc1 && Object["assign"](_0x2e6f7a, {
      'userId': _0x363fc1
    });
    _0xd7cf2f && Object["assign"](_0x2e6f7a, {
      'prompt': (0, typeorm_2["Like"])('%' + _0xd7cf2f + '%')
    });

    const [_0x4ca391, _0x209683] = await this["chatLogEntity"]["findAndCount"]({
      'order': {
        'id': "DESC"
      },
      'skip': (page - 1) * size,
      'take': size,
      'where': _0x2e6f7a
    }),
          _0x29210a = _0x4ca391["map"](_0x2c6633 => _0x2c6633['userId']),
          _0x151675 = await this["userEntity"]['find']({
      'where': {
        'id': (0, typeorm_2['In'])(_0x29210a)
      },
      'select': ['id', "username", "email"]
    });

    _0x4ca391["forEach"](_0x57b192 => {
      const {
        "username": _0x247557,
        "email": _0x349812
      } = _0x151675["find"](_0xc0c8f5 => _0xc0c8f5['id'] === _0x57b192["userId"]) || {};
      _0x57b192["username"] = _0x247557;
      _0x57b192["email"] = _0x349812;
    });

    _0x3fd234["user"]["role"] !== "super" && _0x4ca391["forEach"](_0x12ed92 => _0x12ed92["email"] = (0, utils_1['maskEmail'])(_0x12ed92["email"]));
    return {
      'rows': _0x4ca391,
      'count': _0x209683
    };
  }

  async ["chatList"](_0x122bd0, _0x3839f0) {
    const {
      "id": _0x448e04
    } = _0x122bd0['user'],
          {
      "groupId": _0x3c8f93
    } = _0x3839f0,
          _0x2aaab5 = {
      'userId': _0x448e04,
      'isDelete': false
    };
    _0x3c8f93 && Object['assign'](_0x2aaab5, {
      'groupId': _0x3c8f93
    });

    if (_0x3c8f93) {
      const _0x28b517 = await this['chatGroupEntity']["count"]({
        'where': {
          'isDelete': false
        }
      });

      if (_0x28b517 === 0) {
        return [];
      }
    }

    const _0x7c4e91 = await this['chatLogEntity']["find"]({
      'where': _0x2aaab5
    });

    return _0x7c4e91["map"](_0x419d47 => {
      const {
        "prompt": _0x3e0b5b,
        "role": _0x1707d9,
        "answer": _0x50d1fb,
        "createdAt": _0x2eeecb,
        "model": _0xa49c15,
        "conversationOptions": _0x20c893,
        "requestOptions": _0x5bb321,
        "id": _0x582007
      } = _0x419d47;
      return {
        'chatId': _0x582007,
        'dateTime': (0, utils_1["formatDate"])(_0x2eeecb),
        'text': _0x1707d9 === "user" ? _0x3e0b5b : _0x50d1fb,
        'inversion': _0x1707d9 === "user",
        'error': false,
        'conversationOptions': _0x20c893 ? JSON["parse"](_0x20c893) : null,
        'requestOptions': _0x5bb321 ? JSON['parse'](_0x5bb321) : null
      };
    });
  }

  async ["deleteChatLog"](_0x452e55, _0x14beed) {
    const {
      "id": _0x23a156
    } = _0x452e55["user"],
          {
      "id": _0x408918
    } = _0x14beed,
          _0xd7c6af = await this["chatLogEntity"]['findOne']({
      'where': {
        'id': _0x408918,
        'userId': _0x23a156
      }
    });

    if (!_0xd7c6af) {
      throw new common_1["HttpException"]("你删除的对话记录不存在、请检查！", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    const _0x3bd7e3 = await this["chatLogEntity"]["update"]({
      'id': _0x408918
    }, {
      'isDelete': true
    });

    if (_0x3bd7e3["affected"] > 0) {
      return "删除对话记录成功！";
    } else {
      throw new common_1['HttpException']('你删除的对话记录不存在、请检查！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["delByGroupId"](_0xec5d42, _0x30cbc5) {
    const {
      "groupId": _0x29b71a
    } = _0x30cbc5,
          {
      "id": _0x54f59c
    } = _0xec5d42["user"],
          _0xf9bb8d = await this["chatGroupEntity"]["findOne"]({
      'where': {
        'id': _0x29b71a,
        'userId': _0x54f59c
      }
    });

    if (!_0xf9bb8d) {
      throw new common_1["HttpException"]("你删除的对话记录不存在、请检查！", common_1['HttpStatus']["BAD_REQUEST"]);
    }

    const _0x4c76a5 = await this["chatLogEntity"]['update']({
      'groupId': _0x29b71a
    }, {
      'isDelete': true
    });

    if (_0x4c76a5["affected"] > 0) {
      return '删除对话记录成功！';
    }

    if (_0x4c76a5["affected"] === 0) {
      throw new common_1["HttpException"]('当前页面已经没有东西可以删除了！', common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ['byAppId'](_0x185645, _0x967836) {
    const {
      "id": _0xce04fb
    } = _0x185645['user'],
          {
      "appId": _0x11980f,
      "page": page = 1,
      "size": size = 10
    } = _0x967836,
          [_0x46b27b, _0x1cd80f] = await this["chatLogEntity"]["findAndCount"]({
      'where': {
        'userId': _0xce04fb,
        'appId': _0x11980f,
        'role': "assistant"
      },
      'order': {
        'id': 'DESC'
      },
      'take': size,
      'skip': (page - 1) * size
    });
    return {
      'rows': _0x46b27b,
      'count': _0x1cd80f
    };
  }

};
ChatLogService = __decorate([(0, common_1["Injectable"])(), __param(0, (0, typeorm_1['InjectRepository'])(chatLog_entity_1["ChatLogEntity"])), __param(1, (0, typeorm_1["InjectRepository"])(user_entity_1["UserEntity"])), __param(2, (0, typeorm_1["InjectRepository"])(chatGroup_entity_1["ChatGroupEntity"])), __metadata("design:paramtypes", [typeorm_2["Repository"], typeorm_2["Repository"], typeorm_2['Repository']])], ChatLogService);
exports["ChatLogService"] = ChatLogService;