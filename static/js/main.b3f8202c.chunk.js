(this.webpackJsonpmui_react=this.webpackJsonpmui_react||[]).push([[0],{35:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),i=a.n(c),s=a(29),l=a(24),o=a(25),u=a(31),m=a(26),d=a(32),p=a(60),h=a(62),g=a(18),E=function(){return n.a.createElement(p.a,{position:"static"},n.a.createElement(h.a,null,n.a.createElement(g.a,{variant:"h5",component:"h6",color:"inherit"},"Excercises Database")))},f=a(44),x=a(67),y=a(63),v=function(e){var t=e.muscles,a=e.category,r=e.onSelect,c=a?t.findIndex((function(e){return e===a}))+1:0;console.log(c);return n.a.createElement(f.a,{square:!0},n.a.createElement(x.a,{value:c,onChange:function(e,a){r(0===a?"":t[a-1]),console.log(a),console.log(e)},indicatorColor:"primary",textColor:"primary",centered:!0},n.a.createElement(y.a,{label:"All"}),t.map((function(e){return n.a.createElement(y.a,{key:e,label:e})}))))},b=a(30),k=a(64),w=a(65),S=a(68),B=a(66),C={paper:{padding:20,marginTop:10,marginBottom:10,height:500,overflow:"auto"}},O=function(e){var t=e.exercises,a=e.category,c=e.onSelect,i=e.excercise,s=(i.id,i.title),l=void 0===s?"Welcome":s,o=i.description,u=void 0===o?"Select which muscle you wanna build.":o;return n.a.createElement(k.a,{container:!0,spacing:2},n.a.createElement(k.a,{item:!0,xs:!0},n.a.createElement(f.a,{style:C.paper,square:!0},t.map((function(e){var t=Object(b.a)(e,2),i=t[0],s=t[1];return a&&a!==i?null:n.a.createElement(r.Fragment,{key:i},n.a.createElement(g.a,{variant:"h5",component:"h5",style:{textTransform:"capitalize"}},i),n.a.createElement(w.a,{component:"ul"},s.map((function(e){var t=e.title,a=e.id;return n.a.createElement(S.a,{key:a,button:!0,onClick:function(){return c(a)}},n.a.createElement(B.a,{primary:t}))}))))})))),n.a.createElement(k.a,{item:!0,xs:!0},n.a.createElement(f.a,{style:C.paper,square:!0},n.a.createElement(g.a,{variant:"h4"},l),n.a.createElement(g.a,{variant:"h6",style:{marginTop:20}},u))))},j=["shoulders","chest","arms","back","legs"],q=[{id:"overhead-press",title:"Overhead Press",description:"Delts exercise...",muscles:"shoulders"},{id:"dips",title:"Dips",description:"Triceps exercise...",muscles:"arms"},{id:"barbell-curls",title:"Barbell Curls",description:"Biceps exercise...",muscles:"arms"},{id:"bench-press",title:"Bench Press",description:"Chest exercise...",muscles:"chest"},{id:"pull-ups",title:"Pull Ups",description:"Back and biceps exercise...",muscles:"back"},{id:"deadlifts",title:"Deadlifts",description:"Back and leg exercise...",muscles:"back"},{id:"squats",title:"Squats",description:"Legs exercise...",muscles:"legs"}],D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={exercises:q,category:"",excercise:{}},a.getExcerciseByMuscles=function(){return a.state.exercises.reduce((function(e,t){var a=t.muscles;return e[a]=e[a]?[].concat(Object(s.a)(e[a]),[t]):[t],e}),{})},a.handleSelectedCatg=function(e){a.setState({category:e})},a.handleSelectedExcercise=function(e){a.setState((function(t){return{excercise:t.exercises.find((function(t){return t.id===e}))}}))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=Object.entries(this.getExcerciseByMuscles()),t=this.state,a=t.category,c=t.excercise;return n.a.createElement(r.Fragment,null,n.a.createElement(E,null),n.a.createElement(O,{exercises:e,excercise:c,category:a,onSelect:this.handleSelectedExcercise}),n.a.createElement(v,{muscles:j,onSelect:this.handleSelectedCatg,category:a}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.b3f8202c.chunk.js.map