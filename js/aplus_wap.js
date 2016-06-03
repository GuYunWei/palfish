/*2015-10-30 10:57:54*/
!function(){function isStartWith(e,t){return 0==e.indexOf(t)}function isEndWith(e,t){var a=e.length,r=t.length;return a>=r&&e.indexOf(t)==a-r}function trim(e){return isString(e)?e.replace(/^\s+|\s+$/g,""):""}function tryToDecodeURIComponent(e,t){var a=t||"";if(e)try{a=decodeURIComponent(e)}catch(r){}return a}function obj2param(e){var t,a,r=[];for(t in e)e.hasOwnProperty(t)&&(a=""+e[t],r.push(isStartWith(t,s_plain_obj)?a:t+"="+encodeURIComponent(a)));return r.join("&")}function arr2param(e){var t,a,r,n=[],o=e.length;for(r=0;o>r;r++)t=e[r][0],a=e[r][1],n.push(isStartWith(t,s_plain_obj)?a:t+"="+encodeURIComponent(a));return n.join("&")}function arr2obj(e){var t,a,r,n={},o=e.length;for(r=0;o>r;r++)t=e[r][0],a=e[r][1],n[t]=a;return n}function isContain(e,t){return e.indexOf(t)>-1}function isNumber(e){return"number"==typeof e}function isUnDefined(e){return"undefined"==typeof e}function isString(e){return"string"==typeof e}function isArray(e){return"[object Array]"===Object.prototype.toString.call(e)}function tryToGetAttribute(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function tryToGetHref(e){var t;try{t=trim(e.getAttribute("href",2))}catch(a){}return t||""}function getExParams(){var e=doc.getElementById("tb-beacon-aplus");return tryToGetAttribute(e,"exparams").replace(/&amp;/g,"&").replace(/\buserid=/,"uidaplus=")}function getMetaTags(){return _head_node=_head_node||doc.getElementsByTagName("head")[0],_meta_nodes||(_head_node?_meta_nodes=_head_node.getElementsByTagName("meta"):[])}function parseMetaContent(e,t){var a,r,n,o=e.split(";"),i=o.length;for(a=0;i>a;a++)r=o[a].split("="),n=trim(r[0]),n&&(t[n]=tryToDecodeURIComponent(trim(r[1])))}function getCookie(e){var t=doc.cookie.match(new RegExp("\\b"+e+"=([^;]+)"));return t?t[1]:""}function getSPMFromUrl(e){var t,a=e.match(new RegExp("\\?.*spm=([\\w\\.\\-\\*]+)"));return a&&(t=a[1])&&4==t.split(".").length?t:null}function makeCacheNum(){return Math.floor(268435456*Math.random()).toString(16)}function makePVId(){var e="g_aplus_pv_id",t="",a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";if(!win[e]){for(;t.length<6;)t+=a.substr(Math.floor(62*Math.random()),1);win[e]=t}return win[e]}function getMetaAtpData(){var e,t,a,r=getMetaTags(),n=r.length;for(e=0;n>e;e++)t=r[e],"atp-beacon"==tryToGetAttribute(t,"name")&&(a=tryToGetAttribute(t,"content"),parseMetaContent(a,_atp_beacon_data));_atp_beacon_data_params=obj2param(_atp_beacon_data)}function getMetaWaiting(){var e,t,a,r=getMetaTags(),n=r.length;for(e=0;n>e;e++)if(t=r[e],"aplus-waiting"==tryToGetAttribute(t,"name")){a=tryToGetAttribute(t,"content");break}return a}function isOnePage(){var e,t,a=getMetaTags(),r=a.length,n="-1";for(e=0;r>e;e++)if(t=a[e],"isonepage"==tryToGetAttribute(t,"name")){n=tryToGetAttribute(t,"content");break}return n}function getMetaOffline(){var e,t,a,r=getMetaTags(),n=r.length;for(e=0;n>e;e++)if(t=r[e],"aplus-offline"==tryToGetAttribute(t,"name")){a=tryToGetAttribute(t,"content");break}return a}function getMetaForbidPost(){var e,t,a,r=getMetaTags(),n=r.length;for(e=0;n>e;e++)if(t=r[e],"aplus-forbidpost"==tryToGetAttribute(t,"name")){a=tryToGetAttribute(t,"content");break}return a}function makeChkSum(e){e=(e||"").split("#")[0].split("?")[0];var t=e.length,a=function(e){var t,a=e.length,r=0;for(t=0;a>t;t++)r=31*r+e.charCodeAt(t);return r};return t?a(t+"#"+e.charCodeAt(t-1)):-1}function onDOMReady(e){var t=win.KISSY;t?t.ready(e):win.jQuery?jQuery(doc).ready(e):"complete"===doc.readyState?e():addEventListener(win,"load",e)}function recordValInWindowName(){var e,t;!is_in_iframe&&is_https&&(is_login_page&&page_referrer?(e=page_referrer,t=nameStorage.getItem(KEY.NAME_STORAGE.REFERRER_PV_ID)):(e=page_url,t=pvid),nameStorage.setItem(KEY.NAME_STORAGE.REFERRER,e),nameStorage.setItem(KEY.NAME_STORAGE.REFERRER_PV_ID,t))}function addEventListener(e,t,a){e[onevent]((atta?"on":"")+t,function(e){e=e||win.event;var t=e.target||e.srcElement;a(e,t)},s_false)}function atp_inIframeException(){var e,t,a=[];for(e=0,t=a.length;t>e;e++)if(-1!=pathname.indexOf(a[e]))return s_true;var r=/^https?:\/\/[\w\.]+\.(taobao|tmall|etao|tao123|juhuasuan)\.com/i;return!r.test(page_referrer)}function cleanParams(e){var t,a,r,n,o=[],i={};for(t=e.length-1;t>=0;t--)a=e[t],r=a[0],r!=s_plain_obj&&i.hasOwnProperty(r)||(n=a[1],("aplus"==r||""!=n)&&(o.unshift([r,n]),i[r]=1));return o}function cleanParamsForWindvane(e){var t,a,r,n,o=[],i={logtype:!0,cache:!0,scr:!0,"spm-cnt":!0};for(t=e.length-1;t>=0;t--)a=e[t],r=a[0],n=a[1],isStartWith(r,s_plain_obj)||i[r]||o.unshift([r,n]);return o}function tblogSend(e,t){var a,r,n;if(t){if(t=cleanParams(t),isWindVane){n=cleanParamsForWindvane(t);var o,i={},s=(getSPMFromUrl(page_url),getSPMFromUrl(page_referrer)),l=isOnePage(),c=l.split("|"),_=c[0],u=c[1]?c[1]:"";try{r=arr2obj(n),o=JSON.stringify(r),"{}"==o&&(o="")}catch(d){o=""}i.functype="2001",i.urlpagename=u,i.url=loc.href,i.spmcnt=(spm_ab||"0.0")+".0.0",i.spmpre=s||"",i.lzsid="",i.cna=acookie_cna||"",i.extendargs=o,i.isonepage=_,WindVane.call("WVTBUserTrack","toUT",i),win[s_goldlog].windVaneData=i}else a=goldlog.send(e,t);return a}}function mkPlainKey(){return s_plain_obj+Math.random()}function addScript(e,t){var a="script",r=doc.createElement(a);r.type="text/javascript",r.async=!0,r.src=is_https?t||e:e;var n=doc.getElementsByTagName(a)[0];n.parentNode.insertBefore(r,n)}function checkLS(){var e=!1;if("localStorage"in win&&null!=win.localStorage)try{localStorage.setItem("test","test"),localStorage.removeItem("test"),e=!0}catch(t){}return e}function isUseLSProxy(){if(is_https)return!1;var e=ua.split(" Safari/");return 2!=e.length?!1:(e[1]=trim(e[1]),!isForbidPost&&checkLS()&&win.postMessage&&!e[1].match(/[\d\.]+?\s+.+/)&&ua.indexOf("AppleWebKit")>-1&&ua.match(/\bVersion\/\d+/)&&!ua.match(/\bChrome\/\d+/)&&!ua.match(/TencentTraveler|QQBrowser/)&&!ua.match(/UCBrowser|UCWEB/))}function getSPMProtocolFromMeta(){var e,t,a,r,n=getMetaTags();for(e=0,t=n.length;t>e;e++)a=n[e],r=tryToGetAttribute(a,"name"),r==s_SPM_ATTR_NAME&&(spm_protocol=tryToGetAttribute(a,s_SPM_DATA_PROTOCOL))}function getMetaSPMData(e){var t,a,r,n,o,i,s=getMetaTags();if(s)for(t=0,a=s.length;a>t;t++)if(n=s[t],o=tryToGetAttribute(n,"name"),o==e)return page_global_spm_id_origin=tryToGetAttribute(n,"content"),page_global_spm_id_origin.indexOf(":")>=0&&(r=page_global_spm_id_origin.split(":"),spm_protocol="i"==r[0]?"i":"u",page_global_spm_id_origin=r[1]),i=tryToGetAttribute(n,s_SPM_DATA_PROTOCOL),i&&(spm_protocol="i"==i?"i":"u"),spm_ab=page_global_spm_id_origin,s_true;return s_false}function ifAdd(e,t){var a,r,n,o,i=t.length;for(a=0;i>a;a++)r=t[a],n=r[0],o=r[1],o&&e.push([n,o])}function compareVersion(e,t){e=e.toString().split("."),t=t.toString().split(".");for(var a=0;a<e.length||a<t.length;a++){var r=parseInt(e[a],10),n=parseInt(t[a],10);if(window.isNaN(r)&&(r=0),window.isNaN(n)&&(n=0),n>r)return-1;if(r>n)return 1}return 0}function callback(e,t){isAndroid&&compareVersion(osVersion,"2.4.0")<0?setTimeout(function(){e&&e(t)},1):e&&e(t)}function init_getGlobalSPMId(){if(!isUnDefined(spm_ab))return spm_ab;if(spm_a&&spm_b)return spm_a=spm_a.replace(/^{(\w+)}$/g,"$1"),spm_b=spm_b.replace(/^{(\w+)}$/g,"$1"),wh_in_page=s_true,spm_ab=spm_a+"."+spm_b,getSPMProtocolFromMeta(),goldlog.spm_ab=[spm_a,spm_b],spm_ab;{var e;doc.getElementsByTagName("head")[0]}if(getMetaSPMData(s_SPM_ATTR_NAME)||getMetaSPMData("spm-id"),spm_ab=spm_ab||default_ab,!spm_ab)return spm_ab;var t,a=doc.getElementsByTagName("body");return e=spm_ab.split("."),goldlog.spm_ab=e,a=a&&a.length?a[0]:null,a&&(t=tryToGetAttribute(a,s_SPM_ATTR_NAME),t?(spm_ab=e[0]+"."+t,goldlog.spm_ab=[e[0],t]):1==e.length&&(spm_ab=default_ab)),spm_ab}function init_loadScripts(){var e="laiwang",t="/ilw/a/lwlog.js?v=140709";isContain(loc.href.split("?")[0],e)&&addScript(url_g_alicdn+t),onDOMReady(function(){setTimeout(function(){addScript(url_g_alicdn+"/sd/data_sufei/1.4.3/aplus/index.js")},1e3)})}function init_windVane(){var WV_Core={call:function(e,t,a,r,n,o){var i,s;return lib.promise&&(s=lib.promise.deferred()),i=o>0?setTimeout(function(){WV_Core.onFailure(i,{ret:"TIMEOUT"})},o):WV_Private.getSid(),a.sid=i,WV_Private.registerCall(i,r,n,s),isAndroid?compareVersion(wvVersion,"2.7.0")>=0?WV_Private.callMethodByPrompt(e,t,WV_Private.buildParam(a),i+""):WindVane_Native&&WindVane_Native.callMethod&&WindVane_Native.callMethod(e,t,WV_Private.buildParam(a),i+""):isIOS&&WV_Private.callMethodByIframe(e,t,WV_Private.buildParam(a),i+""),s?s.promise():void 0},fireEvent:function(e,t){var a=doc.createEvent("HTMLEvents");a.initEvent(e,!1,!0),a.param=WV_Private.parseParam(t),doc.dispatchEvent(a)},getParam:function(e){return WV_Private.params[PARAM_PREFIX+e]||""},onSuccess:function(e,t){clearTimeout(e);var a=WV_Private.unregisterCall(e),r=a.success,n=a.deferred,o=WV_Private.parseParam(t);callback(function(e){r&&r(e),n&&n.resolve(e)},o.value||o),WV_Private.onComplete(e)},onFailure:function(e,t){clearTimeout(e);var a=WV_Private.unregisterCall(e),r=a.failure,n=a.deferred,o=WV_Private.parseParam(t);callback(function(e){r&&r(e),n&&n.reject(e)},o),WV_Private.onComplete(e)}},WV_Private={params:{},buildParam:function(e){return e&&"object"==typeof e?JSON.stringify(e):e||""},parseParam:function(str){var obj;if(str&&"string"==typeof str)try{obj=JSON.parse(str)}catch(e){obj=eval("("+str+")")}else obj=str||{};return obj},getSid:function(){return Math.floor(Math.random()*(1<<50))+""+inc++},registerCall:function(e,t,a,r){t&&(callbackMap[SUCCESS_PREFIX+e]=t),a&&(callbackMap[FAILURE_PREFIX+e]=a),r&&(callbackMap[DEFERRED_PREFIX+e]=r)},unregisterCall:function(e){var t=SUCCESS_PREFIX+e,a=FAILURE_PREFIX+e,r=DEFERRED_PREFIX+e,n={success:callbackMap[t],failure:callbackMap[a],deferred:callbackMap[r]};return delete callbackMap[t],delete callbackMap[a],n.deferred&&delete callbackMap[r],n},useIframe:function(e,t){var a=IFRAME_PREFIX+e,r=iframePool.pop();r||(r=doc.createElement("iframe"),r.setAttribute("frameborder","0"),r.style.cssText="width:0;height:0;border:0;display:none;"),r.setAttribute("id",a),r.setAttribute("src",t),r.parentNode||setTimeout(function(){doc.body.appendChild(r)},5)},retrieveIframe:function(e){var t=IFRAME_PREFIX+e,a=doc.querySelector("#"+t);iframePool.length>=iframeLimit?doc.body.removeChild(a):iframePool.push(a)},callMethodByIframe:function(e,t,a,r){var n={"selfParam=1":1,sid:this.parseParam(a).sid};n=this.buildParam(n);var o=LOCAL_PROTOCOL+"://"+e+":"+r+"/"+t+"?"+n;this.params[PARAM_PREFIX+r]=a,this.useIframe(r,o)},callMethodByPrompt:function(e,t,a,r){var n=LOCAL_PROTOCOL+"://"+e+":"+r+"/"+t+"?"+a,o=WV_PROTOCOL+":";this.params[PARAM_PREFIX+r]=a,window.prompt(n,o)},onComplete:function(e){isIOS&&this.retrieveIframe(e),delete this.params[PARAM_PREFIX+e]}};for(var key in WV_Core)win[s_goldlog][key]=WindVane[key]=WV_Core[key]}function sendPV(e){var t,a,r=getSPMFromUrl(page_url),n=getSPMFromUrl(page_referrer),o=getCookie("tracknick"),i=getExParams();if(is_use_LS_proxy=isUseLSProxy(),loc_hash=loc.hash,loc_hash&&0==loc_hash.indexOf("#")&&(loc_hash=loc_hash.substr(1)),(!is_in_iframe||atp_inIframeException())&&(a=1==waitingMeta?7:VERSION,t=[[mkPlainKey(),"title="+escape(doc.title)],["pre",page_referrer],["cache",makeCacheNum()],["scr",screen.width+"x"+screen.height],["isbeta",a]],acookie_cna&&t.push([mkPlainKey(),"cna="+acookie_cna]),o&&t.push([mkPlainKey(),"nick="+o]),t.push(["spm-cnt",(spm_ab||"0.0")+".0.0"]),ifAdd(t,[["spm-url",r],["spm-pre",n]]),tblog_data=tblog_data.concat(t),7==a?setTimeout(function(){goldlog.launch({isWait:!0})},6e3):(tblog_data.push([mkPlainKey(),i?i:"aplus"]),ifAdd(tblog_data,[["urlokey",loc_hash],["aunbid",cookie_unb]]),e||ifAdd(tblog_data,[["auto","0"]]),win.g_aplus_pv_req=tblogSend(tblog_beacon_url,tblog_data))),is_in_iframe){getMetaAtpData();var s,l=_atp_beacon_data.on,c="1"==l?"//ac.mmstat.com/y.gif":tblog_beacon_url;"1"!=l&&"2"!=l||!(s=_atp_beacon_data.chksum)||s!==makeChkSum(page_url).toString()||tblogSend(c,tblog_data)}addEventListener(win,"beforeunload",function(){recordValInWindowName()})}var win=window,doc=document,_k="g_tb_aplus_loaded",_launch="g_tb_aplus_launch";if(!doc.getElementsByTagName("body").length)return setTimeout(arguments.callee,50),void 0;if(!win[_k]){win[_k]=1;var url_g_alicdn="//g.alicdn.com",KEY={NAME_STORAGE:{REFERRER:"wm_referrer",REFERRER_PV_ID:"refer_pv_id"}},VERSION="9",loc=location,is_https="https:"==loc.protocol,is_in_iframe=parent!==self,pathname=loc.pathname,isOffline=getMetaOffline(),isForbidPost=getMetaForbidPost(),use_protocol=is_https?"https://":"http://",tblog_beacon_base=use_protocol+"log.mmstat.com/",tblog_beacon_url=tblog_beacon_base+"m.gif",tblog_data=[["logtype",is_in_iframe?0:1]],page_url=loc.href,page_url_constant=page_url.replace(/[\?#].*/g,""),pvid=makePVId(),loc_hash=loc.hash,ua=navigator.userAgent,lib=win.lib||(win.lib={}),isIOS=/iPhone|iPad|iPod/i.test(ua),isAndroid=/Android/i.test(ua),isWindVane=/WindVane/i.test(ua),osVersion=ua.match(/(?:OS|Android)[\/\s](\d+[._]\d+(?:[._]\d+)?)/i),wvVersion=ua.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),WindVane={},WindVane_Native=win.WindVane_Native,callbackMap={},inc=1,iframePool=[],iframeLimit=3,LOCAL_PROTOCOL="hybrid",WV_PROTOCOL="wv_hybrid",IFRAME_PREFIX="iframe_",SUCCESS_PREFIX="suc_",FAILURE_PREFIX="err_",DEFERRED_PREFIX="defer_",PARAM_PREFIX="param_",page_referrer=doc.referrer,is_login_page=is_https&&(page_url.indexOf("login.m.taobao.com")>=0||page_url.indexOf("login.m.tmall.com")>=0),atta=!!doc.attachEvent,s_attachEvent="attachEvent",s_addEventListener="addEventListener",onevent=atta?s_attachEvent:s_addEventListener,s_false=!1,s_true=!0,s_plain_obj="::-plain-::",s_goldlog="goldlog",refer_pv_id,_head_node,_meta_nodes,acookie_cna=getCookie("cna"),cookie_unb=getCookie("unb"),is_use_LS_proxy=s_false,s_SPM_ATTR_NAME="data-spm",s_SPM_DATA_PROTOCOL="data-spm-protocol",wh_in_page=s_false,default_ab="0.0",page_global_spm_id_origin,spm_protocol,spm_a=win._SPM_a,spm_b=win._SPM_b,spm_ab,_microscope_data={},_atp_beacon_data={},_atp_beacon_data_params,waitingMeta=getMetaWaiting(),goldlog,nameStorage=function(){function e(){var e,t=[],o=!0;for(var _ in u)u.hasOwnProperty(_)&&(o=!1,e=u[_]||"",t.push(c(_)+s+c(e)));a.name=o?r:n+c(r)+i+t.join(l)}function t(e,t,a){e&&(e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent&&e.attachEvent("on"+t,function(t){a.call(e,t)}))}var a=window;if(a.nameStorage)return a.nameStorage;var r,n="nameStorage:",o=/^([^=]+)(?:=(.*))?$/,i="?",s="=",l="&",c=encodeURIComponent,_=decodeURIComponent,u={},d={};return function(e){if(e&&0===e.indexOf(n)){var t=e.split(/[:?]/);t.shift(),r=_(t.shift())||"";for(var a,i,s,c=t.join(""),d=c.split(l),p=0,m=d.length;m>p;p++)a=d[p].match(o),a&&a[1]&&(i=_(a[1]),s=_(a[2])||"",u[i]=s)}else r=e||""}(a.name),d.setItem=function(t,a){t&&"undefined"!=typeof a&&(u[t]=String(a),e())},d.getItem=function(e){return u.hasOwnProperty(e)?u[e]:null},d.removeItem=function(t){u.hasOwnProperty(t)&&(u[t]=null,delete u[t],e())},d.clear=function(){u={},e()},d.valueOf=function(){return u},d.toString=function(){var e=a.name;return 0===e.indexOf(n)?e:n+e},t(a,"beforeunload",function(){e()}),d}();page_referrer=doc.referrer||nameStorage.getItem(KEY.NAME_STORAGE.REFERRER)||"",osVersion=osVersion?(osVersion[1]||"0.0.0").replace(/\_/g,"."):"0.0.0",wvVersion=wvVersion?(wvVersion[1]||"0.0.0").replace(/\_/g,"."):"0.0.0",goldlog={version:VERSION,referrer:page_referrer,_d:{},_microscope_data:_microscope_data,getCookie:getCookie,tryToGetAttribute:tryToGetAttribute,tryToGetHref:tryToGetHref,isNumber:isNumber,nameStorage:nameStorage,launch:function(e){if(!win[_launch]){win[_launch]=s_true;var t,a,r,n=getExParams(),o=1==waitingMeta;e&&e.isWait&&o?(r=7,delete e.isWait):o?r=8:o||(r=5);for(t in e)e.hasOwnProperty(t)&&(a=e[t])&&tblog_data.push([t,a]);tblog_data.push(["isbeta",r]),tblog_data.push([mkPlainKey(),n?n:"aplus"]),ifAdd(tblog_data,[["urlokey",loc_hash],["aunbid",cookie_unb]]),win.g_aplus_pv_req=tblogSend(tblog_beacon_url,tblog_data)}},send:function(e,t){var a,r=new Image,n="_img_"+Math.random(),o=-1==e.indexOf("?")?"?":"&",i=t?isArray(t)?arr2param(t):obj2param(t):"";return win[n]=r,r.onload=r.onerror=function(){win[n]=null},r.src=a=i?e+o+i:e,r=null,a},record:function(e,t,a,r){r=arguments[3]||"";var n,o,i="?",s=s_false,l="//wgo.mmstat.com/",c="//wgm.mmstat.com/",_=makeCacheNum(),u="",d=(spm_ab||"0.0")+".0.0";if("ac"==e)n="//ac.mmstat.com/1.gif",s=isStartWith(r,"A")&&r.substring(1)==makeChkSum(t);else if(isStartWith(e,"/"))s=isStartWith(r,"H")&&r.substring(1)==makeChkSum(e),n=l+e.substring(1),o=2,u+="&spm-cnt="+d;else if(isEndWith(e,".gif"))n=tblog_beacon_base+e;else{if("aplus"!=e)return s_false;n=c+"mx.gif",o=1}if(!s&&"%"!=r&&makeChkSum(page_url_constant)!=r)return s_false;if(a=(a||"")+(loc_hash?"&urlokey="+encodeURIComponent(loc_hash):"")+(cookie_unb?"&aunbid="+encodeURIComponent(cookie_unb):""),0==a.indexOf("&")&&(a=a.substr(1)),n+=i+"cache="+_+"&gmkey="+encodeURIComponent(t)+"&gokey="+encodeURIComponent(a)+"&cna="+acookie_cna+"&isbeta="+VERSION+u,o&&(n+="&logtype="+o),isWindVane){var p,m={},g={gmkey:t,gokey:a,isbeta:VERSION},f=isOnePage(),b=f.split("|"),h=b[0],v=b[1]?b[1]:"";try{p=JSON.stringify(g),"{}"==p&&(p="")}catch(P){p=""}m.functype="2101",m.logkey=e,m.logkeyargs=p,m.urlpagename=v,m.url=loc.href,m.cna=acookie_cna||"",m.extendargs="",m.isonepage=h,WindVane.call("WVTBUserTrack","toUT",m)}return goldlog.send(n)},sendPV:function(){tblog_data=[["logtype",is_in_iframe?0:1]],spm_ab=void 0,spm_ab=init_getGlobalSPMId(),sendPV(!1)}},win[s_goldlog]=goldlog,init_getGlobalSPMId(),init_loadScripts(),isWindVane&&init_windVane(),sendPV(!0)}}();