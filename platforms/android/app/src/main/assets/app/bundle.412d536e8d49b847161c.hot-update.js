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
      this.misc = result.data.misc;
      console.log("result is " + JSON.stringify(result.data.misc));
    }, error => {
      this.$showModal(NoConnect);
    });
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBLEdBUEE7QUFTQTtBQUNBO0FBREEsR0FUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkEsR0FiQTtBQXFCQTtBQUNBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsS0FOQSxFQU1BO0FBQ0E7QUFDQSxLQVJBO0FBU0E7QUEvQkEsRyIsImZpbGUiOiJidW5kbGUuNDEyZDUzNmU4ZDQ5Yjg0NzE2MWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZSA+XHJcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNC1XaGVlbGVyc1wiIGNsYXNzPVwiYWN0aW9uLWJhclwiIHRleHRXcmFwPVwidHJ1ZVwiIC8+XHJcbiAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZVBhbmVsXCI+XHJcbiAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2xvZ28ucG5nXCIgaGVpZ2h0PVwiMjAwXCIgd2lkdGg9XCIyMDBcIiAvPlxyXG4gICAgICAgIDxMYWJlbFxyXG4gICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgIHRleHQ9XCJUaGlzIEFwcCB3aWxsIGtlZXAgeW91IHVwZGF0ZWQgb24gdGhlIGFjdGl2aXRpZXMsIGRpcmVjdG9ycywgc3BvbnNvcnMgYW5kIHRyYWlscyBmb3IgdGhlIENvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnMgY2x1YlwiXHJcbiAgICAgICAgICBjbGFzcz1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxMaXN0VmlldyBmb3I9XCJpdGVtIGluIG1pc2NcIiBoZWlnaHQ9XCIxNjBcIiBjbGFzcyA9IFwiaG9tZVBhbmVsXCI+XHJcbiAgICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5tb3RkXCIgY2xhc3M9XCJyZWQtbWVzc2FnZVwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgPC9MaXN0Vmlldz5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgdGV4dD1cIkFib3V0IFVzXCIgQHRhcD1cIm9uQWJvdXRVc1RhcFwiIC8+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICA8L1Njcm9sbFZpZXc+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBBYm91dFVzIGZyb20gXCJ+L2NvbXBvbmVudHMvQWJvdXRVc1wiO1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4gICAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gICAgICAgIGRhdGE6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1pc2M6IFtdXHJcblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNvbXBvbmVudHM6IHsgXHJcbiAgICAgICAgICAgIEFib3V0VXMgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbkFib3V0VXNUYXAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKEFib3V0VXMpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYXhpb3MoeyBtZXRob2Q6IFwiR0VUXCIsIFwidXJsXCI6IFwiaHR0cDovL2RhdGEuY3NjNHcuY29tL21pc2MuanNvblwiIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCBpcyBcIiArIHJlc3VsdC5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWlzYyA9IHJlc3VsdC5kYXRhLm1pc2M7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBpcyBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdC5kYXRhLm1pc2MpKTtcclxuXHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChOb0Nvbm5lY3QpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uaG9tZVBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1O1xyXG4gIGZvbnQtc2l6ZTogMTU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=