webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AboutUs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutUs.vue");
/* harmony import */ var _components_NoConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/NoConnect.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: () => {
    return {
      misc: []
    };
  },
  components: {
    AboutUs: _components_AboutUs__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    onAboutUsTap() {
      //console.log("Button was pressed");
      this.$showModal(_components_AboutUs__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }

  },
  mounted: function mounted() {
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "GET",
      "url": "http://data.csc4w.com/misc.json"
    }).then(result => {
      console.log("Result is " + result.statusText);
      this.misc = result.data.misc; //console.log("result is " + JSON.stringify(result.data.misc);
    }).catch(error => {
      console.log("Error caught " + error);
      this.$showModal(_components_NoConnect__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }), error => {
      console.log("Error " + error);
    };
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/NoConnect.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/NoConnect.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.about-panel {\n    color: white;\n    font-size: 12;\n    padding: 15;\n    background-color: #131d4e;\n}\n\n", ""]);


    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/NoConnect.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/NoConnect.vue?vue&type=template&id=3032f09e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "No Connectivity" } }),
      _c(
        "ScrollView",
        { attrs: { background: "#131d4e" } },
        [
          _c(
            "StackLayout",
            [
              _c("Image", {
                attrs: { src: "~/images/logo.png", height: "200", width: "200" }
              }),
              _c("Label", {
                staticClass: "about-panel",
                attrs: {
                  textWrap: "true",
                  text:
                    "This application requires connectivity to the internet in order to show data on the tabs.  \n                \n                Please connect to the internet and close and reopen the app.\n                \n                Note that a small of data will be transmitted and a data charge may apply."
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "Close" },
                on: { tap: _vm.$modal.close }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./components/NoConnect.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoConnect_vue_vue_type_template_id_3032f09e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/NoConnect.vue?vue&type=template&id=3032f09e&");
/* harmony import */ var _NoConnect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/NoConnect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NoConnect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/NoConnect.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NoConnect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoConnect_vue_vue_type_template_id_3032f09e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NoConnect_vue_vue_type_template_id_3032f09e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3032f09e')) {
      api.createRecord('3032f09e', component.options)
    } else {
      api.reload('3032f09e', component.options)
    }
    module.hot.accept("./components/NoConnect.vue?vue&type=template&id=3032f09e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _NoConnect_vue_vue_type_template_id_3032f09e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/NoConnect.vue?vue&type=template&id=3032f09e&");
(function () {
      api.rerender('3032f09e', {
        render: _NoConnect_vue_vue_type_template_id_3032f09e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _NoConnect_vue_vue_type_template_id_3032f09e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/NoConnect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/NoConnect.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConnect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/NoConnect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConnect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/NoConnect.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConnect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/NoConnect.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConnect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConnect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConnect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConnect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConnect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/NoConnect.vue?vue&type=template&id=3032f09e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConnect_vue_vue_type_template_id_3032f09e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/NoConnect.vue?vue&type=template&id=3032f09e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConnect_vue_vue_type_template_id_3032f09e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConnect_vue_vue_type_template_id_3032f09e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ob0Nvbm5lY3QudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm9Db25uZWN0LnZ1ZT81MTFjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm9Db25uZWN0LnZ1ZT8yNTY4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm9Db25uZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vQ29ubmVjdC52dWU/Y2U3MSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vQ29ubmVjdC52dWU/ZDI1ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vQ29ubmVjdC52dWU/YzkwMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBLEdBUEE7QUFTQTtBQUNBO0FBREEsR0FUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkEsR0FiQTtBQXFCQTtBQUNBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxtQ0FGQSxDQUdBO0FBQ0EsS0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0E7QUFDQSxLQVRBLEdBU0E7QUFDQTtBQUNBLEtBWEE7QUFZQTtBQWxDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQSxHOzs7Ozs7O0FDbkJBLHlFQUEyQixtQkFBTyxDQUFDLGdEQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxtQkFBbUIsbUJBQW1CLG9CQUFvQixrQkFBa0IsZ0NBQWdDLEdBQUc7OztBQUd0SSx3QkFBd0IsbUJBQU8sQ0FBQywrREFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDhEQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixvREFBb0Q7QUFDbkYsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsMkJBQTJCLEVBQUU7QUFDN0Q7QUFDQTtBQUNBLFNBQVMsU0FBUyx3QkFBd0IsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QyxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdGO0FBQzNCO0FBQ0w7QUFDYTs7O0FBR3JFO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQTJFO0FBQy9GLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDJEQUFnRCxFQUFFO0FBQUE7QUFDeEU7QUFDQSxnQkFBZ0Isb0ZBQU07QUFDdEIseUJBQXlCLDZGQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBeUssQ0FBZ0IsNk9BQUcsRUFBQyxDOzs7Ozs7OztBQ0E3TDtBQUFBO0FBQUE7QUFBQTtBQUFxWCxDQUFnQixvYUFBRyxFQUFDLEM7Ozs7Ozs7O0FDQXpZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJidW5kbGUuMzhjZDQ1ZGNjZjZhYjc0MDYxMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZSA+XHJcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNC1XaGVlbGVyc1wiIGNsYXNzPVwiYWN0aW9uLWJhclwiIHRleHRXcmFwPVwidHJ1ZVwiIC8+XHJcbiAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZVBhbmVsXCI+XHJcbiAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2xvZ28ucG5nXCIgaGVpZ2h0PVwiMjAwXCIgd2lkdGg9XCIyMDBcIiAvPlxyXG4gICAgICAgIDxMYWJlbFxyXG4gICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgIHRleHQ9XCJUaGlzIEFwcCB3aWxsIGtlZXAgeW91IHVwZGF0ZWQgb24gdGhlIGFjdGl2aXRpZXMsIGRpcmVjdG9ycywgc3BvbnNvcnMgYW5kIHRyYWlscyBmb3IgdGhlIENvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnMgY2x1YlwiXHJcbiAgICAgICAgICBjbGFzcz1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxMaXN0VmlldyBmb3I9XCJpdGVtIGluIG1pc2NcIiBoZWlnaHQ9XCIxNjBcIiBjbGFzcyA9IFwiaG9tZVBhbmVsXCI+XHJcbiAgICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5tb3RkXCIgY2xhc3M9XCJyZWQtbWVzc2FnZVwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgPC9MaXN0Vmlldz5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgdGV4dD1cIkFib3V0IFVzXCIgQHRhcD1cIm9uQWJvdXRVc1RhcFwiIC8+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICA8L1Njcm9sbFZpZXc+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBBYm91dFVzIGZyb20gXCJ+L2NvbXBvbmVudHMvQWJvdXRVc1wiO1xyXG4gICAgaW1wb3J0IE5vQ29ubmVjdCBmcm9tIFwifi9jb21wb25lbnRzL05vQ29ubmVjdFwiO1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4gICAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gICAgICAgIGRhdGE6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1pc2M6IFtdXHJcblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNvbXBvbmVudHM6IHsgXHJcbiAgICAgICAgICAgIEFib3V0VXMgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbkFib3V0VXNUYXAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKEFib3V0VXMpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYXhpb3MoeyBtZXRob2Q6IFwiR0VUXCIsIFwidXJsXCI6IFwiaHR0cDovL2RhdGEuY3NjNHcuY29tL21pc2MuanNvblwiIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCBpcyBcIiArIHJlc3VsdC5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWlzYyA9IHJlc3VsdC5kYXRhLm1pc2M7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzdWx0IGlzIFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEubWlzYyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY2F1Z2h0IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKE5vQ29ubmVjdCk7XHJcbiAgICAgICAgICAgIH0pLCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIFwiICsgZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmhvbWVQYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNTtcclxuICBmb250LXNpemU6IDE1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiTm8gQ29ubmVjdGl2aXR5XCIgLz5cclxuICAgICAgICA8U2Nyb2xsVmlldyBiYWNrZ3JvdW5kPVwiIzEzMWQ0ZVwiPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvbG9nby5wbmdcIiBoZWlnaHQ9XCIyMDBcIiB3aWR0aD1cIjIwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJhYm91dC1wYW5lbFwiIHRleHRXcmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlRoaXMgYXBwbGljYXRpb24gcmVxdWlyZXMgY29ubmVjdGl2aXR5IHRvIHRoZSBpbnRlcm5ldCBpbiBvcmRlciB0byBzaG93IGRhdGEgb24gdGhlIHRhYnMuICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgY29ubmVjdCB0byB0aGUgaW50ZXJuZXQgYW5kIGNsb3NlIGFuZCByZW9wZW4gdGhlIGFwcC5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBOb3RlIHRoYXQgYSBzbWFsbCBvZiBkYXRhIHdpbGwgYmUgdHJhbnNtaXR0ZWQgYW5kIGEgZGF0YSBjaGFyZ2UgbWF5IGFwcGx5LlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIEB0YXA9XCIkbW9kYWwuY2xvc2VcIiB0ZXh0PVwiQ2xvc2VcIiBjbGFzcz1cImJ1dHRvblwiIC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAuYWJvdXQtcGFuZWwge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFib3V0LXBhbmVsIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEyO1xcbiAgICBwYWRkaW5nOiAxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL05vQ29ubmVjdC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJObyBDb25uZWN0aXZpdHlcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmQ6IFwiIzEzMWQ0ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9pbWFnZXMvbG9nby5wbmdcIiwgaGVpZ2h0OiBcIjIwMFwiLCB3aWR0aDogXCIyMDBcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhYm91dC1wYW5lbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICBcIlRoaXMgYXBwbGljYXRpb24gcmVxdWlyZXMgY29ubmVjdGl2aXR5IHRvIHRoZSBpbnRlcm5ldCBpbiBvcmRlciB0byBzaG93IGRhdGEgb24gdGhlIHRhYnMuICBcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIFBsZWFzZSBjb25uZWN0IHRvIHRoZSBpbnRlcm5ldCBhbmQgY2xvc2UgYW5kIHJlb3BlbiB0aGUgYXBwLlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgTm90ZSB0aGF0IGEgc21hbGwgb2YgZGF0YSB3aWxsIGJlIHRyYW5zbWl0dGVkIGFuZCBhIGRhdGEgY2hhcmdlIG1heSBhcHBseS5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS4kbW9kYWwuY2xvc2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTm9Db25uZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDMyZjA5ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob0Nvbm5lY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob0Nvbm5lY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL05vQ29ubmVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcbmF0aXZlc2NyaXB0XFxcXGNzYzR3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMwMzJmMDllJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMwMzJmMDllJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMwMzJmMDllJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob0Nvbm5lY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwMzJmMDllJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMwMzJmMDllJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL05vQ29ubmVjdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm9Db25uZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vQ29ubmVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vQ29ubmVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob0Nvbm5lY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm9Db25uZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDMyZjA5ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=