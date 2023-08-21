
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as I}from"./index-eb967e6b.js";import{a as f}from"./config-5832de38.js";import{d as w,R as N,r as _,x as R,o as k,c as q,e,f as l,a as y,k as T,E as g,h as a,q as h}from"./index-614bd441.js";const U={class:"flex justify-between"},j=y("b",null,"阿里云手机验证码配置",-1),B=w({__name:"phone",setup(D){const t=N({phoneRegisterStatus:"",aliPhoneAccessKeyId:"",aliPhoneAccessKeySecret:"",aliPhoneSignName:"",aliPhoneTemplateCode:""}),b=_({phoneRegisterStatus:[{required:!1,trigger:"blur",message:"请选择是否开启手机号注册"}],aliPhoneAccessKeyId:[{required:!1,trigger:"blur",message:"请填写阿里云短信服务accessKeyId"}],aliPhoneAccessKeySecret:[{required:!1,trigger:"blur",message:"请填写阿里云短信服务accessKeySecret"}],aliPhoneSignName:[{required:!1,trigger:"blur",message:"请填写阿里云短信服务的模板签名"}],aliPhoneTemplateCode:[{required:!1,trigger:"blur",message:"请填写阿里云短信服务的模板ID"}]}),d=_();async function m(){const s=await f.queryConfig({keys:["phoneRegisterStatus","aliPhoneAccessKeyId","aliPhoneAccessKeySecret","aliPhoneSignName","aliPhoneTemplateCode"]});Object.assign(t,s.data)}function P(){var s;(s=d.value)==null||s.validate(async o=>{if(o){try{await f.setConfig({settings:S(t)}),g.success("变更配置信息成功")}catch{}m()}else g.error("请填写完整信息")})}function S(s){return Object.keys(s).map(o=>({configKey:o,configVal:s[o]}))}return R(()=>{m()}),(s,o)=>{const p=a("el-alert"),x=I,K=a("el-button"),V=a("el-switch"),A=a("el-tooltip"),r=a("el-form-item"),c=a("el-col"),i=a("el-row"),u=a("el-input"),C=a("el-form"),v=a("el-card");return k(),q("div",null,[e(x,null,{default:l(()=>[e(p,{closable:!1,"show-icon":"",title:"验证码说明",description:"此处采用阿里云短信服务、请先申请好个人的签名模板以及获取到您的秘钥信息、详细申请地址为：https://dysms.console.aliyun.com/overview 当您配置并开启后则表示开启用户端手机号注册的行为！",type:"warning"})]),_:1}),e(v,{style:{margin:"20px"}},{header:l(()=>[y("div",U,[j,e(K,{class:"button",text:"",onClick:P},{default:l(()=>[T(" 保存设置 ")]),_:1})])]),default:l(()=>[e(C,{ref_key:"formRef",ref:d,rules:b.value,model:t,"label-width":"170px"},{default:l(()=>[e(i,null,{default:l(()=>[e(c,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"是否开启手机号注册",prop:"phoneRegisterStatus"},{default:l(()=>[e(A,{class:"box-item",effect:"dark",content:"如您启用短信验证、则用户端则可以通过手机验证码方式注册或登录！",placement:"right"},{default:l(()=>[e(V,{modelValue:t.phoneRegisterStatus,"onUpdate:modelValue":o[0]||(o[0]=n=>t.phoneRegisterStatus=n),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(c,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"AccessKeyId",prop:"aliPhoneAccessKeyId"},{default:l(()=>[e(u,{modelValue:t.aliPhoneAccessKeyId,"onUpdate:modelValue":o[1]||(o[1]=n=>t.aliPhoneAccessKeyId=n),placeholder:"请填写AccessKeyId",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(c,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"AccessKeySecret",prop:"aliPhoneAccessKeySecret"},{default:l(()=>[e(u,{modelValue:t.aliPhoneAccessKeySecret,"onUpdate:modelValue":o[2]||(o[2]=n=>t.aliPhoneAccessKeySecret=n),placeholder:"请填写AccessKeySecret",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(c,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"短信签名",prop:"aliPhoneSignName"},{default:l(()=>[e(u,{modelValue:t.aliPhoneSignName,"onUpdate:modelValue":o[3]||(o[3]=n=>t.aliPhoneSignName=n),placeholder:"请填写您申请的短信签名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(c,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"短信模板ID",prop:"aliPhoneTemplateCode"},{default:l(()=>[e(u,{modelValue:t.aliPhoneTemplateCode,"onUpdate:modelValue":o[4]||(o[4]=n=>t.aliPhoneTemplateCode=n),placeholder:"请填写短信模板ID",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof h=="function"&&h(B);export{B as default};
