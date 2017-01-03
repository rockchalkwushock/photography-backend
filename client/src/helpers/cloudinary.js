/* eslint-disable */
!function(e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define([], e)
    : e()
}(function() {
  "use strict";
  var e,
    t,
    i,
    n = 0,
    o = window.location.search.indexOf("debug=true") > -1;
  window.jQuery
    ? i = window.jQuery
    : window.$ && window.$.fn && window.$.fn.jquery && (i = window.$);
  var a = function(e) {
      if (null == e || "object" != typeof e || e.tagName)
        return e;
      var t = e.constructor();
      for (var i in e)
        t[i] = a(e[i]);
      return t
    },
    r = function(e, t) {
      return t = a(t),
      t.kind = e,
      JSON.stringify(t)
    },
    d = function(e) {
      return JSON.parse(e)
    },
    l = function() {
      try {
        var e = document.createElement("style");
        e.type = "text/css",
        e.innerHTML = ".cloudinary-thumbnails { list-style: none; margin: 10px 0; padding: 0 } .cloudinary-thumbnails:after { clear: both; display: block; content: '' } .cloudinary-thumbnail { float: left; padding: 0; margin: 0 15px 5px 0; display: none } .cloudinary-thumbnail.active { display: block } .cloudinary-thumbnail img { border: 1px solid #01304d; border-radius: 2px; -moz-border-radius: 2px; -webkit-border-radius: 2px } .cloudinary-thumbnail span { font-size: 11px; font-family: Arial, sans-serif; line-height: 14px; border: 1px solid #aaa; max-width: 150px; word-wrap: break-word; word-break: break-all; display: inline-block; padding: 3px; max-height: 60px; overflow: hidden; color: #999; } .cloudinary-delete { vertical-align: top; font-size: 13px; text-decoration: none; padding-left: 2px; line-height: 8px; font-family: Arial, sans-serif; color: #01304d }.cloudinary-button { color: #fefeff; text-decoration: none; font-size: 18px; line-height: 28px; height: 28x; border-radius: 6px; -moz-border-radius: 6px; -webkit-border-radius: 6px; font-weight: normal; text-decoration: none;   display: inline-block; padding: 4px 30px 4px 30px; background: #0284cf; font-family: Helvetica, Arial, sans-serif;   background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRjZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjU5OGIiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);   background: -moz-linear-gradient(top,  #0284cf 0%, #02598b 100%);   background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#0284cf), color-stop(100%,#02598b));   background: -webkit-linear-gradient(top,  #0284cf 0%,#02598b 100%);   background: -o-linear-gradient(top,  #0284cf 0%,#02598b 100%);   background: -ms-linear-gradient(top,  #0284cf 0%,#02598b 100%);   background: linear-gradient(to bottom,  #0284cf 0%,#02598b 100%);   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0284cf', endColorstr='#02598b',GradientType=0 ); }.cloudinary-button:hover { background: #02598b;   background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyNTk4YiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjg0Y2YiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);   background: -moz-linear-gradient(top,  #02598b 0%, #0284cf 100%);   background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#02598b), color-stop(100%,#0284cf));   background: -webkit-linear-gradient(top,  #02598b 0%,#0284cf 100%);   background: -o-linear-gradient(top,  #02598b 0%,#0284cf 100%);   background: -ms-linear-gradient(top,  #02598b 0%,#0284cf 100%);   background: linear-gradient(to bottom,  #02598b 0%,#0284cf 100%);   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#02598b', endColorstr='#0284cf',GradientType=0 ); ";
        var t = document.getElementsByTagName("head")[0];
        t && t.appendChild(e)
      } catch (i) {
        console && console.log && console.log("Cannot initialize stylesheet: " + i)
      }
    };
  l();
  var c = function(l, c) {
    var u,
      s,
      g,
      p = n++,
      f = a(l),
      b = f.element,
      m = !!f.inline_container,
      y = !1,
      w = !1;
    delete f.element,
    f.widget_id = p;
    var h = function() {
        f.cloud_name || (f.cloud_name = e),
        !f.api_key && t && (f.api_key = t),
        f.secure = f.secure || "https:" === document.location.protocol,
        f.requireSignature = !!f.upload_signature;
        !function() {
          for (var e = !!f.upload_signature, t = e
            ? ["api_key", "cloud_name"]
            : [
              "cloud_name", "upload_preset"
            ], i = 0; i < t.length; i++)
            if (!f[t[i]])
              throw "Missing required option: " + t[i]
        }();
        u = window.document.createElement("iframe");
        var i = f.secure
            ? "https:"
            : "http:",
          n = [];
        o && n.push("debug=true"),
        m && n.push("inline=true"),
        g = f.widgetHost || i + "//widget.cloudinary.com",
        u.setAttribute("src", g + "/v/" + f.cloud_name + "/111c8850cf639b04eb523af43545feca/all?" + n.join("&")),
        u.setAttribute("width", "100%"),
        u.setAttribute("height", "100%"),
        u.setAttribute("frameborder", "no"),
        u.style.display = "none",
        u.style.width = "100%",
        u.style.border = "none",
        m
          ? u.style.height = "520px"
          : (u.style.position = "fixed", u.style.top = "0px", u.style.left = "0px", u.style.height = "100%", u.style.background = "transparent", u.style.zIndex = "1000000"),
        v(u, "load", function() {
          C("init", f),
          w = !0,
          y && (u.style.display = "block", u.focus(), C("open", {}))
        }),
        v(window, "message", x);
        var a = function() {
            if (!m)
              return document.body;
            if ("string" == typeof f.inline_container) {
              var e = document.querySelector(f.inline_container);
              if (e)
                return e;
              throw "Element Not Found (" + f.inline_container + ")"
            }
            return f.inline_container
          },
          r = a();
        r.appendChild(u),
        m || v(window.document, "keyup", function(e) {
          27 == e.keyCode && _()
        }),
        b && I()
      },
      I = function() {
        b.style.display = "none";
        var e = window.document.createElement("a");
        e.setAttribute("class", f.button_class || "cloudinary-button"),
        e.setAttribute("href", "#"),
        e.innerHTML = f.button_caption || "Upload image",
        b.parentNode.insertBefore(e, b.previousSibling),
        v(e, "click", function(e) {
          return k(),
          e && e.preventDefault && e.preventDefault(),
          e && e.stopPropagation && e.stopPropagation(),
          !1
        }),
        !f.field_name && b.getAttribute("name") && "" != b.getAttribute("name") && (f.field_name = b.getAttribute("name"))
      },
      v = function(e, t, i) {
        e.addEventListener
          ? e.addEventListener(t, i, !1)
          : e.attachEvent("on" + t, i)
      },
      k = function() {
        y = !0,
        s = window.document.body.style.overflow,
        m || (window.document.body.style.overflow = "hidden"),
        w && (u.style.display = "block", u.focus(), C("open", {}))
      },
      x = function(e) {
        if (e.origin.match(/cloudinary\.com/)) {
          var t;
          try {
            t = d(e.data)
          } catch (n) {
            return
          }
          if (t.widget_id == p)
            switch (t.kind) {
              case "fileuploadsuccess":
                i && i(b || f.form || document).trigger("cloudinarywidgetfileuploadsuccess", [t.result]);
                break;
              case "success":
                f.keep_widget_open || m || _(),
                A(t.result),
                c && c(null, t.result),
                i && i(b || f.form || document).trigger("cloudinarywidgetsuccess", [t.result]);
                break;
              case "error":
                f.keep_widget_open || m || _(),
                c && c(t),
                i && i(b || f.form || document).trigger("cloudinarywidgeterror", t);
                break;
              case "closed":
                _();
                var o = {
                  message: "User closed widget"
                };
                c && c(o),
                i && i(b || f.form || document).trigger("cloudinarywidgetclosed", o);
                break;
              case "get-signature":
                var r = f.upload_signature;
                if ("string" == typeof r)
                  C("signature", {signature: r});
                else if ("function" == typeof r) {
                  var l = a(t);
                  delete l.widget_id,
                  delete l.kind,
                  delete l.file,
                  r(function(e) {
                    C("signature", {signature: e})
                  }, l)
                }
            }
          }
      },
      C = function(e, t) {
        u.contentWindow.postMessage(r(e, t), g)
      },
      _ = function() {
        u.style.display = "none",
        window.document.body.style.overflow = s,
        y = !1
      },
      A = function(e) {
        if (i) {
          var t = f.form;
          !t && t !== !1 && b && (t = i(b).closest("form"));
          var n = f.field_name || "image";
          if (t && t.length && (i(t).find('input[name="' + n + '"]').remove(), i.each(e, function(e, o) {
            var a = [o.resource_type, o.type, o.path].join("/") + "#" + o.signature;
            i("<input />").addClass("cloudinary-hidden-field").attr({type: "hidden", name: n, "data-cloudinary-public-id": o.public_id}).val(a).data("cloudinary", o).appendTo(t)
          })), f.thumbnails !== !1 && (f.thumbnails || b)) {
            var o = i("<ul></ul>").addClass("cloudinary-thumbnails");
            i.each(e, function(e, t) {
              var n = i("<li></li>").addClass("cloudinary-thumbnail").data("cloudinary", t);
              n.append(t.thumbnail_url
                ? i("<img />").attr("src", t.thumbnail_url)
                : i("<span></span>").text(t.public_id)),
              t.delete_token && n.append(i("<a></a>").addClass("cloudinary-delete").attr("href", "#").text("\xd7")),
              n.find("img").on("load", function() {
                n.addClass("active")
              }),
              o.append(n)
            }),
            o.find("li").length > 0 && (f.thumbnails
              ? i(f.thumbnails).append(o)
              : i(b).after(o)),
            o.find(".cloudinary-delete").click(function(e) {
              e.preventDefault();
              var o = i(this).parents(".cloudinary-thumbnail").data("cloudinary"),
                a = S(o.delete_token);
              if (a && a.always(function(e) {
                200 == e.status && i(b || f.form || document).trigger("cloudinarywidgetdeleted", o)
              }), i(this).parents(".cloudinary-thumbnail").hide("slow"), t) {
                var r = i(t).find('input[name="' + n + '"][data-cloudinary-public-id="' + o.public_id + '"].cloudinary-hidden-field');
                i(t).find('input[name="' + n + '"].cloudinary-hidden-field').length > 1
                  ? i(r).remove()
                  : i(r).attr("data-cloudinary-public-id", "").val("").data("cloudinary", null)
              }
            })
          }
        }
      },
      S = function(e, t) {
        if (i) {
          t = t || {};
          var n = t.url;
          n || (n = "https://api.cloudinary.com/v1_1/" + f.cloud_name + "/delete_by_token");
          var o = i.support.xhrFileUpload
            ? "json"
            : "iframe json";
          return i.ajax({
            url: n,
            method: "POST",
            data: {
              token: e
            },
            headers: {
              "X-Requested-With": "XMLHttpRequest"
            },
            dataType: o
          })
        }
      };
    return h(), {
      open: function() {
        return k(),
        this
      },
      close: _
    }
  };
  window.cloudinary = window.cloudinary || {},
  window.cloudinary.openUploadWidget = function(e, t) {
    return c(e, t).open()
  },
  window.cloudinary.createUploadWidget = function(e, t) {
    return c(e, t)
  },
  window.cloudinary.applyUploadWidget = function(e, t, i) {
    var n = a(t);
    return n.element = e,
    c(n, i)
  },
  window.cloudinary.setCloudName = function(t) {
    e = t
  },
  window.cloudinary.setAPIKey = function(e) {
    t = e
  },
  i && (i.fn.cloudinary_upload_widget = function(e, t) {
    window.cloudinary.applyUploadWidget(i(this)[0], e, t)
  })
});
