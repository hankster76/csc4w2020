webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AboutUs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutUs.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
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
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "GET",
      "url": "http://data.csc4w.com/misc.json"
    }).then(result => {
      console.log("Result is " + result.statusText);
      this.misc = result.data.misc; //console.log("result is " + JSON.stringify(result.data.misc);
    }).catch(error => {
      console.log("Error caught");
      this.$showModal(NoConnect);
    }), error => {
      this.$showModal(NoConnect);
    };
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBLEdBUEE7QUFTQTtBQUNBO0FBREEsR0FUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkEsR0FiQTtBQXFCQTtBQUNBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxtQ0FGQSxDQUdBO0FBQ0EsS0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0E7QUFDQSxLQVRBLEdBU0E7QUFDQTtBQUNBLEtBWEE7QUFZQTtBQWxDQSxHIiwiZmlsZSI6ImJ1bmRsZS5iNTFhMDM1ZWY0OTIzYzkzMWFhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlID5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJDb2xvcmFkbyBTcHJpbmdzIENocmlzdGlhbiA0LVdoZWVsZXJzXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCIgdGV4dFdyYXA9XCJ0cnVlXCIgLz5cclxuICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJob21lUGFuZWxcIj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvbG9nby5wbmdcIiBoZWlnaHQ9XCIyMDBcIiB3aWR0aD1cIjIwMFwiIC8+XHJcbiAgICAgICAgPExhYmVsXHJcbiAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIlxyXG4gICAgICAgICAgdGV4dD1cIlRoaXMgQXBwIHdpbGwga2VlcCB5b3UgdXBkYXRlZCBvbiB0aGUgYWN0aXZpdGllcywgZGlyZWN0b3JzLCBzcG9uc29ycyBhbmQgdHJhaWxzIGZvciB0aGUgQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNC1XaGVlbGVycyBjbHViXCJcclxuICAgICAgICAgIGNsYXNzPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPExpc3RWaWV3IGZvcj1cIml0ZW0gaW4gbWlzY1wiIGhlaWdodD1cIjE2MFwiIGNsYXNzID0gXCJob21lUGFuZWxcIj5cclxuICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLm1vdGRcIiBjbGFzcz1cInJlZC1tZXNzYWdlXCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cclxuICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICA8L0xpc3RWaWV3PlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3M9XCJidXR0b25cIiB0ZXh0PVwiQWJvdXQgVXNcIiBAdGFwPVwib25BYm91dFVzVGFwXCIgLz5cclxuICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvU2Nyb2xsVmlldz5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEFib3V0VXMgZnJvbSBcIn4vY29tcG9uZW50cy9BYm91dFVzXCI7XHJcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbiAgICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgICAgICAgZGF0YTogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWlzYzogW11cclxuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY29tcG9uZW50czogeyBcclxuICAgICAgICAgICAgQWJvdXRVcyBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uQWJvdXRVc1RhcCgpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoQWJvdXRVcyk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBheGlvcyh7IG1ldGhvZDogXCJHRVRcIiwgXCJ1cmxcIjogXCJodHRwOi8vZGF0YS5jc2M0dy5jb20vbWlzYy5qc29uXCIgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IGlzIFwiICsgcmVzdWx0LnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taXNjID0gcmVzdWx0LmRhdGEubWlzYztcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXN1bHQgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5taXNjKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjYXVnaHRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoTm9Db25uZWN0KTtcclxuICAgICAgICAgICAgfSksIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChOb0Nvbm5lY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5ob21lUGFuZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTU7XHJcbiAgZm9udC1zaXplOiAxNTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==