import{S as a,i as e,s as l,e as o,t,k as s,c as n,a as i,g as r,d as u,n as c,b as d,f as m,H as h,h as v,l as f,I,U as p}from"./vendor-ce374a0d.js";function g(a,e,l){const o=a.slice();return o[1]=e[l],o}function D(a){let e,l,s=a[1].date+"";return{c(){e=o("div"),l=t(s),this.h()},l(a){e=n(a,"DIV",{class:!0});var o=i(e);l=r(o,s),o.forEach(u),this.h()},h(){d(e,"class","indice-elem-data")},m(a,o){m(a,e,o),h(e,l)},p(a,e){1&e&&s!==(s=a[1].date+"")&&v(l,s)},d(a){a&&u(e)}}}function V(a){let e,l,f,I,p,g,V,E,L=a[1].name+"",S="noDate"!==a[1].date&&D(a);return{c(){e=o("div"),l=o("div"),f=o("a"),I=t("- "),p=t(L),V=s(),S&&S.c(),E=s(),this.h()},l(a){e=n(a,"DIV",{class:!0});var o=i(e);l=n(o,"DIV",{});var t=i(l);f=n(t,"A",{href:!0});var s=i(f);I=r(s,"- "),p=r(s,L),s.forEach(u),t.forEach(u),V=c(o),S&&S.l(o),E=c(o),o.forEach(u),this.h()},h(){d(f,"href",g=a[1].url),d(e,"class","indice-elem inline")},m(a,o){m(a,e,o),h(e,l),h(l,f),h(f,I),h(f,p),h(e,V),S&&S.m(e,null),h(e,E)},p(a,l){1&l&&L!==(L=a[1].name+"")&&v(p,L),1&l&&g!==(g=a[1].url)&&d(f,"href",g),"noDate"!==a[1].date?S?S.p(a,l):(S=D(a),S.c(),S.m(e,E)):S&&(S.d(1),S=null)},d(a){a&&u(e),S&&S.d()}}}function E(a){let e,l=a[0],o=[];for(let t=0;t<l.length;t+=1)o[t]=V(g(a,l,t));return{c(){for(let a=0;a<o.length;a+=1)o[a].c();e=f()},l(a){for(let e=0;e<o.length;e+=1)o[e].l(a);e=f()},m(a,l){for(let e=0;e<o.length;e+=1)o[e].m(a,l);m(a,e,l)},p(a,[t]){if(1&t){let s;for(l=a[0],s=0;s<l.length;s+=1){const n=g(a,l,s);o[s]?o[s].p(n,t):(o[s]=V(n),o[s].c(),o[s].m(e.parentNode,e))}for(;s<o.length;s+=1)o[s].d(1);o.length=l.length}},i:I,o:I,d(a){p(o,a),a&&u(e)}}}function L(a,e,l){let{json:o=[{name:"",date:"",url:"",slaves:""}]}=e;return console.log(o[0].url),a.$$set=a=>{"json"in a&&l(0,o=a.json)},[o]}class S extends a{constructor(a){super(),e(this,a,L,E,l,{json:0})}}const j=[{name:"Storia",date:"noDate",url:"scuola/Storia",slaves:[{name:"Il novecento",date:"20/10/2021",url:"/scuola/Storia/Il-Novecento"},{name:"L'età di Giolitti",date:"20/10/2021",url:"/scuola/Storia/L-età-di-Giolitti"},{name:"Venti di guerra",date:"27/10/2021",url:"/scuola/Storia/Venti-di-guerra"}]},{name:"Italiano",url:"scuola/Italiano",date:"noDate",slaves:[{name:"Età del realismo e del positivismo",date:"23/10/2021",url:"/scuola/Italiano/Età-del-realismo-e-del-positivismo"},{name:"La visone dell'uomo nel positivismo",date:"23/10/2021",url:"/scuola/Italiano/La-visione-dell-uomo-nel-positivismo"},{name:"Il naturalismo",date:"23/10/2021",url:"/scuola/Italiano/Il-naturalismo"},{name:"Il verismo",date:"23/10/2021",url:"/scuola/Italiano/Il-verismo"},{name:"L'evoluzione del romanzo",date:"23/10/2021",url:"/scuola/Italiano/L-evoluzione-del-romanzo"},{name:"I promessi sposi",date:"24/10/2021",url:"/scuola/Italiano/I-promessi-sposi"},{name:"Giovanni Verga",date:"26/10/2021",url:"/scuola/Italiano/Giovanni-Verga"}]}];export{S as R,j as p};
