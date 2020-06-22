webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Schedule.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScheduleDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ScheduleDetails.vue");
/* harmony import */ var _AboutSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/AboutSchedule.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: () => {
    return {
      events: []
      /*                
          {
            "name": "Mount Baldy",
            "group": "Group 1",
            "eventDate": "June 13th, 2020",
            "dateFld": "06/13/2020",
      	  "duration": 8,
      	  "startTimeFld": "8",
            "meetAt": "St. Pauls Catholic Church, 9 El Pomar Rd, Colorado Springs, CO, 80906",
            "meetTime": "8:00AM",
            "leaders": "Jim, Dan, Michelle",
            "leader1": "Jim",
            "leader1Phone": "(719)200-4757",
            "leader2": "Dan",
            "leader2Phone": "(719)210-1644",
            "leader3": "Michelle",
            "leader3Phone": "(719)229-1535",
            "rating": "Moderate",
            "imageSrc": "~/images/mtbaldy.jpg",
            "desc": "We will take the trail from Old Stage road and loop around the back side of Pikes Peak.  If the trail is passable we will drive to the top of Mount Baldy",
            "lat": "38.791414",
            "long": "-104.855010"
          },
          {
            "name": "Eagle Rock",
            "group": "Group 2",
            "eventDate": "June 13th, 2020",
            "dateFld": "06/13/2020",
      	  "duration": 8,
      	  "startTimeFld": "8",
            "meetAt": "St. Pauls Catholic Church, 9 El Pomar Rd, Colorado Springs, CO, 80906",
            "meetTime": "8:00AM",
            "leaders": "Ward, Glen",
            "leader1": "Ward",
            "leader1Phone": "(719)213-5912",
            "leader2": "Glen",
            "leader2Phone": "(719)371-7357",
            "rating": "Difficult",
            "imageSrc": "~/images/eaglerock.jpg",
            "desc": "Eagle Rock is a very difficult and challenging trail.  Experienced wheelers with modified rigs with larger tires and at least one locker are recommended.",
            "lat": "38.791414",
            "long": "-104.855010"
          },
          {
            "name": "China Wall",
            "group": "group 1",
            "eventDate": "June 20th, 2020",
            "dateFld": "06/20/2020",
      	  "duration": 8,
      	  "startTimeFld": "8",
            "meetAt": "Safeway, 3275 W Colorado Ave, Colorado Springs, CO, 80904",
            "meetTime": "8:00AM",
            "leaders": "Jim and Michelle",
            "leader1": "Jim",
            "leader1Phone": "(719)200-4757",
            "leader2": "Michelle",
            "leader2Phone": "(719)229-1535",
            "rating": "Intermediate",
            "imageSrc": "~/images/chinawall.jpg",
            "desc": "China Wall is a very scenic intermediate run.  Difficult obstacles may be bypassed.",
            "lat": "38.854702",
            "long": "-104.876140"
          },
          {
            "name": "Chinaman Gulch",
            "group": "group 2",
            "eventDate": "June 20th, 2020",
            "dateFld": "06/20/2020",
      	  "duration": 8,
      	  "startTimeFld": "9",
            "meetAt": "38.792186, -106.085202",
            "meetTime": "9:00AM",
            "leaders": "Glen and Dan",
            "leader1": "Glen",
            "leader1Phone": "(719)371-7357",
            "leader2": "Dan",
            "leader2Phone": "(719)210-1644",
            "rating": "Difficult",
            "imageSrc": "~/images/chinaman.jpg",
            "desc": "Chinaman Gulch is a challenging run and should not be attempted without modified vehicles.",
            "lat": "39.792186",
            "long": "-106.085202"
          },
          {
            "name": "Medano Pass Camping",
            "group": "Group All",
            "eventDate": "July 10th, 2020",
            "dateFld": "07/10/2020",
            "duration": 8,
            "startTimeFld": "17",
            "meetAt": "37.856027, -105.432721",
            "meetTime": "Afternoon/Evening",
            "leaders": "Glen and Kirk",
            "leader1": "Glen",
            "leader1Phone": "(719)371-7357",
            "leader2": "Kirk",
            "leaderPhone": "(719)650-6689",
            "rating": "Fun",
            "imageSrc": "~/images/Medano-Pass-Camping.jpg",
            "desc": "We will be camping Friday night near the Medano pass trailhead.  Contact the directors for this trip for more details.  The meeting place shows the start of the road and camping will be somewhere in this area.",
            "lat": "37.856027",
            "long": "-105.432721"
          },
          {
            "name": "Medano Pass Wheeling",
            "group": "Group 1",
            "eventDate": "July 11th, 2020",
            "dateFld": "07/11/2020",
      	    "duration": 8,
      	    "startTimeFld": "9",
            "meetAt": "37.856027, -105.432721",
            "meetTime": "9:00AM",
            "rating": "Easy to Intermediate",
            "leaders": "Glen and Kirk",
            "leader1": "Glen",
            "leader1Phone": "(719)371-7357",
            "leader2": "Kirk",
            "leaderPhone": "(719)650-6689",
            "imageSrc": "~/images/medanoPass.jpg",
            "desc": "We will leave the camping area at 9:00 and head over Medano Pass to the sand dunes.  This trail travels along Medano Creek with many water crossings and deep sand near the end at the Great Sand Dunes.",
            "lat": "37.521855",
            "long": "-105.601971"
          },
          {
            "name": "Blanca Peak Camping",
            "group": "Group 2",
            "eventDate": "July 10th, 2020",
            "dateFld": "07/10/2020",
      	  "duration": 8,
      	  "startTimeFld": "17",
            "meetAt": "Lake Como Road, Mosca, CO",
            "meetTime": "Afternoon/Evening",
            "leaders": "Pete and Dave",
            "leader1": "Pete",
            "leader1Phone": "(303)909-6715",
            "leader2": "Dave",
            "leader2Phone": "(719)634-6006",
            "rating": "Fun",
            "imageSrc": "~/images/Medano-Pass-Camping.jpg",
            "desc": "We will be camping Friday night on road to Blanca Peak Trail.  Contact the directors for this trip for more details.  The meeting place shows the start of the road and camping will be somewhere farther up this road.",
            "lat": "37.521855",
            "long": "-105.601971"
          },
          {
            "name": "Blanca Peak Wheeling",
            "group": "Group 2",
            "eventDate": "July 11th, 2020",
            "dateFld": "07/11/2020",
      	  "duration": 8,
      	  "startTimeFld": "9",
            "meetAt": "37.52185, -105.60193",
            "meetTime": "9:00AM",
            "rating": "Very Difficult",
            "leaders": "Pete and Dave",
            "leader1": "Pete",
            "leader1Phone": "(303)909-6715",
            "leader2": "Dave",
            "leader2Phone": "(719)634-6006",
            "imageSrc": "~/images/blanca.jpg",
            "desc": "We will leave the camping area at 9:00 and head to the top of Blanca Peak.  This trail is very difficult so you will need a lifted rig with larger tires and lockers.",
            "lat": "37.521855",
            "long": "-105.601971"
          },
          {
            "name": "Saint Elmo Camping",
            "group": "All groups ",
            "eventDate": "July 24th, 2020",
            "dateFld": "07/24/2020",
      	  "duration": 8,
      	  "startTimeFld": "17",
            "meetAt": "Saint Elmo Colorado",
            "meetTime": "Afternoon/Evening",
            "leaders": "Ward and Jason",
            "leader1": "Ward",
            "leader1Phone": "(719)213-5915",
            "leader2": "Jason",
            "leader2Phone": "(954)805-3660",
            "rating": "Fun",
            "imageSrc": "~/images/stelmo.jpg",
            "desc": "We will be camping Friday night near the town of St. Elmo.  Contact the directors for this trip for more details.  The meeting place shows the start of the road and camping will be somewhere in this area.",
            "lat": "38.704101",
            "long": "-106.345018"
          },
          {
            "name": "Saint Elmo Wheeling",
            "group": "All groups ",
            "eventDate": "July 25th, 2020",
            "dateFld": "07/25/2020",
      	  "duration": 8,
      	  "startTimeFld": "9",
            "meetAt": "Saint Elmo Colorado",
            "meetTime": "9:00AM in Saint Elmo",
            "leaders": "Ward and Jason",
            "leader1": "Ward",
            "leader1Phone": "(719)213-5915",
            "leader2": "Jason",
            "leader2Phone": "(954)805-3660",
            "rating": "Group 1 and 2 trails depending on who is there",
            "imageSrc": "~/images/tincup.jpg",
            "desc": "There are many trails in the St. Elmo area and we will decide that morning which trails will be run depending on the folks that show up.",
            "lat": "38.704101",
            "long": "-106.345018"
          },
          {
            "name": "Mosquito Pass",
            "group": "group 1",
            "eventDate": "August 8th, 2020",
            "dateFld": "08/08/2020",
      	  "duration": 8,
      	  "startTimeFld": "9",
            "meetAt": "Southpark Market, Fairplay Colorado",
            "meetTime": "9:00AM",
            "leaders": "Jim",
            "leader1": "Jim",
            "leader1Phone": "(719)200-4757",
            "rating": "Easy to Intermediate",
            "imageSrc": "~/images/mosquito.jpg",
            "desc": "This trip is fairly easy and VERY scenic.  We will go over Mosquito pass and return on Weston pass.",
            "lat": "39.216727",
            "long": "-105.993665"
          },
          {
            "name": "Wheeler Lake",
            "group": "group 2",
            "eventDate": "August 8th, 2020",
            "dateFld": "08/08/2020",
      	  "duration": 8,
      	  "startTimeFld": "9",
            "meetAt": "Southpark Market, Fairplay Colorado",
            "meetTime": "9:00AM",
            "leaders": "Jeremy and Michelle",
            "leader1": "Jeremy",
            "leader1Phone": "(719)205-2565",
            "leader2": "Jason",
            "leader2Phone": "(719)229-1535",
            "rating": "Difficult",
            "imageSrc": "~/images/wheeler.jpg",
            "desc": "This trip is difficult and will require lifted rigs with larger tires and at least a rear locker",
            "lat": "39.216727",
            "long": "-105.993665"
          },
          {
            "name": "Slide Lake",
            "group": "Group 1",
            "eventDate": "Aug 22nd, 2020",
            "dateFld": "08/22/2020",
      	  "duration": 8,
      	  "startTimeFld": "9",
            "meetAt": "Slide Lake Trailhead",
            "meetTime": "9:00AM",
            "leaders": "Keith and Glenn",
            "leader1": "Keith",
            "leader1Phone": "(812)455-5477",
            "leader2": "Glenn",
            "leader2Phone": "720-219-5384",
            "rating": "Easy",
            "imageSrc": "~/images/slide.jpg",
            "desc": "Slide Lake is a beautiful and easy drive.  There may be camping the night before this trip so contact the trip leaders if you are interested in this",
            "lat": "39.369259",
            "long": "-106.385393"
          },
          {
            "name": "Holy Cross",
            "group": "Group 2",
            "eventDate": "Aug 22nd, 2020",
            "dateFld": "08/22/2020",
      	  "duration": 8,
      	  "startTimeFld": "9",
            "meetAt": "39.403161, -106.443553",
            "meetTime": "9:00AM",
            "leaders": "Pete and Dave",
            "leader1": "Pete",
            "leader1Phone": "720-219-5384",
            "leader2": "Dave",
            "leader2Phone": "(719)205-2565",
            "rating": "Difficult",
            "imageSrc": "~/images/holycross.jpg",
            "desc": "Holy Cross is one of the hardest trails in Colorado.  You will need a heavily modified vehicle for this trail.  There may be camping the night before this trip so contact the trip leaders if you are interested in this",
            "lat": "39.403161",
            "long": "-106.443553"
          },
          {
            "name": "Rimrocker Trail",
            "group": "Group 2",
            "eventDate": "Sept 2nd-Sept 4th, 2020",
            "dateFld": "09/02/2020",
      	  "duration": 8,
      	  "startTimeFld": "8",
            "meetAt": "",
            "meetTime": "",
            "leaders": "Kirk and Jeremy",
            "leader1": "Kirk",
            "leader1Phone": "(719)650-6689",
            "leader2": "Jeremy",
            "leader2Phone": "(719)205-2565",
            "rating": "Moderate",
            "imageSrc": "~/images/rimrocker.jpg",
            "desc": "This is an overland trip where we will wheel and camp along the trail.  Contact Kirk or Jeremy if you are interested in this trip and for details.",
            "lat": "",
            "long": ""
          },
          {
            "name": "Labor Day Wheeling in Moab, UT",
            "group": "Group 1 and 2",
            "eventDate": "Sept 5th - Sept 7th, 2020",
            "dateFld": "09/05/2020",
      	  "duration": 8,
      	  "startTimeFld": "9",
            "meetAt": "Outlaw Jeep Adventures Moab,Utah",
            "meetTime": "9:00AM on Sept. 5th",
            "leaders": "Kirk and Jeremy",
            "leader1": "Kirk",
            "leader1Phone": "(719)650-6689",
            "leader2": "Jeremy",
            "leader2Phone": "(719)205-2565",
            "rating": "All types of trails",
            "imageSrc": "~/images/hellsrevenge.jpg",
            "desc": "Meet each day at Outlaw Jeep Adventures parking lot for various trails around Moab.  Make your own accomodations either camping or at a hotel.  Contact Kirk or Jeremy if you have any questions",
            "lat": "",
            "long": ""
          },
          {
            "name": "Alpine Loop in Ouray",
            "group": "All Groups",
            "eventDate": "Sept 5th, 2020",
            "dateFld": "09/05/2020",
      	  "duration": 8,
      	  "startTimeFld": "8",
            "meetAt": "1220 Main St., Ouray, CO, 81427",
            "meetTime": "8:00AM",
            "leaders": "Dan",
            "leader1": "Dan",
            "leader1Phone": "(719)210-1644",
            "rating": "Intermediate",
            "imageSrc": "~/images/alpineloop.jpg",
            "desc": "The Alpine Loop is an intermediate trip with a few difficult spots.  Depending on trail conditions and the rigs that are there, it may include Engineer Pass, Cinammon pass, Poughkeepsie Gulch and others.",
            "lat": "38.029151",
            "long": "-107.673308"
          },
          {
            "name": "Blackbear and Imogene Passes",
            "group": "Group 2",
            "eventDate": "Sept 6th, 2020",
            "dateFld": "09/06/2020",
      	  "duration": 8,
      	  "startTimeFld": "8",
            "meetAt": "1220 Main St., Ouray, CO, 81427",
            "meetTime": "8:00AM",
            "leaders": "Dan",
            "leader1": "Dan",
            "leader1Phone": "(719)210-1644",
            "rating": "Difficult",
            "imageSrc": "~/images/blackbear.jpg",
            "desc": "Blackbear Pass is one of the most famous trails in Colorado.  It is difficult and the trail is very narrow.",
            "lat": "37.896704",
            "long": "-107.713521"
          },
          {
            "name": "Trail Cleanup Day #2",
            "group": "All Groups",
            "eventDate": "Sept 19th, 2020",
            "dateFld": "09/19/2020",
      	  "duration": 8,
      	  "startTimeFld": "9",
            "meetAt": "Saint Pauls Catholic Church Colorado Springs",
            "meetTime": "9:00AM",
            "leaders": "Jim",
            "leader1": "Jim",
            "leader1Phone": "(719)200-4757",
            "rating": "Fun/Hard Work",
            "imageSrc": "~/images/trailcleanup.jpg",
            "desc": "CSC4W has adopted the Mt. Baldy trail system and we spend 2 days a year helping the US Forest Service with trail clean-up and repair.  This is an important event for our club and all members are encouraged to come and help.  Bring your own lunch and if time permits, we will do a little wheeling as well.",
            "lat": "38.790637",
            "long": "-104.855015"
          },
          {
            "name": "Picket Wire Canyonlands",
            "group": "All Groups",
            "eventDate": "Oct 3rd, 2020",
            "dateFld": "10/03/2020",
      	  "duration": 8,
      	  "startTimeFld": "8",
            "meetAt": "",
            "meetTime": "",
            "leaders": "Jim",
            "leader1": "Jim",
            "leader1Phone": "(719)200-4757",
            "rating": "Fun",
            "imageSrc": "~/images/picketwire.jpg",
            "desc": "This will be a club trip down to Picket Wire Canyonlands in southeastern Colorado.  This will not be a wheeling trip but will be a guided tour of the park to view interesting artifacts and dinosaur tracks.  Contact Jim if you would like more information.",
            "lat": "",
            "long": ""
          },
          {
            "name": "Christmas for Kids",
            "group": "All Groups",
            "eventDate": "November - December",
            "dateFld": "12/25/2020",
      	  "duration": 8,
      	  "startTimeFld": "8",
            "meetAt": "",
            "meetTime": "",
            "leaders": "Jim",
            "leader1": "Jim",
            "leader1Phone": "(719)200-4757",
            "rating": "Fun",
            "imageSrc": "~/images/christmas4kids.jpg",
            "desc": "Christmas for Kids is an event we sponsor and support every year.  You can pick the name of a needy child (provided list) and purchase a gift for them.  Contact Jim or see the web site as we get closer to this event if you would like more information.",
            "lat": "",
            "long": ""
      
      }
      
                      ]
      */

    };
  },
  methods: {
    onItemTap(args) {
      var view = args.view;
      var page = view.page;
      var tappedItem = view.bindingContext; //console.log("event tapped");

      this.$showModal(_ScheduleDetails__WEBPACK_IMPORTED_MODULE_0__["default"], {
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

    onAboutTap() {
      //console.log("Button was pressed");
      this.$showModal(_AboutSchedule__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }

  },
  mounted: function mounted() {
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "GET",
      "url": "http://data.csc4w.com/events.json"
    }).then(result => {
      this.events = result.data.events; //console.log("result is " + JSON.stringify(result.data.events));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TY2hlZHVsZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFrYUEsR0FyYUE7QUF1YUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FIQSxDQUlBOztBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLHdCQUZBO0FBR0E7QUFDQSwyQkFEQTtBQUVBLHlCQUZBO0FBR0E7QUFIQTtBQUhBO0FBREE7QUFXQSxLQWxCQTs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7O0FBdkJBLEdBdmFBO0FBbWNBO0FBQ0E7QUFBQTtBQUFBO0FBQUEsT0FDQSxJQURBLENBQ0E7QUFDQSx1Q0FEQSxDQUVBO0FBQ0EsS0FKQSxFQUtBLEtBTEEsQ0FLQTtBQUNBO0FBQ0E7QUFDQSxLQVJBLEdBUUE7QUFDQTtBQUNBLEtBVkE7QUFXQTtBQS9jQSxHIiwiZmlsZSI6ImJ1bmRsZS4yOGY2ODA5YTEwZTJiZGE1OGY0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkNvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnNcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImxpc3QtcGFuZWxcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwiaGVhZGVyLWxhYmVsXCIgdGV4dD1cIk91ciBTY2hlZHVsZVwiIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidXR0b25cIiB0ZXh0PVwiQWJvdXQgVGhlIFNjaGVkdWxlXCIgQHRhcD1cIm9uQWJvdXRUYXBcIiAvPlxyXG4gICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiZXZlbnQgaW4gZXZlbnRzXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIiBoZWlnaHQ9XCIxMDAlXCIgc2VwYXJhdG9yQ29sb3I9XCJ3aGl0ZVwiIGNsYXNzPVwibGlzdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sKlwiIHJvd3M9XCIqLCpcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJldmVudC5pbWFnZVNyY1wiIGhlaWdodD1cIjEyMFwiIHdpZHRoPVwiMTIwXCIgY29sPVwiMFwiIHJvd1NwYW49XCIyXCIgY2xhc3M9XCJwaWNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImV2ZW50LmV2ZW50RGF0ZVwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwiZXZlbnQxXCIgcm93PVwiMFwiIGNvbD1cIjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5uYW1lXCIgY2xhc3M9XCJldmVudDJcIiB0ZXh0V3JhcD1cInRydWVcIiByb3c9XCIxXCIgY29sPVwiMVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L0xpc3RWaWV3PiAgIFxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+ICBcclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgU2NoZWR1bGVEZXRhaWxzIGZyb20gXCIuL1NjaGVkdWxlRGV0YWlsc1wiO1xyXG4gICAgaW1wb3J0IEFib3V0U2NoZWR1bGUgZnJvbSBcIi4vQWJvdXRTY2hlZHVsZVwiO1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBcclxuICAgICAgICBkYXRhOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBldmVudHM6IFtdXHJcbi8qICAgICAgICAgICAgICAgIFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJNb3VudCBCYWxkeVwiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXAgMVwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkp1bmUgMTN0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwNi8xMy8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjhcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTdC4gUGF1bHMgQ2F0aG9saWMgQ2h1cmNoLCA5IEVsIFBvbWFyIFJkLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MDZcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjg6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJKaW0sIERhbiwgTWljaGVsbGVcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiSmltXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMDAtNDc1N1wiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJEYW5cIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTIxMC0xNjQ0XCIsXHJcbiAgICAgIFwibGVhZGVyM1wiOiBcIk1pY2hlbGxlXCIsXHJcbiAgICAgIFwibGVhZGVyM1Bob25lXCI6IFwiKDcxOSkyMjktMTUzNVwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIk1vZGVyYXRlXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9tdGJhbGR5LmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJXZSB3aWxsIHRha2UgdGhlIHRyYWlsIGZyb20gT2xkIFN0YWdlIHJvYWQgYW5kIGxvb3AgYXJvdW5kIHRoZSBiYWNrIHNpZGUgb2YgUGlrZXMgUGVhay4gIElmIHRoZSB0cmFpbCBpcyBwYXNzYWJsZSB3ZSB3aWxsIGRyaXZlIHRvIHRoZSB0b3Agb2YgTW91bnQgQmFsZHlcIixcclxuICAgICAgXCJsYXRcIjogXCIzOC43OTE0MTRcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNC44NTUwMTBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiRWFnbGUgUm9ja1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXAgMlwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkp1bmUgMTN0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwNi8xMy8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjhcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTdC4gUGF1bHMgQ2F0aG9saWMgQ2h1cmNoLCA5IEVsIFBvbWFyIFJkLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MDZcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjg6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJXYXJkLCBHbGVuXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIldhcmRcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIxMy01OTEyXCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkdsZW5cIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTM3MS03MzU3XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRGlmZmljdWx0XCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9lYWdsZXJvY2suanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIkVhZ2xlIFJvY2sgaXMgYSB2ZXJ5IGRpZmZpY3VsdCBhbmQgY2hhbGxlbmdpbmcgdHJhaWwuICBFeHBlcmllbmNlZCB3aGVlbGVycyB3aXRoIG1vZGlmaWVkIHJpZ3Mgd2l0aCBsYXJnZXIgdGlyZXMgYW5kIGF0IGxlYXN0IG9uZSBsb2NrZXIgYXJlIHJlY29tbWVuZGVkLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM4Ljc5MTQxNFwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA0Ljg1NTAxMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJDaGluYSBXYWxsXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJncm91cCAxXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVuZSAyMHRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA2LzIwLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOFwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlNhZmV3YXksIDMyNzUgVyBDb2xvcmFkbyBBdmUsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkwNFwiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiODowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkppbSBhbmQgTWljaGVsbGVcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiSmltXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMDAtNDc1N1wiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJNaWNoZWxsZVwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpMjI5LTE1MzVcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJJbnRlcm1lZGlhdGVcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL2NoaW5hd2FsbC5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiQ2hpbmEgV2FsbCBpcyBhIHZlcnkgc2NlbmljIGludGVybWVkaWF0ZSBydW4uICBEaWZmaWN1bHQgb2JzdGFjbGVzIG1heSBiZSBieXBhc3NlZC5cIixcclxuICAgICAgXCJsYXRcIjogXCIzOC44NTQ3MDJcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNC44NzYxNDBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiQ2hpbmFtYW4gR3VsY2hcIixcclxuICAgICAgXCJncm91cFwiOiBcImdyb3VwIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdW5lIDIwdGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDYvMjAvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI5XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiMzguNzkyMTg2LCAtMTA2LjA4NTIwMlwiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiOTowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkdsZW4gYW5kIERhblwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJHbGVuXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkzNzEtNzM1N1wiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJEYW5cIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTIxMC0xNjQ0XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRGlmZmljdWx0XCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9jaGluYW1hbi5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiQ2hpbmFtYW4gR3VsY2ggaXMgYSBjaGFsbGVuZ2luZyBydW4gYW5kIHNob3VsZCBub3QgYmUgYXR0ZW1wdGVkIHdpdGhvdXQgbW9kaWZpZWQgdmVoaWNsZXMuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzkuNzkyMTg2XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDYuMDg1MjAyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIk1lZGFubyBQYXNzIENhbXBpbmdcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIEFsbFwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkp1bHkgMTB0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwNy8xMC8yMDIwXCIsXHJcbiAgICAgIFwiZHVyYXRpb25cIjogOCxcclxuICAgICAgXCJzdGFydFRpbWVGbGRcIjogXCIxN1wiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIjM3Ljg1NjAyNywgLTEwNS40MzI3MjFcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIkFmdGVybm9vbi9FdmVuaW5nXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkdsZW4gYW5kIEtpcmtcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiR2xlblwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMzcxLTczNTdcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiS2lya1wiLFxyXG4gICAgICBcImxlYWRlclBob25lXCI6IFwiKDcxOSk2NTAtNjY4OVwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkZ1blwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvTWVkYW5vLVBhc3MtQ2FtcGluZy5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiV2Ugd2lsbCBiZSBjYW1waW5nIEZyaWRheSBuaWdodCBuZWFyIHRoZSBNZWRhbm8gcGFzcyB0cmFpbGhlYWQuICBDb250YWN0IHRoZSBkaXJlY3RvcnMgZm9yIHRoaXMgdHJpcCBmb3IgbW9yZSBkZXRhaWxzLiAgVGhlIG1lZXRpbmcgcGxhY2Ugc2hvd3MgdGhlIHN0YXJ0IG9mIHRoZSByb2FkIGFuZCBjYW1waW5nIHdpbGwgYmUgc29tZXdoZXJlIGluIHRoaXMgYXJlYS5cIixcclxuICAgICAgXCJsYXRcIjogXCIzNy44NTYwMjdcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNS40MzI3MjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiTWVkYW5vIFBhc3MgV2hlZWxpbmdcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDFcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdWx5IDExdGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDcvMTEvMjAyMFwiLFxyXG5cdCAgICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICAgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIjM3Ljg1NjAyNywgLTEwNS40MzI3MjFcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTVwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkVhc3kgdG8gSW50ZXJtZWRpYXRlXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkdsZW4gYW5kIEtpcmtcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiR2xlblwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMzcxLTczNTdcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiS2lya1wiLFxyXG4gICAgICBcImxlYWRlclBob25lXCI6IFwiKDcxOSk2NTAtNjY4OVwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvbWVkYW5vUGFzcy5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiV2Ugd2lsbCBsZWF2ZSB0aGUgY2FtcGluZyBhcmVhIGF0IDk6MDAgYW5kIGhlYWQgb3ZlciBNZWRhbm8gUGFzcyB0byB0aGUgc2FuZCBkdW5lcy4gIFRoaXMgdHJhaWwgdHJhdmVscyBhbG9uZyBNZWRhbm8gQ3JlZWsgd2l0aCBtYW55IHdhdGVyIGNyb3NzaW5ncyBhbmQgZGVlcCBzYW5kIG5lYXIgdGhlIGVuZCBhdCB0aGUgR3JlYXQgU2FuZCBEdW5lcy5cIixcclxuICAgICAgXCJsYXRcIjogXCIzNy41MjE4NTVcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNS42MDE5NzFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiQmxhbmNhIFBlYWsgQ2FtcGluZ1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXAgMlwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkp1bHkgMTB0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwNy8xMC8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjE3XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiTGFrZSBDb21vIFJvYWQsIE1vc2NhLCBDT1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiQWZ0ZXJub29uL0V2ZW5pbmdcIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiUGV0ZSBhbmQgRGF2ZVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJQZXRlXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDMwMyk5MDktNjcxNVwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJEYXZlXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSk2MzQtNjAwNlwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkZ1blwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvTWVkYW5vLVBhc3MtQ2FtcGluZy5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiV2Ugd2lsbCBiZSBjYW1waW5nIEZyaWRheSBuaWdodCBvbiByb2FkIHRvIEJsYW5jYSBQZWFrIFRyYWlsLiAgQ29udGFjdCB0aGUgZGlyZWN0b3JzIGZvciB0aGlzIHRyaXAgZm9yIG1vcmUgZGV0YWlscy4gIFRoZSBtZWV0aW5nIHBsYWNlIHNob3dzIHRoZSBzdGFydCBvZiB0aGUgcm9hZCBhbmQgY2FtcGluZyB3aWxsIGJlIHNvbWV3aGVyZSBmYXJ0aGVyIHVwIHRoaXMgcm9hZC5cIixcclxuICAgICAgXCJsYXRcIjogXCIzNy41MjE4NTVcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNS42MDE5NzFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiQmxhbmNhIFBlYWsgV2hlZWxpbmdcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdWx5IDExdGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDcvMTEvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI5XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiMzcuNTIxODUsIC0xMDUuNjAxOTNcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTVwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIlZlcnkgRGlmZmljdWx0XCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIlBldGUgYW5kIERhdmVcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiUGV0ZVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIigzMDMpOTA5LTY3MTVcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiRGF2ZVwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpNjM0LTYwMDZcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL2JsYW5jYS5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiV2Ugd2lsbCBsZWF2ZSB0aGUgY2FtcGluZyBhcmVhIGF0IDk6MDAgYW5kIGhlYWQgdG8gdGhlIHRvcCBvZiBCbGFuY2EgUGVhay4gIFRoaXMgdHJhaWwgaXMgdmVyeSBkaWZmaWN1bHQgc28geW91IHdpbGwgbmVlZCBhIGxpZnRlZCByaWcgd2l0aCBsYXJnZXIgdGlyZXMgYW5kIGxvY2tlcnMuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzcuNTIxODU1XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDUuNjAxOTcxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIlNhaW50IEVsbW8gQ2FtcGluZ1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiQWxsIGdyb3VwcyBcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdWx5IDI0dGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDcvMjQvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCIxN1wiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlNhaW50IEVsbW8gQ29sb3JhZG9cIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIkFmdGVybm9vbi9FdmVuaW5nXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIldhcmQgYW5kIEphc29uXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIldhcmRcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIxMy01OTE1XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkphc29uXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDk1NCk4MDUtMzY2MFwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkZ1blwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvc3RlbG1vLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJXZSB3aWxsIGJlIGNhbXBpbmcgRnJpZGF5IG5pZ2h0IG5lYXIgdGhlIHRvd24gb2YgU3QuIEVsbW8uICBDb250YWN0IHRoZSBkaXJlY3RvcnMgZm9yIHRoaXMgdHJpcCBmb3IgbW9yZSBkZXRhaWxzLiAgVGhlIG1lZXRpbmcgcGxhY2Ugc2hvd3MgdGhlIHN0YXJ0IG9mIHRoZSByb2FkIGFuZCBjYW1waW5nIHdpbGwgYmUgc29tZXdoZXJlIGluIHRoaXMgYXJlYS5cIixcclxuICAgICAgXCJsYXRcIjogXCIzOC43MDQxMDFcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNi4zNDUwMThcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiU2FpbnQgRWxtbyBXaGVlbGluZ1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiQWxsIGdyb3VwcyBcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdWx5IDI1dGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDcvMjUvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI5XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiU2FpbnQgRWxtbyBDb2xvcmFkb1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiOTowMEFNIGluIFNhaW50IEVsbW9cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiV2FyZCBhbmQgSmFzb25cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiV2FyZFwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjEzLTU5MTVcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiSmFzb25cIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoOTU0KTgwNS0zNjYwXCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiR3JvdXAgMSBhbmQgMiB0cmFpbHMgZGVwZW5kaW5nIG9uIHdobyBpcyB0aGVyZVwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvdGluY3VwLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJUaGVyZSBhcmUgbWFueSB0cmFpbHMgaW4gdGhlIFN0LiBFbG1vIGFyZWEgYW5kIHdlIHdpbGwgZGVjaWRlIHRoYXQgbW9ybmluZyB3aGljaCB0cmFpbHMgd2lsbCBiZSBydW4gZGVwZW5kaW5nIG9uIHRoZSBmb2xrcyB0aGF0IHNob3cgdXAuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzguNzA0MTAxXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDYuMzQ1MDE4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIk1vc3F1aXRvIFBhc3NcIixcclxuICAgICAgXCJncm91cFwiOiBcImdyb3VwIDFcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJBdWd1c3QgOHRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA4LzA4LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlNvdXRocGFyayBNYXJrZXQsIEZhaXJwbGF5IENvbG9yYWRvXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiSmltXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjAwLTQ3NTdcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJFYXN5IHRvIEludGVybWVkaWF0ZVwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvbW9zcXVpdG8uanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIlRoaXMgdHJpcCBpcyBmYWlybHkgZWFzeSBhbmQgVkVSWSBzY2VuaWMuICBXZSB3aWxsIGdvIG92ZXIgTW9zcXVpdG8gcGFzcyBhbmQgcmV0dXJuIG9uIFdlc3RvbiBwYXNzLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM5LjIxNjcyN1wiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA1Ljk5MzY2NVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJXaGVlbGVyIExha2VcIixcclxuICAgICAgXCJncm91cFwiOiBcImdyb3VwIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJBdWd1c3QgOHRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA4LzA4LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlNvdXRocGFyayBNYXJrZXQsIEZhaXJwbGF5IENvbG9yYWRvXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiSmVyZW15IGFuZCBNaWNoZWxsZVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJKZXJlbXlcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIwNS0yNTY1XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkphc29uXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSkyMjktMTUzNVwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkRpZmZpY3VsdFwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvd2hlZWxlci5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiVGhpcyB0cmlwIGlzIGRpZmZpY3VsdCBhbmQgd2lsbCByZXF1aXJlIGxpZnRlZCByaWdzIHdpdGggbGFyZ2VyIHRpcmVzIGFuZCBhdCBsZWFzdCBhIHJlYXIgbG9ja2VyXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzkuMjE2NzI3XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDUuOTkzNjY1XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIlNsaWRlIExha2VcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDFcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJBdWcgMjJuZCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwOC8yMi8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTbGlkZSBMYWtlIFRyYWlsaGVhZFwiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiOTowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIktlaXRoIGFuZCBHbGVublwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJLZWl0aFwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig4MTIpNDU1LTU0NzdcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiR2xlbm5cIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCI3MjAtMjE5LTUzODRcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJFYXN5XCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9zbGlkZS5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiU2xpZGUgTGFrZSBpcyBhIGJlYXV0aWZ1bCBhbmQgZWFzeSBkcml2ZS4gIFRoZXJlIG1heSBiZSBjYW1waW5nIHRoZSBuaWdodCBiZWZvcmUgdGhpcyB0cmlwIHNvIGNvbnRhY3QgdGhlIHRyaXAgbGVhZGVycyBpZiB5b3UgYXJlIGludGVyZXN0ZWQgaW4gdGhpc1wiLFxyXG4gICAgICBcImxhdFwiOiBcIjM5LjM2OTI1OVwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA2LjM4NTM5M1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJIb2x5IENyb3NzXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiQXVnIDIybmQsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDgvMjIvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI5XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiMzkuNDAzMTYxLCAtMTA2LjQ0MzU1M1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiOTowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIlBldGUgYW5kIERhdmVcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiUGV0ZVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIjcyMC0yMTktNTM4NFwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJEYXZlXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSkyMDUtMjU2NVwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkRpZmZpY3VsdFwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvaG9seWNyb3NzLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJIb2x5IENyb3NzIGlzIG9uZSBvZiB0aGUgaGFyZGVzdCB0cmFpbHMgaW4gQ29sb3JhZG8uICBZb3Ugd2lsbCBuZWVkIGEgaGVhdmlseSBtb2RpZmllZCB2ZWhpY2xlIGZvciB0aGlzIHRyYWlsLiAgVGhlcmUgbWF5IGJlIGNhbXBpbmcgdGhlIG5pZ2h0IGJlZm9yZSB0aGlzIHRyaXAgc28gY29udGFjdCB0aGUgdHJpcCBsZWFkZXJzIGlmIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiB0aGlzXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzkuNDAzMTYxXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDYuNDQzNTUzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIlJpbXJvY2tlciBUcmFpbFwiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXAgMlwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIlNlcHQgMm5kLVNlcHQgNHRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA5LzAyLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOFwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlwiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIktpcmsgYW5kIEplcmVteVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJLaXJrXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSk2NTAtNjY4OVwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJKZXJlbXlcIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTIwNS0yNTY1XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiTW9kZXJhdGVcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL3JpbXJvY2tlci5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiVGhpcyBpcyBhbiBvdmVybGFuZCB0cmlwIHdoZXJlIHdlIHdpbGwgd2hlZWwgYW5kIGNhbXAgYWxvbmcgdGhlIHRyYWlsLiAgQ29udGFjdCBLaXJrIG9yIEplcmVteSBpZiB5b3UgYXJlIGludGVyZXN0ZWQgaW4gdGhpcyB0cmlwIGFuZCBmb3IgZGV0YWlscy5cIixcclxuICAgICAgXCJsYXRcIjogXCJcIixcclxuICAgICAgXCJsb25nXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkxhYm9yIERheSBXaGVlbGluZyBpbiBNb2FiLCBVVFwiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXAgMSBhbmQgMlwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIlNlcHQgNXRoIC0gU2VwdCA3dGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDkvMDUvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI5XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiT3V0bGF3IEplZXAgQWR2ZW50dXJlcyBNb2FiLFV0YWhcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTSBvbiBTZXB0LiA1dGhcIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiS2lyayBhbmQgSmVyZW15XCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIktpcmtcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTY1MC02Njg5XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkplcmVteVwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpMjA1LTI1NjVcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJBbGwgdHlwZXMgb2YgdHJhaWxzXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9oZWxsc3JldmVuZ2UuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIk1lZXQgZWFjaCBkYXkgYXQgT3V0bGF3IEplZXAgQWR2ZW50dXJlcyBwYXJraW5nIGxvdCBmb3IgdmFyaW91cyB0cmFpbHMgYXJvdW5kIE1vYWIuICBNYWtlIHlvdXIgb3duIGFjY29tb2RhdGlvbnMgZWl0aGVyIGNhbXBpbmcgb3IgYXQgYSBob3RlbC4gIENvbnRhY3QgS2lyayBvciBKZXJlbXkgaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9uc1wiLFxyXG4gICAgICBcImxhdFwiOiBcIlwiLFxyXG4gICAgICBcImxvbmdcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiQWxwaW5lIExvb3AgaW4gT3VyYXlcIixcclxuICAgICAgXCJncm91cFwiOiBcIkFsbCBHcm91cHNcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJTZXB0IDV0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwOS8wNS8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjhcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCIxMjIwIE1haW4gU3QuLCBPdXJheSwgQ08sIDgxNDI3XCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI4OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiRGFuXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkRhblwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjEwLTE2NDRcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJJbnRlcm1lZGlhdGVcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL2FscGluZWxvb3AuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIlRoZSBBbHBpbmUgTG9vcCBpcyBhbiBpbnRlcm1lZGlhdGUgdHJpcCB3aXRoIGEgZmV3IGRpZmZpY3VsdCBzcG90cy4gIERlcGVuZGluZyBvbiB0cmFpbCBjb25kaXRpb25zIGFuZCB0aGUgcmlncyB0aGF0IGFyZSB0aGVyZSwgaXQgbWF5IGluY2x1ZGUgRW5naW5lZXIgUGFzcywgQ2luYW1tb24gcGFzcywgUG91Z2hrZWVwc2llIEd1bGNoIGFuZCBvdGhlcnMuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzguMDI5MTUxXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDcuNjczMzA4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkJsYWNrYmVhciBhbmQgSW1vZ2VuZSBQYXNzZXNcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJTZXB0IDZ0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwOS8wNi8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjhcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCIxMjIwIE1haW4gU3QuLCBPdXJheSwgQ08sIDgxNDI3XCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI4OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiRGFuXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkRhblwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjEwLTE2NDRcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJEaWZmaWN1bHRcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL2JsYWNrYmVhci5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiQmxhY2tiZWFyIFBhc3MgaXMgb25lIG9mIHRoZSBtb3N0IGZhbW91cyB0cmFpbHMgaW4gQ29sb3JhZG8uICBJdCBpcyBkaWZmaWN1bHQgYW5kIHRoZSB0cmFpbCBpcyB2ZXJ5IG5hcnJvdy5cIixcclxuICAgICAgXCJsYXRcIjogXCIzNy44OTY3MDRcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNy43MTM1MjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiVHJhaWwgQ2xlYW51cCBEYXkgIzJcIixcclxuICAgICAgXCJncm91cFwiOiBcIkFsbCBHcm91cHNcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJTZXB0IDE5dGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDkvMTkvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI5XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiU2FpbnQgUGF1bHMgQ2F0aG9saWMgQ2h1cmNoIENvbG9yYWRvIFNwcmluZ3NcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiSmltXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMDAtNDc1N1wiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkZ1bi9IYXJkIFdvcmtcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL3RyYWlsY2xlYW51cC5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiQ1NDNFcgaGFzIGFkb3B0ZWQgdGhlIE10LiBCYWxkeSB0cmFpbCBzeXN0ZW0gYW5kIHdlIHNwZW5kIDIgZGF5cyBhIHllYXIgaGVscGluZyB0aGUgVVMgRm9yZXN0IFNlcnZpY2Ugd2l0aCB0cmFpbCBjbGVhbi11cCBhbmQgcmVwYWlyLiAgVGhpcyBpcyBhbiBpbXBvcnRhbnQgZXZlbnQgZm9yIG91ciBjbHViIGFuZCBhbGwgbWVtYmVycyBhcmUgZW5jb3VyYWdlZCB0byBjb21lIGFuZCBoZWxwLiAgQnJpbmcgeW91ciBvd24gbHVuY2ggYW5kIGlmIHRpbWUgcGVybWl0cywgd2Ugd2lsbCBkbyBhIGxpdHRsZSB3aGVlbGluZyBhcyB3ZWxsLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM4Ljc5MDYzN1wiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA0Ljg1NTAxNVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJQaWNrZXQgV2lyZSBDYW55b25sYW5kc1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiQWxsIEdyb3Vwc1wiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIk9jdCAzcmQsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMTAvMDMvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI4XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCJcIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiSmltXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjAwLTQ3NTdcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJGdW5cIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL3BpY2tldHdpcmUuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIlRoaXMgd2lsbCBiZSBhIGNsdWIgdHJpcCBkb3duIHRvIFBpY2tldCBXaXJlIENhbnlvbmxhbmRzIGluIHNvdXRoZWFzdGVybiBDb2xvcmFkby4gIFRoaXMgd2lsbCBub3QgYmUgYSB3aGVlbGluZyB0cmlwIGJ1dCB3aWxsIGJlIGEgZ3VpZGVkIHRvdXIgb2YgdGhlIHBhcmsgdG8gdmlldyBpbnRlcmVzdGluZyBhcnRpZmFjdHMgYW5kIGRpbm9zYXVyIHRyYWNrcy4gIENvbnRhY3QgSmltIGlmIHlvdSB3b3VsZCBsaWtlIG1vcmUgaW5mb3JtYXRpb24uXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJDaHJpc3RtYXMgZm9yIEtpZHNcIixcclxuICAgICAgXCJncm91cFwiOiBcIkFsbCBHcm91cHNcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJOb3ZlbWJlciAtIERlY2VtYmVyXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjEyLzI1LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOFwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlwiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIwMC00NzU3XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRnVuXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9jaHJpc3RtYXM0a2lkcy5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiQ2hyaXN0bWFzIGZvciBLaWRzIGlzIGFuIGV2ZW50IHdlIHNwb25zb3IgYW5kIHN1cHBvcnQgZXZlcnkgeWVhci4gIFlvdSBjYW4gcGljayB0aGUgbmFtZSBvZiBhIG5lZWR5IGNoaWxkIChwcm92aWRlZCBsaXN0KSBhbmQgcHVyY2hhc2UgYSBnaWZ0IGZvciB0aGVtLiAgQ29udGFjdCBKaW0gb3Igc2VlIHRoZSB3ZWIgc2l0ZSBhcyB3ZSBnZXQgY2xvc2VyIHRvIHRoaXMgZXZlbnQgaWYgeW91IHdvdWxkIGxpa2UgbW9yZSBpbmZvcm1hdGlvbi5cIixcclxuICAgICAgXCJsYXRcIjogXCJcIixcclxuICAgICAgXCJsb25nXCI6IFwiXCJcclxuXHJcbn1cclxuXHJcbiAgICAgICAgICAgICAgICBdXHJcbiovXHJcbiAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgICAgIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gYXJncy52aWV3O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IHZpZXcucGFnZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcHBlZEl0ZW0gPSB2aWV3LmJpbmRpbmdDb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImV2ZW50IHRhcHBlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChTY2hlZHVsZURldGFpbHMsIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB0YXBwZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb25BYm91dFRhcCgpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoQWJvdXRTY2hlZHVsZSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYXhpb3MoeyBtZXRob2Q6IFwiR0VUXCIsIFwidXJsXCI6IFwiaHR0cDovL2RhdGEuY3NjNHcuY29tL2V2ZW50cy5qc29uXCIgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gcmVzdWx0LmRhdGEuZXZlbnRzO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlc3VsdCBpcyBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdC5kYXRhLmV2ZW50cykpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNhdWdodCBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChOb0Nvbm5lY3QpO1xyXG4gICAgICAgICAgICB9KSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBcIiArIGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgIFxyXG5cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbiAgICAucGljIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlOyBcclxuICAgICAgICBtYXJnaW46IDI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ldmVudCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTsgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLmV2ZW50MSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTsgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLmV2ZW50MiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTsgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLmV2ZW50RGF0ZSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcclxuICAgIH1cclxuXHJcbi5ldmVudC1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAzO1xyXG5cclxufVxyXG5cclxuXHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==