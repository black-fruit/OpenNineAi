'use strict';

var __decorate = this && this["__decorate"] || function (_0x28ef60, _0x3f3256, _0x3af96f, _0x155072) {
  var _0x35ad3e = arguments['length'],
      _0x350dbe = _0x35ad3e < 3 ? _0x3f3256 : _0x155072 === null ? _0x155072 = Object["getOwnPropertyDescriptor"](_0x3f3256, _0x3af96f) : _0x155072,
      _0x26fe7a;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x350dbe = Reflect["decorate"](_0x28ef60, _0x3f3256, _0x3af96f, _0x155072);
  } else {
    for (var _0x8682ab = _0x28ef60["length"] - 1; _0x8682ab >= 0; _0x8682ab--) {
      if (_0x26fe7a = _0x28ef60[_0x8682ab]) {
        _0x350dbe = (_0x35ad3e < 3 ? _0x26fe7a(_0x350dbe) : _0x35ad3e > 3 ? _0x26fe7a(_0x3f3256, _0x3af96f, _0x350dbe) : _0x26fe7a(_0x3f3256, _0x3af96f)) || _0x350dbe;
      }
    }
  }

  _0x35ad3e > 3 && _0x350dbe && Object["defineProperty"](_0x3f3256, _0x3af96f, _0x350dbe);
  return _0x350dbe;
},
    __metadata = this && this['__metadata'] || function (_0x2787e0, _0x3859f8) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x2787e0, _0x3859f8);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["UploadService"] = void 0;

const common_1 = require("@nestjs/common"),
      TENCENTCOS = require("cos-nodejs-sdk-v5"),
      ALIOSS = require("ali-oss"),
      axios_1 = require("axios"),
      streamToBuffer = require('stream-to-buffer'),
      utils_1 = require("../../common/utils"),
      globalConfig_service_1 = require('../globalConfig/globalConfig.service'),
      FormData = require("form-data");

