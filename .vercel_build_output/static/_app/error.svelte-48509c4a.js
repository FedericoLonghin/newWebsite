import{S as s,i as r,s as a,e as t,t as e,c as o,a as c,g as n,d as u,f as p,G as l,h as f,k as i,l as d,n as m,H as h}from"./chunks/vendor-c12218c7.js";function k(s){let r,a,i=s[1].stack+"";return{c(){r=t("pre"),a=e(i)},l(s){r=o(s,"PRE",{});var t=c(r);a=n(t,i),t.forEach(u)},m(s,t){p(s,r,t),l(r,a)},p(s,r){2&r&&i!==(i=s[1].stack+"")&&f(a,i)},d(s){s&&u(r)}}}function v(s){let r,a,v,E,g,x,H,P=s[1].message+"",$=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),v=i(),E=t("p"),g=e(P),x=i(),$&&$.c(),H=d()},l(t){r=o(t,"H1",{});var e=c(r);a=n(e,s[0]),e.forEach(u),v=m(t),E=o(t,"P",{});var p=c(E);g=n(p,P),p.forEach(u),x=m(t),$&&$.l(t),H=d()},m(s,t){p(s,r,t),l(r,a),p(s,v,t),p(s,E,t),l(E,g),p(s,x,t),$&&$.m(s,t),p(s,H,t)},p(s,[r]){1&r&&f(a,s[0]),2&r&&P!==(P=s[1].message+"")&&f(g,P),s[1].stack?$?$.p(s,r):($=k(s),$.c(),$.m(H.parentNode,H)):$&&($.d(1),$=null)},i:h,o:h,d(s){s&&u(r),s&&u(v),s&&u(E),s&&u(x),$&&$.d(s),s&&u(H)}}}function E({error:s,status:r}){return{props:{error:s,status:r}}}function g(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,g,v,a,{status:0,error:1})}}export{E as load};
