import{S as a,i as e,s as o,e as l,t as i,k as t,c as n,a as r,g as s,d as u,n as d,b as c,f as m,H as v,h as I,l as h,I as g,U as S}from"./vendor-ce374a0d.js";function f(a,e,o){const l=a.slice();return l[1]=e[o],l}function p(a){let e,o,t=a[1].date+"";return{c(){e=l("div"),o=i(t),this.h()},l(a){e=n(a,"DIV",{class:!0});var l=r(e);o=s(l,t),l.forEach(u),this.h()},h(){c(e,"class","indice-elem-data")},m(a,l){m(a,e,l),v(e,o)},p(a,e){1&e&&t!==(t=a[1].date+"")&&I(o,t)},d(a){a&&u(e)}}}function z(a){let e,o,h,g,S,f,z,G=a[1].name+"",L="noDate"!==a[1].date&&p(a);return{c(){e=l("div"),o=l("a"),h=i("- "),g=i(G),f=t(),L&&L.c(),z=t(),this.h()},l(a){e=n(a,"DIV",{class:!0});var l=r(e);o=n(l,"A",{href:!0});var i=r(o);h=s(i,"- "),g=s(i,G),i.forEach(u),f=d(l),L&&L.l(l),z=d(l),l.forEach(u),this.h()},h(){c(o,"href",S=a[1].url),c(e,"class","indice-elem inline")},m(a,l){m(a,e,l),v(e,o),v(o,h),v(o,g),v(e,f),L&&L.m(e,null),v(e,z)},p(a,l){1&l&&G!==(G=a[1].name+"")&&I(g,G),1&l&&S!==(S=a[1].url)&&c(o,"href",S),"noDate"!==a[1].date?L?L.p(a,l):(L=p(a),L.c(),L.m(e,z)):L&&(L.d(1),L=null)},d(a){a&&u(e),L&&L.d()}}}function G(a){let e,o=a[0],l=[];for(let i=0;i<o.length;i+=1)l[i]=z(f(a,o,i));return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=h()},l(a){for(let e=0;e<l.length;e+=1)l[e].l(a);e=h()},m(a,o){for(let e=0;e<l.length;e+=1)l[e].m(a,o);m(a,e,o)},p(a,[i]){if(1&i){let t;for(o=a[0],t=0;t<o.length;t+=1){const n=f(a,o,t);l[t]?l[t].p(n,i):(l[t]=z(n),l[t].c(),l[t].m(e.parentNode,e))}for(;t<l.length;t+=1)l[t].d(1);l.length=o.length}},i:g,o:g,d(a){S(l,a),a&&u(e)}}}function L(a,e,o){let{json:l=[{name:"",date:"",url:"",slaves:""}]}=e;return console.log(l[0].url),a.$$set=a=>{"json"in a&&o(0,l=a.json)},[l]}class N extends a{constructor(a){super(),e(this,a,L,G,o,{json:0})}}const D=[{name:"Storia",date:"noDate",url:"scuola/Storia",slaves:[{name:"Il novecento",date:"20/10/2021",url:"/scuola/Storia/Il-Novecento"},{name:"L'età di Giolitti",date:"20/10/2021",url:"/scuola/Storia/L-età-di-Giolitti"},{name:"Venti di guerra",date:"27/10/2021",url:"/scuola/Storia/Venti-di-guerra"},{name:"Prima guerra mondiale",date:"07/12/2021",url:"/scuola/Storia/Prima-guerra-mondiale"},{name:"Genocidio degli Armeni",date:"15/12/2021",url:"/scuola/Storia/Genocidio-degli-Armeni"},{name:"Rivoluzione Russa",date:"09/02/2022",url:"/scuola/Storia/Rivoluzione-Russa"},{name:"Il Fascismo",date:"10/02/2022",url:"/scuola/Storia/Il-Fascismo"},{name:"Crisi del '29",date:"01/04/2022",url:"/scuola/Storia/Crisi-del-29"},{name:"Sistemi economici",date:"04/04/2022",url:"/scuola/Storia/Sistemi-economici"},{name:"Il Nazismo",date:"04/04/2022",url:"/scuola/Storia/Il-nazismo"},{name:"Preparativi di guerra",date:"05/05/2022",url:"/scuola/Storia/Preparativi-di-guerra"},{name:"Seconda guerra mondiale",date:"05/05/2022",url:"/scuola/Storia/Seconda-guerra-mondiale"}]},{name:"Italiano",url:"scuola/Italiano",date:"noDate",slaves:[{name:"Età del realismo e del positivismo",date:"23/10/2021",url:"/scuola/Italiano/Età-del-realismo-e-del-positivismo"},{name:"La visone dell'uomo nel positivismo",date:"23/10/2021",url:"/scuola/Italiano/La-visione-dell-uomo-nel-positivismo"},{name:"Il naturalismo",date:"23/10/2021",url:"/scuola/Italiano/Il-naturalismo"},{name:"Il verismo",date:"23/10/2021",url:"/scuola/Italiano/Il-verismo"},{name:"L'evoluzione del romanzo",date:"23/10/2021",url:"/scuola/Italiano/L-evoluzione-del-romanzo"},{name:"I promessi sposi",date:"24/10/2021",url:"/scuola/Italiano/I-promessi-sposi"},{name:"Giovanni Verga",date:"26/10/2021",url:"/scuola/Italiano/Giovanni-Verga"},{name:"Età del decadentismo",date:"19/01/2022",url:"/scuola/Italiano/Età-del-decadentismo"},{name:"Giovanni Pascoli",date:"23/01/2022",url:"/scuola/Italiano/Giovanni-Pascoli"},{name:"Gabriele D'annunzio",date:"01/02/2022",url:"/scuola/Italiano/Gabriele-DAnnunzio"},{name:"Il Novecento",date:"12/05/2022",url:"/scuola/Italiano/Il-Novecento"},{name:"Il romanzo del Novecento",date:"12/05/2022",url:"/scuola/Italiano/Il-romanzo-del-Novecento"},{name:"L'architettura del Novecento",date:"16/05/2022",url:"/scuola/Italiano/L-architettura-del-Novecento"},{name:"Italo Svevo",date:"16/05/2022",url:"/scuola/Italiano/Italo-Svevo"},{name:"Luigi Pirandello",date:"16/05/2022",url:"/scuola/Italiano/Luigi-Pirandello"}]}];export{N as R,D as p};