let UploadService = class UploadService {
  constructor(_0x53a142) {
    this["globalConfigService"] = _0x53a142;
  }

  ["onModuleInit"]() {}

  async ["uploadFile"](_0x975b4c) {
    const {
      "filename": _0x5c66fd,
      "buffer": _0x1d3030,
      "dir": dir = 'ai'
    } = _0x975b4c,
          {
      "tencentCosStatus": tencentCosStatus = 0,
      "aliOssStatus": aliOssStatus = 0,
      "cheveretoStatus": cheveretoStatus = 0
    } = await this["globalConfigService"]["getConfigs"](["tencentCosStatus", "aliOssStatus", "cheveretoStatus"]);

    if (!Number(tencentCosStatus) && !Number(aliOssStatus) && !Number(cheveretoStatus)) {
      throw new common_1["HttpException"]("请先前往后台配置上传图片的方式", common_1["HttpStatus"]["BAD_REQUEST"]);
    }

    if (Number(tencentCosStatus)) {
      return this["uploadFileByTencentCos"]({
        'filename': _0x5c66fd,
        'buffer': _0x1d3030,
        'dir': dir
      });
    }

    if (Number(aliOssStatus)) {
      return await this["uploadFileByAliOss"]({
        'filename': _0x5c66fd,
        'buffer': _0x1d3030,
        'dir': dir
      });
    }

    if (Number(cheveretoStatus)) {
      const {
        "filename": _0x9d90af,
        "buffer": _0x22dd48,
        "dir": _0x488425
      } = _0x975b4c;
      return await this["uploadFileByChevereto"]({
        'filename': _0x9d90af,
        'buffer': _0x22dd48["toString"]("base64"),
        'dir': _0x488425
      });
    }
  }

  async ["getUploadType"]() {
    const {
      "tencentCosStatus": tencentCosStatus = 0,
      "aliOssStatus": aliOssStatus = 0,
      "cheveretoStatus": cheveretoStatus = 0
    } = await this["globalConfigService"]["getConfigs"](['tencentCosStatus', "aliOssStatus", 'cheveretoStatus']);

    if (Number(tencentCosStatus)) {
      return 'tencent';
    }

    if (Number(aliOssStatus)) {
      return "ali";
    }

    if (Number(cheveretoStatus)) {
      return 'chevereto';
    }
  }

  async ["uploadFileFromUrl"]({
    "filename": _0x50f14a,
    "url": _0x4cfe91,
    "dir": dir = 'mj'
  }) {
    dir = process['env']["ISDEV"] ? "mjdev" : dir;
    const {
      "tencentCosStatus": tencentCosStatus = 0,
      "aliOssStatus": aliOssStatus = 0,
      "cheveretoStatus": cheveretoStatus = 0
    } = await this['globalConfigService']['getConfigs'](["tencentCosStatus", "aliOssStatus", 'cheveretoStatus']);

    if (!Number(tencentCosStatus) && !Number(aliOssStatus) && !Number(cheveretoStatus)) {
      throw new common_1["HttpException"]("请先前往后台配置上传图片的方式", common_1["HttpStatus"]['BAD_REQUEST']);
    }

    if (Number(tencentCosStatus)) {
      return this["uploadFileByTencentCosFromUrl"]({
        'filename': _0x50f14a,
        'url': _0x4cfe91,
        'dir': dir
      });
    }

    if (Number(aliOssStatus)) {
      const _0x14229 = await this['uploadFileByAliOssFromUrl']({
        'filename': _0x50f14a,
        'url': _0x4cfe91,
        'dir': dir
      });

      return _0x14229;
    }

    if (Number(cheveretoStatus)) {
      return await this["uploadFileByCheveretoFromUrl"]({
        'filename': _0x50f14a,
        'url': _0x4cfe91,
        'dir': dir
      });
    }
  }

  async ["uploadFileByTencentCos"]({
    "filename": _0x1746b4,
    "buffer": _0x2c41d9,
    "dir": _0x5ef2a5
  }) {
    const {
      "Bucket": _0x5c0706,
      "Region": _0x484e96,
      "SecretId": _0x4a81a6,
      "SecretKey": _0x7da153
    } = await this["getUploadConfig"]("tencent");
    this["tencentCos"] = new TENCENTCOS({
      'SecretId': _0x4a81a6,
      'SecretKey': _0x7da153,
      'FileParallelLimit': 10
    });

    try {
      return new Promise(async (_0x268620, _0x3735af) => {
        this['tencentCos']["putObject"]({
          'Bucket': (0, utils_1["removeSpecialCharacters"])(_0x5c0706),
          'Region': (0, utils_1['removeSpecialCharacters'])(_0x484e96),
          'Key': _0x5ef2a5 + '/' + (_0x1746b4 || (0, utils_1['createRandomUid'])() + ".png"),
          'StorageClass': "STANDARD",
          'Body': _0x2c41d9
        }, async (_0x5eec86, _0x3d3c7a) => {
          if (_0x5eec86) {
            console["log"]("cos -> err: ", _0x5eec86);
            return _0x3735af(_0x5eec86);
          }

          let _0x4e7790 = _0x3d3c7a['Location']["replace"](/^(http:\/\/|https:\/\/|\/\/|)(.*)/, "https://$2");

          const {
            "acceleratedDomain": _0x3635c1
          } = await this["getUploadConfig"]('tencent');
          _0x3635c1 && (_0x4e7790 = _0x4e7790["replace"](/^(https:\/\/[^/]+)(\/.*)$/, "https://" + _0x3635c1 + '$2'), console["log"]("当前已开启全球加速----------------->", _0x4e7790));
          return _0x268620(_0x4e7790);
        });
      });
    } catch (_0x52ca1a) {
      console['log']("error: ", _0x52ca1a);
      throw new common_1["HttpException"]("上传图片失败[ten]", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ['uploadFileByTencentCosFromUrl']({
    "filename": _0x3da22a,
    "url": _0xb19bf2,
    "dir": _0x4064e1
  }) {
    const {
      "Bucket": _0x32668f,
      "Region": _0x480b8c,
      "SecretId": _0x31afd0,
      "SecretKey": _0xe1d568
    } = await this['getUploadConfig']('tencent');
    this["tencentCos"] = new TENCENTCOS({
      'SecretId': _0x31afd0,
      'SecretKey': _0xe1d568,
      'FileParallelLimit': 10
    });

    try {
      const _0x5b94d5 = (await this['globalConfigService']["getConfigs"](["mjProxy"])) || 0;

      if (Number(_0x5b94d5) === 1) {
        const _0x5d12ed = {
          'cosType': "tencent",
          'url': _0xb19bf2,
          'cosParams': {
            'Bucket': _0x32668f,
            'Region': _0x480b8c,
            'SecretId': _0x31afd0,
            'SecretKey': _0xe1d568
          }
        },
              _0x33391b = (await this["globalConfigService"]["getConfigs"](["mjProxyUrl"])) || "http://172.247.48.137:8000",
              _0x24113c = await axios_1["default"]["post"](_0x33391b + "/mj/replaceUpload", _0x5d12ed);

        if (!_0x24113c['data']) {
          throw new common_1["HttpException"]("上传图片失败[ten][url]", common_1["HttpStatus"]["BAD_REQUEST"]);
        }

        let _0x123ea1 = _0x24113c["data"]['replace'](/^(http:\/\/|https:\/\/|\/\/|)(.*)/, 'https://$2');

        const {
          "acceleratedDomain": _0x5840b9
        } = await this['getUploadConfig']("tencent");
        _0x5840b9 && (_0x123ea1 = _0x123ea1['replace'](/^(https:\/\/[^/]+)(\/.*)$/, 'https://' + _0x5840b9 + '$2'), console["log"]('当前已开启全球加速----------------->'));
        return _0x123ea1;
      } else {
        const _0x33974d = await this["getBufferFromUrl"](_0xb19bf2);

        return await this['uploadFileByTencentCos']({
          'filename': _0x3da22a,
          'buffer': _0x33974d,
          'dir': _0x4064e1
        });
      }
    } catch (_0x486432) {
      console["log"]("TODO->error:  ", _0x486432);
      throw new common_1["HttpException"]("上传图片失败[ten][url]", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["uploadFileByAliOss"]({
    "filename": _0x92565e,
    "buffer": _0x3e9a15,
    "dir": _0x5d3cee
  }) {
    const {
      "region": _0x2d4f74,
      "bucket": _0x4f5fd5,
      "accessKeyId": _0x397467,
      "accessKeySecret": _0x17948a
    } = await this["getUploadConfig"]("ali"),
          _0x3ec18f = new ALIOSS({
      'region': (0, utils_1['removeSpecialCharacters'])(_0x2d4f74),
      'accessKeyId': _0x397467,
      'accessKeySecret': _0x17948a,
      'bucket': (0, utils_1["removeSpecialCharacters"])(_0x4f5fd5)
    });

    try {
      console["log"]("ali 开始上传");
      return new Promise((_0x57e16c, _0x22448e) => {
        _0x3ec18f['put'](_0x5d3cee + '/' + (_0x92565e || (0, utils_1["createRandomUid"])() + ".png"), _0x3e9a15)['then'](_0x29dc78 => {
          _0x57e16c(_0x29dc78["url"]);
        })["catch"](_0xfa85f7 => {
          _0x22448e(_0xfa85f7);
        });
      });
    } catch (_0x141a9a) {
      throw new common_1['HttpException']("上传图片失败[ali]", common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["uploadFileByAliOssFromUrl"]({
    "filename": _0x4b1b6d,
    "url": _0x714f18,
    "dir": _0x565dc0
  }) {
    const {
      "region": _0x11e75a,
      "bucket": _0x13409b,
      "accessKeyId": _0x5c40c4,
      "accessKeySecret": _0x203835
    } = await this["getUploadConfig"]("ali");

    try {
      const _0x12882d = (await this["globalConfigService"]["getConfigs"](['mjProxy'])) || 0;

      if (Number(_0x12882d) === 1) {
        const _0x1101d0 = {
          'url': _0x714f18,
          'cosParams': {
            'region': _0x11e75a,
            'bucket': _0x13409b,
            'accessKeyId': _0x5c40c4,
            'accessKeySecret': _0x203835
          },
          'cosType': "aliyun"
        },
              _0x240bbf = (await this["globalConfigService"]["getConfigs"](["mjProxyUrl"])) || "http://172.247.48.137:8000",
              _0x22e33a = await axios_1["default"]["post"](_0x240bbf + '/mj/replaceUpload', _0x1101d0);

        if (!(_0x22e33a === null || _0x22e33a === void 0 ? void 0 : _0x22e33a["data"])) {
          throw new common_1['HttpException']("上传图片失败[ALI][url]", common_1["HttpStatus"]["BAD_REQUEST"]);
        }

        return _0x22e33a["data"];
      } else {
        const _0x1d088e = await this["getBufferFromUrl"](_0x714f18);

        return await this["uploadFileByAliOss"]({
          'filename': _0x4b1b6d,
          'buffer': _0x1d088e,
          'dir': _0x565dc0
        });
      }
    } catch (_0x34e986) {
      throw new common_1["HttpException"]('上传图片失败[ALI][url]', common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["uploadFileByChevereto"]({
    "filename": filename = '',
    "buffer": _0x432219,
    "dir": dir = 'ai'
  }) {
    var _0xc35f8c;

    const {
      "key": _0x38870f,
      "uploadPath": _0x13410d
    } = await this["getUploadConfig"]("chevereto"),
          _0x38688a = new FormData();

    _0x38688a["append"]("source", _0x432219);

    try {
      const _0x105d1e = await axios_1["default"]["post"](_0x13410d, _0x38688a, {
        'params': {
          'key': _0x38870f
        },
        'headers': {
          'X-API-Key': _0x38870f
        }
      });

      if ((_0x105d1e === null || _0x105d1e === void 0 ? void 0 : _0x105d1e["status"]) === 200) {
        return _0x105d1e["data"]['image']["url"];
      } else {
        console["log"]("Chevereto ---> res", _0x105d1e === null || _0x105d1e === void 0 ? void 0 : _0x105d1e["data"]["code"], _0x105d1e === null || _0x105d1e === void 0 ? void 0 : _0x105d1e["data"]["error"]["message"]);
        common_1['Logger']["error"]('上传图片失败[Chevereto]', JSON["stringify"](_0x105d1e["data"]));
      }
    } catch (_0x13f72c) {
      console["log"]("error: ", _0x13f72c["response"]);
      throw new common_1["HttpException"]("上传图片失败[Chevereto|buffer] --> " + ((_0xc35f8c = _0x13f72c["response"]) === null || _0xc35f8c === void 0 ? void 0 : _0xc35f8c["data"]["error"]["message"]), common_1['HttpStatus']["BAD_REQUEST"]);
    }
  }

  async ["uploadFileByCheveretoFromUrl"]({
    "filename": _0x47197a,
    "url": _0x1db989,
    "dir": _0x345006
  }) {
    try {
      const _0x48f05c = (await this['globalConfigService']["getConfigs"](["mjProxy"])) || 0;

      if (Number(_0x48f05c) === 1) {
        const {
          "key": _0x5207d9,
          "uploadPath": _0x5223de
        } = await this['getUploadConfig']('chevereto'),
              _0x5379f5 = {
          'cosType': 'chevereto',
          'url': _0x1db989,
          'cosParams': {
            'key': _0x5207d9,
            'uploadPath': _0x5223de
          }
        },
              _0x488330 = (await this["globalConfigService"]["getConfigs"](["mjProxyUrl"])) || "http://172.247.48.137:8000",
              _0x2487f2 = await axios_1["default"]["post"](_0x488330 + "/mj/replaceUpload", _0x5379f5);

        if (!_0x2487f2['data']) {
          throw new common_1['HttpException']('上传图片失败[Chevereto][url]', common_1["HttpStatus"]["BAD_REQUEST"]);
        }

        return _0x2487f2["data"];
      } else {
        const _0x29ea46 = await this["getBufferFromUrl"](_0x1db989);

        return await this['uploadFileByChevereto']({
          'filename': _0x47197a,
          'buffer': _0x29ea46,
          'dir': _0x345006
        });
      }
    } catch (_0xbbb957) {
      throw new common_1['HttpException'](_0xbbb957["response"], common_1["HttpStatus"]["BAD_REQUEST"]);
    }
  }

  async ["getUploadConfig"](_0x403d68) {
    if (_0x403d68 === "ali") {
      const {
        "aliOssRegion": _0x24dbd5,
        "aliOssBucket": _0x2b1aea,
        "aliOssAccessKeyId": _0x2ea9bc,
        "aliOssAccessKeySecret": _0x18b8d1
      } = await this["globalConfigService"]['getConfigs'](["aliOssRegion", "aliOssBucket", "aliOssAccessKeyId", "aliOssAccessKeySecret"]);
      return {
        'region': _0x24dbd5,
        'bucket': _0x2b1aea,
        'accessKeyId': _0x2ea9bc,
        'accessKeySecret': _0x18b8d1
      };
    }

    if (_0x403d68 === 'tencent') {
      const {
        "cosBucket": _0x20ffd4,
        "cosRegion": _0x20ac21,
        "cosSecretId": _0x2e7a65,
        "cosSecretKey": _0x6b27f5,
        "tencentCosAcceleratedDomain": _0x582911
      } = await this["globalConfigService"]['getConfigs'](['cosBucket', 'cosRegion', 'cosSecretId', "cosSecretKey", "tencentCosAcceleratedDomain"]);
      return {
        'Bucket': _0x20ffd4,
        'Region': _0x20ac21,
        'SecretId': _0x2e7a65,
        'SecretKey': _0x6b27f5,
        'acceleratedDomain': _0x582911
      };
    }

    if (_0x403d68 === 'chevereto') {
      const {
        "cheveretoKey": _0x18eaaa,
        "cheveretoUploadPath": _0x46d54c
      } = await this["globalConfigService"]["getConfigs"](['cheveretoKey', "cheveretoUploadPath"]);
      return {
        'key': _0x18eaaa,
        'uploadPath': _0x46d54c
      };
    }
  }

  async ["test"]() {
    const _0x142141 = {
      'filename': "mjtest.png",
      'dir': 'mj',
      'url': "https://img1.baidu.com/it/u=3709586903,1286591012&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686243600&t=b08a4225d5fd31bc6ea5dc2f367de6c5"
    },
          _0x419dde = await this["uploadFileFromUrl"](_0x142141);

    return _0x419dde;
  }

  async ['getBufferFromUrl'](_0xe56c5) {
    const _0x1034d8 = await axios_1["default"]["get"](_0xe56c5, {
      'responseType': "stream"
    });

    return new Promise((_0x5c1fd0, _0x1c0307) => {
      streamToBuffer(_0x1034d8['data'], (_0x590f28, _0x11d01c) => {
        if (_0x590f28) {
          throw new common_1["HttpException"]("获取图片资源失败、请重新试试吧！", common_1["HttpStatus"]["BAD_REQUEST"]);
        } else {
          _0x5c1fd0(_0x11d01c);
        }
      });
    });
  }

};
UploadService = __decorate([(0, common_1["Injectable"])(), __metadata("design:paramtypes", [globalConfig_service_1['GlobalConfigService']])], UploadService);
exports["UploadService"] = UploadService;