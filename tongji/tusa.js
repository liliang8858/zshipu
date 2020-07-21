var zspCaller, zspTag;
! function() {
    var c, d, e, a = !1;
    var b = [];

    ready = function(c) {
        return a || "interactive" === document.readyState || "complete" === document.readyState ? c.call(document) : b.push(function() {
            return c.call(this)
        }), this
    }

    d = function() {
        for (var a = 0, c = b.length; c > a; a++) b[a].apply(document);
        b = []
    }

    e = function() {
        a || (a = !0, d.call(window), document.removeEventListener ? document.removeEventListener("DOMContentLoaded", e, !1) : document.attachEvent && (document.detachEvent("onreadystatechange", e), window == window.top && (clearInterval(c), c = null)))
    }

    document.addEventListener ? document.addEventListener("DOMContentLoaded", e, !1) : document.attachEvent &&
        (document.attachEvent("onreadystatechange", function() {
        /loaded|complete/.test(document.readyState) && e()
    }), window == window.top && (c = setInterval(function() {
        try {
            a || document.documentElement.doScroll("left")
        } catch (b) {
            return
        }
        e()
    }, 5)))
}(), zspCaller = {
    fetch: function(a, b) {
        var c = "PushtsuaCallback_" + Math.floor(1099511627776 * Math.random());
        window[c] = this.evalCall(b);
        a = a.replace("=PushtsuaCallback_", "=" + c);
        a = a +"&itemTile="+document.title+"&referrer="+document.referrer+"&localurl="+window.location.href;
        scriptTag = document.createElement("SCRIPT");
        scriptTag.type = "text/javascript";
        scriptTag.defer = !0;
        scriptTag.src = a;
        document.getElementsByTagName("HEAD")[0].appendChild(scriptTag)
    },
    evalCall: function(a) {
        return function(b) {
            ready(function() {
                try {
                    a(b), scriptTag.parentElement.removeChild(scriptTag)
                } catch (c) {
                    zspTag.hides()
                }
            })
        }
    }
}, zspCaller.fetch("https://zshipu.com/pushtsua?jsonpCallback=PushtsuaCallback_", function(a) {
    zspTag.texts(a), zspTag.shows(),zspTag.recomm(a)
}), zspTag = {
    zsps: ["site_pv", "page_pv", "site_uv"],
    texts: function(a) {
        this.zsps.map(function(b) {
            var c = document.getElementById("pushtsua_value_" + b);
            c && (c.innerHTML = a[b])
        })
    },
    recomm:function(a){
        var itemrecom = document.getElementById(("pushtsua_recommend_list"))
        if (itemrecom){
            var items = a['recommend_list'];
            if (items){
                console.log(items)
                var itemhtml = '';
                for(var i in items){
                    itemhtml =itemhtml+ `
                    <li>
                      <p style="max-width: 100%;min-height: 1em;color: rgb(0, 0, 0);font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, &quot;PingFang SC&quot;, Cambria, Cochin, Georgia, Times, &quot;Times New Roman&quot;, serif;font-size: 16px;text-align: left;white-space: normal;background-color: rgb(255, 255, 255);box-sizing: border-box !important;overflow-wrap: break-word !important;">
                        <a href="`+items[i].Url+`" target="_blank" data-itemshowtype="0" data-linktype="2">`+items[i].Title+`</a>
                      </p>
                    </li>
                    `;
                }
                console.log(itemhtml)
                itemrecom.innerHTML = itemhtml
            }
        }
    },
    hides: function() {
        this.zsps.map(function(a) {
            var b = document.getElementById("pushtsua_container_" + a);
            b && (b.style.display = "none")
        })
    },
    shows: function() {
        this.zsps.map(function(a) {
            var b = document.getElementById("pushtsua_container_" + a);
            b && (b.style.display = "inline")
        })
    }
};