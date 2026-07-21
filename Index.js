(()=>{
var $ = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

  // node_modules/react-native-svg/lib/module/fabric/NativeSvgRenderableModule.js
  var NativeSvgRenderableModule_exports = {};
  __export(NativeSvgRenderableModule_exports, {
    default: () => NativeSvgRenderableModule_default
  });
  var import_react_native3, NativeSvgRenderableModule_default;
  var init_NativeSvgRenderableModule = __esm({
    "node_modules/react-native-svg/lib/module/fabric/NativeSvgRenderableModule.js"() {
      import_react_native3 = __require("react-native");
      NativeSvgRenderableModule_default = import_react_native3.TurboModuleRegistry.getEnforcing("RNSVGRenderableModule");
    }
  });

  // node_modules/react-native-svg/lib/module/lib/extract/transform.js
  var require_transform = __commonJS({
    "node_modules/react-native-svg/lib/module/lib/extract/transform.js"(exports, module) {
      "use strict";
      function peg$subclass(child, parent) {
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
      }
      function peg$SyntaxError(message, expected, found, location) {
        this.message = message;
        this.expected = expected;
        this.found = found;
        this.location = location;
        this.name = "SyntaxError";
        if (typeof Error.captureStackTrace === "function") {
          Error.captureStackTrace(this, peg$SyntaxError);
        }
      }
      peg$subclass(peg$SyntaxError, Error);
      peg$SyntaxError.buildMessage = function(expected, found) {
        var DESCRIBE_EXPECTATION_FNS = {
          literal: function(expectation) {
            return '"' + literalEscape(expectation.text) + '"';
          },
          "class": function(expectation) {
            var escapedParts = "", i;
            for (i = 0; i < expectation.parts.length; i++) {
              escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
            }
            return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
          },
          any: function(expectation) {
            return "any character";
          },
          end: function(expectation) {
            return "end of input";
          },
          other: function(expectation) {
            return expectation.description;
          }
        };
        function hex(ch) {
          return ch.charCodeAt(0).toString(16).toUpperCase();
        }
        function literalEscape(s) {
          return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
            return "\\x0" + hex(ch);
          }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
            return "\\x" + hex(ch);
          });
        }
        function classEscape(s) {
          return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
            return "\\x0" + hex(ch);
          }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
            return "\\x" + hex(ch);
          });
        }
        function describeExpectation(expectation) {
          return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
        }
        function describeExpected(expected2) {
          var descriptions = new Array(expected2.length), i, j;
          for (i = 0; i < expected2.length; i++) {
            descriptions[i] = describeExpectation(expected2[i]);
          }
          descriptions.sort();
          if (descriptions.length > 0) {
            for (i = 1, j = 1; i < descriptions.length; i++) {
              if (descriptions[i - 1] !== descriptions[i]) {
                descriptions[j] = descriptions[i];
                j++;
              }
            }
            descriptions.length = j;
          }
          switch (descriptions.length) {
            case 1:
              return descriptions[0];
            case 2:
              return descriptions[0] + " or " + descriptions[1];
            default:
              return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
          }
        }
        function describeFound(found2) {
          return found2 ? '"' + literalEscape(found2) + '"' : "end of input";
        }
        return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
      };
      function peg$parse(input, options) {
        options = options !== void 0 ? options : {};
        var peg$FAILED = {}, peg$startRuleFunctions = {
          transformList: peg$parsetransformList
        }, peg$startRuleFunction = peg$parsetransformList, peg$c0 = function(ts) {
          return ts;
        }, peg$c1 = function(t, ts) {
          return multiply_matrices(t, ts);
        }, peg$c2 = "matrix", peg$c3 = peg$literalExpectation("matrix", false), peg$c4 = "(", peg$c5 = peg$literalExpectation("(", false), peg$c6 = ")", peg$c7 = peg$literalExpectation(")", false), peg$c8 = function(a2, b2, c2, d2, e, f) {
          return [a2, c2, e, b2, d2, f];
        }, peg$c9 = "translate", peg$c10 = peg$literalExpectation("translate", false), peg$c11 = function(tx2, ty2) {
          return [1, 0, tx2, 0, 1, ty2 || 0];
        }, peg$c12 = "scale", peg$c13 = peg$literalExpectation("scale", false), peg$c14 = function(sx, sy) {
          return [sx, 0, 0, 0, sy === null ? sx : sy, 0];
        }, peg$c15 = "rotate", peg$c16 = peg$literalExpectation("rotate", false), peg$c17 = function(angle, c2) {
          var cos = Math.cos(deg2rad2 * angle);
          var sin = Math.sin(deg2rad2 * angle);
          if (c2 !== null) {
            var x = c2[0];
            var y = c2[1];
            return [cos, -sin, cos * -x + -sin * -y + x, sin, cos, sin * -x + cos * -y + y];
          }
          return [cos, -sin, 0, sin, cos, 0];
        }, peg$c18 = "skewX", peg$c19 = peg$literalExpectation("skewX", false), peg$c20 = function(angle) {
          return [1, Math.tan(deg2rad2 * angle), 0, 0, 1, 0];
        }, peg$c21 = "skewY", peg$c22 = peg$literalExpectation("skewY", false), peg$c23 = function(angle) {
          return [1, 0, 0, Math.tan(deg2rad2 * angle), 1, 0];
        }, peg$c24 = function(f) {
          return parseFloat(f.join(""));
        }, peg$c25 = function(i) {
          return parseInt(i.join(""));
        }, peg$c26 = function(n) {
          return n;
        }, peg$c27 = function(n1, n2) {
          return [n1, n2];
        }, peg$c28 = ",", peg$c29 = peg$literalExpectation(",", false), peg$c30 = function(ds) {
          return ds.join("");
        }, peg$c31 = function(f) {
          return f.join("");
        }, peg$c32 = function(d2) {
          return d2.join("");
        }, peg$c33 = peg$otherExpectation("fractionalConstant"), peg$c34 = ".", peg$c35 = peg$literalExpectation(".", false), peg$c36 = function(d1, d2) {
          return [d1 ? d1.join("") : null, ".", d2.join("")].join("");
        }, peg$c37 = /^[eE]/, peg$c38 = peg$classExpectation(["e", "E"], false, false), peg$c39 = function(e) {
          return [e[0], e[1], e[2].join("")].join("");
        }, peg$c40 = /^[+\-]/, peg$c41 = peg$classExpectation(["+", "-"], false, false), peg$c42 = /^[0-9]/, peg$c43 = peg$classExpectation([["0", "9"]], false, false), peg$c44 = /^[ \t\r\n]/, peg$c45 = peg$classExpectation([" ", "	", "\r", "\n"], false, false), peg$currPos = 0, peg$savedPos = 0, peg$posDetailsCache = [{
          line: 1,
          column: 1
        }], peg$maxFailPos = 0, peg$maxFailExpected = [], peg$silentFails = 0, peg$result;
        if ("startRule" in options) {
          if (!(options.startRule in peg$startRuleFunctions)) {
            throw new Error(`Can't start parsing from rule "` + options.startRule + '".');
          }
          peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
        }
        function text() {
          return input.substring(peg$savedPos, peg$currPos);
        }
        function location() {
          return peg$computeLocation(peg$savedPos, peg$currPos);
        }
        function expected(description, location2) {
          location2 = location2 !== void 0 ? location2 : peg$computeLocation(peg$savedPos, peg$currPos);
          throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location2);
        }
        function error(message, location2) {
          location2 = location2 !== void 0 ? location2 : peg$computeLocation(peg$savedPos, peg$currPos);
          throw peg$buildSimpleError(message, location2);
        }
        function peg$literalExpectation(text2, ignoreCase) {
          return {
            type: "literal",
            text: text2,
            ignoreCase
          };
        }
        function peg$classExpectation(parts, inverted, ignoreCase) {
          return {
            type: "class",
            parts,
            inverted,
            ignoreCase
          };
        }
        function peg$anyExpectation() {
          return {
            type: "any"
          };
        }
        function peg$endExpectation() {
          return {
            type: "end"
          };
        }
        function peg$otherExpectation(description) {
          return {
            type: "other",
            description
          };
        }
        function peg$computePosDetails(pos) {
          var details = peg$posDetailsCache[pos], p;
          if (details) {
            return details;
          } else {
            p = pos - 1;
            while (!peg$posDetailsCache[p]) {
              p--;
            }
            details = peg$posDetailsCache[p];
            details = {
              line: details.line,
              column: details.column
            };
            while (p < pos) {
              if (input.charCodeAt(p) === 10) {
                details.line++;
                details.column = 1;
              } else {
                details.column++;
              }
              p++;
            }
            peg$posDetailsCache[pos] = details;
            return details;
          }
        }
        function peg$computeLocation(startPos, endPos) {
          var startPosDetails = peg$computePosDetails(startPos), endPosDetails = peg$computePosDetails(endPos);
          return {
            start: {
              offset: startPos,
              line: startPosDetails.line,
              column: startPosDetails.column
            },
            end: {
              offset: endPos,
              line: endPosDetails.line,
              column: endPosDetails.column
            }
          };
        }
        function peg$fail(expected2) {
          if (peg$currPos < peg$maxFailPos) {
            return;
          }
          if (peg$currPos > peg$maxFailPos) {
            peg$maxFailPos = peg$currPos;
            peg$maxFailExpected = [];
          }
          peg$maxFailExpected.push(expected2);
        }
        function peg$buildSimpleError(message, location2) {
          return new peg$SyntaxError(message, null, null, location2);
        }
        function peg$buildStructuredError(expected2, found, location2) {
          return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected2, found), expected2, found, location2);
        }
        function peg$parsetransformList() {
          var s0, s1, s2, s3, s4;
          s0 = peg$currPos;
          s1 = [];
          s2 = peg$parsewsp();
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parsewsp();
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parsetransforms();
            if (s2 === peg$FAILED) {
              s2 = null;
            }
            if (s2 !== peg$FAILED) {
              s3 = [];
              s4 = peg$parsewsp();
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parsewsp();
              }
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c0(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          return s0;
        }
        function peg$parsetransforms() {
          var s0, s1, s2, s3;
          s0 = peg$currPos;
          s1 = peg$parsetransform();
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsecommaWsp();
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsecommaWsp();
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parsetransforms();
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c1(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$parsetransform();
          }
          return s0;
        }
        function peg$parsetransform() {
          var s0;
          s0 = peg$parsematrix();
          if (s0 === peg$FAILED) {
            s0 = peg$parsetranslate();
            if (s0 === peg$FAILED) {
              s0 = peg$parsescale();
              if (s0 === peg$FAILED) {
                s0 = peg$parserotate();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseskewX();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseskewY();
                  }
                }
              }
            }
          }
          return s0;
        }
        function peg$parsematrix() {
          var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17;
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 6) === peg$c2) {
            s1 = peg$c2;
            peg$currPos += 6;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c3);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsewsp();
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsewsp();
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 40) {
                s3 = peg$c4;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c5);
                }
              }
              if (s3 !== peg$FAILED) {
                s4 = [];
                s5 = peg$parsewsp();
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$parsewsp();
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parsenumber();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parsecommaWsp();
                    if (s6 !== peg$FAILED) {
                      s7 = peg$parsenumber();
                      if (s7 !== peg$FAILED) {
                        s8 = peg$parsecommaWsp();
                        if (s8 !== peg$FAILED) {
                          s9 = peg$parsenumber();
                          if (s9 !== peg$FAILED) {
                            s10 = peg$parsecommaWsp();
                            if (s10 !== peg$FAILED) {
                              s11 = peg$parsenumber();
                              if (s11 !== peg$FAILED) {
                                s12 = peg$parsecommaWsp();
                                if (s12 !== peg$FAILED) {
                                  s13 = peg$parsenumber();
                                  if (s13 !== peg$FAILED) {
                                    s14 = peg$parsecommaWsp();
                                    if (s14 !== peg$FAILED) {
                                      s15 = peg$parsenumber();
                                      if (s15 !== peg$FAILED) {
                                        s16 = [];
                                        s17 = peg$parsewsp();
                                        while (s17 !== peg$FAILED) {
                                          s16.push(s17);
                                          s17 = peg$parsewsp();
                                        }
                                        if (s16 !== peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 41) {
                                            s17 = peg$c6;
                                            peg$currPos++;
                                          } else {
                                            s17 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                              peg$fail(peg$c7);
                                            }
                                          }
                                          if (s17 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c8(s5, s7, s9, s11, s13, s15);
                                            s0 = s1;
                                          } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                          }
                                        } else {
                                          peg$currPos = s0;
                                          s0 = peg$FAILED;
                                        }
                                      } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                      }
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          return s0;
        }
        function peg$parsetranslate() {
          var s0, s1, s2, s3, s4, s5, s6, s7, s8;
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 9) === peg$c9) {
            s1 = peg$c9;
            peg$currPos += 9;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c10);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsewsp();
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsewsp();
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 40) {
                s3 = peg$c4;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c5);
                }
              }
              if (s3 !== peg$FAILED) {
                s4 = [];
                s5 = peg$parsewsp();
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$parsewsp();
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parsenumber();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parsecommaWspNumber();
                    if (s6 === peg$FAILED) {
                      s6 = null;
                    }
                    if (s6 !== peg$FAILED) {
                      s7 = [];
                      s8 = peg$parsewsp();
                      while (s8 !== peg$FAILED) {
                        s7.push(s8);
                        s8 = peg$parsewsp();
                      }
                      if (s7 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 41) {
                          s8 = peg$c6;
                          peg$currPos++;
                        } else {
                          s8 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c7);
                          }
                        }
                        if (s8 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c11(s5, s6);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          return s0;
        }
        function peg$parsescale() {
          var s0, s1, s2, s3, s4, s5, s6, s7, s8;
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 5) === peg$c12) {
            s1 = peg$c12;
            peg$currPos += 5;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c13);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsewsp();
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsewsp();
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 40) {
                s3 = peg$c4;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c5);
                }
              }
              if (s3 !== peg$FAILED) {
                s4 = [];
                s5 = peg$parsewsp();
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$parsewsp();
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parsenumber();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parsecommaWspNumber();
                    if (s6 === peg$FAILED) {
                      s6 = null;
                    }
                    if (s6 !== peg$FAILED) {
                      s7 = [];
                      s8 = peg$parsewsp();
                      while (s8 !== peg$FAILED) {
                        s7.push(s8);
                        s8 = peg$parsewsp();
                      }
                      if (s7 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 41) {
                          s8 = peg$c6;
                          peg$currPos++;
                        } else {
                          s8 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c7);
                          }
                        }
                        if (s8 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c14(s5, s6);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          return s0;
        }
        function peg$parserotate() {
          var s0, s1, s2, s3, s4, s5, s6, s7, s8;
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 6) === peg$c15) {
            s1 = peg$c15;
            peg$currPos += 6;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c16);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsewsp();
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsewsp();
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 40) {
                s3 = peg$c4;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c5);
                }
              }
              if (s3 !== peg$FAILED) {
                s4 = [];
                s5 = peg$parsewsp();
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$parsewsp();
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parsenumber();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parsecommaWspTwoNumbers();
                    if (s6 === peg$FAILED) {
                      s6 = null;
                    }
                    if (s6 !== peg$FAILED) {
                      s7 = [];
                      s8 = peg$parsewsp();
                      while (s8 !== peg$FAILED) {
                        s7.push(s8);
                        s8 = peg$parsewsp();
                      }
                      if (s7 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 41) {
                          s8 = peg$c6;
                          peg$currPos++;
                        } else {
                          s8 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c7);
                          }
                        }
                        if (s8 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c17(s5, s6);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          return s0;
        }
        function peg$parseskewX() {
          var s0, s1, s2, s3, s4, s5, s6, s7;
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 5) === peg$c18) {
            s1 = peg$c18;
            peg$currPos += 5;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c19);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsewsp();
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsewsp();
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 40) {
                s3 = peg$c4;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c5);
                }
              }
              if (s3 !== peg$FAILED) {
                s4 = [];
                s5 = peg$parsewsp();
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$parsewsp();
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parsenumber();
                  if (s5 !== peg$FAILED) {
                    s6 = [];
                    s7 = peg$parsewsp();
                    while (s7 !== peg$FAILED) {
                      s6.push(s7);
                      s7 = peg$parsewsp();
                    }
                    if (s6 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 41) {
                        s7 = peg$c6;
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c7);
                        }
                      }
                      if (s7 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c20(s5);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          return s0;
        }
        function peg$parseskewY() {
          var s0, s1, s2, s3, s4, s5, s6, s7;
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 5) === peg$c21) {
            s1 = peg$c21;
            peg$currPos += 5;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c22);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsewsp();
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsewsp();
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 40) {
                s3 = peg$c4;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c5);
                }
              }
              if (s3 !== peg$FAILED) {
                s4 = [];
                s5 = peg$parsewsp();
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$parsewsp();
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parsenumber();
                  if (s5 !== peg$FAILED) {
                    s6 = [];
                    s7 = peg$parsewsp();
                    while (s7 !== peg$FAILED) {
                      s6.push(s7);
                      s7 = peg$parsewsp();
                    }
                    if (s6 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 41) {
                        s7 = peg$c6;
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c7);
                        }
                      }
                      if (s7 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c23(s5);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          return s0;
        }
        function peg$parsenumber() {
          var s0, s1, s2, s3;
          s0 = peg$currPos;
          s1 = peg$currPos;
          s2 = peg$parsesign();
          if (s2 === peg$FAILED) {
            s2 = null;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parsefloatingPointConstant();
            if (s3 !== peg$FAILED) {
              s2 = [s2, s3];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c24(s1);
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$currPos;
            s2 = peg$parsesign();
            if (s2 === peg$FAILED) {
              s2 = null;
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parseintegerConstant();
              if (s3 !== peg$FAILED) {
                s2 = [s2, s3];
                s1 = s2;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c25(s1);
            }
            s0 = s1;
          }
          return s0;
        }
        function peg$parsecommaWspNumber() {
          var s0, s1, s2;
          s0 = peg$currPos;
          s1 = peg$parsecommaWsp();
          if (s1 !== peg$FAILED) {
            s2 = peg$parsenumber();
            if (s2 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c26(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          return s0;
        }
        function peg$parsecommaWspTwoNumbers() {
          var s0, s1, s2, s3, s4;
          s0 = peg$currPos;
          s1 = peg$parsecommaWsp();
          if (s1 !== peg$FAILED) {
            s2 = peg$parsenumber();
            if (s2 !== peg$FAILED) {
              s3 = peg$parsecommaWsp();
              if (s3 !== peg$FAILED) {
                s4 = peg$parsenumber();
                if (s4 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c27(s2, s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          return s0;
        }
        function peg$parsecommaWsp() {
          var s0, s1, s2, s3, s4;
          s0 = peg$currPos;
          s1 = [];
          s2 = peg$parsewsp();
          if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
              s1.push(s2);
              s2 = peg$parsewsp();
            }
          } else {
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parsecomma();
            if (s2 === peg$FAILED) {
              s2 = null;
            }
            if (s2 !== peg$FAILED) {
              s3 = [];
              s4 = peg$parsewsp();
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parsewsp();
              }
              if (s3 !== peg$FAILED) {
                s1 = [s1, s2, s3];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parsecomma();
            if (s1 !== peg$FAILED) {
              s2 = [];
              s3 = peg$parsewsp();
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parsewsp();
              }
              if (s2 !== peg$FAILED) {
                s1 = [s1, s2];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
          return s0;
        }
        function peg$parsecomma() {
          var s0;
          if (input.charCodeAt(peg$currPos) === 44) {
            s0 = peg$c28;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c29);
            }
          }
          return s0;
        }
        function peg$parseintegerConstant() {
          var s0, s1;
          s0 = peg$currPos;
          s1 = peg$parsedigitSequence();
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c30(s1);
          }
          s0 = s1;
          return s0;
        }
        function peg$parsefloatingPointConstant() {
          var s0, s1, s2, s3;
          s0 = peg$currPos;
          s1 = peg$currPos;
          s2 = peg$parsefractionalConstant();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseexponent();
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              s2 = [s2, s3];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c31(s1);
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$currPos;
            s2 = peg$parsedigitSequence();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseexponent();
              if (s3 !== peg$FAILED) {
                s2 = [s2, s3];
                s1 = s2;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c32(s1);
            }
            s0 = s1;
          }
          return s0;
        }
        function peg$parsefractionalConstant() {
          var s0, s1, s2, s3;
          peg$silentFails++;
          s0 = peg$currPos;
          s1 = peg$parsedigitSequence();
          if (s1 === peg$FAILED) {
            s1 = null;
          }
          if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 46) {
              s2 = peg$c34;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c35);
              }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parsedigitSequence();
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c36(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parsedigitSequence();
            if (s1 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 46) {
                s2 = peg$c34;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c35);
                }
              }
              if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c32(s1);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
          peg$silentFails--;
          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c33);
            }
          }
          return s0;
        }
        function peg$parseexponent() {
          var s0, s1, s2, s3, s4;
          s0 = peg$currPos;
          s1 = peg$currPos;
          if (peg$c37.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c38);
            }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parsesign();
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parsedigitSequence();
              if (s4 !== peg$FAILED) {
                s2 = [s2, s3, s4];
                s1 = s2;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c39(s1);
          }
          s0 = s1;
          return s0;
        }
        function peg$parsesign() {
          var s0;
          if (peg$c40.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c41);
            }
          }
          return s0;
        }
        function peg$parsedigitSequence() {
          var s0, s1;
          s0 = [];
          s1 = peg$parsedigit();
          if (s1 !== peg$FAILED) {
            while (s1 !== peg$FAILED) {
              s0.push(s1);
              s1 = peg$parsedigit();
            }
          } else {
            s0 = peg$FAILED;
          }
          return s0;
        }
        function peg$parsedigit() {
          var s0;
          if (peg$c42.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c43);
            }
          }
          return s0;
        }
        function peg$parsewsp() {
          var s0;
          if (peg$c44.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c45);
            }
          }
          return s0;
        }
        var deg2rad2 = Math.PI / 180;
        function multiply_matrices(l, r) {
          var al = l[0];
          var cl = l[1];
          var el = l[2];
          var bl = l[3];
          var dl = l[4];
          var fl = l[5];
          var ar = r[0];
          var cr = r[1];
          var er = r[2];
          var br = r[3];
          var dr = r[4];
          var fr = r[5];
          var a2 = al * ar + cl * br;
          var c2 = al * cr + cl * dr;
          var e = al * er + cl * fr + el;
          var b2 = bl * ar + dl * br;
          var d2 = bl * cr + dl * dr;
          var f = bl * er + dl * fr + fl;
          return [a2, c2, e, b2, d2, f];
        }
        peg$result = peg$startRuleFunction();
        if (peg$result !== peg$FAILED && peg$currPos === input.length) {
          return peg$result;
        } else {
          if (peg$result !== peg$FAILED && peg$currPos < input.length) {
            peg$fail(peg$endExpectation());
          }
          throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
        }
      }
      module.exports = {
        SyntaxError: peg$SyntaxError,
        parse: peg$parse
      };
    }
  });

  // node_modules/react-native-svg/lib/module/lib/extract/transformToRn.js
  var require_transformToRn = __commonJS({
    "node_modules/react-native-svg/lib/module/lib/extract/transformToRn.js"(exports, module) {
      "use strict";
      function peg$subclass(child, parent) {
        function C() {
          this.constructor = child;
        }
        C.prototype = parent.prototype;
        child.prototype = new C();
      }
      function peg$SyntaxError(message, expected, found, location) {
        var self = Error.call(this, message);
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(self, peg$SyntaxError.prototype);
        }
        self.expected = expected;
        self.found = found;
        self.location = location;
        self.name = "SyntaxError";
        return self;
      }
      peg$subclass(peg$SyntaxError, Error);
      function peg$padEnd(str, targetLength, padString) {
        padString = padString || " ";
        if (str.length > targetLength) {
          return str;
        }
        targetLength -= str.length;
        padString += padString.repeat(targetLength);
        return str + padString.slice(0, targetLength);
      }
      peg$SyntaxError.prototype.format = function(sources) {
        var str = "Error: " + this.message;
        if (this.location) {
          var src = null;
          var k;
          for (k = 0; k < sources.length; k++) {
            if (sources[k].source === this.location.source) {
              src = sources[k].text.split(/\r\n|\n|\r/g);
              break;
            }
          }
          var s = this.location.start;
          var offset_s = this.location.source && typeof this.location.source.offset === "function" ? this.location.source.offset(s) : s;
          var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;
          if (src) {
            var e = this.location.end;
            var filler = peg$padEnd("", offset_s.line.toString().length, " ");
            var line = src[s.line - 1];
            var last = s.line === e.line ? e.column : line.length + 1;
            var hatLen = last - s.column || 1;
            str += "\n --> " + loc + "\n" + filler + " |\n" + offset_s.line + " | " + line + "\n" + filler + " | " + peg$padEnd("", s.column - 1, " ") + peg$padEnd("", hatLen, "^");
          } else {
            str += "\n at " + loc;
          }
        }
        return str;
      };
      peg$SyntaxError.buildMessage = function(expected, found) {
        var DESCRIBE_EXPECTATION_FNS = {
          literal: function(expectation) {
            return '"' + literalEscape(expectation.text) + '"';
          },
          class: function(expectation) {
            var escapedParts = expectation.parts.map(function(part) {
              return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
            });
            return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
          },
          any: function() {
            return "any character";
          },
          end: function() {
            return "end of input";
          },
          other: function(expectation) {
            return expectation.description;
          }
        };
        function hex(ch) {
          return ch.charCodeAt(0).toString(16).toUpperCase();
        }
        function literalEscape(s) {
          return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
            return "\\x0" + hex(ch);
          }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
            return "\\x" + hex(ch);
          });
        }
        function classEscape(s) {
          return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
            return "\\x0" + hex(ch);
          }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
            return "\\x" + hex(ch);
          });
        }
        function describeExpectation(expectation) {
          return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
        }
        function describeExpected(expected2) {
          var descriptions = expected2.map(describeExpectation);
          var i, j;
          descriptions.sort();
          if (descriptions.length > 0) {
            for (i = 1, j = 1; i < descriptions.length; i++) {
              if (descriptions[i - 1] !== descriptions[i]) {
                descriptions[j] = descriptions[i];
                j++;
              }
            }
            descriptions.length = j;
          }
          switch (descriptions.length) {
            case 1:
              return descriptions[0];
            case 2:
              return descriptions[0] + " or " + descriptions[1];
            default:
              return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
          }
        }
        function describeFound(found2) {
          return found2 ? '"' + literalEscape(found2) + '"' : "end of input";
        }
        return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
      };
      function peg$parse(input, options) {
        options = options !== void 0 ? options : {};
        var peg$FAILED = {};
        var peg$source = options.grammarSource;
        var peg$startRuleFunctions = {
          start: peg$parsestart
        };
        var peg$startRuleFunction = peg$parsestart;
        var peg$c0 = "matrix(";
        var peg$c1 = ")";
        var peg$c2 = "translate(";
        var peg$c3 = "scale(";
        var peg$c4 = "rotate(";
        var peg$c5 = "skewX(";
        var peg$c6 = "skewY(";
        var peg$c7 = ".";
        var peg$c8 = "e";
        var peg$r0 = /^[ \t\n\r,]/;
        var peg$r1 = /^[ \t\n\r]/;
        var peg$r2 = /^[+\-]/;
        var peg$r3 = /^[0-9]/;
        var peg$e0 = peg$otherExpectation("transform functions");
        var peg$e1 = peg$otherExpectation("transformFunctions");
        var peg$e2 = peg$otherExpectation("transform function");
        var peg$e3 = peg$otherExpectation("matrix");
        var peg$e4 = peg$literalExpectation("matrix(", false);
        var peg$e5 = peg$literalExpectation(")", false);
        var peg$e6 = peg$otherExpectation("translate");
        var peg$e7 = peg$literalExpectation("translate(", false);
        var peg$e8 = peg$otherExpectation("scale");
        var peg$e9 = peg$literalExpectation("scale(", false);
        var peg$e10 = peg$otherExpectation("rotate");
        var peg$e11 = peg$literalExpectation("rotate(", false);
        var peg$e12 = peg$otherExpectation("x, y");
        var peg$e13 = peg$otherExpectation("skewX");
        var peg$e14 = peg$literalExpectation("skewX(", false);
        var peg$e15 = peg$otherExpectation("skewY");
        var peg$e16 = peg$literalExpectation("skewY(", false);
        var peg$e17 = peg$otherExpectation("space or comma");
        var peg$e18 = peg$classExpectation([" ", "	", "\n", "\r", ","], false, false);
        var peg$e19 = peg$otherExpectation("whitespace");
        var peg$e20 = peg$classExpectation([" ", "	", "\n", "\r"], false, false);
        var peg$e21 = peg$classExpectation(["+", "-"], false, false);
        var peg$e22 = peg$classExpectation([["0", "9"]], false, false);
        var peg$e23 = peg$literalExpectation(".", false);
        var peg$e24 = peg$literalExpectation("e", false);
        var peg$f0 = function(head, tail) {
          const results = Array.isArray(head) ? head : [head];
          tail.forEach((element) => {
            if (Array.isArray(element[1])) {
              results.push(...element[1]);
            } else {
              results.push(element[1]);
            }
          });
          return results;
        };
        var peg$f1 = function(a2, b2, c2, d2, e, f, g, h, i) {
          return {
            matrix: [a2, b2, c2, d2, e, f, g, h, i]
          };
        };
        var peg$f2 = function(x, y) {
          if (y == void 0) {
            return {
              translate: x
            };
          }
          return {
            translate: [x, y]
          };
        };
        var peg$f3 = function(x, y) {
          if (y == void 0) {
            return {
              scale: x
            };
          }
          return [{
            scaleX: x
          }, {
            scaleY: y
          }];
        };
        var peg$f4 = function(x, yz) {
          if (yz !== null) {
            return {
              rotate: `${x}deg`
            };
          }
          return [{
            rotate: `${x}deg`
          }];
        };
        var peg$f5 = function(y, z) {
          return [y, z];
        };
        var peg$f6 = function(x) {
          return [{
            skewX: `${x}deg`
          }];
        };
        var peg$f7 = function(y) {
          return [{
            skewY: `${y}deg`
          }];
        };
        var peg$f8 = function() {
          return parseFloat(text());
        };
        var peg$currPos = options.peg$currPos | 0;
        var peg$savedPos = peg$currPos;
        var peg$posDetailsCache = [{
          line: 1,
          column: 1
        }];
        var peg$maxFailPos = peg$currPos;
        var peg$maxFailExpected = options.peg$maxFailExpected || [];
        var peg$silentFails = options.peg$silentFails | 0;
        var peg$result;
        if (options.startRule) {
          if (!(options.startRule in peg$startRuleFunctions)) {
            throw new Error(`Can't start parsing from rule "` + options.startRule + '".');
          }
          peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
        }
        function text() {
          return input.substring(peg$savedPos, peg$currPos);
        }
        function offset() {
          return peg$savedPos;
        }
        function range() {
          return {
            source: peg$source,
            start: peg$savedPos,
            end: peg$currPos
          };
        }
        function location() {
          return peg$computeLocation(peg$savedPos, peg$currPos);
        }
        function expected(description, location2) {
          location2 = location2 !== void 0 ? location2 : peg$computeLocation(peg$savedPos, peg$currPos);
          throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location2);
        }
        function error(message, location2) {
          location2 = location2 !== void 0 ? location2 : peg$computeLocation(peg$savedPos, peg$currPos);
          throw peg$buildSimpleError(message, location2);
        }
        function peg$literalExpectation(text2, ignoreCase) {
          return {
            type: "literal",
            text: text2,
            ignoreCase
          };
        }
        function peg$classExpectation(parts, inverted, ignoreCase) {
          return {
            type: "class",
            parts,
            inverted,
            ignoreCase
          };
        }
        function peg$anyExpectation() {
          return {
            type: "any"
          };
        }
        function peg$endExpectation() {
          return {
            type: "end"
          };
        }
        function peg$otherExpectation(description) {
          return {
            type: "other",
            description
          };
        }
        function peg$computePosDetails(pos) {
          var details = peg$posDetailsCache[pos];
          var p;
          if (details) {
            return details;
          } else {
            if (pos >= peg$posDetailsCache.length) {
              p = peg$posDetailsCache.length - 1;
            } else {
              p = pos;
              while (!peg$posDetailsCache[--p]) {
              }
            }
            details = peg$posDetailsCache[p];
            details = {
              line: details.line,
              column: details.column
            };
            while (p < pos) {
              if (input.charCodeAt(p) === 10) {
                details.line++;
                details.column = 1;
              } else {
                details.column++;
              }
              p++;
            }
            peg$posDetailsCache[pos] = details;
            return details;
          }
        }
        function peg$computeLocation(startPos, endPos, offset2) {
          var startPosDetails = peg$computePosDetails(startPos);
          var endPosDetails = peg$computePosDetails(endPos);
          var res = {
            source: peg$source,
            start: {
              offset: startPos,
              line: startPosDetails.line,
              column: startPosDetails.column
            },
            end: {
              offset: endPos,
              line: endPosDetails.line,
              column: endPosDetails.column
            }
          };
          if (offset2 && peg$source && typeof peg$source.offset === "function") {
            res.start = peg$source.offset(res.start);
            res.end = peg$source.offset(res.end);
          }
          return res;
        }
        function peg$fail(expected2) {
          if (peg$currPos < peg$maxFailPos) {
            return;
          }
          if (peg$currPos > peg$maxFailPos) {
            peg$maxFailPos = peg$currPos;
            peg$maxFailExpected = [];
          }
          peg$maxFailExpected.push(expected2);
        }
        function peg$buildSimpleError(message, location2) {
          return new peg$SyntaxError(message, null, null, location2);
        }
        function peg$buildStructuredError(expected2, found, location2) {
          return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected2, found), expected2, found, location2);
        }
        function peg$parsestart() {
          var s0, s1;
          peg$silentFails++;
          s0 = peg$parsetransformFunctions();
          peg$silentFails--;
          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e0);
            }
          }
          return s0;
        }
        function peg$parsetransformFunctions() {
          var s0, s1, s2, s3, s4, s5;
          peg$silentFails++;
          s0 = peg$currPos;
          s1 = peg$parsefunction();
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$currPos;
            s4 = peg$parse_();
            s5 = peg$parsefunction();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$currPos;
              s4 = peg$parse_();
              s5 = peg$parsefunction();
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            }
            peg$savedPos = s0;
            s0 = peg$f0(s1, s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$silentFails--;
          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e1);
            }
          }
          return s0;
        }
        function peg$parsefunction() {
          var s0, s1;
          peg$silentFails++;
          s0 = peg$parsematrix();
          if (s0 === peg$FAILED) {
            s0 = peg$parsetranslate();
            if (s0 === peg$FAILED) {
              s0 = peg$parsescale();
              if (s0 === peg$FAILED) {
                s0 = peg$parserotate();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseskewX();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseskewY();
                  }
                }
              }
            }
          }
          peg$silentFails--;
          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e2);
            }
          }
          return s0;
        }
        function peg$parsematrix() {
          var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23;
          peg$silentFails++;
          s0 = peg$currPos;
          s1 = peg$parse_();
          if (input.substr(peg$currPos, 7) === peg$c0) {
            s2 = peg$c0;
            peg$currPos += 7;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e4);
            }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();
            s4 = peg$parseNUM();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsespaceOrComma();
              s6 = peg$parseNUM();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsespaceOrComma();
                s8 = peg$parseNUM();
                if (s8 !== peg$FAILED) {
                  s9 = peg$parsespaceOrComma();
                  s10 = peg$parseNUM();
                  if (s10 !== peg$FAILED) {
                    s11 = peg$parsespaceOrComma();
                    s12 = peg$parseNUM();
                    if (s12 !== peg$FAILED) {
                      s13 = peg$parsespaceOrComma();
                      s14 = peg$parseNUM();
                      if (s14 !== peg$FAILED) {
                        s15 = peg$parsespaceOrComma();
                        s16 = peg$parseNUM();
                        if (s16 !== peg$FAILED) {
                          s17 = peg$parsespaceOrComma();
                          s18 = peg$parseNUM();
                          if (s18 !== peg$FAILED) {
                            s19 = peg$parsespaceOrComma();
                            s20 = peg$parseNUM();
                            if (s20 !== peg$FAILED) {
                              s21 = peg$parse_();
                              if (input.charCodeAt(peg$currPos) === 41) {
                                s22 = peg$c1;
                                peg$currPos++;
                              } else {
                                s22 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                  peg$fail(peg$e5);
                                }
                              }
                              if (s22 !== peg$FAILED) {
                                s23 = peg$parse_();
                                peg$savedPos = s0;
                                s0 = peg$f1(s4, s6, s8, s10, s12, s14, s16, s18, s20);
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$silentFails--;
          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e3);
            }
          }
          return s0;
        }
        function peg$parsetranslate() {
          var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
          peg$silentFails++;
          s0 = peg$currPos;
          s1 = peg$parse_();
          if (input.substr(peg$currPos, 10) === peg$c2) {
            s2 = peg$c2;
            peg$currPos += 10;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e7);
            }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();
            s4 = peg$parseNUM();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsespaceOrComma();
              s6 = peg$parseNUM();
              if (s6 === peg$FAILED) {
                s6 = null;
              }
              s7 = peg$parse_();
              if (input.charCodeAt(peg$currPos) === 41) {
                s8 = peg$c1;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e5);
                }
              }
              if (s8 !== peg$FAILED) {
                s9 = peg$parse_();
                peg$savedPos = s0;
                s0 = peg$f2(s4, s6);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$silentFails--;
          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e6);
            }
          }
          return s0;
        }
        function peg$parsescale() {
          var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
          peg$silentFails++;
          s0 = peg$currPos;
          s1 = peg$parse_();
          if (input.substr(peg$currPos, 6) === peg$c3) {
            s2 = peg$c3;
            peg$currPos += 6;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e9);
            }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();
            s4 = peg$parseNUM();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsespaceOrComma();
              s6 = peg$parseNUM();
              if (s6 === peg$FAILED) {
                s6 = null;
              }
              s7 = peg$parse_();
              if (input.charCodeAt(peg$currPos) === 41) {
                s8 = peg$c1;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e5);
                }
              }
              if (s8 !== peg$FAILED) {
                s9 = peg$parse_();
                peg$savedPos = s0;
                s0 = peg$f3(s4, s6);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$silentFails--;
          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e8);
            }
          }
          return s0;
        }
        function peg$parserotate() {
          var s0, s1, s2, s3, s4, s5, s6, s7, s8;
          peg$silentFails++;
          s0 = peg$currPos;
          s1 = peg$parse_();
          if (input.substr(peg$currPos, 7) === peg$c4) {
            s2 = peg$c4;
            peg$currPos += 7;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e11);
            }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();
            s4 = peg$parseNUM();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsetwoNumbers();
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              s6 = peg$parse_();
              if (input.charCodeAt(peg$currPos) === 41) {
                s7 = peg$c1;
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e5);
                }
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parse_();
                peg$savedPos = s0;
                s0 = peg$f4(s4, s5);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$silentFails--;
          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e10);
            }
          }
          return s0;
        }
        function peg$parsetwoNumbers() {
          var s0, s1, s2, s3, s4;
          peg$silentFails++;
          s0 = peg$currPos;
          s1 = peg$parsespaceOrComma();
          s2 = peg$parseNUM();
          if (s2 !== peg$FAILED) {
            s3 = peg$parsespaceOrComma();
            s4 = peg$parseNUM();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f5(s2, s4);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$silentFails--;
          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e12);
            }
          }
          return s0;
        }
        function peg$parseskewX() {
          var s0, s1, s2, s3, s4, s5, s6, s7;
          peg$silentFails++;
          s0 = peg$currPos;
          s1 = peg$parse_();
          if (input.substr(peg$currPos, 6) === peg$c5) {
            s2 = peg$c5;
            peg$currPos += 6;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e14);
            }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();
            s4 = peg$parseNUM();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (input.charCodeAt(peg$currPos) === 41) {
                s6 = peg$c1;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e5);
                }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                peg$savedPos = s0;
                s0 = peg$f6(s4);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$silentFails--;
          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e13);
            }
          }
          return s0;
        }
        function peg$parseskewY() {
          var s0, s1, s2, s3, s4, s5, s6, s7;
          peg$silentFails++;
          s0 = peg$currPos;
          s1 = peg$parse_();
          if (input.substr(peg$currPos, 6) === peg$c6) {
            s2 = peg$c6;
            peg$currPos += 6;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e16);
            }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();
            s4 = peg$parseNUM();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (input.charCodeAt(peg$currPos) === 41) {
                s6 = peg$c1;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e5);
                }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                peg$savedPos = s0;
                s0 = peg$f7(s4);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$silentFails--;
          if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e15);
            }
          }
          return s0;
        }
        function peg$parsespaceOrComma() {
          var s0, s1;
          peg$silentFails++;
          s0 = [];
          s1 = input.charAt(peg$currPos);
          if (peg$r0.test(s1)) {
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e18);
            }
          }
          while (s1 !== peg$FAILED) {
            s0.push(s1);
            s1 = input.charAt(peg$currPos);
            if (peg$r0.test(s1)) {
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e18);
              }
            }
          }
          peg$silentFails--;
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e17);
          }
          return s0;
        }
        function peg$parse_() {
          var s0, s1;
          peg$silentFails++;
          s0 = [];
          s1 = input.charAt(peg$currPos);
          if (peg$r1.test(s1)) {
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e20);
            }
          }
          while (s1 !== peg$FAILED) {
            s0.push(s1);
            s1 = input.charAt(peg$currPos);
            if (peg$r1.test(s1)) {
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e20);
              }
            }
          }
          peg$silentFails--;
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e19);
          }
          return s0;
        }
        function peg$parseNUM() {
          var s0, s1, s2, s3, s4, s5, s6, s7;
          s0 = peg$currPos;
          s1 = input.charAt(peg$currPos);
          if (peg$r2.test(s1)) {
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e21);
            }
          }
          if (s1 === peg$FAILED) {
            s1 = null;
          }
          s2 = peg$currPos;
          s3 = [];
          s4 = input.charAt(peg$currPos);
          if (peg$r3.test(s4)) {
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e22);
            }
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = input.charAt(peg$currPos);
            if (peg$r3.test(s4)) {
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e22);
              }
            }
          }
          if (input.charCodeAt(peg$currPos) === 46) {
            s4 = peg$c7;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e23);
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = input.charAt(peg$currPos);
            if (peg$r3.test(s6)) {
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e22);
              }
            }
            if (s6 !== peg$FAILED) {
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = input.charAt(peg$currPos);
                if (peg$r3.test(s6)) {
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e22);
                  }
                }
              }
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s3 = [s3, s4, s5];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 === peg$FAILED) {
            s2 = [];
            s3 = input.charAt(peg$currPos);
            if (peg$r3.test(s3)) {
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e22);
              }
            }
            if (s3 !== peg$FAILED) {
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = input.charAt(peg$currPos);
                if (peg$r3.test(s3)) {
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e22);
                  }
                }
              }
            } else {
              s2 = peg$FAILED;
            }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 101) {
              s4 = peg$c8;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e24);
              }
            }
            if (s4 !== peg$FAILED) {
              s5 = input.charAt(peg$currPos);
              if (peg$r2.test(s5)) {
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e21);
                }
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              s6 = [];
              s7 = input.charAt(peg$currPos);
              if (peg$r3.test(s7)) {
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e22);
                }
              }
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = input.charAt(peg$currPos);
                  if (peg$r3.test(s7)) {
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e22);
                    }
                  }
                }
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s4 = [s4, s5, s6];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            peg$savedPos = s0;
            s0 = peg$f8();
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          return s0;
        }
        peg$result = peg$startRuleFunction();
        if (options.peg$library) {
          return (
            /** @type {any} */
            {
              peg$result,
              peg$currPos,
              peg$FAILED,
              peg$maxFailExpected,
              peg$maxFailPos
            }
          );
        }
        if (peg$result !== peg$FAILED && peg$currPos === input.length) {
          return peg$result;
        } else {
          if (peg$result !== peg$FAILED && peg$currPos < input.length) {
            peg$fail(peg$endExpectation());
          }
          throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
        }
      }
      module.exports = {
        StartRules: ["start"],
        SyntaxError: peg$SyntaxError,
        parse: peg$parse
      };
    }
  });

  // node_modules/react-native-svg/lib/module/fabric/NativeSvgViewModule.js
  var NativeSvgViewModule_exports = {};
  __export(NativeSvgViewModule_exports, {
    default: () => NativeSvgViewModule_default
  });
  var import_react_native10, NativeSvgViewModule_default;
  var init_NativeSvgViewModule = __esm({
    "node_modules/react-native-svg/lib/module/fabric/NativeSvgViewModule.js"() {
      import_react_native10 = __require("react-native");
      NativeSvgViewModule_default = import_react_native10.TurboModuleRegistry.getEnforcing("RNSVGSvgViewModule");
    }
  });

  // src/index.tsx
  var src_exports = {};
  __export(src_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload
  });
  var import_patcher = __toESM(require_patcher(), 1);
  var import_metro = __toESM(require_metro(), 1);

  // src/AnimatedTopoBackground.tsx
  var import_react21 = __require("react");
  var import_react_native13 = __require("react-native");

  // node_modules/react-native-svg/lib/module/elements/Shape.js
  var import_react = __require("react");

  // node_modules/react-native-svg/lib/module/lib/SvgTouchableMixin.js
  var import_react_native = __require("react-native");
  var PRESS_RETENTION_OFFSET = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 30
  };
  var {
    Mixin
  } = import_react_native.Touchable;
  var {
    touchableHandleStartShouldSetResponder,
    touchableHandleResponderTerminationRequest,
    touchableHandleResponderGrant,
    touchableHandleResponderMove,
    touchableHandleResponderRelease,
    touchableHandleResponderTerminate,
    touchableGetInitialState
  } = Mixin;
  var SvgTouchableMixin = {
    ...Mixin,
    touchableHandleStartShouldSetResponder(e) {
      const {
        onStartShouldSetResponder
      } = this.props;
      if (onStartShouldSetResponder) {
        return onStartShouldSetResponder(e);
      } else {
        return touchableHandleStartShouldSetResponder.call(this, e);
      }
    },
    touchableHandleResponderTerminationRequest(e) {
      const {
        onResponderTerminationRequest
      } = this.props;
      if (onResponderTerminationRequest) {
        return onResponderTerminationRequest(e);
      } else {
        return touchableHandleResponderTerminationRequest.call(this, e);
      }
    },
    touchableHandleResponderGrant(e) {
      const {
        onResponderGrant
      } = this.props;
      if (onResponderGrant) {
        return onResponderGrant(e);
      } else {
        return touchableHandleResponderGrant.call(this, e);
      }
    },
    touchableHandleResponderMove(e) {
      const {
        onResponderMove
      } = this.props;
      if (onResponderMove) {
        return onResponderMove(e);
      } else {
        return touchableHandleResponderMove.call(this, e);
      }
    },
    touchableHandleResponderRelease(e) {
      const {
        onResponderRelease
      } = this.props;
      if (onResponderRelease) {
        return onResponderRelease(e);
      } else {
        return touchableHandleResponderRelease.call(this, e);
      }
    },
    touchableHandleResponderTerminate(e) {
      const {
        onResponderTerminate
      } = this.props;
      if (onResponderTerminate) {
        return onResponderTerminate(e);
      } else {
        return touchableHandleResponderTerminate.call(this, e);
      }
    },
    touchableHandlePress(e) {
      const {
        onPress
      } = this.props;
      onPress && onPress(e);
    },
    touchableHandleActivePressIn(e) {
      const {
        onPressIn
      } = this.props;
      onPressIn && onPressIn(e);
    },
    touchableHandleActivePressOut(e) {
      const {
        onPressOut
      } = this.props;
      onPressOut && onPressOut(e);
    },
    touchableHandleLongPress(e) {
      const {
        onLongPress
      } = this.props;
      onLongPress && onLongPress(e);
    },
    touchableGetPressRectOffset() {
      const {
        pressRetentionOffset
      } = this.props;
      return pressRetentionOffset || PRESS_RETENTION_OFFSET;
    },
    touchableGetHitSlop() {
      const {
        hitSlop
      } = this.props;
      return hitSlop;
    },
    touchableGetHighlightDelayMS() {
      const {
        delayPressIn
      } = this.props;
      return delayPressIn || 0;
    },
    touchableGetLongPressDelayMS() {
      const {
        delayLongPress
      } = this.props;
      return delayLongPress === 0 ? 0 : delayLongPress || 500;
    },
    touchableGetPressOutDelayMS() {
      const {
        delayPressOut
      } = this.props;
      return delayPressOut || 0;
    }
  };
  var touchKeys = Object.keys(SvgTouchableMixin);
  var touchVals = touchKeys.map((key) => SvgTouchableMixin[key]);
  var numTouchKeys = touchKeys.length;
  var SvgTouchableMixin_default = (target) => {
    for (let i = 0; i < numTouchKeys; i++) {
      const key = touchKeys[i];
      const val = touchVals[i];
      if (typeof val === "function") {
        target[key] = val.bind(target);
      } else {
        target[key] = val;
      }
    }
    target.state = touchableGetInitialState();
  };

  // node_modules/react-native-svg/lib/module/lib/extract/extractBrush.js
  var import_react_native2 = __require("react-native");

  // node_modules/react-native-svg/lib/module/lib/utils/convertPercentageColor.js
  var RGB_RGBA_PATTERN = /^rgba?\(\s*(100%|\d{1,2}(\.\d+)?%)\s*,\s*(100%|\d{1,2}(\.\d+)?%)\s*,\s*(100%|\d{1,2}(\.\d+)?%)\s*(?:,\s*(1|0(\.\d+)?|100%|\d{1,2}(\.\d+)?%)\s*)?\)$/;
  var percentTo255 = (percent) => Math.round(parseFloat(percent) * 2.55);
  var parseAlpha = (alpha) => alpha.endsWith("%") ? parseFloat(alpha) / 100 : parseFloat(alpha);
  function parsePercentageRGBColor(color) {
    const currentMatch = RGB_RGBA_PATTERN.exec(color);
    if (!currentMatch) {
      console.warn(`"${color}" is not a valid percentage rgb/rgba color`);
      return color;
    }
    const red = currentMatch[1];
    const green = currentMatch[3];
    const blue = currentMatch[5];
    const alpha = currentMatch[7];
    const rgb = `${percentTo255(red)}, ${percentTo255(green)}, ${percentTo255(blue)}`;
    return alpha ? `rgba(${rgb}, ${parseAlpha(alpha)})` : `rgb(${rgb})`;
  }
  var convertPercentageColor = (color) => {
    if (typeof color !== "string") {
      return color;
    }
    const rgbColorWithoutSpaces = color.replace(/\s/g, "");
    const isPercentageRgb = RGB_RGBA_PATTERN.test(rgbColorWithoutSpaces);
    return isPercentageRgb ? parsePercentageRGBColor(rgbColorWithoutSpaces) : color;
  };

  // node_modules/react-native-svg/lib/module/lib/extract/extractBrush.js
  var urlIdPattern = /^url\(#(.+)\)$/;
  var currentColorBrush = {
    type: 2
  };
  var contextFillBrush = {
    type: 3
  };
  var contextStrokeBrush = {
    type: 4
  };
  function extractBrush(color) {
    if (color === "none") {
      return null;
    }
    if (color === "currentColor") {
      return currentColorBrush;
    }
    if (color === "context-fill") {
      return contextFillBrush;
    }
    if (color === "context-stroke") {
      return contextStrokeBrush;
    }
    const brush = typeof color === "string" && color.match(urlIdPattern);
    if (brush) {
      return {
        type: 1,
        brushRef: brush[1]
      };
    }
    const colorToProcess = convertPercentageColor(color);
    const processedColor = (0, import_react_native2.processColor)(colorToProcess);
    if (typeof processedColor === "number") {
      return {
        type: 0,
        payload: processedColor
      };
    }
    if (typeof processedColor === "object" && processedColor !== null) {
      return {
        type: 0,
        payload: processedColor
      };
    }
    console.warn(`"${String(color)}" is not a valid color or brush`);
    return null;
  }

  // node_modules/react-native-svg/lib/module/elements/Shape.js
  var import_react_native4 = __require("react-native");

  // node_modules/react-native-svg/lib/module/lib/extract/colors.js
  var BrushProperties = ["fill", "stroke", "stopColor", "floodColor", "lightingColor"];

  // node_modules/react-native-svg/lib/module/elements/Shape.js
  function multiplyMatrices(l, r) {
    const {
      a: al,
      b: bl,
      c: cl,
      d: dl,
      e: el,
      f: fl
    } = l;
    const {
      a: ar,
      b: br,
      c: cr,
      d: dr,
      e: er,
      f: fr
    } = r;
    const a2 = al * ar + cl * br;
    const c2 = al * cr + cl * dr;
    const e = al * er + cl * fr + el;
    const b2 = bl * ar + dl * br;
    const d2 = bl * cr + dl * dr;
    const f = bl * er + dl * fr + fl;
    return {
      a: a2,
      c: c2,
      e,
      b: b2,
      d: d2,
      f
    };
  }
  function invert({
    a: a2,
    b: b2,
    c: c2,
    d: d2,
    e,
    f
  }) {
    const n = a2 * d2 - b2 * c2;
    return {
      a: d2 / n,
      b: -b2 / n,
      c: -c2 / n,
      d: a2 / n,
      e: (c2 * f - d2 * e) / n,
      f: -(a2 * f - b2 * e) / n
    };
  }
  var deg2rad = Math.PI / 180;
  var SVGMatrix = class _SVGMatrix {
    constructor(matrix) {
      if (matrix) {
        const {
          a: a2,
          b: b2,
          c: c2,
          d: d2,
          e,
          f
        } = matrix;
        this.a = a2;
        this.b = b2;
        this.c = c2;
        this.d = d2;
        this.e = e;
        this.f = f;
      } else {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.e = 0;
        this.f = 0;
      }
    }
    multiply(secondMatrix) {
      return new _SVGMatrix(multiplyMatrices(this, secondMatrix));
    }
    inverse() {
      return new _SVGMatrix(invert(this));
    }
    translate(x, y) {
      return new _SVGMatrix(multiplyMatrices(this, {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: x,
        f: y
      }));
    }
    scale(scaleFactor) {
      return new _SVGMatrix(multiplyMatrices(this, {
        a: scaleFactor,
        b: 0,
        c: 0,
        d: scaleFactor,
        e: 0,
        f: 0
      }));
    }
    scaleNonUniform(scaleFactorX, scaleFactorY) {
      return new _SVGMatrix(multiplyMatrices(this, {
        a: scaleFactorX,
        b: 0,
        c: 0,
        d: scaleFactorY,
        e: 0,
        f: 0
      }));
    }
    rotate(angle) {
      const cos = Math.cos(deg2rad * angle);
      const sin = Math.sin(deg2rad * angle);
      return new _SVGMatrix(multiplyMatrices(this, {
        a: cos,
        b: sin,
        c: -sin,
        d: cos,
        e: 0,
        f: 0
      }));
    }
    rotateFromVector(x, y) {
      const angle = Math.atan2(y, x);
      const cos = Math.cos(deg2rad * angle);
      const sin = Math.sin(deg2rad * angle);
      return new _SVGMatrix(multiplyMatrices(this, {
        a: cos,
        b: sin,
        c: -sin,
        d: cos,
        e: 0,
        f: 0
      }));
    }
    flipX() {
      return new _SVGMatrix(multiplyMatrices(this, {
        a: -1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
      }));
    }
    flipY() {
      return new _SVGMatrix(multiplyMatrices(this, {
        a: 1,
        b: 0,
        c: 0,
        d: -1,
        e: 0,
        f: 0
      }));
    }
    skewX(angle) {
      return new _SVGMatrix(multiplyMatrices(this, {
        a: 1,
        b: 0,
        c: Math.tan(deg2rad * angle),
        d: 1,
        e: 0,
        f: 0
      }));
    }
    skewY(angle) {
      return new _SVGMatrix(multiplyMatrices(this, {
        a: 1,
        b: Math.tan(deg2rad * angle),
        c: 0,
        d: 1,
        e: 0,
        f: 0
      }));
    }
  };
  function matrixTransform(matrix, point) {
    const {
      a: a2,
      b: b2,
      c: c2,
      d: d2,
      e,
      f
    } = matrix;
    const {
      x,
      y
    } = point;
    return {
      x: a2 * x + c2 * y + e,
      y: b2 * x + d2 * y + f
    };
  }
  var SVGPoint = class _SVGPoint {
    constructor(point) {
      if (point) {
        const {
          x,
          y
        } = point;
        this.x = x;
        this.y = y;
      } else {
        this.x = 0;
        this.y = 0;
      }
    }
    matrixTransform(matrix) {
      return new _SVGPoint(matrixTransform(matrix, this));
    }
  };
  var ownerSVGElement = {
    createSVGPoint() {
      return new SVGPoint();
    },
    createSVGMatrix() {
      return new SVGMatrix();
    }
  };
  var Shape = class extends import_react.Component {
    root = null;
    constructor(props) {
      super(props);
      SvgTouchableMixin_default(this);
    }
    refMethod = (instance) => {
      this.root = instance;
    };
    // Hack to make Animated work with Shape components.
    getNativeScrollRef() {
      return this.root;
    }
    setNativeProps = (props) => {
      var _this$root;
      for (const key in props) {
        if (BrushProperties.includes(key)) {
          props[key] = extractBrush(props[key]);
        }
      }
      (_this$root = this.root) === null || _this$root === void 0 || _this$root.setNativeProps(props);
    };
    /*
     * The following native methods are experimental and likely broken in some
     * ways. If you have a use case for these, please open an issue with a
     * representative example / reproduction.
     * */
    getBBox = (options) => {
      const {
        fill = true,
        stroke = true,
        markers = true,
        clipped = true
      } = options || {};
      const handle = (0, import_react_native4.findNodeHandle)(this.root);
      const RNSVGRenderableModule = (init_NativeSvgRenderableModule(), __toCommonJS(NativeSvgRenderableModule_exports)).default;
      return RNSVGRenderableModule.getBBox(handle, {
        fill,
        stroke,
        markers,
        clipped
      });
    };
    getCTM = () => {
      const handle = (0, import_react_native4.findNodeHandle)(this.root);
      const RNSVGRenderableModule = (init_NativeSvgRenderableModule(), __toCommonJS(NativeSvgRenderableModule_exports)).default;
      return new SVGMatrix(RNSVGRenderableModule.getCTM(handle));
    };
    getScreenCTM = () => {
      const handle = (0, import_react_native4.findNodeHandle)(this.root);
      const RNSVGRenderableModule = (init_NativeSvgRenderableModule(), __toCommonJS(NativeSvgRenderableModule_exports)).default;
      return new SVGMatrix(RNSVGRenderableModule.getScreenCTM(handle));
    };
    isPointInFill = (options) => {
      const handle = (0, import_react_native4.findNodeHandle)(this.root);
      const RNSVGRenderableModule = (init_NativeSvgRenderableModule(), __toCommonJS(NativeSvgRenderableModule_exports)).default;
      return RNSVGRenderableModule.isPointInFill(handle, options);
    };
    isPointInStroke = (options) => {
      const handle = (0, import_react_native4.findNodeHandle)(this.root);
      const RNSVGRenderableModule = (init_NativeSvgRenderableModule(), __toCommonJS(NativeSvgRenderableModule_exports)).default;
      return RNSVGRenderableModule.isPointInStroke(handle, options);
    };
    getTotalLength = () => {
      const handle = (0, import_react_native4.findNodeHandle)(this.root);
      const RNSVGRenderableModule = (init_NativeSvgRenderableModule(), __toCommonJS(NativeSvgRenderableModule_exports)).default;
      return RNSVGRenderableModule.getTotalLength(handle);
    };
    getPointAtLength = (length) => {
      const handle = (0, import_react_native4.findNodeHandle)(this.root);
      const RNSVGRenderableModule = (init_NativeSvgRenderableModule(), __toCommonJS(NativeSvgRenderableModule_exports)).default;
      return new SVGPoint(RNSVGRenderableModule.getPointAtLength(handle, {
        length
      }));
    };
  };
  Shape.prototype.ownerSVGElement = ownerSVGElement;

  // node_modules/react-native-svg/lib/module/xml.js
  var React36 = __toESM(__require("react"));
  var import_react20 = __require("react");

  // node_modules/react-native-svg/lib/module/utils/fetchData.js
  var import_react_native5 = __require("react-native");

  // node_modules/react-native-svg/lib/module/elements/Circle.js
  var React = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/lib/extract/extractOpacity.js
  function extractOpacity(opacity) {
    const value = typeof opacity === "string" && opacity.trim().endsWith("%") ? +opacity.slice(0, -1) / 100 : +opacity;
    return isNaN(value) || value > 1 ? 1 : Math.max(value, 0);
  }

  // node_modules/react-native-svg/lib/module/lib/extract/extractFill.js
  var import_react_native6 = __require("react-native");
  var fillRules = {
    evenodd: 0,
    nonzero: 1
  };
  var defaultFill = {
    type: 0,
    payload: (0, import_react_native6.processColor)("black")
  };
  function extractFill(o, props, inherited) {
    const {
      fill,
      fillRule,
      fillOpacity
    } = props;
    if (fill != null) {
      inherited.push("fill");
      o.fill = !fill && typeof fill !== "number" ? defaultFill : extractBrush(fill);
    } else {
      o.fill = defaultFill;
    }
    if (fillOpacity != null) {
      inherited.push("fillOpacity");
      o.fillOpacity = extractOpacity(fillOpacity);
    }
    if (fillRule != null) {
      inherited.push("fillRule");
      o.fillRule = fillRule && fillRules[fillRule] === 0 ? 0 : 1;
    }
  }

  // node_modules/react-native-svg/lib/module/lib/extract/extractLengthList.js
  var spaceReg = /\s+/;
  var commaReg = /,/g;
  function extractLengthList(lengthList) {
    if (Array.isArray(lengthList)) {
      return lengthList;
    } else if (typeof lengthList === "number") {
      return [lengthList];
    } else if (typeof lengthList === "string") {
      return lengthList.trim().replace(commaReg, " ").split(spaceReg);
    } else {
      return [];
    }
  }

  // node_modules/react-native-svg/lib/module/lib/extract/extractStroke.js
  var caps = {
    butt: 0,
    square: 2,
    round: 1
  };
  var joins = {
    miter: 0,
    bevel: 2,
    round: 1
  };
  var vectorEffects = {
    none: 0,
    default: 0,
    nonScalingStroke: 1,
    "non-scaling-stroke": 1,
    inherit: 2,
    uri: 3
  };
  function extractStroke(o, props, inherited) {
    const {
      stroke,
      strokeOpacity,
      strokeLinecap,
      strokeLinejoin,
      strokeDasharray,
      strokeWidth,
      strokeDashoffset,
      strokeMiterlimit,
      vectorEffect
    } = props;
    if (stroke != null) {
      inherited.push("stroke");
      o.stroke = extractBrush(stroke);
    }
    if (strokeWidth != null) {
      inherited.push("strokeWidth");
      o.strokeWidth = strokeWidth;
    }
    if (strokeOpacity != null) {
      inherited.push("strokeOpacity");
      o.strokeOpacity = extractOpacity(strokeOpacity);
    }
    if (strokeDasharray != null) {
      inherited.push("strokeDasharray");
      const strokeDash = !strokeDasharray || strokeDasharray === "none" ? null : extractLengthList(strokeDasharray);
      o.strokeDasharray = strokeDash && strokeDash.length % 2 === 1 ? strokeDash.concat(strokeDash) : strokeDash;
    }
    if (strokeDashoffset != null) {
      inherited.push("strokeDashoffset");
      o.strokeDashoffset = strokeDasharray && strokeDashoffset ? +strokeDashoffset || 0 : null;
    }
    if (strokeLinecap != null) {
      inherited.push("strokeLinecap");
      o.strokeLinecap = strokeLinecap && caps[strokeLinecap] || 0;
    }
    if (strokeLinejoin != null) {
      inherited.push("strokeLinejoin");
      o.strokeLinejoin = strokeLinejoin && joins[strokeLinejoin] || 0;
    }
    if (strokeMiterlimit != null) {
      inherited.push("strokeMiterlimit");
      o.strokeMiterlimit = (strokeMiterlimit && typeof strokeMiterlimit !== "number" ? parseFloat(strokeMiterlimit) : strokeMiterlimit) || 4;
    }
    if (vectorEffect != null) {
      o.vectorEffect = vectorEffect && vectorEffects[vectorEffect] || 0;
    }
  }

  // node_modules/react-native-svg/lib/module/lib/Matrix2D.js
  var DEG_TO_RAD = Math.PI / 180;
  var identity = [1, 0, 0, 1, 0, 0];
  var a = 1;
  var b = 0;
  var c = 0;
  var d = 1;
  var tx = 0;
  var ty = 0;
  var hasInitialState = true;
  function reset() {
    if (hasInitialState) {
      return;
    }
    a = d = 1;
    b = c = tx = ty = 0;
    hasInitialState = true;
  }
  function toArray() {
    if (hasInitialState) {
      return identity;
    }
    return [a, b, c, d, tx, ty];
  }
  function append(a2, b2, c2, d2, tx2, ty2) {
    const change = a2 !== 1 || b2 !== 0 || c2 !== 0 || d2 !== 1;
    const translate = tx2 !== 0 || ty2 !== 0;
    if (!change && !translate) {
      return;
    }
    if (hasInitialState) {
      hasInitialState = false;
      a = a2;
      b = b2;
      c = c2;
      d = d2;
      tx = tx2;
      ty = ty2;
      return;
    }
    const a1 = a;
    const b1 = b;
    const c1 = c;
    const d1 = d;
    if (change) {
      a = a1 * a2 + c1 * b2;
      b = b1 * a2 + d1 * b2;
      c = a1 * c2 + c1 * d2;
      d = b1 * c2 + d1 * d2;
    }
    if (translate) {
      tx = a1 * tx2 + c1 * ty2 + tx;
      ty = b1 * tx2 + d1 * ty2 + ty;
    }
  }
  function appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
    if (x === 0 && y === 0 && scaleX === 1 && scaleY === 1 && rotation === 0 && skewX === 0 && skewY === 0 && regX === 0 && regY === 0) {
      return;
    }
    let cos, sin;
    if (rotation % 360) {
      const r = rotation * DEG_TO_RAD;
      cos = Math.cos(r);
      sin = Math.sin(r);
    } else {
      cos = 1;
      sin = 0;
    }
    const a2 = cos * scaleX;
    const b2 = sin * scaleX;
    const c2 = -sin * scaleY;
    const d2 = cos * scaleY;
    if (skewX || skewY) {
      const b1 = Math.tan(skewY * DEG_TO_RAD);
      const c1 = Math.tan(skewX * DEG_TO_RAD);
      append(a2 + c1 * b2, b1 * a2 + b2, c2 + c1 * d2, b1 * c2 + d2, x, y);
    } else {
      append(a2, b2, c2, d2, x, y);
    }
    if (regX || regY) {
      tx -= regX * a + regY * c;
      ty -= regX * b + regY * d;
      hasInitialState = false;
    }
  }

  // node_modules/react-native-svg/lib/module/lib/extract/extractTransform.js
  var import_transform = __toESM(require_transform());
  var import_transformToRn = __toESM(require_transformToRn());
  function appendTransformProps(props) {
    const {
      x,
      y,
      originX,
      originY,
      scaleX,
      scaleY,
      rotation,
      skewX,
      skewY
    } = props;
    appendTransform(x + originX, y + originY, scaleX, scaleY, rotation, skewX, skewY, originX, originY);
  }
  function universal2axis(universal, axisX, axisY, defaultValue) {
    let x;
    let y;
    if (typeof universal === "number") {
      x = y = universal;
    } else if (typeof universal === "string") {
      const coords = universal.split(/\s*,\s*/);
      if (coords.length === 2) {
        x = +coords[0];
        y = +coords[1];
      } else if (coords.length === 1) {
        x = y = +coords[0];
      }
    } else if (Array.isArray(universal)) {
      if (universal.length === 2) {
        x = +universal[0];
        y = +universal[1];
      } else if (universal.length === 1) {
        x = y = +universal[0];
      }
    }
    axisX = +axisX;
    if (!isNaN(axisX)) {
      x = axisX;
    }
    axisY = +axisY;
    if (!isNaN(axisY)) {
      y = axisY;
    }
    return [x || defaultValue || 0, y || defaultValue || 0];
  }
  function props2transform(props) {
    if (!props) {
      return null;
    }
    const {
      rotation,
      translate,
      translateX,
      translateY,
      origin,
      originX,
      originY,
      scale,
      scaleX,
      scaleY,
      skew,
      skewX,
      skewY,
      x,
      y
    } = props;
    if (rotation == null && translate == null && translateX == null && translateY == null && origin == null && originX == null && originY == null && scale == null && scaleX == null && scaleY == null && skew == null && skewX == null && skewY == null && x == null && y == null) {
      return null;
    }
    if (Array.isArray(x) || Array.isArray(y)) {
      console.warn("Passing SvgLengthList to x or y attribute where SvgLength expected");
    }
    const tr = universal2axis(translate, translateX || (Array.isArray(x) ? x[0] : x), translateY || (Array.isArray(y) ? y[0] : y));
    const or = universal2axis(origin, originX, originY);
    const sc = universal2axis(scale, scaleX, scaleY, 1);
    const sk = universal2axis(skew, skewX, skewY);
    return {
      rotation: rotation == null ? 0 : +rotation || 0,
      originX: or[0],
      originY: or[1],
      scaleX: sc[0],
      scaleY: sc[1],
      skewX: sk[0],
      skewY: sk[1],
      x: tr[0],
      y: tr[1]
    };
  }
  function transformToMatrix(props, transform) {
    if (!props && !transform) {
      return null;
    }
    reset();
    props && appendTransformProps(props);
    if (transform) {
      if (Array.isArray(transform)) {
        if (typeof transform[0] === "number") {
          const columnMatrix = transform;
          append(columnMatrix[0], columnMatrix[1], columnMatrix[2], columnMatrix[3], columnMatrix[4], columnMatrix[5]);
        } else {
          const stringifiedTransform = stringifyTransformArrayProps(
            // @ts-expect-error FIXME
            transform
          );
          const t = (0, import_transform.parse)(stringifiedTransform);
          append(t[0], t[3], t[1], t[4], t[2], t[5]);
        }
      } else if (typeof transform === "string") {
        try {
          const t = (0, import_transform.parse)(transform);
          append(t[0], t[3], t[1], t[4], t[2], t[5]);
        } catch (e) {
          console.error(e);
        }
      } else {
        const transformProps = props2transform(transform);
        transformProps && appendTransformProps(transformProps);
      }
    }
    return toArray();
  }
  function extractTransform(props) {
    if (Array.isArray(props) && typeof props[0] === "number") {
      return props;
    }
    if (typeof props === "string") {
      try {
        const t = (0, import_transform.parse)(props);
        return [t[0], t[3], t[1], t[4], t[2], t[5]];
      } catch (e) {
        console.error(e);
        return identity;
      }
    }
    const transformProps = props;
    return transformToMatrix(props2transform(transformProps), transformProps === null || transformProps === void 0 ? void 0 : transformProps.transform);
  }
  function extractTransformSvgView(props) {
    if (typeof props.transform === "string") {
      return (0, import_transformToRn.parse)(props.transform);
    }
    return props.transform;
  }
  var getAngleValueInDeg = (angle) => {
    if (angle.endsWith("rad")) {
      return parseFloat(angle) * (180 / Math.PI);
    }
    if (angle.endsWith("deg")) {
      return parseFloat(angle);
    }
  };
  function stringifyTransformArrayProps(transformArray) {
    if (!transformArray) {
      return "";
    }
    return transformArray.map((transform) => {
      const [key, value] = Object.entries(transform)[0];
      switch (key) {
        case "translateX":
          return `translate(${value}, 0)`;
        case "translateY":
          return `translate(0, ${value})`;
        case "rotate":
          return `rotate(${getAngleValueInDeg(value)})`;
        case "scale":
          return `scale(${value})`;
        case "scaleX":
          return `scale(${value}, 1)`;
        case "scaleY":
          return `scale(1, ${value})`;
        case "skewX":
          return `skewX(${getAngleValueInDeg(value)})`;
        case "skewY":
          return `skewY(${getAngleValueInDeg(value)})`;
        case "matrix":
          return `matrix(${value.join(", ")})`;
        default:
          return "";
      }
    }).join(" ");
  }

  // node_modules/react-native-svg/lib/module/lib/extract/extractResponder.js
  var import_react_native7 = __require("react-native");
  var responderKeys = Object.keys(import_react_native7.PanResponder.create({}).panHandlers);
  var numResponderKeys = responderKeys.length;
  function extractResponder(o, props, ref) {
    const {
      onPress,
      disabled,
      onPressIn,
      onPressOut,
      onLongPress,
      delayPressIn,
      delayPressOut,
      delayLongPress,
      pointerEvents
    } = props;
    let responsible = false;
    for (let i = 0; i < numResponderKeys; i++) {
      const key = responderKeys[i];
      const value = props[key];
      if (value) {
        responsible = true;
        o[key] = value;
      }
    }
    if (pointerEvents) {
      o.pointerEvents = pointerEvents;
    }
    const hasTouchableProperty = disabled != null || onPress || onPressIn || onPressOut || onLongPress || delayPressIn || delayPressOut || delayLongPress;
    if (hasTouchableProperty) {
      responsible = true;
      o.onResponderMove = ref.touchableHandleResponderMove;
      o.onResponderGrant = ref.touchableHandleResponderGrant;
      o.onResponderRelease = ref.touchableHandleResponderRelease;
      o.onResponderTerminate = ref.touchableHandleResponderTerminate;
      o.onStartShouldSetResponder = ref.touchableHandleStartShouldSetResponder;
      o.onResponderTerminationRequest = ref.touchableHandleResponderTerminationRequest;
    }
    if (responsible) {
      o.responsible = true;
    }
  }

  // node_modules/react-native-svg/lib/module/lib/util.js
  function pickNotNil(object) {
    const result = {};
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const value = object[key];
        if (value !== void 0 && value !== null) {
          result[key] = value;
        }
      }
    }
    return result;
  }
  var idPattern = /#([^)]+)'?\)?$/;
  var DEV = true;
  var warnings = /* @__PURE__ */ new Set();
  function warnOnce(condition, ...rest) {
    if (DEV && condition) {
      const key = rest.join(" ");
      if (warnings.has(key)) {
        return;
      }
      warnings.add(key);
      console.warn(...rest);
    }
  }
  var warnUnimplementedFilter = () => {
    warnOnce(true, `Some of the used filters are not yet supported on native platforms. Please check the USAGE.md for more info. Not implemented filters:
`, JSON.stringify(["FeComponentTransfer", "FeConvolveMatrix", "FeDiffuseLighting", "FeDisplacementMap", "FeFuncA", "FeFuncB", "FeFuncG", "FeFuncR", "FeImage", "FeMorphology", "FePointLight", "FeSpecularLighting", "FeSpotLight", "FeTile", "FeTurbulence"], null, 2));
  };

  // node_modules/react-native-svg/lib/module/lib/extract/extractProps.js
  var clipRules = {
    evenodd: 0,
    nonzero: 1
  };
  function propsAndStyles(props) {
    const {
      style
    } = props;
    return !style ? props : {
      ...Array.isArray(style) ? Object.assign({}, ...style) : style,
      ...props
    };
  }
  function getMarker(marker) {
    if (!marker) {
      return void 0;
    }
    const matched = marker.match(idPattern);
    return matched ? matched[1] : void 0;
  }
  function extractProps(props, ref) {
    const {
      id,
      opacity,
      onLayout,
      clipPath,
      clipRule,
      display,
      mask,
      filter,
      marker,
      markerStart = marker,
      markerMid = marker,
      markerEnd = marker,
      testID,
      accessibilityLabel,
      accessible
    } = props;
    const extracted = {};
    const inherited = [];
    extractResponder(extracted, props, ref);
    extractFill(extracted, props, inherited);
    extractStroke(extracted, props, inherited);
    if (props.color) {
      extracted.color = props.color;
    }
    if (inherited.length) {
      extracted.propList = inherited;
    }
    const matrix = extractTransform(props);
    if (matrix !== null) {
      extracted.matrix = matrix;
    }
    if (opacity != null) {
      extracted.opacity = extractOpacity(opacity);
    }
    if (display != null) {
      extracted.display = display === "none" ? "none" : void 0;
    }
    if (onLayout) {
      extracted.onSvgLayout = onLayout;
    }
    if (markerStart) {
      extracted.markerStart = getMarker(markerStart);
    }
    if (markerMid) {
      extracted.markerMid = getMarker(markerMid);
    }
    if (markerEnd) {
      extracted.markerEnd = getMarker(markerEnd);
    }
    if (id) {
      extracted.name = String(id);
    }
    if (testID) {
      extracted.testID = testID;
    }
    if (accessibilityLabel) {
      extracted.accessibilityLabel = accessibilityLabel;
    }
    if (accessible) {
      extracted.accessible = accessible;
    }
    if (clipRule) {
      extracted.clipRule = clipRules[clipRule] === 0 ? 0 : 1;
    }
    if (clipPath) {
      const matched = clipPath.match(idPattern);
      if (matched) {
        extracted.clipPath = matched[1];
      } else {
        console.warn('Invalid `clipPath` prop, expected a clipPath like "#id", but got: "' + clipPath + '"');
      }
    }
    if (mask) {
      const matched = mask.match(idPattern);
      if (matched) {
        extracted.mask = matched[1];
      } else {
        console.warn('Invalid `mask` prop, expected a mask like "#id", but got: "' + mask + '"');
      }
    }
    if (filter) {
      const matched = filter.match(idPattern);
      if (matched) {
        extracted.filter = matched[1];
      } else {
        console.warn('Invalid `filter` prop, expected a filter like "#id", but got: "' + filter + '"');
      }
    }
    return extracted;
  }
  function extract(instance, props) {
    return extractProps(propsAndStyles(props), instance);
  }

  // node_modules/react-native-svg/lib/module/fabric/CircleNativeComponent.js
  var import_codegenNativeComponent = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var CircleNativeComponent_default = (0, import_codegenNativeComponent.default)("RNSVGCircle", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/ClipPath.js
  var React2 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/ClipPathNativeComponent.js
  var import_codegenNativeComponent2 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var ClipPathNativeComponent_default = (0, import_codegenNativeComponent2.default)("RNSVGClipPath", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/Defs.js
  var React3 = __toESM(__require("react"));
  var import_react2 = __require("react");

  // node_modules/react-native-svg/lib/module/fabric/DefsNativeComponent.js
  var import_codegenNativeComponent3 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var DefsNativeComponent_default = (0, import_codegenNativeComponent3.default)("RNSVGDefs", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/Ellipse.js
  var React4 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/EllipseNativeComponent.js
  var import_codegenNativeComponent4 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var EllipseNativeComponent_default = (0, import_codegenNativeComponent4.default)("RNSVGEllipse", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/ForeignObject.js
  var React7 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/elements/G.js
  var React6 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/lib/extract/extractText.js
  var React5 = __toESM(__require("react"));
  var import_react3 = __require("react");
  var fontRegExp = /^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?(?:%|px|em|pt|pc|mm|cm|in]))*(?:\s*\/.*?)?\s+)?\s*"?([^"]*)/i;
  var fontFamilyPrefix = /^[\s"']*/;
  var fontFamilySuffix = /[\s"']*$/;
  var commaReg2 = /\s*,\s*/g;
  var cachedFontObjectsFromString = {};
  function extractSingleFontFamily(fontFamilyString) {
    return fontFamilyString ? fontFamilyString.split(commaReg2)[0].replace(fontFamilyPrefix, "").replace(fontFamilySuffix, "") : null;
  }
  function parseFontString(font) {
    if (Object.prototype.hasOwnProperty.call(cachedFontObjectsFromString, font)) {
      return cachedFontObjectsFromString[font];
    }
    const match = fontRegExp.exec(font);
    if (!match) {
      cachedFontObjectsFromString[font] = null;
      return null;
    }
    const isBold = /bold/.exec(match[1]);
    const isItalic = /italic/.exec(match[1]);
    cachedFontObjectsFromString[font] = {
      fontSize: match[2] || 12,
      fontWeight: isBold ? "bold" : "normal",
      fontStyle: isItalic ? "italic" : "normal",
      fontFamily: extractSingleFontFamily(match[3])
    };
    return cachedFontObjectsFromString[font];
  }
  function extractFont(props) {
    const {
      fontStyle,
      fontVariant,
      fontWeight,
      fontStretch,
      fontSize,
      fontFamily,
      textAnchor,
      textDecoration,
      letterSpacing,
      wordSpacing,
      kerning,
      fontFeatureSettings,
      fontVariantLigatures,
      fontVariationSettings,
      font
    } = props;
    const ownedFont = pickNotNil({
      fontStyle,
      fontVariant,
      fontWeight,
      fontStretch,
      fontSize,
      fontFamily: extractSingleFontFamily(fontFamily),
      textAnchor,
      textDecoration,
      letterSpacing,
      wordSpacing,
      kerning,
      fontFeatureSettings,
      fontVariantLigatures,
      fontVariationSettings
    });
    const baseFont = typeof font === "string" ? parseFontString(font) : font;
    return {
      ...baseFont,
      ...ownedFont
    };
  }
  var TSpan;
  function setTSpan(TSpanImplementation) {
    TSpan = TSpanImplementation;
  }
  function getChild(child) {
    if (typeof child === "string" || typeof child === "number") {
      return /* @__PURE__ */ React5.createElement(TSpan, null, String(child));
    } else {
      return child;
    }
  }
  function extractText(props, container) {
    const {
      x,
      y,
      dx,
      dy,
      rotate,
      children,
      inlineSize,
      baselineShift,
      verticalAlign,
      alignmentBaseline
    } = props;
    const textChildren = typeof children === "string" || typeof children === "number" ? container ? /* @__PURE__ */ React5.createElement(TSpan, null, String(children)) : null : import_react3.Children.count(children) > 1 || Array.isArray(children) ? import_react3.Children.map(children, getChild) : children;
    return {
      content: textChildren === null ? String(children) : null,
      children: textChildren,
      inlineSize,
      baselineShift,
      verticalAlign,
      alignmentBaseline,
      font: extractFont(props),
      x: extractLengthList(x),
      y: extractLengthList(y),
      dx: extractLengthList(dx),
      dy: extractLengthList(dy),
      rotate: extractLengthList(rotate)
    };
  }

  // node_modules/react-native-svg/lib/module/fabric/GroupNativeComponent.js
  var import_codegenNativeComponent5 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var GroupNativeComponent_default = (0, import_codegenNativeComponent5.default)("RNSVGGroup", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/G.js
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  var G = class extends Shape {
    static displayName = "G";
    setNativeProps = (props) => {
      var _this$root;
      const matrix = !props.matrix && extractTransform(props);
      if (matrix) {
        props.matrix = matrix;
      }
      (_this$root = this.root) === null || _this$root === void 0 || _this$root.setNativeProps(props);
    };
    render() {
      const {
        props
      } = this;
      const prop = propsAndStyles(props);
      const extractedProps = extractProps(prop, this);
      const font = extractFont(prop);
      if (hasProps(font)) {
        extractedProps.font = font;
      }
      return /* @__PURE__ */ React6.createElement(GroupNativeComponent_default, _extends({
        ref: (ref) => this.refMethod(ref)
      }, extractedProps), props.children);
    }
  };
  var hasProps = (obj) => {
    for (const _ in obj) {
      return true;
    }
    return false;
  };

  // node_modules/react-native-svg/lib/module/fabric/ForeignObjectNativeComponent.js
  var import_codegenNativeComponent6 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var ForeignObjectNativeComponent_default = (0, import_codegenNativeComponent6.default)("RNSVGForeignObject", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/Image.js
  var React8 = __toESM(__require("react"));
  var import_react_native8 = __require("react-native");

  // node_modules/react-native-svg/lib/module/lib/extract/extractViewBox.js
  var meetOrSliceTypes = {
    meet: 0,
    slice: 1,
    none: 2
  };
  var alignEnum = ["xMinYMin", "xMidYMin", "xMaxYMin", "xMinYMid", "xMidYMid", "xMaxYMid", "xMinYMax", "xMidYMax", "xMaxYMax", "none"].reduce((prev, name) => {
    prev[name] = name;
    return prev;
  }, {});
  var spacesRegExp = /\s+/;
  function extractViewBox(props) {
    const {
      viewBox,
      preserveAspectRatio
    } = props;
    if (!viewBox) {
      return null;
    }
    const params = (Array.isArray(viewBox) ? viewBox : viewBox.trim().replace(/,/g, " ").split(spacesRegExp)).map(Number);
    if (params.length !== 4 || params.some(isNaN)) {
      console.warn("Invalid `viewBox` prop:" + viewBox);
      return null;
    }
    const modes = preserveAspectRatio ? preserveAspectRatio.trim().split(spacesRegExp) : [];
    const align = modes[0];
    const meetOrSlice = modes[1];
    return {
      minX: params[0],
      minY: params[1],
      vbWidth: params[2],
      vbHeight: params[3],
      align: alignEnum[align] || "xMidYMid",
      meetOrSlice: meetOrSliceTypes[meetOrSlice] || 0
    };
  }

  // node_modules/react-native-svg/lib/module/fabric/ImageNativeComponent.js
  var import_codegenNativeComponent7 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var ImageNativeComponent_default = (0, import_codegenNativeComponent7.default)("RNSVGImage", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/Line.js
  var React9 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/LineNativeComponent.js
  var import_codegenNativeComponent8 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var LineNativeComponent_default = (0, import_codegenNativeComponent8.default)("RNSVGLine", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/LinearGradient.js
  var React11 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/lib/extract/extractGradient.js
  var React10 = __toESM(__require("react"));
  var import_react4 = __require("react");
  var import_react_native9 = __require("react-native");

  // node_modules/react-native-svg/lib/module/fabric/LinearGradientNativeComponent.js
  var import_codegenNativeComponent9 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var LinearGradientNativeComponent_default = (0, import_codegenNativeComponent9.default)("RNSVGLinearGradient", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/Marker.js
  var React12 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/MarkerNativeComponent.js
  var import_codegenNativeComponent10 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var MarkerNativeComponent_default = (0, import_codegenNativeComponent10.default)("RNSVGMarker", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/Mask.js
  var React13 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/MaskNativeComponent.js
  var import_codegenNativeComponent11 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var MaskNativeComponent_default = (0, import_codegenNativeComponent11.default)("RNSVGMask", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/Path.js
  var React14 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/PathNativeComponent.js
  var import_codegenNativeComponent12 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var PathNativeComponent_default = (0, import_codegenNativeComponent12.default)("RNSVGPath", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/Path.js
  function _extends2() {
    return _extends2 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends2.apply(null, arguments);
  }
  var Path = class extends Shape {
    static displayName = "Path";
    render() {
      const {
        props
      } = this;
      const {
        d: d2
      } = props;
      const pathProps = {
        ...extract(this, props),
        d: d2
      };
      return /* @__PURE__ */ React14.createElement(PathNativeComponent_default, _extends2({
        ref: (ref) => this.refMethod(ref)
      }, pathProps));
    }
  };

  // node_modules/react-native-svg/lib/module/elements/Pattern.js
  var React15 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/PatternNativeComponent.js
  var import_codegenNativeComponent13 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var PatternNativeComponent_default = (0, import_codegenNativeComponent13.default)("RNSVGPattern", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/Polygon.js
  var React16 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/elements/Polyline.js
  var React17 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/elements/RadialGradient.js
  var React18 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/RadialGradientNativeComponent.js
  var import_codegenNativeComponent14 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var RadialGradientNativeComponent_default = (0, import_codegenNativeComponent14.default)("RNSVGRadialGradient", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/Rect.js
  var React19 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/RectNativeComponent.js
  var import_codegenNativeComponent15 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var RectNativeComponent_default = (0, import_codegenNativeComponent15.default)("RNSVGRect", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/Stop.js
  var import_react5 = __require("react");

  // node_modules/react-native-svg/lib/module/elements/Svg.js
  var React20 = __toESM(__require("react"));
  var import_react_native11 = __require("react-native");

  // node_modules/react-native-svg/lib/module/fabric/AndroidSvgViewNativeComponent.js
  var import_codegenNativeComponent16 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var AndroidSvgViewNativeComponent_default = (0, import_codegenNativeComponent16.default)("RNSVGSvgViewAndroid", {
    excludedPlatforms: ["iOS"]
  });

  // node_modules/react-native-svg/lib/module/fabric/IOSSvgViewNativeComponent.js
  var import_codegenNativeComponent17 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var IOSSvgViewNativeComponent_default = (0, import_codegenNativeComponent17.default)("RNSVGSvgView", {
    excludedPlatforms: ["android"]
  });

  // node_modules/react-native-svg/lib/module/elements/Svg.js
  function _extends3() {
    return _extends3 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends3.apply(null, arguments);
  }
  var styles = import_react_native11.StyleSheet.create({
    svg: {
      backgroundColor: "transparent",
      borderWidth: 0
    }
  });
  var defaultStyle = styles.svg;
  var Svg = class extends Shape {
    static displayName = "Svg";
    static defaultProps = {
      preserveAspectRatio: "xMidYMid meet"
    };
    measureInWindow = (callback) => {
      const {
        root
      } = this;
      root && root.measureInWindow(callback);
    };
    measure = (callback) => {
      const {
        root
      } = this;
      root && root.measure(callback);
    };
    measureLayout = (relativeToNativeNode, onSuccess, onFail) => {
      const {
        root
      } = this;
      root && root.measureLayout(relativeToNativeNode, onSuccess, onFail);
    };
    setNativeProps = (props) => {
      const {
        root
      } = this;
      root && root.setNativeProps(props);
    };
    toDataURL = (callback, options) => {
      if (!callback) {
        return;
      }
      const handle = (0, import_react_native11.findNodeHandle)(this.root);
      const RNSVGSvgViewModule = (
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        (init_NativeSvgViewModule(), __toCommonJS(NativeSvgViewModule_exports)).default
      );
      RNSVGSvgViewModule.toDataURL(handle, options, callback);
    };
    render() {
      const {
        style,
        opacity,
        viewBox,
        children,
        onLayout,
        preserveAspectRatio,
        ...extracted
      } = this.props;
      const stylesAndProps = {
        ...Array.isArray(style) ? Object.assign({}, ...style) : style,
        ...extracted
      };
      let {
        width,
        height,
        focusable,
        transform,
        // Inherited G properties
        font,
        fill,
        fillOpacity,
        fillRule,
        stroke,
        strokeWidth,
        strokeOpacity,
        strokeDasharray,
        strokeDashoffset,
        strokeLinecap,
        strokeLinejoin,
        strokeMiterlimit,
        position
      } = stylesAndProps;
      if (width === void 0 && height === void 0 && position !== "absolute") {
        width = height = "100%";
      }
      const props = extracted;
      props.focusable = Boolean(focusable) && focusable !== "false";
      const rootStyles = [defaultStyle];
      if (style) {
        rootStyles.push(style);
      }
      let override = false;
      const overrideStyles = {};
      const o = opacity != null ? extractOpacity(opacity) : NaN;
      if (!isNaN(o)) {
        override = true;
        overrideStyles.opacity = o;
      }
      if (width && height) {
        override = true;
        const w = parseInt(width, 10);
        const h = parseInt(height, 10);
        const doNotParseWidth = isNaN(w) || width[width.length - 1] === "%";
        const doNotParseHeight = isNaN(h) || height[height.length - 1] === "%";
        overrideStyles.width = doNotParseWidth ? width : w;
        overrideStyles.height = doNotParseHeight ? height : h;
        overrideStyles.flex = 0;
      }
      if (override) {
        rootStyles.push(overrideStyles);
      }
      props.style = rootStyles.length > 1 ? rootStyles : defaultStyle;
      if (width != null) {
        props.bbWidth = width;
      }
      if (height != null) {
        props.bbHeight = height;
      }
      extractResponder(props, props, this);
      const gStyle = Object.assign({}, import_react_native11.StyleSheet.flatten(style));
      if (transform) {
        if (gStyle.transform) {
          props.transform = gStyle.transform;
          gStyle.transform = void 0;
        }
        props.transform = extractTransformSvgView(props);
      }
      const RNSVGSvg = import_react_native11.Platform.OS === "android" ? AndroidSvgViewNativeComponent_default : IOSSvgViewNativeComponent_default;
      return /* @__PURE__ */ React20.createElement(RNSVGSvg, _extends3({}, props, {
        ref: (ref) => this.refMethod(ref)
      }, extractViewBox({
        viewBox,
        preserveAspectRatio
      })), /* @__PURE__ */ React20.createElement(G, {
        children,
        style: gStyle,
        font,
        fill,
        fillOpacity,
        fillRule,
        stroke,
        strokeWidth,
        strokeOpacity,
        strokeDasharray,
        strokeDashoffset,
        strokeLinecap,
        strokeLinejoin,
        strokeMiterlimit,
        onLayout
      }));
    }
  };

  // node_modules/react-native-svg/lib/module/elements/Symbol.js
  var React21 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/SymbolNativeComponent.js
  var import_codegenNativeComponent18 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var SymbolNativeComponent_default = (0, import_codegenNativeComponent18.default)("RNSVGSymbol", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/TSpan.js
  var React22 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/TSpanNativeComponent.js
  var import_codegenNativeComponent19 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var TSpanNativeComponent_default = (0, import_codegenNativeComponent19.default)("RNSVGTSpan", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/TSpan.js
  var TSpan2 = class extends Shape {
    static displayName = "TSpan";
    setNativeProps = (props) => {
      const matrix = !props.matrix && extractTransform(props);
      if (matrix) {
        props.matrix = matrix;
      }
      const prop = propsAndStyles(props);
      Object.assign(prop, pickNotNil(extractText(prop, false)));
      this.root && this.root.setNativeProps(prop);
    };
    render() {
      const prop = propsAndStyles(this.props);
      const props = extractProps({
        ...prop,
        x: null,
        y: null
      }, this);
      Object.assign(props, extractText(prop, false));
      props.ref = this.refMethod;
      return /* @__PURE__ */ React22.createElement(TSpanNativeComponent_default, props);
    }
  };
  setTSpan(TSpan2);

  // node_modules/react-native-svg/lib/module/elements/Text.js
  var React23 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/TextNativeComponent.js
  var import_codegenNativeComponent20 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var TextNativeComponent_default = (0, import_codegenNativeComponent20.default)("RNSVGText", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/TextPath.js
  var React24 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/TextPathNativeComponent.js
  var import_codegenNativeComponent21 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var TextPathNativeComponent_default = (0, import_codegenNativeComponent21.default)("RNSVGTextPath", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/Use.js
  var React25 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/UseNativeComponent.js
  var import_codegenNativeComponent22 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var UseNativeComponent_default = (0, import_codegenNativeComponent22.default)("RNSVGUse", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/filters/FeBlend.js
  var import_react8 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/lib/extract/extractFilter.js
  var import_react6 = __toESM(__require("react"));
  var import_react_native12 = __require("react-native");
  var spaceReg2 = /\s+/;
  var extractFilter = (props) => {
    const {
      x,
      y,
      width,
      height,
      result
    } = props;
    const extracted = {
      x,
      y,
      width,
      height,
      result
    };
    return extracted;
  };
  var extractIn = (props) => {
    if (props.in) {
      return {
        in1: props.in
      };
    }
    return {};
  };
  var extractFeBlend = (props) => {
    const extracted = {};
    if (props.in2) {
      extracted.in2 = props.in2;
    }
    if (props.mode) {
      extracted.mode = props.mode;
    }
    return extracted;
  };
  var extractFeColorMatrix = (props) => {
    const extracted = {};
    if (props.values !== void 0) {
      if (Array.isArray(props.values)) {
        extracted.values = props.values.map((num) => typeof num === "number" ? num : parseFloat(num));
      } else if (typeof props.values === "number") {
        extracted.values = [props.values];
      } else if (typeof props.values === "string") {
        extracted.values = props.values.split(spaceReg2).map(parseFloat).filter((el) => !isNaN(el));
      } else {
        console.warn("Invalid value for FeColorMatrix `values` prop");
      }
    }
    if (props.type) {
      extracted.type = props.type;
    }
    return extracted;
  };
  var extractFeComposite = (props) => {
    const extracted = {
      in1: props.in || "",
      in2: props.in2 || "",
      operator1: props.operator || "over"
    };
    ["k1", "k2", "k3", "k4"].forEach((key) => {
      if (props[key] !== void 0) {
        extracted[key] = Number(props[key]) || 0;
      }
    });
    return extracted;
  };
  var defaultFill2 = {
    type: 0,
    payload: (0, import_react_native12.processColor)("black")
  };
  function extractFeFlood(props) {
    const extracted = {};
    const {
      floodColor,
      floodOpacity
    } = props;
    if (floodColor != null) {
      extracted.floodColor = !floodColor && typeof floodColor !== "number" ? defaultFill2 : extractBrush(floodColor);
    } else {
      extracted.floodColor = defaultFill2;
    }
    if (floodOpacity != null) {
      extracted.floodOpacity = extractOpacity(floodOpacity);
    }
    return extracted;
  }
  var extractFeGaussianBlur = (props) => {
    const extracted = {};
    if (Array.isArray(props.stdDeviation)) {
      extracted.stdDeviationX = Number(props.stdDeviation[0]) || 0;
      extracted.stdDeviationY = Number(props.stdDeviation[1]) || 0;
    } else if (typeof props.stdDeviation === "string" && props.stdDeviation.match(spaceReg2)) {
      const stdDeviation = props.stdDeviation.split(spaceReg2);
      extracted.stdDeviationX = Number(stdDeviation[0]) || 0;
      extracted.stdDeviationY = Number(stdDeviation[1]) || 0;
    } else if (typeof props.stdDeviation === "number" || typeof props.stdDeviation === "string" && !props.stdDeviation.match(spaceReg2)) {
      extracted.stdDeviationX = Number(props.stdDeviation) || 0;
      extracted.stdDeviationY = Number(props.stdDeviation) || 0;
    }
    if (props.edgeMode) {
      extracted.edgeMode = props.edgeMode;
    }
    return extracted;
  };
  var extractFeMerge = (props, parent) => {
    const nodes = [];
    const childArray = props.children ? import_react6.default.Children.map(props.children, (child) => /* @__PURE__ */ import_react6.default.cloneElement(child, {
      parent
    })) : [];
    const l = childArray.length;
    for (let i = 0; i < l; i++) {
      const {
        props: {
          in: in1
        }
      } = childArray[i];
      nodes.push(in1 || "");
    }
    return {
      nodes
    };
  };

  // node_modules/react-native-svg/lib/module/fabric/FeBlendNativeComponent.js
  var import_codegenNativeComponent23 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var FeBlendNativeComponent_default = (0, import_codegenNativeComponent23.default)("RNSVGFeBlend", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/filters/FilterPrimitive.js
  var import_react7 = __require("react");
  var FilterPrimitive = class extends import_react7.Component {
    root = null;
    static defaultPrimitiveProps = {};
    refMethod = (instance) => {
      this.root = instance;
    };
    setNativeProps = (props) => {
      var _this$root;
      (_this$root = this.root) === null || _this$root === void 0 || _this$root.setNativeProps(props);
    };
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeBlend.js
  function _extends4() {
    return _extends4 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends4.apply(null, arguments);
  }
  var FeBlend = class extends FilterPrimitive {
    static displayName = "FeBlend";
    static defaultProps = {
      ...this.defaultPrimitiveProps,
      mode: "normal"
    };
    render() {
      return /* @__PURE__ */ import_react8.default.createElement(FeBlendNativeComponent_default, _extends4({
        ref: (ref) => this.refMethod(ref)
      }, extractFilter(this.props), extractIn(this.props), extractFeBlend(this.props)));
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeColorMatrix.js
  var import_react9 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/FeColorMatrixNativeComponent.js
  var import_codegenNativeComponent24 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var FeColorMatrixNativeComponent_default = (0, import_codegenNativeComponent24.default)("RNSVGFeColorMatrix", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/filters/FeColorMatrix.js
  function _extends5() {
    return _extends5 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends5.apply(null, arguments);
  }
  var FeColorMatrix = class extends FilterPrimitive {
    static displayName = "FeColorMatrix";
    static defaultProps = {
      ...this.defaultPrimitiveProps,
      type: "matrix",
      values: ""
    };
    render() {
      return /* @__PURE__ */ import_react9.default.createElement(FeColorMatrixNativeComponent_default, _extends5({
        ref: (ref) => this.refMethod(ref)
      }, extractFilter(this.props), extractIn(this.props), extractFeColorMatrix(this.props)));
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeComponentTransfer.js
  var FeComponentTransfer = class extends FilterPrimitive {
    static displayName = "FeComponentTransfer";
    static defaultProps = {
      ...this.defaultPrimitiveProps
    };
    render() {
      warnUnimplementedFilter();
      return null;
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeComposite.js
  var import_react10 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/FeCompositeNativeComponent.js
  var import_codegenNativeComponent25 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var FeCompositeNativeComponent_default = (0, import_codegenNativeComponent25.default)("RNSVGFeComposite", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/filters/FeComposite.js
  function _extends6() {
    return _extends6 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends6.apply(null, arguments);
  }
  var FeComposite = class extends FilterPrimitive {
    static displayName = "FeComposite";
    static defaultProps = {
      ...this.defaultPrimitiveProps,
      k1: 0,
      k2: 0,
      k3: 0,
      k4: 0
    };
    render() {
      return /* @__PURE__ */ import_react10.default.createElement(FeCompositeNativeComponent_default, _extends6({
        ref: (ref) => this.refMethod(ref)
      }, extractFilter(this.props), extractFeComposite(this.props)));
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeConvolveMatrix.js
  var FeConvolveMatrix = class extends FilterPrimitive {
    static displayName = "FeConvolveMatrix";
    static defaultProps = {
      ...this.defaultPrimitiveProps
    };
    render() {
      warnUnimplementedFilter();
      return null;
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeDiffuseLighting.js
  var FeDiffuseLighting = class extends FilterPrimitive {
    static displayName = "FeDiffuseLighting";
    static defaultProps = {
      ...this.defaultPrimitiveProps
    };
    render() {
      warnUnimplementedFilter();
      return null;
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeDisplacementMap.js
  var FeDisplacementMap = class extends FilterPrimitive {
    static displayName = "FeDisplacementMap";
    static defaultProps = {
      ...this.defaultPrimitiveProps
    };
    render() {
      warnUnimplementedFilter();
      return null;
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeDistantLight.js
  var import_react11 = __require("react");

  // node_modules/react-native-svg/lib/module/elements/filters/FeDropShadow.js
  var import_react16 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/elements/filters/FeFlood.js
  var import_react12 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/FeFloodNativeComponent.js
  var import_codegenNativeComponent26 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var FeFloodNativeComponent_default = (0, import_codegenNativeComponent26.default)("RNSVGFeFlood", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/filters/FeFlood.js
  function _extends7() {
    return _extends7 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends7.apply(null, arguments);
  }
  var FeFlood = class extends FilterPrimitive {
    static displayName = "FeFlood";
    static defaultProps = {
      ...this.defaultPrimitiveProps,
      floodColor: "black",
      floodOpacity: 1
    };
    render() {
      return /* @__PURE__ */ import_react12.default.createElement(FeFloodNativeComponent_default, _extends7({
        ref: (ref) => this.refMethod(ref)
      }, extractFilter(this.props), extractFeFlood(this.props)));
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeGaussianBlur.js
  var import_react13 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/FeGaussianBlurNativeComponent.js
  var import_codegenNativeComponent27 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var FeGaussianBlurNativeComponent_default = (0, import_codegenNativeComponent27.default)("RNSVGFeGaussianBlur", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/filters/FeGaussianBlur.js
  function _extends8() {
    return _extends8 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends8.apply(null, arguments);
  }
  var FeGaussianBlur = class extends FilterPrimitive {
    static displayName = "FeGaussianBlur";
    static defaultProps = {
      ...this.defaultPrimitiveProps,
      stdDeviation: 0,
      edgeMode: "none"
    };
    render() {
      return /* @__PURE__ */ import_react13.default.createElement(FeGaussianBlurNativeComponent_default, _extends8({
        ref: (ref) => this.refMethod(ref)
      }, extractFilter(this.props), extractIn(this.props), extractFeGaussianBlur(this.props)));
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeMerge.js
  var import_react14 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/FeMergeNativeComponent.js
  var import_codegenNativeComponent28 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var FeMergeNativeComponent_default = (0, import_codegenNativeComponent28.default)("RNSVGFeMerge", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/filters/FeMerge.js
  function _extends9() {
    return _extends9 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends9.apply(null, arguments);
  }
  var FeMerge = class extends FilterPrimitive {
    static displayName = "FeMerge";
    static defaultProps = {
      ...this.defaultPrimitiveProps
    };
    render() {
      return /* @__PURE__ */ import_react14.default.createElement(FeMergeNativeComponent_default, _extends9({
        ref: (ref) => this.refMethod(ref)
      }, extractFilter(this.props), extractFeMerge(this.props, this)));
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeMergeNode.js
  var FeMergeNode = class extends FilterPrimitive {
    static displayName = "FeMergeNode";
    // Force update parent
    setNativeProps = () => {
      const {
        parent
      } = this.props;
      if (parent) {
        parent.forceUpdate();
      }
    };
    render() {
      return null;
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeOffset.js
  var import_react15 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/FeOffsetNativeComponent.js
  var import_codegenNativeComponent29 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var FeOffsetNativeComponent_default = (0, import_codegenNativeComponent29.default)("RNSVGFeOffset", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements/filters/FeOffset.js
  function _extends10() {
    return _extends10 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends10.apply(null, arguments);
  }
  var FeOffset = class extends FilterPrimitive {
    static displayName = "FeOffset";
    static defaultProps = {
      ...this.defaultPrimitiveProps,
      dx: 0,
      dy: 0
    };
    render() {
      return /* @__PURE__ */ import_react15.default.createElement(FeOffsetNativeComponent_default, _extends10({
        ref: (ref) => this.refMethod(ref)
      }, this.props, extractFilter(this.props), extractIn(this.props)));
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeDropShadow.js
  var FeDropShadow = class extends FilterPrimitive {
    static displayName = "FeDropShadow";
    static defaultProps = {
      ...this.defaultPrimitiveProps
    };
    render() {
      const {
        stdDeviation,
        in: in1 = "SourceGraphic",
        dx,
        dy,
        result
      } = this.props;
      return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(FeGaussianBlur, {
        in: in1,
        stdDeviation
      }), /* @__PURE__ */ import_react16.default.createElement(FeOffset, {
        dx,
        dy,
        result: "offsetblur"
      }), /* @__PURE__ */ import_react16.default.createElement(FeFlood, {
        floodColor: this.props.floodColor,
        floodOpacity: this.props.floodOpacity
      }), /* @__PURE__ */ import_react16.default.createElement(FeComposite, {
        in2: "offsetblur",
        operator: "in"
      }), /* @__PURE__ */ import_react16.default.createElement(FeMerge, {
        result
      }, /* @__PURE__ */ import_react16.default.createElement(FeMergeNode, null), /* @__PURE__ */ import_react16.default.createElement(FeMergeNode, {
        in: in1
      })));
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeImage.js
  var FeImage = class extends FilterPrimitive {
    static displayName = "FeImage";
    static defaultProps = {
      ...this.defaultPrimitiveProps
    };
    render() {
      warnUnimplementedFilter();
      return null;
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeMorphology.js
  var FeMorphology = class extends FilterPrimitive {
    static displayName = "FeMorphology";
    static defaultProps = {
      ...this.defaultPrimitiveProps
    };
    render() {
      warnUnimplementedFilter();
      return null;
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FePointLight.js
  var import_react17 = __require("react");

  // node_modules/react-native-svg/lib/module/elements/filters/FeSpecularLighting.js
  var FeSpecularLighting = class extends FilterPrimitive {
    static displayName = "FeSpecularLighting";
    static defaultProps = {
      ...this.defaultPrimitiveProps
    };
    render() {
      warnUnimplementedFilter();
      return null;
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeSpotLight.js
  var import_react18 = __require("react");

  // node_modules/react-native-svg/lib/module/elements/filters/FeTile.js
  var FeTile = class extends FilterPrimitive {
    static displayName = "FeTile";
    static defaultProps = {
      ...this.defaultPrimitiveProps
    };
    render() {
      warnUnimplementedFilter();
      return null;
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/FeTurbulence.js
  var FeTurbulence = class extends FilterPrimitive {
    static displayName = "FeTurbulence";
    static defaultProps = {
      ...this.defaultPrimitiveProps
    };
    render() {
      warnUnimplementedFilter();
      return null;
    }
  };

  // node_modules/react-native-svg/lib/module/elements/filters/Filter.js
  var import_react19 = __toESM(__require("react"));

  // node_modules/react-native-svg/lib/module/fabric/FilterNativeComponent.js
  var import_codegenNativeComponent30 = __toESM(__require("react-native/Libraries/Utilities/codegenNativeComponent"));
  var FilterNativeComponent_default = (0, import_codegenNativeComponent30.default)("RNSVGFilter", {
    interfaceOnly: true
  });

  // node_modules/react-native-svg/lib/module/elements.js
  var elements_default = Svg;

  // node_modules/react-native-svg/lib/module/xml.js
  var err = console.error.bind(console);

  // src/AnimatedTopoBackground.tsx
  var import_jsx_runtime = __require("react/jsx-runtime");
  var AnimatedPath = import_react_native13.Animated.createAnimatedComponent(Path);
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
    const { width, height } = import_react_native13.Dimensions.get("window");
    const drift = (0, import_react21.useRef)(new import_react_native13.Animated.Value(0)).current;
    (0, import_react21.useEffect)(() => {
      const loop = import_react_native13.Animated.loop(
        import_react_native13.Animated.sequence([
          import_react_native13.Animated.timing(drift, { toValue: 1, duration: speed * 1e3, useNativeDriver: true }),
          import_react_native13.Animated.timing(drift, { toValue: 0, duration: speed * 1e3, useNativeDriver: true })
        ])
      );
      loop.start();
      return () => loop.stop();
    }, [drift, speed]);
    const translateX = drift.interpolate({ inputRange: [0, 1], outputRange: [0, 40] });
    const translateY = drift.interpolate({ inputRange: [0, 1], outputRange: [0, 25] });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react_native13.Animated.View,
      {
        pointerEvents: "none",
        style: [import_react_native13.StyleSheet.absoluteFill, { backgroundColor, opacity, transform: [{ translateX }, { translateY }] }],
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(elements_default, { width: width + 100, height: height + 100, viewBox: `0 0 1000 ${height}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(G, { children: Array.from({ length: Math.ceil(height / 500) + 1 }).map(
          (_, row) => CONTOUR_TEMPLATES.map((d2, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            AnimatedPath,
            {
              d: d2.replace(/,(\d+)/g, (_2, y) => `,${Number(y) + row * 500}`),
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
  return __toCommonJS(src_exports);
})();
return $;})();
