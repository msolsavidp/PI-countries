(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){e.exports={backr:"CountryDetails_backr__20eQv",detailCard:"CountryDetails_detailCard__2vTSO",container:"CountryDetails_container__1b42Q",name:"CountryDetails_name__YPC63",flag:"CountryDetails_flag__3NBzk",continent:"CountryDetails_continent__3lmA-",detail:"CountryDetails_detail__1IULZ",actContainer:"CountryDetails_actContainer__1I4cE",activitiesTitle:"CountryDetails_activitiesTitle__2cKql",activityName:"CountryDetails_activityName__376V-",btnHome:"CountryDetails_btnHome__1z2Hs"}},29:function(e,t,n){e.exports={backgr:"CreateActivity_backgr__165Uo",button:"CreateActivity_button__or3dO",container:"CreateActivity_container__3ASzh",errors:"CreateActivity_errors__A1zkF"}},37:function(e,t,n){e.exports={backgr:"Home_backgr__yKM2y",titleh1:"Home_titleh1__-GWwh",button:"Home_button__ajdLF",select:"Home_select__3E-M8",pagination:"Home_pagination__19uF_",cardContainer:"Home_cardContainer__F7mA7"}},43:function(e,t,n){e.exports={card:"Card_card__3rGVg",countryName:"Card_countryName__2UX24",continent:"Card_continent__2gvnT",flag:"Card_flag__2THqb"}},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),i=n.n(r),o=(n(76),n(20)),s=n(13),l=(n(77),n(64)),u=(n(78),n(1));function j(){return Object(u.jsxs)("div",{className:"video-background",children:[Object(u.jsxs)("video",{autoPlay:!0,muted:!0,loop:!0,children:[Object(u.jsx)("source",{src:"https://res.cloudinary.com/db2uxwhbq/video/upload/v1678759942/tierra-1393_1_mb37my.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(u.jsxs)("div",{className:"overlay",children:[Object(u.jsx)("h1",{children:"Countries App"}),Object(u.jsx)(o.b,{to:"/home",children:Object(u.jsx)(l.a,{variant:"outline-light",children:"Go home"})})]})]})}var b=n(9),d=n(17),O=n(26),h=n(39),p=n(98),m="GET_COUNTRIES",v="FILTER_BY_CONTINENT",f="FILTER_BY_ACTIVITY",x="ORDER_BY_NAME",y="ORDER_BY_POPULATION",g="CREATE_ACTIVITY",_="GET_BY_NAME",C="GET_ACTIVITIES",N="GET_COUNTRY_DETAIL";function A(){return function(){var e=Object(h.a)(Object(O.a)().mark((function e(t){var n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3001/countries");case 2:return n=e.sent,e.abrupt("return",t({type:m,payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function S(){return function(){var e=Object(h.a)(Object(O.a)().mark((function e(t){var n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3001/activities");case 2:return n=e.sent,e.abrupt("return",t({type:C,payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var D=n(68),T=n(60),E=n(56),k=n(44);var P=function(e){var t=e.setCurrentPage,n=Object(d.b)(),c=Object(a.useState)(""),r=Object(b.a)(c,2),i=r[0],o=r[1],s=function(e){var a;e.preventDefault(),n((a=i,function(){var e=Object(h.a)(Object(O.a)().mark((function e(t){var n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("http://localhost:3001/countries?name=".concat(a));case 3:return n=e.sent,e.abrupt("return",t({type:_,payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),t(1)};return Object(u.jsx)(k.a,{bg:"dark",expand:"lg",variant:"dark",className:"fixed-top",children:Object(u.jsxs)(D.a,{fluid:!0,children:[Object(u.jsx)(k.a.Brand,{href:"/home",children:"Countries App"}),Object(u.jsx)(k.a.Toggle,{"aria-controls":"navbarScroll"}),Object(u.jsxs)(k.a.Collapse,{id:"navbarScroll",children:[Object(u.jsxs)(E.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(u.jsx)(E.a.Link,{href:"/home",children:"Home"}),Object(u.jsx)(E.a.Link,{href:"/about",children:"About"})]}),Object(u.jsxs)(T.a,{className:"d-flex",children:[Object(u.jsx)(T.a.Control,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",onChange:function(e){return function(e){e.preventDefault(),o(e.target.value),console.log(i)}(e)}}),Object(u.jsx)(l.a,{variant:"outline-light",type:"submit",onClick:function(e){s(e)},children:"Search"})]})]})]})})},I=n(43),w=n.n(I);function H(e){var t=e.id,n=e.name,a=e.image,c=e.continent;return console.log(t),Object(u.jsxs)("div",{className:w.a.card,children:[Object(u.jsx)("h3",{className:w.a.countryName,children:n}),Object(u.jsx)("h5",{className:w.a.continent,children:c}),Object(u.jsx)("img",{className:w.a.flag,src:a,alt:"country_image"})]})}var B=n(61);function Y(e){for(var t=e.countriesPerPage,n=e.allCountries,c=e.pagination,r=(e.currentPage,e.setCurrentPage,[]),i=Object(a.useState)([1,2,3,4,5]),o=Object(b.a)(i,2),s=(o[0],o[1],1);s<=Math.ceil(n/t);s++)r.push(s);Math.ceil(n/t);return Object(u.jsx)(B.a,{className:"d-flex justify-content-center mt-5",children:r&&r.map((function(e){return Object(u.jsx)(B.a.Item,{onClick:function(){return c(e)},children:e},e)}))})}var F=n(37),L=n.n(F);function R(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.countries})),n=Object(d.c)((function(e){return e.activities})),c=Object(a.useState)(""),r=Object(b.a)(c,2),i=(r[0],r[1]),s=Object(a.useState)(1),j=Object(b.a)(s,2),O=j[0],h=j[1],p=Object(a.useState)(9),m=Object(b.a)(p,2),g=m[0],_=(m[1],Object(a.useState)(10)),C=Object(b.a)(_,2),N=C[0],D=(C[1],1===O?O*g:O*N),T=1===O?D-g:D-N,E=t.slice(T,D);Object(a.useEffect)((function(){e(A()),e(S())}),[e]);var k=function(t){var n;t.preventDefault(),console.log(t.target.value),e((n=t.target.value,console.log(n),{type:v,continent:n})),h(1)},I=function(t){var n;e((n=t.target.value,console.log(n),{type:f,activity:n})),console.log(t.target.value),h(1)},w=function(t){t.preventDefault(),e(function(e){return{type:x,order:e}}(t.target.value)),h(1),i("Ordered ".concat(t.target.value))},B=function(t){t.preventDefault(),e(function(e){return{type:y,order:e}}(t.target.value)),h(1),i("Ordered ".concat(t.target.value))};return Object(u.jsxs)("div",{className:L.a.backgr,children:[Object(u.jsx)(P,{setCurrentPage:h}),Object(u.jsx)("div",{children:Object(u.jsx)(o.b,{to:"/activities",children:Object(u.jsx)(l.a,{variant:"outline-light",children:"Create Activity"})})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("select",{className:L.a.select,onChange:function(e){return k(e)},children:[Object(u.jsx)("option",{value:"All",children:" All continents "}),Object(u.jsx)("option",{value:"Africa",children:"Africa"}),Object(u.jsx)("option",{value:"Americas",children:"Americas"}),Object(u.jsx)("option",{value:"Antarctic",children:"Antarctic"}),Object(u.jsx)("option",{value:"Asia",children:"Asia"}),Object(u.jsx)("option",{value:"Europe",children:"Europe"}),Object(u.jsx)("option",{value:"Oceania",children:"Oceania"})]}),Object(u.jsxs)("select",{className:L.a.select,onChange:function(e){return w(e)},children:[Object(u.jsx)("option",{value:"country_asc",children:"Pa\xeds en orden alfab\xe9tico (Asc)"}),Object(u.jsx)("option",{value:"country_desc",children:"Pa\xeds en orden alfab\xe9tico (Desc)"})]}),Object(u.jsxs)("select",{className:L.a.select,onChange:function(e){I(e)},children:[Object(u.jsx)("option",{value:"All",children:"All activities"}),n.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name.charAt(0).toUpperCase()+e.name.slice(1)})}))]}),Object(u.jsxs)("select",{className:L.a.select,onChange:function(e){B(e)},children:[Object(u.jsx)("option",{value:"population_asc",children:"Pa\xeds por poblaci\xf3n (Asc)"}),Object(u.jsx)("option",{value:"population_desc",children:"Pa\xeds por poblaci\xf3n (Desc)"})]}),Object(u.jsx)("div",{className:L.a.cardContainer,children:null===E||void 0===E?void 0:E.map((function(e){return Object(u.jsx)("fragment",{children:Object(u.jsx)(o.b,{to:"/countries/".concat(e.id),children:Object(u.jsx)(H,{name:e.name,image:e.image,continent:e.continent,id:e.id})})})}))})]}),Object(u.jsx)("div",{children:Object(u.jsx)(Y,{countriesPerPage:N,allCountries:t.length,pagination:function(e){h(e)}})})]})}function M(){return Object(u.jsx)("h1",{children:"About"})}var U=n(54),G=n(10),V=n(2),q=n(29),z=n.n(q);function W(e){var t={};return e.name?e.difficulty?e.duration?e.season?e.country&&0!==e.country.length||(t.country="You need to choose a country."):t.season="You need to choose a season for the activity.":t.duration="The activity requires a duration":t.difficulty="You need to choose a difficulty":t.name="The activity requires a name.",t}function X(){var e=Object(d.b)(),t=(Object(s.e)(),Object(d.c)((function(e){return e.countries})).sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}))),n=Object(a.useState)({}),c=Object(b.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)({name:"",difficulty:"",duration:"",season:"",country:[]}),j=Object(b.a)(l,2),m=j[0],v=j[1];Object(a.useEffect)((function(){e(A()),e(S())}),[e]);var f=function(e){i(W(Object(V.a)(Object(V.a)({},m),{},Object(G.a)({},e.target.name,e.target.value)))),v(Object(V.a)(Object(V.a)({},m),{},Object(G.a)({},e.target.name,e.target.value))),console.log(m)},x=function(e){"difficulty"===e.target.name?(v(Object(V.a)(Object(V.a)({},m),{},{difficulty:e.target.value})),i(W(Object(V.a)(Object(V.a)({},m),{},{difficulty:e.target.value})))):(v(Object(V.a)(Object(V.a)({},m),{},{country:[].concat(Object(U.a)(m.country),[e.target.value])})),i(W(Object(V.a)(Object(V.a)({},m),{},{country:e.target.value}))))},y=function(t){if(t.preventDefault(),console.log(m),""===m.name||""===m.difficulty||""===m.duration||""===m.season||0===m.country.length)return alert("You need to complet all the fields.");var n;e((n=m,function(){var e=Object(h.a)(Object(O.a)().mark((function e(t){var a;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("http://localhost:3001/activities",n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("Activity created!"),v({name:"",difficulty:"",duration:"",season:"",country:[]})};return Object(u.jsx)("div",{className:z.a.backgr,children:Object(u.jsxs)("div",{className:z.a.container,children:[Object(u.jsx)("h1",{children:"Create an activity"}),Object(u.jsxs)("form",{onSubmit:function(e){return y(e)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Touristic activity: "}),Object(u.jsx)("input",{type:"text",placeholder:"Activity...",value:m.name,name:"name",onChange:function(e){return f(e)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Difficulty: "}),Object(u.jsxs)("select",{name:"difficulty",value:m.difficulty,onChange:function(e){return x(e)},children:[Object(u.jsx)("option",{value:"1",children:"Super easy"}),Object(u.jsx)("option",{value:"2",children:"Easy"}),Object(u.jsx)("option",{value:"3",children:"Medium"}),Object(u.jsx)("option",{value:"4",children:"Hard"}),Object(u.jsx)("option",{value:"5",children:"Super hard"})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Duration: "}),Object(u.jsx)("input",{type:"number",placeholder:"Number",value:m.duration,name:"duration",onChange:function(e){return f(e)},min:"1",max:"24"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Season: "}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",id:"Spring",value:"Spring",name:"season",onChange:function(e){return f(e)}}),"Spring"]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",value:"Summer",id:"Summer",name:"season",onChange:function(e){return f(e)}}),"Summer"]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",value:"Fall",name:"season",id:"Fall",onChange:function(e){return f(e)}}),"Fall"]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",value:"Winter",name:"season",id:"Winter",onChange:function(e){return f(e)}}),"Winter"]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Country: "}),Object(u.jsx)("select",{name:"country",onChange:function(e){return x(e)},children:t.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name})}))}),m.country.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:e}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault()},children:"X"},"delete")]})}))]}),Object(u.jsx)("input",{className:z.a.button,type:"submit",name:"submit"},"submit"),r.name&&Object(u.jsx)("p",{className:z.a.errors,children:r.name}),r.difficulty&&Object(u.jsx)("p",{className:z.a.errors,children:r.difficulty}),r.duration&&Object(u.jsx)("p",{className:z.a.errors,children:r.duration}),r.country&&Object(u.jsx)("p",{className:z.a.errors,children:r.country}),r.season&&Object(u.jsx)("p",{className:z.a.errors,children:r.season})]}),Object(u.jsx)(o.b,{to:"/home",children:Object(u.jsx)("button",{className:z.a.button,children:"Return Home"})})]})})}var J=n(14),K=n.n(J);function Q(e){var t,n=e.id;console.log(n);var c=Object(d.b)();Object(a.useEffect)((function(){c(function(e){return function(){var t=Object(h.a)(Object(O.a)().mark((function t(n){var a;return Object(O.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("http://localhost:3001/countries/".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:N,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(n)),c(S())}),[c]);var r=Object(d.c)((function(e){return e.countryDetail})),i=Object(d.c)((function(e){return e.activities}));return console.log(r),console.log(i),console.log(r.activities),Object(u.jsxs)("div",{className:K.a.backr,children:[Object(u.jsx)("div",{className:K.a.detailCard,children:Object(u.jsx)("div",{className:K.a.container,children:r?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:K.a.name,children:r.name}),Object(u.jsx)("img",{className:K.a.flag,src:r.image,alt:r.name}),Object(u.jsxs)("h3",{className:K.a.continent,children:["Continent: ",r.continent]}),Object(u.jsxs)("h3",{className:K.a.detail,children:["Capital: ",r.capital]}),Object(u.jsxs)("h5",{className:K.a.detail,children:["Subregion: ",r.subregion]}),Object(u.jsxs)("h5",{className:K.a.detail,children:["Population: ",r.population," inhabitants"]}),Object(u.jsxs)("h5",{className:K.a.detail,children:["Area: ",r.area," km2"]}),Object(u.jsxs)("h5",{className:K.a.detail,children:["Code: ",r.id]}),Object(u.jsxs)("h6",{className:K.a.activitiesTitle,children:["Activities ",null===(t=r.activities)||void 0===t?void 0:t.map((function(e){return Object(u.jsxs)("div",{className:K.a.actContainer,children:[Object(u.jsxs)("p",{className:K.a.activityName,children:["Activity: ",e.name]}),Object(u.jsxs)("p",{className:K.a.detail,children:["Diffitulty: ",e.difficulty," (1 easy - 5 super hard)"]}),Object(u.jsxs)("p",{className:K.a.detail,children:["Duration: ",e.duration," hours"]}),Object(u.jsxs)("p",{className:K.a.detail,children:["Season: ",e.season]})]})}))]})]}):Object(u.jsx)("p",{children:"Loading..."})})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(o.b,{to:"/activities",children:Object(u.jsx)("button",{className:K.a.btnHome,children:"Create touristic activity"})})}),Object(u.jsx)(o.b,{to:"/home",children:Object(u.jsx)("button",{className:K.a.btnHome,children:"Back Home"})})]})]})}var Z=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(s.a,{exact:!0,path:"/",component:j}),Object(u.jsx)(s.a,{path:"/home",component:R}),Object(u.jsx)(s.a,{path:"/about",component:M}),Object(u.jsx)(s.a,{path:"/activities",component:X}),Object(u.jsx)(s.a,{path:"/countries/:id",render:function(e){var t=e.match;return Object(u.jsx)(Q,{id:t.params.id})}})]})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},ee=n(42),te=n(69),ne={countries:[],countryDetail:[],allCountries:[],countriesByContinent:[],activities:[]};var ae=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||ee.b,ce=Object(ee.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(V.a)(Object(V.a)({},e),{},{countries:t.payload,allCountries:t.payload,countriesByContinent:t.payload});case N:return Object(V.a)(Object(V.a)({},e),{},{countryDetail:t.payload});case _:return Object(V.a)(Object(V.a)({},e),{},{countries:t.payload});case C:return Object(V.a)(Object(V.a)({},e),{},{activities:t.payload});case g:return Object(V.a)({},e);case v:var n=e.allCountries,a="All"===t.continent?n:n.filter((function(e){return e.continent===t.continent}));return Object(V.a)(Object(V.a)({},e),{},{countriesByContinent:a,countries:a});case f:var c=e.countriesByContinent,r="All"===t.activity?c:c.filter((function(e){return e.activities.some((function(e){return e.name===t.activity}))}));return Object(V.a)(Object(V.a)({},e),{},{countries:r});case x:var i="country_asc"===t.order?e.countries.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):e.countries.sort((function(e,t){return e.name>t.name?-1:t.name>e.name?1:0}));return Object(V.a)(Object(V.a)({},e),{},{countries:i});case y:var o="population_asc"===t.order?e.countries.sort((function(e,t){return e.population>t.population?1:t.population>e.population?-1:0})):e.countries.sort((function(e,t){return e.population>t.population?-1:t.population>e.population?1:0}));return Object(V.a)(Object(V.a)({},e),{},{countries:o});default:return Object(V.a)({},e)}}),ae(Object(ee.a)(te.a))),re=ce;i.a.render(Object(u.jsx)(d.a,{store:re,children:Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(Z,{})})}),document.getElementById("root")),$()}},[[94,1,2]]]);
//# sourceMappingURL=main.47b50da6.chunk.js.map