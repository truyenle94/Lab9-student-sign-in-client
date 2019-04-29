(function(t){function e(e){for(var r,u,d=e[0],i=e[1],o=e[2],l=0,f=[];l<d.length;l++)u=d[l],s[u]&&f.push(s[u][0]),s[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,d=1;d<n.length;d++){var i=n[d];0!==s[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},s={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=e,d=d.slice();for(var o=0;o<d.length;o++)e(d[o]);var c=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},"197b":function(t,e,n){},"3d71":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NewStudentForm",{on:{"student-added":t.newStudentAdded}}),n("StudentTable",{attrs:{students:t.students},on:{"student-present":t.studentArrivedOrLeft,"delete-student":t.studentDeleted}}),n("StudentMessage",{attrs:{message:t.message,name:t.name}})],1)},a=[],u=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.errors&&t.errors.length>0,expression:"errors && errors.length > 0"}],staticClass:"alert alert-danger"},t._l(t.errors,function(e){return n("li",{key:e},[t._v(t._s(e))])}),0),n("div",{staticClass:"card add-student m-2 p-2"},[n("form",[n("h4",{staticClass:"card-title"},[t._v("Add new student")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newStudentName,expression:"newStudentName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:t.newStudentName},on:{input:function(e){e.target.composing||(t.newStudentName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"starID"}},[t._v("Star ID")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newStarID,expression:"newStarID",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"starID"},domProps:{value:t.newStarID},on:{input:function(e){e.target.composing||(t.newStarID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.addStudent(e)}}},[t._v("Add")])])])])}),d=[],i={name:"NewStudentForm",data:function(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName&&this.newStarID){var t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}else this.errors.push("Name and StarID are required.")}}},o=i,c=(n("a07e"),n("2877")),l=Object(c["a"])(o,u,d,!1,null,null,null),f=l.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card student-list m-2 p-2"},[n("h4",{staticClass:"card-title"},[t._v("Students")]),n("div",{staticClass:"edit-table-toggle form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editTable,expression:"editTable"}],staticClass:"form-check-input",attrs:{id:"edit-table",type:"checkbox"},domProps:{checked:Array.isArray(t.editTable)?t._i(t.editTable,null)>-1:t.editTable},on:{change:function(e){var n=t.editTable,r=e.target,s=!!r.checked;if(Array.isArray(n)){var a=null,u=t._i(n,a);r.checked?u<0&&(t.editTable=n.concat([a])):u>-1&&(t.editTable=n.slice(0,u).concat(n.slice(u+1)))}else t.editTable=s}}}),n("label",{staticClass:"form-check-label",attrs:{for:"edit-table"}},[t._v("Edit table?")])]),n("div",{attrs:{id:"student-table"}},[n("table",{staticClass:"table"},[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("StarID")]),n("th",[t._v("Present?")]),n("th",{directives:[{name:"show",rawName:"v-show",value:t.editTable,expression:"editTable"}]},[t._v("Delete")])]),t._l(t.students,function(e){return n("StudentRow",{key:e.name,attrs:{student:e,edit:t.editTable},on:{"student-present":t.studentArrivedOrLeft,"delete-student":t.studentDeleted}})})],2)])])])},v=[],p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"student-row",class:"present-"+t.student.present},[r("td",[t._v(t._s(t.student.name))]),r("td",[t._v(t._s(t.student.starID))]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.student.present,expression:"student.present"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.student.present)?t._i(t.student.present,null)>-1:t.student.present},on:{change:[function(e){var n=t.student.present,r=e.target,s=!!r.checked;if(Array.isArray(n)){var a=null,u=t._i(n,a);r.checked?u<0&&t.$set(t.student,"present",n.concat([a])):u>-1&&t.$set(t.student,"present",n.slice(0,u).concat(n.slice(u+1)))}else t.$set(t.student,"present",s)},function(e){return t.checked(t.student)}]}})]),r("td",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}]},[r("img",{staticClass:"delete-icon",attrs:{src:n("ed3a")},on:{click:function(e){return t.deleteStudent(t.student)}}})])])},m=[],h={name:"StudentRow.vue",props:{student:Object,edit:Boolean},methods:{checked:function(t){this.$emit("student-present",t)},deleteStudent:function(t){confirm("Delete ".concat(t.name,"?"))&&this.$emit("delete-student",t)}}},A=h,S=(n("b1f6"),Object(c["a"])(A,p,m,!1,null,"a433d898",null)),D=S.exports,b={name:"StudentTable",components:{StudentRow:D},data:function(){return{editTable:!1}},props:{students:Array},methods:{studentArrivedOrLeft:function(t){this.$emit("student-present",t)},studentDeleted:function(t){this.$emit("delete-student",t)}}},w=b,C=(n("b1d5"),Object(c["a"])(w,N,v,!1,null,null,null)),R=C.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("transition",{attrs:{name:"fade"}},[t.seeMessage?n("div",{staticClass:"alert alert-success"},[t._v(t._s(t.message)+" "+t._s(t.name))]):t._e()])],1)},P=[],E={name:"StudentMessage",data:function(){return{seeMessage:!1}},props:{message:String,name:String},watch:{message:function(){var t=this;this.seeMessage=!0,setTimeout(function(){t.seeMessage=!1},3e3)}}},O=E,V=(n("e517"),Object(c["a"])(O,g,P,!1,null,null,null)),y=V.exports,_={name:"app",data:function(){return{students:[],message:"",name:""}},components:{StudentTable:R,NewStudentForm:f,StudentMessage:y},mounted:function(){this.updateStudents()},methods:{newStudentAdded:function(t){var e=this;this.$student_api.addStudent(t).then(function(t){e.updateStudents()}).catch(function(t){var e=t.response.data.join(", ");alert("Error adding student.\n"+e)})},studentArrivedOrLeft:function(t){var e=this;this.$student_api.updateStudent(t).then(function(){e.message=t.present?"Welcome,":"Goodbye, ",e.name=t.name,e.updateStudents()})},studentDeleted:function(t){var e=this;this.$student_api.deleteStudent(t.id).then(function(){e.updateStudents()})},updateStudents:function(){var t=this;this.$student_api.getAllStudents().then(function(e){t.students=e})}}},x=_,M=(n("034f"),Object(c["a"])(x,s,a,!1,null,null,null)),I=M.exports,k=n("9f7b"),T=n.n(k),U=n("bc3a"),J=n.n(U),Z="/api/students",B={getAllStudents:function(){return J.a.get(Z).then(function(t){return t.data})},addStudent:function(t){return J.a.post(Z,t).then(function(t){return t.data})},updateStudent:function(t){return J.a.patch("".concat(Z,"/").concat(t.id),t).then(function(t){return t.data})},deleteStudent:function(t){return J.a.delete("".concat(Z,"/").concat(t)).then(function(t){return t.data})}};n("f9e3"),n("2dd8");r["default"].use(T.a),r["default"].prototype.$student_api=B,new r["default"]({render:function(t){return t(I)}}).$mount("#app")},"64a9":function(t,e,n){},"85a7":function(t,e,n){},a07e:function(t,e,n){"use strict";var r=n("3d71"),s=n.n(r);s.a},b1d5:function(t,e,n){"use strict";var r=n("197b"),s=n.n(r);s.a},b1f6:function(t,e,n){"use strict";var r=n("c30e"),s=n.n(r);s.a},c30e:function(t,e,n){},e517:function(t,e,n){"use strict";var r=n("85a7"),s=n.n(r);s.a},ed3a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAwCAMAAAC2edPQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxUExURQAAAP8AAP+AAP9VVf9AQP9VK/9JJP9JSd9AQOM5Of85OepAK+pAQP9AQOs7O/87O/9OO+1JN/9JN+5EM/A8PPBLLf9LPPFHK/FHOf9HOfZCOfZAN/Y+Ne5EM/dEM/dKMfFFN/hFMPhFN/NEOPlDN/NBNfNGNPRBNu9ANfRANfU+NPVENPVBN/BANvZDNvZCOfZFOPRDNPRCM/RDNfVCNPJENPVDM/ZENfZEOPNDNfRENPRDNvRENfNCNfNCNvNDNfVDNfVENvVDNvZCN/RCNvRENfRDN/NCNfNCNvNDNvRENvRENvNENvNCNvNCOPNENvVCNvNENfNCN/NDNvNDNvRDNvRDNvVDNfRDNvRDNvVDNvRCNvRENvNDN/RCN/RDNfRCNvRCNfRCNvRENvNEN/RCNfRCNvNDNfNDNvNCNfNDNvRENvVCNfVCNvRENfVENPNCNvNENfJDNPNCNvNCN/RCNfRDNfNCNfRCNfRCNvRENfRDNfVDN/VDNvRCNvVDNvRDNvVDNvJBN/RDNvJDN/RCNfM7LfQ/MfQ/MvRAMvRAM/RBM/RCNPRCNfRDNvRJPPVCN/VDNvVDN/VRRfVSRvVTSPVVSfVWSvVgVfZDNvZDN/ZENvZEN/ZcUvZeU/ZfVfZhVvZlWvZoXfdDN/dEN/dzavhEN/lEN/mak/pFN/tFN/tFOPuvqvuyrfu1sPu4s/u7t/zDv/zKx/zNyvzQzf1FOP3Y1f3f3f/+/f///v///+WSP50AAACGdFJOUwACAgMEBgcHCAkJDAwMDQ0NDg4PEREREhISGxwdHh4fJSUlKSorLC8wMDExMzQ5OjtFRkhJT1BSUm5wcnR8f4GBhIWHjo+RlpeYpaapqqqqqqytr7Cys7a3uLi5ubu9vb7AwMjMzMzNztzd3t/g4uLt7u/y8vT09fX19ff3+Pn5+vr7+/z8g3OfxgAAAAlwSFlzAAAOnAAADpwBB5RT3QAAAk1JREFUSEvdledb01AUhyMWta1Vq0KdVXGLinvvgbi3ouKsE/dWHLgDBS5EoECRjQYoexTIX2du80uaNIlt/cj7oT3POW/73HPvyQ0z4pi+Mf3645xvOY9upG9yIWeKZdWp19VE5terk2kWVAxZccXPwZXg/JeXo6Zn8q7vWpvCfdo5BfUI5mS1wdHSlumGoSHlLg8hEv5OChwV7pt/UNbDe2bBUph2thVFI1pPJ8MD47YNoGTMwJYxMCUWfdTvjBruwwKYIRzHzXqV4Q874FJSm5AmpMhX6UXorfQVISSkaSlcEetB5e/ZxsFgPSuF9cHBRikU4TOssBnG9UxefV5DUBD666jF1vULQrAhTyoQ7okyfAnrAkgWFrcIIn21LGFr+2jYUlyIWmDNKPiJe5XlFJS2U6u35kdNLw3aSwtQIfyeRPi2rGbkxB7LOqjX87uHfnWUyb0T0nzeBt9+vwo5EW95pygOD1G9szysk6psO/xJ79SH5fV1UVeky6fSCfd2InxnCVIS+RXdIb27Ih8ZiRLnf/rxrseeretXGBoWP7T93pP7tV2Mbz9jPK/d8nklrI1pHlbL88C4nsY1b4w1I4Z5PhCeZ2ZZ9OfFvwQuxXEk6vN4aDzcEAtzozzv7+fDlBi7Ncp9sll7nzDJZ/55X52YCk9htse8Bd4zA5aKebfMfsDfngtHgzvT+D4PnJsJIwLnjs/6XeK+bp+Aup7US5Hvo58XFqNmiCXt2PPw+676xdGVo1ExJWnD/msPX3558+DqvvVJyI0UGOYvauLGzhf1s9sAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.87986e91.js.map