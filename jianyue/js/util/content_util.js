function sendMessageToBackground(e){chrome.runtime.sendMessage({greeting:e},function(e){e&&e.msg&&tip(e.msg)})}function tip(e,t){let n=`<div class='jm-tip'><span class='jm-tip-text'>${e||""}</span><span class='jm-tip-close'>x</span></div>`;$("body").prepend(n),$(".jm-tip span.jm-tip-text").html(e||""),setTimeout(()=>{$(".jm-tip").fadeOut()},5e3)}function loginMsg(e){var t=$('<div class="plugin-title">在此页面登录成功'+e+"后，该帐号会自动绑定至简媒「 + 」</div>");$("body").prepend(t)}function infoMsg(e){let t=`<div id='jm-infoMsg'>${e}</div>`;$("body").prepend(t)}function cookieToJson(e){let t=e.split(";"),n={};return t.forEach(e=>{let t=e.split("=");t[0]=t[0].trim(),n[t[0]]=t[1]}),n}function virtualEvent(e){let t=document.createEvent("MouseEvents");t.initEvent("click",!0,!0),document.querySelector(`${e}`).dispatchEvent(t)}function cookieToJson(e){let t=e.split(";"),n={};return t.forEach(e=>{let t=e.split("=");t[0]=t[0].trim(),n[t[0]]=t[1]}),n}function getAppid(e){let t;if("企鹅号"===e){t=cookieToJson(document.cookie).userid}else"搜狐号"===e?t=JSON.parse(window.localStorage.currentAccount).id:"大鱼号"===e?t=document.body.getAttribute("jm-appid"):"大风号"===e?t=document.body.getAttribute("jm-appid"):"头条号"===e?t=JSON.parse(window.localStorage.getItem("/get_media_info/")).data.media.id:"快传号"===e?t=document.body.getAttribute("jm-appid"):"北京时间"===e?t=document.body.getAttribute("jm-appid"):"一点号"===e?t=document.body.getAttribute("jm-appid"):"百家号"===e?t=document.body.getAttribute("jm-appid"):"新浪看点"===e?t=document.body.getAttribute("jm-appid"):"网易号"===e?t=location.hash.split("wemediaId=")[1]:"趣头条"===e?t=localStorage.userId:"微博"===e&&(t=document.body.getAttribute("jm-appid"));return t}function log(e,t){window.collectEvent("config",{log:!1,evtParams:{}}),chrome.storage.local.get("userPhone",n=>{let i=`${(new Date).getFullYear()}-${(new Date).getMonth()+1<10?`0${(new Date).getMonth()+1}`:(new Date).getMonth()+1}-${(new Date).getDate()<10?`0${(new Date).getDate()}`:(new Date).getDate()} ${(new Date).getHours()<10?`0${(new Date).getHours()}`:(new Date).getHours()}:${(new Date).getMinutes()<10?`0${(new Date).getMinutes()}`:(new Date).getMinutes()}:${(new Date).getSeconds()<10?`0${(new Date).getSeconds()}`:(new Date).getSeconds()}`,o={all:JSON.stringify({ref:e,errorMsg:t||"正常信息",user:n.userPhone,time:i,timeStamp:(new Date).getTime(),version:chrome.runtime.getManifest().version}),ref:e,errorMsg:t||"正常信息",user:n.userPhone,time:i,timeStamp:(new Date).getTime(),version:chrome.runtime.getManifest().version};window.collectEvent("ext_log",{...o}),window.collectEvent("send")})}$.request=function(){var e={};function t(t){var n={};return e[t]?e[t]:(n.queryString=function(){for(var e,n={},i=function(e){return decodeURIComponent(e.replace(/\+/g," "))},o=t.substring(t.indexOf("?")+1),r=/([^&=]+)=?([^&]*)/g;e=r.exec(o);)n[i(e[1])]=i(e[2]);return n}(),n.getUrl=function(){var e=t.substring(0,t.indexOf("?")+1);for(var i in n.queryString)e+=i+"="+n.queryString[i]+"&";return e.lastIndexOf("&")==e.length-1?e.substring(0,e.lastIndexOf("&")):e},e[t]=n,n)}return $.extend(t,t(window.location.href)),t}(),$("body").on("click",".jm-tip-close",function(){$(".jm-tip").fadeOut()});