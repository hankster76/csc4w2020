webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Trails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutTrails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutTrails.vue");
/* harmony import */ var _TrailDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/TrailDetails.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: () => {
    return {
      "trails": []
      /*
                      {
                          "name": "Metberry Gulch", 
                          "imagesrc": "~/images/metberry1.jpg", 
                          "difficulty": "Easy/Moderate", 
                          "coordinates": "39.10238, -105.27686",
                          "funtrex": "https://funtreks.com/off-road-trails/the-gulches/",
                          "cotrex": "https://trails.colorado.gov/places/na~1458196",
                          "desc": "Metberry Gulch is part of the Cedar Mountain Gulch Trails.  This is the easiest of the three trails off of Cedar Mountain Road."
                      },
                      {
                          "name": "Longwater Gulch", 
                          "imagesrc": "~/images/longwater.jpg", 
                          "difficulty": "Moderate/Difficult", 
                          "coordinates": "39.09814, -105.27518",
                          "funtrex": "https://funtreks.com/off-road-trails/the-gulches/",
                          "cotrex": "https://trails.colorado.gov/places/na~1458189",
                          "desc": "Longwater Gulch is part of the Cedar Mountain Gulch Trails.  It is mostly easy but has one intermediate section as pictured here"
                      },
                      {
                          "name": "Hackett Gulch", 
                          "imagesrc": "~/images/hackett1.jpg", 
                          "difficulty": "Difficult", 
                          "coordinates": "39.0783, -105.27192",
                          "funtrex": "https://funtreks.com/off-road-trails/the-gulches/",
                          "cotrex": "https://trails.colorado.gov/places/na~1458192",
                          "desc": "Hackett Gulch is part of the Cedar Mountain Gulch Trails.  It is the most difficult of the three trails.  You will do best with a vehicle that has larger tires, more ground clearance, and lockers.  Hackett Rock, pictured here, is the most difficult obstacle on the trail."
                      },
                      {
                          "name": "Hells Revenge, Moab", 
                          "imagesrc": "~/images/hellsrevenge.jpg", 
                          "difficulty": "Difficult", 
                          "coordinates": "38.57539, -109.52276",
                          "funtrex": "https://funtreks.com/off-road-trails/hells-revenge/",
                          "cotrex": "none",
                          "desc": "Hells revenge is one of the most popular and well known trails in Moab.  It has steep climbs on slick rock that can be difficult with normal tires.  It also includes Hells Gate (pictured) which is a popular challenge that is an optional obstacle."
                      },
                      {
                          "name": "Mount Baldy", 
                          "imagesrc": "~/images/mtbaldy.jpg", 
                          "difficulty": "Easy", 
                          "coordinates": "38.760909,-104.983131",
                          "funtrex": "https://funtreks.com/off-road-trails/mt-baldy/",
                          "cotrex": "https://trails.colorado.gov/roads/almagre-10907",
                          "desc": "Mount Baldy trail is a very scenic shelf trail that approaches the top of Mount Baldy.  "
                      },
                      {
                          "name": "Eagle Rock", 
                          "imagesrc": "~/images/eaglerock.jpg", 
                          "difficulty": "Difficult", 
                          "coordinates": "38.735519,-104.987864",
                          "funtrex": "https://funtreks.com/off-road-trails/eagle-rock-saran-wrap/",
                          "cotrex": "https://trails.colorado.gov/map/@38.735352,-104.988177,13.00z/details",
                          "desc": "Eagle Rock is an extremely difficult trail that will challenge almost any rig.  This trail may include Saran Wrap which is also very difficult."
                      },
                      {
                          "name": "China Wall", 
                          "imagesrc": "~/images/chinawall.jpg", 
                          "difficulty": "Moderate to Difficult", 
                          "coordinates": "39.11101,-105.47355",
                          "funtrex": "https://funtreks.com/off-road-trails/china-wall/",
                          "cotrex": "https://trails.colorado.gov/roads/china-wall-8814",
                          "desc": "China Wall is a fairly easy trail to navigate and most obstacles have a bypass.  There is one obstacle that is difficult to navigate with larger vehicles which is why this trail is rated the way it is.  Stock Jeeps and other brands of similar size should be able to make this obstacle but may scrape skid plate or damage plastic steps or fender guards."
                      },
                      {
                          "name": "Chinaman Gulch", 
                          "imagesrc": "~/images/chinaman.jpg", 
                          "difficulty": "Difficult", 
                          "coordinates": "38.79199,-106.08560",
                          "funtrex": "https://funtreks.com/off-road-trails/chinaman-gulch-carnage-canyon/",
                          "cotrex": "https://trails.colorado.gov/trails/chinaman-gulch-loop-20469",
                          "desc": "Chinaman gulch is a very difficult trail that will challenge most drivers. The trail is very steep and rocky in places and is not bypassable.  This should only be attempted by experienced wheelers with at least 35 inch tires and lockers."
                      },
                      {
                          "name": "Medano Pass", 
                          "imagesrc": "~/images/medanoPass.jpg", 
                          "difficulty": "Easy/Moderate", 
                          "coordinates": "37.83647,-105.30761",
                          "funtrex": "https://funtreks.com/off-road-trails/medano-pass/",
                          "cotrex": "https://trails.colorado.gov/roads/medano-pass-10635",
                          "desc": "Medano Pass is a fairly easy road but will require at least a stock 4x4 vehicle.  The trail ends up at the Great Sand Dunes and is very scenic."
                      },
                      {
                          "name": "Blanca Peak", 
                          "imagesrc": "~/images/blanca.jpg", 
                          "difficulty": "Difficult", 
                          "coordinates": "37.52185, -105.60193",
                          "funtrex": "https://funtreks.com/off-road-trails/blanca-peak/",
                          "cotrex": "https://trails.colorado.gov/trails/blanca-peak-11856",
                          "desc": "Blanca Peak is an extremely difficult trail and should only be attempted by experienced wheelers in highly modified rigs."
                      },
                      {
                          "name": "Mosquito Pass", 
                          "imagesrc": "~/images/mosquito.jpg", 
                          "difficulty": "Moderate", 
                          "coordinates": "39.27037, -106.04751",
                          "funtrex": "https://funtreks.com/off-road-trails/mosquito-pass/",
                          "cotrex": "none",
                          "desc": "Highest pass road in Colorado open to motorized travel. Views from the 13,185 ft. summit are impressive on a clear day. Very interesting mine structures on the east side. "
                      },
                      {
                          "name": "Wheeler Lake", 
                          "imagesrc": "~/images/wheeler.jpg", 
                          "difficulty": "Difficult", 
                          "coordinates": "39.35703, -106.08289",
                          "funtrex": "https://funtreks.com/off-road-trails/wheeler-lake/",
                          "cotrex": "https://trails.colorado.gov/places/na~690507",
                          "desc": "A difficult trail to a beautiful lake above timberline.  Should only be attempted by experienced wheelers in modified rigs"
                      },
                      {
                          "name": "Slide Lake", 
                          "imagesrc": "~/images/slide.jpg", 
                          "difficulty": "Moderate", 
                          "coordinates": "39.34718, -106.33212",
                          "funtrex": "https://funtreks.com/off-road-trails/slide-lake-wurts-ditch-no-name-gulch/",
                          "cotrex": "https://trails.colorado.gov/search?q=slide%20lake",
                          "desc": "This is really three completely different trails combined into one. Slide Lake is a rocky 4-wheel-drive road with a great scenic ending."
                      },
                      {
                          "name": "Holy Cross", 
                          "imagesrc": "~/images/holycross.jpg", 
                          "difficulty": "Difficult", 
                          "coordinates": "39.50043, -106.43308",
                          "funtrex": "https://funtreks.com/off-road-trails/holy-cross/",
                          "cotrex": "https://trails.colorado.gov/search?q=holy%20cross%204x4%20trail",
                          "desc": "A very difficult trail with many obstacles.  This trail requires experienced wheelers in highly modified trails."
                      },
                      {
                          "name": "Mineral Creek", 
                          "imagesrc": "~/images/mineralcreek.jpg", 
                          "difficulty": "Difficult", 
                          "coordinates": "37.98864, -107.64951",
                          "funtrex": "https://funtreks.com/off-road-trails/mineral-creek/",
                          "cotrex": "https://trails.colorado.gov/map/@37.977282,-107.638634,13.43z/details",
                          "desc": "This trail provides access to Engineer pass and the Apine Loop from the Ouray side.  It has a few difficult obstacles that cannot be bypassed but is passable by stock 4x4s with off-road tires.  Ground clearance is a MUST!"
                      },
                      {
                          "name": "Engineer Pass", 
                          "imagesrc": "~/images/engineer.jpg", 
                          "difficulty": "Moderate", 
                          "coordinates": "37.95752, -107.5754",
                          "funtrex": "https://funtreks.com/off-road-trails/engineer-pass/",
                          "cotrex": "https://trails.colorado.gov/trailheads/engineer-pass-2760",
                          "desc": "This trail, combined with Cinnamon Pass, constitutes most of the famous Alpine Loop. It is an exhilarating trip for drivers of all experience levels. There are many mines and points of historical interest along the route."
                      },
                      {
                          "name": "Cinnamon Pass", 
                          "imagesrc": "~/images/cinnamon.jpg", 
                          "difficulty": "Moderate", 
                          "coordinates": "37.90372, -107.41187",
                          "funtrex": "https://funtreks.com/off-road-trails/cinnamon-pass-wager-gulch/",
                          "cotrex": "https://trails.colorado.gov/places/na~1456465",
                          "desc": "This trail, combined with Engineer Pass, constitutes most of the famous Alpine Loop. The western half of the trip passes many historic points and climbs to outstanding views. "
                      },
                      {
                          "name": "Black Bear Pass", 
                          "imagesrc": "~/images/blackbear.jpg", 
                          "difficulty": "Difficult", 
                          "coordinates": "37.80906, -107.80985",
                          "funtrex": "https://funtreks.com/off-road-trails/black-bear-pass/",
                          "cotrex": "https://trails.colorado.gov/roads/black-bear-9646",
                          "desc": "Incredible views from high above Red Mountain Pass and Telluride. Close-up views of historic mines and dramatic waterfalls. Feel the mist from spectacular Bridal Veil Falls. Road is closed November through May 1. Switchbacks are difficult and one-way downhill; no return to start."
                      },
                      {
                          "name": "Imogene Pass", 
                          "imagesrc": "~/images/imogene.jpg", 
                          "difficulty": "Difficult", 
                          "coordinates": "37.93997, -107.80985",
                          "funtrex": "https://funtreks.com/off-road-trails/imogene-pass/",
                          "cotrex": "https://trails.colorado.gov/places/na~1456626",
                          "desc": "Imogene Pass is the second highest drivable pass in Colorado. The drive is one of the most thrilling in the state. At Savage Basin, you’ll pass through Tomboy Townsite, once one of the most active mining towns in Colorado."
                      },
                      {
                          "name": "Poughkeepsie Gulch", 
                          "imagesrc": "~/images/poughkeepsie.jpg", 
                          "difficulty": "Difficult", 
                          "coordinates": "37.98832,-107.64954",
                          "funtrex": "https://funtreks.com/off-road-trails/poughkeepsie-gulch/",
                          "cotrex": "https://trails.colorado.gov/roads/poughkeepsie-gulch-18307",
                          "desc": "Scenic, remote valley offers variety of challenges for hard-core enthusiast. Most come to try their luck at the main obstacle shown here or just to watch others. Snow is usually not plowed, so trail opens later in the season. Stay off trail during wet periods. Scenic, remote valley offers variety of challenges for hard-core enthusiast. "
                      },
                      {
                          "name": "Yankee Boy Basin", 
                          "imagesrc": "~/images/yankeeboy.jpg", 
                          "difficulty": "Difficult", 
                          "coordinates": "38.01761, -107.67463",
                          "funtrex": "https://funtreks.com/off-road-trails/yankee-boy-basin/",
                          "cotrex": "https://trails.colorado.gov/places/na~1456868",
                          "desc": "One of the most popular destinations in the Ouray area due to its stunning natural beauty, rich history, and colorful wildflowers."
                      }
      
                      ]
      */

    };
  },
  methods: {
    onItemTap(args) {
      var view = args.view;
      var page = view.page;
      var tappedItem = view.bindingContext; //console.log("trail tapped");

      this.$showModal(_TrailDetails__WEBPACK_IMPORTED_MODULE_1__["default"], {
        props: {
          context: tappedItem,
          animated: true,
          transition: {
            "name": "slide",
            duration: 200,
            curve: "ease"
          }
        }
      });
    },

    onTrailsTap() {
      //console.log("Button was pressed");
      this.$showModal(_AboutTrails__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }

  },
  mounted: function mounted() {
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "GET",
      "url": "http://data.csc4w.com/trails.json"
    }).then(result => {
      this.trails = result.data.trails; //console.log("result is " + JSON.stringify(result.data.trails));
    }).catch(error => {
      console.log("Error caught " + error);
      this.$showModal(NoConnect);
    }), error => {
      console.log("Error " + error);
    };
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9UcmFpbHMudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQW9NQSxHQXZNQTtBQXlNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUhBLENBSUE7O0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUEsd0JBRkE7QUFHQTtBQUNBLDJCQURBO0FBRUEseUJBRkE7QUFHQTtBQUhBO0FBSEE7QUFEQTtBQVdBLEtBbEJBOztBQW1CQTtBQUNBO0FBQ0E7QUFDQTs7QUF0QkEsR0F6TUE7QUFtT0E7QUFDQTtBQUFBO0FBQUE7QUFBQSxPQUNBLElBREEsQ0FDQTtBQUNBLHVDQURBLENBRUE7QUFDQSxLQUpBLEVBS0EsS0FMQSxDQUtBO0FBQ0E7QUFDQTtBQUNBLEtBUkEsR0FRQTtBQUNBO0FBQ0EsS0FWQTtBQVdBO0FBL09BLEciLCJmaWxlIjoiYnVuZGxlLjYyZGJjYTkzNTc3ZjZhZjc3ZjkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNC1XaGVlbGVyc1wiIGNsYXNzPVwiYWN0aW9uLWJhclwiIC8+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGlzdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJoZWFkZXItbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgdGV4dD1cIlRyYWlsc1wiIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidXR0b25cIiB0ZXh0PVwiQWJvdXQgVGhlIFRyYWlsc1wiIEB0YXA9XCJvblRyYWlsc1RhcFwiIC8+XHJcbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJ0cmFpbCBpbiB0cmFpbHNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiIGhlaWdodD1cIjEwMCVcIiBzZXBhcmF0b3JDb2xvcj1cIndoaXRlXCIgY2xhc3M9XCJsaXN0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiMTUwLCpcIiAsIHJvd3M9XCIqLCpcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJ0cmFpbC5pbWFnZXNyY1wiIHJvdz1cIjBcIiBjb2w9XCIwXCIgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0cmFpbC5uYW1lXCIgY2xhc3M9XCJsaXN0UmlnaHRJdGVtXCIgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiMFwiIGNvbD1cIjFcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+ICAgXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT4gIFxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBBYm91dFRyYWlscyBmcm9tIFwiLi9BYm91dFRyYWlsc1wiO1xyXG4gICAgaW1wb3J0IFRyYWlsRGV0YWlscyBmcm9tIFwiLi9UcmFpbERldGFpbHNcIjtcclxuICAgIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0YTogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgXCJ0cmFpbHNcIjogW11cclxuLypcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNZXRiZXJyeSBHdWxjaFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvbWV0YmVycnkxLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJFYXN5L01vZGVyYXRlXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzOS4xMDIzOCwgLTEwNS4yNzY4NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy90aGUtZ3VsY2hlcy9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9wbGFjZXMvbmF+MTQ1ODE5NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIk1ldGJlcnJ5IEd1bGNoIGlzIHBhcnQgb2YgdGhlIENlZGFyIE1vdW50YWluIEd1bGNoIFRyYWlscy4gIFRoaXMgaXMgdGhlIGVhc2llc3Qgb2YgdGhlIHRocmVlIHRyYWlscyBvZmYgb2YgQ2VkYXIgTW91bnRhaW4gUm9hZC5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMb25nd2F0ZXIgR3VsY2hcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2xvbmd3YXRlci5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiTW9kZXJhdGUvRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzOS4wOTgxNCwgLTEwNS4yNzUxOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy90aGUtZ3VsY2hlcy9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9wbGFjZXMvbmF+MTQ1ODE4OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIkxvbmd3YXRlciBHdWxjaCBpcyBwYXJ0IG9mIHRoZSBDZWRhciBNb3VudGFpbiBHdWxjaCBUcmFpbHMuICBJdCBpcyBtb3N0bHkgZWFzeSBidXQgaGFzIG9uZSBpbnRlcm1lZGlhdGUgc2VjdGlvbiBhcyBwaWN0dXJlZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGFja2V0dCBHdWxjaFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvaGFja2V0dDEuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuMDc4MywgLTEwNS4yNzE5MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy90aGUtZ3VsY2hlcy9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9wbGFjZXMvbmF+MTQ1ODE5MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIkhhY2tldHQgR3VsY2ggaXMgcGFydCBvZiB0aGUgQ2VkYXIgTW91bnRhaW4gR3VsY2ggVHJhaWxzLiAgSXQgaXMgdGhlIG1vc3QgZGlmZmljdWx0IG9mIHRoZSB0aHJlZSB0cmFpbHMuICBZb3Ugd2lsbCBkbyBiZXN0IHdpdGggYSB2ZWhpY2xlIHRoYXQgaGFzIGxhcmdlciB0aXJlcywgbW9yZSBncm91bmQgY2xlYXJhbmNlLCBhbmQgbG9ja2Vycy4gIEhhY2tldHQgUm9jaywgcGljdHVyZWQgaGVyZSwgaXMgdGhlIG1vc3QgZGlmZmljdWx0IG9ic3RhY2xlIG9uIHRoZSB0cmFpbC5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIZWxscyBSZXZlbmdlLCBNb2FiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9oZWxsc3JldmVuZ2UuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzguNTc1MzksIC0xMDkuNTIyNzZcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvaGVsbHMtcmV2ZW5nZS9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJIZWxscyByZXZlbmdlIGlzIG9uZSBvZiB0aGUgbW9zdCBwb3B1bGFyIGFuZCB3ZWxsIGtub3duIHRyYWlscyBpbiBNb2FiLiAgSXQgaGFzIHN0ZWVwIGNsaW1icyBvbiBzbGljayByb2NrIHRoYXQgY2FuIGJlIGRpZmZpY3VsdCB3aXRoIG5vcm1hbCB0aXJlcy4gIEl0IGFsc28gaW5jbHVkZXMgSGVsbHMgR2F0ZSAocGljdHVyZWQpIHdoaWNoIGlzIGEgcG9wdWxhciBjaGFsbGVuZ2UgdGhhdCBpcyBhbiBvcHRpb25hbCBvYnN0YWNsZS5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNb3VudCBCYWxkeVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvbXRiYWxkeS5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiRWFzeVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzguNzYwOTA5LC0xMDQuOTgzMTMxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL210LWJhbGR5L1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3JvYWRzL2FsbWFncmUtMTA5MDdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJNb3VudCBCYWxkeSB0cmFpbCBpcyBhIHZlcnkgc2NlbmljIHNoZWxmIHRyYWlsIHRoYXQgYXBwcm9hY2hlcyB0aGUgdG9wIG9mIE1vdW50IEJhbGR5LiAgXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRWFnbGUgUm9ja1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvZWFnbGVyb2NrLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJEaWZmaWN1bHRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM4LjczNTUxOSwtMTA0Ljk4Nzg2NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy9lYWdsZS1yb2NrLXNhcmFuLXdyYXAvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvbWFwL0AzOC43MzUzNTIsLTEwNC45ODgxNzcsMTMuMDB6L2RldGFpbHNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJFYWdsZSBSb2NrIGlzIGFuIGV4dHJlbWVseSBkaWZmaWN1bHQgdHJhaWwgdGhhdCB3aWxsIGNoYWxsZW5nZSBhbG1vc3QgYW55IHJpZy4gIFRoaXMgdHJhaWwgbWF5IGluY2x1ZGUgU2FyYW4gV3JhcCB3aGljaCBpcyBhbHNvIHZlcnkgZGlmZmljdWx0LlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNoaW5hIFdhbGxcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2NoaW5hd2FsbC5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiTW9kZXJhdGUgdG8gRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzOS4xMTEwMSwtMTA1LjQ3MzU1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL2NoaW5hLXdhbGwvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3Yvcm9hZHMvY2hpbmEtd2FsbC04ODE0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiQ2hpbmEgV2FsbCBpcyBhIGZhaXJseSBlYXN5IHRyYWlsIHRvIG5hdmlnYXRlIGFuZCBtb3N0IG9ic3RhY2xlcyBoYXZlIGEgYnlwYXNzLiAgVGhlcmUgaXMgb25lIG9ic3RhY2xlIHRoYXQgaXMgZGlmZmljdWx0IHRvIG5hdmlnYXRlIHdpdGggbGFyZ2VyIHZlaGljbGVzIHdoaWNoIGlzIHdoeSB0aGlzIHRyYWlsIGlzIHJhdGVkIHRoZSB3YXkgaXQgaXMuICBTdG9jayBKZWVwcyBhbmQgb3RoZXIgYnJhbmRzIG9mIHNpbWlsYXIgc2l6ZSBzaG91bGQgYmUgYWJsZSB0byBtYWtlIHRoaXMgb2JzdGFjbGUgYnV0IG1heSBzY3JhcGUgc2tpZCBwbGF0ZSBvciBkYW1hZ2UgcGxhc3RpYyBzdGVwcyBvciBmZW5kZXIgZ3VhcmRzLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNoaW5hbWFuIEd1bGNoXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9jaGluYW1hbi5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzOC43OTE5OSwtMTA2LjA4NTYwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL2NoaW5hbWFuLWd1bGNoLWNhcm5hZ2UtY2FueW9uL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3RyYWlscy9jaGluYW1hbi1ndWxjaC1sb29wLTIwNDY5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiQ2hpbmFtYW4gZ3VsY2ggaXMgYSB2ZXJ5IGRpZmZpY3VsdCB0cmFpbCB0aGF0IHdpbGwgY2hhbGxlbmdlIG1vc3QgZHJpdmVycy4gVGhlIHRyYWlsIGlzIHZlcnkgc3RlZXAgYW5kIHJvY2t5IGluIHBsYWNlcyBhbmQgaXMgbm90IGJ5cGFzc2FibGUuICBUaGlzIHNob3VsZCBvbmx5IGJlIGF0dGVtcHRlZCBieSBleHBlcmllbmNlZCB3aGVlbGVycyB3aXRoIGF0IGxlYXN0IDM1IGluY2ggdGlyZXMgYW5kIGxvY2tlcnMuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWVkYW5vIFBhc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL21lZGFub1Bhc3MuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkVhc3kvTW9kZXJhdGVcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM3LjgzNjQ3LC0xMDUuMzA3NjFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvbWVkYW5vLXBhc3MvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3Yvcm9hZHMvbWVkYW5vLXBhc3MtMTA2MzVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJNZWRhbm8gUGFzcyBpcyBhIGZhaXJseSBlYXN5IHJvYWQgYnV0IHdpbGwgcmVxdWlyZSBhdCBsZWFzdCBhIHN0b2NrIDR4NCB2ZWhpY2xlLiAgVGhlIHRyYWlsIGVuZHMgdXAgYXQgdGhlIEdyZWF0IFNhbmQgRHVuZXMgYW5kIGlzIHZlcnkgc2NlbmljLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsYW5jYSBQZWFrXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9ibGFuY2EuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzcuNTIxODUsIC0xMDUuNjAxOTNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvYmxhbmNhLXBlYWsvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvdHJhaWxzL2JsYW5jYS1wZWFrLTExODU2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiQmxhbmNhIFBlYWsgaXMgYW4gZXh0cmVtZWx5IGRpZmZpY3VsdCB0cmFpbCBhbmQgc2hvdWxkIG9ubHkgYmUgYXR0ZW1wdGVkIGJ5IGV4cGVyaWVuY2VkIHdoZWVsZXJzIGluIGhpZ2hseSBtb2RpZmllZCByaWdzLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1vc3F1aXRvIFBhc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL21vc3F1aXRvLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJNb2RlcmF0ZVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuMjcwMzcsIC0xMDYuMDQ3NTFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvbW9zcXVpdG8tcGFzcy9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJIaWdoZXN0IHBhc3Mgcm9hZCBpbiBDb2xvcmFkbyBvcGVuIHRvIG1vdG9yaXplZCB0cmF2ZWwuIFZpZXdzIGZyb20gdGhlIDEzLDE4NSBmdC4gc3VtbWl0IGFyZSBpbXByZXNzaXZlIG9uIGEgY2xlYXIgZGF5LiBWZXJ5IGludGVyZXN0aW5nIG1pbmUgc3RydWN0dXJlcyBvbiB0aGUgZWFzdCBzaWRlLiBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaGVlbGVyIExha2VcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3doZWVsZXIuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuMzU3MDMsIC0xMDYuMDgyODlcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvd2hlZWxlci1sYWtlL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3BsYWNlcy9uYX42OTA1MDdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJBIGRpZmZpY3VsdCB0cmFpbCB0byBhIGJlYXV0aWZ1bCBsYWtlIGFib3ZlIHRpbWJlcmxpbmUuICBTaG91bGQgb25seSBiZSBhdHRlbXB0ZWQgYnkgZXhwZXJpZW5jZWQgd2hlZWxlcnMgaW4gbW9kaWZpZWQgcmlnc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNsaWRlIExha2VcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3NsaWRlLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJNb2RlcmF0ZVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuMzQ3MTgsIC0xMDYuMzMyMTJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvc2xpZGUtbGFrZS13dXJ0cy1kaXRjaC1uby1uYW1lLWd1bGNoL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3NlYXJjaD9xPXNsaWRlJTIwbGFrZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIlRoaXMgaXMgcmVhbGx5IHRocmVlIGNvbXBsZXRlbHkgZGlmZmVyZW50IHRyYWlscyBjb21iaW5lZCBpbnRvIG9uZS4gU2xpZGUgTGFrZSBpcyBhIHJvY2t5IDQtd2hlZWwtZHJpdmUgcm9hZCB3aXRoIGEgZ3JlYXQgc2NlbmljIGVuZGluZy5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIb2x5IENyb3NzXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9ob2x5Y3Jvc3MuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuNTAwNDMsIC0xMDYuNDMzMDhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvaG9seS1jcm9zcy9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9zZWFyY2g/cT1ob2x5JTIwY3Jvc3MlMjA0eDQlMjB0cmFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIkEgdmVyeSBkaWZmaWN1bHQgdHJhaWwgd2l0aCBtYW55IG9ic3RhY2xlcy4gIFRoaXMgdHJhaWwgcmVxdWlyZXMgZXhwZXJpZW5jZWQgd2hlZWxlcnMgaW4gaGlnaGx5IG1vZGlmaWVkIHRyYWlscy5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaW5lcmFsIENyZWVrXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9taW5lcmFsY3JlZWsuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzcuOTg4NjQsIC0xMDcuNjQ5NTFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvbWluZXJhbC1jcmVlay9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9tYXAvQDM3Ljk3NzI4MiwtMTA3LjYzODYzNCwxMy40M3ovZGV0YWlsc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIlRoaXMgdHJhaWwgcHJvdmlkZXMgYWNjZXNzIHRvIEVuZ2luZWVyIHBhc3MgYW5kIHRoZSBBcGluZSBMb29wIGZyb20gdGhlIE91cmF5IHNpZGUuICBJdCBoYXMgYSBmZXcgZGlmZmljdWx0IG9ic3RhY2xlcyB0aGF0IGNhbm5vdCBiZSBieXBhc3NlZCBidXQgaXMgcGFzc2FibGUgYnkgc3RvY2sgNHg0cyB3aXRoIG9mZi1yb2FkIHRpcmVzLiAgR3JvdW5kIGNsZWFyYW5jZSBpcyBhIE1VU1QhXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRW5naW5lZXIgUGFzc1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvZW5naW5lZXIuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIk1vZGVyYXRlXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzNy45NTc1MiwgLTEwNy41NzU0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL2VuZ2luZWVyLXBhc3MvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvdHJhaWxoZWFkcy9lbmdpbmVlci1wYXNzLTI3NjBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJUaGlzIHRyYWlsLCBjb21iaW5lZCB3aXRoIENpbm5hbW9uIFBhc3MsIGNvbnN0aXR1dGVzIG1vc3Qgb2YgdGhlIGZhbW91cyBBbHBpbmUgTG9vcC4gSXQgaXMgYW4gZXhoaWxhcmF0aW5nIHRyaXAgZm9yIGRyaXZlcnMgb2YgYWxsIGV4cGVyaWVuY2UgbGV2ZWxzLiBUaGVyZSBhcmUgbWFueSBtaW5lcyBhbmQgcG9pbnRzIG9mIGhpc3RvcmljYWwgaW50ZXJlc3QgYWxvbmcgdGhlIHJvdXRlLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNpbm5hbW9uIFBhc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2Npbm5hbW9uLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJNb2RlcmF0ZVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzcuOTAzNzIsIC0xMDcuNDExODdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvY2lubmFtb24tcGFzcy13YWdlci1ndWxjaC9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9wbGFjZXMvbmF+MTQ1NjQ2NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIlRoaXMgdHJhaWwsIGNvbWJpbmVkIHdpdGggRW5naW5lZXIgUGFzcywgY29uc3RpdHV0ZXMgbW9zdCBvZiB0aGUgZmFtb3VzIEFscGluZSBMb29wLiBUaGUgd2VzdGVybiBoYWxmIG9mIHRoZSB0cmlwIHBhc3NlcyBtYW55IGhpc3RvcmljIHBvaW50cyBhbmQgY2xpbWJzIHRvIG91dHN0YW5kaW5nIHZpZXdzLiBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGFjayBCZWFyIFBhc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2JsYWNrYmVhci5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzNy44MDkwNiwgLTEwNy44MDk4NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy9ibGFjay1iZWFyLXBhc3MvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3Yvcm9hZHMvYmxhY2stYmVhci05NjQ2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiSW5jcmVkaWJsZSB2aWV3cyBmcm9tIGhpZ2ggYWJvdmUgUmVkIE1vdW50YWluIFBhc3MgYW5kIFRlbGx1cmlkZS4gQ2xvc2UtdXAgdmlld3Mgb2YgaGlzdG9yaWMgbWluZXMgYW5kIGRyYW1hdGljIHdhdGVyZmFsbHMuIEZlZWwgdGhlIG1pc3QgZnJvbSBzcGVjdGFjdWxhciBCcmlkYWwgVmVpbCBGYWxscy4gUm9hZCBpcyBjbG9zZWQgTm92ZW1iZXIgdGhyb3VnaCBNYXkgMS4gU3dpdGNoYmFja3MgYXJlIGRpZmZpY3VsdCBhbmQgb25lLXdheSBkb3duaGlsbDsgbm8gcmV0dXJuIHRvIHN0YXJ0LlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkltb2dlbmUgUGFzc1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvaW1vZ2VuZS5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzNy45Mzk5NywgLTEwNy44MDk4NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy9pbW9nZW5lLXBhc3MvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvcGxhY2VzL25hfjE0NTY2MjZcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJJbW9nZW5lIFBhc3MgaXMgdGhlIHNlY29uZCBoaWdoZXN0IGRyaXZhYmxlIHBhc3MgaW4gQ29sb3JhZG8uIFRoZSBkcml2ZSBpcyBvbmUgb2YgdGhlIG1vc3QgdGhyaWxsaW5nIGluIHRoZSBzdGF0ZS4gQXQgU2F2YWdlIEJhc2luLCB5b3XigJlsbCBwYXNzIHRocm91Z2ggVG9tYm95IFRvd25zaXRlLCBvbmNlIG9uZSBvZiB0aGUgbW9zdCBhY3RpdmUgbWluaW5nIHRvd25zIGluIENvbG9yYWRvLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBvdWdoa2VlcHNpZSBHdWxjaFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvcG91Z2hrZWVwc2llLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJEaWZmaWN1bHRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM3Ljk4ODMyLC0xMDcuNjQ5NTRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvcG91Z2hrZWVwc2llLWd1bGNoL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3JvYWRzL3BvdWdoa2VlcHNpZS1ndWxjaC0xODMwN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIlNjZW5pYywgcmVtb3RlIHZhbGxleSBvZmZlcnMgdmFyaWV0eSBvZiBjaGFsbGVuZ2VzIGZvciBoYXJkLWNvcmUgZW50aHVzaWFzdC4gTW9zdCBjb21lIHRvIHRyeSB0aGVpciBsdWNrIGF0IHRoZSBtYWluIG9ic3RhY2xlIHNob3duIGhlcmUgb3IganVzdCB0byB3YXRjaCBvdGhlcnMuIFNub3cgaXMgdXN1YWxseSBub3QgcGxvd2VkLCBzbyB0cmFpbCBvcGVucyBsYXRlciBpbiB0aGUgc2Vhc29uLiBTdGF5IG9mZiB0cmFpbCBkdXJpbmcgd2V0IHBlcmlvZHMuIFNjZW5pYywgcmVtb3RlIHZhbGxleSBvZmZlcnMgdmFyaWV0eSBvZiBjaGFsbGVuZ2VzIGZvciBoYXJkLWNvcmUgZW50aHVzaWFzdC4gXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiWWFua2VlIEJveSBCYXNpblwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMveWFua2VlYm95LmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJEaWZmaWN1bHRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM4LjAxNzYxLCAtMTA3LjY3NDYzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL3lhbmtlZS1ib3ktYmFzaW4vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvcGxhY2VzL25hfjE0NTY4NjhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJPbmUgb2YgdGhlIG1vc3QgcG9wdWxhciBkZXN0aW5hdGlvbnMgaW4gdGhlIE91cmF5IGFyZWEgZHVlIHRvIGl0cyBzdHVubmluZyBuYXR1cmFsIGJlYXV0eSwgcmljaCBoaXN0b3J5LCBhbmQgY29sb3JmdWwgd2lsZGZsb3dlcnMuXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBdXHJcbiovXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBhcmdzLnZpZXc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlID0gdmlldy5wYWdlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFwcGVkSXRlbSA9IHZpZXcuYmluZGluZ0NvbnRleHQ7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidHJhaWwgdGFwcGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKFRyYWlsRGV0YWlscywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRhcHBlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uVHJhaWxzVGFwKCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChBYm91dFRyYWlscyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuICAgICBcclxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcInVybFwiOiBcImh0dHA6Ly9kYXRhLmNzYzR3LmNvbS90cmFpbHMuanNvblwiIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhaWxzID0gcmVzdWx0LmRhdGEudHJhaWxzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXN1bHQgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS50cmFpbHMpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNhdWdodCBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChOb0Nvbm5lY3QpO1xyXG4gICAgICAgICAgICB9KSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBcIiArIGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59ICAgXHJcblxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLnRyYWlsbmFtZSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBpYyB7XHJcbiAgICAgICAgcGFkZGluZzogMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmV2ZW50IHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgIH1cclxuXHJcbiAgICAuZXZlbnREYXRlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgIH1cclxuXHJcbiAgICAudHJhaWwtcGFuZWwge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgcGFkZGluZzogMjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItbGFiZWwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIxOTIxO1xyXG4gICAgICAgIGNvbG9yOiBXaGl0ZTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=