webpackJsonp([0xd2a57dc1d883],{64:function(n,o){"use strict";function e(n,o,e){var t=a.map(function(e){if(e.plugin[n]){var t=e.plugin[n](o,e.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:e?[e]:[]}function t(n,o,e){return a.reduce(function(e,t){return t.plugin[n]?e.then(function(){return t.plugin[n](o,t.options)}):e},Promise.resolve())}o.__esModule=!0,o.apiRunner=e,o.apiRunnerAsync=t;var a=[]},174:function(n,o,e){"use strict";var t;o.components={"component---src-templates-component-js":e(285),"component---src-pages-404-js":e(281),"component---src-pages-docs-js":e(282),"component---src-pages-index-js":e(283),"component---src-pages-modifiers-js":e(284)},o.json=(t={"layout-index.json":e(2),"docs-ignore.json":e(303)},t["layout-index.json"]=e(2),t["docs-animated-image.json"]=e(291),t["layout-index.json"]=e(2),t["docs-animated-scanner.json"]=e(292),t["layout-index.json"]=e(2),t["docs-progress-bar.json"]=e(315),t["layout-index.json"]=e(2),t["docs-action-sheet.json"]=e(290),t["layout-index.json"]=e(2),t["docs-action-bar.json"]=e(289),t["layout-index.json"]=e(2),t["docs-avatar.json"]=e(293),t["layout-index.json"]=e(2),t["docs-badge.json"]=e(294),t["layout-index.json"]=e(2),t["docs-button.json"]=e(295),t["layout-index.json"]=e(2),t["docs-card-image.json"]=e(297),t["layout-index.json"]=e(2),t["docs-card-item.json"]=e(298),t["layout-index.json"]=e(2),t["docs-card-section.json"]=e(299),t["layout-index.json"]=e(2),t["docs-card.json"]=e(296),t["layout-index.json"]=e(2),t["docs-carousel.json"]=e(300),t["layout-index.json"]=e(2),t["docs-connection-status-bar.json"]=e(301),t["layout-index.json"]=e(2),t["docs-image.json"]=e(304),t["layout-index.json"]=e(2),t["docs-masked-input.json"]=e(308),t["layout-index.json"]=e(2),t["docs-text-area.json"]=e(322),t["layout-index.json"]=e(2),t["docs-text-input.json"]=e(323),t["layout-index.json"]=e(2),t["docs-notification.json"]=e(311),t["layout-index.json"]=e(2),t["docs-list-item-part.json"]=e(306),t["layout-index.json"]=e(2),t["docs-list-item.json"]=e(305),t["layout-index.json"]=e(2),t["docs-page-control.json"]=e(312),t["layout-index.json"]=e(2),t["docs-picker-item.json"]=e(314),t["layout-index.json"]=e(2),t["docs-picker.json"]=e(313),t["layout-index.json"]=e(2),t["docs-stepper.json"]=e(317),t["layout-index.json"]=e(2),t["docs-tab-bar-item.json"]=e(319),t["layout-index.json"]=e(2),t["docs-tab-bar.json"]=e(318),t["layout-index.json"]=e(2),t["docs-tags-input.json"]=e(320),t["layout-index.json"]=e(2),t["docs-text.json"]=e(321),t["layout-index.json"]=e(2),t["docs-toast.json"]=e(324),t["layout-index.json"]=e(2),t["docs-touchable-opacity.json"]=e(325),t["layout-index.json"]=e(2),t["docs-tour.json"]=e(326),t["layout-index.json"]=e(2),t["docs-view.json"]=e(327),t["layout-index.json"]=e(2),t["docs-example-component.json"]=e(302),t["layout-index.json"]=e(2),t["docs-loader-screen.json"]=e(307),t["layout-index.json"]=e(2),t["docs-modal-top-bar.json"]=e(310),t["layout-index.json"]=e(2),t["docs-modal.json"]=e(309),t["layout-index.json"]=e(2),t["docs-state-screen.json"]=e(316),t["layout-index.json"]=e(2),t["404.json"]=e(286),t["layout-index.json"]=e(2),t["docs.json"]=e(288),t["layout-index.json"]=e(2),t["index.json"]=e(328),t["layout-index.json"]=e(2),t["modifiers.json"]=e(329),t["layout-index.json"]=e(2),t["404-html.json"]=e(287),t),o.layouts={"layout---index":e(280)}},175:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function a(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function u(n,o){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?n:o}function r(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);n.prototype=Object.create(o&&o.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(n,o):n.__proto__=o)}o.__esModule=!0;var c=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},s=e(6),i=t(s),l=e(9),p=t(l),d=e(111),m=t(d),f=e(47),h=t(f),y=e(64),j=function(n){var o=n.children;return i.default.createElement("div",null,o())},g=function(n){function o(e){a(this,o);var t=u(this,n.call(this)),r=e.location;return m.default.getPage(r.pathname)||(r=c({},r,{pathname:"/404.html"})),t.state={location:r,pageResources:m.default.getResourcesForPathname(r.pathname)},t}return r(o,n),o.prototype.componentWillReceiveProps=function(n){var o=this;if(this.state.location.pathname!==n.location.pathname){var e=m.default.getResourcesForPathname(n.location.pathname);if(e)this.setState({location:n.location,pageResources:e});else{var t=n.location;m.default.getPage(t.pathname)||(t=c({},t,{pathname:"/404.html"})),m.default.getResourcesForPathname(t.pathname,function(n){o.setState({location:t,pageResources:n})})}}},o.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(o){m.default.getPage(n.state.location.pathname)&&o.page.path===m.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:o.pageResources})})},o.prototype.shouldComponentUpdate=function(n,o){return!o.pageResources||(!(this.state.pageResources||!o.pageResources)||(this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath&&!o.pageResources.page.path))))},o.prototype.render=function(){var n=(0,y.apiRunner)("replaceComponentRenderer",{props:c({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),o=n[0];return this.props.page?this.state.pageResources?o||(0,s.createElement)(this.state.pageResources.component,c({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?o||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,c({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},o}(i.default.Component);g.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},o.default=g,n.exports=o.default},47:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=e(382),u=t(a),r=(0,u.default)();n.exports=r},176:function(n,o,e){"use strict";var t=e(63),a={};n.exports=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(e){var u=decodeURIComponent(e),r=u.slice(o.length);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),a[r])return a[r];var c=void 0;return n.some(function(n){if(n.matchPath){if((0,t.matchPath)(r,{path:n.path})||(0,t.matchPath)(r,{path:n.matchPath}))return c=n,a[r]=n,!0}else{if((0,t.matchPath)(r,{path:n.path,exact:!0}))return c=n,a[r]=n,!0;if((0,t.matchPath)(r,{path:n.path+"index.html"}))return c=n,a[r]=n,!0}return!1}),c}}},177:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=e(86),u=t(a),r=e(64),c=(0,r.apiRunner)("replaceHistory"),s=c[0],i=s||(0,u.default)();n.exports=i},287:function(n,o,e){e(1),n.exports=function(n){return e.e(0xa2868bfb69fc,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(336)})})}},286:function(n,o,e){e(1),n.exports=function(n){return e.e(0xe70826b53c04,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(337)})})}},289:function(n,o,e){e(1),n.exports=function(n){return e.e(24617197078910,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(338)})})}},290:function(n,o,e){e(1),n.exports=function(n){return e.e(0xb953c0eff0c5,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(339)})})}},291:function(n,o,e){e(1),n.exports=function(n){return e.e(0x9c122124d644,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(340)})})}},292:function(n,o,e){e(1),n.exports=function(n){return e.e(0xbda3159becd2,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(341)})})}},293:function(n,o,e){e(1),n.exports=function(n){return e.e(0xe5e50026fefc,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(342)})})}},294:function(n,o,e){e(1),n.exports=function(n){return e.e(0x5fbf862e9b99,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(343)})})}},295:function(n,o,e){e(1),n.exports=function(n){return e.e(0xc20ed2158b2f,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(344)})})}},297:function(n,o,e){e(1),n.exports=function(n){return e.e(0xc1a220579620,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(345)})})}},298:function(n,o,e){e(1),n.exports=function(n){return e.e(0xe3125ce86ff0,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(346)})})}},299:function(n,o,e){e(1),n.exports=function(n){return e.e(0xeb82e7a485cf,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(347)})})}},296:function(n,o,e){e(1),n.exports=function(n){return e.e(0xae856fa8b33c,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(348)})})}},300:function(n,o,e){e(1),n.exports=function(n){return e.e(0x5bc2cb87f905,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(349)})})}},301:function(n,o,e){e(1),n.exports=function(n){return e.e(0x93a6be8d1381,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(350)})})}},302:function(n,o,e){e(1),n.exports=function(n){return e.e(0x65a5e5f04bf9,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(351)})})}},303:function(n,o,e){e(1),n.exports=function(n){return e.e(0x65e903ca2887,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(352)})})}},304:function(n,o,e){e(1),n.exports=function(n){return e.e(38256770529657,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(353)})})}},306:function(n,o,e){e(1),n.exports=function(n){return e.e(0x96d4af1de54a,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(354)})})}},305:function(n,o,e){e(1),n.exports=function(n){return e.e(0x7a9452dd33fa,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(355)})})}},307:function(n,o,e){e(1),n.exports=function(n){return e.e(65290092824393,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(356)})})}},308:function(n,o,e){e(1),n.exports=function(n){return e.e(0x6f87ca691b10,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(357)})})}},310:function(n,o,e){e(1),n.exports=function(n){return e.e(0x5f8c31291501,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(358)})})}},309:function(n,o,e){e(1),n.exports=function(n){return e.e(0x6ec8dae75947,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(359)})})}},311:function(n,o,e){e(1),n.exports=function(n){return e.e(0xb254755552e5,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(360)})})}},312:function(n,o,e){e(1),n.exports=function(n){return e.e(0xecbdef7409e5,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(361)})})}},314:function(n,o,e){e(1),n.exports=function(n){return e.e(0x5f2c31c06df7,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(362)})})}},313:function(n,o,e){e(1),n.exports=function(n){return e.e(82926585705456,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(363)})})}},315:function(n,o,e){e(1),n.exports=function(n){return e.e(0xc2fa4b9161df,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(364)})})}},316:function(n,o,e){e(1),n.exports=function(n){return e.e(0xc3ecf1c245d3,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(365)})})}},317:function(n,o,e){e(1),n.exports=function(n){return e.e(0x6c38fe56fbb7,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(366)})})}},319:function(n,o,e){e(1),n.exports=function(n){return e.e(0xc830263b7611,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(367)})})}},318:function(n,o,e){e(1),n.exports=function(n){return e.e(0x9139c4a1fdfe,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(368)})})}},320:function(n,o,e){e(1),n.exports=function(n){return e.e(0xdc068179869a,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(369)})})}},322:function(n,o,e){e(1),n.exports=function(n){return e.e(0x9acd6b82a4c0,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(370)})})}},323:function(n,o,e){e(1),n.exports=function(n){return e.e(0xf54749275194,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(371)})})}},321:function(n,o,e){e(1),n.exports=function(n){return e.e(0x88341200835e,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(372)})})}},324:function(n,o,e){e(1),n.exports=function(n){return e.e(70006225981785,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(373)})})}},325:function(n,o,e){e(1),n.exports=function(n){return e.e(0x9bbc70707e67,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(374)})})}},326:function(n,o,e){e(1),n.exports=function(n){return e.e(0xf6c81805b6c8,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(375)})})}},327:function(n,o,e){e(1),n.exports=function(n){return e.e(0x8a05f969c5cd,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(376)})})}},288:function(n,o,e){e(1),n.exports=function(n){return e.e(0x7733ec7aff49,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(377)})})}},328:function(n,o,e){e(1),n.exports=function(n){return e.e(0x81b8806e4260,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(378)})})}},2:function(n,o,e){e(1),n.exports=function(n){return e.e(60335399758886,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(88)})})}},329:function(n,o,e){e(1),n.exports=function(n){return e.e(0x65aba756c59f,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(379)})})}},280:function(n,o,e){e(1),n.exports=function(n){return e.e(0x67ef26645b2a,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(178)})})}},111:function(n,o,e){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}o.__esModule=!0,o.publicLoader=void 0;var a=e(6),u=(t(a),e(176)),r=t(u),c=e(47),s=t(c),i=void 0,l={},p={},d={},m={},f={},h=[],y=[],j={},g=[],x={},C=function(n){return n&&n.default||n},N=void 0,b=!0;N=e(179)({getNextQueuedResources:function(){return g.slice(-1)[0]},createResourceDownload:function(n){R(n,function(){g=g.filter(function(o){return o!==n}),N.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var v=function(n,o){return x[n]>x[o]?1:x[n]<x[o]?-1:0},k=function(n,o){return j[n]>j[o]?1:j[n]<j[o]?-1:0},R=function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[o])n.nextTick(function(){e(null,m[o])});else{var t=void 0;t="component---"===o.slice(0,12)?p.components[o]:"layout---"===o.slice(0,9)?p.layouts[o]:p.json[o],t(function(n,t){m[o]=t,e(n,t)})}},P=function(o,e){f[o]?n.nextTick(function(){e(null,f[o])}):R(o,function(n,t){if(n)e(n);else{var a=C(t());f[o]=a,e(n,a)}})},w=1,_={empty:function(){y=[],j={},x={},g=[],h=[]},addPagesArray:function(n){h=n;var o="";o="/react-native-ui-lib",i=(0,r.default)(n,o)},addDevRequires:function(n){l=n},addProdRequires:function(n){p=n},dequeue:function(n){return y.pop()},enqueue:function(n){if(!h.some(function(o){return o.path===n}))return!1;var o=1/w;w+=1,j[n]?j[n]+=1:j[n]=1,_.has(n)||y.unshift(n),y.sort(k);var e=i(n);return e.jsonName&&(x[e.jsonName]?x[e.jsonName]+=1+o:x[e.jsonName]=1+o,g.indexOf(e.jsonName)!==-1||m[e.jsonName]||g.unshift(e.jsonName)),e.componentChunkName&&(x[e.componentChunkName]?x[e.componentChunkName]+=1+o:x[e.componentChunkName]=1+o,g.indexOf(e.componentChunkName)!==-1||m[e.jsonName]||g.unshift(e.componentChunkName)),g.sort(v),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:g,resourcesCount:x}},getPages:function(){return{pathArray:y,pathCount:j}},getPage:function(n){return i(n)},has:function(n){return y.some(function(o){return o===n})},getResourcesForPathname:function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};b&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(i(o)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var o=n,e=Array.isArray(o),t=0,o=e?o:o["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var a;if(e){if(t>=o.length)break;a=o[t++]}else{if(t=o.next(),t.done)break;a=t.value}var u=a;u.unregister()}window.location.reload()}})),b=!1;var t=i(o);if(!t)return console.log("A page wasn't found for \""+o+'"'),e();if(o=t.path,d[o])return n.nextTick(function(){e(d[o]),s.default.emit("onPostLoadPageResources",{page:t,pageResources:d[o]})}),d[o];s.default.emit("onPreLoadPageResources",{path:o});var a=void 0,u=void 0,r=void 0,c=function(){if(a&&u&&(!t.layoutComponentChunkName||r)){d[o]={component:a,json:u,layout:r,page:t};var n={component:a,json:u,layout:r,page:t};e(n),s.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return P(t.componentChunkName,function(n,o){n&&console.log("Loading the component for "+t.path+" failed"),a=o,c()}),P(t.jsonName,function(n,o){n&&console.log("Loading the JSON for "+t.path+" failed"),u=o,c()}),void(t.layoutComponentChunkName&&P(t.layout,function(n,o){n&&console.log("Loading the Layout for "+t.path+" failed"),r=o,c()}))},peek:function(n){return y.slice(-1)[0]},length:function(){return y.length},indexOf:function(n){return y.length-y.indexOf(n)-1}};o.publicLoader={getResourcesForPathname:_.getResourcesForPathname};o.default=_}).call(o,e(90))},380:function(n,o){n.exports=[{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-ignore.json",path:"/docs/IGNORE"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-animated-image.json",path:"/docs/AnimatedImage"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-animated-scanner.json",path:"/docs/AnimatedScanner"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-progress-bar.json",path:"/docs/ProgressBar"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-action-sheet.json",path:"/docs/ActionSheet"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-action-bar.json",path:"/docs/ActionBar"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-avatar.json",path:"/docs/Avatar"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-badge.json",path:"/docs/Badge"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-button.json",path:"/docs/Button"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-card-image.json",path:"/docs/Card.Image"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-card-item.json",path:"/docs/Card.Item"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-card-section.json",path:"/docs/Card.Section"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-card.json",path:"/docs/Card"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-carousel.json",path:"/docs/Carousel"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-connection-status-bar.json",path:"/docs/ConnectionStatusBar"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-image.json",path:"/docs/Image"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-masked-input.json",path:"/docs/MaskedInput"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-text-area.json",path:"/docs/TextArea"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-text-input.json",path:"/docs/TextInput"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-notification.json",path:"/docs/Notification"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-list-item-part.json",path:"/docs/ListItem.Part"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-list-item.json",path:"/docs/ListItem"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-page-control.json",path:"/docs/PageControl"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-picker-item.json",path:"/docs/Picker.Item"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-picker.json",path:"/docs/Picker"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-stepper.json",path:"/docs/Stepper"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-tab-bar-item.json",path:"/docs/TabBar.Item"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-tab-bar.json",path:"/docs/TabBar"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-tags-input.json",path:"/docs/TagsInput"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-text.json",path:"/docs/Text"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-toast.json",path:"/docs/Toast"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-touchable-opacity.json",path:"/docs/TouchableOpacity"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-tour.json",path:"/docs/Tour"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-view.json",path:"/docs/View"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-example-component.json",path:"/docs/ExampleComponent"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-loader-screen.json",path:"/docs/LoaderScreen"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-modal-top-bar.json",path:"/docs/Modal.TopBar"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-modal.json",path:"/docs/Modal"},{componentChunkName:"component---src-templates-component-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-state-screen.json",path:"/docs/StateScreen"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs.json",path:"/docs/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-modifiers-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"modifiers.json",path:"/modifiers/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},179:function(n,o){"use strict";n.exports=function(n){var o=n.getNextQueuedResources,e=n.createResourceDownload,t=[],a=[],u=function(){var n=o();n&&(a.push(n),e(n))},r=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(o){return o!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(o){return o!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&u()},0)};return{onResourcedFinished:function(n){r({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},u=e(64),r=e(6),c=t(r),s=e(143),i=t(s),l=e(63),p=e(333),d=e(266),m=t(d),f=e(177),h=t(f),y=e(47),j=t(y),g=e(380),x=t(g),C=e(381),N=t(C),b=e(175),v=t(b),k=e(174),R=t(k),P=e(111),w=t(P);e(256),window.___emitter=j.default,w.default.addPagesArray(x.default),w.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=w.default,window.matchPath=l.matchPath;var _=N.default.reduce(function(n,o){return n[o.fromPath]=o,n},{}),E=function(n){var o=_[n];return null!=o&&(h.default.replace(o.toPath),!0)};E(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,o){E(n.pathname)||(0,u.apiRunner)("onRouteUpdate",{location:n,action:o})}))}function o(n,o){var e=o.location.pathname,t=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:e});if(t.length>0)return t[0];if(n){var a=n.location.pathname;if(a===e)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&e(180);var t=function(n){function o(e){e.page.path===w.default.getPage(n).path&&(j.default.off("onPostLoadPageResources",o),clearTimeout(t),window.___history.push(n))}var e=_[n];if(e&&(n=e.toPath),window.location.pathname!==n){var t=setTimeout(function(){j.default.off("onPostLoadPageResources",o),j.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);w.default.getResourcesForPathname(n)?(clearTimeout(t),window.___history.push(n)):j.default.on("onPostLoadPageResources",o)}};window.___navigateTo=t,(0,u.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var s=(0,u.apiRunner)("replaceRouterComponent",{history:h.default})[0],d=function(n){var o=n.children;return c.default.createElement(l.Router,{history:h.default},o)},f=(0,l.withRouter)(v.default);w.default.getResourcesForPathname(window.location.pathname,function(){var e=function(){return(0,r.createElement)(s?s:d,null,(0,r.createElement)(p.ScrollContext,{shouldUpdateScroll:o},(0,r.createElement)(f,{layout:!0,children:function(o){return(0,r.createElement)(l.Route,{render:function(e){n(e.history);var t=o?o:e;return w.default.getPage(t.location.pathname)?(0,r.createElement)(v.default,a({page:!0},t)):(0,r.createElement)(v.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,u.apiRunner)("wrapRootComponent",{Root:e},e)[0];(0,m.default)(function(){return i.default.render(c.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},381:function(n,o){n.exports=[]},180:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=e(47),u=t(a),r="/";r="/react-native-ui-lib/","serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var o=n.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){
switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},266:function(n,o,e){!function(o,e){n.exports=e()}("domready",function(){var n,o=[],e=document,t=e.documentElement.doScroll,a="DOMContentLoaded",u=(t?/^loaded|^c/:/^loaded|^i|^c/).test(e.readyState);return u||e.addEventListener(a,n=function(){for(e.removeEventListener(a,n),u=1;n=o.shift();)n()}),function(n){u?setTimeout(n,0):o.push(n)}})},1:function(n,o,e){"use strict";function t(){function n(n){var o=t.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(n,0)})}var o,t=document.querySelector("head"),a=e.e,u=e.s;e.e=function(t,r){var c=!1,s=!0,i=function(n){r&&(r(e,n),r=null)};return!u&&o&&o[t]?void i(!0):(a(t,function(){c||(c=!0,s?setTimeout(function(){i()}):i())}),void(c||(s=!1,n(function(){c||(c=!0,u?u[t]=void 0:(o||(o={}),o[t]=!0),i(!0))}))))}}t()},140:function(n,o){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,i=s&&s(Object);n.exports=function n(o,l,p){if("string"!=typeof l){if(i){var d=s(l);d&&d!==i&&n(o,d,p)}var m=u(l);r&&(m=m.concat(r(l)));for(var f=0;f<m.length;++f){var h=m[f];if(!(e[h]||t[h]||p&&p[h])){var y=c(l,h);try{a(o,h,y)}catch(n){}}}return o}return o}},382:function(n,o){function e(n){return n=n||Object.create(null),{on:function(o,e){(n[o]||(n[o]=[])).push(e)},off:function(o,e){n[o]&&n[o].splice(n[o].indexOf(e)>>>0,1)},emit:function(o,e){(n[o]||[]).map(function(n){n(e)}),(n["*"]||[]).map(function(n){n(o,e)})}}}n.exports=e},90:function(n,o){function e(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function a(n){if(l===setTimeout)return setTimeout(n,0);if((l===e||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(o){try{return l.call(null,n,0)}catch(o){return l.call(this,n,0)}}}function u(n){if(p===clearTimeout)return clearTimeout(n);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(o){try{return p.call(null,n)}catch(o){return p.call(this,n)}}}function r(){h&&m&&(h=!1,m.length?f=m.concat(f):y=-1,f.length&&c())}function c(){if(!h){var n=a(r);h=!0;for(var o=f.length;o;){for(m=f,f=[];++y<o;)m&&m[y].run();y=-1,o=f.length}m=null,h=!1,u(n)}}function s(n,o){this.fun=n,this.array=o}function i(){}var l,p,d=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:e}catch(n){l=e}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(n){p=t}}();var m,f=[],h=!1,y=-1;d.nextTick=function(n){var o=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)o[e-1]=arguments[e];f.push(new s(n,o)),1!==f.length||h||a(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=i,d.addListener=i,d.once=i,d.off=i,d.removeListener=i,d.removeAllListeners=i,d.emit=i,d.prependListener=i,d.prependOnceListener=i,d.listeners=function(n){return[]},d.binding=function(n){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(n){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},281:function(n,o,e){e(1),n.exports=function(n){return e.e(0x9427c64ab85d,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(183)})})}},282:function(n,o,e){e(1),n.exports=function(n){return e.e(0xc87e84adc828,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(184)})})}},283:function(n,o,e){e(1),n.exports=function(n){return e.e(35783957827783,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(185)})})}},284:function(n,o,e){e(1),n.exports=function(n){return e.e(0x7253390839ba,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(186)})})}},285:function(n,o,e){e(1),n.exports=function(n){return e.e(0xc916bde7a8ed,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(187)})})}}});
//# sourceMappingURL=app-0b65d1bab08f19327134.js.map