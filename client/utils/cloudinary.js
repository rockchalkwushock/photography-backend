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
        e.innerHTML = "#cloudinary-overlay.with_theme { display: block; } #cloudinary-overlay { background-color: rgba(0,0,0,0.7); } #cloudinary-widget { background: #ffffff; -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0; border: none; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; } #cloudinary-navbar { background: #fff; border: none; border-bottom: 1px solid #eee; margin: 0 0 10px 0; height: 30px; } #cloudinary-navbar .source { border-color: none; border-right: 0px;border-bottom: 3px solid none; height: 30px; } #cloudinary-navbar .source .label { font-size: 14px; line-height: 22px; } #cloudinary-navbar .source .icon { display: none; } #cloudinary-navbar .source.active { background: none;border-bottom: 3px solid #037FCB; } #cloudinary-navbar .source.active .label { color: #000; } #cloudinary-widget .drag_area { background: #fff; border: 2px dashed #ddd; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; margin: 30px 20px 0px 20px; } #cloudinary-widget .drag_area.in { border-color: #01BB16 } #cloudinary-navbar .sources .icon { background-position-x: 0px; } #cloudinary-navbar .close { color: rgb(85, 85, 85); } #cloudinary-widget .button, #cloudinary-widget .button.small_button { box-sizing: border-box; color: #037FCB; background: none; border: 2px solid #037FCB; } #cloudinary-widget .button { height: 45px; width: 180px; line-height: 30px; } #cloudinary-widget .button.small_button { height: 35px; width: 140px; line-height: 25px; } #cloudinary-widget .button:hover, #cloudinary-widget .button.small_button:hover, #cloudinary-widget .upload_button_holder:hover .button { background: #037FCB; color: #fff; } #cloudinary-widget .panel { height: 479px; } #cloudinary-widget .panel.local { margin-top: 20px; } #cloudinary-widget .panel.local .drag_area .drag_content .label { color: #00619D; font-size: 22px; } #cloudinary-widget .panel.progress .thumbnails { margin-top: 4px; } #cloudinary-widget .panel.camera .form .button_holder { margin-top: 10px; margin-bottom: 10px; } #cloudinary-widget .panel.camera .note { font-weight: normal; font-size: 13px; padding: 4px 20px 4px 20px; } #cloudinary-widget .panel.camera video { border-width:0px; } #cloudinary-widget .camera .form { background:#fff; border: 1px solid #eee; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; margin: 0px 20px 0px 20px; padding-top: 10px; } #cloudinary-overlay.inline .widget { border: 1px solid #ddd; } @media screen and (max-width: 767px) { #cloudinary-widget .drag_area { border: none; background: none; } }";
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
