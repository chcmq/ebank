webpackJsonp([7],{335:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[],purse_type:"",user_type:"",merchant:"",reason:"",amount_into:0,amount_out:0,keyword:{page:1,export:0,id:"",user_id:"",reason:"",amount_flag:[],purse_type_id:[],user_type_id:[],merchant_id:1,date:[]}}},methods:{search:function(t){this.keyword.page=t,this.keyword.export=0,this.init()},exports:function(){this.keyword.export=1,this.init()},untransfer:function(t,e){var s=this;mdui.prompt("冲正此记录后可能造成业务匹配问题，对应的转账金额也会原路返还，知悉后请在下方输入【冲正原因】","冲正金额(分)："+e,function(e){e&&s.$API.post("/transfer/untransfer",{id:t,remarks:e}).then(function(t){mdui.alert("已成功冲正并返还金额",function(){},{history:!1}),s.init()}).catch(function(t){})},function(){},{history:!1,confirmText:"确定",cancelText:"取消"})},tab_change:function(t){this.keyword.page=1,this.keyword.merchant_id=t,this.init()},init:function(){var t=this;t.$API.get("/transfer/index",t.keyword).then(function(e){t.list=e.list,t.purse_type=e.purse_type,t.user_type=e.user_type,t.merchant=e.merchant,t.reason=e.reason,t.amount_into=e.amount_into,t.amount_out=e.amount_out,t.keyword.export&&mdui.alert("可在左侧【导出任务】菜单查看任务状态并下载文件","已放入导出任务",function(){},{history:!1}),t.$nextTick(function(){$(".mdui-tab").mutation()})}).catch(function(t){})}},mounted:function(){this.init()}}},336:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"transfer_index"},[s("div",{staticClass:"typo",on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.search(1)}}},[s("blockquote",{staticClass:"blockquote_normal"},[s("p",[t._v("\n\t\t\t\t转账ID："),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.id,expression:"keyword.id"}],staticClass:"mdui-textfield-input input_normal",attrs:{type:"text"},domProps:{value:t.keyword.id},on:{input:function(e){e.target.composing||t.$set(t.keyword,"id",e.target.value)}}})]),t._v(" "),s("p",[t._v("\n\t\t\t\t用户ID："),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.user_id,expression:"keyword.user_id"}],staticClass:"mdui-textfield-input input_normal",attrs:{type:"text"},domProps:{value:t.keyword.user_id},on:{input:function(e){e.target.composing||t.$set(t.keyword,"user_id",e.target.value)}}})]),t._v(" "),s("p",[t._v("\n\t\t\t\treason："),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.reason,expression:"keyword.reason"}],staticClass:"mdui-textfield-input input_normal",attrs:{type:"text"},domProps:{value:t.keyword.reason},on:{input:function(e){e.target.composing||t.$set(t.keyword,"reason",e.target.value)}}})]),t._v(" "),s("p",[t._v("\n\t\t\t\t日期筛选："),s("date-picker",{model:{value:t.keyword.date,callback:function(e){t.$set(t.keyword,"date",e)},expression:"keyword.date"}})],1),s("p",[t._v("\n\t\t\t\t钱包类型：\n\t\t\t\t"),t._l(t.purse_type,function(e,o){return s("label",{staticClass:"mdui-checkbox",staticStyle:{"margin-right":"2rem"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.purse_type_id,expression:"keyword.purse_type_id"}],attrs:{type:"checkbox"},domProps:{value:o,checked:Array.isArray(t.keyword.purse_type_id)?t._i(t.keyword.purse_type_id,o)>-1:t.keyword.purse_type_id},on:{change:function(e){var s=t.keyword.purse_type_id,i=e.target,a=!!i.checked;if(Array.isArray(s)){var r=o,n=t._i(s,r);i.checked?n<0&&t.$set(t.keyword,"purse_type_id",s.concat([r])):n>-1&&t.$set(t.keyword,"purse_type_id",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.keyword,"purse_type_id",a)}}}),t._v(" "),s("i",{staticClass:"mdui-checkbox-icon"}),t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])})],2),t._v(" "),s("p",[t._v("\n\t\t\t\t身份类型：\n\t\t\t\t"),t._l(t.user_type,function(e,o){return s("label",{staticClass:"mdui-checkbox",staticStyle:{"margin-right":"2rem"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.user_type_id,expression:"keyword.user_type_id"}],attrs:{type:"checkbox"},domProps:{value:o,checked:Array.isArray(t.keyword.user_type_id)?t._i(t.keyword.user_type_id,o)>-1:t.keyword.user_type_id},on:{change:function(e){var s=t.keyword.user_type_id,i=e.target,a=!!i.checked;if(Array.isArray(s)){var r=o,n=t._i(s,r);i.checked?n<0&&t.$set(t.keyword,"user_type_id",s.concat([r])):n>-1&&t.$set(t.keyword,"user_type_id",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.keyword,"user_type_id",a)}}}),t._v(" "),s("i",{staticClass:"mdui-checkbox-icon"}),t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])})],2),t._v(" "),s("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(e){t.search(1)}}},[s("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("search")]),t._v("搜索")]),t._v(" "),s("a",{staticClass:"mdui-btn mdui-ripple mdui-color-pink",on:{click:t.exports}},[s("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("file_upload")]),t._v("导出")])]),t._v(" "),s("blockquote",{staticClass:"blockquote_normal"},[t._v("\n\t\t\t有效转账记录统计，不包括冲正(分)\n\t\t\t"),s("p",{staticStyle:{"line-height":"25px"}},[s("span",{staticClass:"mdui-m-r-3"},[t._v("收入："+t._s(t.amount_into))]),s("span",{staticClass:"mdui-m-r-3"},[t._v("支出："+t._s(t.amount_out))])])])]),t._v(" "),s("div",{staticClass:"mdui-tab",attrs:{"mdui-tab":""}},t._l(t.merchant,function(e,o,i){return s("a",{class:{"mdui-btn":!0,"mdui-ripple":!0,"mdui-tab-active":0===i},attrs:{href:"#tab_"+i},domProps:{textContent:t._s(e)},on:{click:function(e){t.tab_change(o)}}})}),0),t._v(" "),s("div",{staticClass:"mdui-table-fluid table-data-fluid"},[s("table",{staticClass:"mdui-table mdui-table-hoverable table-data"},[t._m(0),t._v(" "),s("tbody",[t._l(t.list.data,function(e,o,i){return[s("tr",{staticClass:"mdui-color-grey-200",on:{dblclick:function(t){e.more=!e.more}}},[s("td",{domProps:{textContent:t._s("#"+(o+1))}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.id)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.reason)}}),t._v(" "),s("td",{domProps:{textContent:t._s(t.reason[e.reason])}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.amount)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.created_at)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.updated_at)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.remarks)}}),t._v(" "),s("td",[s("div",{staticClass:"mdui-btn-group"},[1==e.status?s("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(s){s.stopPropagation(),t.untransfer(e.id,e.amount)}}},[t._v("单笔冲正")]):t._e(),t._v(" "),2==e.status?s("a",{staticClass:"mdui-btn",attrs:{disabled:"","mdui-tooltip":"{content:'此流水已不再具有参考价值，标记为废弃，仅做记录查询用途',delay:500}"}},[t._v("已冲正")]):t._e()])])]),t._v(" "),s("tr",{directives:[{name:"show",rawName:"v-show",value:e.more,expression:"val.more"}]},[s("td",{staticClass:"mdui-text-color-deep-orange"}),t._v(" "),s("td",{staticClass:"mdui-text-color-deep-orange"},[t._v("出账信息：")]),t._v(" "),s("td",{staticClass:"mdui-text-color-deep-orange"},[t._v("用户ID："),s("span",{domProps:{textContent:t._s(e.out_user_id)}})]),t._v(" "),s("td",{staticClass:"mdui-text-color-deep-orange",domProps:{textContent:t._s(t.user_type[e.out_user_type_id])}}),t._v(" "),s("td",{staticClass:"mdui-text-color-deep-orange",domProps:{textContent:t._s(t.purse_type[e.out_purse_type_id])}}),t._v(" "),s("td",{staticClass:"mdui-text-color-deep-orange"},[t._v("钱包ID："),s("span",{domProps:{textContent:t._s(e.out_purse_id)}})]),t._v(" "),s("td",{staticClass:"mdui-text-color-deep-orange",attrs:{colspan:"3"}},[t._v("出账后余额(原)："),s("span",{domProps:{textContent:t._s(e.out_balance)}}),t._v("("),s("span",{domProps:{textContent:t._s("+"+e.amount)}}),t._v(")")])]),t._v(" "),s("tr",{directives:[{name:"show",rawName:"v-show",value:e.more,expression:"val.more"}]},[s("td",{staticClass:"mdui-text-color-teal"}),t._v(" "),s("td",{staticClass:"mdui-text-color-teal"},[t._v("进账信息：")]),t._v(" "),s("td",{staticClass:"mdui-text-color-teal"},[t._v("用户ID："),s("span",{domProps:{textContent:t._s(e.into_user_id)}})]),t._v(" "),s("td",{staticClass:"mdui-text-color-teal",domProps:{textContent:t._s(t.user_type[e.into_user_type_id])}}),t._v(" "),s("td",{staticClass:"mdui-text-color-teal",domProps:{textContent:t._s(t.purse_type[e.into_purse_type_id])}}),t._v(" "),s("td",{staticClass:"mdui-text-color-teal"},[t._v("钱包ID："),s("span",{domProps:{textContent:t._s(e.into_purse_id)}})]),t._v(" "),s("td",{staticClass:"mdui-text-color-teal",attrs:{colspan:"3"}},[t._v("进账后余额(原)："),s("span",{domProps:{textContent:t._s(e.into_balance)}}),t._v("("),s("span",{domProps:{textContent:t._s("-"+e.amount)}}),t._v(")")])])]})],2)])]),t._v(" "),s("div",{staticClass:"mdui-color-white footer"},[s("pagination",{attrs:{pageInfo:{total:t.list.total,current:t.list.current_page,pagenum:t.list.per_page,page:t.list.last_page,pagegroup:9,skin:"#2196F3"}},on:{change:t.search}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("#")]),t._v(" "),s("th",[t._v("转账ID")]),t._v(" "),s("th",[t._v("转账reason")]),t._v(" "),s("th",[t._v("reason说明")]),t._v(" "),s("th",[t._v("转账金额(分)")]),t._v(" "),s("th",[t._v("创建时间")]),t._v(" "),s("th",[t._v("修改时间")]),t._v(" "),s("th",[t._v("备注")]),t._v(" "),s("th",[t._v("操作")])])])}]}},377:function(t,e,s){var o=s(1)(s(335),s(336),!1,null,null,null);t.exports=o.exports}});