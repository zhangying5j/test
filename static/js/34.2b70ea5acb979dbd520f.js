webpackJsonp([34],{Fr7u:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=l("Dd8w"),n=l.n(t),i=l("NYxO"),o={name:"ParamConfig",components:{BaseTable:function(){return l.e(77).then(l.bind(null,"ss0d"))},BackButton:function(){return l.e(78).then(l.bind(null,"uOVF"))}},data:function(){return{columns:[{prop:"bizSector",label:"业务板块",width:150,align:"center"},{prop:"channel",label:"数据范围-渠道",width:130,align:"center",isEdit:!1,type:"select",options:[{value:"01",label:"网电"},{value:"02",label:"传统"}]},{prop:"dataRange",label:"数据范围(本级或上级)",width:180,align:"center",isEdit:!1,type:"select",options:[{value:"01",label:"本级"},{value:"02",label:"上级"}]},{prop:"policyRange",label:"保单范围(回滚月份数)",width:180,align:"center",isEdit:!1,type:"select",options:[{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"23",label:"23"},{value:"24",label:"24"},{value:"25",label:"25"},{value:"26",label:"26"},{value:"27",label:"27"},{value:"28",label:"28"},{value:"29",label:"29"},{value:"30",label:"30"},{value:"31",label:"31"},{value:"32",label:"32"},{value:"33",label:"33"},{value:"34",label:"34"},{value:"35",label:"35"},{value:"36",label:"36"}]},{prop:"autoChannelDown",label:"自主渠道系数下限",width:150,align:"center"},{prop:"autoChannelUp",label:"自主渠道系数上限",width:150,align:"center"},{prop:"autoProtectDown",label:"自主核保系数下限",width:150,align:"center"},{prop:"autoProtectUp",label:"自主核保系数上限",width:150,align:"center"},{prop:"forceMarketRate",label:"交强市场费用率(%)",width:150,align:"center"},{prop:"marketRateDown",label:"市场费用率下限（%）",width:150,align:"center"},{prop:"marketRateUp",label:"市场费用率上限（%）",width:150,align:"center"},{prop:"expOperateRateDown",label:"预估经营成本率下限（%）",width:170,align:"center"},{prop:"expOperateRateUp",label:"预估经营成本率上限（%）",width:170,align:"center"}],editFlag:!1}},computed:n()({},Object(i.c)({tableHeader:function(e){return e.app.tableHeader},sectorParam:function(e){return e.individual.sectorParam},paramTableShow:function(e){return e.individual.paramTableShow}})),methods:{edit:function(){this.columns.forEach(function(e){void 0!==e.isEdit&&(e.isEdit=!0)}),this.editFlag=!0},query:function(){this.columns.forEach(function(e){void 0!==e.isEdit&&(e.isEdit=!1)}),this.editFlag=!1},recommend:function(){this.$router.push({path:"/admin/individual/declare/recommend"})}}},r={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{directives:[{name:"show",rawName:"v-show",value:e.paramTableShow,expression:"paramTableShow"}],staticClass:"biz-content"},[l("div",{staticClass:"data"},[l("div",{staticClass:"table"},[l("base-table",{attrs:{columns:e.columns,data:e.sectorParam,rowKey:"id"}})],1)]),e._v(" "),l("div",{staticClass:"option"},[l("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.editFlag,expression:"!editFlag"}],on:{click:e.edit}},[e._v("编辑")]),e._v(" "),l("el-button",{directives:[{name:"show",rawName:"v-show",value:e.editFlag,expression:"editFlag"}],on:{click:e.query}},[e._v("保存")]),e._v(" "),l("back-button",{attrs:{type:"next"},on:{next:e.recommend}},[e._v("智能推荐")])],1)])},staticRenderFns:[]};var u=l("VU/8")(o,r,!1,function(e){l("z0LC")},"data-v-5d140a30",null);a.default=u.exports},z0LC:function(e,a){}});
//# sourceMappingURL=34.2b70ea5acb979dbd520f.js.map