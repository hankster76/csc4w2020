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
    }, error => {
      console.error(error);
    });
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TY2hlZHVsZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFrYUEsR0FyYUE7QUF1YUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FIQSxDQUlBOztBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLHdCQUZBO0FBR0E7QUFDQSwyQkFEQTtBQUVBLHlCQUZBO0FBR0E7QUFIQTtBQUhBO0FBREE7QUFXQSxLQWxCQTs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7O0FBdkJBLEdBdmFBO0FBbWNBO0FBQ0E7QUFBQTtBQUFBO0FBQUEsT0FDQSxJQURBLENBQ0E7QUFDQSx1Q0FEQSxDQUVBO0FBRUEsS0FMQSxFQUtBO0FBQ0E7QUFDQSxLQVBBO0FBUUE7QUE1Y0EsRyIsImZpbGUiOiJidW5kbGUuZTYwYjYwNmIxMzllODk3YzA5YzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJDb2xvcmFkbyBTcHJpbmdzIENocmlzdGlhbiA0LVdoZWVsZXJzXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCIgLz5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJsaXN0LXBhbmVsXCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cImhlYWRlci1sYWJlbFwiIHRleHQ9XCJPdXIgU2NoZWR1bGVcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgdGV4dD1cIkFib3V0IFRoZSBTY2hlZHVsZVwiIEB0YXA9XCJvbkFib3V0VGFwXCIgLz5cclxuICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cImV2ZW50IGluIGV2ZW50c1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCIgaGVpZ2h0PVwiMTAwJVwiIHNlcGFyYXRvckNvbG9yPVwid2hpdGVcIiBjbGFzcz1cImxpc3QtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCpcIiByb3dzPVwiKiwqXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwiZXZlbnQuaW1hZ2VTcmNcIiBoZWlnaHQ9XCIxMjBcIiB3aWR0aD1cIjEyMFwiIGNvbD1cIjBcIiByb3dTcGFuPVwiMlwiIGNsYXNzPVwicGljXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5ldmVudERhdGVcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cImV2ZW50MVwiIHJvdz1cIjBcIiBjb2w9XCIxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZXZlbnQubmFtZVwiIGNsYXNzPVwiZXZlbnQyXCIgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiMVwiIGNvbD1cIjFcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9MaXN0Vmlldz4gICBcclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPiAgXHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IFNjaGVkdWxlRGV0YWlscyBmcm9tIFwiLi9TY2hlZHVsZURldGFpbHNcIjtcclxuICAgIGltcG9ydCBBYm91dFNjaGVkdWxlIGZyb20gXCIuL0Fib3V0U2NoZWR1bGVcIjtcclxuICAgIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0YTogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBbXVxyXG4vKiAgICAgICAgICAgICAgICBcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiTW91bnQgQmFsZHlcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDFcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdW5lIDEzdGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDYvMTMvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI4XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiU3QuIFBhdWxzIENhdGhvbGljIENodXJjaCwgOSBFbCBQb21hciBSZCwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTA2XCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI4OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiSmltLCBEYW4sIE1pY2hlbGxlXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjAwLTQ3NTdcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiRGFuXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSkyMTAtMTY0NFwiLFxyXG4gICAgICBcImxlYWRlcjNcIjogXCJNaWNoZWxsZVwiLFxyXG4gICAgICBcImxlYWRlcjNQaG9uZVwiOiBcIig3MTkpMjI5LTE1MzVcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJNb2RlcmF0ZVwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvbXRiYWxkeS5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiV2Ugd2lsbCB0YWtlIHRoZSB0cmFpbCBmcm9tIE9sZCBTdGFnZSByb2FkIGFuZCBsb29wIGFyb3VuZCB0aGUgYmFjayBzaWRlIG9mIFBpa2VzIFBlYWsuICBJZiB0aGUgdHJhaWwgaXMgcGFzc2FibGUgd2Ugd2lsbCBkcml2ZSB0byB0aGUgdG9wIG9mIE1vdW50IEJhbGR5XCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzguNzkxNDE0XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDQuODU1MDEwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkVhZ2xlIFJvY2tcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdW5lIDEzdGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDYvMTMvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI4XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiU3QuIFBhdWxzIENhdGhvbGljIENodXJjaCwgOSBFbCBQb21hciBSZCwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTA2XCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI4OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiV2FyZCwgR2xlblwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJXYXJkXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMTMtNTkxMlwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJHbGVuXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSkzNzEtNzM1N1wiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkRpZmZpY3VsdFwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvZWFnbGVyb2NrLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJFYWdsZSBSb2NrIGlzIGEgdmVyeSBkaWZmaWN1bHQgYW5kIGNoYWxsZW5naW5nIHRyYWlsLiAgRXhwZXJpZW5jZWQgd2hlZWxlcnMgd2l0aCBtb2RpZmllZCByaWdzIHdpdGggbGFyZ2VyIHRpcmVzIGFuZCBhdCBsZWFzdCBvbmUgbG9ja2VyIGFyZSByZWNvbW1lbmRlZC5cIixcclxuICAgICAgXCJsYXRcIjogXCIzOC43OTE0MTRcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNC44NTUwMTBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiQ2hpbmEgV2FsbFwiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiZ3JvdXAgMVwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkp1bmUgMjB0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwNi8yMC8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjhcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTYWZld2F5LCAzMjc1IFcgQ29sb3JhZG8gQXZlLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MDRcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjg6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJKaW0gYW5kIE1pY2hlbGxlXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjAwLTQ3NTdcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiTWljaGVsbGVcIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTIyOS0xNTM1XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiSW50ZXJtZWRpYXRlXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9jaGluYXdhbGwuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIkNoaW5hIFdhbGwgaXMgYSB2ZXJ5IHNjZW5pYyBpbnRlcm1lZGlhdGUgcnVuLiAgRGlmZmljdWx0IG9ic3RhY2xlcyBtYXkgYmUgYnlwYXNzZWQuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzguODU0NzAyXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDQuODc2MTQwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkNoaW5hbWFuIEd1bGNoXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJncm91cCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVuZSAyMHRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA2LzIwLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIjM4Ljc5MjE4NiwgLTEwNi4wODUyMDJcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJHbGVuIGFuZCBEYW5cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiR2xlblwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMzcxLTczNTdcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiRGFuXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSkyMTAtMTY0NFwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkRpZmZpY3VsdFwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvY2hpbmFtYW4uanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIkNoaW5hbWFuIEd1bGNoIGlzIGEgY2hhbGxlbmdpbmcgcnVuIGFuZCBzaG91bGQgbm90IGJlIGF0dGVtcHRlZCB3aXRob3V0IG1vZGlmaWVkIHZlaGljbGVzLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM5Ljc5MjE4NlwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA2LjA4NTIwMlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJNZWRhbm8gUGFzcyBDYW1waW5nXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCBBbGxcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdWx5IDEwdGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDcvMTAvMjAyMFwiLFxyXG4gICAgICBcImR1cmF0aW9uXCI6IDgsXHJcbiAgICAgIFwic3RhcnRUaW1lRmxkXCI6IFwiMTdcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCIzNy44NTYwMjcsIC0xMDUuNDMyNzIxXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCJBZnRlcm5vb24vRXZlbmluZ1wiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJHbGVuIGFuZCBLaXJrXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkdsZW5cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTM3MS03MzU3XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIktpcmtcIixcclxuICAgICAgXCJsZWFkZXJQaG9uZVwiOiBcIig3MTkpNjUwLTY2ODlcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJGdW5cIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL01lZGFuby1QYXNzLUNhbXBpbmcuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIldlIHdpbGwgYmUgY2FtcGluZyBGcmlkYXkgbmlnaHQgbmVhciB0aGUgTWVkYW5vIHBhc3MgdHJhaWxoZWFkLiAgQ29udGFjdCB0aGUgZGlyZWN0b3JzIGZvciB0aGlzIHRyaXAgZm9yIG1vcmUgZGV0YWlscy4gIFRoZSBtZWV0aW5nIHBsYWNlIHNob3dzIHRoZSBzdGFydCBvZiB0aGUgcm9hZCBhbmQgY2FtcGluZyB3aWxsIGJlIHNvbWV3aGVyZSBpbiB0aGlzIGFyZWEuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzcuODU2MDI3XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDUuNDMyNzIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIk1lZGFubyBQYXNzIFdoZWVsaW5nXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAxXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVseSAxMXRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA3LzExLzIwMjBcIixcclxuXHQgICAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCIzNy44NTYwMjcsIC0xMDUuNDMyNzIxXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU1cIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJFYXN5IHRvIEludGVybWVkaWF0ZVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJHbGVuIGFuZCBLaXJrXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkdsZW5cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTM3MS03MzU3XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIktpcmtcIixcclxuICAgICAgXCJsZWFkZXJQaG9uZVwiOiBcIig3MTkpNjUwLTY2ODlcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL21lZGFub1Bhc3MuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIldlIHdpbGwgbGVhdmUgdGhlIGNhbXBpbmcgYXJlYSBhdCA5OjAwIGFuZCBoZWFkIG92ZXIgTWVkYW5vIFBhc3MgdG8gdGhlIHNhbmQgZHVuZXMuICBUaGlzIHRyYWlsIHRyYXZlbHMgYWxvbmcgTWVkYW5vIENyZWVrIHdpdGggbWFueSB3YXRlciBjcm9zc2luZ3MgYW5kIGRlZXAgc2FuZCBuZWFyIHRoZSBlbmQgYXQgdGhlIEdyZWF0IFNhbmQgRHVuZXMuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzcuNTIxODU1XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDUuNjAxOTcxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkJsYW5jYSBQZWFrIENhbXBpbmdcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdWx5IDEwdGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDcvMTAvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCIxN1wiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIkxha2UgQ29tbyBSb2FkLCBNb3NjYSwgQ09cIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIkFmdGVybm9vbi9FdmVuaW5nXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIlBldGUgYW5kIERhdmVcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiUGV0ZVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIigzMDMpOTA5LTY3MTVcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiRGF2ZVwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpNjM0LTYwMDZcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJGdW5cIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL01lZGFuby1QYXNzLUNhbXBpbmcuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIldlIHdpbGwgYmUgY2FtcGluZyBGcmlkYXkgbmlnaHQgb24gcm9hZCB0byBCbGFuY2EgUGVhayBUcmFpbC4gIENvbnRhY3QgdGhlIGRpcmVjdG9ycyBmb3IgdGhpcyB0cmlwIGZvciBtb3JlIGRldGFpbHMuICBUaGUgbWVldGluZyBwbGFjZSBzaG93cyB0aGUgc3RhcnQgb2YgdGhlIHJvYWQgYW5kIGNhbXBpbmcgd2lsbCBiZSBzb21ld2hlcmUgZmFydGhlciB1cCB0aGlzIHJvYWQuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzcuNTIxODU1XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDUuNjAxOTcxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkJsYW5jYSBQZWFrIFdoZWVsaW5nXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVseSAxMXRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA3LzExLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIjM3LjUyMTg1LCAtMTA1LjYwMTkzXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU1cIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJWZXJ5IERpZmZpY3VsdFwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJQZXRlIGFuZCBEYXZlXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIlBldGVcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoMzAzKTkwOS02NzE1XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkRhdmVcIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTYzNC02MDA2XCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9ibGFuY2EuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIldlIHdpbGwgbGVhdmUgdGhlIGNhbXBpbmcgYXJlYSBhdCA5OjAwIGFuZCBoZWFkIHRvIHRoZSB0b3Agb2YgQmxhbmNhIFBlYWsuICBUaGlzIHRyYWlsIGlzIHZlcnkgZGlmZmljdWx0IHNvIHlvdSB3aWxsIG5lZWQgYSBsaWZ0ZWQgcmlnIHdpdGggbGFyZ2VyIHRpcmVzIGFuZCBsb2NrZXJzLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM3LjUyMTg1NVwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA1LjYwMTk3MVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJTYWludCBFbG1vIENhbXBpbmdcIixcclxuICAgICAgXCJncm91cFwiOiBcIkFsbCBncm91cHMgXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVseSAyNHRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA3LzI0LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiMTdcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTYWludCBFbG1vIENvbG9yYWRvXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCJBZnRlcm5vb24vRXZlbmluZ1wiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJXYXJkIGFuZCBKYXNvblwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJXYXJkXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMTMtNTkxNVwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJKYXNvblwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig5NTQpODA1LTM2NjBcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJGdW5cIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL3N0ZWxtby5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiV2Ugd2lsbCBiZSBjYW1waW5nIEZyaWRheSBuaWdodCBuZWFyIHRoZSB0b3duIG9mIFN0LiBFbG1vLiAgQ29udGFjdCB0aGUgZGlyZWN0b3JzIGZvciB0aGlzIHRyaXAgZm9yIG1vcmUgZGV0YWlscy4gIFRoZSBtZWV0aW5nIHBsYWNlIHNob3dzIHRoZSBzdGFydCBvZiB0aGUgcm9hZCBhbmQgY2FtcGluZyB3aWxsIGJlIHNvbWV3aGVyZSBpbiB0aGlzIGFyZWEuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzguNzA0MTAxXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDYuMzQ1MDE4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIlNhaW50IEVsbW8gV2hlZWxpbmdcIixcclxuICAgICAgXCJncm91cFwiOiBcIkFsbCBncm91cHMgXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVseSAyNXRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA3LzI1LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlNhaW50IEVsbW8gQ29sb3JhZG9cIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTSBpbiBTYWludCBFbG1vXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIldhcmQgYW5kIEphc29uXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIldhcmRcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIxMy01OTE1XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkphc29uXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDk1NCk4MDUtMzY2MFwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkdyb3VwIDEgYW5kIDIgdHJhaWxzIGRlcGVuZGluZyBvbiB3aG8gaXMgdGhlcmVcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL3RpbmN1cC5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiVGhlcmUgYXJlIG1hbnkgdHJhaWxzIGluIHRoZSBTdC4gRWxtbyBhcmVhIGFuZCB3ZSB3aWxsIGRlY2lkZSB0aGF0IG1vcm5pbmcgd2hpY2ggdHJhaWxzIHdpbGwgYmUgcnVuIGRlcGVuZGluZyBvbiB0aGUgZm9sa3MgdGhhdCBzaG93IHVwLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM4LjcwNDEwMVwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA2LjM0NTAxOFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJNb3NxdWl0byBQYXNzXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJncm91cCAxXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiQXVndXN0IDh0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwOC8wOC8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTb3V0aHBhcmsgTWFya2V0LCBGYWlycGxheSBDb2xvcmFkb1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiOTowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIwMC00NzU3XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRWFzeSB0byBJbnRlcm1lZGlhdGVcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL21vc3F1aXRvLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJUaGlzIHRyaXAgaXMgZmFpcmx5IGVhc3kgYW5kIFZFUlkgc2NlbmljLiAgV2Ugd2lsbCBnbyBvdmVyIE1vc3F1aXRvIHBhc3MgYW5kIHJldHVybiBvbiBXZXN0b24gcGFzcy5cIixcclxuICAgICAgXCJsYXRcIjogXCIzOS4yMTY3MjdcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNS45OTM2NjVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiV2hlZWxlciBMYWtlXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJncm91cCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiQXVndXN0IDh0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwOC8wOC8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTb3V0aHBhcmsgTWFya2V0LCBGYWlycGxheSBDb2xvcmFkb1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiOTowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkplcmVteSBhbmQgTWljaGVsbGVcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiSmVyZW15XCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMDUtMjU2NVwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJKYXNvblwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpMjI5LTE1MzVcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJEaWZmaWN1bHRcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL3doZWVsZXIuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIlRoaXMgdHJpcCBpcyBkaWZmaWN1bHQgYW5kIHdpbGwgcmVxdWlyZSBsaWZ0ZWQgcmlncyB3aXRoIGxhcmdlciB0aXJlcyBhbmQgYXQgbGVhc3QgYSByZWFyIGxvY2tlclwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM5LjIxNjcyN1wiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA1Ljk5MzY2NVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJTbGlkZSBMYWtlXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAxXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiQXVnIDIybmQsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDgvMjIvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI5XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiU2xpZGUgTGFrZSBUcmFpbGhlYWRcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJLZWl0aCBhbmQgR2xlbm5cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiS2VpdGhcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoODEyKTQ1NS01NDc3XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkdsZW5uXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiNzIwLTIxOS01Mzg0XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRWFzeVwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvc2xpZGUuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIlNsaWRlIExha2UgaXMgYSBiZWF1dGlmdWwgYW5kIGVhc3kgZHJpdmUuICBUaGVyZSBtYXkgYmUgY2FtcGluZyB0aGUgbmlnaHQgYmVmb3JlIHRoaXMgdHJpcCBzbyBjb250YWN0IHRoZSB0cmlwIGxlYWRlcnMgaWYgeW91IGFyZSBpbnRlcmVzdGVkIGluIHRoaXNcIixcclxuICAgICAgXCJsYXRcIjogXCIzOS4zNjkyNTlcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNi4zODUzOTNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiSG9seSBDcm9zc1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXAgMlwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkF1ZyAyMm5kLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA4LzIyLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIjM5LjQwMzE2MSwgLTEwNi40NDM1NTNcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJQZXRlIGFuZCBEYXZlXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIlBldGVcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCI3MjAtMjE5LTUzODRcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiRGF2ZVwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpMjA1LTI1NjVcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJEaWZmaWN1bHRcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL2hvbHljcm9zcy5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiSG9seSBDcm9zcyBpcyBvbmUgb2YgdGhlIGhhcmRlc3QgdHJhaWxzIGluIENvbG9yYWRvLiAgWW91IHdpbGwgbmVlZCBhIGhlYXZpbHkgbW9kaWZpZWQgdmVoaWNsZSBmb3IgdGhpcyB0cmFpbC4gIFRoZXJlIG1heSBiZSBjYW1waW5nIHRoZSBuaWdodCBiZWZvcmUgdGhpcyB0cmlwIHNvIGNvbnRhY3QgdGhlIHRyaXAgbGVhZGVycyBpZiB5b3UgYXJlIGludGVyZXN0ZWQgaW4gdGhpc1wiLFxyXG4gICAgICBcImxhdFwiOiBcIjM5LjQwMzE2MVwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA2LjQ0MzU1M1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJSaW1yb2NrZXIgVHJhaWxcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJTZXB0IDJuZC1TZXB0IDR0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwOS8wMi8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjhcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIlwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJLaXJrIGFuZCBKZXJlbXlcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiS2lya1wiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpNjUwLTY2ODlcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiSmVyZW15XCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSkyMDUtMjU2NVwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIk1vZGVyYXRlXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9yaW1yb2NrZXIuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIlRoaXMgaXMgYW4gb3ZlcmxhbmQgdHJpcCB3aGVyZSB3ZSB3aWxsIHdoZWVsIGFuZCBjYW1wIGFsb25nIHRoZSB0cmFpbC4gIENvbnRhY3QgS2lyayBvciBKZXJlbXkgaWYgeW91IGFyZSBpbnRlcmVzdGVkIGluIHRoaXMgdHJpcCBhbmQgZm9yIGRldGFpbHMuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJMYWJvciBEYXkgV2hlZWxpbmcgaW4gTW9hYiwgVVRcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDEgYW5kIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJTZXB0IDV0aCAtIFNlcHQgN3RoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA5LzA1LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIk91dGxhdyBKZWVwIEFkdmVudHVyZXMgTW9hYixVdGFoXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU0gb24gU2VwdC4gNXRoXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIktpcmsgYW5kIEplcmVteVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJLaXJrXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSk2NTAtNjY4OVwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJKZXJlbXlcIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTIwNS0yNTY1XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiQWxsIHR5cGVzIG9mIHRyYWlsc1wiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvaGVsbHNyZXZlbmdlLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJNZWV0IGVhY2ggZGF5IGF0IE91dGxhdyBKZWVwIEFkdmVudHVyZXMgcGFya2luZyBsb3QgZm9yIHZhcmlvdXMgdHJhaWxzIGFyb3VuZCBNb2FiLiAgTWFrZSB5b3VyIG93biBhY2NvbW9kYXRpb25zIGVpdGhlciBjYW1waW5nIG9yIGF0IGEgaG90ZWwuICBDb250YWN0IEtpcmsgb3IgSmVyZW15IGlmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnNcIixcclxuICAgICAgXCJsYXRcIjogXCJcIixcclxuICAgICAgXCJsb25nXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkFscGluZSBMb29wIGluIE91cmF5XCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJBbGwgR3JvdXBzXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiU2VwdCA1dGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDkvMDUvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI4XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiMTIyMCBNYWluIFN0LiwgT3VyYXksIENPLCA4MTQyN1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiODowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkRhblwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJEYW5cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIxMC0xNjQ0XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiSW50ZXJtZWRpYXRlXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9hbHBpbmVsb29wLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJUaGUgQWxwaW5lIExvb3AgaXMgYW4gaW50ZXJtZWRpYXRlIHRyaXAgd2l0aCBhIGZldyBkaWZmaWN1bHQgc3BvdHMuICBEZXBlbmRpbmcgb24gdHJhaWwgY29uZGl0aW9ucyBhbmQgdGhlIHJpZ3MgdGhhdCBhcmUgdGhlcmUsIGl0IG1heSBpbmNsdWRlIEVuZ2luZWVyIFBhc3MsIENpbmFtbW9uIHBhc3MsIFBvdWdoa2VlcHNpZSBHdWxjaCBhbmQgb3RoZXJzLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM4LjAyOTE1MVwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA3LjY3MzMwOFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJCbGFja2JlYXIgYW5kIEltb2dlbmUgUGFzc2VzXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiU2VwdCA2dGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDkvMDYvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI4XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiMTIyMCBNYWluIFN0LiwgT3VyYXksIENPLCA4MTQyN1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiODowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkRhblwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJEYW5cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIxMC0xNjQ0XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRGlmZmljdWx0XCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9ibGFja2JlYXIuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIkJsYWNrYmVhciBQYXNzIGlzIG9uZSBvZiB0aGUgbW9zdCBmYW1vdXMgdHJhaWxzIGluIENvbG9yYWRvLiAgSXQgaXMgZGlmZmljdWx0IGFuZCB0aGUgdHJhaWwgaXMgdmVyeSBuYXJyb3cuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzcuODk2NzA0XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDcuNzEzNTIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIlRyYWlsIENsZWFudXAgRGF5ICMyXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJBbGwgR3JvdXBzXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiU2VwdCAxOXRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA5LzE5LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlNhaW50IFBhdWxzIENhdGhvbGljIENodXJjaCBDb2xvcmFkbyBTcHJpbmdzXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiSmltXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjAwLTQ3NTdcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJGdW4vSGFyZCBXb3JrXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy90cmFpbGNsZWFudXAuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIkNTQzRXIGhhcyBhZG9wdGVkIHRoZSBNdC4gQmFsZHkgdHJhaWwgc3lzdGVtIGFuZCB3ZSBzcGVuZCAyIGRheXMgYSB5ZWFyIGhlbHBpbmcgdGhlIFVTIEZvcmVzdCBTZXJ2aWNlIHdpdGggdHJhaWwgY2xlYW4tdXAgYW5kIHJlcGFpci4gIFRoaXMgaXMgYW4gaW1wb3J0YW50IGV2ZW50IGZvciBvdXIgY2x1YiBhbmQgYWxsIG1lbWJlcnMgYXJlIGVuY291cmFnZWQgdG8gY29tZSBhbmQgaGVscC4gIEJyaW5nIHlvdXIgb3duIGx1bmNoIGFuZCBpZiB0aW1lIHBlcm1pdHMsIHdlIHdpbGwgZG8gYSBsaXR0bGUgd2hlZWxpbmcgYXMgd2VsbC5cIixcclxuICAgICAgXCJsYXRcIjogXCIzOC43OTA2MzdcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNC44NTUwMTVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiUGlja2V0IFdpcmUgQ2FueW9ubGFuZHNcIixcclxuICAgICAgXCJncm91cFwiOiBcIkFsbCBHcm91cHNcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJPY3QgM3JkLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjEwLzAzLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOFwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlwiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIwMC00NzU3XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRnVuXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9waWNrZXR3aXJlLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJUaGlzIHdpbGwgYmUgYSBjbHViIHRyaXAgZG93biB0byBQaWNrZXQgV2lyZSBDYW55b25sYW5kcyBpbiBzb3V0aGVhc3Rlcm4gQ29sb3JhZG8uICBUaGlzIHdpbGwgbm90IGJlIGEgd2hlZWxpbmcgdHJpcCBidXQgd2lsbCBiZSBhIGd1aWRlZCB0b3VyIG9mIHRoZSBwYXJrIHRvIHZpZXcgaW50ZXJlc3RpbmcgYXJ0aWZhY3RzIGFuZCBkaW5vc2F1ciB0cmFja3MuICBDb250YWN0IEppbSBpZiB5b3Ugd291bGQgbGlrZSBtb3JlIGluZm9ybWF0aW9uLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIlwiLFxyXG4gICAgICBcImxvbmdcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiQ2hyaXN0bWFzIGZvciBLaWRzXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJBbGwgR3JvdXBzXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiTm92ZW1iZXIgLSBEZWNlbWJlclwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIxMi8yNS8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjhcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIlwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiSmltXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMDAtNDc1N1wiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkZ1blwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvY2hyaXN0bWFzNGtpZHMuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIkNocmlzdG1hcyBmb3IgS2lkcyBpcyBhbiBldmVudCB3ZSBzcG9uc29yIGFuZCBzdXBwb3J0IGV2ZXJ5IHllYXIuICBZb3UgY2FuIHBpY2sgdGhlIG5hbWUgb2YgYSBuZWVkeSBjaGlsZCAocHJvdmlkZWQgbGlzdCkgYW5kIHB1cmNoYXNlIGEgZ2lmdCBmb3IgdGhlbS4gIENvbnRhY3QgSmltIG9yIHNlZSB0aGUgd2ViIHNpdGUgYXMgd2UgZ2V0IGNsb3NlciB0byB0aGlzIGV2ZW50IGlmIHlvdSB3b3VsZCBsaWtlIG1vcmUgaW5mb3JtYXRpb24uXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIlwiXHJcblxyXG59XHJcblxyXG4gICAgICAgICAgICAgICAgXVxyXG4qL1xyXG4gICAgfTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgICAgICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IGFyZ3MudmlldztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB2aWV3LnBhZ2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXBwZWRJdGVtID0gdmlldy5iaW5kaW5nQ29udGV4dDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJldmVudCB0YXBwZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoU2NoZWR1bGVEZXRhaWxzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogdGFwcGVkSXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG9uQWJvdXRUYXAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKEFib3V0U2NoZWR1bGUpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcInVybFwiOiBcImh0dHA6Ly9kYXRhLmNzYzR3LmNvbS9ldmVudHMuanNvblwiIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cyA9IHJlc3VsdC5kYXRhLmV2ZW50cztcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXN1bHQgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5ldmVudHMpKTtcclxuXHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxuXHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4gICAgLnBpYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTsgXHJcbiAgICAgICAgbWFyZ2luOiAyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXZlbnQge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7IFxyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ldmVudDEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7IFxyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ldmVudDIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7IFxyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ldmVudERhdGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XHJcbiAgICB9XHJcblxyXG4uZXZlbnQtcGFuZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMztcclxuXHJcbn1cclxuXHJcblxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=