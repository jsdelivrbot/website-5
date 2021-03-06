webpackJsonp([6],{"./app/components/SearchResult/index.js":function(e,o,n){"use strict";function t(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function r(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function s(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}function a(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function i(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function l(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0});var c=n("./node_modules/react/index.js"),u=n.n(c),p=n("./app/components/ChannelListItem/Loadable.js"),d=n("./app/components/VideoListItem/Loadable.js"),f=n("./app/actions/ChannelActions.js"),h=n("./app/stores/ChannelStore.js"),m=n("./node_modules/jquery/dist/jquery.js"),y=n.n(m),v=(n("./app/components/SearchResultList/SearchResultList.css"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var s=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&s)for(var i in s)void 0===n[i]&&(n[i]=s[i]);else n||(n=s||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}()),b=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}(),w=v("div",{className:"row"},void 0,v("div",{className:"col-md-1"}),v("div",{className:"col-md-10"},void 0,v("center",{},void 0,"No channels or videos match the search query!")),v("div",{className:"col-md-1"})),j=v("div",{className:"col-md-1"}),S=v("center",{className:"loadMore"},void 0,"Loading more channels ..."),g=v("div",{className:"col-md-1"}),_=function(e){function o(e){t(this,o);var n=r(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return n.state=h.a.getState(),n.onChange=n.onChange.bind(n),n}return s(o,e),b(o,[{key:"componentDidMount",value:function(){h.a.listen(this.onChange),this.props.query&&(y()("#search-bar").val(this.props.query),window.setTimeout(function(){y()("#search-bar").focus()},1)),f.a.searchChannels(this.props.query)}},{key:"componentWillUnmount",value:function(){h.a.unlisten(this.onChange)}},{key:"componentWillReceiveProps",value:function(e){this.props.query!==e.query&&f.a.searchChannels(e.query)}},{key:"onChange",value:function(e){this.setState(e)}},{key:"render",value:function(){if(0===this.state.results.length)return w;var e=[];for(var o in this.state.results){var n=this.state.results[o];"channel"===n.type?e.push(v(p.a,{channel:n},"cli-"+n.id)):e.push(v(d.a,{video:n},"vli-"+n._id))}return v("div",{className:"row"},void 0,j,v("div",{className:"col-md-10"},void 0,!0===this.state.loading?S:e),g)}}]),o}(u.a.Component),L=_,O=n("./app/components/SearchBar/index.js"),k=n("./app/components/OffsetMenu/index.js"),x=n("./app/components/Logo/index.js"),N=n("./app/components/BannerDialog/Loadable.js"),C=n("./app/components/SignInDialog/Loadable.js"),q=n("./node_modules/react-cookie/index.js"),P=n.n(q),R=n("./node_modules/react-router-dom/index.js"),T=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var s=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&s)for(var i in s)void 0===n[i]&&(n[i]=s[i]);else n||(n=s||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),U=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}(),E=T("i",{className:"fa fa-arrow-circle-up fa-3x"}),I=T(x.a,{className:"hidden-xs hidden-sm"}),M=T("center",{},void 0,T(R.Link,{to:"/signin",className:"btn btn-raised btn-sm btn-danger yt-login"},void 0,"Sign In with ",T("i",{className:"fa fa-youtube"})," YouTube")),W=T(k.a,{}),D=T(N.a,{}),$=T(C.a,{}),A=function(e){function o(e){a(this,o);var n=i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return n.state={showScrollUp:!1,me:P.a.load("me")?JSON.parse(P.a.load("me").replace("j:","")):null},n}return l(o,e),U(o,[{key:"componentDidMount",value:function(){y()(window).on("scroll",this.onWindowScroll.bind(this)),y()("#search-bar").focus()}},{key:"componentWillUnmount",value:function(){y()(window).off("scroll")}},{key:"scrollUp",value:function(){window.scrollTo(0,0)}},{key:"onWindowScroll",value:function(){this.state.showScrollUp!==y()(window).scrollTop()>100&&this.setState({showScrollUp:y()(window).scrollTop()>100})}},{key:"render",value:function(){var e=null;!0===this.state.showScrollUp&&(e=T("div",{className:"scroll-up-btn",title:"Scroll to top",onClick:this.scrollUp.bind(this)},void 0,E));var o=this.props.match.params.query;return T("div",{className:"container"},void 0,I,this.state.me?null:M,W,e,T(O.a,{history:this.props.history,query:o}),T(L,{history:this.props.history,query:o}),this.props.children,D,$)}}]),o}(u.a.Component);o.default=A},"./app/components/SearchResultList/SearchResultList.css":function(e,o,n){var t=n("./node_modules/css-loader/index.js!./app/components/SearchResultList/SearchResultList.css");"string"==typeof t&&(t=[[e.i,t,""]]);var r={};r.transform=void 0;n("./node_modules/style-loader/lib/addStyles.js")(t,r);t.locals&&(e.exports=t.locals)},"./app/components/VideoListItem/Loadable.js":function(e,o,n){"use strict";var t=n("./node_modules/react-loadable/lib/index.js"),r=n.n(t);o.a=r()({loader:function(){return n.e(23).then(n.bind(null,"./app/components/VideoListItem/index.js"))},loading:function(){return null}})},"./node_modules/css-loader/index.js!./app/components/SearchResultList/SearchResultList.css":function(e,o,n){o=e.exports=n("./node_modules/css-loader/lib/css-base.js")(void 0),o.push([e.i,".loadMore{margin-bottom:25px}",""])}});