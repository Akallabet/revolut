!function(e){function t(t){for(var r,c,o=t[0],i=t[1],l=t[2],s=0,d=[];s<o.length;s++)c=o[s],u[c]&&d.push(u[c][0]),u[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==u[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},u={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var M=i;a.push([149,1]),n()}({107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.startFetchRates=t.updateRates=t.UPDATE_RATES=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(42)),u=n(66);var a=t.UPDATE_RATES="UPDATE_RATES",c=t.updateRates=function(e){r.default.dispatch({type:a,rates:e})};t.startFetchRates=function(){var e=r.default.getState().polling;(0,u.fetchRates)().then(c),setInterval(function(){(0,u.fetchRates)().then(c)},e)}},113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.routeKeys={pockets:"pockets",currencyExchange:"exchange"},u=[{key:r.pockets,path:"/pockets",label:"Pockets",default:!0},{key:r.currencyExchange,path:"/currency-exchange",label:"Exchange",default:!1}];t.default=u},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Page=void 0;var r=M(n(136)),u=M(n(298));n(138),n(253);var a=M(n(1)),c=n(104),o=n(254),i=n(0),l=M(n(113));function M(e){return e&&e.__esModule?e:{default:e}}n(255);var s=u.default.Content,d=u.default.Header,f=t.Page=function(e){var t=e.children,n=e.location,o=l.default.find(function(e){return e.path===n.pathname});return a.default.createElement(u.default,null,a.default.createElement(d,null,a.default.createElement("div",{className:"logo"}),a.default.createElement(r.default,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[o.key],style:{lineHeight:"64px"}},l.default.map(function(e){var t=e.key,n=e.label,u=e.path;return a.default.createElement(r.default.Item,{key:t},a.default.createElement(c.Link,{to:u},n))}))),a.default.createElement(s,{className:"app-content"},t))};f.propTypes={children:i.element,location:i.object};var y=(0,o.withRouter)(f);t.default=y},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(137));n(130);var u=o(n(1)),a=n(0),c=o(n(131));function o(e){return e&&e.__esModule?e:{default:e}}n(264);var i=function(e){var t=e.availableCurrencies,n=e.currency,a=e.amount,o=e.sign,i=e.className,l=void 0===i?"":i,M=e.onCurrencySelection,s=void 0===M?function(){}:M,d=e.onAmountChange,f=void 0===d?function(){}:d,y=t.find(function(e){return e.code===n}),N=y.symbol,j=y.balance;return u.default.createElement("div",{className:l+" exchange"},u.default.createElement("div",{className:"exchange-currency"},u.default.createElement("div",{className:"js-currency"},u.default.createElement(c.default,{currency:n,onCurrencySelection:s})),u.default.createElement("div",{className:"js-balance"},"balance ",N," ",j)),u.default.createElement("div",{className:"exchange-amount"},u.default.createElement("div",{className:"js-amount"},u.default.createElement(r.default,{placeholder:0,value:a,min:0,onChange:f,size:"large",formatter:function(e){return e&&0!==e?o+" "+e:""},parser:function(e){return e.replace(o,"")}}))))};i.propTypes={className:a.string,availableCurrencies:a.array.isRequired,currency:a.string.isRequired,amount:(0,a.oneOfType)([a.number,a.string]),sign:a.string,balance:a.number,onCurrencySelection:a.func,onAmountChange:a.func},t.default=i},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=function(e){return e&&e.__esModule?e:{default:e}}(n(259));var a=(0,r.connect)(function(e){return{currencies:e.availableCurrencies}},null)(u.default);t.default=a},149:function(e,t,n){"use strict";var r=l(n(1)),u=n(28),a=n(9),c=n(104),o=l(n(42)),i=l(n(188));function l(e){return e&&e.__esModule?e:{default:e}}n(320),(0,a.render)(r.default.createElement(u.Provider,{store:o.default},r.default.createElement(c.BrowserRouter,{basename:void 0},r.default.createElement(i.default,null))),document.getElementById("root"))},160:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(61),u=M(n(161)),a=M(n(184)),c=M(n(185)),o=M(n(186)),i=M(n(187)),l=n(43);function M(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.combineReducers)({polling:function(){return l.POLLING},currencyCodes:function(){return l.CURRENCY_CODES},availableCurrencies:i.default,exchangeRates:u.default,exchangeFrom:a.default,exchangeTo:c.default,pocketCurrency:o.default})},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(43),u=n(107);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.EXHCANGE_RATES,t=arguments[1];switch(t.type){case u.UPDATE_RATES:return t.rates}return e}},162:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPGc+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGREE0NDsiIHBvaW50cz0iMjU2LjAwMSwxMDAuMTc0IDI2NC4yOSwxMjUuNjgzIDI5MS4xMSwxMjUuNjgzIDI2OS40MTEsMTQxLjQ0OCAyNzcuNywxNjYuOTU3IA0KCQkyNTYuMDAxLDE1MS4xOTEgMjM0LjMwMSwxNjYuOTU3IDI0Mi41OSwxNDEuNDQ4IDIyMC44OTEsMTI1LjY4MyAyNDcuNzEyLDEyNS42ODMgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBwb2ludHM9IjE0NS44MTQsMTQ1LjgxNCAxNjkuNzE0LDE1Ny45OSAxODguNjc5LDEzOS4wMjYgMTg0LjQ4MiwxNjUuNTE2IDIwOC4zODEsMTc3LjY5MyANCgkJMTgxLjg5LDE4MS44ODkgMTc3LjY5NCwyMDguMzgxIDE2NS41MTcsMTg0LjQ4MiAxMzkuMDI3LDE4OC42NzkgMTU3Ljk5MiwxNjkuNzE0IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRkZEQTQ0OyIgcG9pbnRzPSIxMDAuMTc1LDI1NiAxMjUuNjg0LDI0Ny43MTEgMTI1LjY4NCwyMjAuODkgMTQxLjQ0OCwyNDIuNTkgMTY2Ljk1OCwyMzQuMzAxIDE1MS4xOTEsMjU2IA0KCQkxNjYuOTU4LDI3Ny42OTkgMTQxLjQ0OCwyNjkuNDExIDEyNS42ODQsMjkxLjExIDEyNS42ODQsMjY0LjI4OSAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGREE0NDsiIHBvaW50cz0iMTQ1LjgxNCwzNjYuMTg2IDE1Ny45OTEsMzQyLjI4NiAxMzkuMDI3LDMyMy4zMjEgMTY1LjUxOCwzMjcuNTE5IDE3Ny42OTMsMzAzLjYyIA0KCQkxODEuODksMzMwLjExMSAyMDguMzgsMzM0LjMwNyAxODQuNDg0LDM0Ni40ODQgMTg4LjY3OSwzNzIuOTc0IDE2OS43MTQsMzU0LjAwOSAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGREE0NDsiIHBvaW50cz0iMjU2LjAwMSw0MTEuODI2IDI0Ny43MTEsMzg2LjMxNyAyMjAuODkxLDM4Ni4zMTcgMjQyLjU5MSwzNzAuNTUyIDIzNC4zMDEsMzQ1LjA0NSANCgkJMjU2LjAwMSwzNjAuODA5IDI3Ny43LDM0NS4wNDUgMjY5LjQxMSwzNzAuNTUyIDI5MS4xMSwzODYuMzE3IDI2NC4yODksMzg2LjMxNyAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGREE0NDsiIHBvaW50cz0iMzY2LjE4NywzNjYuMTg2IDM0Mi4yODgsMzU0LjAxIDMyMy4zMjIsMzcyLjk3NSAzMjcuNTE5LDM0Ni40ODMgMzAzLjYyMiwzMzQuMzA3IA0KCQkzMzAuMTEyLDMzMC4xMTEgMzM0LjMwOCwzMDMuNjIgMzQ2LjQ4NCwzMjcuNTE5IDM3Mi45NzQsMzIzLjMyMSAzNTQuMDA5LDM0Mi4yODggCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBwb2ludHM9IjQxMS44MjYsMjU2IDM4Ni4zMTcsMjY0LjI4OSAzODYuMzE3LDI5MS4xMSAzNzAuNTUyLDI2OS40MSAzNDUuMDQ1LDI3Ny42OTkgMzYwLjgxLDI1NiANCgkJMzQ1LjA0NSwyMzQuMzAxIDM3MC41NTMsMjQyLjU5IDM4Ni4zMTcsMjIwLjg5IDM4Ni4zMTcsMjQ3LjcxMiAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGREE0NDsiIHBvaW50cz0iMzY2LjE4NywxNDUuODE0IDM1NC4wMSwxNjkuNzE0IDM3Mi45NzUsMTg4LjY3OSAzNDYuNDgzLDE4NC40ODEgMzM0LjMwOCwyMDguMzggDQoJCTMzMC4xMTIsMTgxLjg4OSAzMDMuNjIyLDE3Ny42OTIgMzI3LjUxOSwxNjUuNTE2IDMyMy4zMjIsMTM5LjAyNyAzNDIuMjg5LDE1Ny45OTEgCSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},163:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0yNDQuODcsMjU2SDUxMmMwLTIzLjEwNi0zLjA4LTQ1LjQ5LTguODE5LTY2Ljc4M0gyNDQuODdWMjU2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMjQ0Ljg3LDEyMi40MzVoMjI5LjU1NmMtMTUuNjcxLTI1LjU3Mi0zNS43MDgtNDguMTc1LTU5LjA3LTY2Ljc4M0gyNDQuODdWMTIyLjQzNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDgwMDI3OyIgZD0iTTI1Niw1MTJjNjAuMjQ5LDAsMTE1LjYyNi0yMC44MjQsMTU5LjM1Ni01NS42NTJIOTYuNjQ0QzE0MC4zNzQsNDkxLjE3NiwxOTUuNzUxLDUxMiwyNTYsNTEyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMzcuNTc0LDM4OS41NjVoNDM2Ljg1MmMxMi41ODEtMjAuNTI5LDIyLjMzOC00Mi45NjksMjguNzU1LTY2Ljc4M0g4LjgxOQ0KCQlDMTUuMjM2LDM0Ni41OTYsMjQuOTkzLDM2OS4wMzYsMzcuNTc0LDM4OS41NjV6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojMDA1MkI0OyIgZD0iTTExOC41ODQsMzkuOTc4aDIzLjMyOWwtMjEuNywxNS43NjVsOC4yODksMjUuNTA5bC0yMS42OTktMTUuNzY1TDg1LjEwNCw4MS4yNTJsNy4xNi0yMi4wMzcNCglDNzMuMTU4LDc1LjEzLDU2LjQxMiw5My43NzYsNDIuNjEyLDExNC41NTJoNy40NzVsLTEzLjgxMywxMC4wMzVjLTIuMTUyLDMuNTktNC4yMTYsNy4yMzctNi4xOTQsMTAuOTM4bDYuNTk2LDIwLjMwMWwtMTIuMzA2LTguOTQxDQoJYy0zLjA1OSw2LjQ4MS01Ljg1NywxMy4xMDgtOC4zNzIsMTkuODczbDcuMjY3LDIyLjM2OGgyNi44MjJsLTIxLjcsMTUuNzY1bDguMjg5LDI1LjUwOWwtMjEuNjk5LTE1Ljc2NWwtMTIuOTk4LDkuNDQ0DQoJQzAuNjc4LDIzNC41MzcsMCwyNDUuMTg5LDAsMjU2aDI1NmMwLTE0MS4zODQsMC0xNTguMDUyLDAtMjU2QzIwNS40MjgsMCwxNTguMjg1LDE0LjY3LDExOC41ODQsMzkuOTc4eiBNMTI4LjUwMiwyMzAuNA0KCWwtMjEuNjk5LTE1Ljc2NUw4NS4xMDQsMjMwLjRsOC4yODktMjUuNTA5bC0yMS43LTE1Ljc2NWgyNi44MjJsOC4yODgtMjUuNTA5bDguMjg4LDI1LjUwOWgyNi44MjJsLTIxLjcsMTUuNzY1TDEyOC41MDIsMjMwLjR6DQoJIE0xMjAuMjEzLDEzMC4zMTdsOC4yODksMjUuNTA5bC0yMS42OTktMTUuNzY1bC0yMS42OTksMTUuNzY1bDguMjg5LTI1LjUwOWwtMjEuNy0xNS43NjVoMjYuODIybDguMjg4LTI1LjUwOWw4LjI4OCwyNS41MDloMjYuODIyDQoJTDEyMC4yMTMsMTMwLjMxN3ogTTIyMC4zMjgsMjMwLjRsLTIxLjY5OS0xNS43NjVMMTc2LjkzLDIzMC40bDguMjg5LTI1LjUwOWwtMjEuNy0xNS43NjVoMjYuODIybDguMjg4LTI1LjUwOWw4LjI4OCwyNS41MDloMjYuODIyDQoJbC0yMS43LDE1Ljc2NUwyMjAuMzI4LDIzMC40eiBNMjEyLjAzOSwxMzAuMzE3bDguMjg5LDI1LjUwOWwtMjEuNjk5LTE1Ljc2NWwtMjEuNjk5LDE1Ljc2NWw4LjI4OS0yNS41MDlsLTIxLjctMTUuNzY1aDI2LjgyMg0KCWw4LjI4OC0yNS41MDlsOC4yODgsMjUuNTA5aDI2LjgyMkwyMTIuMDM5LDEzMC4zMTd6IE0yMTIuMDM5LDU1Ljc0M2w4LjI4OSwyNS41MDlsLTIxLjY5OS0xNS43NjVMMTc2LjkzLDgxLjI1Mmw4LjI4OS0yNS41MDkNCglsLTIxLjctMTUuNzY1aDI2LjgyMmw4LjI4OC0yNS41MDlsOC4yODgsMjUuNTA5aDI2LjgyMkwyMTIuMDM5LDU1Ljc0M3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},164:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik01Mi45MiwxMDAuMTQyYy0yMC4xMDksMjYuMTYzLTM1LjI3Miw1Ni4zMTgtNDQuMTAxLDg5LjA3N2gxMzMuMTc4TDUyLjkyLDEwMC4xNDJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik01MDMuMTgxLDE4OS4yMTljLTguODI5LTMyLjc1OC0yMy45OTMtNjIuOTEzLTQ0LjEwMS04OS4wNzZsLTg5LjA3NSw4OS4wNzZINTAzLjE4MXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDA1MkI0OyIgZD0iTTguODE5LDMyMi43ODRjOC44MywzMi43NTgsMjMuOTkzLDYyLjkxMyw0NC4xMDEsODkuMDc1bDg5LjA3NC04OS4wNzVMOC44MTksMzIyLjc4NEw4LjgxOSwzMjIuNzg0DQoJCXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDA1MkI0OyIgZD0iTTQxMS44NTgsNTIuOTIxYy0yNi4xNjMtMjAuMTA5LTU2LjMxNy0zNS4yNzItODkuMDc2LTQ0LjEwMnYxMzMuMTc3TDQxMS44NTgsNTIuOTIxeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBkPSJNMTAwLjE0Miw0NTkuMDc5YzI2LjE2MywyMC4xMDksNTYuMzE4LDM1LjI3Miw4OS4wNzYsNDQuMTAyVjM3MC4wMDVMMTAwLjE0Miw0NTkuMDc5eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBkPSJNMTg5LjIxNyw4LjgxOWMtMzIuNzU4LDguODMtNjIuOTEzLDIzLjk5My04OS4wNzUsNDQuMTAxbDg5LjA3NSw4OS4wNzVWOC44MTl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik0zMjIuNzgzLDUwMy4xODFjMzIuNzU4LTguODMsNjIuOTEzLTIzLjk5Myw4OS4wNzUtNDQuMTAxbC04OS4wNzUtODkuMDc1VjUwMy4xODF6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik0zNzAuMDA1LDMyMi43ODRsODkuMDc1LDg5LjA3NmMyMC4xMDgtMjYuMTYyLDM1LjI3Mi01Ni4zMTgsNDQuMTAxLTg5LjA3NkgzNzAuMDA1eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik01MDkuODMzLDIyMi42MDloLTIyMC40NGgtMC4wMDFWMi4xNjdDMjc4LjQ2MSwwLjc0NCwyNjcuMzE3LDAsMjU2LDANCgkJYy0xMS4zMTksMC0yMi40NjEsMC43NDQtMzMuMzkxLDIuMTY3djIyMC40NHYwLjAwMUgyLjE2N0MwLjc0NCwyMzMuNTM5LDAsMjQ0LjY4MywwLDI1NmMwLDExLjMxOSwwLjc0NCwyMi40NjEsMi4xNjcsMzMuMzkxDQoJCWgyMjAuNDRoMC4wMDF2MjIwLjQ0MkMyMzMuNTM5LDUxMS4yNTYsMjQ0LjY4MSw1MTIsMjU2LDUxMmMxMS4zMTcsMCwyMi40NjEtMC43NDMsMzMuMzkxLTIuMTY3di0yMjAuNDR2LTAuMDAxaDIyMC40NDINCgkJQzUxMS4yNTYsMjc4LjQ2MSw1MTIsMjY3LjMxOSw1MTIsMjU2QzUxMiwyNDQuNjgzLDUxMS4yNTYsMjMzLjUzOSw1MDkuODMzLDIyMi42MDl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0zMjIuNzgzLDMyMi43ODRMMzIyLjc4MywzMjIuNzg0TDQzNy4wMTksNDM3LjAyYzUuMjU0LTUuMjUyLDEwLjI2Ni0xMC43NDMsMTUuMDQ4LTE2LjQzNQ0KCQlsLTk3LjgwMi05Ny44MDJoLTMxLjQ4MlYzMjIuNzg0eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMTg5LjIxNywzMjIuNzg0aC0wLjAwMkw3NC45OCw0MzcuMDE5YzUuMjUyLDUuMjU0LDEwLjc0MywxMC4yNjYsMTYuNDM1LDE1LjA0OGw5Ny44MDItOTcuODA0DQoJCVYzMjIuNzg0eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMTg5LjIxNywxODkuMjE5di0wLjAwMkw3NC45ODEsNzQuOThjLTUuMjU0LDUuMjUyLTEwLjI2NiwxMC43NDMtMTUuMDQ4LDE2LjQzNWw5Ny44MDMsOTcuODAzDQoJCUgxODkuMjE3eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMzIyLjc4MywxODkuMjE5TDMyMi43ODMsMTg5LjIxOUw0MzcuMDIsNzQuOTgxYy01LjI1Mi01LjI1NC0xMC43NDMtMTAuMjY2LTE2LjQzNS0xNS4wNDcNCgkJbC05Ny44MDIsOTcuODAzVjE4OS4yMTl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(43),a=n(68),c={currency:u.CURRENCY_CODES.EUR,amount:""};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case a.SET_EXCHANGE_FROM:return r({},e,{currency:t.currency});case a.UPDATE_AMOUNT_FROM:return r({},e,{amount:t.amount})}return e}},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(43),a=n(69),c={currency:u.CURRENCY_CODES.USD,amount:""};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case a.SET_EXCHANGE_TO:return r({},e,{currency:t.currency});case a.UPDATE_AMOUNT_TO:return r({},e,{amount:t.amount})}return e}},186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(43),a=n(70),c={currency:u.CURRENCY_CODES.EUR,amount:0};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case a.SELECT_POCKET_CURRENCY:return r({},e,{currency:t.currency})}return e}},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(70),a=n(43),c=n(66);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.AVAILABLE_CURRENCIES,t=arguments[1];switch(t.type){case u.INCREASE_CURRENCY_AMOUNT:return e.map(function(e){return e.code===t.currency?r({},e,{balance:(0,c.roundToTwoDecimals)(t.amount+e.balance)}):e});case u.DECREASE_CURRENCY_AMOUNT:return e.map(function(e){return e.code===t.currency?r({},e,{balance:(0,c.roundToTwoDecimals)(e.balance-t.amount)}):e})}return e}},188:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0});var u=M(n(1)),a=n(104),c=n(113),o=M(c),i=M(n(189)),l=M(n(279));function M(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=(s(r={},c.routeKeys.pockets,o.default.find(function(e){return e.key===c.routeKeys.pockets})),s(r,c.routeKeys.currencyExchange,o.default.find(function(e){return e.key===c.routeKeys.currencyExchange})),r);t.default=function(){return u.default.createElement(a.Switch,null,u.default.createElement(a.Route,{key:d[c.routeKeys.pockets].key,path:d[c.routeKeys.pockets].path,component:l.default}),u.default.createElement(a.Route,{key:d[c.routeKeys.currencyExchange].key,path:d[c.routeKeys.currencyExchange].path,component:i.default}),u.default.createElement(a.Redirect,{from:"/",to:d[c.routeKeys.pockets].path}))}},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=function(e){return e&&e.__esModule?e:{default:e}}(n(190));var a=(0,r.connect)(function(e){return{currencyCodes:e.currencyCodes}},null)(u.default);t.default=a},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(20)),u=f(n(294));n(103),n(296);var a=f(n(1)),c=n(0),o=f(n(128)),i=f(n(258)),l=f(n(266)),M=f(n(267)),s=f(n(270)),d=f(n(274));function f(e){return e&&e.__esModule?e:{default:e}}n(277);var y=function(){return a.default.createElement(o.default,null,a.default.createElement("div",null,a.default.createElement(u.default,{bordered:!0,className:"exchange-list"},a.default.createElement(u.default.Item,null,a.default.createElement(i.default,null))),a.default.createElement(u.default,{className:"rate exchange-list"},a.default.createElement(u.default.Item,null,a.default.createElement(r.default,{span:6,style:{textAlign:"center"}},a.default.createElement(s.default,null)),a.default.createElement(r.default,{span:12,style:{textAlign:"center"}},a.default.createElement(d.default,null)),a.default.createElement(r.default,{span:6,style:{textAlign:"right",lineHeight:"30px"}},a.default.createElement(M.default,null)))),a.default.createElement(u.default,{bordered:!0,className:"exchange-list"},a.default.createElement(u.default.Item,null,a.default.createElement(l.default,null)))))};y.propTypes={currencyCodes:c.object},t.default=y},255:function(e,t,n){var r=n(256);"string"==typeof r&&(r=[[e.i,r,""]]);var u={hmr:!0,transform:void 0,insertInto:void 0};n(54)(r,u);r.locals&&(e.exports=r.locals)},256:function(e,t,n){(e.exports=n(52)(!1)).push([e.i,".app-content{padding:50px 0 0;margin:auto}@media (max-width:600px){.app-content{width:400px}}@media (min-width:601px) and (max-width:800px){.app-content{width:550px}}@media (min-width:801px){.app-content{width:700px}}.ant-btn{color:#fff;border:1px solid #367abd}.ant-btn.exchange-rate{color:#4cb2d4}.ant-input-number{font-size:1.5rem;width:175px}.ant-input-number-handler-wrap{display:none}.ant-input-number-input{text-align:right}",""])},258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=function(e){return e&&e.__esModule?e:{default:e}}(n(129)),a=n(68);var c=(0,r.connect)(function(e){var t=e.exchangeFrom;return{className:"exchange-from",currency:t.currency,amount:t.amount,sign:"-",availableCurrencies:e.availableCurrencies}},function(){return{onCurrencySelection:function(e){return(0,a.changeCurrency)(e)},onAmountChange:function(e){return(0,a.updateAndConvert)(e)}}})(u.default);t.default=c},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(297)),u=l(n(39)),a=l(n(11)),c=l(n(136));n(260),n(53),n(261),n(138);var o=l(n(1)),i=n(0);function l(e){return e&&e.__esModule?e:{default:e}}n(262);var M=function(e){var t=e.currencies,n=e.currency,i=e.onCurrencySelection,l=t.find(function(e){return e.code===n}).flag,M=o.default.createElement(c.default,{size:"large"},t.map(function(e,t){var n=e.flag,r=e.code,u=e.symbol,a=e.balance;return[o.default.createElement(c.default.Divider,{key:t+"-divider"}),o.default.createElement(c.default.Item,{className:"currency-option",key:t,onClick:function(){return i(r)}},o.default.createElement("img",{src:n}),o.default.createElement("span",{className:"code"},r),o.default.createElement("span",{className:"balance"},u," ",a))]}));return o.default.createElement(r.default,{overlay:M,trigger:["click"]},o.default.createElement(u.default,{className:"currency-selection"},o.default.createElement("img",{src:l})," ",n," ",o.default.createElement(a.default,{type:"caret-down"})))};M.propTypes={currencies:i.array.isRequired,currency:i.string.isRequired,onCurrencySelection:i.func.isRequired},t.default=M},262:function(e,t,n){var r=n(263);"string"==typeof r&&(r=[[e.i,r,""]]);var u={hmr:!0,transform:void 0,insertInto:void 0};n(54)(r,u);r.locals&&(e.exports=r.locals)},263:function(e,t,n){(e.exports=n(52)(!1)).push([e.i,".currency-selection img{width:22px;height:22px}.currency-option{font-size:1.2rem}.currency-option img{width:20px;height:20px}.currency-selection .ant-btn{color:#4cb2d4}.currency-option span{margin:0 0 0 10px}.currency-option span.code{width:40px}",""])},264:function(e,t,n){var r=n(265);"string"==typeof r&&(r=[[e.i,r,""]]);var u={hmr:!0,transform:void 0,insertInto:void 0};n(54)(r,u);r.locals&&(e.exports=r.locals)},265:function(e,t,n){(e.exports=n(52)(!1)).push([e.i,".exchange{display:flex;flex-direction:row}.exchange>div{flex:1 auto}.exchange .exchange-currency{order:1;float:left}.exchange .exchange-amount{order:2;text-align:right}.ant-btn{background:#367abd;font-size:1.3rem}.exchange .ant-input-number{background:#367abd;color:#fff;border:1px solid #367abd}.js-balance{padding:0 15px}",""])},266:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=function(e){return e&&e.__esModule?e:{default:e}}(n(129)),a=n(69);var c=(0,r.connect)(function(e){var t=e.exchangeTo;return{className:"exchange-to",currency:t.currency,amount:t.amount,sign:"+",availableCurrencies:e.availableCurrencies}},function(){return{onCurrencySelection:function(e){return(0,a.changeCurrency)(e)},onAmountChange:function(e){return(0,a.updateAndConvert)(e)}}})(u.default);t.default=c},267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=n(107),a=function(e){return e&&e.__esModule?e:{default:e}}(n(268));var c=(0,r.connect)(function(e){return{exchangeRates:e.exchangeRates,availableCurrencies:e.availableCurrencies,exchangeFrom:e.exchangeFrom,exchangeTo:e.exchangeTo}},function(){return{startFetchRates:u.startFetchRates}})(a.default);t.default=c},268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(300)),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(269);var a=o(n(1)),c=n(0);function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),u(t,[{key:"componentDidMount",value:function(){this.props.startFetchRates()}},{key:"render",value:function(){var e=this.props,t=e.exchangeRates,n=e.exchangeFrom,u=e.exchangeTo,c=e.availableCurrencies,o=c.find(function(e){return e.code===n.currency}),i=c.find(function(e){return e.code===u.currency});return a.default.createElement(r.default,{className:"exchange-rate",color:"#4CB2D4"},"1 ",o.symbol," = ",t[o.code][i.code]," ",i.symbol)}}]),t}();i.propTypes={exchangeRates:c.object,exchangeFrom:(0,c.shape)({currency:c.string.isRequired,amount:(0,c.oneOfType)([c.number,c.string])}),exchangeTo:(0,c.shape)({currency:c.string.isRequired,amount:(0,c.oneOfType)([c.number,c.string])}),availableCurrencies:c.array.isRequired,startFetchRates:c.func},t.default=i},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=n(88),a=function(e){return e&&e.__esModule?e:{default:e}}(n(271));var c=(0,r.connect)(null,function(){return{swapCurrencies:function(){return(0,u.swapCurrencies)()}}})(a.default);t.default=c},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(39));n(53);var u=c(n(1)),a=n(0);function c(e){return e&&e.__esModule?e:{default:e}}n(272);var o=function(e){var t=e.swapCurrencies;return u.default.createElement(r.default,{className:"swap-currencies",icon:"swap",shape:"circle",onClick:t})};o.propTypes={swapCurrencies:a.func.isRequired},t.default=o},272:function(e,t,n){var r=n(273);"string"==typeof r&&(r=[[e.i,r,""]]);var u={hmr:!0,transform:void 0,insertInto:void 0};n(54)(r,u);r.locals&&(e.exports=r.locals)},273:function(e,t,n){(e.exports=n(52)(!1)).push([e.i,".ant-btn.swap-currencies{transform:rotate(90deg)}",""])},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=function(e){return e&&e.__esModule?e:{default:e}}(n(275)),a=n(276);var c=(0,r.connect)(function(e){return{availableCurrencies:e.availableCurrencies,exchangeFrom:e.exchangeFrom}},function(){return{exchange:function(){return(0,a.exchange)()}}})(u.default);t.default=c},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(39));n(53);var u=c(n(1)),a=n(0);function c(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.availableCurrencies,n=e.exchangeFrom,a=e.exchange,c=t.find(function(e){return e.code===n.currency}).balance,o=n.amount>c||!n.amount;return u.default.createElement(r.default,{disabled:o,onClick:a},"Exchange")};o.propTypes={availableCurrencies:a.array,exchangeFrom:a.object,exchange:a.func},t.default=o},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.exchange=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(42)),u=n(70);t.exchange=function(){var e=r.default.getState(),t=e.exchangeFrom,n=e.exchangeTo;(0,u.decreaseCurrencyAmount)(t),(0,u.increaseCurrencyAmount)(n)}},277:function(e,t,n){var r=n(278);"string"==typeof r&&(r=[[e.i,r,""]]);var u={hmr:!0,transform:void 0,insertInto:void 0};n(54)(r,u);r.locals&&(e.exports=r.locals)},278:function(e,t,n){(e.exports=n(52)(!1)).push([e.i,".ant-list{background:#367abd;color:#fff;margin:auto}.ant-list.rate{background:#fff;color:#367abd;margin:auto}.ant-list.rate .ant-btn{background:#4cb2d4;border:1px solid #367abd}.ant-list.rate .ant-btn:focus,.ant-list.rate .ant-btn:hover{color:#367abd}.ant-list-bordered{border:1px solid #4cb2d4}.ant-list-bordered .ant-list-item{border-bottom:1px solid #4cb2d4}.ant-list-item .exchange{width:100%;display:flex;flex-direction:row}",""])},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=function(e){return e&&e.__esModule?e:{default:e}}(n(280));var a=(0,r.connect)(null,null)(u.default);t.default=a},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(1)),u=c(n(128)),a=c(n(281));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(u.default,null,r.default.createElement(a.default,null))}},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=function(e){return e&&e.__esModule?e:{default:e}}(n(282)),a=n(70);var c=(0,r.connect)(function(e){return{availableCurrencies:e.availableCurrencies,pocketCurrency:e.pocketCurrency}},function(){return{selectPocketCurrency:function(e){return(0,a.selectPocketCurrency)(e)},increaseCurrencyAmount:function(e){var t=e.currency,n=e.amount;(0,a.increaseCurrencyAmount)({currency:t,amount:n})}}})(u.default);t.default=c},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(295)),u=f(n(33)),a=f(n(39)),c=f(n(137)),o=f(n(20)),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(299),n(135),n(53),n(130),n(103);var l=f(n(1)),M=n(0),s=f(n(291)),d=f(n(131));function f(e){return e&&e.__esModule?e:{default:e}}n(292);var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.pocketCurrency.amount;return n.state={amount:r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),i(t,[{key:"setAmount",value:function(e){this.setState({amount:e})}},{key:"onKeyDown",value:function(e){"Enter"===e.key&&this._isValidAmount()&&this._increaseCurrencyAmount()}},{key:"_increaseCurrencyAmount",value:function(){var e=this.props,t=e.pocketCurrency.currency;(0,e.increaseCurrencyAmount)({currency:t,amount:this.state.amount})}},{key:"_isValidAmount",value:function(){return!(isNaN(this.state.amount)||!this.state.amount)}},{key:"render",value:function(){var e=this.props,t=e.availableCurrencies,n=e.pocketCurrency.currency,i=e.selectPocketCurrency,M=t.find(function(e){return e.code===n});return l.default.createElement(r.default,{className:"pocket",title:l.default.createElement(s.default,M)},l.default.createElement(u.default,null,l.default.createElement(o.default,{span:10},l.default.createElement(d.default,{currency:n,onCurrencySelection:i})),l.default.createElement(o.default,{span:12},l.default.createElement(c.default,{min:0,max:1e4,placeholder:0,value:this.state.amount||"",onChange:this.setAmount.bind(this),onKeyDown:this.onKeyDown.bind(this)})),l.default.createElement(o.default,{span:2},l.default.createElement(a.default,{onClick:this._increaseCurrencyAmount.bind(this),disabled:!this._isValidAmount(),icon:"plus-circle"}))),l.default.createElement(u.default,null))}}]),t}();y.propTypes={availableCurrencies:M.array,pocketCurrency:M.object,selectPocketCurrency:M.func,increaseCurrencyAmount:M.func},t.default=y},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(33)),u=o(n(20));n(135),n(103);var a=o(n(1)),c=n(0);function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.symbol,n=e.balance,c=e.code;return a.default.createElement(r.default,null,a.default.createElement(u.default,{span:2},"Top Up ",a.default.createElement("strong",null,c)),a.default.createElement(u.default,{span:20},t," ",n),a.default.createElement(u.default,{span:2}))};i.propTypes={symbol:c.string,balance:c.number,code:c.string},t.default=i},292:function(e,t,n){var r=n(293);"string"==typeof r&&(r=[[e.i,r,""]]);var u={hmr:!0,transform:void 0,insertInto:void 0};n(54)(r,u);r.locals&&(e.exports=r.locals)},293:function(e,t,n){(e.exports=n(52)(!1)).push([e.i,".pocket.ant-card-bordered{border:1px solid #4cb2d4}.pocket .ant-card-head{border-bottom:1px solid #4cb2d4}.pocket .ant-card-head-title{text-align:center;color:#367abd}",""])},320:function(e,t){},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(61),u=o(n(158)),a=n(159),c=o(n(160));function o(e){return e&&e.__esModule?e:{default:e}}var i=JSON.parse(localStorage.getItem("exchange"))||{},l=(0,r.createStore)(c.default,i,(0,a.composeWithDevTools)((0,r.applyMiddleware)(u.default)));l.subscribe(function(){var e=l.getState();localStorage.setItem("exchange",JSON.stringify(e))}),t.default=l},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EXHCANGE_RATES=t.AVAILABLE_CURRENCIES=t.CURRENCY_FLAGS=t.CURRENCY_CODES=t.POLLING=void 0;var r=c(n(162)),u=c(n(163)),a=c(n(164));function c(e){return e&&e.__esModule?e:{default:e}}t.POLLING=1e4,t.CURRENCY_CODES={EUR:"EUR",USD:"USD",GBP:"GBP"},t.CURRENCY_FLAGS={USD:u.default,EUR:r.default,GBP:a.default},t.AVAILABLE_CURRENCIES=[{code:"EUR",flag:r.default,symbol:"€",balance:0},{code:"USD",flag:u.default,symbol:"$",balance:0},{code:"GBP",flag:a.default,symbol:"£",balance:0}],t.EXHCANGE_RATES={EUR:{},USD:{},GBP:{}}},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchRates=t.roundToTwoDecimals=t.roundToFourDecimals=void 0;var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,a=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){u=!0,a=e}finally{try{!r&&o.return&&o.return()}finally{if(u)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){return e&&e.__esModule?e:{default:e}}(n(165)),a=n(43);var c=function(e){return function(t){return Math.round(t*e)/e}},o=t.roundToFourDecimals=c(1e4),i=(t.roundToTwoDecimals=c(100),u.default.create({baseURL:"/api/rates/"})),l=function(e){return function(t){var n=t.data.to,r={};return e.forEach(function(e){r[e]=o(n.find(function(t){return t.quotecurrency===e}).mid)}),r}},M=l([a.CURRENCY_CODES.EUR,a.CURRENCY_CODES.GBP]),s=l([a.CURRENCY_CODES.USD,a.CURRENCY_CODES.GBP]),d=l([a.CURRENCY_CODES.EUR,a.CURRENCY_CODES.USD]);t.fetchRates=function(){return Promise.all([i.get("?from=USD&to=EUR,GBP").then(M),i.get("?from=EUR&to=USD,GBP").then(s),i.get("?from=GBP&to=EUR,USD").then(d)]).then(function(e){var t=r(e,3);return{USD:t[0],EUR:t[1],GBP:t[2]}})}},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertAmountFrom=t.updateAmountFrom=t.updateAndConvert=t.changeCurrency=t.setExchangeFrom=t.UPDATE_AMOUNT_FROM=t.SET_EXCHANGE_FROM=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(42)),u=n(66),a=n(88),c=n(69);var o=t.SET_EXCHANGE_FROM="SET_EXCHANGE_FROM",i=t.UPDATE_AMOUNT_FROM="UPDATE_AMOUNT_FROM",l=t.setExchangeFrom=function(e){r.default.dispatch({type:o,currency:e})},M=(t.changeCurrency=function(e){var t=r.default.getState(),n=t.exchangeTo,u=t.exchangeFrom;e===n.currency?(0,a.swapCurrencies)():(l(e),(0,c.convertAmountTo)(u.amount))},t.updateAndConvert=function(e){e&&null!=e&&!isNaN(e)||(e=0),M(e),(0,c.convertAmountTo)(e)},t.updateAmountFrom=function(e){r.default.dispatch({type:i,amount:e||""})});t.convertAmountFrom=function(e){var t=r.default.getState(),n=t.exchangeFrom,a=t.exchangeTo,c=t.exchangeRates[a.currency][n.currency],o=(0,u.roundToTwoDecimals)(e*c);M(o)}},69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertAmountTo=t.updateAmountTo=t.updateAndConvert=t.changeCurrency=t.setExchangeTo=t.UPDATE_AMOUNT_TO=t.SET_EXCHANGE_TO=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(42)),u=n(66),a=n(88),c=n(68);var o=t.SET_EXCHANGE_TO="SET_EXCHANGE_TO",i=t.UPDATE_AMOUNT_TO="UPDATE_AMOUNT_TO",l=t.setExchangeTo=function(e){r.default.dispatch({type:o,currency:e})},M=(t.changeCurrency=function(e){var t=r.default.getState().exchangeFrom;e===t.currency?(0,a.swapCurrencies)():(l(e),s(t.amount))},t.updateAndConvert=function(e){e&&null!=e&&!isNaN(e)||(e=0),M(e),(0,c.convertAmountFrom)(e)},t.updateAmountTo=function(e){r.default.dispatch({type:i,amount:e||""})}),s=t.convertAmountTo=function(e){var t=r.default.getState(),n=t.exchangeFrom,a=t.exchangeTo,c=t.exchangeRates[n.currency][a.currency];M((0,u.roundToTwoDecimals)(e*c))}},70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decreaseCurrencyAmount=t.increaseCurrencyAmount=t.selectPocketCurrency=t.DECREASE_CURRENCY_AMOUNT=t.INCREASE_CURRENCY_AMOUNT=t.SELECT_POCKET_CURRENCY=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(42));var u=t.SELECT_POCKET_CURRENCY="SELECT_POCKET_CURRENCY",a=t.INCREASE_CURRENCY_AMOUNT="INCREASE_CURRENCY_AMOUNT",c=t.DECREASE_CURRENCY_AMOUNT="DECREASE_CURRENCY_AMOUNT";t.selectPocketCurrency=function(e){return r.default.dispatch({type:u,currency:e})},t.increaseCurrencyAmount=function(e){var t=e.currency,n=e.amount;return r.default.dispatch({type:a,currency:t,amount:n})},t.decreaseCurrencyAmount=function(e){var t=e.currency,n=e.amount;return r.default.dispatch({type:c,currency:t,amount:n})}},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.swapCurrencies=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(42)),u=n(68),a=n(69);t.swapCurrencies=function(){var e=r.default.getState(),t=e.exchangeTo,n=e.exchangeFrom;(0,u.setExchangeFrom)(t.currency),(0,a.setExchangeTo)(n.currency),(0,a.convertAmountTo)(n.amount)}}});
//# sourceMappingURL=main.40c60ff49ca69889dafd.js.map