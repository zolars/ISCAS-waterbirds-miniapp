"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _classNames2 = _interopRequireDefault(require("../helpers/classNames"));

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _defineProperty(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}(0, _baseComponent.default)({
  relations: {
    "../tabs/index": {
      type: "parent"
    }
  },
  properties: {
    prefixCls: {
      type: String,
      value: "wux-tabs__tab"
    },
    key: {
      type: String,
      value: ""
    },
    title: {
      type: String,
      value: ""
    },
    disabled: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    current: !1,
    scroll: !1
  },
  computed: {
    classes: ["prefixCls, direction, scroll, theme, current, disabled", function(e, t, r, n, a, i) {
      var o;
      return {
        wrap: (0, _classNames2.default)(e, (_defineProperty(o = {}, "".concat(e, "--").concat(t), t), _defineProperty(o, "".concat(e, "--").concat(n), n), _defineProperty(o, "".concat(e, "--scroll"), r), _defineProperty(o, "".concat(e, "--current"), a), _defineProperty(o, "".concat(e, "--disabled"), i), o)),
        title: "".concat(e, "-title"),
        bar: "".concat(e, "-bar")
      }
    }]
  },
  methods: {
    changeCurrent: function(e) {
      var t = e.current,
        r = e.scroll,
        n = e.theme,
        a = e.direction;
      this.setData({
        current: t,
        scroll: r,
        theme: n,
        direction: a
      })
    },
    onTap: function() {
      var e = this.data,
        t = e.key,
        r = e.disabled,
        n = this.getRelationNodes("../tabs/index")[0];
      !r && n && (this.triggerEvent("click", {
        key: t
      }), n.setActiveKey(t))
    }
  }
});