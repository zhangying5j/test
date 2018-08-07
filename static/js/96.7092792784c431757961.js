webpackJsonp([96],{"7BBA":function(t,e){},RXyt:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("P0XF"),a={name:"TagDimension",props:{data:{type:Object,required:!0}},data:function(){return{currentEdit:"",query:"",specialTableBtn:{width:"100%",marginTop:"5px",border:"1px dashed #15afff",background:"#fff",color:"#15afff",display:"block"}}},computed:{tags:function(){var t=[];return this.data.split.forEach(function(e){t=t.concat(e.tags)}),this.data.tags.filter(function(e){return!t.includes(e.code)})},leftTags:function(){var t=this;return this.tags.filter(function(e){return e.name.toLowerCase().indexOf(t.query.toLowerCase())>-1})},currentEditIndex:function(){var t=this;return this.data.split.findIndex(function(e){return e.id===t.currentEdit})}},methods:{getTags:function(t){var e=this;return t.map(function(t){return e.data.tags.find(function(e){return e.code===t})})},addTag:function(t){this.currentEditIndex>-1&&this.data.split[this.currentEditIndex].tags.push(t)},removeTag:function(t){var e=this.data.split[this.currentEditIndex].tags.findIndex(function(e){return e===t});this.data.split[this.currentEditIndex].tags.splice(e,1)},addRecord:function(){var t=Object(n.a)(),e={id:t,isEdit:!0,title:"",tags:[]};this.data.split.push(e),this.edit(t)},removeRecord:function(t){var e=this;this.$confirm("确定删除此条数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i=e.data.split.findIndex(function(e){return e.id===t});i===e.currentEditIndex&&(e.currentEdit=""),e.data.split.splice(i,1),e.$message({type:"success",message:"删除成功!"})}).catch(function(){})},edit:function(t){this.currentEditIndex>-1&&(this.data.split[this.currentEditIndex].isEdit=!1),this.currentEdit=t,this.data.split[this.currentEditIndex].isEdit=!0},save:function(){this.data.split[this.currentEditIndex].isEdit=!1,this.currentEdit=""}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{attrs:{gutter:10}},[i("el-col",{staticClass:"m-top-md",attrs:{span:24}},[i("div",{staticClass:"grid-content bg-purple-dark"},[i("el-card",{attrs:{shadow:"hover","body-style":{overflow:"hidden"}}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v(t._s(t.data.title))])]),t._v(" "),i("el-col",{attrs:{span:8}},[i("el-card",{attrs:{shadow:"hover"}},[i("el-input",{staticClass:"input-with-select",staticStyle:{width:"100%"},attrs:{placeholder:"请输入内容",size:"medium"},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),t._v(" "),i("div",{staticClass:"tagItem"},t._l(t.leftTags,function(e){return i("el-tag",{key:e.code,staticStyle:{"margin-bottom":"5px"},attrs:{size:"small"},nativeOn:{click:function(i){t.addTag(e.code)}}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])}))],1)],1),t._v(" "),i("el-col",{attrs:{span:16}},[i("div",{staticClass:"grid-content bg-purple-dark"},[i("el-table",{staticClass:"tb-edit",attrs:{border:"",size:"mini",data:t.data.split,"highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"title",label:"标签",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit?i("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.row.title,callback:function(i){t.$set(e.row,"title",i)},expression:"scope.row.title"}}):i("span",[t._v(t._s(e.row.title))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"tags",label:"标签范围"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(t.getTags(e.row.tags),function(n){return i("el-tag",{key:n.code,attrs:{"disable-transitions":"",size:"small",closable:e.row.isEdit},on:{close:function(e){t.removeTag(n.code)}}},[t._v("\n                        "+t._s(n.name)+"\n                      ")])})}}])}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top"}},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentEdit!==e.row.id,expression:" currentEdit!== scope.row.id"}],attrs:{size:"small",type:"text",icon:"iconfont icon-bianji"},on:{click:function(i){t.edit(e.row.id)}}})],1),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"保存",placement:"top"}},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentEdit===e.row.id,expression:"currentEdit === scope.row.id"}],staticStyle:{"margin-left":"0"},attrs:{size:"small",type:"text",icon:"iconfont icon-fuzhi"},on:{click:t.save}})],1),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[i("el-button",{staticStyle:{color:"#FE2B6F"},attrs:{type:"text",size:"small",icon:"iconfont icon-iconfont-shanchu"},nativeOn:{click:function(i){i.preventDefault(),t.removeRecord(e.row.id)}}})],1)]}}])})],1),t._v(" "),i("el-button",{style:t.specialTableBtn,attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.addRecord}},[t._v("\n                  新增行\n                ")])],1)])],1)],1)])],1)},staticRenderFns:[]};var r=i("VU/8")(a,s,!1,function(t){i("7BBA")},"data-v-21fdd367",null);e.default=r.exports}});
//# sourceMappingURL=96.7092792784c431757961.js.map