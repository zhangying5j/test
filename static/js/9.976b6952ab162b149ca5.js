webpackJsonp([9],{"N/1Y":function(t,e){},x24s:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Dd8w"),i=a.n(r),n=a("NYxO"),s={name:"BudgetSplit",components:{QueryForm:function(){return a.e(79).then(a.bind(null,"Hb8j"))},BaseTable:function(){return a.e(77).then(a.bind(null,"ss0d"))}},data:function(){return{budget:{formulateInstitution:"",type:"",channel:"",timeSlot:"",version:"",isUpToDate:"",bore:"",productType:""},columns:[{prop:"subInstitution",label:"机构",width:160,align:"right"},{prop:"type",label:"预算类型",width:90},{prop:"channel",label:"预算渠道",width:100},{prop:"timeSlot",label:"预算时间段",width:100},{prop:"bore",label:"预算口径",width:100},{prop:"productType",label:"业务分类",width:100},{prop:"targetPremium",label:"目标保费 (万元)",width:140},{prop:"targetOperaCostRate",label:"目标经营成本率",width:140},{prop:"targetReimburseRate",label:"目标赔付率",width:140},{prop:"targetMarketCostRate",label:"目标市场费用率",width:140},{prop:"targetNonMarketCostRate",label:"目标非市场费用率",width:150},{prop:"status",label:"拆分状态",width:100,status:!0},{prop:"operation",label:"操作",width:100,operation:!0,operations:[{text:"拆分",event:"split"}]}],data:[{version:"1",subInstitution:"山西省分公司",type:"年度",channel:"非网电预算",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%",status:"未拆分",statusType:"warning"}],pageSize:5,currentPage:1}},computed:i()({},Object(n.c)({tableHeader:function(t){return t.app.tableHeader}}),{currentData:function(){var t=[],e=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var r=e;r<a;++r)t.push(this.data[r]);return t},timeSlots:function(){var t=[],e=this.budget.type+"";return"month"===e?(t.push({value:"201801",label:"2018第一季度"}),t.push({value:"201802",label:"2018第二季度"}),t.push({value:"201803",label:"2018第三季度"}),t.push({value:"201804",label:"2018第四季度"}),this.resetTime("201801")):"year"===e&&(t.push({value:"2018",label:"2018"}),this.resetTime("2018")),t}}),methods:{resetForm:function(t){this.$refs[t].reset()},split:function(){this.$router.push({path:"/admin/budget/split/1"})},resetTime:function(t){this.budget.timeSlot=t},query:function(){},dataChange:function(t,e){this.pageSize=t,this.currentPage=e}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("query-form",{ref:"splitForm",attrs:{budget:t.budget}})],1),t._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){t.resetForm("splitForm")}}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.query}},[t._v("查询")])],1),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:t.columns,data:t.currentData,rowKey:"version",pagination:!0,total:t.data.length},on:{split:t.split,dataChange:t.dataChange}})],1)])])},staticRenderFns:[]};var o=a("VU/8")(s,l,!1,function(t){a("N/1Y")},"data-v-c1a478e6",null);e.default=o.exports}});
//# sourceMappingURL=9.976b6952ab162b149ca5.js.map