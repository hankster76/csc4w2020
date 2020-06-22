require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/AboutDirectors.vue?vue&type=script&lang=js&":
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/AboutSchedule.vue?vue&type=script&lang=js&":
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/AboutSponsors.vue?vue&type=script&lang=js&":
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/AboutTrails.vue?vue&type=script&lang=js&":
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/AboutUs.vue?vue&type=script&lang=js&":
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

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Schedule_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Schedule.vue");
/* harmony import */ var _Sponsors_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Sponsors.vue");
/* harmony import */ var _Trails_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Trails.vue");
/* harmony import */ var _Directors_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Directors.vue");
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
  components: {
    Home: _Home_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Schedule: _Schedule_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Sponsors: _Sponsors_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Trails: _Trails_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Directors: _Directors_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/DirectorDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-phone/index.js");
/* harmony import */ var nativescript_phone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_phone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-email/email.js");
/* harmony import */ var nativescript_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_email__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["context"],
  computed: {
    director() {
      return this.context || {};
    }

  },
  methods: {
    call(args) {
      //console.log("touched phone number " + args);
      nativescript_phone__WEBPACK_IMPORTED_MODULE_0___default.a.dial(args, true);
    },

    send(args) {
      var address = args; //console.log("email address is " + address);

      nativescript_email__WEBPACK_IMPORTED_MODULE_1___default.a.compose({
        subject: "Message from Mobile App",
        to: [address],
        body: ""
      }).then(function () {//console.log("Email composer closed");
      }, function (err) {//console.log("Error: " + err);
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Directors.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DirectorDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/DirectorDetails.vue");
/* harmony import */ var _AboutDirectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/AboutDirectors.vue");
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
      directors: []
      /*
              {
                  "name": "Kirk Bode", 
                  "title": "President", 
                  "imagesrc": "~/images/DirectorKirkSM.jpg", 
                  "email": "kebode@gmail.com", 
                  "phone1": "(719)650-6689",
                  "phone2": " ",
                  "bio": "Kirk Bode began his Jeeping days not so long ago in Nebraska of all places after purchasing a rusted out, junky Cherokee from someone's yard. Soon after he realized that it was a pretty capable off road rig and began tinkering and improving it. After moving to Colorado in 2008, he found out what real off road trails are like. The old rusty Cherokee has been replaced with a newer one to take the abuse of Colorado's rocks. Kirk is a land surveyor and works for Barron Land in Colorado Springs. He is married to Erika and they have 2 children, Tyler and Marijke. They all love to get out in God's creation often and try to camp in new places. He hopes to see you on the trails!"
              },
              {    
                  "name": "Dave Chladek", 
                  "title": "Director", 
                  "imagesrc": "~/images/DirectorDaveSM.jpg", 
                  "email": "dchladek@q.com", 
                  "phone1": "(719)634-6006",
                  "phone2": " ",
                  "bio": "Dave can frequently be seen leading groups in Moab and will lead several of the more diffcult club runs this year."
              },
              {
                  "name": "Ward Williams", 
                  "title": "Director", 
                  "imagesrc": "~/images/DirectorWardSM.png", 
                  "email": "wardwwilliams@gmail.com", 
                  "phone1": "(719)213-5915",
                  "phone2": " ",
                  "bio": "You will see Ward on many of our trips with his vintage Willy's Jeep.  He a skilled wheeler and a very good spotter."
              },
              {
                  "name": "Jim Jenista", 
                  "title": "Director", 
                  "imagesrc": "~/images/DirectorJenistaSM.jpg", 
                  "email": "jjenista@aol.com", 
                  "phone1": "(719)200-4757",
                  "phone2": " ",
                  "bio": "Jim Jenista and his wife Karen have been 4-wheeling since 2003 when they bought a 2002 Land Rover Freelander and started exploring the easier trails near Colorado Springs. Bitten by the off-roading bug and realizing they needed more than the Freelander's 8.1 inches of clearance, they now each drive an orange 2004 Land Rover Discovery II G4. In addition to joining and eventually becoming a Director with CSC4W, Jim is on the Executive Committee of the Solihull Society, which is the Land Rover Club of Colorado, where he coordinated the last 5 iterations of the Land Rover National Rally.  Jim is a joint exercise planner with NORAD and USNORTHCOM at Peterson AFB, and Karen works at Library 21c with the Pikes Peak Library District. They have 6 grown children (3 of whom are married) and 7 grandchildren. They live at the southern edge of Black Forest and attend church at Saint Gabriel the Archangel in the northeast part of town."
              },
              {
                  "name": "Glen Hoover", 
                  "title": "Director", 
                  "imagesrc": "~/images/DirectorGlenSM.jpg", 
                  "email": "corubi1@yahoo.com", 
                  "phone1": "(719)371-7357",
                  "phone2": " ",
                  "bio": "I got interested in off-roading way back in the 70's! An article in a magazine detailing Colorado trails in the San Juan Mountains touched an adventurous cord in me, and since I already had a Chevy Blazer, I headed for Colorado the next summer. After several Blazers and beginning a family, and some years not able to go to Colorado at all, I bought my first Jeep in the late 80's. I've since owned a YJ, a Cherokee, 3 TJ's, and a JK. I still have 2 TJ's, identical red 2003 Rubicon's. Well, almost identical except for modifications like a 4.6 liter stroker, Ford 9 inch, and 5.5 inch lift on one. Living in Nebraska was frustrating to say the least! Upon retirement in 2011, I didn't hesitate to move to Colorado. Previous to moving to Colorado, I found CSC4W online and even talked with Denny Hage not knowing I'd one day be a CSC4W director! I'm here by myself now, and being retired, I have time to pre-run trails and to be spontaneous and able to do trail runs almost anytime someone feels the urge to go. Living the dream! Just remember JEEP acronym, Just Empty Every Pocket! Lol"
              },
              {
                  "name": "Pete Johns", 
                  "title": "Director", 
                  "imagesrc": "~/images/DirectorPeteSM.jpg", 
                  "email": "petejamij@Msn.com", 
                  "phone1": "(303)909-6715",
                  "phone2": " ",
                  "bio": "Pete Johns grew up in the mountains of Bailey Colorado.  The need of 4x4 was a way of life not just a hobby. Camping and four wheeling became a favorite past time with his wife,  Jami and their two children Zac and Alyssa. The desire to join a 4x4 club brought us to be active with CSC4W. We soon met many wonderful people with similar interests. Pete has been with CSC4W as a member starting in 2002 and a director a few years afterward. Pete loves sharing his love for the outdoors with others while enjoying the challenge of four wheeling."
              },
              {
                  "name": "Glenn Hess", 
                  "title": "Director", 
                  "imagesrc": "~/images/DirectorGlennSM.jpg", 
                  "email": "glennhess66@gmail.com", 
                  "phone1": "720-219-5384",
                  "phone2": " ",
                  "bio": "Glenn is not only an avid wheeler and great trail leader, he also spends a lot of time on his dirt bike touring around the state."
              },
              {
                  "name": "Jeremy Rowan", 
                  "title": "Director/Facebook Administrator", 
                  "imagesrc": "~/images/DirectorJeremySM.jpg", 
                  "email": "jrowan1979@gmail.com", 
                  "phone1": "(719)205-2565",
                  "phone2": " ",
                  "bio": "Jeremy can be seen leading groups around in Moab, Utah.  He is a partner in Outlaw Jeep Adventures and spends most of his time in Moab.  Jeremy is the man to see if you want to have a good wheeling experience when you visit Moab!"
              },
              {
                  "name": "Dan Mitchell", 
                  "title": "Director/Webmaster", 
                  "imagesrc": "~/images/DirectorDanSM.jpg", 
                  "email": "csc4w@csc4w.com", 
                  "phone1": "(719)210-1644",
                  "phone2": " ",
                  "bio": "Dan is an avid wheeler and you will see him and his wife Michelle on many trips this year.  "
              },
              {
                  "name": "Jason Sellers", 
                  "title": "Director", 
                  "imagesrc": "~/images/jason.jpg", 
                  "email": "jasonsellers73@yahoo.com", 
                  "phone1": "(954)805-3660",
                  "phone2": " ",
                  "bio": "Jason is a new director this year so make sure to introduce yourself to him at the meeting or on the trail."
              },
              {
                  "name": "Michelle Mitchell", 
                  "title": "Director", 
                  "imagesrc": "~/images/michelle.jpg", 
                  "email": "jeeping4joy@gmail.com", 
                  "phone1": "(719)229-1535",
                  "phone2": " ",
                  "bio": "Michelle is a new director this year.  She is the first female director in the club's history so make sure to introduce yourself to her at the meeting or on the trail."
              },
              {
                  "name": "Keith Butler", 
                  "title": "Director", 
                  "imagesrc": "~/images/keith.jpg", 
                  "email": "keith.butler58@gmail.com", 
                  "phone1": "(812)455-5477",
                  "phone2": " ",
                  "bio": "Keith is a new director this year so make sure to introduce yourself to him and his wife Keri at the kick-off meeting or on the trail."
              }
                      ] 
      */

    };
  },
  methods: {
    onItemTap(args) {
      var view = args.view;
      var page = view.page;
      var tappedItem = view.bindingContext; //console.log("director tapped");

      this.$showModal(_DirectorDetails__WEBPACK_IMPORTED_MODULE_0__["default"], {
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
      this.$showModal(_AboutDirectors__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }

  },
  mounted: function mounted() {
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "GET",
      "url": "http://data.csc4w.com/directors.json"
    }).then(result => {
      this.directors = result.data.directors; //console.log("result is " + JSON.stringify(result.data.directors));
    }, error => {
      console.error(error);
    });
  }
});

/***/ }),

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
      this.misc = result.data.misc; //console.log("result is " + JSON.stringify(result.data.misc));
    }, error => {
      this.$showModal(NoConnect);
    });
  }
});

/***/ }),

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

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ScheduleDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-phone/index.js");
/* harmony import */ var nativescript_phone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_phone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-email/email.js");
/* harmony import */ var nativescript_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_email__WEBPACK_IMPORTED_MODULE_1__);
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



var Calendar = __webpack_require__("../node_modules/nativescript-calendar/calendar.js");

var LocateAddress = __webpack_require__("../node_modules/nativescript-locate-address/locate-address.js").LocateAddress;

