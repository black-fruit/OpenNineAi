'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["nineAiInit"] = exports["initDatabase"] = void 0;

const mysql = require("mysql2/promise"),
      common_1 = require("@nestjs/common"),
      os = require('os'),
      fetch = require("isomorphic-fetch");

function initDatabase() {
  mysql["createConnection"]({
    'host': process["env"]['DB_HOST'],
    'user': process["env"]['DB_USER'],
    'password': process["env"]["DB_PASS"],
    'port': parseInt(process['env']["DB_PORT"])
  })['then'](async _0x10961d => {
    const [_0x53189c] = await _0x10961d['execute']("SHOW DATABASES LIKE '" + process["env"]['DB_DATABASE'] + "'");
    Array['isArray'](_0x53189c) && _0x53189c["length"] === 0 && (await _0x10961d["execute"]("CREATE DATABASE " + process["env"]['DB_DATABASE']), common_1["Logger"]["log"]("初始化创建数据库成功、数据库名为[" + process['env']["DB_DATABASE"] + ']', "InitDatabase"));
    await _0x10961d["end"]();
  });
}

exports["initDatabase"] = initDatabase;

async function nineAiInit() {
  let _0x1df218;

  const _0x3adcf0 = os["networkInterfaces"]();

  Object['keys'](_0x3adcf0)["forEach"](_0x5a2577 => {
    const _0x4d50d5 = _0x3adcf0[_0x5a2577];

    for (let _0x3ce03c = 0; _0x3ce03c < _0x4d50d5["length"]; _0x3ce03c++) {
      const _0x6a8a69 = _0x4d50d5[_0x3ce03c];

      if (_0x6a8a69["family"] === "IPv4" && _0x6a8a69["address"] !== "127.0.0.1" && !_0x6a8a69["internal"]) {
        _0x1df218 = _0x6a8a69["address"];
        break;
      }
    }
  });
  const _0xdc3e62 = process["env"]["NINE_AI_HOST"];
  common_1["Logger"]['log']("您的服务器授权IP地址为： [" + (_0xdc3e62 || "获取失败了...") + ']', "NineAi 授权认证");

  if (!_0xdc3e62) {
    return {
      'success': false,
      'message': '未在env配置您的授权IP、授权失败!!！'
    };
  }

  const _0x4da0c3 = process["env"]["NINE_AI_KEY"];

  if (!_0x4da0c3) {
    return {
      'success': false,
      'message': '未在env配置您的授权秘钥、授权失败!!！'
    };
  }

  const _0x5f17ee = {
    'ip': _0xdc3e62,
    'key': _0x4da0c3
  },
        _0x175944 = {
    'method': "POST",
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON["stringify"](_0x5f17ee)
  };
  console["log"]("=====");

  try {
    const _0x1f650c = await fetch("https://api.jiangly.com/api/permission/auth", _0x175944);

    console["log"](1);

    const _0x538656 = await _0x1f650c["json"](),
          {
      "success": _0x5db96a,
      "message": _0x1f6d99
    } = _0x538656["data"];

    console["log"](2);
    return {
      'success': _0x5db96a,
      'message': _0x1f6d99
    };
    return _0x538656;
  } catch (_0x19f84b) {
    console["log"]("error: ", _0x19f84b);
    console["log"](3);
    return {
      'success': true,
      'message': '感谢使用NineAI、服务已启动.......'
    };
  }
}

exports["nineAiInit"] = nineAiInit;