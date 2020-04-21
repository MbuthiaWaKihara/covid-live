(this["webpackJsonpcovid-live"]=this["webpackJsonpcovid-live"]||[]).push([[0],{143:function(e,t,a){e.exports=a.p+"static/media/world.263dad67.gif"},152:function(e,t,a){e.exports=a(330)},330:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(157),a(23)),i=a(341),u=a(339),s=a(338),d=a(143),m=a.n(d),h=r.a.memo((function(){var e=r.a.useContext(V);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement("div",{style:{height:"100%",width:e?"50%":"35%",margin:"auto",display:"flex",flexDirection:"row"}},r.a.createElement("img",{src:m.a,alt:"world",style:{marginRight:"10px",height:e?"50%":"60%",marginTop:e?"8%":null}}),r.a.createElement("h1",{style:{color:"#690000",fontWeight:"bolder",fontSize:e?"1.3em":null,marginTop:e?"3%":null}},"COVID LIVE"))))})),E=a(333),f=a(336),y=a(342),g=a(21),p=a(19),v=a.n(p),S=a(57),w={width:"50%",height:"33.33%"},C=r.a.memo((function(e){var t=e.caption,a=e.figure,c=r.a.useContext(V),o=Object(S.useCountUp)({end:a,duration:10,startOnMount:!0}),l=o.countUp,i=(o.start,o.pauseResume,o.reset,o.update);return Object(n.useEffect)((function(){i(a)}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:w},r.a.createElement("h3",{style:{textAlign:"center",fontWeight:"bolder",fontSize:c?".9em":null}},t," : ",l)))})),D=a(337),T={width:"100%",height:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap"},O=Object(g.b)((function(e){return{worldState:e.world}}),(function(e){return{fetchWorlddata:function(){return e((function(e){e({type:"FETCH_WORLDDATA_REQUEST"}),v.a.get("https://corona.lmao.ninja/v2/all").then((function(t){e({type:"FETCH_WORLDDATA_SUCCESS",payload:t.data})})).catch((function(t){e(function(e){return{type:"FETCH_WORLDDATA_ERROR",payload:e}}(t))})).finally()}))}}}))(r.a.memo((function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){e.fetchWorlddata()}),[]),Object(n.useEffect)((function(){return t.current||(t.current=setInterval((function(){e.fetchWorlddata()}),12e4)),function(){t.current&&clearInterval(t.current)}}),[e.worldState]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:T},e.worldState.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement(D.a,{backdrop:!0,size:"lg",center:!0}))):""!==e.worldState.error?e.worldState.error:r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{caption:"Total Cases",figure:e.worldState.worldData.cases}),r.a.createElement(C,{caption:"Cases Today",figure:e.worldState.worldData.todayCases}),r.a.createElement(C,{caption:"Total Deaths",figure:e.worldState.worldData.deaths}),r.a.createElement(C,{caption:"Deaths Today",figure:e.worldState.worldData.todayDeaths}),r.a.createElement(C,{caption:"Active",figure:e.worldState.worldData.active}),r.a.createElement(C,{figure:e.worldState.worldData.recovered,caption:"Recovered"}))))}))),b=a(343),R=a(335),F=a(35),_=r.a.memo((function(e){var t=r.a.useContext(V),a={width:t?"25%":"20%",heigth:t?"25%":"20%"},n=null;e.countriesState.countriesData.length>0&&(n=e.countriesState.countriesData.map((function(e){return e.countryInfo.flag})));var c=null;return n&&n.length>0&&(c=n.map((function(t,n){return r.a.createElement(r.a.Fragment,{key:n},r.a.createElement(R.a,{placement:"top",trigger:"hover",speaker:(c=e.countriesState.countriesData[n].country,r.a.createElement(b.a,null,c))},r.a.createElement("div",{style:a},r.a.createElement(F.b,{to:"/covid-live/".concat(e.countriesState.countriesData[n].country)},r.a.createElement("img",{src:t,alt:"".concat(e.countriesState.countriesData[n].country,"'s flag"),style:{width:"90%",height:"90%",margin:"auto"}})))));var c}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",overflow:"auto"}},e.countriesState.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement(D.a,{backdrop:!0,size:"lg",center:!0}))):""!==e.countriesState.error?e.countriesState.error:c))})),x=a(151),j=r.a.memo((function(e){var t=e.countriesState,a=e.currentCountry,n=e.setCurrentCountry,c=e.searchText,o=e.setSearchText,l=e.setShowSearch,i=r.a.useContext(V),u={fontSize:i?"1.5em":null};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement("div",{style:{width:"100%",height:"10%"}},i?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"10%",height:"100%",margin:"auto"},onClick:function(){return l(!1)}},r.a.createElement(y.a,{icon:"close",size:"2x"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{inside:!0,style:{width:"100%",marginBottom:10}},r.a.createElement(f.a,{placeholder:"Search by country name eg Kenya",value:c,onChange:function(e){return a=e,n(null),o(a),void t.countriesData.forEach((function(e,t){e.country===a&&n(e)}));var a}}),r.a.createElement(E.a.Button,null,r.a.createElement(y.a,{icon:"search"}))))),r.a.createElement("div",{style:{width:"100%",height:"90%"}},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:a.countryInfo.flag,style:{width:"100%",height:"40%",marginBottom:"3px"},alt:"".concat(a.country,"'s flag")}),r.a.createElement("h3",null,a.country),r.a.createElement("h3",{style:u},"Total Cases: ",a.cases),r.a.createElement("h3",{style:u},"Cases Today: ",a.todayCases),r.a.createElement("h3",{style:u},"Total Deaths: ",a.deaths),r.a.createElement("h3",{style:u},"Deaths Today: ",a.todayDeaths),r.a.createElement("h3",{style:u},"Active: ",a.active),r.a.createElement("h3",{style:u},"Recovered: ",a.recovered)):r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{appearance:"subtle",style:{width:"100%"},onClick:function(){v.a.get("https://ipapi.co/json/").then((function(e){var a=e.data.country_name,r=e.data.country_code,c=e.data.country_code_iso3;t.countriesData.forEach((function(e,t){e.country!==a&&e.countryInfo.iso2!==r&&e.countryInfo.iso3!==c||(n(e),o("".concat(e.country)))}))})).catch((function(e){console.log(e)})).finally()}},"Show This Country"),r.a.createElement("h2",{style:u},"No results found"),r.a.createElement("p",null,"Ensure you capitalize first letter eg Uganda"),r.a.createElement("p",null,"Avoid dots in abbreviations eg USA")))))})),U=Object(g.b)((function(e){return{countriesState:e.countries}}),(function(e){return{fetchCountries:function(){return e((function(e){e({type:"FETCH_COUNTRIES_REQUEST"}),v.a.get("https://corona.lmao.ninja/v2/countries?sort=country").then((function(t){e({type:"FETCH_COUNTRIES_SUCCESS",payload:t.data})})).catch((function(t){e(function(e){return{type:"FETCH_COUNTRIES_ERROR",payload:e}}(t))})).finally()}))}}}))(r.a.memo((function(e){var t=r.a.useRef(),a=r.a.useState(!1),n=Object(l.a)(a,2),c=n[0],o=n[1];r.a.useEffect((function(){e.fetchCountries()}),[]),r.a.useEffect((function(){return t.current||(t.current=setInterval((function(){e.fetchCountries()}),12e4)),function(){t.current&&clearInterval(t.current)}}),[e.countriesState]);var i=r.a.useState(null),u=Object(l.a)(i,2),s=u[0],d=u[1],m=r.a.useState(""),h=Object(l.a)(m,2),g=h[0],p=h[1],v=r.a.useContext(V),S={width:"100%",height:"100%",display:v?"block":"flex",flexDirection:v?null:"row"},w={height:v?"67%":"70%",width:"100%",marginTop:v?15:null},C={height:v?"20%":"30%",width:"100%"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:S},v?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100%",height:"8%"}},r.a.createElement(E.a,{inside:!0,style:{width:"100%"}},r.a.createElement(f.a,{placeholder:"Search by country name eg Kenya",value:g,onChange:function(t){return a=t,d(null),p(a),void e.countriesState.countriesData.forEach((function(e,t){e.country===a&&d(e)}));var a},onFocus:function(){return o(!0)}}),r.a.createElement(E.a.Button,null,r.a.createElement(y.a,{icon:"search"})))),c?r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{countriesState:e.countriesState,currentCountry:s,setCurrentCountry:d,searchText:g,setSearchText:p,setShowSearch:o})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:C},r.a.createElement(O,null)),r.a.createElement("div",{style:w},r.a.createElement(_,{countriesState:e.countriesState})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"100%",width:"70%"}},r.a.createElement("div",{style:C},r.a.createElement(O,null)),r.a.createElement("div",{style:w},r.a.createElement(_,{countriesState:e.countriesState}))),r.a.createElement("div",{style:{height:"100%",width:"30%"}},r.a.createElement(j,{countriesState:e.countriesState,currentCountry:s,setCurrentCountry:d,searchText:g,setSearchText:p,setShowSearch:o})))))}))),L=r.a.memo((function(e){var t=e.caption,a=e.figure,c=r.a.useContext(V),o=Object(S.useCountUp)({end:a,duration:5,startOnMount:!0}),l=o.countUp,i=(o.start,o.pauseResume,o.reset,o.update);Object(n.useEffect)((function(){i(a)}),[a]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"33.33%",height:"33.33%",overflow:"auto"}},r.a.createElement("h3",{style:{fontWeight:"bolder",fontSize:c?"1em":null}},t," : ",c&&r.a.createElement("br",null)," ",l)))})),I=Object(g.b)((function(e){return{countryState:e.country}}),(function(e,t){return{fetchCountry:function(){return e((a=t.match.params.country,function(e){e({type:"FETCH_COUNTRY_REQUEST"}),v.a.get("https://corona.lmao.ninja/v2/countries/".concat(a)).then((function(t){e({type:"FETCH_COUNTRY_SUCCESS",payload:t.data})})).catch((function(t){e(function(e){return{type:"FETCH_COUNTRY_ERROR",payload:e}}(t))})).finally()}));var a}}}))(r.a.memo((function(e){e.match;var t=e.countryState,a=e.fetchCountry,c=r.a.useContext(V),o=Object(n.useRef)();Object(n.useEffect)((function(){a()}),[]),Object(n.useEffect)((function(){return o.current||(o.current=setInterval((function(){a()}),12e4)),function(){o.current&&clearInterval(o.current)}}),[t]);var l={textAlign:"center",width:"100%",height:"25%",fontSize:c?"1em":null};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100%",height:"100%"}},t.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement(D.a,{backdrop:!0,size:"lg",center:!0}))):""!==t.error?t.error:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"40%"}},t.countryData.country&&r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:t.countryData.countryInfo.flag,alt:"".concat(t.countryData.country,"'s flag"),style:{width:c?"60%":"30%",height:"100%"}}),r.a.createElement("div",{style:{width:c?"40%":"70%",height:"100%"}},r.a.createElement("h3",{style:l},t.countryData.country),r.a.createElement("h3",{style:l},"ISO 3: ",t.countryData.countryInfo.iso3),r.a.createElement("h3",{style:l},"Latitude: ",t.countryData.countryInfo.lat),r.a.createElement("h3",{style:l},"Longitude: ",t.countryData.countryInfo.long)))),r.a.createElement("hr",null),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"100%",height:"50%",marginTop:"10px"}},r.a.createElement(L,{caption:"Total Cases",figure:t.countryData.cases}),r.a.createElement(L,{caption:"Cases Today",figure:t.countryData.todayCases}),r.a.createElement(L,{caption:"Total Deaths",figure:t.countryData.deaths}),r.a.createElement(L,{caption:"Deaths Today",figure:t.countryData.todayDeaths}),r.a.createElement(L,{caption:"Active",figure:t.countryData.active}),r.a.createElement(L,{caption:"Recovered",figure:t.countryData.recovered}),r.a.createElement(L,{caption:c?"CPM":"Cases Per One Million",figure:t.countryData.casesPerOneMillion}),r.a.createElement(L,{caption:c?"DPM":"Deaths Per One Million",figure:t.countryData.deathsPerOneMillion}),r.a.createElement(L,{caption:"Total Tests",figure:t.countryData.tests}))),r.a.createElement(F.b,{to:"/covid-live",style:{position:"absolute",bottom:0,width:"100%"}},r.a.createElement(x.a,{style:{width:"100%",borderRadius:0},appearance:"primary"},"Go Back Home"))))}))),H=a(25),A=a(10),W={isLoading:!1,worldData:{},error:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WORLDDATA_REQUEST":return Object(A.a)({},e,{isLoading:!0});case"FETCH_WORLDDATA_SUCCESS":return Object(A.a)({},e,{isLoading:!1,worldData:t.payload,error:""});case"FETCH_WORLDDATA_ERROR":return Object(A.a)({},e,{isLoading:!1,worldData:{},error:t.payload});default:return e}},z={isLoading:!1,countriesData:[],error:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COUNTRIES_REQUEST":return Object(A.a)({},e,{isLoading:!0});case"FETCH_COUNTRIES_SUCCESS":return Object(A.a)({},e,{isLoading:!1,countriesData:t.payload,error:""});case"FETCH_COUNTRIES_ERROR":return Object(A.a)({},e,{isLoading:!1,countriesData:[],error:t.payload});default:return e}},M={isLoading:!1,countryData:{},error:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COUNTRY_REQUEST":return Object(A.a)({},e,{isLoading:!0});case"FETCH_COUNTRY_SUCCESS":return Object(A.a)({},e,{isLoading:!1,countryData:t.payload,error:""});case"FETCH_COUNTRY_ERROR":return Object(A.a)({},e,{isLoading:!1,countryData:{},error:t.payload});default:return e}},Q=Object(H.c)({world:N,countries:k,country:P}),Y=a(329).default,B=Object(H.d)(Q,Object(H.a)(Y)),J=a(22),K=function(e,t){return!(e>910&&t>700)},V=r.a.createContext(),q=r.a.memo((function(){var e=r.a.useState(window.innerWidth-20),t=Object(l.a)(e,2),a=t[0],n=t[1],c=r.a.useState(window.innerHeight-20),o=Object(l.a)(c,2),d=o[0],m=o[1],E=r.a.useState((function(){return K(a,d)})),f=Object(l.a)(E,2),y=f[0],p=f[1],v=function(){n(window.innerWidth-20),m(window.innerHeight-20)};r.a.useEffect((function(){return window.addEventListener("resize",v),function(){window.removeEventListener("resize",v)}}),[]),r.a.useEffect((function(){p(K(a,d))}),[a,d]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.Provider,{value:y},r.a.createElement(F.a,null,r.a.createElement(g.a,{store:B},r.a.createElement(i.a,{style:{height:"100%"}},r.a.createElement(u.a,{style:{height:"15%"}},r.a.createElement(h,null)),r.a.createElement(s.a,{style:{height:"75%"}},r.a.createElement(J.c,null,r.a.createElement(J.a,{path:"/covid-live",exact:!0,render:function(e){return r.a.createElement(U,e)}}),r.a.createElement(J.a,{path:"/covid-live/:country",exact:!0,render:function(e){return r.a.createElement(I,e)}}))))))))})),G=document.querySelector("#root");o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null)),G)}},[[152,1,2]]]);
//# sourceMappingURL=main.5b5652c7.chunk.js.map