var utilsModule = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["context"],
  computed: {
    event() {
      return this.context || {};
    }

  },
  methods: {
    navTo(args) {
      //console.log("touched navTo " + args);
      utilsModule.openUrl(args);
    },

    tapAddr(args) {
      //console.log("touched tapAddr" + args);
      var locator = new LocateAddress();
      locator.locate({
        address: args
      }).then(function () {//console.log("Maps app launched.");
      }, function (error) {
        console.log(error);
      });
    },

    call(args) {
      //console.log("touched phone number " + args);
      nativescript_phone__WEBPACK_IMPORTED_MODULE_0___default.a.dial(args, true);
    },

    send(args) {
      var address = args; //console.log("email address is " + address);

      nativescript_email__WEBPACK_IMPORTED_MODULE_1___default.a.compose({
        subject: "Message from Mobile App",
        to: [address],
        body: ""
      }).then(function () {//console.log("Email composer closed");
      }, function (err) {//console.log("Error: " + err);
      });
    },

    addToCalendar(args) {
      //console.log("Args is " + JSON.stringify(args));
      var yr = Number(args.dateFld.substring(6, 10));
      var dy = Number(args.dateFld.substring(3, 5));
      var mth = Number(args.dateFld.substring(0, 2) - 1);
      var hr = Number(args.startTimeFld);
      var dur = Number(args.duration);
      var stDt = new Date(yr, mth, dy, hr);
      var endTme = hr + args.duration;
      var endDt = new Date(yr, mth, dy, endTme);
      var startDt = new Date(yr);
      var dur = args.duration;
      var evtName = "CSC4W - " + args.name;
      var options = {
        title: evtName,
        startDate: stDt,
        endDate: endDt,
        location: args.meetAt
      };
      options.reminders = {
        first: 60
      }; //console.log("Options:" + JSON.stringify(options));

      confirm({
        title: "Create Event",
        message: "Create Event in your calendar?",
        okButtonText: "YES",
        cancelButtonText: "NO"
      }).then(function (result) {
        if (result == true) {
          Calendar.createEvent(options).then(function (createdId) {
            console.log("Created Event with ID: " + createdId);
          }), function (error) {
            console.log("Error creating an Event: " + error);
          };
        } else if (result == false) {}
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/SponsorDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-phone/index.js");
/* harmony import */ var nativescript_phone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_phone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-email/email.js");
/* harmony import */ var nativescript_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_email__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//



var LocateAddress = __webpack_require__("../node_modules/nativescript-locate-address/locate-address.js").LocateAddress;

var utilsModule = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["context"],
  computed: {
    sponsor() {
      return this.context || {};
    }

  },
  methods: {
    navTo(args) {
      //console.log("touched navTo " + args);
      utilsModule.openUrl(args);
    },

    tapAddr(args) {
      //console.log("touched tapAddr" + args);
      var locator = new LocateAddress();
      locator.locate({
        address: args
      }).then(function () {//console.log("Maps app launched.");
      }, function (error) {
        console.log(error);
      });
    },

    call(args) {
      //console.log("touched phone number " + args);
      nativescript_phone__WEBPACK_IMPORTED_MODULE_0___default.a.dial(args, true);
    },

    send(args) {
      var address = args; //console.log("email address is " + address);

      nativescript_email__WEBPACK_IMPORTED_MODULE_1___default.a.compose({
        subject: "Message from Mobile App",
        to: [address],
        body: ""
      }).then(function () {//console.log("Email composer closed");
      }, function (err) {//console.log("Error: " + err);
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Sponsors.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SponsorDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/SponsorDetails.vue");
/* harmony import */ var _AboutSponsors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/AboutSponsors.vue");
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
      sponsors: []
      /*
      
              {
                  "name": "4Wheel Parts", 
                  "address": "5720 N. Academy Blvd, Colorado Springs, CO, 80918",
                  "contact": " ",
                  "imagesrc": "~/images/4wp.png", 
                  "email": " ", 
                  "phone": "(719)591-9400",
                  "phone2": " ",
                  "url": "http://www.4wheelparts.com",
                  "bio": "4 Wheel Parts is your one-stop source for truck parts as well as parts for Jeeps & SUVs, with the nation’s largest inventory of off-road 4x4 products including tires, wheels, lift kits, winches, tonneau covers, fender flares, mud flaps, and more.  Featuring all the top brands like Pro Comp, Super Swamper, Fabtech, Warn and more, trust 4 Wheel Parts for all your off-road and 4x4 needs as well as utility truck parts."
              },
              {
                  "name": "Perkins Motors", 
                  "address": "1205 Motor City Drive, Colorado Springs, CO, 80905",
                  "contact": " ",
                  "imagesrc": "~/images/perkins.jpg", 
                  "email": " ",
                  "phone": "(719)475-2330",
                  "phone2": " ", 
                  "url": "https://www.perkinsmotors.com/",
                  "bio": "Our Perkins Motor Company dealership in the Colorado Springs area offers a large inventory of vehicles as well as the services needed to care for your vehicle. Our service center technicians are certified with expertise in the Chrysler Dodge Jeep Ram brand. Our service department offers the parts and accessories your Chrysler Dodge Jeep Ram needs to stay safe on the road for many more years to come."
              },
              {
                  "name": "Faricy Boys Chrysler Jeep", 
                  "address": "4950 New Car Drive, Colorado Springs, CO, 80918",
                  "contact": "Harrison",
                  "imagesrc": "~/images/faricylogo.png", 
                  "email": " ", 
                  "phone": "(719)636-1333",
                  "phone2": " ",
                  "url": "https://www.faricy.com/",
                  "bio": "For over 75 years, The Faricy Boys has served Colorado with integrity, loyalty & love — striving to make buying a new car as enjoyable and exciting as getting a new car. Whether you are shopping the best new Jeep and Chrysler selection in southern Colorado or our wide variety of used vehicles with no haggle pricing, you’ll see why starting with us is the easiest way to get behind the wheel of your next car. Additionally, you’ll find our parts and service team to be knowledgeable, friendly and focused on your needs first."
              },
              {
                  "name": "Acme Fire and Safety", 
                  "address": "1419 S. Wahsatch Avenue, Colorado Springs, CO, 80905",
                  "contact": " ",
                  "imagesrc": "~/images/Acme.png", 
                  "email": " ", 
                  "phone": "(719)473-2259",
                  "phone2": " ",
                  "url": "http://acmefireandsafetyinc.com/",
                  "bio": "Since 1955, Acme Fire & Safety Equipment Co. Inc. has been providing reliable fire safety options for residents and businesses in the Southeast Colorado area."
              },
              {
                  "name": "Best West Tire and Service, Inc.", 
                  "address": "3287 S. Academy Blvd, Colorado Springs, CO, 80916",
                  "contact": " ",
                  "imagesrc": "~/images/bestwest.png", 
                  "email": " ", 
                  "phone": "(719)390-9455",
                  "phone2": " ",
                  "url": "http://www.bestwesttireinc.com/",
                  "bio": "We are your local independent Goodyear dealer! At Best West Tire & Service, we do a lot more than just tire service and sales. Our ASE Certified technicians provide auto repair and maintenance services for cars, trucks, and SUVs. At our three locations in North Colorado Springs, South Colorado Springs, and Sterling, you will find a team of experienced technicians ready to meet all of your tire service and auto repair needs. In fact, we offer a 2 year/24,000 mile warranty on parts and labor through Goodyear, so you can rest assured your vehicle has received top quality service."
              },
              {
                  "name": "Predator 4WD", 
                  "address": "4620 N. Nevada Ave, Colorado Springs, CO, 80907",
                  "contact": " ",
                  "imagesrc": "~/images/predator.jpg", 
                  "email": " ", 
                  "phone": "(719)528-5790",
                  "phone2": " ",
                  "url": "http://predator4wd.com/",
                  "bio": "We serve our 4-wheel drive enthusiasts and make new ones by our quality of work. Whether it’s for business, every day travel or just for fun, we’ve got the experts to service your 4-wheel drive vehicle. One thing will always remain constant — to make sure your vehicle is safe and will get you to and from your destination. So whether you’re climbing a hill, kicking up dirt, splashing through rivers, or traveling city streets, we want you to have fun and enjoy the ride.  We’re a full service shop specializing in 4-wheel drive vehicles. We are Blue Seal ASE Certified, the highest ASE Certification available to service repair shops. We are a member of the Better Business Bureau. We have knowledgeable experienced counter staff to assist with purchasing decisions. We pride ourselves on our service excellence and customer care. We’re happy to provide service estimates. We provide quality 4x4 products at competitive pricing. Come visit our showroom. Our website contains only a small percentage of the products we stock. Some sale items listed on the website may not be advertised in the store so take a minute to look around and don't hesitate to contact us with any questions. A portion of every purchase goes to keeping 4 wheel drive trails open and opening new trails."
              },
              {
                  "name": "Patriot 4X4", 
                  "address": " ",
                  "contact": "Kris",
                  "imagesrc": "~/images/patriot.jpg", 
                  "email": " ", 
                  "phone": "(719)684-5025",
                  "phone2": " ",
                  "url": "https://patriot4x4.business.site/",
                  "bio": "Auto Repair Shop in Colorado Springs - Specializing in 4X4 repairs"
              },
              {
                  "name": "Sportsman's Warehouse", 
                  "address": "555 N. Chelton Road, Colorado Springs, CO, 80909",
                  "contact": " ",
                  "imagesrc": "~/images/sportsmans-warehouse.png", 
                  "email": " ", 
                  "phone": "(719)597-9200",
                  "phone2": " ",
                  "url": "https://www.sportsmanswarehouse.com/",
                  "bio": "Whether your passion is hunting, fishing, camping, backpacking or shooting, it's important to have the right equipment when you head into the great outdoors. Quality gear gives you the edge you need to perform well and enjoy the journey. That's why Sportsman's Warehouse carries only top-quality, brand-name products for the serious outdoor enthusiast."
              },
              {
                  "name": "FunTreks Guidebooks", 
                  "address": "P.O. Box 3127, Colorado Springs, CO, 80132",
                  "contact": " ",
                  "imagesrc": "~/images/funtreks.jpg", 
                  "email": " ", 
                  "phone": "(719)390-9455",
                  "phone2": " ",
                  "url": "https://funtreks.com/",
                  "bio": "There’s a whole lot of world out there waiting to be explored. We’ll equip you with all the information you need – difficulty levels, detailed directions, high-quality photos, and guidebooks to get you off-road and out of the mental grind. After all, your free time should be spent exactly like that – free."
              },
              {
                  "name": "Rock Ware Welding and Fabrication", 
                  "address": "6050 Stetson Hills Blvd, Colorado Springs, CO, 80923",
                  "contact": " ",
                  "imagesrc": "~/images/rockware.jpg", 
                  "email": " ", 
                  "phone": "(719)328-0796",
                  "phone2": " ",
                  "url": "http://www.rockware.net/",
                  "bio": "Rock Ware Custom Welding and Fabrication is your full service off road vehicle Repair, Service & Custom Accessories Facility. Rock Ware specializes in off-road accessories for Land Rovers including the Defender 90, 110, Range Rover Classic, and Discovery, as well as Custom Fabrication for all 4x4 models. Additionally Rock Ware builds custom vehicles that meet the needs of the off road community from the family recreational rigs to turn key rockcrawlers. Rock Ware is located in Colorado Springs, Colorado and is dedicated to quality and customer service!"
              },
              {
                  "name": "Colorado's Finest Window Well Covers", 
                  "address": " ",
                  "contact": "Ward or Jennifer Williams",
                  "imagesrc": "~/images/cww.jpg", 
                  "email": "coloradowindowwells@gmail.com", 
                  "phone": "(719)522-2485",
                  "phone2": " ",
                  "url": "http://coloradowindowwells.com/",
                  "bio": "Serving the greater Colorado Springs area, we have window well covers that are designed to help keep out Rain, Snow, Hail, Intruders, Debris, Pets, Childredn our covers are matenance free, lightweight, egress safe and UV protected.  They are made from ploycarbonate and aluminum materials.  Transparent cover allows light in.  Security brackets at NO EXTRA CHARGE.  Tested to hold up to 350 lbs.  Custom made at your home."
              },
              {
                  "name": "Land Rover of Colorado Springs", 
                  "address": "565 Automotive Drive, Colorado Springs, CO, 80905",
                  "contact": " ",
                  "imagesrc": "~/images/landrover.png", 
                  "email": " ", 
                  "phone": "(719)302-1000",
                  "phone2": " ",
                  "url": "https://www.rednoland.com/",
                  "bio": "Land Rover vehicles are prestigious, luxury SUVs, and we want you to have an equally great experience when you visit Land Rover Colorado Springs. We believe in putting Castle Rock, Pueblo, and Colorado Spring, Colorado customers first and the sale second. Our goal is to build reputations for life."
              },
              {
                  "name": "Discount Tire", 
                  "address": "770 Abbott Lane, Colorado Springs, CO, 80906",
                  "contact": " ",
                  "imagesrc": "~/images/discounttire.jpg", 
                  "email": " ", 
                  "phone": "(719)520-0694",
                  "phone2": " ",
                  "url": "https://www.discounttire.com/store/co/colorado-springs/s/1430",
                  "bio": "With the most reliable tire and wheel services around, the local Discount Tire store in Colorado springs, CO can help you make the right decisions for your vehicle."
              },
              {
                  "name": "Barron Land", 
                  "address": "2790 North Academy Blvd, Suite 311, Colorado Springs, CO, 80917",
                  "contact": " ",
                  "imagesrc": "~/images/barronland.png", 
                  "email": " ", 
                  "phone": "(719)360-6827",
                  "phone2": " ",
                  "url": "http://barronland.com/",
                  "bio": "Professional Land Surveying serving the Rocky Mountain Region.  Whether your project is private or commercial, we are here for you surveying needs."
              },
              {
                  "name": "Walmart",
                  "address": "707 S. 8th Street, Colorado Springs, CO, 80905",
                  "contact": " ",
                  "imagesrc": "~/images/walmart.jpg", 
                  "email": " ", 
                  "phone": "(719)633-0736",
                  "phone2": " ",
                  "url": "https://www.walmart.com/",
                  "bio": "Innovative thinking. Leadership through service. And above all, an unwavering commitment to saving people money. It’s what makes us the business we are today, and shapes the company we will be tomorrow. As the largest retailer in the world, our 2.3 million associates meet the needs of more than 260 million customers every week. And we do it wherever they shop – in our stores, online, or through their mobile devices. Sound like a lot of work? We’re just getting started"
              },
              {
                  "name": "Set Them Free", 
                  "address": "",
                  "contact": "Gianni and Betsy Vecchiaretti",
                  "imagesrc": "~/images/stfoffroad.png", 
                  "email": " ", 
                  "phone": "(303)619-4804",
                  "phone2": " ",
                  "url": "https://www.stfoffroad.com/",
                  "bio": "We exist with the goal of ending human trafficking globally. Our purpose is to raise money for those rescuing and rehabilitating the victims of human trafficking as well changing culture and laws around the world. Proceeds of Set Them Free Off Road supports the rescue and rehabilitation of human trafficking victims."
              },
              {
                  "name": "O'Reilly Auto Parts", 
                  "address": "7545 McLaughlin Road, Falcon, CO, 80831",
                  "contact": "Ryan Bauman",
                  "imagesrc": "~/images/oreilly.jpg", 
                  "email": " ", 
                  "phone": " ",
                  "phone2": " ",
                  "url": "https://locations.oreillyauto.com/co/peyton/autoparts-3666.html",
                  "bio": "Your Peyton, CO O'Reilly Auto Parts store is one of over 5,000 O’Reilly Auto Parts stores throughout the U.S. We carry all the parts, tools and accessories you need, as well as offering free Store Services like battery testing, wiper blade & bulb installation, check engine light testing and more. Need help? Stop by and talk to one of our Parts Professionals today."
              },
              {
                  "name": "Colorado Compressed Gases", 
                  "address": "3975 Interpark Drive, Colorado Springs, CO, 80907",
                  "contact": " ",
                  "imagesrc": "~/images/ccglogo.jpg", 
                  "email": " ", 
                  "phone": "(719)473-7714",
                  "phone2": " ",
                  "url": "http://www.coloradocompressedgases.com/",
                  "bio": "Colorado Compressed Gases in Colorado is a local, family owned and operated welding supply shop with more than 75 years of experience and knowledge in the industry. We're you one stop shop for all of your welding needs and questions."
              },
              {
                  "name": "Dan's Auto",   
                  "address": "3210 Chelton Circle, Colorado Springs, CO, 80908",
                  "contact": " ",
                  "imagesrc": "~/images/dansauto.jpg", 
                  "email": " ", 
                  "phone": "(719)635-2587",
                  "phone2": " ",
                  "url": "https://www.facebook.com/Dans-Auto-Inc-469195729957833/",
                  "bio": "A local, family owned provider of tune-ups and general repairs."
              },
              {
                  "name": "Outlaw Jeep Adventures", 
                  "address": "281 North Main Street, Moab, Utah, 84532",
                  "contact": "Jeremy Rowan",
                  "imagesrc": "~/images/outlaw.jpg", 
                  "email": " ", 
                  "phone": "(435)260-7451",
                  "phone2": " ",
                  "url": "http://www.outlawjeeptours.com/",
                  "bio": "When we started our offroad tour business in Moab, we wanted to do something different. We didn't want to have the 'run of the mill' tour business. We wanted to bring some excitement to our guests.  Over the past few years, we've worked hard to set ourselves apart from our competition. By offering ride-along, drive-along and guided tours, we've become your one-stop shop for jeep adventures in Moab. By branching out into different areas of the offroad community, we have been very fortunate and have guided for several TV shows and have done a lot of testing for vehicle manufacturing companies, including Jeep themselves. Our family is looking very forward to the future and being a part of your family's unforgettable vacation here in Moab!."
              },
              {
                  "name": "Warn Industries", 
                  "address": "12900 SE Capps Road, Clackamas, OR, 97015",
                  "contact": "Anne Snedecor",
                  "imagesrc": "~/images/warn.jpg", 
                  "email": " ", 
                  "phone": "(800)542-9276",
                  "phone2": " ",
                  "url": "https://warn.com/",
                  "bio": "The company designs, manufactures and markets a full line of off-road equipment and accessories that enhance the performance of four-wheel-drive vehicles, ATV's and utility vehicles. The company's Industrial Division markets electric and hydraulic winches and hoists to commercial, industrial and severe duty customers. Warn also has a line of utility winches and hoists that are designed for professional trade workers and do-it-yourself consumers who need powerful tools to assist them in pulling, hauling, dragging or lifting. Warn focuses on three specific markets - Consumer Aftermarket, Industrial/Commercial, and Original Equipment. With customers in over 65 countries, WARN is one of the world's most recognized brands in vehicle performance enhancing equipment."
              },
              {
                  "name": "Quadratec", 
                  "address": "1028 Saunders Lane, West Chester, PA, 19380",
                  "contact": " ",
                  "imagesrc": "~/images/quadratec.png", 
                  "email": " ", 
                  "phone": "(800)745-6037",
                  "phone2": " ",
                  "url": "https://www.quadratec.com/",
                  "bio": "For over 25 years, Quadratec has proudly provided Jeep enthusiasts the best parts and accessories available. Our company was founded on one principle: Provide the highest level of service and top quality products to all our customers - every day. Whether it is hood parts or tailgate accessories; Antenna kits or light bars, you can count on our experience to help select the perfect parts or accessories for your daily and off-road needs. Experience The Quadratec Advantage today!"
              },
              {
                  "name": "Stargazers Theatre and Event Center", 
                  "address": "10 Parkside Drive, Colorado Springs, CO, 80915",
                  "contact": " ",
                  "imagesrc": "~/images/stargazers.png", 
                  "email": " ", 
                  "phone": "(719)476-2200",
                  "phone2": " ",
                  "url": "http://www.stargazerstheatre.com/",
                  "bio": "Our Mission is to Bring Great Entertainment to Great Audiences and to be a Warm and Welcoming Gathering Place for the Community!"
              },
              {
                  "name": "Metalcloak", 
                  "address": "2484 Mercantile Drive, Rancho Cordova, CA, 95742",
                  "contact": " ",
                  "imagesrc": "~/images/metalcloak.jpg", 
                  "email": " ", 
                  "phone": "(916)631-8071",
                  "phone2": " ",
                  "url": "http://www.metalcloak.com/Default.asp",
                  "bio": "Whether it's our Game-Changing approach to Product Design, our development of the first Bolt-On High-Clearance Production Fenders, our Lifetime Customer Service policy, or our Patented Game-Changing Suspension Technology, everything we do is only worth doing if we can not only do it better, but significantly different then what others expect."
              },
              {
                  "name": "Bestop", 
                  "address": "333 Centennial Parkway, Suite B, Louisville, CO  80027",
                  "contact": " ",
                  "imagesrc": "~/images/bestop-logo.jpg", 
                  "email": " ", 
                  "phone": "(800)845-3567",
                  "phone2": " ",
                  "url": "https://www.bestop.com/",
                  "bio": "Bestop has been a leader in Jeep and Truck accessories for more than 60 years. Our selection of products comes from years of creating specialty products for outdoor adventures with your vehicle."
              }
      
                      ]
      */

    };
  },
  methods: {
    onItemTap(args) {
      var view = args.view;
      var page = view.page;
      var tappedItem = view.bindingContext; //console.log("sponsor tapped");

      this.$showModal(_SponsorDetails__WEBPACK_IMPORTED_MODULE_0__["default"], {
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
      this.$showModal(_AboutSponsors__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }

  },
  mounted: function mounted() {
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "GET",
      "url": "http://data.csc4w.com/sponsors.json"
    }).then(result => {
      this.sponsors = result.data.sponsors; //console.log("result is " + JSON.stringify(result.data.sponsors));
    }, error => {
      console.error(error);
    });
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/TrailDetails.vue?vue&type=script&lang=js&":
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
var utilsModule = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");

var LocateAddress = __webpack_require__("../node_modules/nativescript-locate-address/locate-address.js").LocateAddress;

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["context"],
  computed: {
    trail() {
      return this.context || {};
    }

  },
  methods: {
    tapAddr(args) {
      //console.log("touched tapAddr" + args);
      var locator = new LocateAddress();
      locator.locate({
        address: args
      }).then(function () {//console.log("Maps app launched.");
      }, function (error) {
        console.log(error);
      });
    },

    navTo(args) {
      //console.log("touched navTo " + args);
      utilsModule.openUrl(args);
    }

  }
});

/***/ }),

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
    }, error => {
      console.error(error);
    });
  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/AboutDirectors.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.about-panel {\n    horizontal-align: center;\n    color: white;\n    font-size: 20;\n    padding: 15;\n    background-color: #131d4e;\n}\n\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/AboutDirectors.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/AboutSchedule.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.about-panel {\n    horizontal-align: center;\n    color: white;\n    font-size: 15;\n    padding: 15;\n    background-color: #131d4e;\n}\n\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/AboutSchedule.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/AboutSponsors.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.about-panel {\n    horizontal-align: left;\n    color: white;\n    font-size: 15;\n    padding: 15;\n    background-color: #131d4e;\n}\n\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/AboutSponsors.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/AboutTrails.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.about-panel {\n    color: white;\n    font-size: 15;\n    padding: 15;\n    background-color: #131d4e;\n}\n\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/AboutTrails.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/AboutUs.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.about-panel {\n    horizontal-align: center;\n    color: white;\n    font-size: 12;\n    padding: 15;\n    background-color: #131d4e;\n}\n\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/AboutUs.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.fas {\n    font-family: \"Font Awesome 5 Free\", \"fa-solid-900\";\n    font-weight: 900;\n}\n.far {\n    font-family: \"Font Awesome 5 Free\", \"fa-regular-400\";\n    font-weight: 400;\n}\n.t-36 {\n    font-size: 36;\n}\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/App.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/DirectorDetails.vue?vue&type=style&index=0&id=a7badcea&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.home-panel[data-v-a7badcea] {\n    horizontal-align: center;\n    font-size: 35;\n    background-color: #131d4e;\n}\n.bio-panel[data-v-a7badcea] {\n    horizontal-align: center;\n    color: white;\n    margin: 10;\n    font-size: 15;\n    background-color: #131d4e;\n}\n.dirInfo[data-v-a7badcea] {\n    horizontal-align: center;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.dirLeft[data-v-a7badcea] {\n    horizontal-align: right;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.dirnameRight[data-v-a7badcea] {\n    horizontal-align: left;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.dirRight[data-v-a7badcea] {\n    horizontal-align: left;\n    text-decoration: underline;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/DirectorDetails.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Directors.vue?vue&type=style&index=0&id=922f2fc8&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.action-bar[data-v-922f2fc8] {\n    color: white;\n    font-size: 8;\n    padding: 8;\n    background-color: #131d4e;\n}\n.director[data-v-922f2fc8] {\n    color: white;\n    font-size: 25;\n}\n.list-panel[data-v-922f2fc8] {\n    color: white;\n    font-size: 25;\n    margin: 1;\n    width: 100%;\n    background-color: #131d4e;\n}\n.description-label[data-v-922f2fc8] {\n    margin-bottom: 15;\n}\n.header-label[data-v-922f2fc8] {\n    font-size: 20;\n    text-align: center;\n    background-color: #db1921;\n    color: White;\n    font-style: italic;\n    font-weight: bold;\n    width: 100%;\n}\n\n\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/Directors.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.homePanel[data-v-67410f3a] {\r\n  background-color: #131d4e;\n}\n.description[data-v-67410f3a] {\r\n  margin-bottom: 15;\r\n  font-size: 15;\r\n  color: white;\r\n  background-color: #131d4e;\r\n  text-align: center;\n}\r\n\r\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/Home.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Schedule.vue?vue&type=style&index=0&id=21bc911c&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.pic[data-v-21bc911c] {\n        background-color: #131d4e; \n        margin: 2;\n}\n.event[data-v-21bc911c] {\n        color: white;\n        vertical-align: top;\n        font-size: 20;\n        font-style: italic;\n        background-color: #131d4e; \n        text-align: left;\n        padding-left: 2;\n}\n.event1[data-v-21bc911c] {\n        color: white;\n        vertical-align: bottom;\n        font-size: 20;\n        font-style: italic;\n        background-color: #131d4e; \n        text-align: left;\n        padding-left: 2;\n}\n.event2[data-v-21bc911c] {\n        color: white;\n        vertical-align: top;\n        font-size: 20;\n        font-style: italic;\n        background-color: #131d4e; \n        text-align: left;\n        padding-left: 2;\n}\n.eventDate[data-v-21bc911c] {\n        color: white;\n        font-size: 20;\n}\n.description-label[data-v-21bc911c] {\n        margin-bottom: 15;\n}\n.event-panel[data-v-21bc911c] {\n  background-color: #131d4e;\n  margin-bottom: 3;\n}\n\n\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/Schedule.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/ScheduleDetails.vue?vue&type=style&index=0&id=033b0da0&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.home-panel[data-v-033b0da0] {\n    horizontal-align: center;\n    font-size: 35;\n    background-color: #131d4e;\n}\n.addr-panel[data-v-033b0da0] {\n    horizontal-align: center;\n    text-decoration: underline;\n    text-align: center;\n    color: white;\n    font-size: 20;\n    background-color: #131d4e;\n}\n.info-panel[data-v-033b0da0] {\n    horizontal-align: center;\n    text-align: center;\n    color: white;\n    font-size: 20;\n    background-color: #131d4e;\n}\n.desc-panel[data-v-033b0da0] {\n    horizontal-align: center;\n    text-align: center;\n    color: white;\n    margin: 20;\n    font-size: 12;\n    background-color: #131d4e;\n    border-style: solid;\n    border-color: white;\n    border-width: 5px;\n}\n.bio-panel[data-v-033b0da0] {\n    horizontal-align: center;\n    color: white;\n    margin: 10;\n    font-size: 15;\n    background-color: #131d4e;\n}\n.sponItem[data-v-033b0da0] {\n    horizontal-align: center;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.sponLeft[data-v-033b0da0] {\n    horizontal-align: right;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.sponnameRight[data-v-033b0da0] {\n    horizontal-align: left;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.sponRight[data-v-033b0da0] {\n    horizontal-align: left;\n    text-decoration: underline;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.sponRightNoUL[data-v-033b0da0] {\n    horizontal-align: left;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.motd-label[data-v-033b0da0] {\nfont-size: 15;\nmargin-top: 5;\nmargin-right: 5;\nmargin-bottom: 5;\nmargin-left: 5;\npadding: 5;\nhorizontal-align: center;\ntext-align: center;\nbackground-color: #db1921;\ncolor: white;\nfont-style: italic;\nfont-weight: bold;\n}\n\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/ScheduleDetails.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/SponsorDetails.vue?vue&type=style&index=0&id=4b28ebe3&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.addr-panel[data-v-4b28ebe3] {\n    color: white;\n    horizontal-align: center;\n    text-align: center;\n    font-size: 15;\n    margin: 1;\n    width: 100%;\n    background-color: #131d4e;\n    text-decoration: underline;\n}\n.sponPanel[data-v-4b28ebe3] {\n  background-color: #131d4e;\n}\n\n\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/SponsorDetails.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/TrailDetails.vue?vue&type=style&index=0&id=14dff392&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.home-panel[data-v-14dff392] {\n    horizontal-align: center;\n    font-size: 35;\n    background-color: #131d4e;\n}\n.addr-panel[data-v-14dff392] {\n    horizontal-align: center;\n    text-decoration: underline;\n    text-align: center;\n    color: white;\n    font-size: 20;\n    background-color: #131d4e;\n}\n.info-panel[data-v-14dff392] {\n    horizontal-align: center;\n    text-align: center;\n    color: white;\n    font-size: 20;\n    background-color: #131d4e;\n}\n.desc-panel[data-v-14dff392] {\n    horizontal-align: center;\n    text-align: center;\n    color: white;\n    margin: 20;\n    font-size: 12;\n    background-color: #131d4e;\n    border-style: solid;\n    border-color: white;\n    border-width: 5px;\n}\n.bio-panel[data-v-14dff392] {\n    horizontal-align: center;\n    color: white;\n    margin: 10;\n    font-size: 15;\n    background-color: #131d4e;\n}\n.sponItem[data-v-14dff392] {\n    horizontal-align: center;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.sponLeft[data-v-14dff392] {\n    horizontal-align: right;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.sponnameRight[data-v-14dff392] {\n    horizontal-align: left;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.sponRight[data-v-14dff392] {\n    horizontal-align: left;\n    text-decoration: underline;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.sponRightNoUL[data-v-14dff392] {\n    horizontal-align: left;\n    color: white;\n    font-size: 15;\n    margin: 0;\n    background-color: #131d4e;\n}\n.motd-label[data-v-14dff392] {\nfont-size: 15;\nmargin-top: 15;\nmargin-right: 5;\nmargin-bottom: 5;\nmargin-left: 5;\npadding: 5;\nhorizontal-align: center;\ntext-align: center;\nbackground-color: #db1921;\ncolor: white;\nfont-style: italic;\nfont-weight: bold;\n}\n\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/TrailDetails.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Trails.vue?vue&type=style&index=0&id=2a05cdc8&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.trailname[data-v-2a05cdc8] {\n    color: white;\n    font-size: 25;\n}\n.pic[data-v-2a05cdc8] {\n    padding: 2;\n}\n.event[data-v-2a05cdc8] {\n    color: white;\n    font-size: 20;\n}\n.eventDate[data-v-2a05cdc8] {\n    color: white;\n    font-size: 20;\n}\n.trail-panel[data-v-2a05cdc8] {\n    color: white;\n    text-align: center;\n    font-size: 15;\n    font-style: italic;\n    padding: 2;\n    width: 100%;\n    background-color: #131d4e;\n    border: white;\n    border-style: solid;\n    border-width: 5px;\n}\n.description-label[data-v-2a05cdc8] {\n    font-size: 15;\n    margin-bottom: 15;\n    horizontal-align: center;\n}\n.header-label[data-v-2a05cdc8] {\n    horizontal-align: center;\n    font-size: 20;\n    text-align: center;\n    background-color: #db1921;\n    color: White;\n    font-style: italic;\n    font-weight: bold;\n    width: 100%;\n}\n\n", ""]);


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
            global.hmrRefresh({ type: 'style', path: './components/Trails.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/AboutDirectors.vue?vue&type=template&id=11c19316&":
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
      _c("ActionBar", { attrs: { title: "About Our Directors" } }),
      _c(
        "ScrollView",
        { attrs: { background: "#131d4e" } },
        [
          _c(
            "StackLayout",
            [
              _c("Label", {
                staticClass: "about-panel",
                attrs: {
                  textWrap: "true",
                  text:
                    "Our Directors are responsible for managing the club, scheduling our trips and meetings and leading the trail runs.  \n                    \nTheir participation is voluntary and no Director is paid."
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/AboutSchedule.vue?vue&type=template&id=e3c98c0e&":
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
      _c("ActionBar", { attrs: { title: "About The Schedule" } }),
      _c(
        "ScrollView",
        { attrs: { background: "#131d4e" } },
        [
          _c(
            "StackLayout",
            [
              _c("Label", {
                staticClass: "about-panel",
                attrs: {
                  textWrap: "true",
                  text:
                    "This is the schedule for trips as of April 15th.  It is possible that May 9th events will change or cancel altogether depending on participation of our sponsors.\n                    \nWatch for status update on events as the schedule will change depending on the COVID-19 situation and also because of trail conditions."
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/AboutSponsors.vue?vue&type=template&id=341e320a&":
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
      _c("ActionBar", { attrs: { title: "About Our Sponsors" } }),
      _c(
        "ScrollView",
        { attrs: { background: "#131d4e" } },
        [
          _c(
            "StackLayout",
            [
              _c("Label", {
                staticClass: "about-panel",
                attrs: {
                  textWrap: "true",
                  text:
                    "Our Sponsors help us to keep our membership dues low.  They donate prizes for our giveaway at kick off, they provide meals for some events and in some cases provide us donations to pay for club sponsored events.  \n                    \nYou can show your appreciation for their sponsorhip by mentioning the club when you visit them."
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/AboutTrails.vue?vue&type=template&id=c68773e2&":
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
      _c("ActionBar", { attrs: { title: "About The Trails" } }),
      _c(
        "ScrollView",
        { attrs: { background: "#131d4e" } },
        [
          _c(
            "StackLayout",
            [
              _c("Label", {
                staticClass: "about-panel",
                attrs: {
                  textWrap: "true",
                  text:
                    "These are the trails that we have traveled in the past or will travel this season.  \n                    \nTrails will be added here as we run them in the future.  \n                    \nIn the details for each trail there is a link to information about the trail from our sponsor Funtreks.  Also, we included a COTREX link that will show you where the trail is.  The trailhead coordinates are derived from google maps but should be fairly accurate.  Trail ratings here are based on FunTreks ratings."
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/AboutUs.vue?vue&type=template&id=371bda00&":
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
      _c("ActionBar", { attrs: { title: "About CSC4W" } }),
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
                    "Colorado Springs Christian 4 Wheelers, Inc., exists as a club to allow for wonderful times together in off-road activities with fellow believers. The association began in the spring of 1993. \n\nOur philosophy includes the belief that we are to invite our neighbors and co-workers to join with us in any of our events so that we are involved intentionally in reaching out to other members of our community. \n\nAs Christians we desire to always uphold the law in regards to such things as: obeying the speed limit, staying clear of no trespassing or posted areas, staying on the trail when so marked, packing it in and packing it all out, adhering to the national Tread Lightly program and state organization of 4WD clubs, etc. \n\nOur desire is to help each other and our fellow man at all times. We want to be model off-roaders. \n\nGod has created a mighty work of art in the Rocky Mountains. Every Christian needs to be balanced in life with his spiritual self, his family, his work, and his recreational activities. \n\nMicah 4:2 says, Come, let us go up to the mountains. \n\nWe all need times of refreshing; the mountains, streams, and wooded hills remind us of the promises of God and of how faithfully He provides. Lets go up -- and see it, hear it, breathe it in, and most of all, feel it and experience it. Who knows? It may help change you forever!"
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&":
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
    "BottomNavigation",
    [
      _c(
        "TabStrip",
        { attrs: { backgroundColor: "white" } },
        [
          _c(
            "TabStripItem",
            { staticClass: "navigation__item" },
            [
              _c("Label", { attrs: { text: "Home" } }),
              _c("Image", {
                staticClass: "fas t-36",
                attrs: { "src.decode": "font://&#xf015;" }
              })
            ],
            1
          ),
          _c(
            "TabStripItem",
            { staticClass: "navigation__item" },
            [
              _c("Label", { attrs: { text: "Schedule" } }),
              _c("Image", {
                staticClass: "fas t-36",
                attrs: { "src.decode": "font://&#xf073;" }
              })
            ],
            1
          ),
          _c(
            "TabStripItem",
            { staticClass: "navigation__item" },
            [
              _c("Label", { attrs: { text: "Sponsors" } }),
              _c("Image", {
                staticClass: "fas t-36",
                attrs: { "src.decode": "font://&#xf2bb;" }
              })
            ],
            1
          ),
          _c(
            "TabStripItem",
            { staticClass: "navigation__item" },
            [
              _c("Label", { attrs: { text: "Trails" } }),
              _c("Image", {
                staticClass: "fas t-36",
                attrs: { "src.decode": "font://&#xf279;" }
              })
            ],
            1
          ),
          _c(
            "TabStripItem",
            { staticClass: "navigation__item" },
            [
              _c("Label", { attrs: { text: "Directors" } }),
              _c("Image", {
                staticClass: "fas t-36",
                attrs: { "src.decode": "font://&#xf007;" }
              })
            ],
            1
          )
        ],
        1
      ),
      _c("TabContentItem", [_c("Frame", [_c("Home")], 1)], 1),
      _c("TabContentItem", [_c("Frame", [_c("Schedule")], 1)], 1),
      _c("TabContentItem", [_c("Frame", [_c("Sponsors")], 1)], 1),
      _c("TabContentItem", [_c("Frame", [_c("Trails")], 1)], 1),
      _c("TabContentItem", [_c("Frame", [_c("Directors")], 1)], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/DirectorDetails.vue?vue&type=template&id=a7badcea&scoped=true&":
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
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "StackLayout",
            { staticClass: "home-panel" },
            [
              _c("Image", { attrs: { src: _vm.director.imagesrc } }),
              _c(
                "GridLayout",
                { staticClass: "dirInfo", attrs: { columns: "140,20,*" } },
                [
                  _c("Label", {
                    staticClass: "dirLeft",
                    attrs: { text: _vm.director.name, col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "dirItem",
                    attrs: { text: ":", col: "1" }
                  }),
                  _c("Label", {
                    staticClass: "dirnameRight",
                    attrs: { text: _vm.director.title, col: "2" }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { staticClass: "dirInfo", attrs: { columns: "60,20,*" } },
                [
                  _c("Label", {
                    staticClass: "dirLeft",
                    attrs: { text: "Phone", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "dirItem",
                    attrs: { text: ":", col: "1" }
                  }),
                  _c("Label", {
                    staticClass: "dirRight",
                    attrs: { text: _vm.director.phone1, col: "2" },
                    on: {
                      tap: function($event) {
                        return _vm.call(_vm.director.phone1)
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { staticClass: "dirInfo", attrs: { columns: "60,20,*" } },
                [
                  _c("Label", {
                    staticClass: "dirLeft",
                    attrs: { text: "Email", col: "0" }
                  }),
                  _c("Label", { attrs: { text: ":", col: "1" } }),
                  _c("Label", {
                    staticClass: "dirRight",
                    attrs: { text: _vm.director.email, col: "2" },
                    on: {
                      tap: function($event) {
                        return _vm.send(_vm.director.email)
                      }
                    }
                  })
                ],
                1
              ),
              _c("Label", {
                staticClass: "bio-panel",
                attrs: {
                  textWrap: "true",
                  text: _vm.director.bio,
                  verticalAlignment: "top"
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Directors.vue?vue&type=template&id=922f2fc8&scoped=true&":
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
      _c("ActionBar", {
        staticClass: "action-bar",
        attrs: { title: "Colorado Springs Christian 4-Wheelers" }
      }),
      _c(
        "StackLayout",
        { staticClass: "list-panel" },
        [
          _c("Label", {
            staticClass: "header-label",
            attrs: { textWrap: "true", text: "Our Directors for This Year" }
          }),
          _c("Button", {
            staticClass: "button",
            attrs: { text: "About Our Directors" },
            on: { tap: _vm.onAboutTap }
          }),
          _c(
            "ListView",
            {
              staticClass: "list-panel",
              attrs: {
                height: "100%",
                separatorColor: "white",
                items: _vm.directors,
                "+alias": "director"
              },
              on: { itemTap: _vm.onItemTap }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var director = ref.director
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "GridLayout",
                        { attrs: { columns: "100,*", ",": "", rows: "*" } },
                        [
                          _c("Image", {
                            attrs: {
                              src: director.imagesrc,
                              row: "1",
                              col: "0",
                              height: "70",
                              width: "70"
                            }
                          }),
                          _c("Label", {
                            staticClass: "director",
                            attrs: {
                              text: director.name,
                              textWrap: "true",
                              row: "1",
                              col: "1"
                            }
                          })
                        ],
                        1
                      )
                    }
                  }
                ])
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
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
      _c("ActionBar", {
        staticClass: "action-bar",
        attrs: {
          title: "Colorado Springs Christian 4-Wheelers",
          textWrap: "true"
        }
      }),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            { staticClass: "homePanel" },
            [
              _c("Image", {
                attrs: { src: "~/images/logo.png", height: "200", width: "200" }
              }),
              _c("Label", {
                staticClass: "description",
                attrs: {
                  textWrap: "true",
                  text:
                    "This App will keep you updated on the activities, directors, sponsors and trails for the Colorado Springs Christian 4-Wheelers club"
                }
              }),
              _c(
                "ListView",
                {
                  staticClass: "homePanel",
                  attrs: { height: "160", items: _vm.misc, "+alias": "item" }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var item = ref.item
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c("Label", {
                            staticClass: "red-message",
                            attrs: { text: item.motd, textWrap: "true" }
                          })
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "About Us" },
                on: { tap: _vm.onAboutUsTap }
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Schedule.vue?vue&type=template&id=21bc911c&scoped=true&":
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
      _c("ActionBar", {
        staticClass: "action-bar",
        attrs: { title: "Colorado Springs Christian 4-Wheelers" }
      }),
      _c(
        "StackLayout",
        { staticClass: "list-panel", attrs: { width: "100%" } },
        [
          _c("Label", {
            staticClass: "header-label",
            attrs: { textWrap: "true", text: "Our Schedule" }
          }),
          _c("Button", {
            staticClass: "button",
            attrs: { text: "About The Schedule" },
            on: { tap: _vm.onAboutTap }
          }),
          _c(
            "ListView",
            {
              staticClass: "list-panel",
              attrs: {
                height: "100%",
                separatorColor: "white",
                items: _vm.events,
                "+alias": "event"
              },
              on: { itemTap: _vm.onItemTap }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var event = ref.event
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "GridLayout",
                        { attrs: { columns: "auto,*", rows: "*,*" } },
                        [
                          _c("Image", {
                            staticClass: "pic",
                            attrs: {
                              src: event.imageSrc,
                              height: "120",
                              width: "120",
                              col: "0",
                              rowSpan: "2"
                            }
                          }),
                          _c("Label", {
                            staticClass: "event1",
                            attrs: {
                              text: event.eventDate,
                              textWrap: "true",
                              row: "0",
                              col: "1"
                            }
                          }),
                          _c("Label", {
                            staticClass: "event2",
                            attrs: {
                              text: event.name,
                              textWrap: "true",
                              row: "1",
                              col: "1"
                            }
                          })
                        ],
                        1
                      )
                    }
                  }
                ])
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ScheduleDetails.vue?vue&type=template&id=033b0da0&scoped=true&":
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
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "StackLayout",
            { staticClass: "home-panel" },
            [
              _c("Image", { attrs: { src: _vm.event.imageSrc } }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "Add to My Calendar" },
                on: {
                  tap: function($event) {
                    return _vm.addToCalendar(_vm.event)
                  }
                }
              }),
              _c("Label", {
                staticClass: "info-panel",
                attrs: { text: _vm.event.name }
              }),
              _c("Label", {
                staticClass: "info-panel",
                attrs: { text: _vm.event.group }
              }),
              _c("Label", {
                staticClass: "info-panel",
                attrs: { text: _vm.event.eventDate, textwrap: "true" }
              }),
              _c(
                "GridLayout",
                { attrs: { columns: "90, *" } },
                [
                  _c("Label", {
                    staticClass: "sponLeft",
                    attrs: { text: "Meet at: ", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "sponRight",
                    attrs: {
                      text: _vm.event.meetAt,
                      col: "1",
                      textWrap: "true"
                    },
                    on: {
                      tap: function($event) {
                        return _vm.tapAddr(_vm.event.meetAt)
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { attrs: { columns: "90, *" } },
                [
                  _c("Label", {
                    staticClass: "sponLeft",
                    attrs: { text: "Meet time: ", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "sponnameRight",
                    attrs: {
                      text: _vm.event.meetTime,
                      col: "1",
                      textWrap: "true"
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { attrs: { columns: "90, *" } },
                [
                  _c("Label", {
                    staticClass: "sponLeft",
                    attrs: { text: "Rating: ", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "sponnameRight",
                    attrs: {
                      text: _vm.event.rating,
                      col: "1",
                      textwrap: "true"
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { attrs: { columns: "90, *" } },
                [
                  _c("Label", {
                    staticClass: "sponLeft",
                    attrs: { text: "Leaders: ", col: "0" }
                  }),
                  _c(
                    "GridLayout",
                    { attrs: { col: "1", columns: "*,*,*" } },
                    [
                      _c("Label", {
                        staticClass: "sponRight",
                        attrs: { text: _vm.event.leader1, col: "0" },
                        on: {
                          tap: function($event) {
                            return _vm.call(_vm.event.leader1Phone)
                          }
                        }
                      }),
                      _c("Label", {
                        staticClass: "sponRight",
                        attrs: { text: _vm.event.leader2, col: "1" },
                        on: {
                          tap: function($event) {
                            return _vm.call(_vm.event.leader2Phone)
                          }
                        }
                      }),
                      _c("Label", {
                        staticClass: "sponRight",
                        attrs: { text: _vm.event.leader3, col: "2" },
                        on: {
                          tap: function($event) {
                            return _vm.call(_vm.event.leader3Phone)
                          }
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c("Label", {
                staticClass: "motd-label",
                attrs: {
                  text: _vm.event.desc,
                  textWrap: "true",
                  height: "100%"
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/SponsorDetails.vue?vue&type=template&id=4b28ebe3&scoped=true&":
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
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "StackLayout",
            { staticClass: "sponPanel" },
            [
              _c("Image", { attrs: { src: _vm.sponsor.imagesrc } }),
              _c("Label", {
                staticClass: "addr-panel",
                attrs: { text: _vm.sponsor.address, textWrap: "true" },
                on: {
                  tap: function($event) {
                    return _vm.tapAddr(_vm.sponsor.address)
                  }
                }
              }),
              _c(
                "GridLayout",
                { attrs: { columns: "100, *" } },
                [
                  _c("Label", {
                    staticClass: "leftCol",
                    attrs: { text: "   Contact: ", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "rightColNoUL",
                    attrs: {
                      text: _vm.sponsor.contact,
                      col: "1",
                      textwrap: "true"
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { attrs: { columns: "100, *" } },
                [
                  _c("Label", {
                    staticClass: "leftCol",
                    attrs: { text: "Phone: ", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "rightCol",
                    attrs: {
                      text: _vm.sponsor.phone,
                      col: "1",
                      textwrap: "true"
                    },
                    on: {
                      tap: function($event) {
                        return _vm.call(_vm.sponsor.phone)
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { attrs: { columns: "100, *" } },
                [
                  _c("Label", {
                    staticClass: "leftCol",
                    attrs: { text: "EMail: ", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "rightCol",
                    attrs: {
                      text: _vm.sponsor.email,
                      col: "1",
                      textwrap: "true"
                    },
                    on: {
                      tap: function($event) {
                        return _vm.send(_vm.sponsor.email)
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { attrs: { columns: "100, *" } },
                [
                  _c("Label", {
                    staticClass: "leftCol",
                    attrs: { text: "WebSite: ", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "rightCol",
                    attrs: {
                      text: _vm.sponsor.url,
                      col: "1",
                      textwrap: "true"
                    },
                    on: {
                      tap: function($event) {
                        return _vm.navTo(_vm.sponsor.url)
                      }
                    }
                  })
                ],
                1
              ),
              _c("Label", {
                staticClass: "red-message",
                attrs: { text: _vm.sponsor.bio, textWrap: "true" }
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Sponsors.vue?vue&type=template&id=46f76474&scoped=true&":
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
      _c("ActionBar", {
        staticClass: "action-bar",
        attrs: { title: "Colorado Springs Christian 4-Wheelers" }
      }),
      _c(
        "StackLayout",
        { staticClass: "list-panel" },
        [
          _c("Label", {
            staticClass: "header-label",
            attrs: { textWrap: "true", text: "Our Sponsors" }
          }),
          _c("Button", {
            staticClass: "button",
            attrs: { text: "About Our Sponsors" },
            on: { tap: _vm.onAboutTap }
          }),
          _c(
            "ListView",
            {
              staticClass: "list-panel",
              attrs: {
                height: "100%",
                separatorColor: "white",
                items: _vm.sponsors,
                "+alias": "sponsor"
              },
              on: { itemTap: _vm.onItemTap }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var sponsor = ref.sponsor
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "GridLayout",
                        { attrs: { columns: "200,*", ",": "", rows: "*,*" } },
                        [
                          _c("Image", {
                            attrs: {
                              src: sponsor.imagesrc,
                              row: "0",
                              col: "0",
                              height: "150",
                              width: "150"
                            }
                          }),
                          _c("Label", {
                            staticClass: "listRightItem",
                            attrs: {
                              text: sponsor.name,
                              textWrap: "true",
                              row: "0",
                              col: "1"
                            }
                          })
                        ],
                        1
                      )
                    }
                  }
                ])
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/TrailDetails.vue?vue&type=template&id=14dff392&scoped=true&":
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
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "StackLayout",
            { staticClass: "home-panel" },
            [
              _c("Image", { attrs: { src: _vm.trail.imagesrc } }),
              _c("Label", {
                staticClass: "info-panel",
                attrs: { text: _vm.trail.name }
              }),
              _c(
                "GridLayout",
                { attrs: { columns: "90, *" } },
                [
                  _c("Label", {
                    staticClass: "sponLeft",
                    attrs: { text: "Trailhead: ", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "sponRight",
                    attrs: {
                      text: _vm.trail.coordinates,
                      col: "1",
                      textWrap: "true"
                    },
                    on: {
                      tap: function($event) {
                        return _vm.tapAddr(_vm.trail.coordinates)
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { attrs: { columns: "90, *" } },
                [
                  _c("Label", {
                    staticClass: "sponLeft",
                    attrs: { text: "Difficulty: ", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "sponnameRight",
                    attrs: {
                      text: _vm.trail.difficulty,
                      col: "1",
                      textWrap: "true"
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { attrs: { columns: "90, *" } },
                [
                  _c("Label", {
                    staticClass: "sponLeft",
                    attrs: { text: "FunTreks: ", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "sponRight",
                    attrs: {
                      text: _vm.trail.funtrex,
                      col: "1",
                      textWrap: "true"
                    },
                    on: {
                      tap: function($event) {
                        return _vm.navTo(_vm.trail.funtrex)
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                { attrs: { columns: "90, *" } },
                [
                  _c("Label", {
                    staticClass: "sponLeft",
                    attrs: { text: "CoTrex: ", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "sponRight",
                    attrs: {
                      text: _vm.trail.cotrex,
                      col: "1",
                      textWrap: "true"
                    },
                    on: {
                      tap: function($event) {
                        return _vm.navTo(_vm.trail.cotrex)
                      }
                    }
                  })
                ],
                1
              ),
              _c("Label", {
                staticClass: "motd-label",
                attrs: {
                  text: _vm.trail.desc,
                  textWrap: "true",
                  height: "100%"
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Trails.vue?vue&type=template&id=2a05cdc8&scoped=true&":
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
      _c("ActionBar", {
        staticClass: "action-bar",
        attrs: { title: "Colorado Springs Christian 4-Wheelers" }
      }),
      _c(
        "StackLayout",
        { staticClass: "list-panel" },
        [
          _c("Label", {
            staticClass: "header-label",
            attrs: { textWrap: "true", text: "Trails" }
          }),
          _c("Button", {
            staticClass: "button",
            attrs: { text: "About The Trails" },
            on: { tap: _vm.onTrailsTap }
          }),
          _c(
            "ListView",
            {
              staticClass: "list-panel",
              attrs: {
                height: "100%",
                separatorColor: "white",
                items: _vm.trails,
                "+alias": "trail"
              },
              on: { itemTap: _vm.onItemTap }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var trail = ref.trail
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "GridLayout",
                        { attrs: { columns: "150,*", ",": "", rows: "*,*" } },
                        [
                          _c("Image", {
                            attrs: {
                              src: trail.imagesrc,
                              row: "0",
                              col: "0",
                              height: "100",
                              width: "100"
                            }
                          }),
                          _c("Label", {
                            staticClass: "listRightItem",
                            attrs: {
                              text: trail.name,
                              textWrap: "true",
                              row: "0",
                              col: "1"
                            }
                          })
                        ],
                        1
                      )
                    }
                  }
                ])
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

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".action-bar"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"padding","value":"8"},{"type":"declaration","property":"font-size","value":"6"},{"type":"declaration","property":"background-color","value":"#131d4e"}]},{"type":"rule","selectors":[".button"],"declarations":[{"type":"declaration","property":"background-color","value":"#fcd905"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-size","value":"15"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"margin","value":"10"}]},{"type":"rule","selectors":[".header-label"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"font-size","value":"25"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"background-color","value":"#db1921"},{"type":"declaration","property":"color","value":"White"},{"type":"declaration","property":"font-style","value":"italic"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".red-message"],"declarations":[{"type":"declaration","property":"font-size","value":"15"},{"type":"declaration","property":"margin-top","value":"5"},{"type":"declaration","property":"margin-right","value":"5"},{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"margin-left","value":"5"},{"type":"declaration","property":"padding","value":"5"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"background-color","value":"#db1921"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-style","value":"italic"},{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".list-panel"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"margin","value":"1"},{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"background-color","value":"#131d4e"}]},{"type":"rule","selectors":[".lineSep"],"declarations":[{"type":"declaration","property":"height","value":"1"},{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"padding","value":"20"}]},{"type":"rule","selectors":[".leftCol"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"right"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"15"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"background-color","value":"#131d4e"}]},{"type":"rule","selectors":[".rightCol"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"left"},{"type":"declaration","property":"text-decoration","value":"underline"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"15"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"background-color","value":"#131d4e"}]},{"type":"rule","selectors":[".rightColNoUL"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"left"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"15"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"background-color","value":"#131d4e"}]},{"type":"rule","selectors":[".listRightItem"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"vertical-align","value":"center"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue");

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/AboutDirectors.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutDirectors_vue_vue_type_template_id_11c19316___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutDirectors.vue?vue&type=template&id=11c19316&");
/* harmony import */ var _AboutDirectors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/AboutDirectors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AboutDirectors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/AboutDirectors.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AboutDirectors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutDirectors_vue_vue_type_template_id_11c19316___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutDirectors_vue_vue_type_template_id_11c19316___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('11c19316')) {
      api.createRecord('11c19316', component.options)
    } else {
      api.reload('11c19316', component.options)
    }
    module.hot.accept("./components/AboutDirectors.vue?vue&type=template&id=11c19316&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AboutDirectors_vue_vue_type_template_id_11c19316___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutDirectors.vue?vue&type=template&id=11c19316&");
(function () {
      api.rerender('11c19316', {
        render: _AboutDirectors_vue_vue_type_template_id_11c19316___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AboutDirectors_vue_vue_type_template_id_11c19316___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/AboutDirectors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/AboutDirectors.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutDirectors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/AboutDirectors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutDirectors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/AboutDirectors.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutDirectors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/AboutDirectors.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutDirectors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutDirectors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutDirectors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutDirectors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutDirectors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/AboutDirectors.vue?vue&type=template&id=11c19316&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutDirectors_vue_vue_type_template_id_11c19316___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/AboutDirectors.vue?vue&type=template&id=11c19316&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutDirectors_vue_vue_type_template_id_11c19316___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutDirectors_vue_vue_type_template_id_11c19316___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/AboutSchedule.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutSchedule_vue_vue_type_template_id_e3c98c0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutSchedule.vue?vue&type=template&id=e3c98c0e&");
/* harmony import */ var _AboutSchedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/AboutSchedule.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AboutSchedule_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/AboutSchedule.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AboutSchedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutSchedule_vue_vue_type_template_id_e3c98c0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutSchedule_vue_vue_type_template_id_e3c98c0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('e3c98c0e')) {
      api.createRecord('e3c98c0e', component.options)
    } else {
      api.reload('e3c98c0e', component.options)
    }
    module.hot.accept("./components/AboutSchedule.vue?vue&type=template&id=e3c98c0e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AboutSchedule_vue_vue_type_template_id_e3c98c0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutSchedule.vue?vue&type=template&id=e3c98c0e&");
(function () {
      api.rerender('e3c98c0e', {
        render: _AboutSchedule_vue_vue_type_template_id_e3c98c0e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AboutSchedule_vue_vue_type_template_id_e3c98c0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/AboutSchedule.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/AboutSchedule.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSchedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/AboutSchedule.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSchedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/AboutSchedule.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSchedule_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/AboutSchedule.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSchedule_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSchedule_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSchedule_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSchedule_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSchedule_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/AboutSchedule.vue?vue&type=template&id=e3c98c0e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSchedule_vue_vue_type_template_id_e3c98c0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/AboutSchedule.vue?vue&type=template&id=e3c98c0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSchedule_vue_vue_type_template_id_e3c98c0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSchedule_vue_vue_type_template_id_e3c98c0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/AboutSponsors.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutSponsors_vue_vue_type_template_id_341e320a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutSponsors.vue?vue&type=template&id=341e320a&");
/* harmony import */ var _AboutSponsors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/AboutSponsors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AboutSponsors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/AboutSponsors.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AboutSponsors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutSponsors_vue_vue_type_template_id_341e320a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutSponsors_vue_vue_type_template_id_341e320a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('341e320a')) {
      api.createRecord('341e320a', component.options)
    } else {
      api.reload('341e320a', component.options)
    }
    module.hot.accept("./components/AboutSponsors.vue?vue&type=template&id=341e320a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AboutSponsors_vue_vue_type_template_id_341e320a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutSponsors.vue?vue&type=template&id=341e320a&");
(function () {
      api.rerender('341e320a', {
        render: _AboutSponsors_vue_vue_type_template_id_341e320a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AboutSponsors_vue_vue_type_template_id_341e320a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/AboutSponsors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/AboutSponsors.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSponsors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/AboutSponsors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSponsors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/AboutSponsors.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSponsors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/AboutSponsors.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSponsors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSponsors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSponsors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSponsors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSponsors_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/AboutSponsors.vue?vue&type=template&id=341e320a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSponsors_vue_vue_type_template_id_341e320a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/AboutSponsors.vue?vue&type=template&id=341e320a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSponsors_vue_vue_type_template_id_341e320a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSponsors_vue_vue_type_template_id_341e320a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/AboutTrails.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutTrails_vue_vue_type_template_id_c68773e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutTrails.vue?vue&type=template&id=c68773e2&");
/* harmony import */ var _AboutTrails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/AboutTrails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AboutTrails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/AboutTrails.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AboutTrails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutTrails_vue_vue_type_template_id_c68773e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutTrails_vue_vue_type_template_id_c68773e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('c68773e2')) {
      api.createRecord('c68773e2', component.options)
    } else {
      api.reload('c68773e2', component.options)
    }
    module.hot.accept("./components/AboutTrails.vue?vue&type=template&id=c68773e2&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AboutTrails_vue_vue_type_template_id_c68773e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutTrails.vue?vue&type=template&id=c68773e2&");
(function () {
      api.rerender('c68773e2', {
        render: _AboutTrails_vue_vue_type_template_id_c68773e2___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AboutTrails_vue_vue_type_template_id_c68773e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/AboutTrails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/AboutTrails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutTrails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/AboutTrails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutTrails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/AboutTrails.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutTrails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/AboutTrails.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutTrails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutTrails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutTrails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutTrails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutTrails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/AboutTrails.vue?vue&type=template&id=c68773e2&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutTrails_vue_vue_type_template_id_c68773e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/AboutTrails.vue?vue&type=template&id=c68773e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutTrails_vue_vue_type_template_id_c68773e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutTrails_vue_vue_type_template_id_c68773e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/AboutUs.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutUs_vue_vue_type_template_id_371bda00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutUs.vue?vue&type=template&id=371bda00&");
/* harmony import */ var _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/AboutUs.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutUs_vue_vue_type_template_id_371bda00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutUs_vue_vue_type_template_id_371bda00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('371bda00')) {
      api.createRecord('371bda00', component.options)
    } else {
      api.reload('371bda00', component.options)
    }
    module.hot.accept("./components/AboutUs.vue?vue&type=template&id=371bda00&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AboutUs_vue_vue_type_template_id_371bda00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AboutUs.vue?vue&type=template&id=371bda00&");
(function () {
      api.rerender('371bda00', {
        render: _AboutUs_vue_vue_type_template_id_371bda00___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AboutUs_vue_vue_type_template_id_371bda00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/AboutUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/AboutUs.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/AboutUs.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/AboutUs.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/AboutUs.vue?vue&type=template&id=371bda00&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_371bda00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/AboutUs.vue?vue&type=template&id=371bda00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_371bda00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_371bda00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('45ba5ed4')) {
      api.createRecord('45ba5ed4', component.options)
    } else {
      api.reload('45ba5ed4', component.options)
    }
    module.hot.accept("./components/App.vue?vue&type=template&id=45ba5ed4&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&");
(function () {
      api.rerender('45ba5ed4', {
        render: _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/App.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/App.vue?vue&type=template&id=45ba5ed4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/DirectorDetails.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DirectorDetails_vue_vue_type_template_id_a7badcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/DirectorDetails.vue?vue&type=template&id=a7badcea&scoped=true&");
/* harmony import */ var _DirectorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/DirectorDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DirectorDetails_vue_vue_type_style_index_0_id_a7badcea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/DirectorDetails.vue?vue&type=style&index=0&id=a7badcea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DirectorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DirectorDetails_vue_vue_type_template_id_a7badcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DirectorDetails_vue_vue_type_template_id_a7badcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a7badcea",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('a7badcea')) {
      api.createRecord('a7badcea', component.options)
    } else {
      api.reload('a7badcea', component.options)
    }
    module.hot.accept("./components/DirectorDetails.vue?vue&type=template&id=a7badcea&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _DirectorDetails_vue_vue_type_template_id_a7badcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/DirectorDetails.vue?vue&type=template&id=a7badcea&scoped=true&");
(function () {
      api.rerender('a7badcea', {
        render: _DirectorDetails_vue_vue_type_template_id_a7badcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _DirectorDetails_vue_vue_type_template_id_a7badcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/DirectorDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/DirectorDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/DirectorDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/DirectorDetails.vue?vue&type=style&index=0&id=a7badcea&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectorDetails_vue_vue_type_style_index_0_id_a7badcea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/DirectorDetails.vue?vue&type=style&index=0&id=a7badcea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectorDetails_vue_vue_type_style_index_0_id_a7badcea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectorDetails_vue_vue_type_style_index_0_id_a7badcea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectorDetails_vue_vue_type_style_index_0_id_a7badcea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectorDetails_vue_vue_type_style_index_0_id_a7badcea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectorDetails_vue_vue_type_style_index_0_id_a7badcea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/DirectorDetails.vue?vue&type=template&id=a7badcea&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectorDetails_vue_vue_type_template_id_a7badcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/DirectorDetails.vue?vue&type=template&id=a7badcea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectorDetails_vue_vue_type_template_id_a7badcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectorDetails_vue_vue_type_template_id_a7badcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Directors.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directors_vue_vue_type_template_id_922f2fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Directors.vue?vue&type=template&id=922f2fc8&scoped=true&");
/* harmony import */ var _Directors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Directors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Directors_vue_vue_type_style_index_0_id_922f2fc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Directors.vue?vue&type=style&index=0&id=922f2fc8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Directors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Directors_vue_vue_type_template_id_922f2fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Directors_vue_vue_type_template_id_922f2fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "922f2fc8",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('922f2fc8')) {
      api.createRecord('922f2fc8', component.options)
    } else {
      api.reload('922f2fc8', component.options)
    }
    module.hot.accept("./components/Directors.vue?vue&type=template&id=922f2fc8&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Directors_vue_vue_type_template_id_922f2fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Directors.vue?vue&type=template&id=922f2fc8&scoped=true&");
(function () {
      api.rerender('922f2fc8', {
        render: _Directors_vue_vue_type_template_id_922f2fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Directors_vue_vue_type_template_id_922f2fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/Directors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Directors.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Directors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Directors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Directors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Directors.vue?vue&type=style&index=0&id=922f2fc8&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Directors_vue_vue_type_style_index_0_id_922f2fc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Directors.vue?vue&type=style&index=0&id=922f2fc8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Directors_vue_vue_type_style_index_0_id_922f2fc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Directors_vue_vue_type_style_index_0_id_922f2fc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Directors_vue_vue_type_style_index_0_id_922f2fc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Directors_vue_vue_type_style_index_0_id_922f2fc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Directors_vue_vue_type_style_index_0_id_922f2fc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Directors.vue?vue&type=template&id=922f2fc8&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Directors_vue_vue_type_template_id_922f2fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Directors.vue?vue&type=template&id=922f2fc8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Directors_vue_vue_type_template_id_922f2fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Directors_vue_vue_type_template_id_922f2fc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67410f3a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Schedule.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Schedule_vue_vue_type_template_id_21bc911c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Schedule.vue?vue&type=template&id=21bc911c&scoped=true&");
/* harmony import */ var _Schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Schedule.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Schedule_vue_vue_type_style_index_0_id_21bc911c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Schedule.vue?vue&type=style&index=0&id=21bc911c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Schedule_vue_vue_type_template_id_21bc911c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Schedule_vue_vue_type_template_id_21bc911c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "21bc911c",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('21bc911c')) {
      api.createRecord('21bc911c', component.options)
    } else {
      api.reload('21bc911c', component.options)
    }
    module.hot.accept("./components/Schedule.vue?vue&type=template&id=21bc911c&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Schedule_vue_vue_type_template_id_21bc911c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Schedule.vue?vue&type=template&id=21bc911c&scoped=true&");
(function () {
      api.rerender('21bc911c', {
        render: _Schedule_vue_vue_type_template_id_21bc911c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Schedule_vue_vue_type_template_id_21bc911c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/Schedule.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Schedule.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Schedule.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Schedule.vue?vue&type=style&index=0&id=21bc911c&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_style_index_0_id_21bc911c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Schedule.vue?vue&type=style&index=0&id=21bc911c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_style_index_0_id_21bc911c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_style_index_0_id_21bc911c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_style_index_0_id_21bc911c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_style_index_0_id_21bc911c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_style_index_0_id_21bc911c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Schedule.vue?vue&type=template&id=21bc911c&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_template_id_21bc911c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Schedule.vue?vue&type=template&id=21bc911c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_template_id_21bc911c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_template_id_21bc911c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ScheduleDetails.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScheduleDetails_vue_vue_type_template_id_033b0da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ScheduleDetails.vue?vue&type=template&id=033b0da0&scoped=true&");
/* harmony import */ var _ScheduleDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ScheduleDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ScheduleDetails_vue_vue_type_style_index_0_id_033b0da0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ScheduleDetails.vue?vue&type=style&index=0&id=033b0da0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScheduleDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScheduleDetails_vue_vue_type_template_id_033b0da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScheduleDetails_vue_vue_type_template_id_033b0da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "033b0da0",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('033b0da0')) {
      api.createRecord('033b0da0', component.options)
    } else {
      api.reload('033b0da0', component.options)
    }
    module.hot.accept("./components/ScheduleDetails.vue?vue&type=template&id=033b0da0&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ScheduleDetails_vue_vue_type_template_id_033b0da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ScheduleDetails.vue?vue&type=template&id=033b0da0&scoped=true&");
(function () {
      api.rerender('033b0da0', {
        render: _ScheduleDetails_vue_vue_type_template_id_033b0da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ScheduleDetails_vue_vue_type_template_id_033b0da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/ScheduleDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ScheduleDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ScheduleDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ScheduleDetails.vue?vue&type=style&index=0&id=033b0da0&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleDetails_vue_vue_type_style_index_0_id_033b0da0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/ScheduleDetails.vue?vue&type=style&index=0&id=033b0da0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleDetails_vue_vue_type_style_index_0_id_033b0da0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleDetails_vue_vue_type_style_index_0_id_033b0da0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleDetails_vue_vue_type_style_index_0_id_033b0da0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleDetails_vue_vue_type_style_index_0_id_033b0da0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleDetails_vue_vue_type_style_index_0_id_033b0da0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/ScheduleDetails.vue?vue&type=template&id=033b0da0&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleDetails_vue_vue_type_template_id_033b0da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ScheduleDetails.vue?vue&type=template&id=033b0da0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleDetails_vue_vue_type_template_id_033b0da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleDetails_vue_vue_type_template_id_033b0da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/SponsorDetails.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SponsorDetails_vue_vue_type_template_id_4b28ebe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/SponsorDetails.vue?vue&type=template&id=4b28ebe3&scoped=true&");
/* harmony import */ var _SponsorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/SponsorDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SponsorDetails_vue_vue_type_style_index_0_id_4b28ebe3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/SponsorDetails.vue?vue&type=style&index=0&id=4b28ebe3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SponsorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SponsorDetails_vue_vue_type_template_id_4b28ebe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SponsorDetails_vue_vue_type_template_id_4b28ebe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b28ebe3",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4b28ebe3')) {
      api.createRecord('4b28ebe3', component.options)
    } else {
      api.reload('4b28ebe3', component.options)
    }
    module.hot.accept("./components/SponsorDetails.vue?vue&type=template&id=4b28ebe3&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SponsorDetails_vue_vue_type_template_id_4b28ebe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/SponsorDetails.vue?vue&type=template&id=4b28ebe3&scoped=true&");
(function () {
      api.rerender('4b28ebe3', {
        render: _SponsorDetails_vue_vue_type_template_id_4b28ebe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SponsorDetails_vue_vue_type_template_id_4b28ebe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/SponsorDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/SponsorDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/SponsorDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/SponsorDetails.vue?vue&type=style&index=0&id=4b28ebe3&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorDetails_vue_vue_type_style_index_0_id_4b28ebe3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/SponsorDetails.vue?vue&type=style&index=0&id=4b28ebe3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorDetails_vue_vue_type_style_index_0_id_4b28ebe3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorDetails_vue_vue_type_style_index_0_id_4b28ebe3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorDetails_vue_vue_type_style_index_0_id_4b28ebe3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorDetails_vue_vue_type_style_index_0_id_4b28ebe3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorDetails_vue_vue_type_style_index_0_id_4b28ebe3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/SponsorDetails.vue?vue&type=template&id=4b28ebe3&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorDetails_vue_vue_type_template_id_4b28ebe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/SponsorDetails.vue?vue&type=template&id=4b28ebe3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorDetails_vue_vue_type_template_id_4b28ebe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SponsorDetails_vue_vue_type_template_id_4b28ebe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Sponsors.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sponsors_vue_vue_type_template_id_46f76474_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Sponsors.vue?vue&type=template&id=46f76474&scoped=true&");
/* harmony import */ var _Sponsors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Sponsors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sponsors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sponsors_vue_vue_type_template_id_46f76474_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sponsors_vue_vue_type_template_id_46f76474_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "46f76474",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('46f76474')) {
      api.createRecord('46f76474', component.options)
    } else {
      api.reload('46f76474', component.options)
    }
    module.hot.accept("./components/Sponsors.vue?vue&type=template&id=46f76474&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Sponsors_vue_vue_type_template_id_46f76474_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Sponsors.vue?vue&type=template&id=46f76474&scoped=true&");
(function () {
      api.rerender('46f76474', {
        render: _Sponsors_vue_vue_type_template_id_46f76474_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Sponsors_vue_vue_type_template_id_46f76474_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/Sponsors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Sponsors.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Sponsors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Sponsors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Sponsors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Sponsors.vue?vue&type=template&id=46f76474&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sponsors_vue_vue_type_template_id_46f76474_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Sponsors.vue?vue&type=template&id=46f76474&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sponsors_vue_vue_type_template_id_46f76474_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sponsors_vue_vue_type_template_id_46f76474_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/TrailDetails.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrailDetails_vue_vue_type_template_id_14dff392_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/TrailDetails.vue?vue&type=template&id=14dff392&scoped=true&");
/* harmony import */ var _TrailDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/TrailDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TrailDetails_vue_vue_type_style_index_0_id_14dff392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/TrailDetails.vue?vue&type=style&index=0&id=14dff392&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TrailDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrailDetails_vue_vue_type_template_id_14dff392_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrailDetails_vue_vue_type_template_id_14dff392_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14dff392",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('14dff392')) {
      api.createRecord('14dff392', component.options)
    } else {
      api.reload('14dff392', component.options)
    }
    module.hot.accept("./components/TrailDetails.vue?vue&type=template&id=14dff392&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TrailDetails_vue_vue_type_template_id_14dff392_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/TrailDetails.vue?vue&type=template&id=14dff392&scoped=true&");
(function () {
      api.rerender('14dff392', {
        render: _TrailDetails_vue_vue_type_template_id_14dff392_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TrailDetails_vue_vue_type_template_id_14dff392_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/TrailDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/TrailDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/TrailDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/TrailDetails.vue?vue&type=style&index=0&id=14dff392&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailDetails_vue_vue_type_style_index_0_id_14dff392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/TrailDetails.vue?vue&type=style&index=0&id=14dff392&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailDetails_vue_vue_type_style_index_0_id_14dff392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailDetails_vue_vue_type_style_index_0_id_14dff392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailDetails_vue_vue_type_style_index_0_id_14dff392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailDetails_vue_vue_type_style_index_0_id_14dff392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailDetails_vue_vue_type_style_index_0_id_14dff392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/TrailDetails.vue?vue&type=template&id=14dff392&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailDetails_vue_vue_type_template_id_14dff392_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/TrailDetails.vue?vue&type=template&id=14dff392&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailDetails_vue_vue_type_template_id_14dff392_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailDetails_vue_vue_type_template_id_14dff392_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Trails.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Trails_vue_vue_type_template_id_2a05cdc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Trails.vue?vue&type=template&id=2a05cdc8&scoped=true&");
/* harmony import */ var _Trails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Trails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Trails_vue_vue_type_style_index_0_id_2a05cdc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Trails.vue?vue&type=style&index=0&id=2a05cdc8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Trails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Trails_vue_vue_type_template_id_2a05cdc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Trails_vue_vue_type_template_id_2a05cdc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2a05cdc8",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2a05cdc8')) {
      api.createRecord('2a05cdc8', component.options)
    } else {
      api.reload('2a05cdc8', component.options)
    }
    module.hot.accept("./components/Trails.vue?vue&type=template&id=2a05cdc8&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Trails_vue_vue_type_template_id_2a05cdc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Trails.vue?vue&type=template&id=2a05cdc8&scoped=true&");
(function () {
      api.rerender('2a05cdc8', {
        render: _Trails_vue_vue_type_template_id_2a05cdc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Trails_vue_vue_type_template_id_2a05cdc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/Trails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Trails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Trails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Trails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Trails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Trails.vue?vue&type=style&index=0&id=2a05cdc8&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Trails_vue_vue_type_style_index_0_id_2a05cdc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Trails.vue?vue&type=style&index=0&id=2a05cdc8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Trails_vue_vue_type_style_index_0_id_2a05cdc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Trails_vue_vue_type_style_index_0_id_2a05cdc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Trails_vue_vue_type_style_index_0_id_2a05cdc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Trails_vue_vue_type_style_index_0_id_2a05cdc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Trails_vue_vue_type_style_index_0_id_2a05cdc8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Trails.vue?vue&type=template&id=2a05cdc8&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trails_vue_vue_type_template_id_2a05cdc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Trails.vue?vue&type=template&id=2a05cdc8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trails_vue_vue_type_template_id_2a05cdc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trails_vue_vue_type_template_id_2a05cdc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","markingMode":"none"},"main":"app.js","name":"csc4w","version":"1.0.0"};

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BYm91dERpcmVjdG9ycy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWJvdXRTY2hlZHVsZS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWJvdXRTcG9uc29ycy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWJvdXRUcmFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0Fib3V0VXMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRGlyZWN0b3JEZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9EaXJlY3RvcnMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1NjaGVkdWxlLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TY2hlZHVsZURldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1Nwb25zb3JEZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TcG9uc29ycy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvVHJhaWxEZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9UcmFpbHMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXREaXJlY3RvcnMudnVlPzE1MjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFNjaGVkdWxlLnZ1ZT9kMjc5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRTcG9uc29ycy52dWU/YmRiNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0VHJhaWxzLnZ1ZT9mMWVkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRVcy52dWU/M2YxNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/NjIxMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RpcmVjdG9yRGV0YWlscy52dWU/MjJkMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RpcmVjdG9ycy52dWU/MTdkMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlP2MxMTciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZS52dWU/YzQ4ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NjaGVkdWxlRGV0YWlscy52dWU/ODc1OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb25zb3JEZXRhaWxzLnZ1ZT9iMmNjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhaWxEZXRhaWxzLnZ1ZT84NjdlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhaWxzLnZ1ZT9iYWIxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXREaXJlY3RvcnMudnVlPzIwMjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFNjaGVkdWxlLnZ1ZT9lNTNkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRTcG9uc29ycy52dWU/ZGMzNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0VHJhaWxzLnZ1ZT9kYzdkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRVcy52dWU/OWNkNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/N2IwZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RpcmVjdG9yRGV0YWlscy52dWU/MjJiNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RpcmVjdG9ycy52dWU/MDE3ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzQ5OWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZS52dWU/MDdiYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NjaGVkdWxlRGV0YWlscy52dWU/NGMwMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb25zb3JEZXRhaWxzLnZ1ZT81NjVjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BvbnNvcnMudnVlP2RlNzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFpbERldGFpbHMudnVlPzQ0MGMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFpbHMudnVlPzdiNzQiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXREaXJlY3RvcnMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXREaXJlY3RvcnMudnVlP2RjOTYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dERpcmVjdG9ycy52dWU/YTc2MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0RGlyZWN0b3JzLnZ1ZT81ZTY3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRTY2hlZHVsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFNjaGVkdWxlLnZ1ZT9lYTJlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRTY2hlZHVsZS52dWU/MjU4ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0U2NoZWR1bGUudnVlPzY4YmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFNwb25zb3JzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0U3BvbnNvcnMudnVlPzYwZjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFNwb25zb3JzLnZ1ZT8yMjgyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRTcG9uc29ycy52dWU/ZGE5OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0VHJhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0VHJhaWxzLnZ1ZT82Zjg2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRUcmFpbHMudnVlP2VjZDQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFRyYWlscy52dWU/MDQwMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0VXMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRVcy52dWU/ZWMzYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0VXMudnVlPzdlYzEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFVzLnZ1ZT82MWM2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/OWUyMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/YTI1YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/YjM3NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RpcmVjdG9yRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaXJlY3RvckRldGFpbHMudnVlPzIxOTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaXJlY3RvckRldGFpbHMudnVlP2IxOGEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaXJlY3RvckRldGFpbHMudnVlPzBjMDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaXJlY3RvcnMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGlyZWN0b3JzLnZ1ZT80YTQ3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGlyZWN0b3JzLnZ1ZT8wYzc1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGlyZWN0b3JzLnZ1ZT9jNmNlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT81NjI1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/ZTcxZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzJjMzUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZS52dWU/NmMxZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NjaGVkdWxlLnZ1ZT9kNjk0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGUudnVlPzhmNjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZURldGFpbHMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGVEZXRhaWxzLnZ1ZT8yZWIwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGVEZXRhaWxzLnZ1ZT9lOGQ0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGVEZXRhaWxzLnZ1ZT84NzIxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BvbnNvckRldGFpbHMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BvbnNvckRldGFpbHMudnVlPzk5MjgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcG9uc29yRGV0YWlscy52dWU/ZWVkNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb25zb3JEZXRhaWxzLnZ1ZT81YjlmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BvbnNvcnMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BvbnNvcnMudnVlPzJjNzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcG9uc29ycy52dWU/ZWQxMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYWlsRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFpbERldGFpbHMudnVlPzJkMWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFpbERldGFpbHMudnVlP2MwZmUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFpbERldGFpbHMudnVlPzI4MDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFpbHMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhaWxzLnZ1ZT83MWQxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhaWxzLnZ1ZT8wYzdlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhaWxzLnZ1ZT8yY2Q1Il0sIm5hbWVzIjpbIkFwcCIsIlZ1ZSIsInJlbmRlciIsImgiLCIkc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNTQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLDJEQURBO0FBRUEsbUVBRkE7QUFHQSxtRUFIQTtBQUlBLCtEQUpBO0FBS0E7QUFMQTtBQURBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFFQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEEsR0FGQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FMQTs7QUFPQTtBQUNBLHlCQURBLENBRUE7O0FBQ0E7QUFDQSwwQ0FEQTtBQUVBLHFCQUZBO0FBR0E7QUFIQSxTQUlBLElBSkEsQ0FLQSxhQUNBO0FBQ0EsT0FQQSxFQU9BLGdCQUNBO0FBQ0EsT0FUQTtBQVdBOztBQXJCQTtBQVBBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBa0hBLEdBckhBO0FBdUhBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBSEEsQ0FJQTs7QUFDQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSx3QkFGQTtBQUdBO0FBQ0EsMkJBREE7QUFFQSx5QkFGQTtBQUdBO0FBSEE7QUFIQTtBQURBO0FBV0EsS0FsQkE7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBOztBQXRCQSxHQXZIQTtBQWlKQTtBQUNBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsSUFEQSxDQUNBO0FBQ0EsNkNBREEsQ0FFQTtBQUNBLEtBSkEsRUFJQTtBQUNBO0FBQ0EsS0FOQTtBQVFBO0FBMUpBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBLEdBUEE7QUFTQTtBQUNBO0FBREEsR0FUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkEsR0FiQTtBQXFCQTtBQUNBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsSUFEQSxDQUNBO0FBQ0EsbUNBREEsQ0FFQTtBQUVBLEtBTEEsRUFLQTtBQUNBO0FBQ0EsS0FQQTtBQVFBO0FBOUJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQWthQSxHQXJhQTtBQXVhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUhBLENBSUE7O0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUEsd0JBRkE7QUFHQTtBQUNBLDJCQURBO0FBRUEseUJBRkE7QUFHQTtBQUhBO0FBSEE7QUFEQTtBQVdBLEtBbEJBOztBQW9CQTtBQUNBO0FBQ0E7QUFDQTs7QUF2QkEsR0F2YUE7QUFtY0E7QUFDQTtBQUFBO0FBQUE7QUFBQSxPQUNBLElBREEsQ0FDQTtBQUNBLHVDQURBLENBRUE7QUFFQSxLQUxBLEVBS0E7QUFDQTtBQUNBLEtBUEE7QUFRQTtBQTVjQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYUE7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEEsR0FGQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FMQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREEsU0FFQSxJQUZBLENBR0EsYUFDQTtBQUNBLE9BTEEsRUFNQTtBQUNBO0FBQ0EsT0FSQTtBQVVBLEtBcEJBOztBQXNCQTtBQUNBO0FBQ0E7QUFDQSxLQXpCQTs7QUEyQkE7QUFDQSx5QkFEQSxDQUVBOztBQUNBO0FBQ0EsMENBREE7QUFFQSxxQkFGQTtBQUdBO0FBSEEsU0FJQSxJQUpBLENBS0EsYUFDQTtBQUNBLE9BUEEsRUFPQSxnQkFDQTtBQUNBLE9BVEE7QUFXQSxLQXpDQTs7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsdUJBRkE7QUFHQSxzQkFIQTtBQUlBO0FBSkE7QUFNQTtBQUNBO0FBREEsUUFuQkEsQ0F1QkE7O0FBQ0E7QUFDQSw2QkFEQTtBQUVBLGlEQUZBO0FBR0EsMkJBSEE7QUFJQTtBQUpBLFNBS0EsSUFMQSxDQUtBO0FBQ0E7QUFDQSw2Q0FDQTtBQUNBO0FBQ0EsV0FIQSxHQUlBO0FBQ0E7QUFDQSxXQU5BO0FBT0EsU0FSQSxNQVFBLHNCQUVBO0FBRUEsT0FsQkE7QUFtQkE7O0FBdEZBO0FBUEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOztBQUNBOztBQUNBOztBQUVBO0FBQ0Esb0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQSxHQUZBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQSxTQUVBLElBRkEsQ0FHQSxhQUNBO0FBQ0EsT0FMQSxFQU1BO0FBQ0E7QUFDQSxPQVJBO0FBVUEsS0FwQkE7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBLEtBekJBOztBQTJCQTtBQUNBLHlCQURBLENBRUE7O0FBQ0E7QUFDQSwwQ0FEQTtBQUVBLHFCQUZBO0FBR0E7QUFIQSxTQUlBLElBSkEsQ0FLQSxhQUNBO0FBQ0EsT0FQQSxFQU9BLGdCQUNBO0FBQ0EsT0FUQTtBQVdBOztBQXpDQTtBQVBBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUEyUkEsR0E5UkE7QUFnU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FIQSxDQUlBOztBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLHdCQUZBO0FBR0E7QUFDQSwyQkFEQTtBQUVBLHlCQUZBO0FBR0E7QUFIQTtBQUhBO0FBREE7QUFXQSxLQWxCQTs7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7O0FBdEJBLEdBaFNBO0FBMlRBO0FBQ0E7QUFBQTtBQUFBO0FBQUEsT0FDQSxJQURBLENBQ0E7QUFDQSwyQ0FEQSxDQUVBO0FBRUEsS0FMQSxFQUtBO0FBQ0E7QUFDQSxLQVBBO0FBUUE7QUFwVUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7QUFDQTs7QUFFQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEEsR0FGQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBLFNBRUEsSUFGQSxDQUdBLGFBQ0E7QUFDQSxPQUxBLEVBTUE7QUFDQTtBQUNBLE9BUkE7QUFVQSxLQWZBOztBQWdCQTtBQUNBO0FBQ0E7QUFDQTs7QUFuQkE7QUFQQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBb01BLEdBdk1BO0FBeU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBSEEsQ0FJQTs7QUFDQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSx3QkFGQTtBQUdBO0FBQ0EsMkJBREE7QUFFQSx5QkFGQTtBQUdBO0FBSEE7QUFIQTtBQURBO0FBV0EsS0FsQkE7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBOztBQXRCQSxHQXpNQTtBQW1PQTtBQUNBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsSUFEQSxDQUNBO0FBQ0EsdUNBREEsQ0FFQTtBQUVBLEtBTEEsRUFLQTtBQUNBO0FBQ0EsS0FQQTtBQVFBO0FBNU9BLEc7Ozs7Ozs7QUN6QkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLG1CQUFtQiwrQkFBK0IsbUJBQW1CLG9CQUFvQixrQkFBa0IsZ0NBQWdDLEdBQUc7OztBQUdySyx3QkFBd0IsbUJBQU8sQ0FBQywrREFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDhEQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQix5REFBeUQ7QUFDeEYsU0FBUztBQUNUOzs7Ozs7Ozs7QUN0QkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLG1CQUFtQiwrQkFBK0IsbUJBQW1CLG9CQUFvQixrQkFBa0IsZ0NBQWdDLEdBQUc7OztBQUdySyx3QkFBd0IsbUJBQU8sQ0FBQywrREFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDhEQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQix3REFBd0Q7QUFDdkYsU0FBUztBQUNUOzs7Ozs7Ozs7QUN0QkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLG1CQUFtQiw2QkFBNkIsbUJBQW1CLG9CQUFvQixrQkFBa0IsZ0NBQWdDLEdBQUc7OztBQUduSyx3QkFBd0IsbUJBQU8sQ0FBQywrREFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDhEQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQix3REFBd0Q7QUFDdkYsU0FBUztBQUNUOzs7Ozs7Ozs7QUN0QkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLG1CQUFtQixtQkFBbUIsb0JBQW9CLGtCQUFrQixnQ0FBZ0MsR0FBRzs7O0FBR3RJLHdCQUF3QixtQkFBTyxDQUFDLCtEQUE4QjtBQUM5RCxJQUFJLG1CQUFPLENBQUMsOERBQXlDOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLHNEQUFzRDtBQUNyRixTQUFTO0FBQ1Q7Ozs7Ozs7OztBQ3RCQSx5RUFBMkIsbUJBQU8sQ0FBQyxnREFBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsbUJBQW1CLCtCQUErQixtQkFBbUIsb0JBQW9CLGtCQUFrQixnQ0FBZ0MsR0FBRzs7O0FBR3JLLHdCQUF3QixtQkFBTyxDQUFDLCtEQUE4QjtBQUM5RCxJQUFJLG1CQUFPLENBQUMsOERBQXlDOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLGtEQUFrRDtBQUNqRixTQUFTO0FBQ1Q7Ozs7Ozs7OztBQ3RCQSx5RUFBMkIsbUJBQU8sQ0FBQyxnREFBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsV0FBVyw2REFBNkQsdUJBQXVCLEdBQUcsUUFBUSwrREFBK0QsdUJBQXVCLEdBQUcsU0FBUyxvQkFBb0IsR0FBRzs7O0FBRzFQLHdCQUF3QixtQkFBTyxDQUFDLCtEQUE4QjtBQUM5RCxJQUFJLG1CQUFPLENBQUMsOERBQXlDOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLDhDQUE4QztBQUM3RSxTQUFTO0FBQ1Q7Ozs7Ozs7OztBQ3RCQSx5RUFBMkIsbUJBQU8sQ0FBQyxnREFBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsbUNBQW1DLCtCQUErQixvQkFBb0IsZ0NBQWdDLEdBQUcsK0JBQStCLCtCQUErQixtQkFBbUIsaUJBQWlCLG9CQUFvQixnQ0FBZ0MsR0FBRyw2QkFBNkIsK0JBQStCLG1CQUFtQixvQkFBb0IsZ0JBQWdCLGdDQUFnQyxHQUFHLDZCQUE2Qiw4QkFBOEIsbUJBQW1CLG9CQUFvQixnQkFBZ0IsZ0NBQWdDLEdBQUcsa0NBQWtDLDZCQUE2QixtQkFBbUIsb0JBQW9CLGdCQUFnQixnQ0FBZ0MsR0FBRyw4QkFBOEIsNkJBQTZCLGlDQUFpQyxtQkFBbUIsb0JBQW9CLGdCQUFnQixnQ0FBZ0MsR0FBRzs7O0FBR242Qix3QkFBd0IsbUJBQU8sQ0FBQywrREFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDhEQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQiwwREFBMEQ7QUFDekYsU0FBUztBQUNUOzs7Ozs7Ozs7QUN0QkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLG1DQUFtQyxtQkFBbUIsbUJBQW1CLGlCQUFpQixnQ0FBZ0MsR0FBRyw4QkFBOEIsbUJBQW1CLG9CQUFvQixHQUFHLGdDQUFnQyxtQkFBbUIsb0JBQW9CLGdCQUFnQixrQkFBa0IsZ0NBQWdDLEdBQUcsdUNBQXVDLHdCQUF3QixHQUFHLGtDQUFrQyxvQkFBb0IseUJBQXlCLGdDQUFnQyxtQkFBbUIseUJBQXlCLHdCQUF3QixrQkFBa0IsR0FBRzs7O0FBR2xuQix3QkFBd0IsbUJBQU8sQ0FBQywrREFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDhEQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixvREFBb0Q7QUFDbkYsU0FBUztBQUNUOzs7Ozs7Ozs7QUN0QkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLGtDQUFrQyxnQ0FBZ0MsR0FBRyxpQ0FBaUMsd0JBQXdCLG9CQUFvQixtQkFBbUIsZ0NBQWdDLHlCQUF5QixHQUFHOzs7QUFHeFAsd0JBQXdCLG1CQUFPLENBQUMsK0RBQThCO0FBQzlELElBQUksbUJBQU8sQ0FBQyw4REFBeUM7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsK0NBQStDO0FBQzlFLFNBQVM7QUFDVDs7Ozs7Ozs7O0FDdEJBLHlFQUEyQixtQkFBTyxDQUFDLGdEQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyw0QkFBNEIsb0NBQW9DLHFCQUFxQixHQUFHLDJCQUEyQix1QkFBdUIsOEJBQThCLHdCQUF3Qiw2QkFBNkIsb0NBQW9DLDRCQUE0QiwwQkFBMEIsR0FBRyw0QkFBNEIsdUJBQXVCLGlDQUFpQyx3QkFBd0IsNkJBQTZCLG9DQUFvQyw0QkFBNEIsMEJBQTBCLEdBQUcsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsd0JBQXdCLDZCQUE2QixvQ0FBb0MsNEJBQTRCLDBCQUEwQixHQUFHLCtCQUErQix1QkFBdUIsd0JBQXdCLEdBQUcsdUNBQXVDLDRCQUE0QixHQUFHLGlDQUFpQyw4QkFBOEIscUJBQXFCLEdBQUc7OztBQUd4Z0Msd0JBQXdCLG1CQUFPLENBQUMsK0RBQThCO0FBQzlELElBQUksbUJBQU8sQ0FBQyw4REFBeUM7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbURBQW1EO0FBQ2xGLFNBQVM7QUFDVDs7Ozs7Ozs7O0FDdEJBLHlFQUEyQixtQkFBTyxDQUFDLGdEQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxtQ0FBbUMsK0JBQStCLG9CQUFvQixnQ0FBZ0MsR0FBRyxnQ0FBZ0MsK0JBQStCLGlDQUFpQyx5QkFBeUIsbUJBQW1CLG9CQUFvQixnQ0FBZ0MsR0FBRyxnQ0FBZ0MsK0JBQStCLHlCQUF5QixtQkFBbUIsb0JBQW9CLGdDQUFnQyxHQUFHLGdDQUFnQywrQkFBK0IseUJBQXlCLG1CQUFtQixpQkFBaUIsb0JBQW9CLGdDQUFnQywwQkFBMEIsMEJBQTBCLHdCQUF3QixHQUFHLCtCQUErQiwrQkFBK0IsbUJBQW1CLGlCQUFpQixvQkFBb0IsZ0NBQWdDLEdBQUcsOEJBQThCLCtCQUErQixtQkFBbUIsb0JBQW9CLGdCQUFnQixnQ0FBZ0MsR0FBRyw4QkFBOEIsOEJBQThCLG1CQUFtQixvQkFBb0IsZ0JBQWdCLGdDQUFnQyxHQUFHLG1DQUFtQyw2QkFBNkIsbUJBQW1CLG9CQUFvQixnQkFBZ0IsZ0NBQWdDLEdBQUcsK0JBQStCLDZCQUE2QixpQ0FBaUMsbUJBQW1CLG9CQUFvQixnQkFBZ0IsZ0NBQWdDLEdBQUcsbUNBQW1DLDZCQUE2QixtQkFBbUIsb0JBQW9CLGdCQUFnQixnQ0FBZ0MsR0FBRyxnQ0FBZ0MsZ0JBQWdCLGdCQUFnQixrQkFBa0IsbUJBQW1CLGlCQUFpQixhQUFhLDJCQUEyQixxQkFBcUIsNEJBQTRCLGVBQWUscUJBQXFCLG9CQUFvQixHQUFHOzs7QUFHLzZELHdCQUF3QixtQkFBTyxDQUFDLCtEQUE4QjtBQUM5RCxJQUFJLG1CQUFPLENBQUMsOERBQXlDOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLDBEQUEwRDtBQUN6RixTQUFTO0FBQ1Q7Ozs7Ozs7OztBQ3RCQSx5RUFBMkIsbUJBQU8sQ0FBQyxnREFBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsbUNBQW1DLG1CQUFtQiwrQkFBK0IseUJBQXlCLG9CQUFvQixnQkFBZ0Isa0JBQWtCLGdDQUFnQyxpQ0FBaUMsR0FBRywrQkFBK0IsOEJBQThCLEdBQUc7OztBQUcvVCx3QkFBd0IsbUJBQU8sQ0FBQywrREFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDhEQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQix5REFBeUQ7QUFDeEYsU0FBUztBQUNUOzs7Ozs7Ozs7QUN0QkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLG1DQUFtQywrQkFBK0Isb0JBQW9CLGdDQUFnQyxHQUFHLGdDQUFnQywrQkFBK0IsaUNBQWlDLHlCQUF5QixtQkFBbUIsb0JBQW9CLGdDQUFnQyxHQUFHLGdDQUFnQywrQkFBK0IseUJBQXlCLG1CQUFtQixvQkFBb0IsZ0NBQWdDLEdBQUcsZ0NBQWdDLCtCQUErQix5QkFBeUIsbUJBQW1CLGlCQUFpQixvQkFBb0IsZ0NBQWdDLDBCQUEwQiwwQkFBMEIsd0JBQXdCLEdBQUcsK0JBQStCLCtCQUErQixtQkFBbUIsaUJBQWlCLG9CQUFvQixnQ0FBZ0MsR0FBRyw4QkFBOEIsK0JBQStCLG1CQUFtQixvQkFBb0IsZ0JBQWdCLGdDQUFnQyxHQUFHLDhCQUE4Qiw4QkFBOEIsbUJBQW1CLG9CQUFvQixnQkFBZ0IsZ0NBQWdDLEdBQUcsbUNBQW1DLDZCQUE2QixtQkFBbUIsb0JBQW9CLGdCQUFnQixnQ0FBZ0MsR0FBRywrQkFBK0IsNkJBQTZCLGlDQUFpQyxtQkFBbUIsb0JBQW9CLGdCQUFnQixnQ0FBZ0MsR0FBRyxtQ0FBbUMsNkJBQTZCLG1CQUFtQixvQkFBb0IsZ0JBQWdCLGdDQUFnQyxHQUFHLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsaUJBQWlCLGFBQWEsMkJBQTJCLHFCQUFxQiw0QkFBNEIsZUFBZSxxQkFBcUIsb0JBQW9CLEdBQUc7OztBQUdoN0Qsd0JBQXdCLG1CQUFPLENBQUMsK0RBQThCO0FBQzlELElBQUksbUJBQU8sQ0FBQyw4REFBeUM7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsdURBQXVEO0FBQ3RGLFNBQVM7QUFDVDs7Ozs7Ozs7O0FDdEJBLHlFQUEyQixtQkFBTyxDQUFDLGdEQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxrQ0FBa0MsbUJBQW1CLG9CQUFvQixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRywyQkFBMkIsbUJBQW1CLG9CQUFvQixHQUFHLCtCQUErQixtQkFBbUIsb0JBQW9CLEdBQUcsaUNBQWlDLG1CQUFtQix5QkFBeUIsb0JBQW9CLHlCQUF5QixpQkFBaUIsa0JBQWtCLGdDQUFnQyxvQkFBb0IsMEJBQTBCLHdCQUF3QixHQUFHLHVDQUF1QyxvQkFBb0Isd0JBQXdCLCtCQUErQixHQUFHLGtDQUFrQywrQkFBK0Isb0JBQW9CLHlCQUF5QixnQ0FBZ0MsbUJBQW1CLHlCQUF5Qix3QkFBd0Isa0JBQWtCLEdBQUc7OztBQUdoNEIsd0JBQXdCLG1CQUFPLENBQUMsK0RBQThCO0FBQzlELElBQUksbUJBQU8sQ0FBQyw4REFBeUM7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsaURBQWlEO0FBQ2hGLFNBQVM7QUFDVDs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLCtCQUErQixFQUFFO0FBQ2pFO0FBQ0E7QUFDQSxTQUFTLFNBQVMsd0JBQXdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QyxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLDhCQUE4QixFQUFFO0FBQ2hFO0FBQ0E7QUFDQSxTQUFTLFNBQVMsd0JBQXdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QyxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLDhCQUE4QixFQUFFO0FBQ2hFO0FBQ0E7QUFDQSxTQUFTLFNBQVMsd0JBQXdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QyxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLDRCQUE0QixFQUFFO0FBQzlEO0FBQ0E7QUFDQSxTQUFTLFNBQVMsd0JBQXdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QyxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLHVCQUF1QixFQUFFO0FBQ3pEO0FBQ0E7QUFDQSxTQUFTLFNBQVMsd0JBQXdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCttQ0FBK21DO0FBQy9tQztBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QyxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsMkJBQTJCLEVBQUU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQ0FBa0M7QUFDL0M7QUFDQSwyQkFBMkIsU0FBUyxlQUFlLEVBQUU7QUFDckQ7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtDQUFrQztBQUMvQztBQUNBLDJCQUEyQixTQUFTLG1CQUFtQixFQUFFO0FBQ3pEO0FBQ0E7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZELGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQ0FBa0M7QUFDL0M7QUFDQSwyQkFBMkIsU0FBUyxtQkFBbUIsRUFBRTtBQUN6RDtBQUNBO0FBQ0Esd0JBQXdCLCtCQUErQjtBQUN2RCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0EsMkJBQTJCLFNBQVMsaUJBQWlCLEVBQUU7QUFDdkQ7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtDQUFrQztBQUMvQztBQUNBLDJCQUEyQixTQUFTLG9CQUFvQixFQUFFO0FBQzFEO0FBQ0E7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZELGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUywwQkFBMEIsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxhQUFhLDRCQUE0QjtBQUN6QztBQUNBLDJCQUEyQixTQUFTLDZCQUE2QixFQUFFO0FBQ25FO0FBQ0E7QUFDQSxpQkFBaUIsaUNBQWlDLHNCQUFzQixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQ0FBaUMscUJBQXFCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCLHNDQUFzQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUNBQWlDLHFCQUFxQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkIsK0JBQStCLFNBQVMsc0JBQXNCLEVBQUU7QUFDaEU7QUFDQTtBQUNBLDRCQUE0QixxQ0FBcUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QyxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3hHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTLDRCQUE0QjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xELGlCQUFpQjtBQUNqQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsdUNBQXVDLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3RGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyQkFBMkI7QUFDeEM7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVMsb0NBQW9DLGdCQUFnQixFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBLG9CQUFvQiw2QkFBNkI7QUFDakQsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUyxpQ0FBaUMsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2hHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsMEJBQTBCLEVBQUU7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0QkFBNEI7QUFDekM7QUFDQSwyQkFBMkIsU0FBUywwQkFBMEIsRUFBRTtBQUNoRTtBQUNBO0FBQ0Esd0JBQXdCLDZCQUE2QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxtQkFBbUIsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxtQkFBbUIsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxtQkFBbUIsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxtQkFBbUIsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUyw2QkFBNkIsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0NBQW9DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGdDQUFnQyxvQ0FBb0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsZ0NBQWdDLG9DQUFvQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDeEtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUywwQkFBMEIsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxhQUFhLDJCQUEyQjtBQUN4QztBQUNBLDJCQUEyQixTQUFTLDRCQUE0QixFQUFFO0FBQ2xFO0FBQ0E7QUFDQSx3QkFBd0IsOENBQThDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG9CQUFvQixFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG9CQUFvQixFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG9CQUFvQixFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG9CQUFvQixFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEMscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN4SUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUyw0QkFBNEI7QUFDckM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRCxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTLHlDQUF5QyxFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN0RkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLDBCQUEwQixFQUFFO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNEJBQTRCO0FBQ3pDO0FBQ0EsMkJBQTJCLFNBQVMsMEJBQTBCLEVBQUU7QUFDaEU7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG1CQUFtQixFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG1CQUFtQixFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG1CQUFtQixFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG1CQUFtQixFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEMscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2SUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUyw0QkFBNEI7QUFDckM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQyxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTLHlDQUF5QyxFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUo7Ozs7Ozs7QUN4QkEsZ0VBQWtCLGtDQUFrQyxVQUFVLDJEQUEyRCx3REFBd0QsRUFBRSxvRUFBb0UsRUFBRSxzREFBc0QsRUFBRSx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLHVEQUF1RCxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSx5REFBeUQsRUFBRSw2REFBNkQsRUFBRSxzREFBc0QsRUFBRSxFQUFFLDZEQUE2RCxvRUFBb0UsRUFBRSx5REFBeUQsRUFBRSw4REFBOEQsRUFBRSxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSw4REFBOEQsRUFBRSw2REFBNkQsRUFBRSx1REFBdUQsRUFBRSxFQUFFLDREQUE0RCx5REFBeUQsRUFBRSx5REFBeUQsRUFBRSwyREFBMkQsRUFBRSw0REFBNEQsRUFBRSwwREFBMEQsRUFBRSxzREFBc0QsRUFBRSw4REFBOEQsRUFBRSxxRUFBcUUsRUFBRSx3REFBd0QsRUFBRSw4REFBOEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLDJEQUEyRCx3REFBd0QsRUFBRSw4REFBOEQsRUFBRSx5REFBeUQsRUFBRSxxREFBcUQsRUFBRSx1REFBdUQsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLHdEQUF3RCxxREFBcUQsRUFBRSxtRUFBbUUsRUFBRSx1REFBdUQsRUFBRSxFQUFFLHdEQUF3RCxtRUFBbUUsRUFBRSx3REFBd0QsRUFBRSx5REFBeUQsRUFBRSxxREFBcUQsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLHlEQUF5RCxrRUFBa0UsRUFBRSxzRUFBc0UsRUFBRSx3REFBd0QsRUFBRSx5REFBeUQsRUFBRSxxREFBcUQsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLDZEQUE2RCxrRUFBa0UsRUFBRSx3REFBd0QsRUFBRSx5REFBeUQsRUFBRSxxREFBcUQsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLDhEQUE4RCx3REFBd0QsRUFBRSx5REFBeUQsRUFBRSxrRUFBa0UsRUFBRTtBQUM3bUksUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFDVDs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxPQUFPQSxHQUFQLE1BQWdCLGtCQUFoQjtBQUdBLElBQUlDLEdBQUosQ0FBUTtBQUVOQyxRQUFNLEVBQUVDLENBQUMsQ0FBQyxtQkFBS0gsQ0FBRDtBQUZSLG1CQUdMSSwwREFISDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZGO0FBQzNCO0FBQ0w7QUFDYTs7O0FBRzFFO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQTJFO0FBQy9GLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLGdFQUFxRCxFQUFFO0FBQUE7QUFDN0U7QUFDQSxnQkFBZ0IseUZBQU07QUFDdEIseUJBQXlCLGtHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBOEssQ0FBZ0Isa1BBQUcsRUFBQyxDOzs7Ozs7OztBQ0FsTTtBQUFBO0FBQUE7QUFBQTtBQUEwWCxDQUFnQix5YUFBRyxFQUFDLEM7Ozs7Ozs7O0FDQTlZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0RjtBQUMzQjtBQUNMO0FBQ2E7OztBQUd6RTtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUEyRTtBQUMvRixjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiwrREFBb0QsRUFBRTtBQUFBO0FBQzVFO0FBQ0EsZ0JBQWdCLHdGQUFNO0FBQ3RCLHlCQUF5QixpR0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTZLLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBak07QUFBQTtBQUFBO0FBQUE7QUFBeVgsQ0FBZ0Isd2FBQUcsRUFBQyxDOzs7Ozs7OztBQ0E3WTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEY7QUFDM0I7QUFDTDtBQUNhOzs7QUFHekU7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLHdGQUFNO0FBQ1IsRUFBRSxpR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBMkU7QUFDL0YsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsK0RBQW9ELEVBQUU7QUFBQTtBQUM1RTtBQUNBLGdCQUFnQix3RkFBTTtBQUN0Qix5QkFBeUIsaUdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE2SyxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7O0FDQWpNO0FBQUE7QUFBQTtBQUFBO0FBQXlYLENBQWdCLHdhQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBN1k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBGO0FBQzNCO0FBQ0w7QUFDYTs7O0FBR3ZFO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQTJFO0FBQy9GLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFrRCxFQUFFO0FBQUE7QUFDMUU7QUFDQSxnQkFBZ0Isc0ZBQU07QUFDdEIseUJBQXlCLCtGQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBMkssQ0FBZ0IsK09BQUcsRUFBQyxDOzs7Ozs7OztBQ0EvTDtBQUFBO0FBQUE7QUFBQTtBQUF1WCxDQUFnQixzYUFBRyxFQUFDLEM7Ozs7Ozs7O0FDQTNZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRjtBQUMzQjtBQUNMO0FBQ2E7OztBQUduRTtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUEyRTtBQUMvRixjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQix5REFBOEMsRUFBRTtBQUFBO0FBQ3RFO0FBQ0EsZ0JBQWdCLGtGQUFNO0FBQ3RCLHlCQUF5QiwyRkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXVLLENBQWdCLDJPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBM0w7QUFBQTtBQUFBO0FBQUE7QUFBbVgsQ0FBZ0Isa2FBQUcsRUFBQyxDOzs7Ozs7OztBQ0F2WTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Y7QUFDM0I7QUFDTDtBQUNhOzs7QUFHL0Q7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUixFQUFFLDhFQUFNO0FBQ1IsRUFBRSx1RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBMkU7QUFDL0YsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IscURBQTBDLEVBQUU7QUFBQTtBQUNsRTtBQUNBLGdCQUFnQiw4RUFBTTtBQUN0Qix5QkFBeUIsdUZBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFtSyxDQUFnQix1T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQXZMO0FBQUE7QUFBQTtBQUFBO0FBQStXLENBQWdCLDhaQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBblk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBHO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUduRztBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxxRkFBTTtBQUNSLEVBQUUsc0dBQU07QUFDUixFQUFFLCtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUEyRTtBQUMvRixjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw2RUFBa0UsRUFBRTtBQUFBO0FBQzFGO0FBQ0EsZ0JBQWdCLHNHQUFNO0FBQ3RCLHlCQUF5QiwrR0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQStLLENBQWdCLG1QQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBbk07QUFBQTtBQUFBO0FBQUE7QUFBbVosQ0FBZ0Isa2NBQUcsRUFBQyxDOzs7Ozs7OztBQ0F2YTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0c7QUFDdkM7QUFDTDtBQUNxQzs7O0FBRzdGO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQTJFO0FBQy9GLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLHVFQUE0RCxFQUFFO0FBQUE7QUFDcEY7QUFDQSxnQkFBZ0IsZ0dBQU07QUFDdEIseUJBQXlCLHlHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBeUssQ0FBZ0IsNk9BQUcsRUFBQyxDOzs7Ozs7OztBQ0E3TDtBQUFBO0FBQUE7QUFBQTtBQUE2WSxDQUFnQiw0YkFBRyxFQUFDLEM7Ozs7Ozs7O0FDQWphO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRjtBQUN2QztBQUNMO0FBQ3FDOzs7QUFHeEY7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBMkU7QUFDL0YsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0Isa0VBQXVELEVBQUU7QUFBQTtBQUMvRTtBQUNBLGdCQUFnQiwyRkFBTTtBQUN0Qix5QkFBeUIsb0dBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFvSyxDQUFnQix3T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQXhMO0FBQUE7QUFBQTtBQUFBO0FBQXdZLENBQWdCLHViQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBNVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1HO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUc1RjtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsK0ZBQU07QUFDUixFQUFFLHdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUEyRTtBQUMvRixjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQixzRUFBMkQsRUFBRTtBQUFBO0FBQ25GO0FBQ0EsZ0JBQWdCLCtGQUFNO0FBQ3RCLHlCQUF5Qix3R0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXdLLENBQWdCLDRPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBNUw7QUFBQTtBQUFBO0FBQUE7QUFBNFksQ0FBZ0IsMmJBQUcsRUFBQyxDOzs7Ozs7OztBQ0FoYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEc7QUFDdkM7QUFDTDtBQUNxQzs7O0FBR25HO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQTJFO0FBQy9GLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDZFQUFrRSxFQUFFO0FBQUE7QUFDMUY7QUFDQSxnQkFBZ0Isc0dBQU07QUFDdEIseUJBQXlCLCtHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBK0ssQ0FBZ0IsbVBBQUcsRUFBQyxDOzs7Ozs7OztBQ0FuTTtBQUFBO0FBQUE7QUFBQTtBQUFtWixDQUFnQixrY0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQXZhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RztBQUN2QztBQUNMO0FBQ3FDOzs7QUFHbEc7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLHFHQUFNO0FBQ1IsRUFBRSw4R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBMkU7QUFDL0YsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsNEVBQWlFLEVBQUU7QUFBQTtBQUN6RjtBQUNBLGdCQUFnQixxR0FBTTtBQUN0Qix5QkFBeUIsOEdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE4SyxDQUFnQixrUEFBRyxFQUFDLEM7Ozs7Ozs7O0FDQWxNO0FBQUE7QUFBQTtBQUFBO0FBQWtaLENBQWdCLGljQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBdGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRztBQUN2QztBQUNMOzs7QUFHdkQ7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLCtGQUFNO0FBQ1IsRUFBRSx3R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBMkU7QUFDL0YsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0Isc0VBQTJELEVBQUU7QUFBQTtBQUNuRjtBQUNBLGdCQUFnQiwrRkFBTTtBQUN0Qix5QkFBeUIsd0dBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF3SyxDQUFnQiw0T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQTVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RztBQUN2QztBQUNMO0FBQ3FDOzs7QUFHaEc7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsa0ZBQU07QUFDUixFQUFFLG1HQUFNO0FBQ1IsRUFBRSw0R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBMkU7QUFDL0YsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsMEVBQStELEVBQUU7QUFBQTtBQUN2RjtBQUNBLGdCQUFnQixtR0FBTTtBQUN0Qix5QkFBeUIsNEdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE0SyxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7O0FDQWhNO0FBQUE7QUFBQTtBQUFBO0FBQWdaLENBQWdCLCtiQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBcGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlHO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUcxRjtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUEyRTtBQUMvRixjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQixvRUFBeUQsRUFBRTtBQUFBO0FBQ2pGO0FBQ0EsZ0JBQWdCLDZGQUFNO0FBQ3RCLHlCQUF5QixzR0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXNLLENBQWdCLDBPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBMUw7QUFBQTtBQUFBO0FBQUE7QUFBMFksQ0FBZ0IseWJBQUcsRUFBQyxDOzs7Ozs7OztBQ0E5WjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkFib3V0IE91ciBEaXJlY3RvcnNcIiAvPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3IGJhY2tncm91bmQ9XCIjMTMxZDRlXCI+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFib3V0LXBhbmVsXCIgdGV4dFdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiT3VyIERpcmVjdG9ycyBhcmUgcmVzcG9uc2libGUgZm9yIG1hbmFnaW5nIHRoZSBjbHViLCBzY2hlZHVsaW5nIG91ciB0cmlwcyBhbmQgbWVldGluZ3MgYW5kIGxlYWRpbmcgdGhlIHRyYWlsIHJ1bnMuICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuVGhlaXIgcGFydGljaXBhdGlvbiBpcyB2b2x1bnRhcnkgYW5kIG5vIERpcmVjdG9yIGlzIHBhaWQuXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gQHRhcD1cIiRtb2RhbC5jbG9zZVwiIHRleHQ9XCJDbG9zZVwiIGNsYXNzPVwiYnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5hYm91dC1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJBYm91dCBUaGUgU2NoZWR1bGVcIiAvPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3IGJhY2tncm91bmQ9XCIjMTMxZDRlXCI+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFib3V0LXBhbmVsXCIgdGV4dFdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiVGhpcyBpcyB0aGUgc2NoZWR1bGUgZm9yIHRyaXBzIGFzIG9mIEFwcmlsIDE1dGguICBJdCBpcyBwb3NzaWJsZSB0aGF0IE1heSA5dGggZXZlbnRzIHdpbGwgY2hhbmdlIG9yIGNhbmNlbCBhbHRvZ2V0aGVyIGRlcGVuZGluZyBvbiBwYXJ0aWNpcGF0aW9uIG9mIG91ciBzcG9uc29ycy5cclxuICAgICAgICAgICAgICAgICAgICBcclxuV2F0Y2ggZm9yIHN0YXR1cyB1cGRhdGUgb24gZXZlbnRzIGFzIHRoZSBzY2hlZHVsZSB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlIENPVklELTE5IHNpdHVhdGlvbiBhbmQgYWxzbyBiZWNhdXNlIG9mIHRyYWlsIGNvbmRpdGlvbnMuXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gQHRhcD1cIiRtb2RhbC5jbG9zZVwiIHRleHQ9XCJDbG9zZVwiIGNsYXNzPVwiYnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5hYm91dC1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJBYm91dCBPdXIgU3BvbnNvcnNcIiAvPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3IGJhY2tncm91bmQ9XCIjMTMxZDRlXCI+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFib3V0LXBhbmVsXCIgdGV4dFdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiT3VyIFNwb25zb3JzIGhlbHAgdXMgdG8ga2VlcCBvdXIgbWVtYmVyc2hpcCBkdWVzIGxvdy4gIFRoZXkgZG9uYXRlIHByaXplcyBmb3Igb3VyIGdpdmVhd2F5IGF0IGtpY2sgb2ZmLCB0aGV5IHByb3ZpZGUgbWVhbHMgZm9yIHNvbWUgZXZlbnRzIGFuZCBpbiBzb21lIGNhc2VzIHByb3ZpZGUgdXMgZG9uYXRpb25zIHRvIHBheSBmb3IgY2x1YiBzcG9uc29yZWQgZXZlbnRzLiAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbllvdSBjYW4gc2hvdyB5b3VyIGFwcHJlY2lhdGlvbiBmb3IgdGhlaXIgc3BvbnNvcmhpcCBieSBtZW50aW9uaW5nIHRoZSBjbHViIHdoZW4geW91IHZpc2l0IHRoZW0uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gQHRhcD1cIiRtb2RhbC5jbG9zZVwiIHRleHQ9XCJDbG9zZVwiIGNsYXNzPVwiYnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5hYm91dC1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBwYWRkaW5nOiAxNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiQWJvdXQgVGhlIFRyYWlsc1wiIC8+XHJcbiAgICAgICAgPFNjcm9sbFZpZXcgYmFja2dyb3VuZD1cIiMxMzFkNGVcIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiYWJvdXQtcGFuZWxcIiB0ZXh0V3JhcD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJUaGVzZSBhcmUgdGhlIHRyYWlscyB0aGF0IHdlIGhhdmUgdHJhdmVsZWQgaW4gdGhlIHBhc3Qgb3Igd2lsbCB0cmF2ZWwgdGhpcyBzZWFzb24uICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuVHJhaWxzIHdpbGwgYmUgYWRkZWQgaGVyZSBhcyB3ZSBydW4gdGhlbSBpbiB0aGUgZnV0dXJlLiAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbkluIHRoZSBkZXRhaWxzIGZvciBlYWNoIHRyYWlsIHRoZXJlIGlzIGEgbGluayB0byBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdHJhaWwgZnJvbSBvdXIgc3BvbnNvciBGdW50cmVrcy4gIEFsc28sIHdlIGluY2x1ZGVkIGEgQ09UUkVYIGxpbmsgdGhhdCB3aWxsIHNob3cgeW91IHdoZXJlIHRoZSB0cmFpbCBpcy4gIFRoZSB0cmFpbGhlYWQgY29vcmRpbmF0ZXMgYXJlIGRlcml2ZWQgZnJvbSBnb29nbGUgbWFwcyBidXQgc2hvdWxkIGJlIGZhaXJseSBhY2N1cmF0ZS4gIFRyYWlsIHJhdGluZ3MgaGVyZSBhcmUgYmFzZWQgb24gRnVuVHJla3MgcmF0aW5ncy5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBAdGFwPVwiJG1vZGFsLmNsb3NlXCIgdGV4dD1cIkNsb3NlXCIgY2xhc3M9XCJidXR0b25cIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmFib3V0LXBhbmVsIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBwYWRkaW5nOiAxNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiQWJvdXQgQ1NDNFdcIiAvPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3IGJhY2tncm91bmQ9XCIjMTMxZDRlXCI+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIGhlaWdodD1cIjIwMFwiIHdpZHRoPVwiMjAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFib3V0LXBhbmVsXCIgdGV4dFdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNCBXaGVlbGVycywgSW5jLiwgZXhpc3RzIGFzIGEgY2x1YiB0byBhbGxvdyBmb3Igd29uZGVyZnVsIHRpbWVzIHRvZ2V0aGVyIGluIG9mZi1yb2FkIGFjdGl2aXRpZXMgd2l0aCBmZWxsb3cgYmVsaWV2ZXJzLiBUaGUgYXNzb2NpYXRpb24gYmVnYW4gaW4gdGhlIHNwcmluZyBvZiAxOTkzLiBcclxuXHJcbk91ciBwaGlsb3NvcGh5IGluY2x1ZGVzIHRoZSBiZWxpZWYgdGhhdCB3ZSBhcmUgdG8gaW52aXRlIG91ciBuZWlnaGJvcnMgYW5kIGNvLXdvcmtlcnMgdG8gam9pbiB3aXRoIHVzIGluIGFueSBvZiBvdXIgZXZlbnRzIHNvIHRoYXQgd2UgYXJlIGludm9sdmVkIGludGVudGlvbmFsbHkgaW4gcmVhY2hpbmcgb3V0IHRvIG90aGVyIG1lbWJlcnMgb2Ygb3VyIGNvbW11bml0eS4gXHJcblxyXG5BcyBDaHJpc3RpYW5zIHdlIGRlc2lyZSB0byBhbHdheXMgdXBob2xkIHRoZSBsYXcgaW4gcmVnYXJkcyB0byBzdWNoIHRoaW5ncyBhczogb2JleWluZyB0aGUgc3BlZWQgbGltaXQsIHN0YXlpbmcgY2xlYXIgb2Ygbm8gdHJlc3Bhc3Npbmcgb3IgcG9zdGVkIGFyZWFzLCBzdGF5aW5nIG9uIHRoZSB0cmFpbCB3aGVuIHNvIG1hcmtlZCwgcGFja2luZyBpdCBpbiBhbmQgcGFja2luZyBpdCBhbGwgb3V0LCBhZGhlcmluZyB0byB0aGUgbmF0aW9uYWwgVHJlYWQgTGlnaHRseSBwcm9ncmFtIGFuZCBzdGF0ZSBvcmdhbml6YXRpb24gb2YgNFdEIGNsdWJzLCBldGMuIFxyXG5cclxuT3VyIGRlc2lyZSBpcyB0byBoZWxwIGVhY2ggb3RoZXIgYW5kIG91ciBmZWxsb3cgbWFuIGF0IGFsbCB0aW1lcy4gV2Ugd2FudCB0byBiZSBtb2RlbCBvZmYtcm9hZGVycy4gXHJcblxyXG5Hb2QgaGFzIGNyZWF0ZWQgYSBtaWdodHkgd29yayBvZiBhcnQgaW4gdGhlIFJvY2t5IE1vdW50YWlucy4gRXZlcnkgQ2hyaXN0aWFuIG5lZWRzIHRvIGJlIGJhbGFuY2VkIGluIGxpZmUgd2l0aCBoaXMgc3Bpcml0dWFsIHNlbGYsIGhpcyBmYW1pbHksIGhpcyB3b3JrLCBhbmQgaGlzIHJlY3JlYXRpb25hbCBhY3Rpdml0aWVzLiBcclxuXHJcbk1pY2FoIDQ6MiBzYXlzLCBDb21lLCBsZXQgdXMgZ28gdXAgdG8gdGhlIG1vdW50YWlucy4gXHJcblxyXG5XZSBhbGwgbmVlZCB0aW1lcyBvZiByZWZyZXNoaW5nOyB0aGUgbW91bnRhaW5zLCBzdHJlYW1zLCBhbmQgd29vZGVkIGhpbGxzIHJlbWluZCB1cyBvZiB0aGUgcHJvbWlzZXMgb2YgR29kIGFuZCBvZiBob3cgZmFpdGhmdWxseSBIZSBwcm92aWRlcy4gTGV0cyBnbyB1cCAtLSBhbmQgc2VlIGl0LCBoZWFyIGl0LCBicmVhdGhlIGl0IGluLCBhbmQgbW9zdCBvZiBhbGwsIGZlZWwgaXQgYW5kIGV4cGVyaWVuY2UgaXQuIFdobyBrbm93cz8gSXQgbWF5IGhlbHAgY2hhbmdlIHlvdSBmb3JldmVyIVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIEB0YXA9XCIkbW9kYWwuY2xvc2VcIiB0ZXh0PVwiQ2xvc2VcIiBjbGFzcz1cImJ1dHRvblwiIC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAuYWJvdXQtcGFuZWwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMjtcclxuICAgICAgICBwYWRkaW5nOiAxNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPEJvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgIDxUYWJTdHJpcCBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cIm5hdmlnYXRpb25fX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkhvbWVcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmMuZGVjb2RlPVwiZm9udDovLyYjeGYwMTU7XCIgY2xhc3M9XCJmYXMgdC0zNlwiPjwvSW1hZ2U+XG4gICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XCJuYXZpZ2F0aW9uX19pdGVtXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJTY2hlZHVsZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYy5kZWNvZGU9XCJmb250Oi8vJiN4ZjA3MztcIiBjbGFzcz1cImZhcyB0LTM2XCI+PC9JbWFnZT5cbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cIm5hdmlnYXRpb25fX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlNwb25zb3JzXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjLmRlY29kZT1cImZvbnQ6Ly8mI3hmMmJiO1wiIGNsYXNzPVwiZmFzIHQtMzZcIj48L0ltYWdlPlxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVwibmF2aWdhdGlvbl9faXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiVHJhaWxzXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjLmRlY29kZT1cImZvbnQ6Ly8mI3hmMjc5O1wiIGNsYXNzPVwiZmFzIHQtMzZcIj48L0ltYWdlPlxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVwibmF2aWdhdGlvbl9faXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiRGlyZWN0b3JzXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjLmRlY29kZT1cImZvbnQ6Ly8mI3hmMDA3O1wiIGNsYXNzPVwiZmFzIHQtMzZcIj48L0ltYWdlPlxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgIDwvVGFiU3RyaXA+ICBcbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPiAgXG4gICAgICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgICAgIDwvRnJhbWU+XG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG5cbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgPEZyYW1lPlxuICAgICAgICAgICAgICAgIDxTY2hlZHVsZSAvPiBcbiAgICAgICAgICAgIDwvRnJhbWU+XG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG5cbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgPEZyYW1lPlxuICAgICAgICAgICAgICAgIDxTcG9uc29ycyAvPlxuICAgICAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cblxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICAgICAgPFRyYWlscyAvPlxuICAgICAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cblxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICAgICAgPERpcmVjdG9ycyAvPlxuICAgICAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cblxuICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lLnZ1ZVwiOyAgXG5pbXBvcnQgU2NoZWR1bGUgZnJvbSBcIi4vU2NoZWR1bGUudnVlXCI7XG5pbXBvcnQgU3BvbnNvcnMgZnJvbSBcIi4vU3BvbnNvcnMudnVlXCI7XG5pbXBvcnQgVHJhaWxzIGZyb20gXCIuL1RyYWlscy52dWVcIjtcbmltcG9ydCBEaXJlY3RvcnMgZnJvbSBcIi4vRGlyZWN0b3JzLnZ1ZVwiOyAgXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIEhvbWUsXG4gICAgU2NoZWR1bGUsXG4gICAgU3BvbnNvcnMsXG4gICAgVHJhaWxzLFxuICAgIERpcmVjdG9yc1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICAuZmFzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiLCBcImZhLXNvbGlkLTkwMFwiO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgIH1cblxuICAgIC5mYXIge1xuICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCIsIFwiZmEtcmVndWxhci00MDBcIjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICAudC0zNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzY7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJkaXJlY3Rvci5pbWFnZXNyY1wiIC8+IFxyXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjE0MCwyMCwqXCIgY2xhc3M9XCJkaXJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZGlyZWN0b3IubmFtZVwiIGNvbD1cIjBcIiBjbGFzcz1cImRpckxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiOlwiIGNvbD1cIjFcIiBjbGFzcz1cImRpckl0ZW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImRpcmVjdG9yLnRpdGxlXCIgY29sPVwiMlwiIGNsYXNzPVwiZGlybmFtZVJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCI2MCwyMCwqXCIgY2xhc3M9XCJkaXJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQaG9uZVwiIGNvbD1cIjBcIiBjbGFzcz1cImRpckxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiOlwiIGNvbD1cIjFcIiBjbGFzcz1cImRpckl0ZW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImRpcmVjdG9yLnBob25lMVwiIGNvbD1cIjJcIiBjbGFzcz1cImRpclJpZ2h0XCIgQHRhcD1cImNhbGwoZGlyZWN0b3IucGhvbmUxKVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiNjAsMjAsKlwiIGNsYXNzPVwiZGlySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiRW1haWxcIiBjb2w9XCIwXCIgY2xhc3M9XCJkaXJMZWZ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIjpcIiBjb2w9XCIxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJkaXJlY3Rvci5lbWFpbFwiIGNvbD1cIjJcIiBjbGFzcz1cImRpclJpZ2h0XCIgQHRhcD1cInNlbmQoZGlyZWN0b3IuZW1haWwpXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cImJpby1wYW5lbFwiIDp0ZXh0PVwiZGlyZWN0b3IuYmlvXCJcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIEB0YXA9XCIkbW9kYWwuY2xvc2VcIiB0ZXh0PVwiQ2xvc2VcIiBjbGFzcz1cImJ1dHRvblwiIC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+IFxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT4gIFxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBwaG9uZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBob25lXCI7XHJcbiAgICBpbXBvcnQgZW1haWwgZnJvbSBcIm5hdGl2ZXNjcmlwdC1lbWFpbFwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1wiY29udGV4dFwiXSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBkaXJlY3RvcigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQgfHwge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgICAgIGNhbGwoYXJncykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvdWNoZWQgcGhvbmUgbnVtYmVyIFwiICsgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBwaG9uZS5kaWFsKGFyZ3MsdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzZW5kKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzID0gYXJncztcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlbWFpbCBhZGRyZXNzIGlzIFwiICsgYWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICBlbWFpbC5jb21wb3NlKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogXCJNZXNzYWdlIGZyb20gTW9iaWxlIEFwcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBbYWRkcmVzc10sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkVtYWlsIGNvbXBvc2VyIGNsb3NlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5ob21lLXBhbmVsIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5iaW8tcGFuZWwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAxMDtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpckluZm8ge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZGlyTGVmdCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpcm5hbWVSaWdodCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZGlyUmlnaHQge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJDb2xvcmFkbyBTcHJpbmdzIENocmlzdGlhbiA0LVdoZWVsZXJzXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCIgLz5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJsaXN0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cImhlYWRlci1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiT3VyIERpcmVjdG9ycyBmb3IgVGhpcyBZZWFyXCIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIHRleHQ9XCJBYm91dCBPdXIgRGlyZWN0b3JzXCIgQHRhcD1cIm9uQWJvdXRUYXBcIiAvPlxyXG4gICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiZGlyZWN0b3IgaW4gZGlyZWN0b3JzXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIiBoZWlnaHQ9XCIxMDAlXCIgc2VwYXJhdG9yQ29sb3I9XCJ3aGl0ZVwiIGNsYXNzPVwibGlzdC1wYW5lbFwiID5cclxuICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIxMDAsKlwiICwgcm93cz1cIipcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJkaXJlY3Rvci5pbWFnZXNyY1wiIHJvdz1cIjFcIiBjb2w9XCIwXCIgaGVpZ2h0PVwiNzBcIiB3aWR0aD1cIjcwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZGlyZWN0b3IubmFtZVwiIGNsYXNzPVwiZGlyZWN0b3JcIiB0ZXh0V3JhcD1cInRydWVcIiByb3c9XCIxXCIgY29sPVwiMVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L0xpc3RWaWV3PiAgXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT4gIFxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBEaXJlY3RvckRldGFpbHMgZnJvbSBcIi4vRGlyZWN0b3JEZXRhaWxzXCI7XHJcbiAgICBpbXBvcnQgQWJvdXREaXJlY3RvcnMgZnJvbSBcIi4vQWJvdXREaXJlY3RvcnNcIjtcclxuICAgIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0YTogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0b3JzOiBbXVxyXG4vKlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiS2lyayBCb2RlXCIsIFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiUHJlc2lkZW50XCIsIFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvRGlyZWN0b3JLaXJrU00uanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwia2Vib2RlQGdtYWlsLmNvbVwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZTFcIjogXCIoNzE5KTY1MC02Njg5XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIktpcmsgQm9kZSBiZWdhbiBoaXMgSmVlcGluZyBkYXlzIG5vdCBzbyBsb25nIGFnbyBpbiBOZWJyYXNrYSBvZiBhbGwgcGxhY2VzIGFmdGVyIHB1cmNoYXNpbmcgYSBydXN0ZWQgb3V0LCBqdW5reSBDaGVyb2tlZSBmcm9tIHNvbWVvbmUncyB5YXJkLiBTb29uIGFmdGVyIGhlIHJlYWxpemVkIHRoYXQgaXQgd2FzIGEgcHJldHR5IGNhcGFibGUgb2ZmIHJvYWQgcmlnIGFuZCBiZWdhbiB0aW5rZXJpbmcgYW5kIGltcHJvdmluZyBpdC4gQWZ0ZXIgbW92aW5nIHRvIENvbG9yYWRvIGluIDIwMDgsIGhlIGZvdW5kIG91dCB3aGF0IHJlYWwgb2ZmIHJvYWQgdHJhaWxzIGFyZSBsaWtlLiBUaGUgb2xkIHJ1c3R5IENoZXJva2VlIGhhcyBiZWVuIHJlcGxhY2VkIHdpdGggYSBuZXdlciBvbmUgdG8gdGFrZSB0aGUgYWJ1c2Ugb2YgQ29sb3JhZG8ncyByb2Nrcy4gS2lyayBpcyBhIGxhbmQgc3VydmV5b3IgYW5kIHdvcmtzIGZvciBCYXJyb24gTGFuZCBpbiBDb2xvcmFkbyBTcHJpbmdzLiBIZSBpcyBtYXJyaWVkIHRvIEVyaWthIGFuZCB0aGV5IGhhdmUgMiBjaGlsZHJlbiwgVHlsZXIgYW5kIE1hcmlqa2UuIFRoZXkgYWxsIGxvdmUgdG8gZ2V0IG91dCBpbiBHb2QncyBjcmVhdGlvbiBvZnRlbiBhbmQgdHJ5IHRvIGNhbXAgaW4gbmV3IHBsYWNlcy4gSGUgaG9wZXMgdG8gc2VlIHlvdSBvbiB0aGUgdHJhaWxzIVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7ICAgIFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEYXZlIENobGFkZWtcIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3RvclwiLCBcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL0RpcmVjdG9yRGF2ZVNNLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImRjaGxhZGVrQHEuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig3MTkpNjM0LTYwMDZcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiRGF2ZSBjYW4gZnJlcXVlbnRseSBiZSBzZWVuIGxlYWRpbmcgZ3JvdXBzIGluIE1vYWIgYW5kIHdpbGwgbGVhZCBzZXZlcmFsIG9mIHRoZSBtb3JlIGRpZmZjdWx0IGNsdWIgcnVucyB0aGlzIHllYXIuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2FyZCBXaWxsaWFtc1wiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yXCIsIFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvRGlyZWN0b3JXYXJkU00ucG5nXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwid2FyZHd3aWxsaWFtc0BnbWFpbC5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiKDcxOSkyMTMtNTkxNVwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJZb3Ugd2lsbCBzZWUgV2FyZCBvbiBtYW55IG9mIG91ciB0cmlwcyB3aXRoIGhpcyB2aW50YWdlIFdpbGx5J3MgSmVlcC4gIEhlIGEgc2tpbGxlZCB3aGVlbGVyIGFuZCBhIHZlcnkgZ29vZCBzcG90dGVyLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkppbSBKZW5pc3RhXCIsIFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9EaXJlY3RvckplbmlzdGFTTS5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqamVuaXN0YUBhb2wuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig3MTkpMjAwLTQ3NTdcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiSmltIEplbmlzdGEgYW5kIGhpcyB3aWZlIEthcmVuIGhhdmUgYmVlbiA0LXdoZWVsaW5nIHNpbmNlIDIwMDMgd2hlbiB0aGV5IGJvdWdodCBhIDIwMDIgTGFuZCBSb3ZlciBGcmVlbGFuZGVyIGFuZCBzdGFydGVkIGV4cGxvcmluZyB0aGUgZWFzaWVyIHRyYWlscyBuZWFyIENvbG9yYWRvIFNwcmluZ3MuIEJpdHRlbiBieSB0aGUgb2ZmLXJvYWRpbmcgYnVnIGFuZCByZWFsaXppbmcgdGhleSBuZWVkZWQgbW9yZSB0aGFuIHRoZSBGcmVlbGFuZGVyJ3MgOC4xIGluY2hlcyBvZiBjbGVhcmFuY2UsIHRoZXkgbm93IGVhY2ggZHJpdmUgYW4gb3JhbmdlIDIwMDQgTGFuZCBSb3ZlciBEaXNjb3ZlcnkgSUkgRzQuIEluIGFkZGl0aW9uIHRvIGpvaW5pbmcgYW5kIGV2ZW50dWFsbHkgYmVjb21pbmcgYSBEaXJlY3RvciB3aXRoIENTQzRXLCBKaW0gaXMgb24gdGhlIEV4ZWN1dGl2ZSBDb21taXR0ZWUgb2YgdGhlIFNvbGlodWxsIFNvY2lldHksIHdoaWNoIGlzIHRoZSBMYW5kIFJvdmVyIENsdWIgb2YgQ29sb3JhZG8sIHdoZXJlIGhlIGNvb3JkaW5hdGVkIHRoZSBsYXN0IDUgaXRlcmF0aW9ucyBvZiB0aGUgTGFuZCBSb3ZlciBOYXRpb25hbCBSYWxseS4gIEppbSBpcyBhIGpvaW50IGV4ZXJjaXNlIHBsYW5uZXIgd2l0aCBOT1JBRCBhbmQgVVNOT1JUSENPTSBhdCBQZXRlcnNvbiBBRkIsIGFuZCBLYXJlbiB3b3JrcyBhdCBMaWJyYXJ5IDIxYyB3aXRoIHRoZSBQaWtlcyBQZWFrIExpYnJhcnkgRGlzdHJpY3QuIFRoZXkgaGF2ZSA2IGdyb3duIGNoaWxkcmVuICgzIG9mIHdob20gYXJlIG1hcnJpZWQpIGFuZCA3IGdyYW5kY2hpbGRyZW4uIFRoZXkgbGl2ZSBhdCB0aGUgc291dGhlcm4gZWRnZSBvZiBCbGFjayBGb3Jlc3QgYW5kIGF0dGVuZCBjaHVyY2ggYXQgU2FpbnQgR2FicmllbCB0aGUgQXJjaGFuZ2VsIGluIHRoZSBub3J0aGVhc3QgcGFydCBvZiB0b3duLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkdsZW4gSG9vdmVyXCIsIFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9EaXJlY3RvckdsZW5TTS5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJjb3J1YmkxQHlhaG9vLmNvbVwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZTFcIjogXCIoNzE5KTM3MS03MzU3XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIkkgZ290IGludGVyZXN0ZWQgaW4gb2ZmLXJvYWRpbmcgd2F5IGJhY2sgaW4gdGhlIDcwJ3MhIEFuIGFydGljbGUgaW4gYSBtYWdhemluZSBkZXRhaWxpbmcgQ29sb3JhZG8gdHJhaWxzIGluIHRoZSBTYW4gSnVhbiBNb3VudGFpbnMgdG91Y2hlZCBhbiBhZHZlbnR1cm91cyBjb3JkIGluIG1lLCBhbmQgc2luY2UgSSBhbHJlYWR5IGhhZCBhIENoZXZ5IEJsYXplciwgSSBoZWFkZWQgZm9yIENvbG9yYWRvIHRoZSBuZXh0IHN1bW1lci4gQWZ0ZXIgc2V2ZXJhbCBCbGF6ZXJzIGFuZCBiZWdpbm5pbmcgYSBmYW1pbHksIGFuZCBzb21lIHllYXJzIG5vdCBhYmxlIHRvIGdvIHRvIENvbG9yYWRvIGF0IGFsbCwgSSBib3VnaHQgbXkgZmlyc3QgSmVlcCBpbiB0aGUgbGF0ZSA4MCdzLiBJJ3ZlIHNpbmNlIG93bmVkIGEgWUosIGEgQ2hlcm9rZWUsIDMgVEoncywgYW5kIGEgSksuIEkgc3RpbGwgaGF2ZSAyIFRKJ3MsIGlkZW50aWNhbCByZWQgMjAwMyBSdWJpY29uJ3MuIFdlbGwsIGFsbW9zdCBpZGVudGljYWwgZXhjZXB0IGZvciBtb2RpZmljYXRpb25zIGxpa2UgYSA0LjYgbGl0ZXIgc3Ryb2tlciwgRm9yZCA5IGluY2gsIGFuZCA1LjUgaW5jaCBsaWZ0IG9uIG9uZS4gTGl2aW5nIGluIE5lYnJhc2thIHdhcyBmcnVzdHJhdGluZyB0byBzYXkgdGhlIGxlYXN0ISBVcG9uIHJldGlyZW1lbnQgaW4gMjAxMSwgSSBkaWRuJ3QgaGVzaXRhdGUgdG8gbW92ZSB0byBDb2xvcmFkby4gUHJldmlvdXMgdG8gbW92aW5nIHRvIENvbG9yYWRvLCBJIGZvdW5kIENTQzRXIG9ubGluZSBhbmQgZXZlbiB0YWxrZWQgd2l0aCBEZW5ueSBIYWdlIG5vdCBrbm93aW5nIEknZCBvbmUgZGF5IGJlIGEgQ1NDNFcgZGlyZWN0b3IhIEknbSBoZXJlIGJ5IG15c2VsZiBub3csIGFuZCBiZWluZyByZXRpcmVkLCBJIGhhdmUgdGltZSB0byBwcmUtcnVuIHRyYWlscyBhbmQgdG8gYmUgc3BvbnRhbmVvdXMgYW5kIGFibGUgdG8gZG8gdHJhaWwgcnVucyBhbG1vc3QgYW55dGltZSBzb21lb25lIGZlZWxzIHRoZSB1cmdlIHRvIGdvLiBMaXZpbmcgdGhlIGRyZWFtISBKdXN0IHJlbWVtYmVyIEpFRVAgYWNyb255bSwgSnVzdCBFbXB0eSBFdmVyeSBQb2NrZXQhIExvbFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlBldGUgSm9obnNcIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3RvclwiLCBcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL0RpcmVjdG9yUGV0ZVNNLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInBldGVqYW1pakBNc24uY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIigzMDMpOTA5LTY3MTVcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiUGV0ZSBKb2hucyBncmV3IHVwIGluIHRoZSBtb3VudGFpbnMgb2YgQmFpbGV5IENvbG9yYWRvLiAgVGhlIG5lZWQgb2YgNHg0IHdhcyBhIHdheSBvZiBsaWZlIG5vdCBqdXN0IGEgaG9iYnkuIENhbXBpbmcgYW5kIGZvdXIgd2hlZWxpbmcgYmVjYW1lIGEgZmF2b3JpdGUgcGFzdCB0aW1lIHdpdGggaGlzIHdpZmUsICBKYW1pIGFuZCB0aGVpciB0d28gY2hpbGRyZW4gWmFjIGFuZCBBbHlzc2EuIFRoZSBkZXNpcmUgdG8gam9pbiBhIDR4NCBjbHViIGJyb3VnaHQgdXMgdG8gYmUgYWN0aXZlIHdpdGggQ1NDNFcuIFdlIHNvb24gbWV0IG1hbnkgd29uZGVyZnVsIHBlb3BsZSB3aXRoIHNpbWlsYXIgaW50ZXJlc3RzLiBQZXRlIGhhcyBiZWVuIHdpdGggQ1NDNFcgYXMgYSBtZW1iZXIgc3RhcnRpbmcgaW4gMjAwMiBhbmQgYSBkaXJlY3RvciBhIGZldyB5ZWFycyBhZnRlcndhcmQuIFBldGUgbG92ZXMgc2hhcmluZyBoaXMgbG92ZSBmb3IgdGhlIG91dGRvb3JzIHdpdGggb3RoZXJzIHdoaWxlIGVuam95aW5nIHRoZSBjaGFsbGVuZ2Ugb2YgZm91ciB3aGVlbGluZy5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHbGVubiBIZXNzXCIsIFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9EaXJlY3RvckdsZW5uU00uanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZ2xlbm5oZXNzNjZAZ21haWwuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIjcyMC0yMTktNTM4NFwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJHbGVubiBpcyBub3Qgb25seSBhbiBhdmlkIHdoZWVsZXIgYW5kIGdyZWF0IHRyYWlsIGxlYWRlciwgaGUgYWxzbyBzcGVuZHMgYSBsb3Qgb2YgdGltZSBvbiBoaXMgZGlydCBiaWtlIHRvdXJpbmcgYXJvdW5kIHRoZSBzdGF0ZS5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJKZXJlbXkgUm93YW5cIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3Rvci9GYWNlYm9vayBBZG1pbmlzdHJhdG9yXCIsIFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvRGlyZWN0b3JKZXJlbXlTTS5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqcm93YW4xOTc5QGdtYWlsLmNvbVwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZTFcIjogXCIoNzE5KTIwNS0yNTY1XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIkplcmVteSBjYW4gYmUgc2VlbiBsZWFkaW5nIGdyb3VwcyBhcm91bmQgaW4gTW9hYiwgVXRhaC4gIEhlIGlzIGEgcGFydG5lciBpbiBPdXRsYXcgSmVlcCBBZHZlbnR1cmVzIGFuZCBzcGVuZHMgbW9zdCBvZiBoaXMgdGltZSBpbiBNb2FiLiAgSmVyZW15IGlzIHRoZSBtYW4gdG8gc2VlIGlmIHlvdSB3YW50IHRvIGhhdmUgYSBnb29kIHdoZWVsaW5nIGV4cGVyaWVuY2Ugd2hlbiB5b3UgdmlzaXQgTW9hYiFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEYW4gTWl0Y2hlbGxcIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3Rvci9XZWJtYXN0ZXJcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9EaXJlY3RvckRhblNNLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImNzYzR3QGNzYzR3LmNvbVwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZTFcIjogXCIoNzE5KTIxMC0xNjQ0XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIkRhbiBpcyBhbiBhdmlkIHdoZWVsZXIgYW5kIHlvdSB3aWxsIHNlZSBoaW0gYW5kIGhpcyB3aWZlIE1pY2hlbGxlIG9uIG1hbnkgdHJpcHMgdGhpcyB5ZWFyLiAgXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFzb24gU2VsbGVyc1wiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yXCIsIFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvamFzb24uanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiamFzb25zZWxsZXJzNzNAeWFob28uY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig5NTQpODA1LTM2NjBcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiSmFzb24gaXMgYSBuZXcgZGlyZWN0b3IgdGhpcyB5ZWFyIHNvIG1ha2Ugc3VyZSB0byBpbnRyb2R1Y2UgeW91cnNlbGYgdG8gaGltIGF0IHRoZSBtZWV0aW5nIG9yIG9uIHRoZSB0cmFpbC5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNaWNoZWxsZSBNaXRjaGVsbFwiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yXCIsIFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvbWljaGVsbGUuanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiamVlcGluZzRqb3lAZ21haWwuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig3MTkpMjI5LTE1MzVcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiTWljaGVsbGUgaXMgYSBuZXcgZGlyZWN0b3IgdGhpcyB5ZWFyLiAgU2hlIGlzIHRoZSBmaXJzdCBmZW1hbGUgZGlyZWN0b3IgaW4gdGhlIGNsdWIncyBoaXN0b3J5IHNvIG1ha2Ugc3VyZSB0byBpbnRyb2R1Y2UgeW91cnNlbGYgdG8gaGVyIGF0IHRoZSBtZWV0aW5nIG9yIG9uIHRoZSB0cmFpbC5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJLZWl0aCBCdXRsZXJcIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3RvclwiLCBcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2tlaXRoLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImtlaXRoLmJ1dGxlcjU4QGdtYWlsLmNvbVwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZTFcIjogXCIoODEyKTQ1NS01NDc3XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIktlaXRoIGlzIGEgbmV3IGRpcmVjdG9yIHRoaXMgeWVhciBzbyBtYWtlIHN1cmUgdG8gaW50cm9kdWNlIHlvdXJzZWxmIHRvIGhpbSBhbmQgaGlzIHdpZmUgS2VyaSBhdCB0aGUga2ljay1vZmYgbWVldGluZyBvciBvbiB0aGUgdHJhaWwuXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdIFxyXG4qL1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgICAgIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gYXJncy52aWV3O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IHZpZXcucGFnZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcHBlZEl0ZW0gPSB2aWV3LmJpbmRpbmdDb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpcmVjdG9yIHRhcHBlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChEaXJlY3RvckRldGFpbHMsIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB0YXBwZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkFib3V0VGFwKCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChBYm91dERpcmVjdG9ycyk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBheGlvcyh7IG1ldGhvZDogXCJHRVRcIiwgXCJ1cmxcIjogXCJodHRwOi8vZGF0YS5jc2M0dy5jb20vZGlyZWN0b3JzLmpzb25cIiB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RvcnMgPSByZXN1bHQuZGF0YS5kaXJlY3RvcnM7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzdWx0IGlzIFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEuZGlyZWN0b3JzKSk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIH0gICBcclxuXHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuYWN0aW9uLWJhciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODtcclxuICAgICAgICBwYWRkaW5nOiA4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpcmVjdG9yIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1wYW5lbCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgbWFyZ2luOiAxO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIxOTIxO1xyXG4gICAgICAgIGNvbG9yOiBXaGl0ZTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPFBhZ2UgPlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIkNvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnNcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiB0ZXh0V3JhcD1cInRydWVcIiAvPlxyXG4gICAgPFNjcm9sbFZpZXc+XHJcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhvbWVQYW5lbFwiPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIGhlaWdodD1cIjIwMFwiIHdpZHRoPVwiMjAwXCIgLz5cclxuICAgICAgICA8TGFiZWxcclxuICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICB0ZXh0PVwiVGhpcyBBcHAgd2lsbCBrZWVwIHlvdSB1cGRhdGVkIG9uIHRoZSBhY3Rpdml0aWVzLCBkaXJlY3RvcnMsIHNwb25zb3JzIGFuZCB0cmFpbHMgZm9yIHRoZSBDb2xvcmFkbyBTcHJpbmdzIENocmlzdGlhbiA0LVdoZWVsZXJzIGNsdWJcIlxyXG4gICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TGlzdFZpZXcgZm9yPVwiaXRlbSBpbiBtaXNjXCIgaGVpZ2h0PVwiMTYwXCIgY2xhc3MgPSBcImhvbWVQYW5lbFwiPlxyXG4gICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIml0ZW0ubW90ZFwiIGNsYXNzPVwicmVkLW1lc3NhZ2VcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgICAgIDwvTGlzdFZpZXc+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIHRleHQ9XCJBYm91dCBVc1wiIEB0YXA9XCJvbkFib3V0VXNUYXBcIiAvPlxyXG4gICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9TY3JvbGxWaWV3PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgQWJvdXRVcyBmcm9tIFwifi9jb21wb25lbnRzL0Fib3V0VXNcIjtcclxuICAgIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAgICAgICBkYXRhOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtaXNjOiBbXVxyXG5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjb21wb25lbnRzOiB7IFxyXG4gICAgICAgICAgICBBYm91dFVzIFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgb25BYm91dFVzVGFwKCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChBYm91dFVzKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcInVybFwiOiBcImh0dHA6Ly9kYXRhLmNzYzR3LmNvbS9taXNjLmpzb25cIiB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taXNjID0gcmVzdWx0LmRhdGEubWlzYztcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXN1bHQgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5taXNjKSk7XHJcblxyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoTm9Db25uZWN0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmhvbWVQYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNTtcclxuICBmb250LXNpemU6IDE1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNC1XaGVlbGVyc1wiIGNsYXNzPVwiYWN0aW9uLWJhclwiIC8+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGlzdC1wYW5lbFwiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJoZWFkZXItbGFiZWxcIiB0ZXh0PVwiT3VyIFNjaGVkdWxlXCIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIHRleHQ9XCJBYm91dCBUaGUgU2NoZWR1bGVcIiBAdGFwPVwib25BYm91dFRhcFwiIC8+XHJcbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJldmVudCBpbiBldmVudHNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiIGhlaWdodD1cIjEwMCVcIiBzZXBhcmF0b3JDb2xvcj1cIndoaXRlXCIgY2xhc3M9XCJsaXN0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiYXV0bywqXCIgcm93cz1cIiosKlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cImV2ZW50LmltYWdlU3JjXCIgaGVpZ2h0PVwiMTIwXCIgd2lkdGg9XCIxMjBcIiBjb2w9XCIwXCIgcm93U3Bhbj1cIjJcIiBjbGFzcz1cInBpY1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZXZlbnQuZXZlbnREYXRlXCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJldmVudDFcIiByb3c9XCIwXCIgY29sPVwiMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImV2ZW50Lm5hbWVcIiBjbGFzcz1cImV2ZW50MlwiIHRleHRXcmFwPVwidHJ1ZVwiIHJvdz1cIjFcIiBjb2w9XCIxXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+ICAgXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT4gIFxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBTY2hlZHVsZURldGFpbHMgZnJvbSBcIi4vU2NoZWR1bGVEZXRhaWxzXCI7XHJcbiAgICBpbXBvcnQgQWJvdXRTY2hlZHVsZSBmcm9tIFwiLi9BYm91dFNjaGVkdWxlXCI7XHJcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRhdGE6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50czogW11cclxuLyogICAgICAgICAgICAgICAgXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIk1vdW50IEJhbGR5XCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAxXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVuZSAxM3RoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA2LzEzLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOFwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlN0LiBQYXVscyBDYXRob2xpYyBDaHVyY2gsIDkgRWwgUG9tYXIgUmQsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkwNlwiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiODowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkppbSwgRGFuLCBNaWNoZWxsZVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIwMC00NzU3XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkRhblwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpMjEwLTE2NDRcIixcclxuICAgICAgXCJsZWFkZXIzXCI6IFwiTWljaGVsbGVcIixcclxuICAgICAgXCJsZWFkZXIzUGhvbmVcIjogXCIoNzE5KTIyOS0xNTM1XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiTW9kZXJhdGVcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL210YmFsZHkuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIldlIHdpbGwgdGFrZSB0aGUgdHJhaWwgZnJvbSBPbGQgU3RhZ2Ugcm9hZCBhbmQgbG9vcCBhcm91bmQgdGhlIGJhY2sgc2lkZSBvZiBQaWtlcyBQZWFrLiAgSWYgdGhlIHRyYWlsIGlzIHBhc3NhYmxlIHdlIHdpbGwgZHJpdmUgdG8gdGhlIHRvcCBvZiBNb3VudCBCYWxkeVwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM4Ljc5MTQxNFwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA0Ljg1NTAxMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJFYWdsZSBSb2NrXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVuZSAxM3RoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA2LzEzLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOFwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlN0LiBQYXVscyBDYXRob2xpYyBDaHVyY2gsIDkgRWwgUG9tYXIgUmQsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkwNlwiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiODowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIldhcmQsIEdsZW5cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiV2FyZFwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjEzLTU5MTJcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiR2xlblwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpMzcxLTczNTdcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJEaWZmaWN1bHRcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL2VhZ2xlcm9jay5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiRWFnbGUgUm9jayBpcyBhIHZlcnkgZGlmZmljdWx0IGFuZCBjaGFsbGVuZ2luZyB0cmFpbC4gIEV4cGVyaWVuY2VkIHdoZWVsZXJzIHdpdGggbW9kaWZpZWQgcmlncyB3aXRoIGxhcmdlciB0aXJlcyBhbmQgYXQgbGVhc3Qgb25lIGxvY2tlciBhcmUgcmVjb21tZW5kZWQuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzguNzkxNDE0XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDQuODU1MDEwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkNoaW5hIFdhbGxcIixcclxuICAgICAgXCJncm91cFwiOiBcImdyb3VwIDFcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdW5lIDIwdGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDYvMjAvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI4XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiU2FmZXdheSwgMzI3NSBXIENvbG9yYWRvIEF2ZSwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTA0XCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI4OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiSmltIGFuZCBNaWNoZWxsZVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIwMC00NzU3XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIk1pY2hlbGxlXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSkyMjktMTUzNVwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkludGVybWVkaWF0ZVwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvY2hpbmF3YWxsLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJDaGluYSBXYWxsIGlzIGEgdmVyeSBzY2VuaWMgaW50ZXJtZWRpYXRlIHJ1bi4gIERpZmZpY3VsdCBvYnN0YWNsZXMgbWF5IGJlIGJ5cGFzc2VkLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM4Ljg1NDcwMlwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA0Ljg3NjE0MFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJDaGluYW1hbiBHdWxjaFwiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiZ3JvdXAgMlwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkp1bmUgMjB0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwNi8yMC8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCIzOC43OTIxODYsIC0xMDYuMDg1MjAyXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiR2xlbiBhbmQgRGFuXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkdsZW5cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTM3MS03MzU3XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkRhblwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpMjEwLTE2NDRcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJEaWZmaWN1bHRcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL2NoaW5hbWFuLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJDaGluYW1hbiBHdWxjaCBpcyBhIGNoYWxsZW5naW5nIHJ1biBhbmQgc2hvdWxkIG5vdCBiZSBhdHRlbXB0ZWQgd2l0aG91dCBtb2RpZmllZCB2ZWhpY2xlcy5cIixcclxuICAgICAgXCJsYXRcIjogXCIzOS43OTIxODZcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNi4wODUyMDJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiTWVkYW5vIFBhc3MgQ2FtcGluZ1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXAgQWxsXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVseSAxMHRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA3LzEwLzIwMjBcIixcclxuICAgICAgXCJkdXJhdGlvblwiOiA4LFxyXG4gICAgICBcInN0YXJ0VGltZUZsZFwiOiBcIjE3XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiMzcuODU2MDI3LCAtMTA1LjQzMjcyMVwiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiQWZ0ZXJub29uL0V2ZW5pbmdcIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiR2xlbiBhbmQgS2lya1wiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJHbGVuXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkzNzEtNzM1N1wiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJLaXJrXCIsXHJcbiAgICAgIFwibGVhZGVyUGhvbmVcIjogXCIoNzE5KTY1MC02Njg5XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRnVuXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9NZWRhbm8tUGFzcy1DYW1waW5nLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJXZSB3aWxsIGJlIGNhbXBpbmcgRnJpZGF5IG5pZ2h0IG5lYXIgdGhlIE1lZGFubyBwYXNzIHRyYWlsaGVhZC4gIENvbnRhY3QgdGhlIGRpcmVjdG9ycyBmb3IgdGhpcyB0cmlwIGZvciBtb3JlIGRldGFpbHMuICBUaGUgbWVldGluZyBwbGFjZSBzaG93cyB0aGUgc3RhcnQgb2YgdGhlIHJvYWQgYW5kIGNhbXBpbmcgd2lsbCBiZSBzb21ld2hlcmUgaW4gdGhpcyBhcmVhLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM3Ljg1NjAyN1wiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA1LjQzMjcyMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJNZWRhbm8gUGFzcyBXaGVlbGluZ1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXAgMVwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkp1bHkgMTF0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwNy8xMS8yMDIwXCIsXHJcblx0ICAgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgICAgXCJzdGFydFRpbWVGbGRcIjogXCI5XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiMzcuODU2MDI3LCAtMTA1LjQzMjcyMVwiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiOTowMEFNXCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRWFzeSB0byBJbnRlcm1lZGlhdGVcIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiR2xlbiBhbmQgS2lya1wiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJHbGVuXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkzNzEtNzM1N1wiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJLaXJrXCIsXHJcbiAgICAgIFwibGVhZGVyUGhvbmVcIjogXCIoNzE5KTY1MC02Njg5XCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9tZWRhbm9QYXNzLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJXZSB3aWxsIGxlYXZlIHRoZSBjYW1waW5nIGFyZWEgYXQgOTowMCBhbmQgaGVhZCBvdmVyIE1lZGFubyBQYXNzIHRvIHRoZSBzYW5kIGR1bmVzLiAgVGhpcyB0cmFpbCB0cmF2ZWxzIGFsb25nIE1lZGFubyBDcmVlayB3aXRoIG1hbnkgd2F0ZXIgY3Jvc3NpbmdzIGFuZCBkZWVwIHNhbmQgbmVhciB0aGUgZW5kIGF0IHRoZSBHcmVhdCBTYW5kIER1bmVzLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM3LjUyMTg1NVwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA1LjYwMTk3MVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJCbGFuY2EgUGVhayBDYW1waW5nXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVseSAxMHRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA3LzEwLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiMTdcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJMYWtlIENvbW8gUm9hZCwgTW9zY2EsIENPXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCJBZnRlcm5vb24vRXZlbmluZ1wiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJQZXRlIGFuZCBEYXZlXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIlBldGVcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoMzAzKTkwOS02NzE1XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkRhdmVcIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTYzNC02MDA2XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRnVuXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9NZWRhbm8tUGFzcy1DYW1waW5nLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJXZSB3aWxsIGJlIGNhbXBpbmcgRnJpZGF5IG5pZ2h0IG9uIHJvYWQgdG8gQmxhbmNhIFBlYWsgVHJhaWwuICBDb250YWN0IHRoZSBkaXJlY3RvcnMgZm9yIHRoaXMgdHJpcCBmb3IgbW9yZSBkZXRhaWxzLiAgVGhlIG1lZXRpbmcgcGxhY2Ugc2hvd3MgdGhlIHN0YXJ0IG9mIHRoZSByb2FkIGFuZCBjYW1waW5nIHdpbGwgYmUgc29tZXdoZXJlIGZhcnRoZXIgdXAgdGhpcyByb2FkLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM3LjUyMTg1NVwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA1LjYwMTk3MVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJCbGFuY2EgUGVhayBXaGVlbGluZ1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXAgMlwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkp1bHkgMTF0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwNy8xMS8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCIzNy41MjE4NSwgLTEwNS42MDE5M1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiOTowMEFNXCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiVmVyeSBEaWZmaWN1bHRcIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiUGV0ZSBhbmQgRGF2ZVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJQZXRlXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDMwMyk5MDktNjcxNVwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJEYXZlXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSk2MzQtNjAwNlwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvYmxhbmNhLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJXZSB3aWxsIGxlYXZlIHRoZSBjYW1waW5nIGFyZWEgYXQgOTowMCBhbmQgaGVhZCB0byB0aGUgdG9wIG9mIEJsYW5jYSBQZWFrLiAgVGhpcyB0cmFpbCBpcyB2ZXJ5IGRpZmZpY3VsdCBzbyB5b3Ugd2lsbCBuZWVkIGEgbGlmdGVkIHJpZyB3aXRoIGxhcmdlciB0aXJlcyBhbmQgbG9ja2Vycy5cIixcclxuICAgICAgXCJsYXRcIjogXCIzNy41MjE4NTVcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNS42MDE5NzFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiU2FpbnQgRWxtbyBDYW1waW5nXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJBbGwgZ3JvdXBzIFwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkp1bHkgMjR0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwNy8yNC8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjE3XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiU2FpbnQgRWxtbyBDb2xvcmFkb1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiQWZ0ZXJub29uL0V2ZW5pbmdcIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiV2FyZCBhbmQgSmFzb25cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiV2FyZFwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjEzLTU5MTVcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiSmFzb25cIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoOTU0KTgwNS0zNjYwXCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRnVuXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9zdGVsbW8uanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIldlIHdpbGwgYmUgY2FtcGluZyBGcmlkYXkgbmlnaHQgbmVhciB0aGUgdG93biBvZiBTdC4gRWxtby4gIENvbnRhY3QgdGhlIGRpcmVjdG9ycyBmb3IgdGhpcyB0cmlwIGZvciBtb3JlIGRldGFpbHMuICBUaGUgbWVldGluZyBwbGFjZSBzaG93cyB0aGUgc3RhcnQgb2YgdGhlIHJvYWQgYW5kIGNhbXBpbmcgd2lsbCBiZSBzb21ld2hlcmUgaW4gdGhpcyBhcmVhLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM4LjcwNDEwMVwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA2LjM0NTAxOFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJTYWludCBFbG1vIFdoZWVsaW5nXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJBbGwgZ3JvdXBzIFwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkp1bHkgMjV0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwNy8yNS8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTYWludCBFbG1vIENvbG9yYWRvXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU0gaW4gU2FpbnQgRWxtb1wiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJXYXJkIGFuZCBKYXNvblwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJXYXJkXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMTMtNTkxNVwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJKYXNvblwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig5NTQpODA1LTM2NjBcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJHcm91cCAxIGFuZCAyIHRyYWlscyBkZXBlbmRpbmcgb24gd2hvIGlzIHRoZXJlXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy90aW5jdXAuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIlRoZXJlIGFyZSBtYW55IHRyYWlscyBpbiB0aGUgU3QuIEVsbW8gYXJlYSBhbmQgd2Ugd2lsbCBkZWNpZGUgdGhhdCBtb3JuaW5nIHdoaWNoIHRyYWlscyB3aWxsIGJlIHJ1biBkZXBlbmRpbmcgb24gdGhlIGZvbGtzIHRoYXQgc2hvdyB1cC5cIixcclxuICAgICAgXCJsYXRcIjogXCIzOC43MDQxMDFcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNi4zNDUwMThcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiTW9zcXVpdG8gUGFzc1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiZ3JvdXAgMVwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkF1Z3VzdCA4dGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDgvMDgvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI5XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiU291dGhwYXJrIE1hcmtldCwgRmFpcnBsYXkgQ29sb3JhZG9cIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiSmltXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMDAtNDc1N1wiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkVhc3kgdG8gSW50ZXJtZWRpYXRlXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9tb3NxdWl0by5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiVGhpcyB0cmlwIGlzIGZhaXJseSBlYXN5IGFuZCBWRVJZIHNjZW5pYy4gIFdlIHdpbGwgZ28gb3ZlciBNb3NxdWl0byBwYXNzIGFuZCByZXR1cm4gb24gV2VzdG9uIHBhc3MuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzkuMjE2NzI3XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDUuOTkzNjY1XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIldoZWVsZXIgTGFrZVwiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiZ3JvdXAgMlwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkF1Z3VzdCA4dGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDgvMDgvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI5XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiU291dGhwYXJrIE1hcmtldCwgRmFpcnBsYXkgQ29sb3JhZG9cIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJKZXJlbXkgYW5kIE1pY2hlbGxlXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkplcmVteVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjA1LTI1NjVcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiSmFzb25cIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTIyOS0xNTM1XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRGlmZmljdWx0XCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy93aGVlbGVyLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJUaGlzIHRyaXAgaXMgZGlmZmljdWx0IGFuZCB3aWxsIHJlcXVpcmUgbGlmdGVkIHJpZ3Mgd2l0aCBsYXJnZXIgdGlyZXMgYW5kIGF0IGxlYXN0IGEgcmVhciBsb2NrZXJcIixcclxuICAgICAgXCJsYXRcIjogXCIzOS4yMTY3MjdcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNS45OTM2NjVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiU2xpZGUgTGFrZVwiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXAgMVwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkF1ZyAyMm5kLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA4LzIyLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlNsaWRlIExha2UgVHJhaWxoZWFkXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiS2VpdGggYW5kIEdsZW5uXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIktlaXRoXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDgxMik0NTUtNTQ3N1wiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJHbGVublwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIjcyMC0yMTktNTM4NFwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkVhc3lcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL3NsaWRlLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJTbGlkZSBMYWtlIGlzIGEgYmVhdXRpZnVsIGFuZCBlYXN5IGRyaXZlLiAgVGhlcmUgbWF5IGJlIGNhbXBpbmcgdGhlIG5pZ2h0IGJlZm9yZSB0aGlzIHRyaXAgc28gY29udGFjdCB0aGUgdHJpcCBsZWFkZXJzIGlmIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiB0aGlzXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzkuMzY5MjU5XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDYuMzg1MzkzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkhvbHkgQ3Jvc3NcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJBdWcgMjJuZCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwOC8yMi8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCIzOS40MDMxNjEsIC0xMDYuNDQzNTUzXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiUGV0ZSBhbmQgRGF2ZVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJQZXRlXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiNzIwLTIxOS01Mzg0XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkRhdmVcIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTIwNS0yNTY1XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRGlmZmljdWx0XCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9ob2x5Y3Jvc3MuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIkhvbHkgQ3Jvc3MgaXMgb25lIG9mIHRoZSBoYXJkZXN0IHRyYWlscyBpbiBDb2xvcmFkby4gIFlvdSB3aWxsIG5lZWQgYSBoZWF2aWx5IG1vZGlmaWVkIHZlaGljbGUgZm9yIHRoaXMgdHJhaWwuICBUaGVyZSBtYXkgYmUgY2FtcGluZyB0aGUgbmlnaHQgYmVmb3JlIHRoaXMgdHJpcCBzbyBjb250YWN0IHRoZSB0cmlwIGxlYWRlcnMgaWYgeW91IGFyZSBpbnRlcmVzdGVkIGluIHRoaXNcIixcclxuICAgICAgXCJsYXRcIjogXCIzOS40MDMxNjFcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNi40NDM1NTNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiUmltcm9ja2VyIFRyYWlsXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiU2VwdCAybmQtU2VwdCA0dGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDkvMDIvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI4XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCJcIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiS2lyayBhbmQgSmVyZW15XCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIktpcmtcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTY1MC02Njg5XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkplcmVteVwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpMjA1LTI1NjVcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJNb2RlcmF0ZVwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvcmltcm9ja2VyLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJUaGlzIGlzIGFuIG92ZXJsYW5kIHRyaXAgd2hlcmUgd2Ugd2lsbCB3aGVlbCBhbmQgY2FtcCBhbG9uZyB0aGUgdHJhaWwuICBDb250YWN0IEtpcmsgb3IgSmVyZW15IGlmIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiB0aGlzIHRyaXAgYW5kIGZvciBkZXRhaWxzLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIlwiLFxyXG4gICAgICBcImxvbmdcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiTGFib3IgRGF5IFdoZWVsaW5nIGluIE1vYWIsIFVUXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAxIGFuZCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiU2VwdCA1dGggLSBTZXB0IDd0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwOS8wNS8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJPdXRsYXcgSmVlcCBBZHZlbnR1cmVzIE1vYWIsVXRhaFwiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiOTowMEFNIG9uIFNlcHQuIDV0aFwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJLaXJrIGFuZCBKZXJlbXlcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiS2lya1wiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpNjUwLTY2ODlcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiSmVyZW15XCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSkyMDUtMjU2NVwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkFsbCB0eXBlcyBvZiB0cmFpbHNcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL2hlbGxzcmV2ZW5nZS5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiTWVldCBlYWNoIGRheSBhdCBPdXRsYXcgSmVlcCBBZHZlbnR1cmVzIHBhcmtpbmcgbG90IGZvciB2YXJpb3VzIHRyYWlscyBhcm91bmQgTW9hYi4gIE1ha2UgeW91ciBvd24gYWNjb21vZGF0aW9ucyBlaXRoZXIgY2FtcGluZyBvciBhdCBhIGhvdGVsLiAgQ29udGFjdCBLaXJrIG9yIEplcmVteSBpZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJBbHBpbmUgTG9vcCBpbiBPdXJheVwiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiQWxsIEdyb3Vwc1wiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIlNlcHQgNXRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA5LzA1LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOFwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIjEyMjAgTWFpbiBTdC4sIE91cmF5LCBDTywgODE0MjdcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjg6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJEYW5cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiRGFuXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMTAtMTY0NFwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkludGVybWVkaWF0ZVwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvYWxwaW5lbG9vcC5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiVGhlIEFscGluZSBMb29wIGlzIGFuIGludGVybWVkaWF0ZSB0cmlwIHdpdGggYSBmZXcgZGlmZmljdWx0IHNwb3RzLiAgRGVwZW5kaW5nIG9uIHRyYWlsIGNvbmRpdGlvbnMgYW5kIHRoZSByaWdzIHRoYXQgYXJlIHRoZXJlLCBpdCBtYXkgaW5jbHVkZSBFbmdpbmVlciBQYXNzLCBDaW5hbW1vbiBwYXNzLCBQb3VnaGtlZXBzaWUgR3VsY2ggYW5kIG90aGVycy5cIixcclxuICAgICAgXCJsYXRcIjogXCIzOC4wMjkxNTFcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNy42NzMzMDhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiQmxhY2tiZWFyIGFuZCBJbW9nZW5lIFBhc3Nlc1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXAgMlwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIlNlcHQgNnRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA5LzA2LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOFwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIjEyMjAgTWFpbiBTdC4sIE91cmF5LCBDTywgODE0MjdcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjg6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJEYW5cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiRGFuXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMTAtMTY0NFwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkRpZmZpY3VsdFwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvYmxhY2tiZWFyLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJCbGFja2JlYXIgUGFzcyBpcyBvbmUgb2YgdGhlIG1vc3QgZmFtb3VzIHRyYWlscyBpbiBDb2xvcmFkby4gIEl0IGlzIGRpZmZpY3VsdCBhbmQgdGhlIHRyYWlsIGlzIHZlcnkgbmFycm93LlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM3Ljg5NjcwNFwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA3LjcxMzUyMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJUcmFpbCBDbGVhbnVwIERheSAjMlwiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiQWxsIEdyb3Vwc1wiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIlNlcHQgMTl0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwOS8xOS8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTYWludCBQYXVscyBDYXRob2xpYyBDaHVyY2ggQ29sb3JhZG8gU3ByaW5nc1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiOTowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIwMC00NzU3XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRnVuL0hhcmQgV29ya1wiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvdHJhaWxjbGVhbnVwLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJDU0M0VyBoYXMgYWRvcHRlZCB0aGUgTXQuIEJhbGR5IHRyYWlsIHN5c3RlbSBhbmQgd2Ugc3BlbmQgMiBkYXlzIGEgeWVhciBoZWxwaW5nIHRoZSBVUyBGb3Jlc3QgU2VydmljZSB3aXRoIHRyYWlsIGNsZWFuLXVwIGFuZCByZXBhaXIuICBUaGlzIGlzIGFuIGltcG9ydGFudCBldmVudCBmb3Igb3VyIGNsdWIgYW5kIGFsbCBtZW1iZXJzIGFyZSBlbmNvdXJhZ2VkIHRvIGNvbWUgYW5kIGhlbHAuICBCcmluZyB5b3VyIG93biBsdW5jaCBhbmQgaWYgdGltZSBwZXJtaXRzLCB3ZSB3aWxsIGRvIGEgbGl0dGxlIHdoZWVsaW5nIGFzIHdlbGwuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzguNzkwNjM3XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDQuODU1MDE1XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIlBpY2tldCBXaXJlIENhbnlvbmxhbmRzXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJBbGwgR3JvdXBzXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiT2N0IDNyZCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIxMC8wMy8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjhcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIlwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiSmltXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMDAtNDc1N1wiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkZ1blwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvcGlja2V0d2lyZS5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiVGhpcyB3aWxsIGJlIGEgY2x1YiB0cmlwIGRvd24gdG8gUGlja2V0IFdpcmUgQ2FueW9ubGFuZHMgaW4gc291dGhlYXN0ZXJuIENvbG9yYWRvLiAgVGhpcyB3aWxsIG5vdCBiZSBhIHdoZWVsaW5nIHRyaXAgYnV0IHdpbGwgYmUgYSBndWlkZWQgdG91ciBvZiB0aGUgcGFyayB0byB2aWV3IGludGVyZXN0aW5nIGFydGlmYWN0cyBhbmQgZGlub3NhdXIgdHJhY2tzLiAgQ29udGFjdCBKaW0gaWYgeW91IHdvdWxkIGxpa2UgbW9yZSBpbmZvcm1hdGlvbi5cIixcclxuICAgICAgXCJsYXRcIjogXCJcIixcclxuICAgICAgXCJsb25nXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkNocmlzdG1hcyBmb3IgS2lkc1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiQWxsIEdyb3Vwc1wiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIk5vdmVtYmVyIC0gRGVjZW1iZXJcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMTIvMjUvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI4XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCJcIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiSmltXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjAwLTQ3NTdcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJGdW5cIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL2NocmlzdG1hczRraWRzLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJDaHJpc3RtYXMgZm9yIEtpZHMgaXMgYW4gZXZlbnQgd2Ugc3BvbnNvciBhbmQgc3VwcG9ydCBldmVyeSB5ZWFyLiAgWW91IGNhbiBwaWNrIHRoZSBuYW1lIG9mIGEgbmVlZHkgY2hpbGQgKHByb3ZpZGVkIGxpc3QpIGFuZCBwdXJjaGFzZSBhIGdpZnQgZm9yIHRoZW0uICBDb250YWN0IEppbSBvciBzZWUgdGhlIHdlYiBzaXRlIGFzIHdlIGdldCBjbG9zZXIgdG8gdGhpcyBldmVudCBpZiB5b3Ugd291bGQgbGlrZSBtb3JlIGluZm9ybWF0aW9uLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIlwiLFxyXG4gICAgICBcImxvbmdcIjogXCJcIlxyXG5cclxufVxyXG5cclxuICAgICAgICAgICAgICAgIF1cclxuKi9cclxuICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBhcmdzLnZpZXc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlID0gdmlldy5wYWdlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFwcGVkSXRlbSA9IHZpZXcuYmluZGluZ0NvbnRleHQ7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZXZlbnQgdGFwcGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKFNjaGVkdWxlRGV0YWlscywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRhcHBlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvbkFib3V0VGFwKCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChBYm91dFNjaGVkdWxlKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBheGlvcyh7IG1ldGhvZDogXCJHRVRcIiwgXCJ1cmxcIjogXCJodHRwOi8vZGF0YS5jc2M0dy5jb20vZXZlbnRzLmpzb25cIiB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMgPSByZXN1bHQuZGF0YS5ldmVudHM7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzdWx0IGlzIFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEuZXZlbnRzKSk7XHJcblxyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcblxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuICAgIC5waWMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7IFxyXG4gICAgICAgIG1hcmdpbjogMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmV2ZW50IHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlOyBcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjtcclxuICAgIH1cclxuXHJcbiAgICAuZXZlbnQxIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlOyBcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjtcclxuICAgIH1cclxuXHJcbiAgICAuZXZlbnQyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlOyBcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjtcclxuICAgIH1cclxuXHJcbiAgICAuZXZlbnREYXRlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1O1xyXG4gICAgfVxyXG5cclxuLmV2ZW50LXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDM7XHJcblxyXG59XHJcblxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJob21lLXBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwiZXZlbnQuaW1hZ2VTcmNcIiAvPiBcclxuICAgICAgICAgICAgPEJ1dHRvbiBAdGFwPVwiYWRkVG9DYWxlbmRhcihldmVudClcIiB0ZXh0PVwiQWRkIHRvIE15IENhbGVuZGFyXCIgY2xhc3M9XCJidXR0b25cIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5uYW1lXCIgY2xhc3M9XCJpbmZvLXBhbmVsXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZXZlbnQuZ3JvdXBcIiBjbGFzcz1cImluZm8tcGFuZWxcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5ldmVudERhdGVcIiB0ZXh0d3JhcD1cInRydWVcIiBjbGFzcz1cImluZm8tcGFuZWxcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiOTAsICpcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiTWVldCBhdDogXCIgY29sPVwiMFwiIGNsYXNzPVwic3BvbkxlZnRcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZXZlbnQubWVldEF0XCIgY29sPVwiMVwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwic3BvblJpZ2h0XCIgQHRhcD1cInRhcEFkZHIoZXZlbnQubWVldEF0KVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjkwLCAqXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIk1lZXQgdGltZTogXCIgY29sPVwiMFwiIGNsYXNzPVwic3BvbkxlZnRcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZXZlbnQubWVldFRpbWVcIiBjb2w9XCIxXCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJzcG9ubmFtZVJpZ2h0XCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiOTAsICpcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUmF0aW5nOiBcIiBjb2w9XCIwXCIgY2xhc3M9XCJzcG9uTGVmdFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5yYXRpbmdcIiBjb2w9XCIxXCIgdGV4dHdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJzcG9ubmFtZVJpZ2h0XCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiOTAsICpcIiA+XHJcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiTGVhZGVyczogXCIgY29sPVwiMFwiIGNsYXNzPVwic3BvbkxlZnRcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XCIxXCIgY29sdW1ucz1cIiosKiwqXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5sZWFkZXIxXCIgY29sPVwiMFwiIGNsYXNzPVwic3BvblJpZ2h0XCIgQHRhcD1cImNhbGwoZXZlbnQubGVhZGVyMVBob25lKVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5sZWFkZXIyXCIgY29sPVwiMVwiIGNsYXNzPVwic3BvblJpZ2h0XCIgQHRhcD1cImNhbGwoZXZlbnQubGVhZGVyMlBob25lKVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5sZWFkZXIzXCIgY29sPVwiMlwiIGNsYXNzPVwic3BvblJpZ2h0XCIgQHRhcD1cImNhbGwoZXZlbnQubGVhZGVyM1Bob25lKVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5kZXNjXCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJtb3RkLWxhYmVsXCIgaGVpZ2h0PVwiMTAwJVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxCdXR0b24gQHRhcD1cIiRtb2RhbC5jbG9zZVwiIHRleHQ9XCJDbG9zZVwiIGNsYXNzPVwiYnV0dG9uXCIgLz5cclxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+IFxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT4gIFxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBwaG9uZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBob25lXCI7XHJcbiAgICBpbXBvcnQgZW1haWwgZnJvbSBcIm5hdGl2ZXNjcmlwdC1lbWFpbFwiO1xyXG4gICAgdmFyIENhbGVuZGFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYWxlbmRhclwiKTtcclxuICAgIHZhciBMb2NhdGVBZGRyZXNzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhdGUtYWRkcmVzc1wiKS5Mb2NhdGVBZGRyZXNzO1xyXG4gICAgY29uc3QgdXRpbHNNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFtcImNvbnRleHRcIl0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgZXZlbnQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0IHx8IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgICAgICBuYXZUbyhhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidG91Y2hlZCBuYXZUbyBcIiArIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgdXRpbHNNb2R1bGUub3BlblVybChhcmdzKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB0YXBBZGRyKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0b3VjaGVkIHRhcEFkZHJcIiArIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0b3IgPSBuZXcgTG9jYXRlQWRkcmVzcygpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRvci5sb2NhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTWFwcyBhcHAgbGF1bmNoZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGNhbGwoYXJncykgeyBcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0b3VjaGVkIHBob25lIG51bWJlciBcIiArIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgcGhvbmUuZGlhbChhcmdzLHRydWUpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2VuZChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkcmVzcyA9IGFyZ3M7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZW1haWwgYWRkcmVzcyBpcyBcIiArIGFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgZW1haWwuY29tcG9zZSgge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IFwiTWVzc2FnZSBmcm9tIE1vYmlsZSBBcHBcIixcclxuICAgICAgICAgICAgICAgICAgICB0bzogW2FkZHJlc3NdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJFbWFpbCBjb21wb3NlciBjbG9zZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBhZGRUb0NhbGVuZGFyKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJBcmdzIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkoYXJncykpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHlyID0gTnVtYmVyKGFyZ3MuZGF0ZUZsZC5zdWJzdHJpbmcoNiwxMCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGR5ID0gTnVtYmVyKGFyZ3MuZGF0ZUZsZC5zdWJzdHJpbmcoMyw1KSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXRoID0gTnVtYmVyKGFyZ3MuZGF0ZUZsZC5zdWJzdHJpbmcoMCwyKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhyID0gTnVtYmVyKGFyZ3Muc3RhcnRUaW1lRmxkKTtcclxuICAgICAgICAgICAgICAgIHZhciBkdXIgPSBOdW1iZXIoYXJncy5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3REdCA9IG5ldyBEYXRlKHlyLCBtdGgsIGR5LCBocik7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kVG1lID0gaHIgKyBhcmdzLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZER0ID0gbmV3IERhdGUoeXIsbXRoLGR5LGVuZFRtZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnREdCA9IG5ldyBEYXRlKHlyKVxyXG4gICAgICAgICAgICAgICAgdmFyIGR1ciA9IGFyZ3MuZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICB2YXIgZXZ0TmFtZSA9IFwiQ1NDNFcgLSBcIiArIGFyZ3MubmFtZTtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBldnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3REdCxcclxuICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiBlbmREdCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogYXJncy5tZWV0QXRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnJlbWluZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdDogNjBcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk9wdGlvbnM6XCIgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zKSk7XHJcbiAgICAgICAgICAgICAgICBjb25maXJtKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDcmVhdGUgRXZlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNyZWF0ZSBFdmVudCBpbiB5b3VyIGNhbGVuZGFyP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZRVNcIixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5PXCJcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdD09dHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYWxlbmRhci5jcmVhdGVFdmVudChvcHRpb25zKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oY3JlYXRlZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNyZWF0ZWQgRXZlbnQgd2l0aCBJRDogXCIgKyBjcmVhdGVkSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY3JlYXRpbmcgYW4gRXZlbnQ6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmhvbWUtcGFuZWwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDM1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZHItcGFuZWwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjLXBhbmVsIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDIwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJpby1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDEwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc3Bvbkl0ZW0ge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc3BvbkxlZnQge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcG9ubmFtZVJpZ2h0IHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcG9uUmlnaHQge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwb25SaWdodE5vVUwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vdGQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNTtcclxuICAgIG1hcmdpbi10b3A6IDU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU7XHJcbiAgICBwYWRkaW5nOiA1O1xyXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiMTkyMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJzcG9uUGFuZWxcIj5cclxuICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJzcG9uc29yLmltYWdlc3JjXCIgLz4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic3BvbnNvci5hZGRyZXNzXCIgdGV4dFdyYXA9XCJ0cnVlXCIgQHRhcD1cInRhcEFkZHIoc3BvbnNvci5hZGRyZXNzKVwiIGNsYXNzPVwiYWRkci1wYW5lbFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIxMDAsICpcIiA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIiAgIENvbnRhY3Q6IFwiIGNvbD1cIjBcIiBjbGFzcz1cImxlZnRDb2xcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic3BvbnNvci5jb250YWN0XCIgY29sPVwiMVwiIHRleHR3cmFwPVwidHJ1ZVwiIGNsYXNzPVwicmlnaHRDb2xOb1VMXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PiAgXHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIxMDAsICpcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUGhvbmU6IFwiIGNvbD1cIjBcIiBjbGFzcz1cImxlZnRDb2xcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic3BvbnNvci5waG9uZVwiIGNvbD1cIjFcIiB0ZXh0d3JhcD1cInRydWVcIiBjbGFzcz1cInJpZ2h0Q29sXCIgQHRhcD1cImNhbGwoc3BvbnNvci5waG9uZSlcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIxMDAsICpcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiRU1haWw6IFwiIGNvbD1cIjBcIiBjbGFzcz1cImxlZnRDb2xcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic3BvbnNvci5lbWFpbFwiIGNvbD1cIjFcIiB0ZXh0d3JhcD1cInRydWVcIiBjbGFzcz1cInJpZ2h0Q29sXCIgQHRhcD1cInNlbmQoc3BvbnNvci5lbWFpbClcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIxMDAsICpcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiV2ViU2l0ZTogXCIgY29sPVwiMFwiIGNsYXNzPVwibGVmdENvbFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzcG9uc29yLnVybFwiIGNvbD1cIjFcIiB0ZXh0d3JhcD1cInRydWVcIiBjbGFzcz1cInJpZ2h0Q29sXCIgQHRhcD1cIm5hdlRvKHNwb25zb3IudXJsKVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic3BvbnNvci5iaW9cIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInJlZC1tZXNzYWdlXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBAdGFwPVwiJG1vZGFsLmNsb3NlXCIgdGV4dD1cIkNsb3NlXCIgY2xhc3M9XCJidXR0b25cIiAvPlxyXG4gICAgICAgICAgPC9TdGFja0xheW91dD4gXHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPiAgXHJcblxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgcGhvbmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1waG9uZVwiO1xyXG4gICAgaW1wb3J0IGVtYWlsIGZyb20gXCJuYXRpdmVzY3JpcHQtZW1haWxcIjtcclxuICAgIHZhciBMb2NhdGVBZGRyZXNzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhdGUtYWRkcmVzc1wiKS5Mb2NhdGVBZGRyZXNzO1xyXG4gICAgY29uc3QgdXRpbHNNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFtcImNvbnRleHRcIl0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgc3BvbnNvcigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQgfHwge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgICAgIG5hdlRvKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0b3VjaGVkIG5hdlRvIFwiICsgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKGFyZ3MpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHRhcEFkZHIoYXJncykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvdWNoZWQgdGFwQWRkclwiICsgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRvciA9IG5ldyBMb2NhdGVBZGRyZXNzKCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdG9yLmxvY2F0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYXJncyxcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJNYXBzIGFwcCBsYXVuY2hlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgY2FsbChhcmdzKSB7IFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvdWNoZWQgcGhvbmUgbnVtYmVyIFwiICsgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBwaG9uZS5kaWFsKGFyZ3MsdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzZW5kKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzID0gYXJncztcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlbWFpbCBhZGRyZXNzIGlzIFwiICsgYWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICBlbWFpbC5jb21wb3NlKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogXCJNZXNzYWdlIGZyb20gTW9iaWxlIEFwcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBbYWRkcmVzc10sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkVtYWlsIGNvbXBvc2VyIGNsb3NlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuYWRkci1wYW5lbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1O1xyXG4gICAgbWFyZ2luOiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuLnNwb25QYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxufVxyXG5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkNvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnNcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImxpc3QtcGFuZWxcIj5cclxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwiaGVhZGVyLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJPdXIgU3BvbnNvcnNcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgdGV4dD1cIkFib3V0IE91ciBTcG9uc29yc1wiIEB0YXA9XCJvbkFib3V0VGFwXCIgLz5cclxuICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cInNwb25zb3IgaW4gc3BvbnNvcnNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiIGhlaWdodD1cIjEwMCVcIiBzZXBhcmF0b3JDb2xvcj1cIndoaXRlXCIgY2xhc3M9XCJsaXN0LXBhbmVsXCIgPlxyXG4gICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjIwMCwqXCIgLCByb3dzPVwiKiwqXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwic3BvbnNvci5pbWFnZXNyY1wiIHJvdz1cIjBcIiBjb2w9XCIwXCIgaGVpZ2h0PVwiMTUwXCIgd2lkdGg9XCIxNTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzcG9uc29yLm5hbWVcIiBjbGFzcz1cImxpc3RSaWdodEl0ZW1cIiB0ZXh0V3JhcD1cInRydWVcIiByb3c9XCIwXCIgY29sPVwiMVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L0xpc3RWaWV3PiAgXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT4gIFxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBTcG9uc29yRGV0YWlscyBmcm9tIFwiLi9TcG9uc29yRGV0YWlsc1wiO1xyXG4gICAgaW1wb3J0IEFib3V0U3BvbnNvcnMgZnJvbSBcIi4vQWJvdXRTcG9uc29yc1wiO1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBcclxuICAgICAgICBkYXRhOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzcG9uc29yczogW11cclxuLypcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCI0V2hlZWwgUGFydHNcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjU3MjAgTi4gQWNhZGVteSBCbHZkLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MThcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvNHdwLnBuZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTU5MS05NDAwXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuNHdoZWVscGFydHMuY29tXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiNCBXaGVlbCBQYXJ0cyBpcyB5b3VyIG9uZS1zdG9wIHNvdXJjZSBmb3IgdHJ1Y2sgcGFydHMgYXMgd2VsbCBhcyBwYXJ0cyBmb3IgSmVlcHMgJiBTVVZzLCB3aXRoIHRoZSBuYXRpb27igJlzIGxhcmdlc3QgaW52ZW50b3J5IG9mIG9mZi1yb2FkIDR4NCBwcm9kdWN0cyBpbmNsdWRpbmcgdGlyZXMsIHdoZWVscywgbGlmdCBraXRzLCB3aW5jaGVzLCB0b25uZWF1IGNvdmVycywgZmVuZGVyIGZsYXJlcywgbXVkIGZsYXBzLCBhbmQgbW9yZS4gIEZlYXR1cmluZyBhbGwgdGhlIHRvcCBicmFuZHMgbGlrZSBQcm8gQ29tcCwgU3VwZXIgU3dhbXBlciwgRmFidGVjaCwgV2FybiBhbmQgbW9yZSwgdHJ1c3QgNCBXaGVlbCBQYXJ0cyBmb3IgYWxsIHlvdXIgb2ZmLXJvYWQgYW5kIDR4NCBuZWVkcyBhcyB3ZWxsIGFzIHV0aWxpdHkgdHJ1Y2sgcGFydHMuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGVya2lucyBNb3RvcnNcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjEyMDUgTW90b3IgQ2l0eSBEcml2ZSwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTA1XCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3BlcmtpbnMuanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSk0NzUtMjMzMFwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cucGVya2luc21vdG9ycy5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiT3VyIFBlcmtpbnMgTW90b3IgQ29tcGFueSBkZWFsZXJzaGlwIGluIHRoZSBDb2xvcmFkbyBTcHJpbmdzIGFyZWEgb2ZmZXJzIGEgbGFyZ2UgaW52ZW50b3J5IG9mIHZlaGljbGVzIGFzIHdlbGwgYXMgdGhlIHNlcnZpY2VzIG5lZWRlZCB0byBjYXJlIGZvciB5b3VyIHZlaGljbGUuIE91ciBzZXJ2aWNlIGNlbnRlciB0ZWNobmljaWFucyBhcmUgY2VydGlmaWVkIHdpdGggZXhwZXJ0aXNlIGluIHRoZSBDaHJ5c2xlciBEb2RnZSBKZWVwIFJhbSBicmFuZC4gT3VyIHNlcnZpY2UgZGVwYXJ0bWVudCBvZmZlcnMgdGhlIHBhcnRzIGFuZCBhY2Nlc3NvcmllcyB5b3VyIENocnlzbGVyIERvZGdlIEplZXAgUmFtIG5lZWRzIHRvIHN0YXkgc2FmZSBvbiB0aGUgcm9hZCBmb3IgbWFueSBtb3JlIHllYXJzIHRvIGNvbWUuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmFyaWN5IEJveXMgQ2hyeXNsZXIgSmVlcFwiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNDk1MCBOZXcgQ2FyIERyaXZlLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MThcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiSGFycmlzb25cIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2ZhcmljeWxvZ28ucG5nXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig3MTkpNjM2LTEzMzNcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuZmFyaWN5LmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJGb3Igb3ZlciA3NSB5ZWFycywgVGhlIEZhcmljeSBCb3lzIGhhcyBzZXJ2ZWQgQ29sb3JhZG8gd2l0aCBpbnRlZ3JpdHksIGxveWFsdHkgJiBsb3ZlIOKAlCBzdHJpdmluZyB0byBtYWtlIGJ1eWluZyBhIG5ldyBjYXIgYXMgZW5qb3lhYmxlIGFuZCBleGNpdGluZyBhcyBnZXR0aW5nIGEgbmV3IGNhci4gV2hldGhlciB5b3UgYXJlIHNob3BwaW5nIHRoZSBiZXN0IG5ldyBKZWVwIGFuZCBDaHJ5c2xlciBzZWxlY3Rpb24gaW4gc291dGhlcm4gQ29sb3JhZG8gb3Igb3VyIHdpZGUgdmFyaWV0eSBvZiB1c2VkIHZlaGljbGVzIHdpdGggbm8gaGFnZ2xlIHByaWNpbmcsIHlvdeKAmWxsIHNlZSB3aHkgc3RhcnRpbmcgd2l0aCB1cyBpcyB0aGUgZWFzaWVzdCB3YXkgdG8gZ2V0IGJlaGluZCB0aGUgd2hlZWwgb2YgeW91ciBuZXh0IGNhci4gQWRkaXRpb25hbGx5LCB5b3XigJlsbCBmaW5kIG91ciBwYXJ0cyBhbmQgc2VydmljZSB0ZWFtIHRvIGJlIGtub3dsZWRnZWFibGUsIGZyaWVuZGx5IGFuZCBmb2N1c2VkIG9uIHlvdXIgbmVlZHMgZmlyc3QuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWNtZSBGaXJlIGFuZCBTYWZldHlcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjE0MTkgUy4gV2Foc2F0Y2ggQXZlbnVlLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MDVcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvQWNtZS5wbmdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSk0NzMtMjI1OVwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vYWNtZWZpcmVhbmRzYWZldHlpbmMuY29tL1wiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIlNpbmNlIDE5NTUsIEFjbWUgRmlyZSAmIFNhZmV0eSBFcXVpcG1lbnQgQ28uIEluYy4gaGFzIGJlZW4gcHJvdmlkaW5nIHJlbGlhYmxlIGZpcmUgc2FmZXR5IG9wdGlvbnMgZm9yIHJlc2lkZW50cyBhbmQgYnVzaW5lc3NlcyBpbiB0aGUgU291dGhlYXN0IENvbG9yYWRvIGFyZWEuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmVzdCBXZXN0IFRpcmUgYW5kIFNlcnZpY2UsIEluYy5cIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjMyODcgUy4gQWNhZGVteSBCbHZkLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MTZcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvYmVzdHdlc3QucG5nXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig3MTkpMzkwLTk0NTVcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5iZXN0d2VzdHRpcmVpbmMuY29tL1wiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIldlIGFyZSB5b3VyIGxvY2FsIGluZGVwZW5kZW50IEdvb2R5ZWFyIGRlYWxlciEgQXQgQmVzdCBXZXN0IFRpcmUgJiBTZXJ2aWNlLCB3ZSBkbyBhIGxvdCBtb3JlIHRoYW4ganVzdCB0aXJlIHNlcnZpY2UgYW5kIHNhbGVzLiBPdXIgQVNFIENlcnRpZmllZCB0ZWNobmljaWFucyBwcm92aWRlIGF1dG8gcmVwYWlyIGFuZCBtYWludGVuYW5jZSBzZXJ2aWNlcyBmb3IgY2FycywgdHJ1Y2tzLCBhbmQgU1VWcy4gQXQgb3VyIHRocmVlIGxvY2F0aW9ucyBpbiBOb3J0aCBDb2xvcmFkbyBTcHJpbmdzLCBTb3V0aCBDb2xvcmFkbyBTcHJpbmdzLCBhbmQgU3RlcmxpbmcsIHlvdSB3aWxsIGZpbmQgYSB0ZWFtIG9mIGV4cGVyaWVuY2VkIHRlY2huaWNpYW5zIHJlYWR5IHRvIG1lZXQgYWxsIG9mIHlvdXIgdGlyZSBzZXJ2aWNlIGFuZCBhdXRvIHJlcGFpciBuZWVkcy4gSW4gZmFjdCwgd2Ugb2ZmZXIgYSAyIHllYXIvMjQsMDAwIG1pbGUgd2FycmFudHkgb24gcGFydHMgYW5kIGxhYm9yIHRocm91Z2ggR29vZHllYXIsIHNvIHlvdSBjYW4gcmVzdCBhc3N1cmVkIHlvdXIgdmVoaWNsZSBoYXMgcmVjZWl2ZWQgdG9wIHF1YWxpdHkgc2VydmljZS5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQcmVkYXRvciA0V0RcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjQ2MjAgTi4gTmV2YWRhIEF2ZSwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTA3XCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3ByZWRhdG9yLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTUyOC01NzkwXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly9wcmVkYXRvcjR3ZC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiV2Ugc2VydmUgb3VyIDQtd2hlZWwgZHJpdmUgZW50aHVzaWFzdHMgYW5kIG1ha2UgbmV3IG9uZXMgYnkgb3VyIHF1YWxpdHkgb2Ygd29yay4gV2hldGhlciBpdOKAmXMgZm9yIGJ1c2luZXNzLCBldmVyeSBkYXkgdHJhdmVsIG9yIGp1c3QgZm9yIGZ1biwgd2XigJl2ZSBnb3QgdGhlIGV4cGVydHMgdG8gc2VydmljZSB5b3VyIDQtd2hlZWwgZHJpdmUgdmVoaWNsZS4gT25lIHRoaW5nIHdpbGwgYWx3YXlzIHJlbWFpbiBjb25zdGFudCDigJQgdG8gbWFrZSBzdXJlIHlvdXIgdmVoaWNsZSBpcyBzYWZlIGFuZCB3aWxsIGdldCB5b3UgdG8gYW5kIGZyb20geW91ciBkZXN0aW5hdGlvbi4gU28gd2hldGhlciB5b3XigJlyZSBjbGltYmluZyBhIGhpbGwsIGtpY2tpbmcgdXAgZGlydCwgc3BsYXNoaW5nIHRocm91Z2ggcml2ZXJzLCBvciB0cmF2ZWxpbmcgY2l0eSBzdHJlZXRzLCB3ZSB3YW50IHlvdSB0byBoYXZlIGZ1biBhbmQgZW5qb3kgdGhlIHJpZGUuICBXZeKAmXJlIGEgZnVsbCBzZXJ2aWNlIHNob3Agc3BlY2lhbGl6aW5nIGluIDQtd2hlZWwgZHJpdmUgdmVoaWNsZXMuIFdlIGFyZSBCbHVlIFNlYWwgQVNFIENlcnRpZmllZCwgdGhlIGhpZ2hlc3QgQVNFIENlcnRpZmljYXRpb24gYXZhaWxhYmxlIHRvIHNlcnZpY2UgcmVwYWlyIHNob3BzLiBXZSBhcmUgYSBtZW1iZXIgb2YgdGhlIEJldHRlciBCdXNpbmVzcyBCdXJlYXUuIFdlIGhhdmUga25vd2xlZGdlYWJsZSBleHBlcmllbmNlZCBjb3VudGVyIHN0YWZmIHRvIGFzc2lzdCB3aXRoIHB1cmNoYXNpbmcgZGVjaXNpb25zLiBXZSBwcmlkZSBvdXJzZWx2ZXMgb24gb3VyIHNlcnZpY2UgZXhjZWxsZW5jZSBhbmQgY3VzdG9tZXIgY2FyZS4gV2XigJlyZSBoYXBweSB0byBwcm92aWRlIHNlcnZpY2UgZXN0aW1hdGVzLiBXZSBwcm92aWRlIHF1YWxpdHkgNHg0IHByb2R1Y3RzIGF0IGNvbXBldGl0aXZlIHByaWNpbmcuIENvbWUgdmlzaXQgb3VyIHNob3dyb29tLiBPdXIgd2Vic2l0ZSBjb250YWlucyBvbmx5IGEgc21hbGwgcGVyY2VudGFnZSBvZiB0aGUgcHJvZHVjdHMgd2Ugc3RvY2suIFNvbWUgc2FsZSBpdGVtcyBsaXN0ZWQgb24gdGhlIHdlYnNpdGUgbWF5IG5vdCBiZSBhZHZlcnRpc2VkIGluIHRoZSBzdG9yZSBzbyB0YWtlIGEgbWludXRlIHRvIGxvb2sgYXJvdW5kIGFuZCBkb24ndCBoZXNpdGF0ZSB0byBjb250YWN0IHVzIHdpdGggYW55IHF1ZXN0aW9ucy4gQSBwb3J0aW9uIG9mIGV2ZXJ5IHB1cmNoYXNlIGdvZXMgdG8ga2VlcGluZyA0IHdoZWVsIGRyaXZlIHRyYWlscyBvcGVuIGFuZCBvcGVuaW5nIG5ldyB0cmFpbHMuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGF0cmlvdCA0WDRcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiS3Jpc1wiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvcGF0cmlvdC5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSk2ODQtNTAyNVwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3BhdHJpb3Q0eDQuYnVzaW5lc3Muc2l0ZS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJBdXRvIFJlcGFpciBTaG9wIGluIENvbG9yYWRvIFNwcmluZ3MgLSBTcGVjaWFsaXppbmcgaW4gNFg0IHJlcGFpcnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJTcG9ydHNtYW4ncyBXYXJlaG91c2VcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjU1NSBOLiBDaGVsdG9uIFJvYWQsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkwOVwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9zcG9ydHNtYW5zLXdhcmVob3VzZS5wbmdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSk1OTctOTIwMFwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5zcG9ydHNtYW5zd2FyZWhvdXNlLmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJXaGV0aGVyIHlvdXIgcGFzc2lvbiBpcyBodW50aW5nLCBmaXNoaW5nLCBjYW1waW5nLCBiYWNrcGFja2luZyBvciBzaG9vdGluZywgaXQncyBpbXBvcnRhbnQgdG8gaGF2ZSB0aGUgcmlnaHQgZXF1aXBtZW50IHdoZW4geW91IGhlYWQgaW50byB0aGUgZ3JlYXQgb3V0ZG9vcnMuIFF1YWxpdHkgZ2VhciBnaXZlcyB5b3UgdGhlIGVkZ2UgeW91IG5lZWQgdG8gcGVyZm9ybSB3ZWxsIGFuZCBlbmpveSB0aGUgam91cm5leS4gVGhhdCdzIHdoeSBTcG9ydHNtYW4ncyBXYXJlaG91c2UgY2FycmllcyBvbmx5IHRvcC1xdWFsaXR5LCBicmFuZC1uYW1lIHByb2R1Y3RzIGZvciB0aGUgc2VyaW91cyBvdXRkb29yIGVudGh1c2lhc3QuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnVuVHJla3MgR3VpZGVib29rc1wiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiUC5PLiBCb3ggMzEyNywgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwMTMyXCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2Z1bnRyZWtzLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTM5MC05NDU1XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL1wiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIlRoZXJl4oCZcyBhIHdob2xlIGxvdCBvZiB3b3JsZCBvdXQgdGhlcmUgd2FpdGluZyB0byBiZSBleHBsb3JlZC4gV2XigJlsbCBlcXVpcCB5b3Ugd2l0aCBhbGwgdGhlIGluZm9ybWF0aW9uIHlvdSBuZWVkIOKAkyBkaWZmaWN1bHR5IGxldmVscywgZGV0YWlsZWQgZGlyZWN0aW9ucywgaGlnaC1xdWFsaXR5IHBob3RvcywgYW5kIGd1aWRlYm9va3MgdG8gZ2V0IHlvdSBvZmYtcm9hZCBhbmQgb3V0IG9mIHRoZSBtZW50YWwgZ3JpbmQuIEFmdGVyIGFsbCwgeW91ciBmcmVlIHRpbWUgc2hvdWxkIGJlIHNwZW50IGV4YWN0bHkgbGlrZSB0aGF0IOKAkyBmcmVlLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlJvY2sgV2FyZSBXZWxkaW5nIGFuZCBGYWJyaWNhdGlvblwiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNjA1MCBTdGV0c29uIEhpbGxzIEJsdmQsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkyM1wiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9yb2Nrd2FyZS5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSkzMjgtMDc5NlwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LnJvY2t3YXJlLm5ldC9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJSb2NrIFdhcmUgQ3VzdG9tIFdlbGRpbmcgYW5kIEZhYnJpY2F0aW9uIGlzIHlvdXIgZnVsbCBzZXJ2aWNlIG9mZiByb2FkIHZlaGljbGUgUmVwYWlyLCBTZXJ2aWNlICYgQ3VzdG9tIEFjY2Vzc29yaWVzIEZhY2lsaXR5LiBSb2NrIFdhcmUgc3BlY2lhbGl6ZXMgaW4gb2ZmLXJvYWQgYWNjZXNzb3JpZXMgZm9yIExhbmQgUm92ZXJzIGluY2x1ZGluZyB0aGUgRGVmZW5kZXIgOTAsIDExMCwgUmFuZ2UgUm92ZXIgQ2xhc3NpYywgYW5kIERpc2NvdmVyeSwgYXMgd2VsbCBhcyBDdXN0b20gRmFicmljYXRpb24gZm9yIGFsbCA0eDQgbW9kZWxzLiBBZGRpdGlvbmFsbHkgUm9jayBXYXJlIGJ1aWxkcyBjdXN0b20gdmVoaWNsZXMgdGhhdCBtZWV0IHRoZSBuZWVkcyBvZiB0aGUgb2ZmIHJvYWQgY29tbXVuaXR5IGZyb20gdGhlIGZhbWlseSByZWNyZWF0aW9uYWwgcmlncyB0byB0dXJuIGtleSByb2NrY3Jhd2xlcnMuIFJvY2sgV2FyZSBpcyBsb2NhdGVkIGluIENvbG9yYWRvIFNwcmluZ3MsIENvbG9yYWRvIGFuZCBpcyBkZWRpY2F0ZWQgdG8gcXVhbGl0eSBhbmQgY3VzdG9tZXIgc2VydmljZSFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDb2xvcmFkbydzIEZpbmVzdCBXaW5kb3cgV2VsbCBDb3ZlcnNcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiV2FyZCBvciBKZW5uaWZlciBXaWxsaWFtc1wiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvY3d3LmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImNvbG9yYWRvd2luZG93d2VsbHNAZ21haWwuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSk1MjItMjQ4NVwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vY29sb3JhZG93aW5kb3d3ZWxscy5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiU2VydmluZyB0aGUgZ3JlYXRlciBDb2xvcmFkbyBTcHJpbmdzIGFyZWEsIHdlIGhhdmUgd2luZG93IHdlbGwgY292ZXJzIHRoYXQgYXJlIGRlc2lnbmVkIHRvIGhlbHAga2VlcCBvdXQgUmFpbiwgU25vdywgSGFpbCwgSW50cnVkZXJzLCBEZWJyaXMsIFBldHMsIENoaWxkcmVkbiBvdXIgY292ZXJzIGFyZSBtYXRlbmFuY2UgZnJlZSwgbGlnaHR3ZWlnaHQsIGVncmVzcyBzYWZlIGFuZCBVViBwcm90ZWN0ZWQuICBUaGV5IGFyZSBtYWRlIGZyb20gcGxveWNhcmJvbmF0ZSBhbmQgYWx1bWludW0gbWF0ZXJpYWxzLiAgVHJhbnNwYXJlbnQgY292ZXIgYWxsb3dzIGxpZ2h0IGluLiAgU2VjdXJpdHkgYnJhY2tldHMgYXQgTk8gRVhUUkEgQ0hBUkdFLiAgVGVzdGVkIHRvIGhvbGQgdXAgdG8gMzUwIGxicy4gIEN1c3RvbSBtYWRlIGF0IHlvdXIgaG9tZS5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJMYW5kIFJvdmVyIG9mIENvbG9yYWRvIFNwcmluZ3NcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjU2NSBBdXRvbW90aXZlIERyaXZlLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MDVcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvbGFuZHJvdmVyLnBuZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTMwMi0xMDAwXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LnJlZG5vbGFuZC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiTGFuZCBSb3ZlciB2ZWhpY2xlcyBhcmUgcHJlc3RpZ2lvdXMsIGx1eHVyeSBTVVZzLCBhbmQgd2Ugd2FudCB5b3UgdG8gaGF2ZSBhbiBlcXVhbGx5IGdyZWF0IGV4cGVyaWVuY2Ugd2hlbiB5b3UgdmlzaXQgTGFuZCBSb3ZlciBDb2xvcmFkbyBTcHJpbmdzLiBXZSBiZWxpZXZlIGluIHB1dHRpbmcgQ2FzdGxlIFJvY2ssIFB1ZWJsbywgYW5kIENvbG9yYWRvIFNwcmluZywgQ29sb3JhZG8gY3VzdG9tZXJzIGZpcnN0IGFuZCB0aGUgc2FsZSBzZWNvbmQuIE91ciBnb2FsIGlzIHRvIGJ1aWxkIHJlcHV0YXRpb25zIGZvciBsaWZlLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRpc2NvdW50IFRpcmVcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjc3MCBBYmJvdHQgTGFuZSwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTA2XCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2Rpc2NvdW50dGlyZS5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSk1MjAtMDY5NFwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5kaXNjb3VudHRpcmUuY29tL3N0b3JlL2NvL2NvbG9yYWRvLXNwcmluZ3Mvcy8xNDMwXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiV2l0aCB0aGUgbW9zdCByZWxpYWJsZSB0aXJlIGFuZCB3aGVlbCBzZXJ2aWNlcyBhcm91bmQsIHRoZSBsb2NhbCBEaXNjb3VudCBUaXJlIHN0b3JlIGluIENvbG9yYWRvIHNwcmluZ3MsIENPIGNhbiBoZWxwIHlvdSBtYWtlIHRoZSByaWdodCBkZWNpc2lvbnMgZm9yIHlvdXIgdmVoaWNsZS5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCYXJyb24gTGFuZFwiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMjc5MCBOb3J0aCBBY2FkZW15IEJsdmQsIFN1aXRlIDMxMSwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTE3XCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2JhcnJvbmxhbmQucG5nXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig3MTkpMzYwLTY4MjdcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2JhcnJvbmxhbmQuY29tL1wiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIlByb2Zlc3Npb25hbCBMYW5kIFN1cnZleWluZyBzZXJ2aW5nIHRoZSBSb2NreSBNb3VudGFpbiBSZWdpb24uICBXaGV0aGVyIHlvdXIgcHJvamVjdCBpcyBwcml2YXRlIG9yIGNvbW1lcmNpYWwsIHdlIGFyZSBoZXJlIGZvciB5b3Ugc3VydmV5aW5nIG5lZWRzLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIldhbG1hcnRcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNzA3IFMuIDh0aCBTdHJlZXQsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkwNVwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy93YWxtYXJ0LmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTYzMy0wNzM2XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LndhbG1hcnQuY29tL1wiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIklubm92YXRpdmUgdGhpbmtpbmcuIExlYWRlcnNoaXAgdGhyb3VnaCBzZXJ2aWNlLiBBbmQgYWJvdmUgYWxsLCBhbiB1bndhdmVyaW5nIGNvbW1pdG1lbnQgdG8gc2F2aW5nIHBlb3BsZSBtb25leS4gSXTigJlzIHdoYXQgbWFrZXMgdXMgdGhlIGJ1c2luZXNzIHdlIGFyZSB0b2RheSwgYW5kIHNoYXBlcyB0aGUgY29tcGFueSB3ZSB3aWxsIGJlIHRvbW9ycm93LiBBcyB0aGUgbGFyZ2VzdCByZXRhaWxlciBpbiB0aGUgd29ybGQsIG91ciAyLjMgbWlsbGlvbiBhc3NvY2lhdGVzIG1lZXQgdGhlIG5lZWRzIG9mIG1vcmUgdGhhbiAyNjAgbWlsbGlvbiBjdXN0b21lcnMgZXZlcnkgd2Vlay4gQW5kIHdlIGRvIGl0IHdoZXJldmVyIHRoZXkgc2hvcCDigJMgaW4gb3VyIHN0b3Jlcywgb25saW5lLCBvciB0aHJvdWdoIHRoZWlyIG1vYmlsZSBkZXZpY2VzLiBTb3VuZCBsaWtlIGEgbG90IG9mIHdvcms/IFdl4oCZcmUganVzdCBnZXR0aW5nIHN0YXJ0ZWRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJTZXQgVGhlbSBGcmVlXCIsIFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCJcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiR2lhbm5pIGFuZCBCZXRzeSBWZWNjaGlhcmV0dGlcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3N0Zm9mZnJvYWQucG5nXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIigzMDMpNjE5LTQ4MDRcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuc3Rmb2Zmcm9hZC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiV2UgZXhpc3Qgd2l0aCB0aGUgZ29hbCBvZiBlbmRpbmcgaHVtYW4gdHJhZmZpY2tpbmcgZ2xvYmFsbHkuIE91ciBwdXJwb3NlIGlzIHRvIHJhaXNlIG1vbmV5IGZvciB0aG9zZSByZXNjdWluZyBhbmQgcmVoYWJpbGl0YXRpbmcgdGhlIHZpY3RpbXMgb2YgaHVtYW4gdHJhZmZpY2tpbmcgYXMgd2VsbCBjaGFuZ2luZyBjdWx0dXJlIGFuZCBsYXdzIGFyb3VuZCB0aGUgd29ybGQuIFByb2NlZWRzIG9mIFNldCBUaGVtIEZyZWUgT2ZmIFJvYWQgc3VwcG9ydHMgdGhlIHJlc2N1ZSBhbmQgcmVoYWJpbGl0YXRpb24gb2YgaHVtYW4gdHJhZmZpY2tpbmcgdmljdGltcy5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJPJ1JlaWxseSBBdXRvIFBhcnRzXCIsIFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI3NTQ1IE1jTGF1Z2hsaW4gUm9hZCwgRmFsY29uLCBDTywgODA4MzFcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiUnlhbiBCYXVtYW5cIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL29yZWlsbHkuanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9sb2NhdGlvbnMub3JlaWxseWF1dG8uY29tL2NvL3BleXRvbi9hdXRvcGFydHMtMzY2Ni5odG1sXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiWW91ciBQZXl0b24sIENPIE8nUmVpbGx5IEF1dG8gUGFydHMgc3RvcmUgaXMgb25lIG9mIG92ZXIgNSwwMDAgT+KAmVJlaWxseSBBdXRvIFBhcnRzIHN0b3JlcyB0aHJvdWdob3V0IHRoZSBVLlMuIFdlIGNhcnJ5IGFsbCB0aGUgcGFydHMsIHRvb2xzIGFuZCBhY2Nlc3NvcmllcyB5b3UgbmVlZCwgYXMgd2VsbCBhcyBvZmZlcmluZyBmcmVlIFN0b3JlIFNlcnZpY2VzIGxpa2UgYmF0dGVyeSB0ZXN0aW5nLCB3aXBlciBibGFkZSAmIGJ1bGIgaW5zdGFsbGF0aW9uLCBjaGVjayBlbmdpbmUgbGlnaHQgdGVzdGluZyBhbmQgbW9yZS4gTmVlZCBoZWxwPyBTdG9wIGJ5IGFuZCB0YWxrIHRvIG9uZSBvZiBvdXIgUGFydHMgUHJvZmVzc2lvbmFscyB0b2RheS5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDb2xvcmFkbyBDb21wcmVzc2VkIEdhc2VzXCIsIFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIzOTc1IEludGVycGFyayBEcml2ZSwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTA3XCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2NjZ2xvZ28uanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig3MTkpNDczLTc3MTRcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5jb2xvcmFkb2NvbXByZXNzZWRnYXNlcy5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiQ29sb3JhZG8gQ29tcHJlc3NlZCBHYXNlcyBpbiBDb2xvcmFkbyBpcyBhIGxvY2FsLCBmYW1pbHkgb3duZWQgYW5kIG9wZXJhdGVkIHdlbGRpbmcgc3VwcGx5IHNob3Agd2l0aCBtb3JlIHRoYW4gNzUgeWVhcnMgb2YgZXhwZXJpZW5jZSBhbmQga25vd2xlZGdlIGluIHRoZSBpbmR1c3RyeS4gV2UncmUgeW91IG9uZSBzdG9wIHNob3AgZm9yIGFsbCBvZiB5b3VyIHdlbGRpbmcgbmVlZHMgYW5kIHF1ZXN0aW9ucy5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEYW4ncyBBdXRvXCIsICAgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjMyMTAgQ2hlbHRvbiBDaXJjbGUsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkwOFwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9kYW5zYXV0by5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSk2MzUtMjU4N1wiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vRGFucy1BdXRvLUluYy00NjkxOTU3Mjk5NTc4MzMvXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiQSBsb2NhbCwgZmFtaWx5IG93bmVkIHByb3ZpZGVyIG9mIHR1bmUtdXBzIGFuZCBnZW5lcmFsIHJlcGFpcnMuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiT3V0bGF3IEplZXAgQWR2ZW50dXJlc1wiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMjgxIE5vcnRoIE1haW4gU3RyZWV0LCBNb2FiLCBVdGFoLCA4NDUzMlwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCJKZXJlbXkgUm93YW5cIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL291dGxhdy5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDQzNSkyNjAtNzQ1MVwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3Lm91dGxhd2plZXB0b3Vycy5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiV2hlbiB3ZSBzdGFydGVkIG91ciBvZmZyb2FkIHRvdXIgYnVzaW5lc3MgaW4gTW9hYiwgd2Ugd2FudGVkIHRvIGRvIHNvbWV0aGluZyBkaWZmZXJlbnQuIFdlIGRpZG4ndCB3YW50IHRvIGhhdmUgdGhlICdydW4gb2YgdGhlIG1pbGwnIHRvdXIgYnVzaW5lc3MuIFdlIHdhbnRlZCB0byBicmluZyBzb21lIGV4Y2l0ZW1lbnQgdG8gb3VyIGd1ZXN0cy4gIE92ZXIgdGhlIHBhc3QgZmV3IHllYXJzLCB3ZSd2ZSB3b3JrZWQgaGFyZCB0byBzZXQgb3Vyc2VsdmVzIGFwYXJ0IGZyb20gb3VyIGNvbXBldGl0aW9uLiBCeSBvZmZlcmluZyByaWRlLWFsb25nLCBkcml2ZS1hbG9uZyBhbmQgZ3VpZGVkIHRvdXJzLCB3ZSd2ZSBiZWNvbWUgeW91ciBvbmUtc3RvcCBzaG9wIGZvciBqZWVwIGFkdmVudHVyZXMgaW4gTW9hYi4gQnkgYnJhbmNoaW5nIG91dCBpbnRvIGRpZmZlcmVudCBhcmVhcyBvZiB0aGUgb2Zmcm9hZCBjb21tdW5pdHksIHdlIGhhdmUgYmVlbiB2ZXJ5IGZvcnR1bmF0ZSBhbmQgaGF2ZSBndWlkZWQgZm9yIHNldmVyYWwgVFYgc2hvd3MgYW5kIGhhdmUgZG9uZSBhIGxvdCBvZiB0ZXN0aW5nIGZvciB2ZWhpY2xlIG1hbnVmYWN0dXJpbmcgY29tcGFuaWVzLCBpbmNsdWRpbmcgSmVlcCB0aGVtc2VsdmVzLiBPdXIgZmFtaWx5IGlzIGxvb2tpbmcgdmVyeSBmb3J3YXJkIHRvIHRoZSBmdXR1cmUgYW5kIGJlaW5nIGEgcGFydCBvZiB5b3VyIGZhbWlseSdzIHVuZm9yZ2V0dGFibGUgdmFjYXRpb24gaGVyZSBpbiBNb2FiIS5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJXYXJuIEluZHVzdHJpZXNcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjEyOTAwIFNFIENhcHBzIFJvYWQsIENsYWNrYW1hcywgT1IsIDk3MDE1XCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIkFubmUgU25lZGVjb3JcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3dhcm4uanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig4MDApNTQyLTkyNzZcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93YXJuLmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJUaGUgY29tcGFueSBkZXNpZ25zLCBtYW51ZmFjdHVyZXMgYW5kIG1hcmtldHMgYSBmdWxsIGxpbmUgb2Ygb2ZmLXJvYWQgZXF1aXBtZW50IGFuZCBhY2Nlc3NvcmllcyB0aGF0IGVuaGFuY2UgdGhlIHBlcmZvcm1hbmNlIG9mIGZvdXItd2hlZWwtZHJpdmUgdmVoaWNsZXMsIEFUVidzIGFuZCB1dGlsaXR5IHZlaGljbGVzLiBUaGUgY29tcGFueSdzIEluZHVzdHJpYWwgRGl2aXNpb24gbWFya2V0cyBlbGVjdHJpYyBhbmQgaHlkcmF1bGljIHdpbmNoZXMgYW5kIGhvaXN0cyB0byBjb21tZXJjaWFsLCBpbmR1c3RyaWFsIGFuZCBzZXZlcmUgZHV0eSBjdXN0b21lcnMuIFdhcm4gYWxzbyBoYXMgYSBsaW5lIG9mIHV0aWxpdHkgd2luY2hlcyBhbmQgaG9pc3RzIHRoYXQgYXJlIGRlc2lnbmVkIGZvciBwcm9mZXNzaW9uYWwgdHJhZGUgd29ya2VycyBhbmQgZG8taXQteW91cnNlbGYgY29uc3VtZXJzIHdobyBuZWVkIHBvd2VyZnVsIHRvb2xzIHRvIGFzc2lzdCB0aGVtIGluIHB1bGxpbmcsIGhhdWxpbmcsIGRyYWdnaW5nIG9yIGxpZnRpbmcuIFdhcm4gZm9jdXNlcyBvbiB0aHJlZSBzcGVjaWZpYyBtYXJrZXRzIC0gQ29uc3VtZXIgQWZ0ZXJtYXJrZXQsIEluZHVzdHJpYWwvQ29tbWVyY2lhbCwgYW5kIE9yaWdpbmFsIEVxdWlwbWVudC4gV2l0aCBjdXN0b21lcnMgaW4gb3ZlciA2NSBjb3VudHJpZXMsIFdBUk4gaXMgb25lIG9mIHRoZSB3b3JsZCdzIG1vc3QgcmVjb2duaXplZCBicmFuZHMgaW4gdmVoaWNsZSBwZXJmb3JtYW5jZSBlbmhhbmNpbmcgZXF1aXBtZW50LlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlF1YWRyYXRlY1wiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMTAyOCBTYXVuZGVycyBMYW5lLCBXZXN0IENoZXN0ZXIsIFBBLCAxOTM4MFwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9xdWFkcmF0ZWMucG5nXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig4MDApNzQ1LTYwMzdcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cucXVhZHJhdGVjLmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJGb3Igb3ZlciAyNSB5ZWFycywgUXVhZHJhdGVjIGhhcyBwcm91ZGx5IHByb3ZpZGVkIEplZXAgZW50aHVzaWFzdHMgdGhlIGJlc3QgcGFydHMgYW5kIGFjY2Vzc29yaWVzIGF2YWlsYWJsZS4gT3VyIGNvbXBhbnkgd2FzIGZvdW5kZWQgb24gb25lIHByaW5jaXBsZTogUHJvdmlkZSB0aGUgaGlnaGVzdCBsZXZlbCBvZiBzZXJ2aWNlIGFuZCB0b3AgcXVhbGl0eSBwcm9kdWN0cyB0byBhbGwgb3VyIGN1c3RvbWVycyAtIGV2ZXJ5IGRheS4gV2hldGhlciBpdCBpcyBob29kIHBhcnRzIG9yIHRhaWxnYXRlIGFjY2Vzc29yaWVzOyBBbnRlbm5hIGtpdHMgb3IgbGlnaHQgYmFycywgeW91IGNhbiBjb3VudCBvbiBvdXIgZXhwZXJpZW5jZSB0byBoZWxwIHNlbGVjdCB0aGUgcGVyZmVjdCBwYXJ0cyBvciBhY2Nlc3NvcmllcyBmb3IgeW91ciBkYWlseSBhbmQgb2ZmLXJvYWQgbmVlZHMuIEV4cGVyaWVuY2UgVGhlIFF1YWRyYXRlYyBBZHZhbnRhZ2UgdG9kYXkhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU3RhcmdhemVycyBUaGVhdHJlIGFuZCBFdmVudCBDZW50ZXJcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjEwIFBhcmtzaWRlIERyaXZlLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MTVcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvc3RhcmdhemVycy5wbmdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSk0NzYtMjIwMFwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LnN0YXJnYXplcnN0aGVhdHJlLmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJPdXIgTWlzc2lvbiBpcyB0byBCcmluZyBHcmVhdCBFbnRlcnRhaW5tZW50IHRvIEdyZWF0IEF1ZGllbmNlcyBhbmQgdG8gYmUgYSBXYXJtIGFuZCBXZWxjb21pbmcgR2F0aGVyaW5nIFBsYWNlIGZvciB0aGUgQ29tbXVuaXR5IVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk1ldGFsY2xvYWtcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjI0ODQgTWVyY2FudGlsZSBEcml2ZSwgUmFuY2hvIENvcmRvdmEsIENBLCA5NTc0MlwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9tZXRhbGNsb2FrLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoOTE2KTYzMS04MDcxXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cubWV0YWxjbG9hay5jb20vRGVmYXVsdC5hc3BcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJXaGV0aGVyIGl0J3Mgb3VyIEdhbWUtQ2hhbmdpbmcgYXBwcm9hY2ggdG8gUHJvZHVjdCBEZXNpZ24sIG91ciBkZXZlbG9wbWVudCBvZiB0aGUgZmlyc3QgQm9sdC1PbiBIaWdoLUNsZWFyYW5jZSBQcm9kdWN0aW9uIEZlbmRlcnMsIG91ciBMaWZldGltZSBDdXN0b21lciBTZXJ2aWNlIHBvbGljeSwgb3Igb3VyIFBhdGVudGVkIEdhbWUtQ2hhbmdpbmcgU3VzcGVuc2lvbiBUZWNobm9sb2d5LCBldmVyeXRoaW5nIHdlIGRvIGlzIG9ubHkgd29ydGggZG9pbmcgaWYgd2UgY2FuIG5vdCBvbmx5IGRvIGl0IGJldHRlciwgYnV0IHNpZ25pZmljYW50bHkgZGlmZmVyZW50IHRoZW4gd2hhdCBvdGhlcnMgZXhwZWN0LlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkJlc3RvcFwiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzMzIENlbnRlbm5pYWwgUGFya3dheSwgU3VpdGUgQiwgTG91aXN2aWxsZSwgQ08gIDgwMDI3XCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2Jlc3RvcC1sb2dvLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoODAwKTg0NS0zNTY3XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmJlc3RvcC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiQmVzdG9wIGhhcyBiZWVuIGEgbGVhZGVyIGluIEplZXAgYW5kIFRydWNrIGFjY2Vzc29yaWVzIGZvciBtb3JlIHRoYW4gNjAgeWVhcnMuIE91ciBzZWxlY3Rpb24gb2YgcHJvZHVjdHMgY29tZXMgZnJvbSB5ZWFycyBvZiBjcmVhdGluZyBzcGVjaWFsdHkgcHJvZHVjdHMgZm9yIG91dGRvb3IgYWR2ZW50dXJlcyB3aXRoIHlvdXIgdmVoaWNsZS5cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBdXHJcbiovXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBhcmdzLnZpZXc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlID0gdmlldy5wYWdlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFwcGVkSXRlbSA9IHZpZXcuYmluZGluZ0NvbnRleHQ7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic3BvbnNvciB0YXBwZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoU3BvbnNvckRldGFpbHMsIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB0YXBwZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkFib3V0VGFwKCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChBYm91dFNwb25zb3JzKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBheGlvcyh7IG1ldGhvZDogXCJHRVRcIiwgXCJ1cmxcIjogXCJodHRwOi8vZGF0YS5jc2M0dy5jb20vc3BvbnNvcnMuanNvblwiIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwb25zb3JzID0gcmVzdWx0LmRhdGEuc3BvbnNvcnM7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzdWx0IGlzIFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEuc3BvbnNvcnMpKTtcclxuXHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbn0gICBcclxuXHJcblxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhvbWUtcGFuZWxcIj5cclxuICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJ0cmFpbC5pbWFnZXNyY1wiIC8+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInRyYWlsLm5hbWVcIiBjbGFzcz1cImluZm8tcGFuZWxcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiOTAsICpcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiVHJhaWxoZWFkOiBcIiBjb2w9XCIwXCIgY2xhc3M9XCJzcG9uTGVmdFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0cmFpbC5jb29yZGluYXRlc1wiIGNvbD1cIjFcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInNwb25SaWdodFwiIEB0YXA9XCJ0YXBBZGRyKHRyYWlsLmNvb3JkaW5hdGVzKVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjkwLCAqXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkRpZmZpY3VsdHk6IFwiIGNvbD1cIjBcIiBjbGFzcz1cInNwb25MZWZ0XCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInRyYWlsLmRpZmZpY3VsdHlcIiBjb2w9XCIxXCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJzcG9ubmFtZVJpZ2h0XCIgPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjkwLCAqXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkZ1blRyZWtzOiBcIiBjb2w9XCIwXCIgY2xhc3M9XCJzcG9uTGVmdFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0cmFpbC5mdW50cmV4XCIgY29sPVwiMVwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwic3BvblJpZ2h0XCIgQHRhcD1cIm5hdlRvKHRyYWlsLmZ1bnRyZXgpXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiOTAsICpcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQ29UcmV4OiBcIiBjb2w9XCIwXCIgY2xhc3M9XCJzcG9uTGVmdFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0cmFpbC5jb3RyZXhcIiBjb2w9XCIxXCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJzcG9uUmlnaHRcIiBAdGFwPVwibmF2VG8odHJhaWwuY290cmV4KVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidHJhaWwuZGVzY1wiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwibW90ZC1sYWJlbFwiIGhlaWdodD1cIjEwMCVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8QnV0dG9uIEB0YXA9XCIkbW9kYWwuY2xvc2VcIiB0ZXh0PVwiQ2xvc2VcIiBjbGFzcz1cImJ1dHRvblwiIC8+XHJcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PiBcclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+ICBcclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBjb25zdCB1dGlsc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCIpO1xyXG4gICAgdmFyIExvY2F0ZUFkZHJlc3MgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2F0ZS1hZGRyZXNzXCIpLkxvY2F0ZUFkZHJlc3M7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbXCJjb250ZXh0XCJdLFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIHRyYWlsKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dCB8fCB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgdGFwQWRkcihhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidG91Y2hlZCB0YXBBZGRyXCIgKyBhcmdzKTtcclxuICAgICAgICAgICAgICAgIHZhciBsb2NhdG9yID0gbmV3IExvY2F0ZUFkZHJlc3MoKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0b3IubG9jYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5hdlRvKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0b3VjaGVkIG5hdlRvIFwiICsgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKGFyZ3MpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuaG9tZS1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkci1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLXBhbmVsIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2MtcGFuZWwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogMjA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmlvLXBhbmVsIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogMTA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcG9uSXRlbSB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcG9uTGVmdCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwb25uYW1lUmlnaHQge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwb25SaWdodCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc3BvblJpZ2h0Tm9VTCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubW90ZC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1O1xyXG4gICAgbWFyZ2luLXRvcDogMTU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU7XHJcbiAgICBwYWRkaW5nOiA1O1xyXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiMTkyMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNC1XaGVlbGVyc1wiIGNsYXNzPVwiYWN0aW9uLWJhclwiIC8+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGlzdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJoZWFkZXItbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgdGV4dD1cIlRyYWlsc1wiIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidXR0b25cIiB0ZXh0PVwiQWJvdXQgVGhlIFRyYWlsc1wiIEB0YXA9XCJvblRyYWlsc1RhcFwiIC8+XHJcbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJ0cmFpbCBpbiB0cmFpbHNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiIGhlaWdodD1cIjEwMCVcIiBzZXBhcmF0b3JDb2xvcj1cIndoaXRlXCIgY2xhc3M9XCJsaXN0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiMTUwLCpcIiAsIHJvd3M9XCIqLCpcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJ0cmFpbC5pbWFnZXNyY1wiIHJvdz1cIjBcIiBjb2w9XCIwXCIgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0cmFpbC5uYW1lXCIgY2xhc3M9XCJsaXN0UmlnaHRJdGVtXCIgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiMFwiIGNvbD1cIjFcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+ICAgXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT4gIFxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBBYm91dFRyYWlscyBmcm9tIFwiLi9BYm91dFRyYWlsc1wiO1xyXG4gICAgaW1wb3J0IFRyYWlsRGV0YWlscyBmcm9tIFwiLi9UcmFpbERldGFpbHNcIjtcclxuICAgIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0YTogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgXCJ0cmFpbHNcIjogW11cclxuLypcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNZXRiZXJyeSBHdWxjaFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvbWV0YmVycnkxLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJFYXN5L01vZGVyYXRlXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzOS4xMDIzOCwgLTEwNS4yNzY4NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy90aGUtZ3VsY2hlcy9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9wbGFjZXMvbmF+MTQ1ODE5NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIk1ldGJlcnJ5IEd1bGNoIGlzIHBhcnQgb2YgdGhlIENlZGFyIE1vdW50YWluIEd1bGNoIFRyYWlscy4gIFRoaXMgaXMgdGhlIGVhc2llc3Qgb2YgdGhlIHRocmVlIHRyYWlscyBvZmYgb2YgQ2VkYXIgTW91bnRhaW4gUm9hZC5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMb25nd2F0ZXIgR3VsY2hcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2xvbmd3YXRlci5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiTW9kZXJhdGUvRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzOS4wOTgxNCwgLTEwNS4yNzUxOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy90aGUtZ3VsY2hlcy9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9wbGFjZXMvbmF+MTQ1ODE4OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIkxvbmd3YXRlciBHdWxjaCBpcyBwYXJ0IG9mIHRoZSBDZWRhciBNb3VudGFpbiBHdWxjaCBUcmFpbHMuICBJdCBpcyBtb3N0bHkgZWFzeSBidXQgaGFzIG9uZSBpbnRlcm1lZGlhdGUgc2VjdGlvbiBhcyBwaWN0dXJlZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGFja2V0dCBHdWxjaFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvaGFja2V0dDEuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuMDc4MywgLTEwNS4yNzE5MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy90aGUtZ3VsY2hlcy9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9wbGFjZXMvbmF+MTQ1ODE5MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIkhhY2tldHQgR3VsY2ggaXMgcGFydCBvZiB0aGUgQ2VkYXIgTW91bnRhaW4gR3VsY2ggVHJhaWxzLiAgSXQgaXMgdGhlIG1vc3QgZGlmZmljdWx0IG9mIHRoZSB0aHJlZSB0cmFpbHMuICBZb3Ugd2lsbCBkbyBiZXN0IHdpdGggYSB2ZWhpY2xlIHRoYXQgaGFzIGxhcmdlciB0aXJlcywgbW9yZSBncm91bmQgY2xlYXJhbmNlLCBhbmQgbG9ja2Vycy4gIEhhY2tldHQgUm9jaywgcGljdHVyZWQgaGVyZSwgaXMgdGhlIG1vc3QgZGlmZmljdWx0IG9ic3RhY2xlIG9uIHRoZSB0cmFpbC5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIZWxscyBSZXZlbmdlLCBNb2FiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9oZWxsc3JldmVuZ2UuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzguNTc1MzksIC0xMDkuNTIyNzZcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvaGVsbHMtcmV2ZW5nZS9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJIZWxscyByZXZlbmdlIGlzIG9uZSBvZiB0aGUgbW9zdCBwb3B1bGFyIGFuZCB3ZWxsIGtub3duIHRyYWlscyBpbiBNb2FiLiAgSXQgaGFzIHN0ZWVwIGNsaW1icyBvbiBzbGljayByb2NrIHRoYXQgY2FuIGJlIGRpZmZpY3VsdCB3aXRoIG5vcm1hbCB0aXJlcy4gIEl0IGFsc28gaW5jbHVkZXMgSGVsbHMgR2F0ZSAocGljdHVyZWQpIHdoaWNoIGlzIGEgcG9wdWxhciBjaGFsbGVuZ2UgdGhhdCBpcyBhbiBvcHRpb25hbCBvYnN0YWNsZS5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNb3VudCBCYWxkeVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvbXRiYWxkeS5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiRWFzeVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzguNzYwOTA5LC0xMDQuOTgzMTMxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL210LWJhbGR5L1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3JvYWRzL2FsbWFncmUtMTA5MDdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJNb3VudCBCYWxkeSB0cmFpbCBpcyBhIHZlcnkgc2NlbmljIHNoZWxmIHRyYWlsIHRoYXQgYXBwcm9hY2hlcyB0aGUgdG9wIG9mIE1vdW50IEJhbGR5LiAgXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRWFnbGUgUm9ja1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvZWFnbGVyb2NrLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJEaWZmaWN1bHRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM4LjczNTUxOSwtMTA0Ljk4Nzg2NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy9lYWdsZS1yb2NrLXNhcmFuLXdyYXAvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvbWFwL0AzOC43MzUzNTIsLTEwNC45ODgxNzcsMTMuMDB6L2RldGFpbHNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJFYWdsZSBSb2NrIGlzIGFuIGV4dHJlbWVseSBkaWZmaWN1bHQgdHJhaWwgdGhhdCB3aWxsIGNoYWxsZW5nZSBhbG1vc3QgYW55IHJpZy4gIFRoaXMgdHJhaWwgbWF5IGluY2x1ZGUgU2FyYW4gV3JhcCB3aGljaCBpcyBhbHNvIHZlcnkgZGlmZmljdWx0LlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNoaW5hIFdhbGxcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2NoaW5hd2FsbC5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiTW9kZXJhdGUgdG8gRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzOS4xMTEwMSwtMTA1LjQ3MzU1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL2NoaW5hLXdhbGwvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3Yvcm9hZHMvY2hpbmEtd2FsbC04ODE0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiQ2hpbmEgV2FsbCBpcyBhIGZhaXJseSBlYXN5IHRyYWlsIHRvIG5hdmlnYXRlIGFuZCBtb3N0IG9ic3RhY2xlcyBoYXZlIGEgYnlwYXNzLiAgVGhlcmUgaXMgb25lIG9ic3RhY2xlIHRoYXQgaXMgZGlmZmljdWx0IHRvIG5hdmlnYXRlIHdpdGggbGFyZ2VyIHZlaGljbGVzIHdoaWNoIGlzIHdoeSB0aGlzIHRyYWlsIGlzIHJhdGVkIHRoZSB3YXkgaXQgaXMuICBTdG9jayBKZWVwcyBhbmQgb3RoZXIgYnJhbmRzIG9mIHNpbWlsYXIgc2l6ZSBzaG91bGQgYmUgYWJsZSB0byBtYWtlIHRoaXMgb2JzdGFjbGUgYnV0IG1heSBzY3JhcGUgc2tpZCBwbGF0ZSBvciBkYW1hZ2UgcGxhc3RpYyBzdGVwcyBvciBmZW5kZXIgZ3VhcmRzLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNoaW5hbWFuIEd1bGNoXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9jaGluYW1hbi5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzOC43OTE5OSwtMTA2LjA4NTYwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL2NoaW5hbWFuLWd1bGNoLWNhcm5hZ2UtY2FueW9uL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3RyYWlscy9jaGluYW1hbi1ndWxjaC1sb29wLTIwNDY5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiQ2hpbmFtYW4gZ3VsY2ggaXMgYSB2ZXJ5IGRpZmZpY3VsdCB0cmFpbCB0aGF0IHdpbGwgY2hhbGxlbmdlIG1vc3QgZHJpdmVycy4gVGhlIHRyYWlsIGlzIHZlcnkgc3RlZXAgYW5kIHJvY2t5IGluIHBsYWNlcyBhbmQgaXMgbm90IGJ5cGFzc2FibGUuICBUaGlzIHNob3VsZCBvbmx5IGJlIGF0dGVtcHRlZCBieSBleHBlcmllbmNlZCB3aGVlbGVycyB3aXRoIGF0IGxlYXN0IDM1IGluY2ggdGlyZXMgYW5kIGxvY2tlcnMuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWVkYW5vIFBhc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL21lZGFub1Bhc3MuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkVhc3kvTW9kZXJhdGVcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM3LjgzNjQ3LC0xMDUuMzA3NjFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvbWVkYW5vLXBhc3MvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3Yvcm9hZHMvbWVkYW5vLXBhc3MtMTA2MzVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJNZWRhbm8gUGFzcyBpcyBhIGZhaXJseSBlYXN5IHJvYWQgYnV0IHdpbGwgcmVxdWlyZSBhdCBsZWFzdCBhIHN0b2NrIDR4NCB2ZWhpY2xlLiAgVGhlIHRyYWlsIGVuZHMgdXAgYXQgdGhlIEdyZWF0IFNhbmQgRHVuZXMgYW5kIGlzIHZlcnkgc2NlbmljLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsYW5jYSBQZWFrXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9ibGFuY2EuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzcuNTIxODUsIC0xMDUuNjAxOTNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvYmxhbmNhLXBlYWsvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvdHJhaWxzL2JsYW5jYS1wZWFrLTExODU2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiQmxhbmNhIFBlYWsgaXMgYW4gZXh0cmVtZWx5IGRpZmZpY3VsdCB0cmFpbCBhbmQgc2hvdWxkIG9ubHkgYmUgYXR0ZW1wdGVkIGJ5IGV4cGVyaWVuY2VkIHdoZWVsZXJzIGluIGhpZ2hseSBtb2RpZmllZCByaWdzLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1vc3F1aXRvIFBhc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL21vc3F1aXRvLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJNb2RlcmF0ZVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuMjcwMzcsIC0xMDYuMDQ3NTFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvbW9zcXVpdG8tcGFzcy9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJIaWdoZXN0IHBhc3Mgcm9hZCBpbiBDb2xvcmFkbyBvcGVuIHRvIG1vdG9yaXplZCB0cmF2ZWwuIFZpZXdzIGZyb20gdGhlIDEzLDE4NSBmdC4gc3VtbWl0IGFyZSBpbXByZXNzaXZlIG9uIGEgY2xlYXIgZGF5LiBWZXJ5IGludGVyZXN0aW5nIG1pbmUgc3RydWN0dXJlcyBvbiB0aGUgZWFzdCBzaWRlLiBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaGVlbGVyIExha2VcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3doZWVsZXIuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuMzU3MDMsIC0xMDYuMDgyODlcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvd2hlZWxlci1sYWtlL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3BsYWNlcy9uYX42OTA1MDdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJBIGRpZmZpY3VsdCB0cmFpbCB0byBhIGJlYXV0aWZ1bCBsYWtlIGFib3ZlIHRpbWJlcmxpbmUuICBTaG91bGQgb25seSBiZSBhdHRlbXB0ZWQgYnkgZXhwZXJpZW5jZWQgd2hlZWxlcnMgaW4gbW9kaWZpZWQgcmlnc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNsaWRlIExha2VcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3NsaWRlLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJNb2RlcmF0ZVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuMzQ3MTgsIC0xMDYuMzMyMTJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvc2xpZGUtbGFrZS13dXJ0cy1kaXRjaC1uby1uYW1lLWd1bGNoL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3NlYXJjaD9xPXNsaWRlJTIwbGFrZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIlRoaXMgaXMgcmVhbGx5IHRocmVlIGNvbXBsZXRlbHkgZGlmZmVyZW50IHRyYWlscyBjb21iaW5lZCBpbnRvIG9uZS4gU2xpZGUgTGFrZSBpcyBhIHJvY2t5IDQtd2hlZWwtZHJpdmUgcm9hZCB3aXRoIGEgZ3JlYXQgc2NlbmljIGVuZGluZy5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIb2x5IENyb3NzXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9ob2x5Y3Jvc3MuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuNTAwNDMsIC0xMDYuNDMzMDhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvaG9seS1jcm9zcy9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9zZWFyY2g/cT1ob2x5JTIwY3Jvc3MlMjA0eDQlMjB0cmFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIkEgdmVyeSBkaWZmaWN1bHQgdHJhaWwgd2l0aCBtYW55IG9ic3RhY2xlcy4gIFRoaXMgdHJhaWwgcmVxdWlyZXMgZXhwZXJpZW5jZWQgd2hlZWxlcnMgaW4gaGlnaGx5IG1vZGlmaWVkIHRyYWlscy5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaW5lcmFsIENyZWVrXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9taW5lcmFsY3JlZWsuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzcuOTg4NjQsIC0xMDcuNjQ5NTFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvbWluZXJhbC1jcmVlay9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9tYXAvQDM3Ljk3NzI4MiwtMTA3LjYzODYzNCwxMy40M3ovZGV0YWlsc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIlRoaXMgdHJhaWwgcHJvdmlkZXMgYWNjZXNzIHRvIEVuZ2luZWVyIHBhc3MgYW5kIHRoZSBBcGluZSBMb29wIGZyb20gdGhlIE91cmF5IHNpZGUuICBJdCBoYXMgYSBmZXcgZGlmZmljdWx0IG9ic3RhY2xlcyB0aGF0IGNhbm5vdCBiZSBieXBhc3NlZCBidXQgaXMgcGFzc2FibGUgYnkgc3RvY2sgNHg0cyB3aXRoIG9mZi1yb2FkIHRpcmVzLiAgR3JvdW5kIGNsZWFyYW5jZSBpcyBhIE1VU1QhXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRW5naW5lZXIgUGFzc1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvZW5naW5lZXIuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIk1vZGVyYXRlXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzNy45NTc1MiwgLTEwNy41NzU0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL2VuZ2luZWVyLXBhc3MvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvdHJhaWxoZWFkcy9lbmdpbmVlci1wYXNzLTI3NjBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJUaGlzIHRyYWlsLCBjb21iaW5lZCB3aXRoIENpbm5hbW9uIFBhc3MsIGNvbnN0aXR1dGVzIG1vc3Qgb2YgdGhlIGZhbW91cyBBbHBpbmUgTG9vcC4gSXQgaXMgYW4gZXhoaWxhcmF0aW5nIHRyaXAgZm9yIGRyaXZlcnMgb2YgYWxsIGV4cGVyaWVuY2UgbGV2ZWxzLiBUaGVyZSBhcmUgbWFueSBtaW5lcyBhbmQgcG9pbnRzIG9mIGhpc3RvcmljYWwgaW50ZXJlc3QgYWxvbmcgdGhlIHJvdXRlLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNpbm5hbW9uIFBhc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2Npbm5hbW9uLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJNb2RlcmF0ZVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzcuOTAzNzIsIC0xMDcuNDExODdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvY2lubmFtb24tcGFzcy13YWdlci1ndWxjaC9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9wbGFjZXMvbmF+MTQ1NjQ2NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIlRoaXMgdHJhaWwsIGNvbWJpbmVkIHdpdGggRW5naW5lZXIgUGFzcywgY29uc3RpdHV0ZXMgbW9zdCBvZiB0aGUgZmFtb3VzIEFscGluZSBMb29wLiBUaGUgd2VzdGVybiBoYWxmIG9mIHRoZSB0cmlwIHBhc3NlcyBtYW55IGhpc3RvcmljIHBvaW50cyBhbmQgY2xpbWJzIHRvIG91dHN0YW5kaW5nIHZpZXdzLiBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGFjayBCZWFyIFBhc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2JsYWNrYmVhci5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzNy44MDkwNiwgLTEwNy44MDk4NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy9ibGFjay1iZWFyLXBhc3MvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3Yvcm9hZHMvYmxhY2stYmVhci05NjQ2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiSW5jcmVkaWJsZSB2aWV3cyBmcm9tIGhpZ2ggYWJvdmUgUmVkIE1vdW50YWluIFBhc3MgYW5kIFRlbGx1cmlkZS4gQ2xvc2UtdXAgdmlld3Mgb2YgaGlzdG9yaWMgbWluZXMgYW5kIGRyYW1hdGljIHdhdGVyZmFsbHMuIEZlZWwgdGhlIG1pc3QgZnJvbSBzcGVjdGFjdWxhciBCcmlkYWwgVmVpbCBGYWxscy4gUm9hZCBpcyBjbG9zZWQgTm92ZW1iZXIgdGhyb3VnaCBNYXkgMS4gU3dpdGNoYmFja3MgYXJlIGRpZmZpY3VsdCBhbmQgb25lLXdheSBkb3duaGlsbDsgbm8gcmV0dXJuIHRvIHN0YXJ0LlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkltb2dlbmUgUGFzc1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvaW1vZ2VuZS5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzNy45Mzk5NywgLTEwNy44MDk4NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy9pbW9nZW5lLXBhc3MvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvcGxhY2VzL25hfjE0NTY2MjZcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJJbW9nZW5lIFBhc3MgaXMgdGhlIHNlY29uZCBoaWdoZXN0IGRyaXZhYmxlIHBhc3MgaW4gQ29sb3JhZG8uIFRoZSBkcml2ZSBpcyBvbmUgb2YgdGhlIG1vc3QgdGhyaWxsaW5nIGluIHRoZSBzdGF0ZS4gQXQgU2F2YWdlIEJhc2luLCB5b3XigJlsbCBwYXNzIHRocm91Z2ggVG9tYm95IFRvd25zaXRlLCBvbmNlIG9uZSBvZiB0aGUgbW9zdCBhY3RpdmUgbWluaW5nIHRvd25zIGluIENvbG9yYWRvLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBvdWdoa2VlcHNpZSBHdWxjaFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvcG91Z2hrZWVwc2llLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJEaWZmaWN1bHRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM3Ljk4ODMyLC0xMDcuNjQ5NTRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvcG91Z2hrZWVwc2llLWd1bGNoL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3JvYWRzL3BvdWdoa2VlcHNpZS1ndWxjaC0xODMwN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIlNjZW5pYywgcmVtb3RlIHZhbGxleSBvZmZlcnMgdmFyaWV0eSBvZiBjaGFsbGVuZ2VzIGZvciBoYXJkLWNvcmUgZW50aHVzaWFzdC4gTW9zdCBjb21lIHRvIHRyeSB0aGVpciBsdWNrIGF0IHRoZSBtYWluIG9ic3RhY2xlIHNob3duIGhlcmUgb3IganVzdCB0byB3YXRjaCBvdGhlcnMuIFNub3cgaXMgdXN1YWxseSBub3QgcGxvd2VkLCBzbyB0cmFpbCBvcGVucyBsYXRlciBpbiB0aGUgc2Vhc29uLiBTdGF5IG9mZiB0cmFpbCBkdXJpbmcgd2V0IHBlcmlvZHMuIFNjZW5pYywgcmVtb3RlIHZhbGxleSBvZmZlcnMgdmFyaWV0eSBvZiBjaGFsbGVuZ2VzIGZvciBoYXJkLWNvcmUgZW50aHVzaWFzdC4gXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiWWFua2VlIEJveSBCYXNpblwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMveWFua2VlYm95LmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJEaWZmaWN1bHRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM4LjAxNzYxLCAtMTA3LjY3NDYzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL3lhbmtlZS1ib3ktYmFzaW4vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvcGxhY2VzL25hfjE0NTY4NjhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJPbmUgb2YgdGhlIG1vc3QgcG9wdWxhciBkZXN0aW5hdGlvbnMgaW4gdGhlIE91cmF5IGFyZWEgZHVlIHRvIGl0cyBzdHVubmluZyBuYXR1cmFsIGJlYXV0eSwgcmljaCBoaXN0b3J5LCBhbmQgY29sb3JmdWwgd2lsZGZsb3dlcnMuXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBdXHJcbiovXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBhcmdzLnZpZXc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlID0gdmlldy5wYWdlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFwcGVkSXRlbSA9IHZpZXcuYmluZGluZ0NvbnRleHQ7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidHJhaWwgdGFwcGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKFRyYWlsRGV0YWlscywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRhcHBlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uVHJhaWxzVGFwKCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChBYm91dFRyYWlscyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuICAgICBcclxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcInVybFwiOiBcImh0dHA6Ly9kYXRhLmNzYzR3LmNvbS90cmFpbHMuanNvblwiIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhaWxzID0gcmVzdWx0LmRhdGEudHJhaWxzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXN1bHQgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS50cmFpbHMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbn0gICBcclxuXHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAudHJhaWxuYW1lIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTtcclxuICAgIH1cclxuXHJcbiAgICAucGljIHtcclxuICAgICAgICBwYWRkaW5nOiAyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXZlbnQge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ldmVudERhdGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgfVxyXG5cclxuICAgIC50cmFpbC1wYW5lbCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBwYWRkaW5nOiAyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICAgICAgYm9yZGVyOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlci1sYWJlbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjE5MjE7XHJcbiAgICAgICAgY29sb3I6IFdoaXRlO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWJvdXQtcGFuZWwge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgcGFkZGluZzogMTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9BYm91dERpcmVjdG9ycy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFib3V0LXBhbmVsIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIHBhZGRpbmc6IDE1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvQWJvdXRTY2hlZHVsZS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFib3V0LXBhbmVsIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBwYWRkaW5nOiAxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0Fib3V0U3BvbnNvcnMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hYm91dC1wYW5lbCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgcGFkZGluZzogMTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9BYm91dFRyYWlscy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFib3V0LXBhbmVsIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTI7XFxuICAgIHBhZGRpbmc6IDE1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvQWJvdXRVcy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZhcyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCIsIFxcXCJmYS1zb2xpZC05MDBcXFwiO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uZmFyIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgXFxcImZhLXJlZ3VsYXItNDAwXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLnQtMzYge1xcbiAgICBmb250LXNpemU6IDM2O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvQXBwLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaG9tZS1wYW5lbFtkYXRhLXYtYTdiYWRjZWFdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDM1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uYmlvLXBhbmVsW2RhdGEtdi1hN2JhZGNlYV0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxMDtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLmRpckluZm9bZGF0YS12LWE3YmFkY2VhXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5kaXJMZWZ0W2RhdGEtdi1hN2JhZGNlYV0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5kaXJuYW1lUmlnaHRbZGF0YS12LWE3YmFkY2VhXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uZGlyUmlnaHRbZGF0YS12LWE3YmFkY2VhXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0RpcmVjdG9yRGV0YWlscy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFjdGlvbi1iYXJbZGF0YS12LTkyMmYyZmM4XSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA4O1xcbiAgICBwYWRkaW5nOiA4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uZGlyZWN0b3JbZGF0YS12LTkyMmYyZmM4XSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNTtcXG59XFxuLmxpc3QtcGFuZWxbZGF0YS12LTkyMmYyZmM4XSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgbWFyZ2luOiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLmRlc2NyaXB0aW9uLWxhYmVsW2RhdGEtdi05MjJmMmZjOF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuLmhlYWRlci1sYWJlbFtkYXRhLXYtOTIyZjJmYzhdIHtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIxOTIxO1xcbiAgICBjb2xvcjogV2hpdGU7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvRGlyZWN0b3JzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaG9tZVBhbmVsW2RhdGEtdi02NzQxMGYzYV0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLmRlc2NyaXB0aW9uW2RhdGEtdi02NzQxMGYzYV0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxuICBmb250LXNpemU6IDE1O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcblxuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0hvbWUudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5waWNbZGF0YS12LTIxYmM5MTFjXSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlOyBcXG4gICAgICAgIG1hcmdpbjogMjtcXG59XFxuLmV2ZW50W2RhdGEtdi0yMWJjOTExY10ge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlOyBcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI7XFxufVxcbi5ldmVudDFbZGF0YS12LTIxYmM5MTFjXSB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICAgICAgZm9udC1zaXplOiAyMDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7IFxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjtcXG59XFxuLmV2ZW50MltkYXRhLXYtMjFiYzkxMWNdIHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgICAgICBmb250LXNpemU6IDIwO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTsgXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyO1xcbn1cXG4uZXZlbnREYXRlW2RhdGEtdi0yMWJjOTExY10ge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAyMDtcXG59XFxuLmRlc2NyaXB0aW9uLWxhYmVsW2RhdGEtdi0yMWJjOTExY10ge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcbi5ldmVudC1wYW5lbFtkYXRhLXYtMjFiYzkxMWNdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxuICBtYXJnaW4tYm90dG9tOiAzO1xcbn1cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvU2NoZWR1bGUudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi0wMzNiMGRhMF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5hZGRyLXBhbmVsW2RhdGEtdi0wMzNiMGRhMF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLmluZm8tcGFuZWxbZGF0YS12LTAzM2IwZGEwXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5kZXNjLXBhbmVsW2RhdGEtdi0wMzNiMGRhMF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDIwO1xcbiAgICBmb250LXNpemU6IDEyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG59XFxuLmJpby1wYW5lbFtkYXRhLXYtMDMzYjBkYTBdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMTA7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5zcG9uSXRlbVtkYXRhLXYtMDMzYjBkYTBdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLnNwb25MZWZ0W2RhdGEtdi0wMzNiMGRhMF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5zcG9ubmFtZVJpZ2h0W2RhdGEtdi0wMzNiMGRhMF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLnNwb25SaWdodFtkYXRhLXYtMDMzYjBkYTBdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uc3BvblJpZ2h0Tm9VTFtkYXRhLXYtMDMzYjBkYTBdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5tb3RkLWxhYmVsW2RhdGEtdi0wMzNiMGRhMF0ge1xcbmZvbnQtc2l6ZTogMTU7XFxubWFyZ2luLXRvcDogNTtcXG5tYXJnaW4tcmlnaHQ6IDU7XFxubWFyZ2luLWJvdHRvbTogNTtcXG5tYXJnaW4tbGVmdDogNTtcXG5wYWRkaW5nOiA1O1xcbmhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuYmFja2dyb3VuZC1jb2xvcjogI2RiMTkyMTtcXG5jb2xvcjogd2hpdGU7XFxuZm9udC1zdHlsZTogaXRhbGljO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvU2NoZWR1bGVEZXRhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWRkci1wYW5lbFtkYXRhLXYtNGIyOGViZTNdIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgbWFyZ2luOiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5zcG9uUGFuZWxbZGF0YS12LTRiMjhlYmUzXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvU3BvbnNvckRldGFpbHMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi0xNGRmZjM5Ml0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5hZGRyLXBhbmVsW2RhdGEtdi0xNGRmZjM5Ml0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLmluZm8tcGFuZWxbZGF0YS12LTE0ZGZmMzkyXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5kZXNjLXBhbmVsW2RhdGEtdi0xNGRmZjM5Ml0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDIwO1xcbiAgICBmb250LXNpemU6IDEyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG59XFxuLmJpby1wYW5lbFtkYXRhLXYtMTRkZmYzOTJdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMTA7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5zcG9uSXRlbVtkYXRhLXYtMTRkZmYzOTJdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLnNwb25MZWZ0W2RhdGEtdi0xNGRmZjM5Ml0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5zcG9ubmFtZVJpZ2h0W2RhdGEtdi0xNGRmZjM5Ml0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLnNwb25SaWdodFtkYXRhLXYtMTRkZmYzOTJdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uc3BvblJpZ2h0Tm9VTFtkYXRhLXYtMTRkZmYzOTJdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5tb3RkLWxhYmVsW2RhdGEtdi0xNGRmZjM5Ml0ge1xcbmZvbnQtc2l6ZTogMTU7XFxubWFyZ2luLXRvcDogMTU7XFxubWFyZ2luLXJpZ2h0OiA1O1xcbm1hcmdpbi1ib3R0b206IDU7XFxubWFyZ2luLWxlZnQ6IDU7XFxucGFkZGluZzogNTtcXG5ob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmJhY2tncm91bmQtY29sb3I6ICNkYjE5MjE7XFxuY29sb3I6IHdoaXRlO1xcbmZvbnQtc3R5bGU6IGl0YWxpYztcXG5mb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL1RyYWlsRGV0YWlscy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRyYWlsbmFtZVtkYXRhLXYtMmEwNWNkYzhdIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI1O1xcbn1cXG4ucGljW2RhdGEtdi0yYTA1Y2RjOF0ge1xcbiAgICBwYWRkaW5nOiAyO1xcbn1cXG4uZXZlbnRbZGF0YS12LTJhMDVjZGM4XSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMDtcXG59XFxuLmV2ZW50RGF0ZVtkYXRhLXYtMmEwNWNkYzhdIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwO1xcbn1cXG4udHJhaWwtcGFuZWxbZGF0YS12LTJhMDVjZGM4XSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHBhZGRpbmc6IDI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbiAgICBib3JkZXI6IHdoaXRlO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG59XFxuLmRlc2NyaXB0aW9uLWxhYmVsW2RhdGEtdi0yYTA1Y2RjOF0ge1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaGVhZGVyLWxhYmVsW2RhdGEtdi0yYTA1Y2RjOF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiMTkyMTtcXG4gICAgY29sb3I6IFdoaXRlO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL1RyYWlscy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJBYm91dCBPdXIgRGlyZWN0b3JzXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kOiBcIiMxMzFkNGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWJvdXQtcGFuZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgXCJPdXIgRGlyZWN0b3JzIGFyZSByZXNwb25zaWJsZSBmb3IgbWFuYWdpbmcgdGhlIGNsdWIsIHNjaGVkdWxpbmcgb3VyIHRyaXBzIGFuZCBtZWV0aW5ncyBhbmQgbGVhZGluZyB0aGUgdHJhaWwgcnVucy4gIFxcbiAgICAgICAgICAgICAgICAgICAgXFxuVGhlaXIgcGFydGljaXBhdGlvbiBpcyB2b2x1bnRhcnkgYW5kIG5vIERpcmVjdG9yIGlzIHBhaWQuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDbG9zZVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uJG1vZGFsLmNsb3NlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiQWJvdXQgVGhlIFNjaGVkdWxlXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kOiBcIiMxMzFkNGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWJvdXQtcGFuZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgXCJUaGlzIGlzIHRoZSBzY2hlZHVsZSBmb3IgdHJpcHMgYXMgb2YgQXByaWwgMTV0aC4gIEl0IGlzIHBvc3NpYmxlIHRoYXQgTWF5IDl0aCBldmVudHMgd2lsbCBjaGFuZ2Ugb3IgY2FuY2VsIGFsdG9nZXRoZXIgZGVwZW5kaW5nIG9uIHBhcnRpY2lwYXRpb24gb2Ygb3VyIHNwb25zb3JzLlxcbiAgICAgICAgICAgICAgICAgICAgXFxuV2F0Y2ggZm9yIHN0YXR1cyB1cGRhdGUgb24gZXZlbnRzIGFzIHRoZSBzY2hlZHVsZSB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlIENPVklELTE5IHNpdHVhdGlvbiBhbmQgYWxzbyBiZWNhdXNlIG9mIHRyYWlsIGNvbmRpdGlvbnMuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDbG9zZVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uJG1vZGFsLmNsb3NlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiQWJvdXQgT3VyIFNwb25zb3JzXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kOiBcIiMxMzFkNGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWJvdXQtcGFuZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgXCJPdXIgU3BvbnNvcnMgaGVscCB1cyB0byBrZWVwIG91ciBtZW1iZXJzaGlwIGR1ZXMgbG93LiAgVGhleSBkb25hdGUgcHJpemVzIGZvciBvdXIgZ2l2ZWF3YXkgYXQga2ljayBvZmYsIHRoZXkgcHJvdmlkZSBtZWFscyBmb3Igc29tZSBldmVudHMgYW5kIGluIHNvbWUgY2FzZXMgcHJvdmlkZSB1cyBkb25hdGlvbnMgdG8gcGF5IGZvciBjbHViIHNwb25zb3JlZCBldmVudHMuICBcXG4gICAgICAgICAgICAgICAgICAgIFxcbllvdSBjYW4gc2hvdyB5b3VyIGFwcHJlY2lhdGlvbiBmb3IgdGhlaXIgc3BvbnNvcmhpcCBieSBtZW50aW9uaW5nIHRoZSBjbHViIHdoZW4geW91IHZpc2l0IHRoZW0uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDbG9zZVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uJG1vZGFsLmNsb3NlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiQWJvdXQgVGhlIFRyYWlsc1wiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgYmFja2dyb3VuZDogXCIjMTMxZDRlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFib3V0LXBhbmVsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgIFwiVGhlc2UgYXJlIHRoZSB0cmFpbHMgdGhhdCB3ZSBoYXZlIHRyYXZlbGVkIGluIHRoZSBwYXN0IG9yIHdpbGwgdHJhdmVsIHRoaXMgc2Vhc29uLiAgXFxuICAgICAgICAgICAgICAgICAgICBcXG5UcmFpbHMgd2lsbCBiZSBhZGRlZCBoZXJlIGFzIHdlIHJ1biB0aGVtIGluIHRoZSBmdXR1cmUuICBcXG4gICAgICAgICAgICAgICAgICAgIFxcbkluIHRoZSBkZXRhaWxzIGZvciBlYWNoIHRyYWlsIHRoZXJlIGlzIGEgbGluayB0byBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdHJhaWwgZnJvbSBvdXIgc3BvbnNvciBGdW50cmVrcy4gIEFsc28sIHdlIGluY2x1ZGVkIGEgQ09UUkVYIGxpbmsgdGhhdCB3aWxsIHNob3cgeW91IHdoZXJlIHRoZSB0cmFpbCBpcy4gIFRoZSB0cmFpbGhlYWQgY29vcmRpbmF0ZXMgYXJlIGRlcml2ZWQgZnJvbSBnb29nbGUgbWFwcyBidXQgc2hvdWxkIGJlIGZhaXJseSBhY2N1cmF0ZS4gIFRyYWlsIHJhdGluZ3MgaGVyZSBhcmUgYmFzZWQgb24gRnVuVHJla3MgcmF0aW5ncy5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS4kbW9kYWwuY2xvc2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJBYm91dCBDU0M0V1wiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgYmFja2dyb3VuZDogXCIjMTMxZDRlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2ltYWdlcy9sb2dvLnBuZ1wiLCBoZWlnaHQ6IFwiMjAwXCIsIHdpZHRoOiBcIjIwMFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFib3V0LXBhbmVsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgIFwiQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNCBXaGVlbGVycywgSW5jLiwgZXhpc3RzIGFzIGEgY2x1YiB0byBhbGxvdyBmb3Igd29uZGVyZnVsIHRpbWVzIHRvZ2V0aGVyIGluIG9mZi1yb2FkIGFjdGl2aXRpZXMgd2l0aCBmZWxsb3cgYmVsaWV2ZXJzLiBUaGUgYXNzb2NpYXRpb24gYmVnYW4gaW4gdGhlIHNwcmluZyBvZiAxOTkzLiBcXG5cXG5PdXIgcGhpbG9zb3BoeSBpbmNsdWRlcyB0aGUgYmVsaWVmIHRoYXQgd2UgYXJlIHRvIGludml0ZSBvdXIgbmVpZ2hib3JzIGFuZCBjby13b3JrZXJzIHRvIGpvaW4gd2l0aCB1cyBpbiBhbnkgb2Ygb3VyIGV2ZW50cyBzbyB0aGF0IHdlIGFyZSBpbnZvbHZlZCBpbnRlbnRpb25hbGx5IGluIHJlYWNoaW5nIG91dCB0byBvdGhlciBtZW1iZXJzIG9mIG91ciBjb21tdW5pdHkuIFxcblxcbkFzIENocmlzdGlhbnMgd2UgZGVzaXJlIHRvIGFsd2F5cyB1cGhvbGQgdGhlIGxhdyBpbiByZWdhcmRzIHRvIHN1Y2ggdGhpbmdzIGFzOiBvYmV5aW5nIHRoZSBzcGVlZCBsaW1pdCwgc3RheWluZyBjbGVhciBvZiBubyB0cmVzcGFzc2luZyBvciBwb3N0ZWQgYXJlYXMsIHN0YXlpbmcgb24gdGhlIHRyYWlsIHdoZW4gc28gbWFya2VkLCBwYWNraW5nIGl0IGluIGFuZCBwYWNraW5nIGl0IGFsbCBvdXQsIGFkaGVyaW5nIHRvIHRoZSBuYXRpb25hbCBUcmVhZCBMaWdodGx5IHByb2dyYW0gYW5kIHN0YXRlIG9yZ2FuaXphdGlvbiBvZiA0V0QgY2x1YnMsIGV0Yy4gXFxuXFxuT3VyIGRlc2lyZSBpcyB0byBoZWxwIGVhY2ggb3RoZXIgYW5kIG91ciBmZWxsb3cgbWFuIGF0IGFsbCB0aW1lcy4gV2Ugd2FudCB0byBiZSBtb2RlbCBvZmYtcm9hZGVycy4gXFxuXFxuR29kIGhhcyBjcmVhdGVkIGEgbWlnaHR5IHdvcmsgb2YgYXJ0IGluIHRoZSBSb2NreSBNb3VudGFpbnMuIEV2ZXJ5IENocmlzdGlhbiBuZWVkcyB0byBiZSBiYWxhbmNlZCBpbiBsaWZlIHdpdGggaGlzIHNwaXJpdHVhbCBzZWxmLCBoaXMgZmFtaWx5LCBoaXMgd29yaywgYW5kIGhpcyByZWNyZWF0aW9uYWwgYWN0aXZpdGllcy4gXFxuXFxuTWljYWggNDoyIHNheXMsIENvbWUsIGxldCB1cyBnbyB1cCB0byB0aGUgbW91bnRhaW5zLiBcXG5cXG5XZSBhbGwgbmVlZCB0aW1lcyBvZiByZWZyZXNoaW5nOyB0aGUgbW91bnRhaW5zLCBzdHJlYW1zLCBhbmQgd29vZGVkIGhpbGxzIHJlbWluZCB1cyBvZiB0aGUgcHJvbWlzZXMgb2YgR29kIGFuZCBvZiBob3cgZmFpdGhmdWxseSBIZSBwcm92aWRlcy4gTGV0cyBnbyB1cCAtLSBhbmQgc2VlIGl0LCBoZWFyIGl0LCBicmVhdGhlIGl0IGluLCBhbmQgbW9zdCBvZiBhbGwsIGZlZWwgaXQgYW5kIGV4cGVyaWVuY2UgaXQuIFdobyBrbm93cz8gSXQgbWF5IGhlbHAgY2hhbmdlIHlvdSBmb3JldmVyIVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2xvc2VcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLiRtb2RhbC5jbG9zZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIkJvdHRvbU5hdmlnYXRpb25cIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJUYWJTdHJpcFwiLFxuICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2aWdhdGlvbl9faXRlbVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIkhvbWVcIiB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgdC0zNlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwic3JjLmRlY29kZVwiOiBcImZvbnQ6Ly8mI3hmMDE1O1wiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdmlnYXRpb25fX2l0ZW1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJTY2hlZHVsZVwiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyB0LTM2XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJzcmMuZGVjb2RlXCI6IFwiZm9udDovLyYjeGYwNzM7XCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2aWdhdGlvbl9faXRlbVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIlNwb25zb3JzXCIgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIHQtMzZcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcInNyYy5kZWNvZGVcIjogXCJmb250Oi8vJiN4ZjJiYjtcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXZpZ2F0aW9uX19pdGVtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiVHJhaWxzXCIgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIHQtMzZcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcInNyYy5kZWNvZGVcIjogXCJmb250Oi8vJiN4ZjI3OTtcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXZpZ2F0aW9uX19pdGVtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiRGlyZWN0b3JzXCIgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIHQtMzZcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcInNyYy5kZWNvZGVcIjogXCJmb250Oi8vJiN4ZjAwNztcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwiVGFiQ29udGVudEl0ZW1cIiwgW19jKFwiRnJhbWVcIiwgW19jKFwiSG9tZVwiKV0sIDEpXSwgMSksXG4gICAgICBfYyhcIlRhYkNvbnRlbnRJdGVtXCIsIFtfYyhcIkZyYW1lXCIsIFtfYyhcIlNjaGVkdWxlXCIpXSwgMSldLCAxKSxcbiAgICAgIF9jKFwiVGFiQ29udGVudEl0ZW1cIiwgW19jKFwiRnJhbWVcIiwgW19jKFwiU3BvbnNvcnNcIildLCAxKV0sIDEpLFxuICAgICAgX2MoXCJUYWJDb250ZW50SXRlbVwiLCBbX2MoXCJGcmFtZVwiLCBbX2MoXCJUcmFpbHNcIildLCAxKV0sIDEpLFxuICAgICAgX2MoXCJUYWJDb250ZW50SXRlbVwiLCBbX2MoXCJGcmFtZVwiLCBbX2MoXCJEaXJlY3RvcnNcIildLCAxKV0sIDEpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJob21lLXBhbmVsXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmRpcmVjdG9yLmltYWdlc3JjIH0gfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGlySW5mb1wiLCBhdHRyczogeyBjb2x1bW5zOiBcIjE0MCwyMCwqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkaXJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5kaXJlY3Rvci5uYW1lLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpckl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCI6XCIsIGNvbDogXCIxXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGlybmFtZVJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5kaXJlY3Rvci50aXRsZSwgY29sOiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpckluZm9cIiwgYXR0cnM6IHsgY29sdW1uczogXCI2MCwyMCwqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkaXJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUGhvbmVcIiwgY29sOiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkaXJJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiOlwiLCBjb2w6IFwiMVwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpclJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5kaXJlY3Rvci5waG9uZTEsIGNvbDogXCIyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYWxsKF92bS5kaXJlY3Rvci5waG9uZTEpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpckluZm9cIiwgYXR0cnM6IHsgY29sdW1uczogXCI2MCwyMCwqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkaXJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRW1haWxcIiwgY29sOiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIjpcIiwgY29sOiBcIjFcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpclJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5kaXJlY3Rvci5lbWFpbCwgY29sOiBcIjJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbmQoX3ZtLmRpcmVjdG9yLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmlvLXBhbmVsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5kaXJlY3Rvci5iaW8sXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS4kbW9kYWwuY2xvc2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyXCIsXG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIkNvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnNcIiB9XG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1wYW5lbFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWRlci1sYWJlbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiLCB0ZXh0OiBcIk91ciBEaXJlY3RvcnMgZm9yIFRoaXMgWWVhclwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQWJvdXQgT3VyIERpcmVjdG9yc1wiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkFib3V0VGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1wYW5lbFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmRpcmVjdG9ycyxcbiAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcImRpcmVjdG9yXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdG9yID0gcmVmLmRpcmVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiMTAwLCpcIiwgXCIsXCI6IFwiXCIsIHJvd3M6IFwiKlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogZGlyZWN0b3IuaW1hZ2VzcmMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI3MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpcmVjdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRpcmVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHRpdGxlOiBcIkNvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnNcIixcbiAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaG9tZVBhbmVsXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIn4vaW1hZ2VzL2xvZ28ucG5nXCIsIGhlaWdodDogXCIyMDBcIiwgd2lkdGg6IFwiMjAwXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgXCJUaGlzIEFwcCB3aWxsIGtlZXAgeW91IHVwZGF0ZWQgb24gdGhlIGFjdGl2aXRpZXMsIGRpcmVjdG9ycywgc3BvbnNvcnMgYW5kIHRyYWlscyBmb3IgdGhlIENvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnMgY2x1YlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvbWVQYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGVpZ2h0OiBcIjE2MFwiLCBpdGVtczogX3ZtLm1pc2MsIFwiK2FsaWFzXCI6IFwiaXRlbVwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJlZC1tZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogaXRlbS5tb3RkLCB0ZXh0V3JhcDogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFib3V0IFVzXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkFib3V0VXNUYXAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyXCIsXG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIkNvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnNcIiB9XG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1wYW5lbFwiLCBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWFkZXItbGFiZWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogXCJPdXIgU2NoZWR1bGVcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFib3V0IFRoZSBTY2hlZHVsZVwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkFib3V0VGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1wYW5lbFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmV2ZW50cyxcbiAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcImV2ZW50XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gcmVmLmV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiYXV0bywqXCIsIHJvd3M6IFwiKiwqXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBldmVudC5pbWFnZVNyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYW46IFwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXZlbnQxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGV2ZW50LmV2ZW50RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXZlbnQyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGV2ZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJob21lLXBhbmVsXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmV2ZW50LmltYWdlU3JjIH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFkZCB0byBNeSBDYWxlbmRhclwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkVG9DYWxlbmRhcihfdm0uZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mby1wYW5lbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5ldmVudC5uYW1lIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImluZm8tcGFuZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uZXZlbnQuZ3JvdXAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mby1wYW5lbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5ldmVudC5ldmVudERhdGUsIHRleHR3cmFwOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiOTAsICpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25MZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTWVldCBhdDogXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BvblJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmV2ZW50Lm1lZXRBdCxcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRhcEFkZHIoX3ZtLmV2ZW50Lm1lZXRBdClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCI5MCwgKlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BvbkxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJNZWV0IHRpbWU6IFwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25uYW1lUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uZXZlbnQubWVldFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIjkwLCAqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcG9uTGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlJhdGluZzogXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3Bvbm5hbWVSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5ldmVudC5yYXRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIjkwLCAqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcG9uTGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxlYWRlcnM6IFwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbDogXCIxXCIsIGNvbHVtbnM6IFwiKiwqLCpcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25SaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmV2ZW50LmxlYWRlcjEsIGNvbDogXCIwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYWxsKF92bS5ldmVudC5sZWFkZXIxUGhvbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25SaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmV2ZW50LmxlYWRlcjIsIGNvbDogXCIxXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYWxsKF92bS5ldmVudC5sZWFkZXIyUGhvbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25SaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmV2ZW50LmxlYWRlcjMsIGNvbDogXCIyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYWxsKF92bS5ldmVudC5sZWFkZXIzUGhvbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vdGQtbGFiZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmV2ZW50LmRlc2MsXG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2xvc2VcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLiRtb2RhbC5jbG9zZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3BvblBhbmVsXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLnNwb25zb3IuaW1hZ2VzcmMgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWRkci1wYW5lbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5zcG9uc29yLmFkZHJlc3MsIHRleHRXcmFwOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRhcEFkZHIoX3ZtLnNwb25zb3IuYWRkcmVzcylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiMTAwLCAqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsZWZ0Q29sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiICAgQ29udGFjdDogXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmlnaHRDb2xOb1VMXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnNwb25zb3IuY29udGFjdCxcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiMTAwLCAqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsZWZ0Q29sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUGhvbmU6IFwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJpZ2h0Q29sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnNwb25zb3IucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYWxsKF92bS5zcG9uc29yLnBob25lKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIjEwMCwgKlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGVmdENvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkVNYWlsOiBcIiwgY29sOiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyaWdodENvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5zcG9uc29yLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dHdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VuZChfdm0uc3BvbnNvci5lbWFpbClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIxMDAsICpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxlZnRDb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJXZWJTaXRlOiBcIiwgY29sOiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyaWdodENvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5zcG9uc29yLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5hdlRvKF92bS5zcG9uc29yLnVybClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJlZC1tZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNwb25zb3IuYmlvLCB0ZXh0V3JhcDogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2xvc2VcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLiRtb2RhbC5jbG9zZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIixcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNC1XaGVlbGVyc1wiIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LXBhbmVsXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVhZGVyLWxhYmVsXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IFwiT3VyIFNwb25zb3JzXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBYm91dCBPdXIgU3BvbnNvcnNcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25BYm91dFRhcCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtcGFuZWxcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5zcG9uc29ycyxcbiAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcInNwb25zb3JcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BvbnNvciA9IHJlZi5zcG9uc29yXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiMjAwLCpcIiwgXCIsXCI6IFwiXCIsIHJvd3M6IFwiKiwqXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBzcG9uc29yLmltYWdlc3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTUwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3RSaWdodEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogc3BvbnNvci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaG9tZS1wYW5lbFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IF92bS50cmFpbC5pbWFnZXNyYyB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbmZvLXBhbmVsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnRyYWlsLm5hbWUgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIjkwLCAqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcG9uTGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlRyYWlsaGVhZDogXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BvblJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnRyYWlsLmNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udGFwQWRkcihfdm0udHJhaWwuY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiOTAsICpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25MZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRGlmZmljdWx0eTogXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3Bvbm5hbWVSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS50cmFpbC5kaWZmaWN1bHR5LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCI5MCwgKlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BvbkxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJGdW5UcmVrczogXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BvblJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnRyYWlsLmZ1bnRyZXgsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZUbyhfdm0udHJhaWwuZnVudHJleClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCI5MCwgKlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BvbkxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDb1RyZXg6IFwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25SaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS50cmFpbC5jb3RyZXgsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZUbyhfdm0udHJhaWwuY290cmV4KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW90ZC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0udHJhaWwuZGVzYyxcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDbG9zZVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uJG1vZGFsLmNsb3NlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiLFxuICAgICAgICBhdHRyczogeyB0aXRsZTogXCJDb2xvcmFkbyBTcHJpbmdzIENocmlzdGlhbiA0LVdoZWVsZXJzXCIgfVxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtcGFuZWxcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWFkZXItbGFiZWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogXCJUcmFpbHNcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFib3V0IFRoZSBUcmFpbHNcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25UcmFpbHNUYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LXBhbmVsXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udHJhaWxzLFxuICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwidHJhaWxcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhaWwgPSByZWYudHJhaWxcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIxNTAsKlwiLCBcIixcIjogXCJcIiwgcm93czogXCIqLCpcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHRyYWlsLmltYWdlc3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3RSaWdodEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdHJhaWwubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfGt0fCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFjdGlvbi1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMTMxZDRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmNkOTA1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaGVhZGVyLWxhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZGIxOTIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJXaGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc3R5bGVcIixcInZhbHVlXCI6XCJpdGFsaWNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucmVkLW1lc3NhZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNkYjE5MjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zdHlsZVwiLFwidmFsdWVcIjpcIml0YWxpY1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5saXN0LXBhbmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzEzMWQ0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5saW5lU2VwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5sZWZ0Q29sXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcInJpZ2h0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMTMxZDRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJpZ2h0Q29sXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWRlY29yYXRpb25cIixcInZhbHVlXCI6XCJ1bmRlcmxpbmVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxMzFkNGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucmlnaHRDb2xOb1VMXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxMzFkNGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubGlzdFJpZ2h0SXRlbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcblxuXG5uZXcgVnVlKHtcbiAgXG4gIHJlbmRlcjogaCA9PiBoKEFwcClcbn0pLiRzdGFydCgpXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fib3V0RGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMWMxOTMxNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BYm91dERpcmVjdG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Fib3V0RGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BYm91dERpcmVjdG9ycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcbmF0aXZlc2NyaXB0XFxcXGNzYzR3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzExYzE5MzE2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzExYzE5MzE2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzExYzE5MzE2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BYm91dERpcmVjdG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTFjMTkzMTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTFjMTkzMTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvQWJvdXREaXJlY3RvcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0RGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0RGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXREaXJlY3RvcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXREaXJlY3RvcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXREaXJlY3RvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTExYzE5MzE2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BYm91dFNjaGVkdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lM2M5OGMwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BYm91dFNjaGVkdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWJvdXRTY2hlZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQWJvdXRTY2hlZHVsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcbmF0aXZlc2NyaXB0XFxcXGNzYzR3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2UzYzk4YzBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2UzYzk4YzBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2UzYzk4YzBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BYm91dFNjaGVkdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lM2M5OGMwZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlM2M5OGMwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9BYm91dFNjaGVkdWxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFNjaGVkdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0U2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFNjaGVkdWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0U2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRTY2hlZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTNjOThjMGUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fib3V0U3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM0MWUzMjBhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fib3V0U3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BYm91dFNwb25zb3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BYm91dFNwb25zb3JzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzQxZTMyMGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzQxZTMyMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzQxZTMyMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fib3V0U3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM0MWUzMjBhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM0MWUzMjBhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0Fib3V0U3BvbnNvcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0U3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRTcG9uc29ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0U3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRTcG9uc29ycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFNwb25zb3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDFlMzIwYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWJvdXRUcmFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM2ODc3M2UyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fib3V0VHJhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWJvdXRUcmFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Fib3V0VHJhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzY4NzczZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzY4NzczZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzY4NzczZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fib3V0VHJhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNjg3NzNlMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjNjg3NzNlMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9BYm91dFRyYWlscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRUcmFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRUcmFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFRyYWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFRyYWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFRyYWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzY4NzczZTImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fib3V0VXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3MWJkYTAwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fib3V0VXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BYm91dFVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BYm91dFVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzcxYmRhMDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzcxYmRhMDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzcxYmRhMDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fib3V0VXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3MWJkYTAwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM3MWJkYTAwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0Fib3V0VXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0VXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRVcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0VXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRVcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzFiZGEwMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcbmF0aXZlc2NyaXB0XFxcXGNzYzR3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ1YmE1ZWQ0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ1YmE1ZWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ1YmE1ZWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ1YmE1ZWQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGlyZWN0b3JEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hN2JhZGNlYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EaXJlY3RvckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EaXJlY3RvckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0RpcmVjdG9yRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hN2JhZGNlYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTdiYWRjZWFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTdiYWRjZWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTdiYWRjZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTdiYWRjZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0RpcmVjdG9yRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTdiYWRjZWEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTdiYWRjZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvRGlyZWN0b3JEZXRhaWxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXJlY3RvckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlyZWN0b3JEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlyZWN0b3JEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3YmFkY2VhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RpcmVjdG9yRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hN2JhZGNlYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXJlY3RvckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3YmFkY2VhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EaXJlY3RvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkyMmYyZmM4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0RpcmVjdG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0RpcmVjdG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkyMmYyZmM4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5MjJmMmZjOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXG5hdGl2ZXNjcmlwdFxcXFxjc2M0d1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5MjJmMmZjOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5MjJmMmZjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5MjJmMmZjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MjJmMmZjOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MjJmMmZjOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9EaXJlY3RvcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RpcmVjdG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXJlY3RvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXJlY3RvcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTIyZjJmYzgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkyMmYyZmM4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RpcmVjdG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTIyZjJmYzgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NzQxMGYzYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXG5hdGl2ZXNjcmlwdFxcXFxjc2M0d1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzQxMGYzYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2Emc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc0MTBmM2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TY2hlZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjFiYzkxMWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TY2hlZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjFiYzkxMWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjIxYmM5MTFjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcbmF0aXZlc2NyaXB0XFxcXGNzYzR3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIxYmM5MTFjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIxYmM5MTFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIxYmM5MTFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TY2hlZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjFiYzkxMWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjFiYzkxMWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvU2NoZWR1bGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjFiYzkxMWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjFiYzkxMWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIxYmM5MTFjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TY2hlZHVsZURldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzM2IwZGEwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NjaGVkdWxlRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NjaGVkdWxlRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2NoZWR1bGVEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAzM2IwZGEwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwMzNiMGRhMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXG5hdGl2ZXNjcmlwdFxcXFxjc2M0d1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMzNiMGRhMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMzNiMGRhMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMzNiMGRhMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2NoZWR1bGVEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMzNiMGRhMCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMzNiMGRhMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9TY2hlZHVsZURldGFpbHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY2hlZHVsZURldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY2hlZHVsZURldGFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDMzYjBkYTAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGVEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAzM2IwZGEwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDMzYjBkYTAmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nwb25zb3JEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjI4ZWJlMyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TcG9uc29yRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nwb25zb3JEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TcG9uc29yRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YjI4ZWJlMyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGIyOGViZTNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGIyOGViZTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGIyOGViZTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGIyOGViZTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nwb25zb3JEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjI4ZWJlMyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YjI4ZWJlMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9TcG9uc29yRGV0YWlscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3BvbnNvckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3BvbnNvckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TcG9uc29yRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YjI4ZWJlMyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TcG9uc29yRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YjI4ZWJlMyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TcG9uc29yRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGIyOGViZTMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nwb25zb3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmY3NjQ3NCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TcG9uc29ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nwb25zb3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDZmNzY0NzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDZmNzY0NzQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDZmNzY0NzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDZmNzY0NzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nwb25zb3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmY3NjQ3NCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NmY3NjQ3NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9TcG9uc29ycy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nwb25zb3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmY3NjQ3NCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVHJhaWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGRmZjM5MiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UcmFpbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UcmFpbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RyYWlsRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGRmZjM5MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTRkZmYzOTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTRkZmYzOTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTRkZmYzOTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTRkZmYzOTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RyYWlsRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTRkZmYzOTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTRkZmYzOTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvVHJhaWxEZXRhaWxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UcmFpbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVHJhaWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVHJhaWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE0ZGZmMzkyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RyYWlsRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGRmZjM5MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UcmFpbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0ZGZmMzkyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UcmFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhMDVjZGM4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RyYWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RyYWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVHJhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJhMDVjZGM4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYTA1Y2RjOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXG5hdGl2ZXNjcmlwdFxcXFxjc2M0d1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyYTA1Y2RjOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYTA1Y2RjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYTA1Y2RjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVHJhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYTA1Y2RjOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyYTA1Y2RjOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9UcmFpbHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RyYWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UcmFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UcmFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmEwNWNkYzgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVHJhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJhMDVjZGM4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RyYWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmEwNWNkYzgmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9