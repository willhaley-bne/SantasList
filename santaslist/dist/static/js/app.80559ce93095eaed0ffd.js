webpackJsonp([1],{"+mEM":function(t,e,i){t.exports=i.p+"static/img/santa-claus-christmas.b54fa24.png"},"1NdB":function(t,e,i){t.exports=i.p+"static/img/santa.67e1a32.jpg"},"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n=i("Tqaz"),c=i("c6fh"),a=i.n(c),u=i("4gUt"),_=i.n(u),o=i("UnSZ"),r=i.n(o),h={name:"App",mounted:function(){new URLSearchParams(window.location.search).get("admin")&&(this.admin=!0),this.decision_state=this.$ls.get("decision_state","random"),this.decision_state.includes("nice")&&(this.state_queue="!"),this.decision_state.includes("naughty")&&(this.state_queue="?");var t=this;setInterval(function(){t.decision_state=t.$ls.get("decision_state","random"),t.decision_state.includes("random")&&(t.state_queue=null),t.decision_state.includes("nice")&&(t.state_queue="!"),t.decision_state.includes("naughty")&&(t.state_queue="?")},1e3)},data:function(){return{msg:"Welcome to Your Vue.js App",checking_the_list:0,img:null,camera:null,deviceId:null,devices:[],countdown:5,first_device:!0,number:0,decision_state:!1,admin:!1,state_queue:null}},methods:{set_decision_status:function(t){this.$ls.set("decision_state",t)},check_the_list:function(t){this.decision_state.includes("random")&&(this.state_queue=null),this.decision_state.includes("nice")&&(this.state_queue="!"),this.decision_state.includes("naughty")&&(this.state_queue="?"),this.checking_the_list=1;var e=this;setTimeout(function(){if(e.countdown>0)e.tick_tock();else{if("nice"==e.decision_state)return void e.check_the_list_two();if("naughty"==e.decision_state)return void e.check_the_list_three();e.number=Math.floor(11*Math.random()),9==e.number?e.check_the_list_three():e.check_the_list_two()}},1e3)},check_the_list_two:function(){this.checking_the_list=2,this.img=this.$refs.webcam.capture(),this.confetti_yall();var t=this;setTimeout(function(){t.checking_the_list=0,t.countdown=5,t.$confetti.stop()},1e4)},check_the_list_three:function(){this.checking_the_list=3,this.img=this.$refs.webcam.capture();var t=this;setTimeout(function(){t.checking_the_list=0,t.countdown=5},1e4)},tick_tock:function(){this.countdown--,this.check_the_list()},confetti_yall:function(){this.$confetti.start({particles:[{type:"image",url:"https://ud.mybne.com/hardees-star.png"},{type:"image",url:"https://ud.mybne.com/hamburger.png"},{type:"image",url:"https://ud.mybne.com/santa-hat.png"}],defaultSize:25,defaultDropRate:8,particlesPerFrame:1})}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.admin?s("b-container",[s("b-button",{on:{click:function(e){return t.set_decision_status("random")}}},[t._v(" Random")]),t._v(" "),s("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.set_decision_status("nice")}}},[t._v(" Nice")]),t._v(" "),s("b-button",{attrs:{variant:"warning"},on:{click:function(e){return t.set_decision_status("naughty")}}},[t._v(" Naughty")])],1):t._e(),t._v(" "),t.admin?t._e():s("b-container",[s("b-row",[s("b-col",{attrs:{md:"6"}},[t.checking_the_list<2?s("span",[s("img",{attrs:{src:i("1NdB")}})]):t._e(),t._v(" "),2==t.checking_the_list?s("span",[s("h1",[t._v("Congratulations!"),s("br"),t._v("  You're on the nice list!")]),t._v(" "),s("img",{staticClass:"img-responsive",attrs:{src:i("+mEM"),width:"517px"}})]):t._e(),t._v(" "),3==t.checking_the_list?s("span",[s("h1",[t._v("Oh NO!"),s("br"),t._v("  You're on the naughty list!")]),t._v(" "),s("img",{staticClass:"img-responsive",attrs:{src:i("wE8Y")}})]):t._e()]),t._v(" "),s("b-col",{attrs:{md:"6"}},[0==t.checking_the_list?s("b-button",{staticClass:"m-5",staticStyle:{padding:"50px","font-size":"50px"},attrs:{variant:"success",size:"lg"},on:{click:t.check_the_list}},[t._v("\n          Find Out Now"+t._s(t.state_queue)+"\n        ")]):t._e(),t._v(" "),1==t.checking_the_list?s("span",[s("h1",[t._v("Using facial recognition,"),s("br"),t._v(" we'll check the list... twice")]),t._v(" "),s("h3",[t._v("Smile, taking picture in "+t._s(t.countdown))]),t._v(" "),s("vue-web-cam",{ref:"webcam",attrs:{width:"100%",selectFirstDevice:t.first_device}}),t._v(" "),s("h3",[t._v("(Santa is High Tech Y'all)")])],1):t._e(),t._v(" "),2==t.checking_the_list?s("span",[s("img",{staticClass:"img-rounded",attrs:{src:t.img}}),t._v("\n          "+t._s(t.number)+"\n        ")]):t._e(),t._v(" "),3==t.checking_the_list?s("span",[s("img",{staticClass:"img-rounded",attrs:{src:t.img}})]):t._e()],1)],1)],1)],1)},staticRenderFns:[]};var d=i("VU/8")(h,l,!1,function(t){i("gn5v")},null,null).exports;i("Jmt5"),i("9M+g");s.default.config.productionTip=!1,s.default.use(n.a),s.default.use(a.a),s.default.use(_.a),s.default.use(r.a,{name:"ls",bind:!0}),new s.default({el:"#app",components:{App:d},template:"<App/>"})},gn5v:function(t,e){},wE8Y:function(t,e,i){t.exports=i.p+"static/img/coal.b15a921.jpg"}},["NHnr"]);
//# sourceMappingURL=app.80559ce93095eaed0ffd.js.map