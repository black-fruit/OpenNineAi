'use strict';

var __decorate = this && this["__decorate"] || function (_0xe51d9, _0x69be58, _0x4bdb1f, _0xab62da) {
  var _0x5f0740 = arguments["length"],
      _0x4b6ff1 = _0x5f0740 < 3 ? _0x69be58 : _0xab62da === null ? _0xab62da = Object["getOwnPropertyDescriptor"](_0x69be58, _0x4bdb1f) : _0xab62da,
      _0x44e088;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x4b6ff1 = Reflect["decorate"](_0xe51d9, _0x69be58, _0x4bdb1f, _0xab62da);
  } else {
    for (var _0x476c5a = _0xe51d9["length"] - 1; _0x476c5a >= 0; _0x476c5a--) {
      if (_0x44e088 = _0xe51d9[_0x476c5a]) {
        _0x4b6ff1 = (_0x5f0740 < 3 ? _0x44e088(_0x4b6ff1) : _0x5f0740 > 3 ? _0x44e088(_0x69be58, _0x4bdb1f, _0x4b6ff1) : _0x44e088(_0x69be58, _0x4bdb1f)) || _0x4b6ff1;
      }
    }
  }

  _0x5f0740 > 3 && _0x4b6ff1 && Object["defineProperty"](_0x69be58, _0x4bdb1f, _0x4b6ff1);
  return _0x4b6ff1;
},
    __metadata = this && this["__metadata"] || function (_0x4c7a37, _0x4a2527) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x4c7a37, _0x4a2527);
  }
},
    __param = this && this["__param"] || function (_0x5d43a1, _0x26e83b) {
  return function (_0xdd786, _0x23b7a1) {
    _0x26e83b(_0xdd786, _0x23b7a1, _0x5d43a1);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["ChatgptController"] = void 0;

const jwtAuth_guard_1 = require("./../../common/auth/jwtAuth.guard"),
      swagger_1 = require("@nestjs/swagger"),
      chatgpt_service_1 = require("./chatgpt.service"),
      common_1 = require('@nestjs/common'),
      chatProcess_dto_1 = require("./dto/chatProcess.dto"),
      chatDraw_dto_1 = require('./dto/chatDraw.dto'),
      addKey_dto_1 = require("./dto/addKey.dto"),
      getKeyList_dto_1 = require("./dto/getKeyList.dto"),
      updateKey_dto_1 = require('./dto/updateKey.dto'),
      addWhiteUser_dto_1 = require("./dto/addWhiteUser.dto"),
      getWhiteUserList_dto_1 = require("./dto/getWhiteUserList.dto"),
      updateWhiteUser_dto_1 = require('./dto/updateWhiteUser.dto'),
      adminAuth_guard_1 = require('../../common/auth/adminAuth.guard'),
      superAuth_guard_1 = require("../../common/auth/superAuth.guard"),
      deleteKey_dto_1 = require("./dto/deleteKey.dto"),
      bulkCreateKey_dto_1 = require("./dto/bulkCreateKey.dto"),
      globalConfig_service_1 = require("../globalConfig/globalConfig.service");

let ChatgptController = class ChatgptController {
  constructor(_0x21b138, _0x2903d3) {
    this['chatgptService'] = _0x21b138;
    this['globalConfigService'] = _0x2903d3;
  }

  ["chatProcess"](_0x5e1467, _0x174388, _0x1835cd) {
    return this['chatgptService']["chatProcess"](_0x5e1467, _0x174388, _0x1835cd);
  }

  async ["mjAssociate"](_0x964f21, _0x5695f8) {
    const _0xd98333 = await this["globalConfigService"]["getConfigs"](["mjCustomLianxiangPrompt"]);

    console["log"]("mjCustomLianxiangPrompt: ", _0xd98333);
    _0x964f21["systemMessage"] = _0xd98333 || "midjourney是一款AI绘画工具，只要你输入你想到的文字，就能通过人工智能产出相对应的图片、我希望你作为MidJourney程序的提示词(prompt)生成器。你的工作是根据我给你的一段提示内容扩展为更详细和更有创意的描述，以激发人工智能的独特和有趣的图像。请记住，人工智能能够理解广泛的语言，并能解释抽象的概念，所以请自由发挥想象力和描述力，尽可能地发挥。例如，你可以描述一个未来城市的场景，或一个充满奇怪生物的超现实景观。你的描述越详细、越有想象力，产生的图像就越有趣、Midjourney prompt的标准公式为:(image we're prompting).(5 descriptivekeywords). (camera type). (camera lens type). (time of day)(style of photograph).(type offilm)、请记住这个公式，后续统一使用该公式进行prompt生成、最终把我给你的提示变成一整段连续不分开的完整内容，并且只需要用英文回复您的联想、一定不要回复别内容、包括解释、我只需要纯粹的内容。";
    return this["chatgptService"]["chatProcess"](Object["assign"](Object['assign']({}, _0x964f21), {
      'cusromPrompt': true
    }), _0x5695f8);
  }

  async ["mjFanyi"](_0x582e7f, _0x6d0a1f) {
    const _0x4d5986 = await this["globalConfigService"]["getConfigs"](["mjCustomFanyiPrompt"]);

    _0x582e7f["systemMessage"] = _0x4d5986 || "接下来我会给你一些内容、我希望你帮我翻译成英文、不管我给你任何语言、你都回复我英文、如果给你了英文、依然回复我更加优化的英文、并且期望你不需要做任何多余的解释、给我英文即可、不要加任何东西、我只需要英文！";
    return this["chatgptService"]["chatProcess"](Object["assign"](Object["assign"]({}, _0x582e7f), {
      'cusromPrompt': true
    }), _0x6d0a1f);
  }

  async ["chatmind"](_0x746822, _0x2fdefc, _0x2618a1) {
    const _0x1dcebc = await this["globalConfigService"]["getConfigs"](["mindCustomPrompt"]);

    _0x746822["systemMessage"] = _0x1dcebc || '我希望你使用markdown格式回答我得问题、我的需求是得到一份markdown格式的大纲、尽量做的精细、层级多一点、不管我问你什么、都需要您回复我一个大纲出来、我想使用大纲做思维导图、除了大纲之外、不要回复任何一个字。';
    return this['chatgptService']["chatProcess"](Object["assign"](Object['assign']({}, _0x746822), {
      'cusromPrompt': true
    }), _0x2fdefc, _0x2618a1);
  }

  async ['draw'](_0x47f091, _0x37976a) {
    const _0x59fe07 = await this["globalConfigService"]["getConfigs"](["mjCustomFanyiPrompt"]),
          _0x43ec1e = _0x59fe07 || "接下来我会给你一些内容、我希望你帮我翻译成英文、不管我给你任何语言、你都回复我英文、如果给你了英文、依然回复我更加优化的英文、并且期望你不需要做任何多余的解释、给我英文即可、不要加任何东西、我只需要英文！",
          _0x5dbb8a = await this['chatgptService']["chatProcess"](Object["assign"](Object['assign']({}, _0x47f091), {
      'systemMessage': _0x43ec1e,
      'cusromPrompt': true
    }), _0x37976a);

    _0x5dbb8a && (_0x47f091["prompt"] = _0x5dbb8a);
    return await this["chatgptService"]["draw"](_0x47f091, _0x37976a);
  }

  async ["getKeyDetail"](_0x546a25) {
    return await this["chatgptService"]["getKeyDetail"](_0x546a25);
  }

  async ["getKeyList"](_0x3a71ce, _0x4f886e) {
    return await this['chatgptService']["getKeyList"](_0x3a71ce, _0x4f886e);
  }

  async ["getGptModelList"](_0x3983b5) {
    return await this["chatgptService"]["getGptModelList"](_0x3983b5);
  }

  async ["addKey"](_0x1036f1) {
    return await this["chatgptService"]["addKey"](_0x1036f1);
  }

  async ['bulkCreateKey'](_0x26d392) {
    return await this['chatgptService']["bulkCreateKey"](_0x26d392);
  }

  async ["updateKey"](_0x222ea0) {
    return await this["chatgptService"]['updateKey'](_0x222ea0);
  }

  async ['deleteKey'](_0x2b2035) {
    return await this["chatgptService"]["deleteKey"](_0x2b2035);
  }

  async ["addWhiteUser"](_0x44fee3) {
    return this["chatgptService"]["addWhiteUser"](_0x44fee3);
  }

  async ['updateWhiteUser'](_0x577c47) {
    return this["chatgptService"]["updateWhiteUser"](_0x577c47);
  }

  async ["getWhiteListUser"](_0x325986, _0xe8ccea) {
    return this["chatgptService"]['getWhiteListUser'](_0x325986, _0xe8ccea);
  }

};

__decorate([(0, common_1["Post"])('chat-process'), (0, swagger_1["ApiOperation"])({
  'summary': "gpt聊天对话"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Req"])()), __param(2, (0, common_1["Res"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [chatProcess_dto_1["ChatProcessDto"], Object, Object]), __metadata('design:returntype', void 0)], ChatgptController['prototype'], "chatProcess", null);

__decorate([(0, common_1["Post"])("mj-associate"), (0, swagger_1["ApiOperation"])({
  'summary': 'gpt描述词绘画联想'
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [chatProcess_dto_1["ChatProcessDto"], Object]), __metadata("design:returntype", Promise)], ChatgptController["prototype"], "mjAssociate", null);

__decorate([(0, common_1["Post"])('mj-fy'), (0, swagger_1["ApiOperation"])({
  'summary': "gpt描述词绘画翻译"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Body'])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [chatProcess_dto_1["ChatProcessDto"], Object]), __metadata("design:returntype", Promise)], ChatgptController["prototype"], "mjFanyi", null);

__decorate([(0, common_1["Post"])("chat-mind"), (0, swagger_1["ApiOperation"])({
  'summary': "mind思维导图提示"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Body'])()), __param(1, (0, common_1["Req"])()), __param(2, (0, common_1['Res'])()), __metadata("design:type", Function), __metadata('design:paramtypes', [chatProcess_dto_1["ChatProcessDto"], Object, Object]), __metadata("design:returntype", Promise)], ChatgptController["prototype"], "chatmind", null);

__decorate([(0, common_1["Post"])('chat-draw'), (0, swagger_1['ApiOperation'])({
  'summary': "gpt绘画"
}), (0, common_1['UseGuards'])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Body'])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [chatDraw_dto_1["ChatDrawDto"], Object]), __metadata("design:returntype", Promise)], ChatgptController['prototype'], "draw", null);

__decorate([(0, common_1['Get'])("keyDetail"), (0, swagger_1["ApiOperation"])({
  'summary': "gpt key详情"
}), __param(0, (0, common_1["Query"])('key')), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", Promise)], ChatgptController["prototype"], 'getKeyDetail', null);

__decorate([(0, common_1["Get"])("keyList"), (0, swagger_1["ApiOperation"])({
  'summary': '查询key的列表'
}), (0, common_1['UseGuards'])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Query"])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [getKeyList_dto_1["GetKeyListDto"], Object]), __metadata("design:returntype", Promise)], ChatgptController["prototype"], "getKeyList", null);

__decorate([(0, common_1["Get"])("keyModelList"), (0, swagger_1["ApiOperation"])({
  'summary': "获取key支持的model列表"
}), (0, common_1["UseGuards"])(adminAuth_guard_1['AdminAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Query"])("key")), __metadata('design:type', Function), __metadata("design:paramtypes", [String]), __metadata('design:returntype', Promise)], ChatgptController['prototype'], 'getGptModelList', null);

__decorate([(0, common_1["Post"])("addKey"), (0, swagger_1["ApiOperation"])({
  'summary': "添加key"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [addKey_dto_1["AddKeyDto"]]), __metadata('design:returntype', Promise)], ChatgptController['prototype'], "addKey", null);

__decorate([(0, common_1["Post"])("blukCreateKey"), (0, swagger_1["ApiOperation"])({
  'summary': "批量添加Key"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1['Body'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [bulkCreateKey_dto_1["BulkCreateKeyDto"]]), __metadata('design:returntype', Promise)], ChatgptController["prototype"], "bulkCreateKey", null);

__decorate([(0, common_1['Post'])("updateKey"), (0, swagger_1["ApiOperation"])({
  'summary': "修改key"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1["Body"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [updateKey_dto_1['UpdateKeyDto']]), __metadata("design:returntype", Promise)], ChatgptController["prototype"], 'updateKey', null);

__decorate([(0, common_1['Post'])('deleteKey'), (0, swagger_1['ApiOperation'])({
  'summary': "删除key"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [deleteKey_dto_1["DeleteKeyDto"]]), __metadata("design:returntype", Promise)], ChatgptController["prototype"], "deleteKey", null);

__decorate([(0, common_1['Post'])('addWhiteUser'), (0, swagger_1["ApiOperation"])({
  'summary': "添加白名单用户"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [addWhiteUser_dto_1['AddWhiteUserDto']]), __metadata('design:returntype', Promise)], ChatgptController["prototype"], "addWhiteUser", null);

__decorate([(0, common_1["Post"])("updateWhiteUser"), (0, swagger_1["ApiOperation"])({
  'summary': '修改白名单用户'
}), (0, common_1['UseGuards'])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1["Body"])()), __metadata('design:type', Function), __metadata('design:paramtypes', [updateWhiteUser_dto_1["UpdateWhiteUserDto"]]), __metadata("design:returntype", Promise)], ChatgptController['prototype'], 'updateWhiteUser', null);

__decorate([(0, common_1["Get"])("userWhiteList"), (0, swagger_1["ApiOperation"])({
  'summary': "查询白名单用户"
}), (0, common_1['UseGuards'])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1['Query'])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [getWhiteUserList_dto_1["GetWhiteUserListDto"], Object]), __metadata("design:returntype", Promise)], ChatgptController['prototype'], "getWhiteListUser", null);

ChatgptController = __decorate([(0, swagger_1["ApiTags"])("chatgpt"), (0, common_1["Controller"])('chatgpt'), __metadata("design:paramtypes", [chatgpt_service_1["ChatgptService"], globalConfig_service_1["GlobalConfigService"]])], ChatgptController);
exports["ChatgptController"] = ChatgptController;