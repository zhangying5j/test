webpackJsonp([64],{"3lHb":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t={name:"baseInfo",components:{BackButton:function(){return a.e(78).then(a.bind(null,"uOVF"))},BaseTable:function(){return a.e(77).then(a.bind(null,"ss0d"))}},data:function(){return{fleetDeclare:{ownOrg:"",channel:"",ownSalesMan:"",policyHolder:"",expPayRate:""},fleetTypeCode:[],orgList:[{orgCode:"000000",orgName:"北京分公司"},{orgCode:"000001",orgName:"天津分公司"},{orgCode:"000002",orgName:"上海分公司"}],channelList:[{channelCode:"001",channelName:"保险公司车险"},{channelCode:"002",channelName:"银行邮政代理"},{channelCode:"003",channelName:"电话车险"},{channelCode:"004",channelName:"网销车险"},{channelCode:"005",channelName:"4S店保险中心车险"},{channelCode:"006",channelName:"维修店专业车险"}],fleetTypeList:[{code:"1",name:"企业未营业车"},{code:"2",name:"营业公路客运"},{code:"3",name:"营业城市公交"},{code:"4",name:"营业旅游车"},{code:"5",name:"非营业货车(含特四)"},{code:"6",name:"营业货车(含特四)"},{code:"7",name:"特一"},{code:"8",name:"特二"},{code:"9",name:"特三"},{code:"10",name:"营业出租租赁客车"}],importCols:[{prop:"d1",label:"车队类型",aligin:"center"},{prop:"d2",label:"座位数/吨位数/特种车类型",aligin:"center"},{prop:"d3",label:"车龄分段",aligin:"center"},{prop:"d4",label:"承保车辆数",aligin:"center"},{prop:"d5",label:"平均新车购置价(万元)",aligin:"center"},{prop:"d6",label:"商业险自主渠道系数(0.85-1.15)",aligin:"center"},{prop:"d7",label:"商业险自主核保系数(0.85-1.15)",aligin:"center"},{prop:"d8",label:"交强险",aligin:"center"},{prop:"d9",label:"车损",aligin:"center"},{prop:"d10",label:"三者保额(万元)",aligin:"center"},{prop:"d11",label:"盗抢",aligin:"center"},{prop:"d12",label:"车上人员保额(驾驶员，万元)",aligin:"center"},{prop:"d13",label:"车上人员总保额(乘客，万元)",aligin:"center"},{prop:"d14",label:"车上货物保额(万元)",aligin:"center"},{prop:"d15",label:"玻璃类型",aligin:"center"},{prop:"d16",label:"自燃",aligin:"center"},{prop:"d17",label:"其他险别",aligin:"center"},{prop:"d18",label:"备注",aligin:"center"}],importData:[{d1:"出租、租赁营业客车06",d2:"6座以下",d3:"[0-1)年",d4:"300",d5:"20",d6:"1.12",d7:"1.12",d8:"是",d9:"是",d10:"30",d11:"是",d12:"2",d13:"2",d14:"2",d15:"国产",d16:"是",d17:"是",d18:"无"}],importDialogVisible:!1,importTableVisible:!1}},methods:{riskInfo:function(){this.$router.push("/admin/fleet/declare/modify/riskInfo")}}},o={render:function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"fleetDeclareForm",attrs:{"label-width":"180px",inline:!0,model:e.fleetDeclare}},[a("el-form-item",{attrs:{label:"归属机构:",prop:"ownOrg"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.fleetDeclare.orgCode,callback:function(l){e.$set(e.fleetDeclare,"orgCode",l)},expression:"fleetDeclare.orgCode"}},e._l(e.orgList,function(e){return a("el-option",{key:e.orgCode,attrs:{label:e.orgName,value:e.orgCode}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"归属渠道:",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择渠道"},model:{value:e.fleetDeclare.channel,callback:function(l){e.$set(e.fleetDeclare,"channel",l)},expression:"fleetDeclare.channel"}},e._l(e.channelList,function(e){return a("el-option",{key:e.channelCode,attrs:{label:e.channelName,value:e.channelCode}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"归属业务员:",prop:"ownSalesMan"}},[a("el-input",{model:{value:e.fleetDeclare.ownSalesMan,callback:function(l){e.$set(e.fleetDeclare,"ownSalesMan",l)},expression:"fleetDeclare.ownSalesMan"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"投保人名称:",prop:"policyHolder"}},[a("el-input",{model:{value:e.fleetDeclare.policyHolder,callback:function(l){e.$set(e.fleetDeclare,"policyHolder",l)},expression:"fleetDeclare.policyHolder"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"续保状态:",prop:"insuranceType"}},[a("el-select",{model:{value:e.fleetDeclare.insuranceType,callback:function(l){e.$set(e.fleetDeclare,"insuranceType",l)},expression:"fleetDeclare.insuranceType"}},[a("el-option",{attrs:{value:"1",label:"新保"}}),e._v(" "),a("el-option",{attrs:{value:"2",label:"续保"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"核保人预估赔付率(%)",prop:"expPayRate"}},[a("el-input",{model:{value:e.fleetDeclare.expPayRate,callback:function(l){e.$set(e.fleetDeclare,"expPayRate",l)},expression:"fleetDeclare.expPayRate"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"sector-list"},[a("div",{staticClass:"title"},[e._v("车队类型")]),e._v(" "),a("div",{staticClass:"biz-sector"},[a("el-form",{attrs:{"label-width":"120px",inline:!0}},[a("el-form-item",[a("el-checkbox-group",{model:{value:e.fleetTypeCode,callback:function(l){e.fleetTypeCode=l},expression:"fleetTypeCode"}},[e._l(e.fleetTypeList,function(l){return a("el-checkbox",{key:l.code,attrs:{label:l.code,name:"fleetType"}},[e._v("\n              "+e._s(l.name)+"\n            ")])}),e._v(" "),a("el-checkbox",{staticStyle:{color:"red"},attrs:{label:"0"}},[e._v(" 未勾选板块出单取0费用")])],2)],1)],1)],1)]),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{on:{click:function(l){e.importDialogVisible=!0}}},[e._v("导  入")]),e._v(" "),a("el-button",[e._v("配置部门")]),e._v(" "),a("back-button",{attrs:{type:"next"},on:{next:e.riskInfo}},[e._v("下一步")])],1),e._v(" "),a("base-table",{directives:[{name:"show",rawName:"v-show",value:e.importTableVisible,expression:"importTableVisible"}],attrs:{columns:e.importCols,data:e.importData,"show-header":!0}}),e._v(" "),a("el-dialog",{attrs:{title:"信息导入",visible:e.importDialogVisible,width:"400px"},on:{"update:visible":function(l){e.importDialogVisible=l}}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1,drag:""}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("Excel格式，以.xls为后缀名")])]),e._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(l){e.importDialogVisible=!1,e.importTableVisible=!0}}},[e._v("导入")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(l){e.importDialogVisible=!1}}},[e._v("关闭")])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(t,o,!1,function(e){a("9wi6")},"data-v-08873a88",null);l.default=n.exports},"9wi6":function(e,l){}});
//# sourceMappingURL=64.be4bcefe50455c58aa38.js.map