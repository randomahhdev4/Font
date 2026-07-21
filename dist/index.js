(()=>{
var $ = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // vendetta:@vendetta/patcher
  var require_patcher = __commonJS({
    "vendetta:@vendetta/patcher"(exports, module) {
      module.exports = vendetta.patcher;
    }
  });

  // vendetta:@vendetta/metro
  var require_metro = __commonJS({
    "vendetta:@vendetta/metro"(exports, module) {
      module.exports = vendetta.metro;
    }
  });

  // src/index.tsx
  var index_exports = {};
  __export(index_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload
  });
  var import_patcher = __toESM(require_patcher(), 1);
  var import_metro = __toESM(require_metro(), 1);

  // src/AnimatedTopoBackground.tsx
  var import_react = __require("react");
  var import_react_native = __require("react-native");
  var import_react_native_svg = __toESM(__require("react-native-svg"), 1);
  var import_jsx_runtime = __require("react/jsx-runtime");
  var AnimatedPath = import_react_native.Animated.createAnimatedComponent(import_react_native_svg.Path);
  var CONTOUR_TEMPLATES = [
    "M-50,80 C150,20 300,140 500,80 C700,20 850,140 1050,80",
    "M-50,180 C150,120 300,240 500,180 C700,120 850,240 1050,180",
    "M-50,280 C150,340 300,220 500,280 C700,340 850,220 1050,280",
    "M-50,380 C150,320 300,440 500,380 C700,320 850,440 1050,380",
    "M-50,480 C150,540 300,420 500,480 C700,540 850,420 1050,480"
  ];
  function AnimatedTopoBackground({
    color = "#6a5b9e",
    backgroundColor = "#161519",
    strokeWidth = 1.5,
    opacity = 0.4,
    speed = 18
  }) {
    const { width, height } = import_react_native.Dimensions.get("window");
    const drift = (0, import_react.useRef)(new import_react_native.Animated.Value(0)).current;
    (0, import_react.useEffect)(() => {
      const loop = import_react_native.Animated.loop(
        import_react_native.Animated.sequence([
          import_react_native.Animated.timing(drift, { toValue: 1, duration: speed * 1e3, useNativeDriver: true }),
          import_react_native.Animated.timing(drift, { toValue: 0, duration: speed * 1e3, useNativeDriver: true })
        ])
      );
      loop.start();
      return () => loop.stop();
    }, [drift, speed]);
    const translateX = drift.interpolate({ inputRange: [0, 1], outputRange: [0, 40] });
    const translateY = drift.interpolate({ inputRange: [0, 1], outputRange: [0, 25] });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react_native.Animated.View,
      {
        pointerEvents: "none",
        style: [import_react_native.StyleSheet.absoluteFill, { backgroundColor, opacity, transform: [{ translateX }, { translateY }] }],
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native_svg.default, { width: width + 100, height: height + 100, viewBox: `0 0 1000 ${height}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native_svg.G, { children: Array.from({ length: Math.ceil(height / 500) + 1 }).map(
          (_, row) => CONTOUR_TEMPLATES.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            AnimatedPath,
            {
              d: d.replace(/,(\d+)/g, (_2, y) => `,${Number(y) + row * 500}`),
              stroke: color,
              strokeWidth,
              fill: "none"
            },
            `${row}-${i}`
          ))
        ) }) })
      }
    );
  }

  // src/index.tsx
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  var Messages = (0, import_metro.findByDisplayNameLazy)("MessagesConnected");
  var unpatch = null;
  function onLoad() {
    try {
      const patch = (0, import_patcher.after)("render", Messages, (_args, ret) => {
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AnimatedTopoBackground, {}),
          ret
        ] });
      });
      unpatch = () => patch();
    } catch (e) {
      console.log("[AnimatedTopoBackground] failed to patch MessagesConnected:", e);
    }
  }
  function onUnload() {
    unpatch?.();
    unpatch = null;
  }
  return __toCommonJS(index_exports);
})();
return $;})();
