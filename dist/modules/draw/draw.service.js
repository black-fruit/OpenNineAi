'use strict';

var __decorate = this && this["__decorate"] || function (_0x2f98, _0x598b4c, _0x165a3f, _0x4d9c84) {
  var _0x343a7c = arguments["length"],
      _0x445458 = _0x343a7c < 3 ? _0x598b4c : _0x4d9c84 === null ? _0x4d9c84 = Object["getOwnPropertyDescriptor"](_0x598b4c, _0x165a3f) : _0x4d9c84,
      _0x483597;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x445458 = Reflect["decorate"](_0x2f98, _0x598b4c, _0x165a3f, _0x4d9c84);
  } else {
    for (var _0x342ae0 = _0x2f98["length"] - 1; _0x342ae0 >= 0; _0x342ae0--) {
      if (_0x483597 = _0x2f98[_0x342ae0]) {
        _0x445458 = (_0x343a7c < 3 ? _0x483597(_0x445458) : _0x343a7c > 3 ? _0x483597(_0x598b4c, _0x165a3f, _0x445458) : _0x483597(_0x598b4c, _0x165a3f)) || _0x445458;
      }
    }
  }

  _0x343a7c > 3 && _0x445458 && Object["defineProperty"](_0x598b4c, _0x165a3f, _0x445458);
  return _0x445458;
},
    __metadata = this && this["__metadata"] || function (_0x45b6d0, _0x192dea) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x45b6d0, _0x192dea);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["DrawService"] = void 0;

const common_1 = require("@nestjs/common"),
      axios_1 = require('axios'),
      uuid = require("uuid"),
      upload_service_1 = require("../upload/upload.service");

let DrawService = class DrawService {
  constructor(_0x5e4e74) {
    this['uploadService'] = _0x5e4e74;
  }

  async ['onModuleInit']() {
    var _0x4f3adc;

    this['apiHost'] = (_0x4f3adc = process["env"]["API_HOST"]) !== null && _0x4f3adc !== void 0 ? _0x4f3adc : "https://api.stability.ai";
    this["apiKey"] = process["env"]["STABILITY_API_KEY"];
    !this["apiKey"] && (this["apiKey"] = "*********");
    this["Authorization"] = "Bearer " + this["apiKey"];
  }

  async ["getEngines"]() {
    var _0x42f735, _0x1f607c;

    const _0xe17955 = this["apiHost"] + "/v1/engines/list",
          _0x9665a2 = await (0, axios_1["default"])(_0xe17955, {
      'method': "GET",
      'headers': {
        'Authorization': this["Authorization"]
      }
    });

    _0x9665a2['status'] === 401 && console["log"]("stability api key is invalid, " + ((_0x42f735 = _0x9665a2 === null || _0x9665a2 === void 0 ? void 0 : _0x9665a2["data"]) === null || _0x42f735 === void 0 ? void 0 : _0x42f735["message"]));

    if (_0x9665a2['status'] !== 200) {
      console["log"](_0x9665a2['status'] + " " + ((_0x1f607c = _0x9665a2 === null || _0x9665a2 === void 0 ? void 0 : _0x9665a2["data"]) === null || _0x1f607c === void 0 ? void 0 : _0x1f607c["message"]) + '}');
      throw new common_1['HttpException']("获取列表失败", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    return _0x9665a2['data'];
  }

  async ["drawTextToImage"](_0x33c56f) {
    const {
      "engineId": engineId = "stable-diffusion-768-v2-1"
    } = _0x33c56f,
          _0x77b36 = {
      'Content-Type': "application/json",
      'Accept': "application/json",
      'Authorization': this['Authorization']
    },
          _0x37d679 = this['apiHost'] + '/v1/generation/' + engineId + '/text-to-image';

    try {
      const _0x50cd28 = await axios_1["default"]["post"](_0x37d679, _0x33c56f, {
        'headers': _0x77b36
      });

      if (_0x50cd28["status"] !== 200) {
        throw new common_1["HttpException"]('绘制失败', common_1["HttpStatus"]["BAD_REQUEST"]);
      }

      const _0x20ebd1 = [];

      for (const _0x1b0f27 of _0x50cd28["data"]["artifacts"]) {
        const _0x33426d = uuid['v4']()["slice"](0, 10) + ".png",
              _0x1d54ef = Buffer["from"](_0x1b0f27["base64"], "base64");

        _0x20ebd1["push"](this['uploadService']['uploadFile']({
          'filename': _0x33426d,
          'buffer': _0x1d54ef
        }));
      }

      const _0x5bd026 = await Promise["all"](_0x20ebd1);

      return _0x5bd026;
    } catch (_0x4b07e6) {
      if (!(_0x4b07e6 === null || _0x4b07e6 === void 0 ? void 0 : _0x4b07e6["response"])) {
        throw new common_1["HttpException"]("绘制失败", common_1['HttpStatus']["BAD_REQUEST"]);
      }

      const {
        "status": _0x2b6eb1,
        "data": _0x4337f0
      } = _0x4b07e6["response"];
      throw new common_1["HttpException"](_0x4337f0["message"], _0x2b6eb1);
    }
  }

};
DrawService = __decorate([(0, common_1["Injectable"])(), __metadata("design:paramtypes", [upload_service_1["UploadService"]])], DrawService);
exports['DrawService'] = DrawService;