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
    }).catch(error => {
      console.log("Error caught " + error);
      this.$showModal(NoConnect);
    }), error => {
      console.log("Error " + error);
    };
  }
});

/***/ }),

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
      //console.log("Result is " + result.statusText);
      this.misc = result.data.misc; //console.log("result is " + JSON.stringify(result.data.misc);
    }).catch(error => {
      //console.log("Error caught " + error);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
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
    }).catch(error => {
      console.log("Error caught " + error);
      this.$showModal(NoConnect);
    }), error => {
      console.log("Error " + error);
    };
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
    }).catch(error => {
      console.log("Error caught " + error);
      this.$showModal(NoConnect);
    }), error => {
      console.log("Error " + error);
    };
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
    }).catch(error => {
      console.log("Error caught " + error);
      this.$showModal(NoConnect);
    }), error => {
      console.log("Error " + error);
    };
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

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/NoConnect.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.about-panel {\n    color: white;\n    font-size: 18;\n    padding: 15;\n    background-color: #131d4e;\n}\n\n", ""]);


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
                    "This application requires connectivity to the internet in order to show data on the tabs.  Please connect to the internet and close and reopen the app.\n                    \nNote that a small of data will be transmitted and a data charge may apply."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BYm91dERpcmVjdG9ycy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWJvdXRTY2hlZHVsZS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWJvdXRTcG9uc29ycy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQWJvdXRUcmFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0Fib3V0VXMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRGlyZWN0b3JEZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9EaXJlY3RvcnMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL05vQ29ubmVjdC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvU2NoZWR1bGUudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1NjaGVkdWxlRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvU3BvbnNvckRldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1Nwb25zb3JzLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9UcmFpbERldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1RyYWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dERpcmVjdG9ycy52dWU/MTUyMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0U2NoZWR1bGUudnVlP2QyNzkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFNwb25zb3JzLnZ1ZT9iZGI3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRUcmFpbHMudnVlP2YxZWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFVzLnZ1ZT8zZjE3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT82MjEyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGlyZWN0b3JEZXRhaWxzLnZ1ZT8yMmQwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGlyZWN0b3JzLnZ1ZT8xN2QzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/YzExNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vQ29ubmVjdC52dWU/NTExYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NjaGVkdWxlLnZ1ZT9jNDhlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGVEZXRhaWxzLnZ1ZT84NzU4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BvbnNvckRldGFpbHMudnVlP2IyY2MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFpbERldGFpbHMudnVlPzg2N2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFpbHMudnVlP2JhYjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dERpcmVjdG9ycy52dWU/MjAyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0U2NoZWR1bGUudnVlP2U1M2QiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFNwb25zb3JzLnZ1ZT9kYzM3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRUcmFpbHMudnVlP2RjN2QiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFVzLnZ1ZT85Y2Q2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT83YjBlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGlyZWN0b3JEZXRhaWxzLnZ1ZT8yMmI2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGlyZWN0b3JzLnZ1ZT8wMTdkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NDk5ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vQ29ubmVjdC52dWU/MjU2OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NjaGVkdWxlLnZ1ZT8wN2JiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGVEZXRhaWxzLnZ1ZT80YzAxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BvbnNvckRldGFpbHMudnVlPzU2NWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcG9uc29ycy52dWU/ZGU3OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYWlsRGV0YWlscy52dWU/NDQwYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYWlscy52dWU/N2I3NCIsIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dERpcmVjdG9ycy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dERpcmVjdG9ycy52dWU/ZGM5NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0RGlyZWN0b3JzLnZ1ZT9hNzYwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXREaXJlY3RvcnMudnVlPzVlNjciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFNjaGVkdWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0U2NoZWR1bGUudnVlP2VhMmUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFNjaGVkdWxlLnZ1ZT8yNThmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRTY2hlZHVsZS52dWU/NjhiYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0U3BvbnNvcnMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRTcG9uc29ycy52dWU/NjBmMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0U3BvbnNvcnMudnVlPzIyODIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFNwb25zb3JzLnZ1ZT9kYTk4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRUcmFpbHMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRUcmFpbHMudnVlPzZmODYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFRyYWlscy52dWU/ZWNkNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0VHJhaWxzLnZ1ZT8wNDAxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRVcy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFVzLnZ1ZT9lYzNiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRVcy52dWU/N2VjMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0VXMudnVlPzYxYzYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT85ZTIzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT9hMjVhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT9iMzc3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGlyZWN0b3JEZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RpcmVjdG9yRGV0YWlscy52dWU/MjE5OSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RpcmVjdG9yRGV0YWlscy52dWU/YjE4YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RpcmVjdG9yRGV0YWlscy52dWU/MGMwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RpcmVjdG9ycy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaXJlY3RvcnMudnVlPzRhNDciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaXJlY3RvcnMudnVlPzBjNzUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaXJlY3RvcnMudnVlP2M2Y2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzU2MjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT9lNzFmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/MmMzNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vQ29ubmVjdC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob0Nvbm5lY3QudnVlP2NlNzEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob0Nvbm5lY3QudnVlP2QyNWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob0Nvbm5lY3QudnVlP2M5MDAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZS52dWU/NmMxZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NjaGVkdWxlLnZ1ZT9kNjk0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGUudnVlPzhmNjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZURldGFpbHMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGVEZXRhaWxzLnZ1ZT8yZWIwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGVEZXRhaWxzLnZ1ZT9lOGQ0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGVEZXRhaWxzLnZ1ZT84NzIxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BvbnNvckRldGFpbHMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BvbnNvckRldGFpbHMudnVlPzk5MjgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcG9uc29yRGV0YWlscy52dWU/ZWVkNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb25zb3JEZXRhaWxzLnZ1ZT81YjlmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BvbnNvcnMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BvbnNvcnMudnVlPzJjNzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcG9uc29ycy52dWU/ZWQxMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYWlsRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFpbERldGFpbHMudnVlPzJkMWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFpbERldGFpbHMudnVlP2MwZmUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFpbERldGFpbHMudnVlPzI4MDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmFpbHMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhaWxzLnZ1ZT83MWQxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhaWxzLnZ1ZT8wYzdlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJhaWxzLnZ1ZT8yY2Q1Il0sIm5hbWVzIjpbIkFwcCIsIlZ1ZSIsInJlbmRlciIsImgiLCIkc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNTQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLDJEQURBO0FBRUEsbUVBRkE7QUFHQSxtRUFIQTtBQUlBLCtEQUpBO0FBS0E7QUFMQTtBQURBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFFQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEEsR0FGQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FMQTs7QUFPQTtBQUNBLHlCQURBLENBRUE7O0FBQ0E7QUFDQSwwQ0FEQTtBQUVBLHFCQUZBO0FBR0E7QUFIQSxTQUlBLElBSkEsQ0FLQSxhQUNBO0FBQ0EsT0FQQSxFQU9BLGdCQUNBO0FBQ0EsT0FUQTtBQVdBOztBQXJCQTtBQVBBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBa0hBLEdBckhBO0FBdUhBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBSEEsQ0FJQTs7QUFDQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSx3QkFGQTtBQUdBO0FBQ0EsMkJBREE7QUFFQSx5QkFGQTtBQUdBO0FBSEE7QUFIQTtBQURBO0FBV0EsS0FsQkE7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBOztBQXRCQSxHQXZIQTtBQWlKQTtBQUNBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsSUFEQSxDQUNBO0FBQ0EsNkNBREEsQ0FFQTtBQUNBLEtBSkEsRUFLQSxLQUxBLENBS0E7QUFDQTtBQUNBO0FBQ0EsS0FSQSxHQVFBO0FBQ0E7QUFDQSxLQVZBO0FBV0E7QUE3SkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSUEsR0FQQTtBQVNBO0FBQ0E7QUFEQSxHQVRBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQSxHQWJBO0FBcUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUEsT0FDQSxJQURBLENBQ0E7QUFDQTtBQUNBLG1DQUZBLENBR0E7QUFDQSxLQUxBLEVBTUEsS0FOQSxDQU1BO0FBQ0E7QUFDQTtBQUNBLEtBVEEsR0FTQTtBQUNBO0FBQ0EsS0FYQTtBQVlBO0FBbENBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0dBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFrYUEsR0FyYUE7QUF1YUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FIQSxDQUlBOztBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLHdC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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiQWJvdXQgT3VyIERpcmVjdG9yc1wiIC8+XHJcbiAgICAgICAgPFNjcm9sbFZpZXcgYmFja2dyb3VuZD1cIiMxMzFkNGVcIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiYWJvdXQtcGFuZWxcIiB0ZXh0V3JhcD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJPdXIgRGlyZWN0b3JzIGFyZSByZXNwb25zaWJsZSBmb3IgbWFuYWdpbmcgdGhlIGNsdWIsIHNjaGVkdWxpbmcgb3VyIHRyaXBzIGFuZCBtZWV0aW5ncyBhbmQgbGVhZGluZyB0aGUgdHJhaWwgcnVucy4gIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5UaGVpciBwYXJ0aWNpcGF0aW9uIGlzIHZvbHVudGFyeSBhbmQgbm8gRGlyZWN0b3IgaXMgcGFpZC5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBAdGFwPVwiJG1vZGFsLmNsb3NlXCIgdGV4dD1cIkNsb3NlXCIgY2xhc3M9XCJidXR0b25cIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmFib3V0LXBhbmVsIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgcGFkZGluZzogMTU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkFib3V0IFRoZSBTY2hlZHVsZVwiIC8+XHJcbiAgICAgICAgPFNjcm9sbFZpZXcgYmFja2dyb3VuZD1cIiMxMzFkNGVcIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiYWJvdXQtcGFuZWxcIiB0ZXh0V3JhcD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJUaGlzIGlzIHRoZSBzY2hlZHVsZSBmb3IgdHJpcHMgYXMgb2YgQXByaWwgMTV0aC4gIEl0IGlzIHBvc3NpYmxlIHRoYXQgTWF5IDl0aCBldmVudHMgd2lsbCBjaGFuZ2Ugb3IgY2FuY2VsIGFsdG9nZXRoZXIgZGVwZW5kaW5nIG9uIHBhcnRpY2lwYXRpb24gb2Ygb3VyIHNwb25zb3JzLlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5XYXRjaCBmb3Igc3RhdHVzIHVwZGF0ZSBvbiBldmVudHMgYXMgdGhlIHNjaGVkdWxlIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGUgQ09WSUQtMTkgc2l0dWF0aW9uIGFuZCBhbHNvIGJlY2F1c2Ugb2YgdHJhaWwgY29uZGl0aW9ucy5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBAdGFwPVwiJG1vZGFsLmNsb3NlXCIgdGV4dD1cIkNsb3NlXCIgY2xhc3M9XCJidXR0b25cIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmFib3V0LXBhbmVsIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgcGFkZGluZzogMTU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkFib3V0IE91ciBTcG9uc29yc1wiIC8+XHJcbiAgICAgICAgPFNjcm9sbFZpZXcgYmFja2dyb3VuZD1cIiMxMzFkNGVcIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiYWJvdXQtcGFuZWxcIiB0ZXh0V3JhcD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJPdXIgU3BvbnNvcnMgaGVscCB1cyB0byBrZWVwIG91ciBtZW1iZXJzaGlwIGR1ZXMgbG93LiAgVGhleSBkb25hdGUgcHJpemVzIGZvciBvdXIgZ2l2ZWF3YXkgYXQga2ljayBvZmYsIHRoZXkgcHJvdmlkZSBtZWFscyBmb3Igc29tZSBldmVudHMgYW5kIGluIHNvbWUgY2FzZXMgcHJvdmlkZSB1cyBkb25hdGlvbnMgdG8gcGF5IGZvciBjbHViIHNwb25zb3JlZCBldmVudHMuICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuWW91IGNhbiBzaG93IHlvdXIgYXBwcmVjaWF0aW9uIGZvciB0aGVpciBzcG9uc29yaGlwIGJ5IG1lbnRpb25pbmcgdGhlIGNsdWIgd2hlbiB5b3UgdmlzaXQgdGhlbS5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBAdGFwPVwiJG1vZGFsLmNsb3NlXCIgdGV4dD1cIkNsb3NlXCIgY2xhc3M9XCJidXR0b25cIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmFib3V0LXBhbmVsIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJBYm91dCBUaGUgVHJhaWxzXCIgLz5cclxuICAgICAgICA8U2Nyb2xsVmlldyBiYWNrZ3JvdW5kPVwiIzEzMWQ0ZVwiPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJhYm91dC1wYW5lbFwiIHRleHRXcmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlRoZXNlIGFyZSB0aGUgdHJhaWxzIHRoYXQgd2UgaGF2ZSB0cmF2ZWxlZCBpbiB0aGUgcGFzdCBvciB3aWxsIHRyYXZlbCB0aGlzIHNlYXNvbi4gIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5UcmFpbHMgd2lsbCBiZSBhZGRlZCBoZXJlIGFzIHdlIHJ1biB0aGVtIGluIHRoZSBmdXR1cmUuICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuSW4gdGhlIGRldGFpbHMgZm9yIGVhY2ggdHJhaWwgdGhlcmUgaXMgYSBsaW5rIHRvIGluZm9ybWF0aW9uIGFib3V0IHRoZSB0cmFpbCBmcm9tIG91ciBzcG9uc29yIEZ1bnRyZWtzLiAgQWxzbywgd2UgaW5jbHVkZWQgYSBDT1RSRVggbGluayB0aGF0IHdpbGwgc2hvdyB5b3Ugd2hlcmUgdGhlIHRyYWlsIGlzLiAgVGhlIHRyYWlsaGVhZCBjb29yZGluYXRlcyBhcmUgZGVyaXZlZCBmcm9tIGdvb2dsZSBtYXBzIGJ1dCBzaG91bGQgYmUgZmFpcmx5IGFjY3VyYXRlLiAgVHJhaWwgcmF0aW5ncyBoZXJlIGFyZSBiYXNlZCBvbiBGdW5UcmVrcyByYXRpbmdzLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIEB0YXA9XCIkbW9kYWwuY2xvc2VcIiB0ZXh0PVwiQ2xvc2VcIiBjbGFzcz1cImJ1dHRvblwiIC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAuYWJvdXQtcGFuZWwge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJBYm91dCBDU0M0V1wiIC8+XHJcbiAgICAgICAgPFNjcm9sbFZpZXcgYmFja2dyb3VuZD1cIiMxMzFkNGVcIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2xvZ28ucG5nXCIgaGVpZ2h0PVwiMjAwXCIgd2lkdGg9XCIyMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiYWJvdXQtcGFuZWxcIiB0ZXh0V3JhcD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJDb2xvcmFkbyBTcHJpbmdzIENocmlzdGlhbiA0IFdoZWVsZXJzLCBJbmMuLCBleGlzdHMgYXMgYSBjbHViIHRvIGFsbG93IGZvciB3b25kZXJmdWwgdGltZXMgdG9nZXRoZXIgaW4gb2ZmLXJvYWQgYWN0aXZpdGllcyB3aXRoIGZlbGxvdyBiZWxpZXZlcnMuIFRoZSBhc3NvY2lhdGlvbiBiZWdhbiBpbiB0aGUgc3ByaW5nIG9mIDE5OTMuIFxyXG5cclxuT3VyIHBoaWxvc29waHkgaW5jbHVkZXMgdGhlIGJlbGllZiB0aGF0IHdlIGFyZSB0byBpbnZpdGUgb3VyIG5laWdoYm9ycyBhbmQgY28td29ya2VycyB0byBqb2luIHdpdGggdXMgaW4gYW55IG9mIG91ciBldmVudHMgc28gdGhhdCB3ZSBhcmUgaW52b2x2ZWQgaW50ZW50aW9uYWxseSBpbiByZWFjaGluZyBvdXQgdG8gb3RoZXIgbWVtYmVycyBvZiBvdXIgY29tbXVuaXR5LiBcclxuXHJcbkFzIENocmlzdGlhbnMgd2UgZGVzaXJlIHRvIGFsd2F5cyB1cGhvbGQgdGhlIGxhdyBpbiByZWdhcmRzIHRvIHN1Y2ggdGhpbmdzIGFzOiBvYmV5aW5nIHRoZSBzcGVlZCBsaW1pdCwgc3RheWluZyBjbGVhciBvZiBubyB0cmVzcGFzc2luZyBvciBwb3N0ZWQgYXJlYXMsIHN0YXlpbmcgb24gdGhlIHRyYWlsIHdoZW4gc28gbWFya2VkLCBwYWNraW5nIGl0IGluIGFuZCBwYWNraW5nIGl0IGFsbCBvdXQsIGFkaGVyaW5nIHRvIHRoZSBuYXRpb25hbCBUcmVhZCBMaWdodGx5IHByb2dyYW0gYW5kIHN0YXRlIG9yZ2FuaXphdGlvbiBvZiA0V0QgY2x1YnMsIGV0Yy4gXHJcblxyXG5PdXIgZGVzaXJlIGlzIHRvIGhlbHAgZWFjaCBvdGhlciBhbmQgb3VyIGZlbGxvdyBtYW4gYXQgYWxsIHRpbWVzLiBXZSB3YW50IHRvIGJlIG1vZGVsIG9mZi1yb2FkZXJzLiBcclxuXHJcbkdvZCBoYXMgY3JlYXRlZCBhIG1pZ2h0eSB3b3JrIG9mIGFydCBpbiB0aGUgUm9ja3kgTW91bnRhaW5zLiBFdmVyeSBDaHJpc3RpYW4gbmVlZHMgdG8gYmUgYmFsYW5jZWQgaW4gbGlmZSB3aXRoIGhpcyBzcGlyaXR1YWwgc2VsZiwgaGlzIGZhbWlseSwgaGlzIHdvcmssIGFuZCBoaXMgcmVjcmVhdGlvbmFsIGFjdGl2aXRpZXMuIFxyXG5cclxuTWljYWggNDoyIHNheXMsIENvbWUsIGxldCB1cyBnbyB1cCB0byB0aGUgbW91bnRhaW5zLiBcclxuXHJcbldlIGFsbCBuZWVkIHRpbWVzIG9mIHJlZnJlc2hpbmc7IHRoZSBtb3VudGFpbnMsIHN0cmVhbXMsIGFuZCB3b29kZWQgaGlsbHMgcmVtaW5kIHVzIG9mIHRoZSBwcm9taXNlcyBvZiBHb2QgYW5kIG9mIGhvdyBmYWl0aGZ1bGx5IEhlIHByb3ZpZGVzLiBMZXRzIGdvIHVwIC0tIGFuZCBzZWUgaXQsIGhlYXIgaXQsIGJyZWF0aGUgaXQgaW4sIGFuZCBtb3N0IG9mIGFsbCwgZmVlbCBpdCBhbmQgZXhwZXJpZW5jZSBpdC4gV2hvIGtub3dzPyBJdCBtYXkgaGVscCBjaGFuZ2UgeW91IGZvcmV2ZXIhXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gQHRhcD1cIiRtb2RhbC5jbG9zZVwiIHRleHQ9XCJDbG9zZVwiIGNsYXNzPVwiYnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5hYm91dC1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8Qm90dG9tTmF2aWdhdGlvbj5cbiAgICAgICAgPFRhYlN0cmlwIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVwibmF2aWdhdGlvbl9faXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiSG9tZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYy5kZWNvZGU9XCJmb250Oi8vJiN4ZjAxNTtcIiBjbGFzcz1cImZhcyB0LTM2XCI+PC9JbWFnZT5cbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cIm5hdmlnYXRpb25fX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlNjaGVkdWxlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjLmRlY29kZT1cImZvbnQ6Ly8mI3hmMDczO1wiIGNsYXNzPVwiZmFzIHQtMzZcIj48L0ltYWdlPlxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVwibmF2aWdhdGlvbl9faXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiU3BvbnNvcnNcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmMuZGVjb2RlPVwiZm9udDovLyYjeGYyYmI7XCIgY2xhc3M9XCJmYXMgdC0zNlwiPjwvSW1hZ2U+XG4gICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XCJuYXZpZ2F0aW9uX19pdGVtXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJUcmFpbHNcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmMuZGVjb2RlPVwiZm9udDovLyYjeGYyNzk7XCIgY2xhc3M9XCJmYXMgdC0zNlwiPjwvSW1hZ2U+XG4gICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XCJuYXZpZ2F0aW9uX19pdGVtXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJEaXJlY3RvcnNcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmMuZGVjb2RlPVwiZm9udDovLyYjeGYwMDc7XCIgY2xhc3M9XCJmYXMgdC0zNlwiPjwvSW1hZ2U+XG4gICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgPC9UYWJTdHJpcD4gIFxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+ICBcbiAgICAgICAgICAgIDxGcmFtZT5cbiAgICAgICAgICAgICAgICA8SG9tZSAvPlxuICAgICAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cblxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICAgICAgPFNjaGVkdWxlIC8+IFxuICAgICAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cblxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICAgICAgPFNwb25zb3JzIC8+XG4gICAgICAgICAgICA8L0ZyYW1lPlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuXG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgIDxGcmFtZT5cbiAgICAgICAgICAgICAgICA8VHJhaWxzIC8+XG4gICAgICAgICAgICA8L0ZyYW1lPlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuXG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgIDxGcmFtZT5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3JzIC8+XG4gICAgICAgICAgICA8L0ZyYW1lPlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuXG4gICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWUudnVlXCI7ICBcbmltcG9ydCBTY2hlZHVsZSBmcm9tIFwiLi9TY2hlZHVsZS52dWVcIjtcbmltcG9ydCBTcG9uc29ycyBmcm9tIFwiLi9TcG9uc29ycy52dWVcIjtcbmltcG9ydCBUcmFpbHMgZnJvbSBcIi4vVHJhaWxzLnZ1ZVwiO1xuaW1wb3J0IERpcmVjdG9ycyBmcm9tIFwiLi9EaXJlY3RvcnMudnVlXCI7ICBcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgSG9tZSxcbiAgICBTY2hlZHVsZSxcbiAgICBTcG9uc29ycyxcbiAgICBUcmFpbHMsXG4gICAgRGlyZWN0b3JzXG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC5mYXMge1xuICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCIsIFwiZmEtc29saWQtOTAwXCI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgfVxuXG4gICAgLmZhciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIiwgXCJmYS1yZWd1bGFyLTQwMFwiO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cblxuICAgIC50LTM2IHtcbiAgICAgICAgZm9udC1zaXplOiAzNjtcbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPFNjcm9sbFZpZXcgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJob21lLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cImRpcmVjdG9yLmltYWdlc3JjXCIgLz4gXHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiMTQwLDIwLCpcIiBjbGFzcz1cImRpckluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJkaXJlY3Rvci5uYW1lXCIgY29sPVwiMFwiIGNsYXNzPVwiZGlyTGVmdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCI6XCIgY29sPVwiMVwiIGNsYXNzPVwiZGlySXRlbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZGlyZWN0b3IudGl0bGVcIiBjb2w9XCIyXCIgY2xhc3M9XCJkaXJuYW1lUmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjYwLDIwLCpcIiBjbGFzcz1cImRpckluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlBob25lXCIgY29sPVwiMFwiIGNsYXNzPVwiZGlyTGVmdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCI6XCIgY29sPVwiMVwiIGNsYXNzPVwiZGlySXRlbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZGlyZWN0b3IucGhvbmUxXCIgY29sPVwiMlwiIGNsYXNzPVwiZGlyUmlnaHRcIiBAdGFwPVwiY2FsbChkaXJlY3Rvci5waG9uZTEpXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCI2MCwyMCwqXCIgY2xhc3M9XCJkaXJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJFbWFpbFwiIGNvbD1cIjBcIiBjbGFzcz1cImRpckxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiOlwiIGNvbD1cIjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImRpcmVjdG9yLmVtYWlsXCIgY29sPVwiMlwiIGNsYXNzPVwiZGlyUmlnaHRcIiBAdGFwPVwic2VuZChkaXJlY3Rvci5lbWFpbClcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwiYmlvLXBhbmVsXCIgOnRleHQ9XCJkaXJlY3Rvci5iaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gQHRhcD1cIiRtb2RhbC5jbG9zZVwiIHRleHQ9XCJDbG9zZVwiIGNsYXNzPVwiYnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD4gXHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPiAgXHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHBob25lIGZyb20gXCJuYXRpdmVzY3JpcHQtcGhvbmVcIjtcclxuICAgIGltcG9ydCBlbWFpbCBmcm9tIFwibmF0aXZlc2NyaXB0LWVtYWlsXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbXCJjb250ZXh0XCJdLFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGRpcmVjdG9yKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dCB8fCB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgY2FsbChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidG91Y2hlZCBwaG9uZSBudW1iZXIgXCIgKyBhcmdzKTtcclxuICAgICAgICAgICAgICAgIHBob25lLmRpYWwoYXJncyx0cnVlKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHNlbmQoYXJncykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZHJlc3MgPSBhcmdzO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImVtYWlsIGFkZHJlc3MgaXMgXCIgKyBhZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgIGVtYWlsLmNvbXBvc2UoIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBcIk1lc3NhZ2UgZnJvbSBNb2JpbGUgQXBwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IFthZGRyZXNzXSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRW1haWwgY29tcG9zZXIgY2xvc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmhvbWUtcGFuZWwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDM1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJpby1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDEwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZGlySW5mbyB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXJMZWZ0IHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiByaWdodDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZGlybmFtZVJpZ2h0IHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXJSaWdodCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkNvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnNcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImxpc3QtcGFuZWxcIj5cclxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwiaGVhZGVyLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJPdXIgRGlyZWN0b3JzIGZvciBUaGlzIFllYXJcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgdGV4dD1cIkFib3V0IE91ciBEaXJlY3RvcnNcIiBAdGFwPVwib25BYm91dFRhcFwiIC8+XHJcbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJkaXJlY3RvciBpbiBkaXJlY3RvcnNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiIGhlaWdodD1cIjEwMCVcIiBzZXBhcmF0b3JDb2xvcj1cIndoaXRlXCIgY2xhc3M9XCJsaXN0LXBhbmVsXCIgPlxyXG4gICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjEwMCwqXCIgLCByb3dzPVwiKlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cImRpcmVjdG9yLmltYWdlc3JjXCIgcm93PVwiMVwiIGNvbD1cIjBcIiBoZWlnaHQ9XCI3MFwiIHdpZHRoPVwiNzBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJkaXJlY3Rvci5uYW1lXCIgY2xhc3M9XCJkaXJlY3RvclwiIHRleHRXcmFwPVwidHJ1ZVwiIHJvdz1cIjFcIiBjb2w9XCIxXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+ICBcclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPiAgXHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IERpcmVjdG9yRGV0YWlscyBmcm9tIFwiLi9EaXJlY3RvckRldGFpbHNcIjtcclxuICAgIGltcG9ydCBBYm91dERpcmVjdG9ycyBmcm9tIFwiLi9BYm91dERpcmVjdG9yc1wiO1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBcclxuICAgICAgICBkYXRhOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3RvcnM6IFtdXHJcbi8qXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJLaXJrIEJvZGVcIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJQcmVzaWRlbnRcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9EaXJlY3RvcktpcmtTTS5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJrZWJvZGVAZ21haWwuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig3MTkpNjUwLTY2ODlcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiS2lyayBCb2RlIGJlZ2FuIGhpcyBKZWVwaW5nIGRheXMgbm90IHNvIGxvbmcgYWdvIGluIE5lYnJhc2thIG9mIGFsbCBwbGFjZXMgYWZ0ZXIgcHVyY2hhc2luZyBhIHJ1c3RlZCBvdXQsIGp1bmt5IENoZXJva2VlIGZyb20gc29tZW9uZSdzIHlhcmQuIFNvb24gYWZ0ZXIgaGUgcmVhbGl6ZWQgdGhhdCBpdCB3YXMgYSBwcmV0dHkgY2FwYWJsZSBvZmYgcm9hZCByaWcgYW5kIGJlZ2FuIHRpbmtlcmluZyBhbmQgaW1wcm92aW5nIGl0LiBBZnRlciBtb3ZpbmcgdG8gQ29sb3JhZG8gaW4gMjAwOCwgaGUgZm91bmQgb3V0IHdoYXQgcmVhbCBvZmYgcm9hZCB0cmFpbHMgYXJlIGxpa2UuIFRoZSBvbGQgcnVzdHkgQ2hlcm9rZWUgaGFzIGJlZW4gcmVwbGFjZWQgd2l0aCBhIG5ld2VyIG9uZSB0byB0YWtlIHRoZSBhYnVzZSBvZiBDb2xvcmFkbydzIHJvY2tzLiBLaXJrIGlzIGEgbGFuZCBzdXJ2ZXlvciBhbmQgd29ya3MgZm9yIEJhcnJvbiBMYW5kIGluIENvbG9yYWRvIFNwcmluZ3MuIEhlIGlzIG1hcnJpZWQgdG8gRXJpa2EgYW5kIHRoZXkgaGF2ZSAyIGNoaWxkcmVuLCBUeWxlciBhbmQgTWFyaWprZS4gVGhleSBhbGwgbG92ZSB0byBnZXQgb3V0IGluIEdvZCdzIGNyZWF0aW9uIG9mdGVuIGFuZCB0cnkgdG8gY2FtcCBpbiBuZXcgcGxhY2VzLiBIZSBob3BlcyB0byBzZWUgeW91IG9uIHRoZSB0cmFpbHMhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgICAgXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRhdmUgQ2hsYWRla1wiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yXCIsIFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvRGlyZWN0b3JEYXZlU00uanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZGNobGFkZWtAcS5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiKDcxOSk2MzQtNjAwNlwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJEYXZlIGNhbiBmcmVxdWVudGx5IGJlIHNlZW4gbGVhZGluZyBncm91cHMgaW4gTW9hYiBhbmQgd2lsbCBsZWFkIHNldmVyYWwgb2YgdGhlIG1vcmUgZGlmZmN1bHQgY2x1YiBydW5zIHRoaXMgeWVhci5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJXYXJkIFdpbGxpYW1zXCIsIFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9EaXJlY3RvcldhcmRTTS5wbmdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJ3YXJkd3dpbGxpYW1zQGdtYWlsLmNvbVwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZTFcIjogXCIoNzE5KTIxMy01OTE1XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIllvdSB3aWxsIHNlZSBXYXJkIG9uIG1hbnkgb2Ygb3VyIHRyaXBzIHdpdGggaGlzIHZpbnRhZ2UgV2lsbHkncyBKZWVwLiAgSGUgYSBza2lsbGVkIHdoZWVsZXIgYW5kIGEgdmVyeSBnb29kIHNwb3R0ZXIuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmltIEplbmlzdGFcIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3RvclwiLCBcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL0RpcmVjdG9ySmVuaXN0YVNNLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImpqZW5pc3RhQGFvbC5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiKDcxOSkyMDAtNDc1N1wiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJKaW0gSmVuaXN0YSBhbmQgaGlzIHdpZmUgS2FyZW4gaGF2ZSBiZWVuIDQtd2hlZWxpbmcgc2luY2UgMjAwMyB3aGVuIHRoZXkgYm91Z2h0IGEgMjAwMiBMYW5kIFJvdmVyIEZyZWVsYW5kZXIgYW5kIHN0YXJ0ZWQgZXhwbG9yaW5nIHRoZSBlYXNpZXIgdHJhaWxzIG5lYXIgQ29sb3JhZG8gU3ByaW5ncy4gQml0dGVuIGJ5IHRoZSBvZmYtcm9hZGluZyBidWcgYW5kIHJlYWxpemluZyB0aGV5IG5lZWRlZCBtb3JlIHRoYW4gdGhlIEZyZWVsYW5kZXIncyA4LjEgaW5jaGVzIG9mIGNsZWFyYW5jZSwgdGhleSBub3cgZWFjaCBkcml2ZSBhbiBvcmFuZ2UgMjAwNCBMYW5kIFJvdmVyIERpc2NvdmVyeSBJSSBHNC4gSW4gYWRkaXRpb24gdG8gam9pbmluZyBhbmQgZXZlbnR1YWxseSBiZWNvbWluZyBhIERpcmVjdG9yIHdpdGggQ1NDNFcsIEppbSBpcyBvbiB0aGUgRXhlY3V0aXZlIENvbW1pdHRlZSBvZiB0aGUgU29saWh1bGwgU29jaWV0eSwgd2hpY2ggaXMgdGhlIExhbmQgUm92ZXIgQ2x1YiBvZiBDb2xvcmFkbywgd2hlcmUgaGUgY29vcmRpbmF0ZWQgdGhlIGxhc3QgNSBpdGVyYXRpb25zIG9mIHRoZSBMYW5kIFJvdmVyIE5hdGlvbmFsIFJhbGx5LiAgSmltIGlzIGEgam9pbnQgZXhlcmNpc2UgcGxhbm5lciB3aXRoIE5PUkFEIGFuZCBVU05PUlRIQ09NIGF0IFBldGVyc29uIEFGQiwgYW5kIEthcmVuIHdvcmtzIGF0IExpYnJhcnkgMjFjIHdpdGggdGhlIFBpa2VzIFBlYWsgTGlicmFyeSBEaXN0cmljdC4gVGhleSBoYXZlIDYgZ3Jvd24gY2hpbGRyZW4gKDMgb2Ygd2hvbSBhcmUgbWFycmllZCkgYW5kIDcgZ3JhbmRjaGlsZHJlbi4gVGhleSBsaXZlIGF0IHRoZSBzb3V0aGVybiBlZGdlIG9mIEJsYWNrIEZvcmVzdCBhbmQgYXR0ZW5kIGNodXJjaCBhdCBTYWludCBHYWJyaWVsIHRoZSBBcmNoYW5nZWwgaW4gdGhlIG5vcnRoZWFzdCBwYXJ0IG9mIHRvd24uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2xlbiBIb292ZXJcIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3RvclwiLCBcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL0RpcmVjdG9yR2xlblNNLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImNvcnViaTFAeWFob28uY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig3MTkpMzcxLTczNTdcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiSSBnb3QgaW50ZXJlc3RlZCBpbiBvZmYtcm9hZGluZyB3YXkgYmFjayBpbiB0aGUgNzAncyEgQW4gYXJ0aWNsZSBpbiBhIG1hZ2F6aW5lIGRldGFpbGluZyBDb2xvcmFkbyB0cmFpbHMgaW4gdGhlIFNhbiBKdWFuIE1vdW50YWlucyB0b3VjaGVkIGFuIGFkdmVudHVyb3VzIGNvcmQgaW4gbWUsIGFuZCBzaW5jZSBJIGFscmVhZHkgaGFkIGEgQ2hldnkgQmxhemVyLCBJIGhlYWRlZCBmb3IgQ29sb3JhZG8gdGhlIG5leHQgc3VtbWVyLiBBZnRlciBzZXZlcmFsIEJsYXplcnMgYW5kIGJlZ2lubmluZyBhIGZhbWlseSwgYW5kIHNvbWUgeWVhcnMgbm90IGFibGUgdG8gZ28gdG8gQ29sb3JhZG8gYXQgYWxsLCBJIGJvdWdodCBteSBmaXJzdCBKZWVwIGluIHRoZSBsYXRlIDgwJ3MuIEkndmUgc2luY2Ugb3duZWQgYSBZSiwgYSBDaGVyb2tlZSwgMyBUSidzLCBhbmQgYSBKSy4gSSBzdGlsbCBoYXZlIDIgVEoncywgaWRlbnRpY2FsIHJlZCAyMDAzIFJ1Ymljb24ncy4gV2VsbCwgYWxtb3N0IGlkZW50aWNhbCBleGNlcHQgZm9yIG1vZGlmaWNhdGlvbnMgbGlrZSBhIDQuNiBsaXRlciBzdHJva2VyLCBGb3JkIDkgaW5jaCwgYW5kIDUuNSBpbmNoIGxpZnQgb24gb25lLiBMaXZpbmcgaW4gTmVicmFza2Egd2FzIGZydXN0cmF0aW5nIHRvIHNheSB0aGUgbGVhc3QhIFVwb24gcmV0aXJlbWVudCBpbiAyMDExLCBJIGRpZG4ndCBoZXNpdGF0ZSB0byBtb3ZlIHRvIENvbG9yYWRvLiBQcmV2aW91cyB0byBtb3ZpbmcgdG8gQ29sb3JhZG8sIEkgZm91bmQgQ1NDNFcgb25saW5lIGFuZCBldmVuIHRhbGtlZCB3aXRoIERlbm55IEhhZ2Ugbm90IGtub3dpbmcgSSdkIG9uZSBkYXkgYmUgYSBDU0M0VyBkaXJlY3RvciEgSSdtIGhlcmUgYnkgbXlzZWxmIG5vdywgYW5kIGJlaW5nIHJldGlyZWQsIEkgaGF2ZSB0aW1lIHRvIHByZS1ydW4gdHJhaWxzIGFuZCB0byBiZSBzcG9udGFuZW91cyBhbmQgYWJsZSB0byBkbyB0cmFpbCBydW5zIGFsbW9zdCBhbnl0aW1lIHNvbWVvbmUgZmVlbHMgdGhlIHVyZ2UgdG8gZ28uIExpdmluZyB0aGUgZHJlYW0hIEp1c3QgcmVtZW1iZXIgSkVFUCBhY3JvbnltLCBKdXN0IEVtcHR5IEV2ZXJ5IFBvY2tldCEgTG9sXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGV0ZSBKb2huc1wiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yXCIsIFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvRGlyZWN0b3JQZXRlU00uanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicGV0ZWphbWlqQE1zbi5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiKDMwMyk5MDktNjcxNVwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJQZXRlIEpvaG5zIGdyZXcgdXAgaW4gdGhlIG1vdW50YWlucyBvZiBCYWlsZXkgQ29sb3JhZG8uICBUaGUgbmVlZCBvZiA0eDQgd2FzIGEgd2F5IG9mIGxpZmUgbm90IGp1c3QgYSBob2JieS4gQ2FtcGluZyBhbmQgZm91ciB3aGVlbGluZyBiZWNhbWUgYSBmYXZvcml0ZSBwYXN0IHRpbWUgd2l0aCBoaXMgd2lmZSwgIEphbWkgYW5kIHRoZWlyIHR3byBjaGlsZHJlbiBaYWMgYW5kIEFseXNzYS4gVGhlIGRlc2lyZSB0byBqb2luIGEgNHg0IGNsdWIgYnJvdWdodCB1cyB0byBiZSBhY3RpdmUgd2l0aCBDU0M0Vy4gV2Ugc29vbiBtZXQgbWFueSB3b25kZXJmdWwgcGVvcGxlIHdpdGggc2ltaWxhciBpbnRlcmVzdHMuIFBldGUgaGFzIGJlZW4gd2l0aCBDU0M0VyBhcyBhIG1lbWJlciBzdGFydGluZyBpbiAyMDAyIGFuZCBhIGRpcmVjdG9yIGEgZmV3IHllYXJzIGFmdGVyd2FyZC4gUGV0ZSBsb3ZlcyBzaGFyaW5nIGhpcyBsb3ZlIGZvciB0aGUgb3V0ZG9vcnMgd2l0aCBvdGhlcnMgd2hpbGUgZW5qb3lpbmcgdGhlIGNoYWxsZW5nZSBvZiBmb3VyIHdoZWVsaW5nLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkdsZW5uIEhlc3NcIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3RvclwiLCBcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL0RpcmVjdG9yR2xlbm5TTS5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJnbGVubmhlc3M2NkBnbWFpbC5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiNzIwLTIxOS01Mzg0XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIkdsZW5uIGlzIG5vdCBvbmx5IGFuIGF2aWQgd2hlZWxlciBhbmQgZ3JlYXQgdHJhaWwgbGVhZGVyLCBoZSBhbHNvIHNwZW5kcyBhIGxvdCBvZiB0aW1lIG9uIGhpcyBkaXJ0IGJpa2UgdG91cmluZyBhcm91bmQgdGhlIHN0YXRlLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkplcmVteSBSb3dhblwiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yL0ZhY2Vib29rIEFkbWluaXN0cmF0b3JcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9EaXJlY3RvckplcmVteVNNLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImpyb3dhbjE5NzlAZ21haWwuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig3MTkpMjA1LTI1NjVcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiSmVyZW15IGNhbiBiZSBzZWVuIGxlYWRpbmcgZ3JvdXBzIGFyb3VuZCBpbiBNb2FiLCBVdGFoLiAgSGUgaXMgYSBwYXJ0bmVyIGluIE91dGxhdyBKZWVwIEFkdmVudHVyZXMgYW5kIHNwZW5kcyBtb3N0IG9mIGhpcyB0aW1lIGluIE1vYWIuICBKZXJlbXkgaXMgdGhlIG1hbiB0byBzZWUgaWYgeW91IHdhbnQgdG8gaGF2ZSBhIGdvb2Qgd2hlZWxpbmcgZXhwZXJpZW5jZSB3aGVuIHlvdSB2aXNpdCBNb2FiIVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRhbiBNaXRjaGVsbFwiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yL1dlYm1hc3RlclwiLCBcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL0RpcmVjdG9yRGFuU00uanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiY3NjNHdAY3NjNHcuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig3MTkpMjEwLTE2NDRcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiRGFuIGlzIGFuIGF2aWQgd2hlZWxlciBhbmQgeW91IHdpbGwgc2VlIGhpbSBhbmQgaGlzIHdpZmUgTWljaGVsbGUgb24gbWFueSB0cmlwcyB0aGlzIHllYXIuICBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJKYXNvbiBTZWxsZXJzXCIsIFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9qYXNvbi5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqYXNvbnNlbGxlcnM3M0B5YWhvby5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiKDk1NCk4MDUtMzY2MFwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJKYXNvbiBpcyBhIG5ldyBkaXJlY3RvciB0aGlzIHllYXIgc28gbWFrZSBzdXJlIHRvIGludHJvZHVjZSB5b3Vyc2VsZiB0byBoaW0gYXQgdGhlIG1lZXRpbmcgb3Igb24gdGhlIHRyYWlsLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pY2hlbGxlIE1pdGNoZWxsXCIsIFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9taWNoZWxsZS5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqZWVwaW5nNGpveUBnbWFpbC5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiKDcxOSkyMjktMTUzNVwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJNaWNoZWxsZSBpcyBhIG5ldyBkaXJlY3RvciB0aGlzIHllYXIuICBTaGUgaXMgdGhlIGZpcnN0IGZlbWFsZSBkaXJlY3RvciBpbiB0aGUgY2x1YidzIGhpc3Rvcnkgc28gbWFrZSBzdXJlIHRvIGludHJvZHVjZSB5b3Vyc2VsZiB0byBoZXIgYXQgdGhlIG1lZXRpbmcgb3Igb24gdGhlIHRyYWlsLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIktlaXRoIEJ1dGxlclwiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yXCIsIFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMva2VpdGguanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwia2VpdGguYnV0bGVyNThAZ21haWwuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig4MTIpNDU1LTU0NzdcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiS2VpdGggaXMgYSBuZXcgZGlyZWN0b3IgdGhpcyB5ZWFyIHNvIG1ha2Ugc3VyZSB0byBpbnRyb2R1Y2UgeW91cnNlbGYgdG8gaGltIGFuZCBoaXMgd2lmZSBLZXJpIGF0IHRoZSBraWNrLW9mZiBtZWV0aW5nIG9yIG9uIHRoZSB0cmFpbC5cIlxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0gXHJcbiovXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBhcmdzLnZpZXc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlID0gdmlldy5wYWdlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFwcGVkSXRlbSA9IHZpZXcuYmluZGluZ0NvbnRleHQ7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlyZWN0b3IgdGFwcGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKERpcmVjdG9yRGV0YWlscywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRhcHBlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQWJvdXRUYXAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKEFib3V0RGlyZWN0b3JzKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcInVybFwiOiBcImh0dHA6Ly9kYXRhLmNzYzR3LmNvbS9kaXJlY3RvcnMuanNvblwiIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdG9ycyA9IHJlc3VsdC5kYXRhLmRpcmVjdG9ycztcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXN1bHQgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5kaXJlY3RvcnMpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjYXVnaHQgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoTm9Db25uZWN0KTtcclxuICAgICAgICAgICAgfSksIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgXCIgKyBlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxuXHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuYWN0aW9uLWJhciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODtcclxuICAgICAgICBwYWRkaW5nOiA4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpcmVjdG9yIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1wYW5lbCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgbWFyZ2luOiAxO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIxOTIxO1xyXG4gICAgICAgIGNvbG9yOiBXaGl0ZTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPFBhZ2UgPlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIkNvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnNcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiB0ZXh0V3JhcD1cInRydWVcIiAvPlxyXG4gICAgPFNjcm9sbFZpZXc+XHJcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhvbWVQYW5lbFwiPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIGhlaWdodD1cIjIwMFwiIHdpZHRoPVwiMjAwXCIgLz5cclxuICAgICAgICA8TGFiZWxcclxuICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICB0ZXh0PVwiVGhpcyBBcHAgd2lsbCBrZWVwIHlvdSB1cGRhdGVkIG9uIHRoZSBhY3Rpdml0aWVzLCBkaXJlY3RvcnMsIHNwb25zb3JzIGFuZCB0cmFpbHMgZm9yIHRoZSBDb2xvcmFkbyBTcHJpbmdzIENocmlzdGlhbiA0LVdoZWVsZXJzIGNsdWJcIlxyXG4gICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TGlzdFZpZXcgZm9yPVwiaXRlbSBpbiBtaXNjXCIgaGVpZ2h0PVwiMTYwXCIgY2xhc3MgPSBcImhvbWVQYW5lbFwiPlxyXG4gICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIml0ZW0ubW90ZFwiIGNsYXNzPVwicmVkLW1lc3NhZ2VcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgICAgIDwvTGlzdFZpZXc+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIHRleHQ9XCJBYm91dCBVc1wiIEB0YXA9XCJvbkFib3V0VXNUYXBcIiAvPlxyXG4gICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9TY3JvbGxWaWV3PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgQWJvdXRVcyBmcm9tIFwifi9jb21wb25lbnRzL0Fib3V0VXNcIjtcclxuICAgIGltcG9ydCBOb0Nvbm5lY3QgZnJvbSBcIn4vY29tcG9uZW50cy9Ob0Nvbm5lY3RcIjtcclxuICAgIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAgICAgICBkYXRhOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtaXNjOiBbXVxyXG5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjb21wb25lbnRzOiB7IFxyXG4gICAgICAgICAgICBBYm91dFVzIFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgb25BYm91dFVzVGFwKCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChBYm91dFVzKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcInVybFwiOiBcImh0dHA6Ly9kYXRhLmNzYzR3LmNvbS9taXNjLmpzb25cIiB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJlc3VsdCBpcyBcIiArIHJlc3VsdC5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWlzYyA9IHJlc3VsdC5kYXRhLm1pc2M7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzdWx0IGlzIFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEubWlzYyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJFcnJvciBjYXVnaHQgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoTm9Db25uZWN0KTtcclxuICAgICAgICAgICAgfSksIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgXCIgKyBlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uaG9tZVBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1O1xyXG4gIGZvbnQtc2l6ZTogMTU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJObyBDb25uZWN0aXZpdHlcIiAvPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3IGJhY2tncm91bmQ9XCIjMTMxZDRlXCI+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIGhlaWdodD1cIjIwMFwiIHdpZHRoPVwiMjAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFib3V0LXBhbmVsXCIgdGV4dFdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiVGhpcyBhcHBsaWNhdGlvbiByZXF1aXJlcyBjb25uZWN0aXZpdHkgdG8gdGhlIGludGVybmV0IGluIG9yZGVyIHRvIHNob3cgZGF0YSBvbiB0aGUgdGFicy4gIFBsZWFzZSBjb25uZWN0IHRvIHRoZSBpbnRlcm5ldCBhbmQgY2xvc2UgYW5kIHJlb3BlbiB0aGUgYXBwLlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5Ob3RlIHRoYXQgYSBzbWFsbCBvZiBkYXRhIHdpbGwgYmUgdHJhbnNtaXR0ZWQgYW5kIGEgZGF0YSBjaGFyZ2UgbWF5IGFwcGx5LlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIEB0YXA9XCIkbW9kYWwuY2xvc2VcIiB0ZXh0PVwiQ2xvc2VcIiBjbGFzcz1cImJ1dHRvblwiIC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAuYWJvdXQtcGFuZWwge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJDb2xvcmFkbyBTcHJpbmdzIENocmlzdGlhbiA0LVdoZWVsZXJzXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCIgLz5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJsaXN0LXBhbmVsXCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cImhlYWRlci1sYWJlbFwiIHRleHQ9XCJPdXIgU2NoZWR1bGVcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgdGV4dD1cIkFib3V0IFRoZSBTY2hlZHVsZVwiIEB0YXA9XCJvbkFib3V0VGFwXCIgLz5cclxuICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cImV2ZW50IGluIGV2ZW50c1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCIgaGVpZ2h0PVwiMTAwJVwiIHNlcGFyYXRvckNvbG9yPVwid2hpdGVcIiBjbGFzcz1cImxpc3QtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCpcIiByb3dzPVwiKiwqXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwiZXZlbnQuaW1hZ2VTcmNcIiBoZWlnaHQ9XCIxMjBcIiB3aWR0aD1cIjEyMFwiIGNvbD1cIjBcIiByb3dTcGFuPVwiMlwiIGNsYXNzPVwicGljXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5ldmVudERhdGVcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cImV2ZW50MVwiIHJvdz1cIjBcIiBjb2w9XCIxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZXZlbnQubmFtZVwiIGNsYXNzPVwiZXZlbnQyXCIgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiMVwiIGNvbD1cIjFcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9MaXN0Vmlldz4gICBcclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPiAgXHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IFNjaGVkdWxlRGV0YWlscyBmcm9tIFwiLi9TY2hlZHVsZURldGFpbHNcIjtcclxuICAgIGltcG9ydCBBYm91dFNjaGVkdWxlIGZyb20gXCIuL0Fib3V0U2NoZWR1bGVcIjtcclxuICAgIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0YTogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBbXVxyXG4vKiAgICAgICAgICAgICAgICBcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiTW91bnQgQmFsZHlcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDFcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdW5lIDEzdGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDYvMTMvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI4XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiU3QuIFBhdWxzIENhdGhvbGljIENodXJjaCwgOSBFbCBQb21hciBSZCwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTA2XCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI4OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiSmltLCBEYW4sIE1pY2hlbGxlXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjAwLTQ3NTdcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiRGFuXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSkyMTAtMTY0NFwiLFxyXG4gICAgICBcImxlYWRlcjNcIjogXCJNaWNoZWxsZVwiLFxyXG4gICAgICBcImxlYWRlcjNQaG9uZVwiOiBcIig3MTkpMjI5LTE1MzVcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJNb2RlcmF0ZVwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvbXRiYWxkeS5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiV2Ugd2lsbCB0YWtlIHRoZSB0cmFpbCBmcm9tIE9sZCBTdGFnZSByb2FkIGFuZCBsb29wIGFyb3VuZCB0aGUgYmFjayBzaWRlIG9mIFBpa2VzIFBlYWsuICBJZiB0aGUgdHJhaWwgaXMgcGFzc2FibGUgd2Ugd2lsbCBkcml2ZSB0byB0aGUgdG9wIG9mIE1vdW50IEJhbGR5XCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzguNzkxNDE0XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDQuODU1MDEwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkVhZ2xlIFJvY2tcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdW5lIDEzdGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDYvMTMvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI4XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiU3QuIFBhdWxzIENhdGhvbGljIENodXJjaCwgOSBFbCBQb21hciBSZCwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTA2XCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI4OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiV2FyZCwgR2xlblwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJXYXJkXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMTMtNTkxMlwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJHbGVuXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSkzNzEtNzM1N1wiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkRpZmZpY3VsdFwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvZWFnbGVyb2NrLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJFYWdsZSBSb2NrIGlzIGEgdmVyeSBkaWZmaWN1bHQgYW5kIGNoYWxsZW5naW5nIHRyYWlsLiAgRXhwZXJpZW5jZWQgd2hlZWxlcnMgd2l0aCBtb2RpZmllZCByaWdzIHdpdGggbGFyZ2VyIHRpcmVzIGFuZCBhdCBsZWFzdCBvbmUgbG9ja2VyIGFyZSByZWNvbW1lbmRlZC5cIixcclxuICAgICAgXCJsYXRcIjogXCIzOC43OTE0MTRcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNC44NTUwMTBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiQ2hpbmEgV2FsbFwiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiZ3JvdXAgMVwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkp1bmUgMjB0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwNi8yMC8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjhcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTYWZld2F5LCAzMjc1IFcgQ29sb3JhZG8gQXZlLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MDRcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjg6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJKaW0gYW5kIE1pY2hlbGxlXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjAwLTQ3NTdcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiTWljaGVsbGVcIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTIyOS0xNTM1XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiSW50ZXJtZWRpYXRlXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9jaGluYXdhbGwuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIkNoaW5hIFdhbGwgaXMgYSB2ZXJ5IHNjZW5pYyBpbnRlcm1lZGlhdGUgcnVuLiAgRGlmZmljdWx0IG9ic3RhY2xlcyBtYXkgYmUgYnlwYXNzZWQuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzguODU0NzAyXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDQuODc2MTQwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkNoaW5hbWFuIEd1bGNoXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJncm91cCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVuZSAyMHRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA2LzIwLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIjM4Ljc5MjE4NiwgLTEwNi4wODUyMDJcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJHbGVuIGFuZCBEYW5cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiR2xlblwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMzcxLTczNTdcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiRGFuXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSkyMTAtMTY0NFwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkRpZmZpY3VsdFwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvY2hpbmFtYW4uanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIkNoaW5hbWFuIEd1bGNoIGlzIGEgY2hhbGxlbmdpbmcgcnVuIGFuZCBzaG91bGQgbm90IGJlIGF0dGVtcHRlZCB3aXRob3V0IG1vZGlmaWVkIHZlaGljbGVzLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM5Ljc5MjE4NlwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA2LjA4NTIwMlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJNZWRhbm8gUGFzcyBDYW1waW5nXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCBBbGxcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdWx5IDEwdGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDcvMTAvMjAyMFwiLFxyXG4gICAgICBcImR1cmF0aW9uXCI6IDgsXHJcbiAgICAgIFwic3RhcnRUaW1lRmxkXCI6IFwiMTdcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCIzNy44NTYwMjcsIC0xMDUuNDMyNzIxXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCJBZnRlcm5vb24vRXZlbmluZ1wiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJHbGVuIGFuZCBLaXJrXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkdsZW5cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTM3MS03MzU3XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIktpcmtcIixcclxuICAgICAgXCJsZWFkZXJQaG9uZVwiOiBcIig3MTkpNjUwLTY2ODlcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJGdW5cIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL01lZGFuby1QYXNzLUNhbXBpbmcuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIldlIHdpbGwgYmUgY2FtcGluZyBGcmlkYXkgbmlnaHQgbmVhciB0aGUgTWVkYW5vIHBhc3MgdHJhaWxoZWFkLiAgQ29udGFjdCB0aGUgZGlyZWN0b3JzIGZvciB0aGlzIHRyaXAgZm9yIG1vcmUgZGV0YWlscy4gIFRoZSBtZWV0aW5nIHBsYWNlIHNob3dzIHRoZSBzdGFydCBvZiB0aGUgcm9hZCBhbmQgY2FtcGluZyB3aWxsIGJlIHNvbWV3aGVyZSBpbiB0aGlzIGFyZWEuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzcuODU2MDI3XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDUuNDMyNzIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIk1lZGFubyBQYXNzIFdoZWVsaW5nXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAxXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVseSAxMXRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA3LzExLzIwMjBcIixcclxuXHQgICAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCIzNy44NTYwMjcsIC0xMDUuNDMyNzIxXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU1cIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJFYXN5IHRvIEludGVybWVkaWF0ZVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJHbGVuIGFuZCBLaXJrXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkdsZW5cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTM3MS03MzU3XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIktpcmtcIixcclxuICAgICAgXCJsZWFkZXJQaG9uZVwiOiBcIig3MTkpNjUwLTY2ODlcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL21lZGFub1Bhc3MuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIldlIHdpbGwgbGVhdmUgdGhlIGNhbXBpbmcgYXJlYSBhdCA5OjAwIGFuZCBoZWFkIG92ZXIgTWVkYW5vIFBhc3MgdG8gdGhlIHNhbmQgZHVuZXMuICBUaGlzIHRyYWlsIHRyYXZlbHMgYWxvbmcgTWVkYW5vIENyZWVrIHdpdGggbWFueSB3YXRlciBjcm9zc2luZ3MgYW5kIGRlZXAgc2FuZCBuZWFyIHRoZSBlbmQgYXQgdGhlIEdyZWF0IFNhbmQgRHVuZXMuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzcuNTIxODU1XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDUuNjAxOTcxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkJsYW5jYSBQZWFrIENhbXBpbmdcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJKdWx5IDEwdGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDcvMTAvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCIxN1wiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIkxha2UgQ29tbyBSb2FkLCBNb3NjYSwgQ09cIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIkFmdGVybm9vbi9FdmVuaW5nXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIlBldGUgYW5kIERhdmVcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiUGV0ZVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIigzMDMpOTA5LTY3MTVcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiRGF2ZVwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpNjM0LTYwMDZcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJGdW5cIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL01lZGFuby1QYXNzLUNhbXBpbmcuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIldlIHdpbGwgYmUgY2FtcGluZyBGcmlkYXkgbmlnaHQgb24gcm9hZCB0byBCbGFuY2EgUGVhayBUcmFpbC4gIENvbnRhY3QgdGhlIGRpcmVjdG9ycyBmb3IgdGhpcyB0cmlwIGZvciBtb3JlIGRldGFpbHMuICBUaGUgbWVldGluZyBwbGFjZSBzaG93cyB0aGUgc3RhcnQgb2YgdGhlIHJvYWQgYW5kIGNhbXBpbmcgd2lsbCBiZSBzb21ld2hlcmUgZmFydGhlciB1cCB0aGlzIHJvYWQuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzcuNTIxODU1XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDUuNjAxOTcxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkJsYW5jYSBQZWFrIFdoZWVsaW5nXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVseSAxMXRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA3LzExLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIjM3LjUyMTg1LCAtMTA1LjYwMTkzXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU1cIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJWZXJ5IERpZmZpY3VsdFwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJQZXRlIGFuZCBEYXZlXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIlBldGVcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoMzAzKTkwOS02NzE1XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkRhdmVcIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTYzNC02MDA2XCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9ibGFuY2EuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIldlIHdpbGwgbGVhdmUgdGhlIGNhbXBpbmcgYXJlYSBhdCA5OjAwIGFuZCBoZWFkIHRvIHRoZSB0b3Agb2YgQmxhbmNhIFBlYWsuICBUaGlzIHRyYWlsIGlzIHZlcnkgZGlmZmljdWx0IHNvIHlvdSB3aWxsIG5lZWQgYSBsaWZ0ZWQgcmlnIHdpdGggbGFyZ2VyIHRpcmVzIGFuZCBsb2NrZXJzLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM3LjUyMTg1NVwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA1LjYwMTk3MVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJTYWludCBFbG1vIENhbXBpbmdcIixcclxuICAgICAgXCJncm91cFwiOiBcIkFsbCBncm91cHMgXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVseSAyNHRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA3LzI0LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiMTdcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTYWludCBFbG1vIENvbG9yYWRvXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCJBZnRlcm5vb24vRXZlbmluZ1wiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJXYXJkIGFuZCBKYXNvblwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJXYXJkXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMTMtNTkxNVwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJKYXNvblwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig5NTQpODA1LTM2NjBcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJGdW5cIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL3N0ZWxtby5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiV2Ugd2lsbCBiZSBjYW1waW5nIEZyaWRheSBuaWdodCBuZWFyIHRoZSB0b3duIG9mIFN0LiBFbG1vLiAgQ29udGFjdCB0aGUgZGlyZWN0b3JzIGZvciB0aGlzIHRyaXAgZm9yIG1vcmUgZGV0YWlscy4gIFRoZSBtZWV0aW5nIHBsYWNlIHNob3dzIHRoZSBzdGFydCBvZiB0aGUgcm9hZCBhbmQgY2FtcGluZyB3aWxsIGJlIHNvbWV3aGVyZSBpbiB0aGlzIGFyZWEuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzguNzA0MTAxXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDYuMzQ1MDE4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIlNhaW50IEVsbW8gV2hlZWxpbmdcIixcclxuICAgICAgXCJncm91cFwiOiBcIkFsbCBncm91cHMgXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiSnVseSAyNXRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA3LzI1LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlNhaW50IEVsbW8gQ29sb3JhZG9cIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTSBpbiBTYWludCBFbG1vXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIldhcmQgYW5kIEphc29uXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIldhcmRcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIxMy01OTE1XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkphc29uXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDk1NCk4MDUtMzY2MFwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkdyb3VwIDEgYW5kIDIgdHJhaWxzIGRlcGVuZGluZyBvbiB3aG8gaXMgdGhlcmVcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL3RpbmN1cC5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiVGhlcmUgYXJlIG1hbnkgdHJhaWxzIGluIHRoZSBTdC4gRWxtbyBhcmVhIGFuZCB3ZSB3aWxsIGRlY2lkZSB0aGF0IG1vcm5pbmcgd2hpY2ggdHJhaWxzIHdpbGwgYmUgcnVuIGRlcGVuZGluZyBvbiB0aGUgZm9sa3MgdGhhdCBzaG93IHVwLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM4LjcwNDEwMVwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA2LjM0NTAxOFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJNb3NxdWl0byBQYXNzXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJncm91cCAxXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiQXVndXN0IDh0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwOC8wOC8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTb3V0aHBhcmsgTWFya2V0LCBGYWlycGxheSBDb2xvcmFkb1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiOTowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIwMC00NzU3XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRWFzeSB0byBJbnRlcm1lZGlhdGVcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL21vc3F1aXRvLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJUaGlzIHRyaXAgaXMgZmFpcmx5IGVhc3kgYW5kIFZFUlkgc2NlbmljLiAgV2Ugd2lsbCBnbyBvdmVyIE1vc3F1aXRvIHBhc3MgYW5kIHJldHVybiBvbiBXZXN0b24gcGFzcy5cIixcclxuICAgICAgXCJsYXRcIjogXCIzOS4yMTY3MjdcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNS45OTM2NjVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiV2hlZWxlciBMYWtlXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJncm91cCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiQXVndXN0IDh0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwOC8wOC8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjlcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJTb3V0aHBhcmsgTWFya2V0LCBGYWlycGxheSBDb2xvcmFkb1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiOTowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkplcmVteSBhbmQgTWljaGVsbGVcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiSmVyZW15XCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMDUtMjU2NVwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJKYXNvblwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpMjI5LTE1MzVcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJEaWZmaWN1bHRcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL3doZWVsZXIuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIlRoaXMgdHJpcCBpcyBkaWZmaWN1bHQgYW5kIHdpbGwgcmVxdWlyZSBsaWZ0ZWQgcmlncyB3aXRoIGxhcmdlciB0aXJlcyBhbmQgYXQgbGVhc3QgYSByZWFyIGxvY2tlclwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM5LjIxNjcyN1wiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA1Ljk5MzY2NVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJTbGlkZSBMYWtlXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAxXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiQXVnIDIybmQsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDgvMjIvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI5XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiU2xpZGUgTGFrZSBUcmFpbGhlYWRcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJLZWl0aCBhbmQgR2xlbm5cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiS2VpdGhcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoODEyKTQ1NS01NDc3XCIsXHJcbiAgICAgIFwibGVhZGVyMlwiOiBcIkdsZW5uXCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiNzIwLTIxOS01Mzg0XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRWFzeVwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvc2xpZGUuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIlNsaWRlIExha2UgaXMgYSBiZWF1dGlmdWwgYW5kIGVhc3kgZHJpdmUuICBUaGVyZSBtYXkgYmUgY2FtcGluZyB0aGUgbmlnaHQgYmVmb3JlIHRoaXMgdHJpcCBzbyBjb250YWN0IHRoZSB0cmlwIGxlYWRlcnMgaWYgeW91IGFyZSBpbnRlcmVzdGVkIGluIHRoaXNcIixcclxuICAgICAgXCJsYXRcIjogXCIzOS4zNjkyNTlcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNi4zODUzOTNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiSG9seSBDcm9zc1wiLFxyXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXAgMlwiLFxyXG4gICAgICBcImV2ZW50RGF0ZVwiOiBcIkF1ZyAyMm5kLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA4LzIyLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIjM5LjQwMzE2MSwgLTEwNi40NDM1NTNcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIjk6MDBBTVwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJQZXRlIGFuZCBEYXZlXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIlBldGVcIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCI3MjAtMjE5LTUzODRcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiRGF2ZVwiLFxyXG4gICAgICBcImxlYWRlcjJQaG9uZVwiOiBcIig3MTkpMjA1LTI1NjVcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJEaWZmaWN1bHRcIixcclxuICAgICAgXCJpbWFnZVNyY1wiOiBcIn4vaW1hZ2VzL2hvbHljcm9zcy5qcGdcIixcclxuICAgICAgXCJkZXNjXCI6IFwiSG9seSBDcm9zcyBpcyBvbmUgb2YgdGhlIGhhcmRlc3QgdHJhaWxzIGluIENvbG9yYWRvLiAgWW91IHdpbGwgbmVlZCBhIGhlYXZpbHkgbW9kaWZpZWQgdmVoaWNsZSBmb3IgdGhpcyB0cmFpbC4gIFRoZXJlIG1heSBiZSBjYW1waW5nIHRoZSBuaWdodCBiZWZvcmUgdGhpcyB0cmlwIHNvIGNvbnRhY3QgdGhlIHRyaXAgbGVhZGVycyBpZiB5b3UgYXJlIGludGVyZXN0ZWQgaW4gdGhpc1wiLFxyXG4gICAgICBcImxhdFwiOiBcIjM5LjQwMzE2MVwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA2LjQ0MzU1M1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJSaW1yb2NrZXIgVHJhaWxcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJTZXB0IDJuZC1TZXB0IDR0aCwgMjAyMFwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIwOS8wMi8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjhcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIlwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJLaXJrIGFuZCBKZXJlbXlcIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiS2lya1wiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpNjUwLTY2ODlcIixcclxuICAgICAgXCJsZWFkZXIyXCI6IFwiSmVyZW15XCIsXHJcbiAgICAgIFwibGVhZGVyMlBob25lXCI6IFwiKDcxOSkyMDUtMjU2NVwiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIk1vZGVyYXRlXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9yaW1yb2NrZXIuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIlRoaXMgaXMgYW4gb3ZlcmxhbmQgdHJpcCB3aGVyZSB3ZSB3aWxsIHdoZWVsIGFuZCBjYW1wIGFsb25nIHRoZSB0cmFpbC4gIENvbnRhY3QgS2lyayBvciBKZXJlbXkgaWYgeW91IGFyZSBpbnRlcmVzdGVkIGluIHRoaXMgdHJpcCBhbmQgZm9yIGRldGFpbHMuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJMYWJvciBEYXkgV2hlZWxpbmcgaW4gTW9hYiwgVVRcIixcclxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwIDEgYW5kIDJcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJTZXB0IDV0aCAtIFNlcHQgN3RoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA5LzA1LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIk91dGxhdyBKZWVwIEFkdmVudHVyZXMgTW9hYixVdGFoXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU0gb24gU2VwdC4gNXRoXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIktpcmsgYW5kIEplcmVteVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJLaXJrXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSk2NTAtNjY4OVwiLFxyXG4gICAgICBcImxlYWRlcjJcIjogXCJKZXJlbXlcIixcclxuICAgICAgXCJsZWFkZXIyUGhvbmVcIjogXCIoNzE5KTIwNS0yNTY1XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiQWxsIHR5cGVzIG9mIHRyYWlsc1wiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvaGVsbHNyZXZlbmdlLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJNZWV0IGVhY2ggZGF5IGF0IE91dGxhdyBKZWVwIEFkdmVudHVyZXMgcGFya2luZyBsb3QgZm9yIHZhcmlvdXMgdHJhaWxzIGFyb3VuZCBNb2FiLiAgTWFrZSB5b3VyIG93biBhY2NvbW9kYXRpb25zIGVpdGhlciBjYW1waW5nIG9yIGF0IGEgaG90ZWwuICBDb250YWN0IEtpcmsgb3IgSmVyZW15IGlmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnNcIixcclxuICAgICAgXCJsYXRcIjogXCJcIixcclxuICAgICAgXCJsb25nXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIkFscGluZSBMb29wIGluIE91cmF5XCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJBbGwgR3JvdXBzXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiU2VwdCA1dGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDkvMDUvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI4XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiMTIyMCBNYWluIFN0LiwgT3VyYXksIENPLCA4MTQyN1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiODowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkRhblwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJEYW5cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIxMC0xNjQ0XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiSW50ZXJtZWRpYXRlXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9hbHBpbmVsb29wLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJUaGUgQWxwaW5lIExvb3AgaXMgYW4gaW50ZXJtZWRpYXRlIHRyaXAgd2l0aCBhIGZldyBkaWZmaWN1bHQgc3BvdHMuICBEZXBlbmRpbmcgb24gdHJhaWwgY29uZGl0aW9ucyBhbmQgdGhlIHJpZ3MgdGhhdCBhcmUgdGhlcmUsIGl0IG1heSBpbmNsdWRlIEVuZ2luZWVyIFBhc3MsIENpbmFtbW9uIHBhc3MsIFBvdWdoa2VlcHNpZSBHdWxjaCBhbmQgb3RoZXJzLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIjM4LjAyOTE1MVwiLFxyXG4gICAgICBcImxvbmdcIjogXCItMTA3LjY3MzMwOFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJCbGFja2JlYXIgYW5kIEltb2dlbmUgUGFzc2VzXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJHcm91cCAyXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiU2VwdCA2dGgsIDIwMjBcIixcclxuICAgICAgXCJkYXRlRmxkXCI6IFwiMDkvMDYvMjAyMFwiLFxyXG5cdCAgXCJkdXJhdGlvblwiOiA4LFxyXG5cdCAgXCJzdGFydFRpbWVGbGRcIjogXCI4XCIsXHJcbiAgICAgIFwibWVldEF0XCI6IFwiMTIyMCBNYWluIFN0LiwgT3VyYXksIENPLCA4MTQyN1wiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiODowMEFNXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkRhblwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJEYW5cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIxMC0xNjQ0XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRGlmZmljdWx0XCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9ibGFja2JlYXIuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIkJsYWNrYmVhciBQYXNzIGlzIG9uZSBvZiB0aGUgbW9zdCBmYW1vdXMgdHJhaWxzIGluIENvbG9yYWRvLiAgSXQgaXMgZGlmZmljdWx0IGFuZCB0aGUgdHJhaWwgaXMgdmVyeSBuYXJyb3cuXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiMzcuODk2NzA0XCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIi0xMDcuNzEzNTIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIlRyYWlsIENsZWFudXAgRGF5ICMyXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJBbGwgR3JvdXBzXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiU2VwdCAxOXRoLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjA5LzE5LzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOVwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlNhaW50IFBhdWxzIENhdGhvbGljIENodXJjaCBDb2xvcmFkbyBTcHJpbmdzXCIsXHJcbiAgICAgIFwibWVldFRpbWVcIjogXCI5OjAwQU1cIixcclxuICAgICAgXCJsZWFkZXJzXCI6IFwiSmltXCIsXHJcbiAgICAgIFwibGVhZGVyMVwiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFQaG9uZVwiOiBcIig3MTkpMjAwLTQ3NTdcIixcclxuICAgICAgXCJyYXRpbmdcIjogXCJGdW4vSGFyZCBXb3JrXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy90cmFpbGNsZWFudXAuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIkNTQzRXIGhhcyBhZG9wdGVkIHRoZSBNdC4gQmFsZHkgdHJhaWwgc3lzdGVtIGFuZCB3ZSBzcGVuZCAyIGRheXMgYSB5ZWFyIGhlbHBpbmcgdGhlIFVTIEZvcmVzdCBTZXJ2aWNlIHdpdGggdHJhaWwgY2xlYW4tdXAgYW5kIHJlcGFpci4gIFRoaXMgaXMgYW4gaW1wb3J0YW50IGV2ZW50IGZvciBvdXIgY2x1YiBhbmQgYWxsIG1lbWJlcnMgYXJlIGVuY291cmFnZWQgdG8gY29tZSBhbmQgaGVscC4gIEJyaW5nIHlvdXIgb3duIGx1bmNoIGFuZCBpZiB0aW1lIHBlcm1pdHMsIHdlIHdpbGwgZG8gYSBsaXR0bGUgd2hlZWxpbmcgYXMgd2VsbC5cIixcclxuICAgICAgXCJsYXRcIjogXCIzOC43OTA2MzdcIixcclxuICAgICAgXCJsb25nXCI6IFwiLTEwNC44NTUwMTVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiUGlja2V0IFdpcmUgQ2FueW9ubGFuZHNcIixcclxuICAgICAgXCJncm91cFwiOiBcIkFsbCBHcm91cHNcIixcclxuICAgICAgXCJldmVudERhdGVcIjogXCJPY3QgM3JkLCAyMDIwXCIsXHJcbiAgICAgIFwiZGF0ZUZsZFwiOiBcIjEwLzAzLzIwMjBcIixcclxuXHQgIFwiZHVyYXRpb25cIjogOCxcclxuXHQgIFwic3RhcnRUaW1lRmxkXCI6IFwiOFwiLFxyXG4gICAgICBcIm1lZXRBdFwiOiBcIlwiLFxyXG4gICAgICBcIm1lZXRUaW1lXCI6IFwiXCIsXHJcbiAgICAgIFwibGVhZGVyc1wiOiBcIkppbVwiLFxyXG4gICAgICBcImxlYWRlcjFcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxUGhvbmVcIjogXCIoNzE5KTIwMC00NzU3XCIsXHJcbiAgICAgIFwicmF0aW5nXCI6IFwiRnVuXCIsXHJcbiAgICAgIFwiaW1hZ2VTcmNcIjogXCJ+L2ltYWdlcy9waWNrZXR3aXJlLmpwZ1wiLFxyXG4gICAgICBcImRlc2NcIjogXCJUaGlzIHdpbGwgYmUgYSBjbHViIHRyaXAgZG93biB0byBQaWNrZXQgV2lyZSBDYW55b25sYW5kcyBpbiBzb3V0aGVhc3Rlcm4gQ29sb3JhZG8uICBUaGlzIHdpbGwgbm90IGJlIGEgd2hlZWxpbmcgdHJpcCBidXQgd2lsbCBiZSBhIGd1aWRlZCB0b3VyIG9mIHRoZSBwYXJrIHRvIHZpZXcgaW50ZXJlc3RpbmcgYXJ0aWZhY3RzIGFuZCBkaW5vc2F1ciB0cmFja3MuICBDb250YWN0IEppbSBpZiB5b3Ugd291bGQgbGlrZSBtb3JlIGluZm9ybWF0aW9uLlwiLFxyXG4gICAgICBcImxhdFwiOiBcIlwiLFxyXG4gICAgICBcImxvbmdcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiQ2hyaXN0bWFzIGZvciBLaWRzXCIsXHJcbiAgICAgIFwiZ3JvdXBcIjogXCJBbGwgR3JvdXBzXCIsXHJcbiAgICAgIFwiZXZlbnREYXRlXCI6IFwiTm92ZW1iZXIgLSBEZWNlbWJlclwiLFxyXG4gICAgICBcImRhdGVGbGRcIjogXCIxMi8yNS8yMDIwXCIsXHJcblx0ICBcImR1cmF0aW9uXCI6IDgsXHJcblx0ICBcInN0YXJ0VGltZUZsZFwiOiBcIjhcIixcclxuICAgICAgXCJtZWV0QXRcIjogXCJcIixcclxuICAgICAgXCJtZWV0VGltZVwiOiBcIlwiLFxyXG4gICAgICBcImxlYWRlcnNcIjogXCJKaW1cIixcclxuICAgICAgXCJsZWFkZXIxXCI6IFwiSmltXCIsXHJcbiAgICAgIFwibGVhZGVyMVBob25lXCI6IFwiKDcxOSkyMDAtNDc1N1wiLFxyXG4gICAgICBcInJhdGluZ1wiOiBcIkZ1blwiLFxyXG4gICAgICBcImltYWdlU3JjXCI6IFwifi9pbWFnZXMvY2hyaXN0bWFzNGtpZHMuanBnXCIsXHJcbiAgICAgIFwiZGVzY1wiOiBcIkNocmlzdG1hcyBmb3IgS2lkcyBpcyBhbiBldmVudCB3ZSBzcG9uc29yIGFuZCBzdXBwb3J0IGV2ZXJ5IHllYXIuICBZb3UgY2FuIHBpY2sgdGhlIG5hbWUgb2YgYSBuZWVkeSBjaGlsZCAocHJvdmlkZWQgbGlzdCkgYW5kIHB1cmNoYXNlIGEgZ2lmdCBmb3IgdGhlbS4gIENvbnRhY3QgSmltIG9yIHNlZSB0aGUgd2ViIHNpdGUgYXMgd2UgZ2V0IGNsb3NlciB0byB0aGlzIGV2ZW50IGlmIHlvdSB3b3VsZCBsaWtlIG1vcmUgaW5mb3JtYXRpb24uXCIsXHJcbiAgICAgIFwibGF0XCI6IFwiXCIsXHJcbiAgICAgIFwibG9uZ1wiOiBcIlwiXHJcblxyXG59XHJcblxyXG4gICAgICAgICAgICAgICAgXVxyXG4qL1xyXG4gICAgfTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgICAgICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IGFyZ3MudmlldztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB2aWV3LnBhZ2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXBwZWRJdGVtID0gdmlldy5iaW5kaW5nQ29udGV4dDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJldmVudCB0YXBwZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoU2NoZWR1bGVEZXRhaWxzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogdGFwcGVkSXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG9uQWJvdXRUYXAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKEFib3V0U2NoZWR1bGUpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcInVybFwiOiBcImh0dHA6Ly9kYXRhLmNzYzR3LmNvbS9ldmVudHMuanNvblwiIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cyA9IHJlc3VsdC5kYXRhLmV2ZW50cztcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXN1bHQgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5ldmVudHMpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjYXVnaHQgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoTm9Db25uZWN0KTtcclxuICAgICAgICAgICAgfSksIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgXCIgKyBlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxuXHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4gICAgLnBpYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTsgXHJcbiAgICAgICAgbWFyZ2luOiAyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXZlbnQge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7IFxyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ldmVudDEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7IFxyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ldmVudDIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7IFxyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ldmVudERhdGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XHJcbiAgICB9XHJcblxyXG4uZXZlbnQtcGFuZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMztcclxuXHJcbn1cclxuXHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhvbWUtcGFuZWxcIj5cclxuICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJldmVudC5pbWFnZVNyY1wiIC8+IFxyXG4gICAgICAgICAgICA8QnV0dG9uIEB0YXA9XCJhZGRUb0NhbGVuZGFyKGV2ZW50KVwiIHRleHQ9XCJBZGQgdG8gTXkgQ2FsZW5kYXJcIiBjbGFzcz1cImJ1dHRvblwiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImV2ZW50Lm5hbWVcIiBjbGFzcz1cImluZm8tcGFuZWxcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5ncm91cFwiIGNsYXNzPVwiaW5mby1wYW5lbFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImV2ZW50LmV2ZW50RGF0ZVwiIHRleHR3cmFwPVwidHJ1ZVwiIGNsYXNzPVwiaW5mby1wYW5lbFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCI5MCwgKlwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJNZWV0IGF0OiBcIiBjb2w9XCIwXCIgY2xhc3M9XCJzcG9uTGVmdFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5tZWV0QXRcIiBjb2w9XCIxXCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJzcG9uUmlnaHRcIiBAdGFwPVwidGFwQWRkcihldmVudC5tZWV0QXQpXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiOTAsICpcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiTWVldCB0aW1lOiBcIiBjb2w9XCIwXCIgY2xhc3M9XCJzcG9uTGVmdFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJldmVudC5tZWV0VGltZVwiIGNvbD1cIjFcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInNwb25uYW1lUmlnaHRcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCI5MCwgKlwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJSYXRpbmc6IFwiIGNvbD1cIjBcIiBjbGFzcz1cInNwb25MZWZ0XCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImV2ZW50LnJhdGluZ1wiIGNvbD1cIjFcIiB0ZXh0d3JhcD1cInRydWVcIiBjbGFzcz1cInNwb25uYW1lUmlnaHRcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCI5MCwgKlwiID5cclxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJMZWFkZXJzOiBcIiBjb2w9XCIwXCIgY2xhc3M9XCJzcG9uTGVmdFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cIjFcIiBjb2x1bW5zPVwiKiwqLCpcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImV2ZW50LmxlYWRlcjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJzcG9uUmlnaHRcIiBAdGFwPVwiY2FsbChldmVudC5sZWFkZXIxUGhvbmUpXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImV2ZW50LmxlYWRlcjJcIiBjb2w9XCIxXCIgY2xhc3M9XCJzcG9uUmlnaHRcIiBAdGFwPVwiY2FsbChldmVudC5sZWFkZXIyUGhvbmUpXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImV2ZW50LmxlYWRlcjNcIiBjb2w9XCIyXCIgY2xhc3M9XCJzcG9uUmlnaHRcIiBAdGFwPVwiY2FsbChldmVudC5sZWFkZXIzUGhvbmUpXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImV2ZW50LmRlc2NcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cIm1vdGQtbGFiZWxcIiBoZWlnaHQ9XCIxMDAlXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBAdGFwPVwiJG1vZGFsLmNsb3NlXCIgdGV4dD1cIkNsb3NlXCIgY2xhc3M9XCJidXR0b25cIiAvPlxyXG4gICAgICAgICAgPC9TdGFja0xheW91dD4gXHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPiAgXHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHBob25lIGZyb20gXCJuYXRpdmVzY3JpcHQtcGhvbmVcIjtcclxuICAgIGltcG9ydCBlbWFpbCBmcm9tIFwibmF0aXZlc2NyaXB0LWVtYWlsXCI7XHJcbiAgICB2YXIgQ2FsZW5kYXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhbGVuZGFyXCIpO1xyXG4gICAgdmFyIExvY2F0ZUFkZHJlc3MgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2F0ZS1hZGRyZXNzXCIpLkxvY2F0ZUFkZHJlc3M7XHJcbiAgICBjb25zdCB1dGlsc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCIpO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1wiY29udGV4dFwiXSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBldmVudCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQgfHwge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgICAgIG5hdlRvKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0b3VjaGVkIG5hdlRvIFwiICsgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKGFyZ3MpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHRhcEFkZHIoYXJncykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvdWNoZWQgdGFwQWRkclwiICsgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRvciA9IG5ldyBMb2NhdGVBZGRyZXNzKCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdG9yLmxvY2F0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYXJncyxcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJNYXBzIGFwcCBsYXVuY2hlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgY2FsbChhcmdzKSB7IFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvdWNoZWQgcGhvbmUgbnVtYmVyIFwiICsgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBwaG9uZS5kaWFsKGFyZ3MsdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzZW5kKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzID0gYXJncztcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlbWFpbCBhZGRyZXNzIGlzIFwiICsgYWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICBlbWFpbC5jb21wb3NlKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogXCJNZXNzYWdlIGZyb20gTW9iaWxlIEFwcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBbYWRkcmVzc10sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkVtYWlsIGNvbXBvc2VyIGNsb3NlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGFkZFRvQ2FsZW5kYXIoYXJncykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkFyZ3MgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShhcmdzKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgeXIgPSBOdW1iZXIoYXJncy5kYXRlRmxkLnN1YnN0cmluZyg2LDEwKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHkgPSBOdW1iZXIoYXJncy5kYXRlRmxkLnN1YnN0cmluZygzLDUpKTtcclxuICAgICAgICAgICAgICAgIHZhciBtdGggPSBOdW1iZXIoYXJncy5kYXRlRmxkLnN1YnN0cmluZygwLDIpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaHIgPSBOdW1iZXIoYXJncy5zdGFydFRpbWVGbGQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGR1ciA9IE51bWJlcihhcmdzLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIHZhciBzdER0ID0gbmV3IERhdGUoeXIsIG10aCwgZHksIGhyKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmRUbWUgPSBociArIGFyZ3MuZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kRHQgPSBuZXcgRGF0ZSh5cixtdGgsZHksZW5kVG1lKTtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydER0ID0gbmV3IERhdGUoeXIpXHJcbiAgICAgICAgICAgICAgICB2YXIgZHVyID0gYXJncy5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIHZhciBldnROYW1lID0gXCJDU0M0VyAtIFwiICsgYXJncy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGV2dE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiBzdER0LFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZERhdGU6IGVuZER0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBhcmdzLm1lZXRBdFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucmVtaW5kZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0OiA2MFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiT3B0aW9uczpcIiArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpKTtcclxuICAgICAgICAgICAgICAgIGNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNyZWF0ZSBFdmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ3JlYXRlIEV2ZW50IGluIHlvdXIgY2FsZW5kYXI/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIllFU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTk9cIlxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0PT10cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbGVuZGFyLmNyZWF0ZUV2ZW50KG9wdGlvbnMpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihjcmVhdGVkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlZCBFdmVudCB3aXRoIElEOiBcIiArIGNyZWF0ZWRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjcmVhdGluZyBhbiBFdmVudDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuaG9tZS1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkci1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLXBhbmVsIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2MtcGFuZWwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogMjA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmlvLXBhbmVsIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogMTA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcG9uSXRlbSB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcG9uTGVmdCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwb25uYW1lUmlnaHQge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwb25SaWdodCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc3BvblJpZ2h0Tm9VTCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubW90ZC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1O1xyXG4gICAgbWFyZ2luLXRvcDogNTtcclxuICAgIG1hcmdpbi1yaWdodDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTtcclxuICAgIHBhZGRpbmc6IDU7XHJcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIxOTIxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cclxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cInNwb25QYW5lbFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2UgOnNyYz1cInNwb25zb3IuaW1hZ2VzcmNcIiAvPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzcG9uc29yLmFkZHJlc3NcIiB0ZXh0V3JhcD1cInRydWVcIiBAdGFwPVwidGFwQWRkcihzcG9uc29yLmFkZHJlc3MpXCIgY2xhc3M9XCJhZGRyLXBhbmVsXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjEwMCwgKlwiID5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiICAgQ29udGFjdDogXCIgY29sPVwiMFwiIGNsYXNzPVwibGVmdENvbFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzcG9uc29yLmNvbnRhY3RcIiBjb2w9XCIxXCIgdGV4dHdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJyaWdodENvbE5vVUxcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+ICBcclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjEwMCwgKlwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQaG9uZTogXCIgY29sPVwiMFwiIGNsYXNzPVwibGVmdENvbFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzcG9uc29yLnBob25lXCIgY29sPVwiMVwiIHRleHR3cmFwPVwidHJ1ZVwiIGNsYXNzPVwicmlnaHRDb2xcIiBAdGFwPVwiY2FsbChzcG9uc29yLnBob25lKVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjEwMCwgKlwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJFTWFpbDogXCIgY29sPVwiMFwiIGNsYXNzPVwibGVmdENvbFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzcG9uc29yLmVtYWlsXCIgY29sPVwiMVwiIHRleHR3cmFwPVwidHJ1ZVwiIGNsYXNzPVwicmlnaHRDb2xcIiBAdGFwPVwic2VuZChzcG9uc29yLmVtYWlsKVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjEwMCwgKlwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJXZWJTaXRlOiBcIiBjb2w9XCIwXCIgY2xhc3M9XCJsZWZ0Q29sXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInNwb25zb3IudXJsXCIgY29sPVwiMVwiIHRleHR3cmFwPVwidHJ1ZVwiIGNsYXNzPVwicmlnaHRDb2xcIiBAdGFwPVwibmF2VG8oc3BvbnNvci51cmwpXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzcG9uc29yLmJpb1wiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwicmVkLW1lc3NhZ2VcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8QnV0dG9uIEB0YXA9XCIkbW9kYWwuY2xvc2VcIiB0ZXh0PVwiQ2xvc2VcIiBjbGFzcz1cImJ1dHRvblwiIC8+XHJcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PiBcclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+ICBcclxuXHJcblxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBwaG9uZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBob25lXCI7XHJcbiAgICBpbXBvcnQgZW1haWwgZnJvbSBcIm5hdGl2ZXNjcmlwdC1lbWFpbFwiO1xyXG4gICAgdmFyIExvY2F0ZUFkZHJlc3MgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2F0ZS1hZGRyZXNzXCIpLkxvY2F0ZUFkZHJlc3M7XHJcbiAgICBjb25zdCB1dGlsc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCIpO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1wiY29udGV4dFwiXSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBzcG9uc29yKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dCB8fCB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgbmF2VG8oYXJncykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvdWNoZWQgbmF2VG8gXCIgKyBhcmdzKTtcclxuICAgICAgICAgICAgICAgIHV0aWxzTW9kdWxlLm9wZW5VcmwoYXJncyk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgdGFwQWRkcihhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidG91Y2hlZCB0YXBBZGRyXCIgKyBhcmdzKTtcclxuICAgICAgICAgICAgICAgIHZhciBsb2NhdG9yID0gbmV3IExvY2F0ZUFkZHJlc3MoKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0b3IubG9jYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBjYWxsKGFyZ3MpIHsgXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidG91Y2hlZCBwaG9uZSBudW1iZXIgXCIgKyBhcmdzKTtcclxuICAgICAgICAgICAgICAgIHBob25lLmRpYWwoYXJncyx0cnVlKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHNlbmQoYXJncykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZHJlc3MgPSBhcmdzO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImVtYWlsIGFkZHJlc3MgaXMgXCIgKyBhZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgIGVtYWlsLmNvbXBvc2UoIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBcIk1lc3NhZ2UgZnJvbSBNb2JpbGUgQXBwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IFthZGRyZXNzXSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRW1haWwgY29tcG9zZXIgY2xvc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5hZGRyLXBhbmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICBtYXJnaW46IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4uc3BvblBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG59XHJcblxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNC1XaGVlbGVyc1wiIGNsYXNzPVwiYWN0aW9uLWJhclwiIC8+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGlzdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJoZWFkZXItbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgdGV4dD1cIk91ciBTcG9uc29yc1wiIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidXR0b25cIiB0ZXh0PVwiQWJvdXQgT3VyIFNwb25zb3JzXCIgQHRhcD1cIm9uQWJvdXRUYXBcIiAvPlxyXG4gICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwic3BvbnNvciBpbiBzcG9uc29yc1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCIgaGVpZ2h0PVwiMTAwJVwiIHNlcGFyYXRvckNvbG9yPVwid2hpdGVcIiBjbGFzcz1cImxpc3QtcGFuZWxcIiA+XHJcbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiMjAwLCpcIiAsIHJvd3M9XCIqLCpcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJzcG9uc29yLmltYWdlc3JjXCIgcm93PVwiMFwiIGNvbD1cIjBcIiBoZWlnaHQ9XCIxNTBcIiB3aWR0aD1cIjE1MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInNwb25zb3IubmFtZVwiIGNsYXNzPVwibGlzdFJpZ2h0SXRlbVwiIHRleHRXcmFwPVwidHJ1ZVwiIHJvdz1cIjBcIiBjb2w9XCIxXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+ICBcclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPiAgXHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IFNwb25zb3JEZXRhaWxzIGZyb20gXCIuL1Nwb25zb3JEZXRhaWxzXCI7XHJcbiAgICBpbXBvcnQgQWJvdXRTcG9uc29ycyBmcm9tIFwiLi9BYm91dFNwb25zb3JzXCI7XHJcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRhdGE6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNwb25zb3JzOiBbXVxyXG4vKlxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIjRXaGVlbCBQYXJ0c1wiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNTcyMCBOLiBBY2FkZW15IEJsdmQsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkxOFwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy80d3AucG5nXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig3MTkpNTkxLTk0MDBcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy40d2hlZWxwYXJ0cy5jb21cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCI0IFdoZWVsIFBhcnRzIGlzIHlvdXIgb25lLXN0b3Agc291cmNlIGZvciB0cnVjayBwYXJ0cyBhcyB3ZWxsIGFzIHBhcnRzIGZvciBKZWVwcyAmIFNVVnMsIHdpdGggdGhlIG5hdGlvbuKAmXMgbGFyZ2VzdCBpbnZlbnRvcnkgb2Ygb2ZmLXJvYWQgNHg0IHByb2R1Y3RzIGluY2x1ZGluZyB0aXJlcywgd2hlZWxzLCBsaWZ0IGtpdHMsIHdpbmNoZXMsIHRvbm5lYXUgY292ZXJzLCBmZW5kZXIgZmxhcmVzLCBtdWQgZmxhcHMsIGFuZCBtb3JlLiAgRmVhdHVyaW5nIGFsbCB0aGUgdG9wIGJyYW5kcyBsaWtlIFBybyBDb21wLCBTdXBlciBTd2FtcGVyLCBGYWJ0ZWNoLCBXYXJuIGFuZCBtb3JlLCB0cnVzdCA0IFdoZWVsIFBhcnRzIGZvciBhbGwgeW91ciBvZmYtcm9hZCBhbmQgNHg0IG5lZWRzIGFzIHdlbGwgYXMgdXRpbGl0eSB0cnVjayBwYXJ0cy5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQZXJraW5zIE1vdG9yc1wiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMTIwNSBNb3RvciBDaXR5IERyaXZlLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MDVcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvcGVya2lucy5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTQ3NS0yMzMwXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5wZXJraW5zbW90b3JzLmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJPdXIgUGVya2lucyBNb3RvciBDb21wYW55IGRlYWxlcnNoaXAgaW4gdGhlIENvbG9yYWRvIFNwcmluZ3MgYXJlYSBvZmZlcnMgYSBsYXJnZSBpbnZlbnRvcnkgb2YgdmVoaWNsZXMgYXMgd2VsbCBhcyB0aGUgc2VydmljZXMgbmVlZGVkIHRvIGNhcmUgZm9yIHlvdXIgdmVoaWNsZS4gT3VyIHNlcnZpY2UgY2VudGVyIHRlY2huaWNpYW5zIGFyZSBjZXJ0aWZpZWQgd2l0aCBleHBlcnRpc2UgaW4gdGhlIENocnlzbGVyIERvZGdlIEplZXAgUmFtIGJyYW5kLiBPdXIgc2VydmljZSBkZXBhcnRtZW50IG9mZmVycyB0aGUgcGFydHMgYW5kIGFjY2Vzc29yaWVzIHlvdXIgQ2hyeXNsZXIgRG9kZ2UgSmVlcCBSYW0gbmVlZHMgdG8gc3RheSBzYWZlIG9uIHRoZSByb2FkIGZvciBtYW55IG1vcmUgeWVhcnMgdG8gY29tZS5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJGYXJpY3kgQm95cyBDaHJ5c2xlciBKZWVwXCIsIFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI0OTUwIE5ldyBDYXIgRHJpdmUsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkxOFwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCJIYXJyaXNvblwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvZmFyaWN5bG9nby5wbmdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSk2MzYtMTMzM1wiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5mYXJpY3kuY29tL1wiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIkZvciBvdmVyIDc1IHllYXJzLCBUaGUgRmFyaWN5IEJveXMgaGFzIHNlcnZlZCBDb2xvcmFkbyB3aXRoIGludGVncml0eSwgbG95YWx0eSAmIGxvdmUg4oCUIHN0cml2aW5nIHRvIG1ha2UgYnV5aW5nIGEgbmV3IGNhciBhcyBlbmpveWFibGUgYW5kIGV4Y2l0aW5nIGFzIGdldHRpbmcgYSBuZXcgY2FyLiBXaGV0aGVyIHlvdSBhcmUgc2hvcHBpbmcgdGhlIGJlc3QgbmV3IEplZXAgYW5kIENocnlzbGVyIHNlbGVjdGlvbiBpbiBzb3V0aGVybiBDb2xvcmFkbyBvciBvdXIgd2lkZSB2YXJpZXR5IG9mIHVzZWQgdmVoaWNsZXMgd2l0aCBubyBoYWdnbGUgcHJpY2luZywgeW914oCZbGwgc2VlIHdoeSBzdGFydGluZyB3aXRoIHVzIGlzIHRoZSBlYXNpZXN0IHdheSB0byBnZXQgYmVoaW5kIHRoZSB3aGVlbCBvZiB5b3VyIG5leHQgY2FyLiBBZGRpdGlvbmFsbHksIHlvdeKAmWxsIGZpbmQgb3VyIHBhcnRzIGFuZCBzZXJ2aWNlIHRlYW0gdG8gYmUga25vd2xlZGdlYWJsZSwgZnJpZW5kbHkgYW5kIGZvY3VzZWQgb24geW91ciBuZWVkcyBmaXJzdC5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBY21lIEZpcmUgYW5kIFNhZmV0eVwiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMTQxOSBTLiBXYWhzYXRjaCBBdmVudWUsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkwNVwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9BY21lLnBuZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTQ3My0yMjU5XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly9hY21lZmlyZWFuZHNhZmV0eWluYy5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiU2luY2UgMTk1NSwgQWNtZSBGaXJlICYgU2FmZXR5IEVxdWlwbWVudCBDby4gSW5jLiBoYXMgYmVlbiBwcm92aWRpbmcgcmVsaWFibGUgZmlyZSBzYWZldHkgb3B0aW9ucyBmb3IgcmVzaWRlbnRzIGFuZCBidXNpbmVzc2VzIGluIHRoZSBTb3V0aGVhc3QgQ29sb3JhZG8gYXJlYS5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCZXN0IFdlc3QgVGlyZSBhbmQgU2VydmljZSwgSW5jLlwiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzI4NyBTLiBBY2FkZW15IEJsdmQsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkxNlwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9iZXN0d2VzdC5wbmdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSkzOTAtOTQ1NVwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LmJlc3R3ZXN0dGlyZWluYy5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiV2UgYXJlIHlvdXIgbG9jYWwgaW5kZXBlbmRlbnQgR29vZHllYXIgZGVhbGVyISBBdCBCZXN0IFdlc3QgVGlyZSAmIFNlcnZpY2UsIHdlIGRvIGEgbG90IG1vcmUgdGhhbiBqdXN0IHRpcmUgc2VydmljZSBhbmQgc2FsZXMuIE91ciBBU0UgQ2VydGlmaWVkIHRlY2huaWNpYW5zIHByb3ZpZGUgYXV0byByZXBhaXIgYW5kIG1haW50ZW5hbmNlIHNlcnZpY2VzIGZvciBjYXJzLCB0cnVja3MsIGFuZCBTVVZzLiBBdCBvdXIgdGhyZWUgbG9jYXRpb25zIGluIE5vcnRoIENvbG9yYWRvIFNwcmluZ3MsIFNvdXRoIENvbG9yYWRvIFNwcmluZ3MsIGFuZCBTdGVybGluZywgeW91IHdpbGwgZmluZCBhIHRlYW0gb2YgZXhwZXJpZW5jZWQgdGVjaG5pY2lhbnMgcmVhZHkgdG8gbWVldCBhbGwgb2YgeW91ciB0aXJlIHNlcnZpY2UgYW5kIGF1dG8gcmVwYWlyIG5lZWRzLiBJbiBmYWN0LCB3ZSBvZmZlciBhIDIgeWVhci8yNCwwMDAgbWlsZSB3YXJyYW50eSBvbiBwYXJ0cyBhbmQgbGFib3IgdGhyb3VnaCBHb29keWVhciwgc28geW91IGNhbiByZXN0IGFzc3VyZWQgeW91ciB2ZWhpY2xlIGhhcyByZWNlaXZlZCB0b3AgcXVhbGl0eSBzZXJ2aWNlLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlByZWRhdG9yIDRXRFwiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNDYyMCBOLiBOZXZhZGEgQXZlLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MDdcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvcHJlZGF0b3IuanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig3MTkpNTI4LTU3OTBcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3ByZWRhdG9yNHdkLmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJXZSBzZXJ2ZSBvdXIgNC13aGVlbCBkcml2ZSBlbnRodXNpYXN0cyBhbmQgbWFrZSBuZXcgb25lcyBieSBvdXIgcXVhbGl0eSBvZiB3b3JrLiBXaGV0aGVyIGl04oCZcyBmb3IgYnVzaW5lc3MsIGV2ZXJ5IGRheSB0cmF2ZWwgb3IganVzdCBmb3IgZnVuLCB3ZeKAmXZlIGdvdCB0aGUgZXhwZXJ0cyB0byBzZXJ2aWNlIHlvdXIgNC13aGVlbCBkcml2ZSB2ZWhpY2xlLiBPbmUgdGhpbmcgd2lsbCBhbHdheXMgcmVtYWluIGNvbnN0YW50IOKAlCB0byBtYWtlIHN1cmUgeW91ciB2ZWhpY2xlIGlzIHNhZmUgYW5kIHdpbGwgZ2V0IHlvdSB0byBhbmQgZnJvbSB5b3VyIGRlc3RpbmF0aW9uLiBTbyB3aGV0aGVyIHlvdeKAmXJlIGNsaW1iaW5nIGEgaGlsbCwga2lja2luZyB1cCBkaXJ0LCBzcGxhc2hpbmcgdGhyb3VnaCByaXZlcnMsIG9yIHRyYXZlbGluZyBjaXR5IHN0cmVldHMsIHdlIHdhbnQgeW91IHRvIGhhdmUgZnVuIGFuZCBlbmpveSB0aGUgcmlkZS4gIFdl4oCZcmUgYSBmdWxsIHNlcnZpY2Ugc2hvcCBzcGVjaWFsaXppbmcgaW4gNC13aGVlbCBkcml2ZSB2ZWhpY2xlcy4gV2UgYXJlIEJsdWUgU2VhbCBBU0UgQ2VydGlmaWVkLCB0aGUgaGlnaGVzdCBBU0UgQ2VydGlmaWNhdGlvbiBhdmFpbGFibGUgdG8gc2VydmljZSByZXBhaXIgc2hvcHMuIFdlIGFyZSBhIG1lbWJlciBvZiB0aGUgQmV0dGVyIEJ1c2luZXNzIEJ1cmVhdS4gV2UgaGF2ZSBrbm93bGVkZ2VhYmxlIGV4cGVyaWVuY2VkIGNvdW50ZXIgc3RhZmYgdG8gYXNzaXN0IHdpdGggcHVyY2hhc2luZyBkZWNpc2lvbnMuIFdlIHByaWRlIG91cnNlbHZlcyBvbiBvdXIgc2VydmljZSBleGNlbGxlbmNlIGFuZCBjdXN0b21lciBjYXJlLiBXZeKAmXJlIGhhcHB5IHRvIHByb3ZpZGUgc2VydmljZSBlc3RpbWF0ZXMuIFdlIHByb3ZpZGUgcXVhbGl0eSA0eDQgcHJvZHVjdHMgYXQgY29tcGV0aXRpdmUgcHJpY2luZy4gQ29tZSB2aXNpdCBvdXIgc2hvd3Jvb20uIE91ciB3ZWJzaXRlIGNvbnRhaW5zIG9ubHkgYSBzbWFsbCBwZXJjZW50YWdlIG9mIHRoZSBwcm9kdWN0cyB3ZSBzdG9jay4gU29tZSBzYWxlIGl0ZW1zIGxpc3RlZCBvbiB0aGUgd2Vic2l0ZSBtYXkgbm90IGJlIGFkdmVydGlzZWQgaW4gdGhlIHN0b3JlIHNvIHRha2UgYSBtaW51dGUgdG8gbG9vayBhcm91bmQgYW5kIGRvbid0IGhlc2l0YXRlIHRvIGNvbnRhY3QgdXMgd2l0aCBhbnkgcXVlc3Rpb25zLiBBIHBvcnRpb24gb2YgZXZlcnkgcHVyY2hhc2UgZ29lcyB0byBrZWVwaW5nIDQgd2hlZWwgZHJpdmUgdHJhaWxzIG9wZW4gYW5kIG9wZW5pbmcgbmV3IHRyYWlscy5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQYXRyaW90IDRYNFwiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCJLcmlzXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9wYXRyaW90LmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTY4NC01MDI1XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vcGF0cmlvdDR4NC5idXNpbmVzcy5zaXRlL1wiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIkF1dG8gUmVwYWlyIFNob3AgaW4gQ29sb3JhZG8gU3ByaW5ncyAtIFNwZWNpYWxpemluZyBpbiA0WDQgcmVwYWlyc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNwb3J0c21hbidzIFdhcmVob3VzZVwiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNTU1IE4uIENoZWx0b24gUm9hZCwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTA5XCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3Nwb3J0c21hbnMtd2FyZWhvdXNlLnBuZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTU5Ny05MjAwXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LnNwb3J0c21hbnN3YXJlaG91c2UuY29tL1wiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIldoZXRoZXIgeW91ciBwYXNzaW9uIGlzIGh1bnRpbmcsIGZpc2hpbmcsIGNhbXBpbmcsIGJhY2twYWNraW5nIG9yIHNob290aW5nLCBpdCdzIGltcG9ydGFudCB0byBoYXZlIHRoZSByaWdodCBlcXVpcG1lbnQgd2hlbiB5b3UgaGVhZCBpbnRvIHRoZSBncmVhdCBvdXRkb29ycy4gUXVhbGl0eSBnZWFyIGdpdmVzIHlvdSB0aGUgZWRnZSB5b3UgbmVlZCB0byBwZXJmb3JtIHdlbGwgYW5kIGVuam95IHRoZSBqb3VybmV5LiBUaGF0J3Mgd2h5IFNwb3J0c21hbidzIFdhcmVob3VzZSBjYXJyaWVzIG9ubHkgdG9wLXF1YWxpdHksIGJyYW5kLW5hbWUgcHJvZHVjdHMgZm9yIHRoZSBzZXJpb3VzIG91dGRvb3IgZW50aHVzaWFzdC5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJGdW5UcmVrcyBHdWlkZWJvb2tzXCIsIFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCJQLk8uIEJveCAzMTI3LCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODAxMzJcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvZnVudHJla3MuanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig3MTkpMzkwLTk0NTVcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiVGhlcmXigJlzIGEgd2hvbGUgbG90IG9mIHdvcmxkIG91dCB0aGVyZSB3YWl0aW5nIHRvIGJlIGV4cGxvcmVkLiBXZeKAmWxsIGVxdWlwIHlvdSB3aXRoIGFsbCB0aGUgaW5mb3JtYXRpb24geW91IG5lZWQg4oCTIGRpZmZpY3VsdHkgbGV2ZWxzLCBkZXRhaWxlZCBkaXJlY3Rpb25zLCBoaWdoLXF1YWxpdHkgcGhvdG9zLCBhbmQgZ3VpZGVib29rcyB0byBnZXQgeW91IG9mZi1yb2FkIGFuZCBvdXQgb2YgdGhlIG1lbnRhbCBncmluZC4gQWZ0ZXIgYWxsLCB5b3VyIGZyZWUgdGltZSBzaG91bGQgYmUgc3BlbnQgZXhhY3RseSBsaWtlIHRoYXQg4oCTIGZyZWUuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUm9jayBXYXJlIFdlbGRpbmcgYW5kIEZhYnJpY2F0aW9uXCIsIFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI2MDUwIFN0ZXRzb24gSGlsbHMgQmx2ZCwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTIzXCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3JvY2t3YXJlLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTMyOC0wNzk2XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cucm9ja3dhcmUubmV0L1wiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIlJvY2sgV2FyZSBDdXN0b20gV2VsZGluZyBhbmQgRmFicmljYXRpb24gaXMgeW91ciBmdWxsIHNlcnZpY2Ugb2ZmIHJvYWQgdmVoaWNsZSBSZXBhaXIsIFNlcnZpY2UgJiBDdXN0b20gQWNjZXNzb3JpZXMgRmFjaWxpdHkuIFJvY2sgV2FyZSBzcGVjaWFsaXplcyBpbiBvZmYtcm9hZCBhY2Nlc3NvcmllcyBmb3IgTGFuZCBSb3ZlcnMgaW5jbHVkaW5nIHRoZSBEZWZlbmRlciA5MCwgMTEwLCBSYW5nZSBSb3ZlciBDbGFzc2ljLCBhbmQgRGlzY292ZXJ5LCBhcyB3ZWxsIGFzIEN1c3RvbSBGYWJyaWNhdGlvbiBmb3IgYWxsIDR4NCBtb2RlbHMuIEFkZGl0aW9uYWxseSBSb2NrIFdhcmUgYnVpbGRzIGN1c3RvbSB2ZWhpY2xlcyB0aGF0IG1lZXQgdGhlIG5lZWRzIG9mIHRoZSBvZmYgcm9hZCBjb21tdW5pdHkgZnJvbSB0aGUgZmFtaWx5IHJlY3JlYXRpb25hbCByaWdzIHRvIHR1cm4ga2V5IHJvY2tjcmF3bGVycy4gUm9jayBXYXJlIGlzIGxvY2F0ZWQgaW4gQ29sb3JhZG8gU3ByaW5ncywgQ29sb3JhZG8gYW5kIGlzIGRlZGljYXRlZCB0byBxdWFsaXR5IGFuZCBjdXN0b21lciBzZXJ2aWNlIVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbG9yYWRvJ3MgRmluZXN0IFdpbmRvdyBXZWxsIENvdmVyc1wiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCJXYXJkIG9yIEplbm5pZmVyIFdpbGxpYW1zXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9jd3cuanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiY29sb3JhZG93aW5kb3d3ZWxsc0BnbWFpbC5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTUyMi0yNDg1XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly9jb2xvcmFkb3dpbmRvd3dlbGxzLmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJTZXJ2aW5nIHRoZSBncmVhdGVyIENvbG9yYWRvIFNwcmluZ3MgYXJlYSwgd2UgaGF2ZSB3aW5kb3cgd2VsbCBjb3ZlcnMgdGhhdCBhcmUgZGVzaWduZWQgdG8gaGVscCBrZWVwIG91dCBSYWluLCBTbm93LCBIYWlsLCBJbnRydWRlcnMsIERlYnJpcywgUGV0cywgQ2hpbGRyZWRuIG91ciBjb3ZlcnMgYXJlIG1hdGVuYW5jZSBmcmVlLCBsaWdodHdlaWdodCwgZWdyZXNzIHNhZmUgYW5kIFVWIHByb3RlY3RlZC4gIFRoZXkgYXJlIG1hZGUgZnJvbSBwbG95Y2FyYm9uYXRlIGFuZCBhbHVtaW51bSBtYXRlcmlhbHMuICBUcmFuc3BhcmVudCBjb3ZlciBhbGxvd3MgbGlnaHQgaW4uICBTZWN1cml0eSBicmFja2V0cyBhdCBOTyBFWFRSQSBDSEFSR0UuICBUZXN0ZWQgdG8gaG9sZCB1cCB0byAzNTAgbGJzLiAgQ3VzdG9tIG1hZGUgYXQgeW91ciBob21lLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkxhbmQgUm92ZXIgb2YgQ29sb3JhZG8gU3ByaW5nc1wiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNTY1IEF1dG9tb3RpdmUgRHJpdmUsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkwNVwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9sYW5kcm92ZXIucG5nXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig3MTkpMzAyLTEwMDBcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cucmVkbm9sYW5kLmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJMYW5kIFJvdmVyIHZlaGljbGVzIGFyZSBwcmVzdGlnaW91cywgbHV4dXJ5IFNVVnMsIGFuZCB3ZSB3YW50IHlvdSB0byBoYXZlIGFuIGVxdWFsbHkgZ3JlYXQgZXhwZXJpZW5jZSB3aGVuIHlvdSB2aXNpdCBMYW5kIFJvdmVyIENvbG9yYWRvIFNwcmluZ3MuIFdlIGJlbGlldmUgaW4gcHV0dGluZyBDYXN0bGUgUm9jaywgUHVlYmxvLCBhbmQgQ29sb3JhZG8gU3ByaW5nLCBDb2xvcmFkbyBjdXN0b21lcnMgZmlyc3QgYW5kIHRoZSBzYWxlIHNlY29uZC4gT3VyIGdvYWwgaXMgdG8gYnVpbGQgcmVwdXRhdGlvbnMgZm9yIGxpZmUuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGlzY291bnQgVGlyZVwiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNzcwIEFiYm90dCBMYW5lLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MDZcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvZGlzY291bnR0aXJlLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTUyMC0wNjk0XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmRpc2NvdW50dGlyZS5jb20vc3RvcmUvY28vY29sb3JhZG8tc3ByaW5ncy9zLzE0MzBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJXaXRoIHRoZSBtb3N0IHJlbGlhYmxlIHRpcmUgYW5kIHdoZWVsIHNlcnZpY2VzIGFyb3VuZCwgdGhlIGxvY2FsIERpc2NvdW50IFRpcmUgc3RvcmUgaW4gQ29sb3JhZG8gc3ByaW5ncywgQ08gY2FuIGhlbHAgeW91IG1ha2UgdGhlIHJpZ2h0IGRlY2lzaW9ucyBmb3IgeW91ciB2ZWhpY2xlLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkJhcnJvbiBMYW5kXCIsIFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIyNzkwIE5vcnRoIEFjYWRlbXkgQmx2ZCwgU3VpdGUgMzExLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MTdcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvYmFycm9ubGFuZC5wbmdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSkzNjAtNjgyN1wiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vYmFycm9ubGFuZC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiUHJvZmVzc2lvbmFsIExhbmQgU3VydmV5aW5nIHNlcnZpbmcgdGhlIFJvY2t5IE1vdW50YWluIFJlZ2lvbi4gIFdoZXRoZXIgeW91ciBwcm9qZWN0IGlzIHByaXZhdGUgb3IgY29tbWVyY2lhbCwgd2UgYXJlIGhlcmUgZm9yIHlvdSBzdXJ2ZXlpbmcgbmVlZHMuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2FsbWFydFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI3MDcgUy4gOHRoIFN0cmVldCwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTA1XCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3dhbG1hcnQuanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig3MTkpNjMzLTA3MzZcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cud2FsbWFydC5jb20vXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiSW5ub3ZhdGl2ZSB0aGlua2luZy4gTGVhZGVyc2hpcCB0aHJvdWdoIHNlcnZpY2UuIEFuZCBhYm92ZSBhbGwsIGFuIHVud2F2ZXJpbmcgY29tbWl0bWVudCB0byBzYXZpbmcgcGVvcGxlIG1vbmV5LiBJdOKAmXMgd2hhdCBtYWtlcyB1cyB0aGUgYnVzaW5lc3Mgd2UgYXJlIHRvZGF5LCBhbmQgc2hhcGVzIHRoZSBjb21wYW55IHdlIHdpbGwgYmUgdG9tb3Jyb3cuIEFzIHRoZSBsYXJnZXN0IHJldGFpbGVyIGluIHRoZSB3b3JsZCwgb3VyIDIuMyBtaWxsaW9uIGFzc29jaWF0ZXMgbWVldCB0aGUgbmVlZHMgb2YgbW9yZSB0aGFuIDI2MCBtaWxsaW9uIGN1c3RvbWVycyBldmVyeSB3ZWVrLiBBbmQgd2UgZG8gaXQgd2hlcmV2ZXIgdGhleSBzaG9wIOKAkyBpbiBvdXIgc3RvcmVzLCBvbmxpbmUsIG9yIHRocm91Z2ggdGhlaXIgbW9iaWxlIGRldmljZXMuIFNvdW5kIGxpa2UgYSBsb3Qgb2Ygd29yaz8gV2XigJlyZSBqdXN0IGdldHRpbmcgc3RhcnRlZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNldCBUaGVtIEZyZWVcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCJHaWFubmkgYW5kIEJldHN5IFZlY2NoaWFyZXR0aVwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvc3Rmb2Zmcm9hZC5wbmdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDMwMyk2MTktNDgwNFwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5zdGZvZmZyb2FkLmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJXZSBleGlzdCB3aXRoIHRoZSBnb2FsIG9mIGVuZGluZyBodW1hbiB0cmFmZmlja2luZyBnbG9iYWxseS4gT3VyIHB1cnBvc2UgaXMgdG8gcmFpc2UgbW9uZXkgZm9yIHRob3NlIHJlc2N1aW5nIGFuZCByZWhhYmlsaXRhdGluZyB0aGUgdmljdGltcyBvZiBodW1hbiB0cmFmZmlja2luZyBhcyB3ZWxsIGNoYW5naW5nIGN1bHR1cmUgYW5kIGxhd3MgYXJvdW5kIHRoZSB3b3JsZC4gUHJvY2VlZHMgb2YgU2V0IFRoZW0gRnJlZSBPZmYgUm9hZCBzdXBwb3J0cyB0aGUgcmVzY3VlIGFuZCByZWhhYmlsaXRhdGlvbiBvZiBodW1hbiB0cmFmZmlja2luZyB2aWN0aW1zLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk8nUmVpbGx5IEF1dG8gUGFydHNcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjc1NDUgTWNMYXVnaGxpbiBSb2FkLCBGYWxjb24sIENPLCA4MDgzMVwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCJSeWFuIEJhdW1hblwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvb3JlaWxseS5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2xvY2F0aW9ucy5vcmVpbGx5YXV0by5jb20vY28vcGV5dG9uL2F1dG9wYXJ0cy0zNjY2Lmh0bWxcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJZb3VyIFBleXRvbiwgQ08gTydSZWlsbHkgQXV0byBQYXJ0cyBzdG9yZSBpcyBvbmUgb2Ygb3ZlciA1LDAwMCBP4oCZUmVpbGx5IEF1dG8gUGFydHMgc3RvcmVzIHRocm91Z2hvdXQgdGhlIFUuUy4gV2UgY2FycnkgYWxsIHRoZSBwYXJ0cywgdG9vbHMgYW5kIGFjY2Vzc29yaWVzIHlvdSBuZWVkLCBhcyB3ZWxsIGFzIG9mZmVyaW5nIGZyZWUgU3RvcmUgU2VydmljZXMgbGlrZSBiYXR0ZXJ5IHRlc3RpbmcsIHdpcGVyIGJsYWRlICYgYnVsYiBpbnN0YWxsYXRpb24sIGNoZWNrIGVuZ2luZSBsaWdodCB0ZXN0aW5nIGFuZCBtb3JlLiBOZWVkIGhlbHA/IFN0b3AgYnkgYW5kIHRhbGsgdG8gb25lIG9mIG91ciBQYXJ0cyBQcm9mZXNzaW9uYWxzIHRvZGF5LlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbG9yYWRvIENvbXByZXNzZWQgR2FzZXNcIiwgXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjM5NzUgSW50ZXJwYXJrIERyaXZlLCBDb2xvcmFkbyBTcHJpbmdzLCBDTywgODA5MDdcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvY2NnbG9nby5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDcxOSk0NzMtNzcxNFwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LmNvbG9yYWRvY29tcHJlc3NlZGdhc2VzLmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJDb2xvcmFkbyBDb21wcmVzc2VkIEdhc2VzIGluIENvbG9yYWRvIGlzIGEgbG9jYWwsIGZhbWlseSBvd25lZCBhbmQgb3BlcmF0ZWQgd2VsZGluZyBzdXBwbHkgc2hvcCB3aXRoIG1vcmUgdGhhbiA3NSB5ZWFycyBvZiBleHBlcmllbmNlIGFuZCBrbm93bGVkZ2UgaW4gdGhlIGluZHVzdHJ5LiBXZSdyZSB5b3Ugb25lIHN0b3Agc2hvcCBmb3IgYWxsIG9mIHlvdXIgd2VsZGluZyBuZWVkcyBhbmQgcXVlc3Rpb25zLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRhbidzIEF1dG9cIiwgICBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzIxMCBDaGVsdG9uIENpcmNsZSwgQ29sb3JhZG8gU3ByaW5ncywgQ08sIDgwOTA4XCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2RhbnNhdXRvLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTYzNS0yNTg3XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9EYW5zLUF1dG8tSW5jLTQ2OTE5NTcyOTk1NzgzMy9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJBIGxvY2FsLCBmYW1pbHkgb3duZWQgcHJvdmlkZXIgb2YgdHVuZS11cHMgYW5kIGdlbmVyYWwgcmVwYWlycy5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJPdXRsYXcgSmVlcCBBZHZlbnR1cmVzXCIsIFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIyODEgTm9ydGggTWFpbiBTdHJlZXQsIE1vYWIsIFV0YWgsIDg0NTMyXCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIkplcmVteSBSb3dhblwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvb3V0bGF3LmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNDM1KTI2MC03NDUxXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cub3V0bGF3amVlcHRvdXJzLmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJXaGVuIHdlIHN0YXJ0ZWQgb3VyIG9mZnJvYWQgdG91ciBidXNpbmVzcyBpbiBNb2FiLCB3ZSB3YW50ZWQgdG8gZG8gc29tZXRoaW5nIGRpZmZlcmVudC4gV2UgZGlkbid0IHdhbnQgdG8gaGF2ZSB0aGUgJ3J1biBvZiB0aGUgbWlsbCcgdG91ciBidXNpbmVzcy4gV2Ugd2FudGVkIHRvIGJyaW5nIHNvbWUgZXhjaXRlbWVudCB0byBvdXIgZ3Vlc3RzLiAgT3ZlciB0aGUgcGFzdCBmZXcgeWVhcnMsIHdlJ3ZlIHdvcmtlZCBoYXJkIHRvIHNldCBvdXJzZWx2ZXMgYXBhcnQgZnJvbSBvdXIgY29tcGV0aXRpb24uIEJ5IG9mZmVyaW5nIHJpZGUtYWxvbmcsIGRyaXZlLWFsb25nIGFuZCBndWlkZWQgdG91cnMsIHdlJ3ZlIGJlY29tZSB5b3VyIG9uZS1zdG9wIHNob3AgZm9yIGplZXAgYWR2ZW50dXJlcyBpbiBNb2FiLiBCeSBicmFuY2hpbmcgb3V0IGludG8gZGlmZmVyZW50IGFyZWFzIG9mIHRoZSBvZmZyb2FkIGNvbW11bml0eSwgd2UgaGF2ZSBiZWVuIHZlcnkgZm9ydHVuYXRlIGFuZCBoYXZlIGd1aWRlZCBmb3Igc2V2ZXJhbCBUViBzaG93cyBhbmQgaGF2ZSBkb25lIGEgbG90IG9mIHRlc3RpbmcgZm9yIHZlaGljbGUgbWFudWZhY3R1cmluZyBjb21wYW5pZXMsIGluY2x1ZGluZyBKZWVwIHRoZW1zZWx2ZXMuIE91ciBmYW1pbHkgaXMgbG9va2luZyB2ZXJ5IGZvcndhcmQgdG8gdGhlIGZ1dHVyZSBhbmQgYmVpbmcgYSBwYXJ0IG9mIHlvdXIgZmFtaWx5J3MgdW5mb3JnZXR0YWJsZSB2YWNhdGlvbiBoZXJlIGluIE1vYWIhLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIldhcm4gSW5kdXN0cmllc1wiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMTI5MDAgU0UgQ2FwcHMgUm9hZCwgQ2xhY2thbWFzLCBPUiwgOTcwMTVcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiQW5uZSBTbmVkZWNvclwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvd2Fybi5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDgwMCk1NDItOTI3NlwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3dhcm4uY29tL1wiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIlRoZSBjb21wYW55IGRlc2lnbnMsIG1hbnVmYWN0dXJlcyBhbmQgbWFya2V0cyBhIGZ1bGwgbGluZSBvZiBvZmYtcm9hZCBlcXVpcG1lbnQgYW5kIGFjY2Vzc29yaWVzIHRoYXQgZW5oYW5jZSB0aGUgcGVyZm9ybWFuY2Ugb2YgZm91ci13aGVlbC1kcml2ZSB2ZWhpY2xlcywgQVRWJ3MgYW5kIHV0aWxpdHkgdmVoaWNsZXMuIFRoZSBjb21wYW55J3MgSW5kdXN0cmlhbCBEaXZpc2lvbiBtYXJrZXRzIGVsZWN0cmljIGFuZCBoeWRyYXVsaWMgd2luY2hlcyBhbmQgaG9pc3RzIHRvIGNvbW1lcmNpYWwsIGluZHVzdHJpYWwgYW5kIHNldmVyZSBkdXR5IGN1c3RvbWVycy4gV2FybiBhbHNvIGhhcyBhIGxpbmUgb2YgdXRpbGl0eSB3aW5jaGVzIGFuZCBob2lzdHMgdGhhdCBhcmUgZGVzaWduZWQgZm9yIHByb2Zlc3Npb25hbCB0cmFkZSB3b3JrZXJzIGFuZCBkby1pdC15b3Vyc2VsZiBjb25zdW1lcnMgd2hvIG5lZWQgcG93ZXJmdWwgdG9vbHMgdG8gYXNzaXN0IHRoZW0gaW4gcHVsbGluZywgaGF1bGluZywgZHJhZ2dpbmcgb3IgbGlmdGluZy4gV2FybiBmb2N1c2VzIG9uIHRocmVlIHNwZWNpZmljIG1hcmtldHMgLSBDb25zdW1lciBBZnRlcm1hcmtldCwgSW5kdXN0cmlhbC9Db21tZXJjaWFsLCBhbmQgT3JpZ2luYWwgRXF1aXBtZW50LiBXaXRoIGN1c3RvbWVycyBpbiBvdmVyIDY1IGNvdW50cmllcywgV0FSTiBpcyBvbmUgb2YgdGhlIHdvcmxkJ3MgbW9zdCByZWNvZ25pemVkIGJyYW5kcyBpbiB2ZWhpY2xlIHBlcmZvcm1hbmNlIGVuaGFuY2luZyBlcXVpcG1lbnQuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUXVhZHJhdGVjXCIsIFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIxMDI4IFNhdW5kZXJzIExhbmUsIFdlc3QgQ2hlc3RlciwgUEEsIDE5MzgwXCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3F1YWRyYXRlYy5wbmdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCIgXCIsIFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKDgwMCk3NDUtNjAzN1wiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5xdWFkcmF0ZWMuY29tL1wiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIkZvciBvdmVyIDI1IHllYXJzLCBRdWFkcmF0ZWMgaGFzIHByb3VkbHkgcHJvdmlkZWQgSmVlcCBlbnRodXNpYXN0cyB0aGUgYmVzdCBwYXJ0cyBhbmQgYWNjZXNzb3JpZXMgYXZhaWxhYmxlLiBPdXIgY29tcGFueSB3YXMgZm91bmRlZCBvbiBvbmUgcHJpbmNpcGxlOiBQcm92aWRlIHRoZSBoaWdoZXN0IGxldmVsIG9mIHNlcnZpY2UgYW5kIHRvcCBxdWFsaXR5IHByb2R1Y3RzIHRvIGFsbCBvdXIgY3VzdG9tZXJzIC0gZXZlcnkgZGF5LiBXaGV0aGVyIGl0IGlzIGhvb2QgcGFydHMgb3IgdGFpbGdhdGUgYWNjZXNzb3JpZXM7IEFudGVubmEga2l0cyBvciBsaWdodCBiYXJzLCB5b3UgY2FuIGNvdW50IG9uIG91ciBleHBlcmllbmNlIHRvIGhlbHAgc2VsZWN0IHRoZSBwZXJmZWN0IHBhcnRzIG9yIGFjY2Vzc29yaWVzIGZvciB5b3VyIGRhaWx5IGFuZCBvZmYtcm9hZCBuZWVkcy4gRXhwZXJpZW5jZSBUaGUgUXVhZHJhdGVjIEFkdmFudGFnZSB0b2RheSFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJTdGFyZ2F6ZXJzIFRoZWF0cmUgYW5kIEV2ZW50IENlbnRlclwiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMTAgUGFya3NpZGUgRHJpdmUsIENvbG9yYWRvIFNwcmluZ3MsIENPLCA4MDkxNVwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9zdGFyZ2F6ZXJzLnBuZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIiBcIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIoNzE5KTQ3Ni0yMjAwXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuc3RhcmdhemVyc3RoZWF0cmUuY29tL1wiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIk91ciBNaXNzaW9uIGlzIHRvIEJyaW5nIEdyZWF0IEVudGVydGFpbm1lbnQgdG8gR3JlYXQgQXVkaWVuY2VzIGFuZCB0byBiZSBhIFdhcm0gYW5kIFdlbGNvbWluZyBHYXRoZXJpbmcgUGxhY2UgZm9yIHRoZSBDb21tdW5pdHkhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWV0YWxjbG9ha1wiLCBcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMjQ4NCBNZXJjYW50aWxlIERyaXZlLCBSYW5jaG8gQ29yZG92YSwgQ0EsIDk1NzQyXCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL21ldGFsY2xvYWsuanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig5MTYpNjMxLTgwNzFcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5tZXRhbGNsb2FrLmNvbS9EZWZhdWx0LmFzcFwiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIldoZXRoZXIgaXQncyBvdXIgR2FtZS1DaGFuZ2luZyBhcHByb2FjaCB0byBQcm9kdWN0IERlc2lnbiwgb3VyIGRldmVsb3BtZW50IG9mIHRoZSBmaXJzdCBCb2x0LU9uIEhpZ2gtQ2xlYXJhbmNlIFByb2R1Y3Rpb24gRmVuZGVycywgb3VyIExpZmV0aW1lIEN1c3RvbWVyIFNlcnZpY2UgcG9saWN5LCBvciBvdXIgUGF0ZW50ZWQgR2FtZS1DaGFuZ2luZyBTdXNwZW5zaW9uIFRlY2hub2xvZ3ksIGV2ZXJ5dGhpbmcgd2UgZG8gaXMgb25seSB3b3J0aCBkb2luZyBpZiB3ZSBjYW4gbm90IG9ubHkgZG8gaXQgYmV0dGVyLCBidXQgc2lnbmlmaWNhbnRseSBkaWZmZXJlbnQgdGhlbiB3aGF0IG90aGVycyBleHBlY3QuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmVzdG9wXCIsIFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIzMzMgQ2VudGVubmlhbCBQYXJrd2F5LCBTdWl0ZSBCLCBMb3Vpc3ZpbGxlLCBDTyAgODAwMjdcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvYmVzdG9wLWxvZ28uanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiIFwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIig4MDApODQ1LTM1NjdcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuYmVzdG9wLmNvbS9cIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJCZXN0b3AgaGFzIGJlZW4gYSBsZWFkZXIgaW4gSmVlcCBhbmQgVHJ1Y2sgYWNjZXNzb3JpZXMgZm9yIG1vcmUgdGhhbiA2MCB5ZWFycy4gT3VyIHNlbGVjdGlvbiBvZiBwcm9kdWN0cyBjb21lcyBmcm9tIHllYXJzIG9mIGNyZWF0aW5nIHNwZWNpYWx0eSBwcm9kdWN0cyBmb3Igb3V0ZG9vciBhZHZlbnR1cmVzIHdpdGggeW91ciB2ZWhpY2xlLlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIF1cclxuKi9cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgICAgICBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IGFyZ3MudmlldztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB2aWV3LnBhZ2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXBwZWRJdGVtID0gdmlldy5iaW5kaW5nQ29udGV4dDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzcG9uc29yIHRhcHBlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChTcG9uc29yRGV0YWlscywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRhcHBlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQWJvdXRUYXAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKEFib3V0U3BvbnNvcnMpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcInVybFwiOiBcImh0dHA6Ly9kYXRhLmNzYzR3LmNvbS9zcG9uc29ycy5qc29uXCIgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BvbnNvcnMgPSByZXN1bHQuZGF0YS5zcG9uc29ycztcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXN1bHQgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5zcG9uc29ycykpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNhdWdodCBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChOb0Nvbm5lY3QpO1xyXG4gICAgICAgICAgICB9KSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBcIiArIGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59ICAgXHJcblxyXG5cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJob21lLXBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwidHJhaWwuaW1hZ2VzcmNcIiAvPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0cmFpbC5uYW1lXCIgY2xhc3M9XCJpbmZvLXBhbmVsXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjkwLCAqXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlRyYWlsaGVhZDogXCIgY29sPVwiMFwiIGNsYXNzPVwic3BvbkxlZnRcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidHJhaWwuY29vcmRpbmF0ZXNcIiBjb2w9XCIxXCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJzcG9uUmlnaHRcIiBAdGFwPVwidGFwQWRkcih0cmFpbC5jb29yZGluYXRlcylcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCI5MCwgKlwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJEaWZmaWN1bHR5OiBcIiBjb2w9XCIwXCIgY2xhc3M9XCJzcG9uTGVmdFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0cmFpbC5kaWZmaWN1bHR5XCIgY29sPVwiMVwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwic3Bvbm5hbWVSaWdodFwiID48L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCI5MCwgKlwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJGdW5UcmVrczogXCIgY29sPVwiMFwiIGNsYXNzPVwic3BvbkxlZnRcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidHJhaWwuZnVudHJleFwiIGNvbD1cIjFcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInNwb25SaWdodFwiIEB0YXA9XCJuYXZUbyh0cmFpbC5mdW50cmV4KVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjkwLCAqXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkNvVHJleDogXCIgY29sPVwiMFwiIGNsYXNzPVwic3BvbkxlZnRcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidHJhaWwuY290cmV4XCIgY29sPVwiMVwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwic3BvblJpZ2h0XCIgQHRhcD1cIm5hdlRvKHRyYWlsLmNvdHJleClcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInRyYWlsLmRlc2NcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cIm1vdGQtbGFiZWxcIiBoZWlnaHQ9XCIxMDAlXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBAdGFwPVwiJG1vZGFsLmNsb3NlXCIgdGV4dD1cIkNsb3NlXCIgY2xhc3M9XCJidXR0b25cIiAvPlxyXG4gICAgICAgICAgPC9TdGFja0xheW91dD4gXHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPiAgXHJcblxyXG48c2NyaXB0PlxyXG4gICAgY29uc3QgdXRpbHNNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcclxuICAgIHZhciBMb2NhdGVBZGRyZXNzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhdGUtYWRkcmVzc1wiKS5Mb2NhdGVBZGRyZXNzO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1wiY29udGV4dFwiXSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICB0cmFpbCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQgfHwge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgICAgIHRhcEFkZHIoYXJncykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvdWNoZWQgdGFwQWRkclwiICsgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRvciA9IG5ldyBMb2NhdGVBZGRyZXNzKCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdG9yLmxvY2F0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYXJncyxcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJNYXBzIGFwcCBsYXVuY2hlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuYXZUbyhhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidG91Y2hlZCBuYXZUbyBcIiArIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgdXRpbHNNb2R1bGUub3BlblVybChhcmdzKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmhvbWUtcGFuZWwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDM1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZHItcGFuZWwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjLXBhbmVsIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDIwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJpby1wYW5lbCB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDEwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc3Bvbkl0ZW0ge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc3BvbkxlZnQge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcG9ubmFtZVJpZ2h0IHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcG9uUmlnaHQge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwb25SaWdodE5vVUwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vdGQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNTtcclxuICAgIG1hcmdpbi10b3A6IDE1O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1O1xyXG4gICAgcGFkZGluZzogNTtcclxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjE5MjE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkNvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnNcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImxpc3QtcGFuZWxcIj5cclxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwiaGVhZGVyLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJUcmFpbHNcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgdGV4dD1cIkFib3V0IFRoZSBUcmFpbHNcIiBAdGFwPVwib25UcmFpbHNUYXBcIiAvPlxyXG4gICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwidHJhaWwgaW4gdHJhaWxzXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIiBoZWlnaHQ9XCIxMDAlXCIgc2VwYXJhdG9yQ29sb3I9XCJ3aGl0ZVwiIGNsYXNzPVwibGlzdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjE1MCwqXCIgLCByb3dzPVwiKiwqXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwidHJhaWwuaW1hZ2VzcmNcIiByb3c9XCIwXCIgY29sPVwiMFwiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidHJhaWwubmFtZVwiIGNsYXNzPVwibGlzdFJpZ2h0SXRlbVwiIHRleHRXcmFwPVwidHJ1ZVwiIHJvdz1cIjBcIiBjb2w9XCIxXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L0xpc3RWaWV3PiAgIFxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+ICBcclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgQWJvdXRUcmFpbHMgZnJvbSBcIi4vQWJvdXRUcmFpbHNcIjtcclxuICAgIGltcG9ydCBUcmFpbERldGFpbHMgZnJvbSBcIi4vVHJhaWxEZXRhaWxzXCI7XHJcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRhdGE6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIFwidHJhaWxzXCI6IFtdXHJcbi8qXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWV0YmVycnkgR3VsY2hcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL21ldGJlcnJ5MS5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiRWFzeS9Nb2RlcmF0ZVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuMTAyMzgsIC0xMDUuMjc2ODZcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvdGhlLWd1bGNoZXMvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvcGxhY2VzL25hfjE0NTgxOTZcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJNZXRiZXJyeSBHdWxjaCBpcyBwYXJ0IG9mIHRoZSBDZWRhciBNb3VudGFpbiBHdWxjaCBUcmFpbHMuICBUaGlzIGlzIHRoZSBlYXNpZXN0IG9mIHRoZSB0aHJlZSB0cmFpbHMgb2ZmIG9mIENlZGFyIE1vdW50YWluIFJvYWQuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTG9uZ3dhdGVyIEd1bGNoXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9sb25nd2F0ZXIuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIk1vZGVyYXRlL0RpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuMDk4MTQsIC0xMDUuMjc1MThcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvdGhlLWd1bGNoZXMvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvcGxhY2VzL25hfjE0NTgxODlcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJMb25nd2F0ZXIgR3VsY2ggaXMgcGFydCBvZiB0aGUgQ2VkYXIgTW91bnRhaW4gR3VsY2ggVHJhaWxzLiAgSXQgaXMgbW9zdGx5IGVhc3kgYnV0IGhhcyBvbmUgaW50ZXJtZWRpYXRlIHNlY3Rpb24gYXMgcGljdHVyZWQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhhY2tldHQgR3VsY2hcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2hhY2tldHQxLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJEaWZmaWN1bHRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM5LjA3ODMsIC0xMDUuMjcxOTJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvdGhlLWd1bGNoZXMvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvcGxhY2VzL25hfjE0NTgxOTJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJIYWNrZXR0IEd1bGNoIGlzIHBhcnQgb2YgdGhlIENlZGFyIE1vdW50YWluIEd1bGNoIFRyYWlscy4gIEl0IGlzIHRoZSBtb3N0IGRpZmZpY3VsdCBvZiB0aGUgdGhyZWUgdHJhaWxzLiAgWW91IHdpbGwgZG8gYmVzdCB3aXRoIGEgdmVoaWNsZSB0aGF0IGhhcyBsYXJnZXIgdGlyZXMsIG1vcmUgZ3JvdW5kIGNsZWFyYW5jZSwgYW5kIGxvY2tlcnMuICBIYWNrZXR0IFJvY2ssIHBpY3R1cmVkIGhlcmUsIGlzIHRoZSBtb3N0IGRpZmZpY3VsdCBvYnN0YWNsZSBvbiB0aGUgdHJhaWwuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGVsbHMgUmV2ZW5nZSwgTW9hYlwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvaGVsbHNyZXZlbmdlLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJEaWZmaWN1bHRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM4LjU3NTM5LCAtMTA5LjUyMjc2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL2hlbGxzLXJldmVuZ2UvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiSGVsbHMgcmV2ZW5nZSBpcyBvbmUgb2YgdGhlIG1vc3QgcG9wdWxhciBhbmQgd2VsbCBrbm93biB0cmFpbHMgaW4gTW9hYi4gIEl0IGhhcyBzdGVlcCBjbGltYnMgb24gc2xpY2sgcm9jayB0aGF0IGNhbiBiZSBkaWZmaWN1bHQgd2l0aCBub3JtYWwgdGlyZXMuICBJdCBhbHNvIGluY2x1ZGVzIEhlbGxzIEdhdGUgKHBpY3R1cmVkKSB3aGljaCBpcyBhIHBvcHVsYXIgY2hhbGxlbmdlIHRoYXQgaXMgYW4gb3B0aW9uYWwgb2JzdGFjbGUuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTW91bnQgQmFsZHlcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL210YmFsZHkuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkVhc3lcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM4Ljc2MDkwOSwtMTA0Ljk4MzEzMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy9tdC1iYWxkeS9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9yb2Fkcy9hbG1hZ3JlLTEwOTA3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiTW91bnQgQmFsZHkgdHJhaWwgaXMgYSB2ZXJ5IHNjZW5pYyBzaGVsZiB0cmFpbCB0aGF0IGFwcHJvYWNoZXMgdGhlIHRvcCBvZiBNb3VudCBCYWxkeS4gIFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVhZ2xlIFJvY2tcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2VhZ2xlcm9jay5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzOC43MzU1MTksLTEwNC45ODc4NjRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvZWFnbGUtcm9jay1zYXJhbi13cmFwL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L21hcC9AMzguNzM1MzUyLC0xMDQuOTg4MTc3LDEzLjAwei9kZXRhaWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiRWFnbGUgUm9jayBpcyBhbiBleHRyZW1lbHkgZGlmZmljdWx0IHRyYWlsIHRoYXQgd2lsbCBjaGFsbGVuZ2UgYWxtb3N0IGFueSByaWcuICBUaGlzIHRyYWlsIG1heSBpbmNsdWRlIFNhcmFuIFdyYXAgd2hpY2ggaXMgYWxzbyB2ZXJ5IGRpZmZpY3VsdC5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDaGluYSBXYWxsXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9jaGluYXdhbGwuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIk1vZGVyYXRlIHRvIERpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzkuMTExMDEsLTEwNS40NzM1NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy9jaGluYS13YWxsL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3JvYWRzL2NoaW5hLXdhbGwtODgxNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIkNoaW5hIFdhbGwgaXMgYSBmYWlybHkgZWFzeSB0cmFpbCB0byBuYXZpZ2F0ZSBhbmQgbW9zdCBvYnN0YWNsZXMgaGF2ZSBhIGJ5cGFzcy4gIFRoZXJlIGlzIG9uZSBvYnN0YWNsZSB0aGF0IGlzIGRpZmZpY3VsdCB0byBuYXZpZ2F0ZSB3aXRoIGxhcmdlciB2ZWhpY2xlcyB3aGljaCBpcyB3aHkgdGhpcyB0cmFpbCBpcyByYXRlZCB0aGUgd2F5IGl0IGlzLiAgU3RvY2sgSmVlcHMgYW5kIG90aGVyIGJyYW5kcyBvZiBzaW1pbGFyIHNpemUgc2hvdWxkIGJlIGFibGUgdG8gbWFrZSB0aGlzIG9ic3RhY2xlIGJ1dCBtYXkgc2NyYXBlIHNraWQgcGxhdGUgb3IgZGFtYWdlIHBsYXN0aWMgc3RlcHMgb3IgZmVuZGVyIGd1YXJkcy5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDaGluYW1hbiBHdWxjaFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvY2hpbmFtYW4uanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzguNzkxOTksLTEwNi4wODU2MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy9jaGluYW1hbi1ndWxjaC1jYXJuYWdlLWNhbnlvbi9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi90cmFpbHMvY2hpbmFtYW4tZ3VsY2gtbG9vcC0yMDQ2OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIkNoaW5hbWFuIGd1bGNoIGlzIGEgdmVyeSBkaWZmaWN1bHQgdHJhaWwgdGhhdCB3aWxsIGNoYWxsZW5nZSBtb3N0IGRyaXZlcnMuIFRoZSB0cmFpbCBpcyB2ZXJ5IHN0ZWVwIGFuZCByb2NreSBpbiBwbGFjZXMgYW5kIGlzIG5vdCBieXBhc3NhYmxlLiAgVGhpcyBzaG91bGQgb25seSBiZSBhdHRlbXB0ZWQgYnkgZXhwZXJpZW5jZWQgd2hlZWxlcnMgd2l0aCBhdCBsZWFzdCAzNSBpbmNoIHRpcmVzIGFuZCBsb2NrZXJzLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1lZGFubyBQYXNzXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9tZWRhbm9QYXNzLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJFYXN5L01vZGVyYXRlXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzNy44MzY0NywtMTA1LjMwNzYxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL21lZGFuby1wYXNzL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3JvYWRzL21lZGFuby1wYXNzLTEwNjM1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiTWVkYW5vIFBhc3MgaXMgYSBmYWlybHkgZWFzeSByb2FkIGJ1dCB3aWxsIHJlcXVpcmUgYXQgbGVhc3QgYSBzdG9jayA0eDQgdmVoaWNsZS4gIFRoZSB0cmFpbCBlbmRzIHVwIGF0IHRoZSBHcmVhdCBTYW5kIER1bmVzIGFuZCBpcyB2ZXJ5IHNjZW5pYy5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGFuY2EgUGVha1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvYmxhbmNhLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJEaWZmaWN1bHRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM3LjUyMTg1LCAtMTA1LjYwMTkzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL2JsYW5jYS1wZWFrL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3RyYWlscy9ibGFuY2EtcGVhay0xMTg1NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIkJsYW5jYSBQZWFrIGlzIGFuIGV4dHJlbWVseSBkaWZmaWN1bHQgdHJhaWwgYW5kIHNob3VsZCBvbmx5IGJlIGF0dGVtcHRlZCBieSBleHBlcmllbmNlZCB3aGVlbGVycyBpbiBoaWdobHkgbW9kaWZpZWQgcmlncy5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNb3NxdWl0byBQYXNzXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9tb3NxdWl0by5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiTW9kZXJhdGVcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM5LjI3MDM3LCAtMTA2LjA0NzUxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL21vc3F1aXRvLXBhc3MvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiSGlnaGVzdCBwYXNzIHJvYWQgaW4gQ29sb3JhZG8gb3BlbiB0byBtb3Rvcml6ZWQgdHJhdmVsLiBWaWV3cyBmcm9tIHRoZSAxMywxODUgZnQuIHN1bW1pdCBhcmUgaW1wcmVzc2l2ZSBvbiBhIGNsZWFyIGRheS4gVmVyeSBpbnRlcmVzdGluZyBtaW5lIHN0cnVjdHVyZXMgb24gdGhlIGVhc3Qgc2lkZS4gXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2hlZWxlciBMYWtlXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy93aGVlbGVyLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJEaWZmaWN1bHRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM5LjM1NzAzLCAtMTA2LjA4Mjg5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL3doZWVsZXItbGFrZS9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9wbGFjZXMvbmF+NjkwNTA3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiQSBkaWZmaWN1bHQgdHJhaWwgdG8gYSBiZWF1dGlmdWwgbGFrZSBhYm92ZSB0aW1iZXJsaW5lLiAgU2hvdWxkIG9ubHkgYmUgYXR0ZW1wdGVkIGJ5IGV4cGVyaWVuY2VkIHdoZWVsZXJzIGluIG1vZGlmaWVkIHJpZ3NcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTbGlkZSBMYWtlXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9zbGlkZS5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiTW9kZXJhdGVcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM5LjM0NzE4LCAtMTA2LjMzMjEyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL3NsaWRlLWxha2Utd3VydHMtZGl0Y2gtbm8tbmFtZS1ndWxjaC9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9zZWFyY2g/cT1zbGlkZSUyMGxha2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJUaGlzIGlzIHJlYWxseSB0aHJlZSBjb21wbGV0ZWx5IGRpZmZlcmVudCB0cmFpbHMgY29tYmluZWQgaW50byBvbmUuIFNsaWRlIExha2UgaXMgYSByb2NreSA0LXdoZWVsLWRyaXZlIHJvYWQgd2l0aCBhIGdyZWF0IHNjZW5pYyBlbmRpbmcuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSG9seSBDcm9zc1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvaG9seWNyb3NzLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJEaWZmaWN1bHRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM5LjUwMDQzLCAtMTA2LjQzMzA4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL2hvbHktY3Jvc3MvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3Yvc2VhcmNoP3E9aG9seSUyMGNyb3NzJTIwNHg0JTIwdHJhaWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJBIHZlcnkgZGlmZmljdWx0IHRyYWlsIHdpdGggbWFueSBvYnN0YWNsZXMuICBUaGlzIHRyYWlsIHJlcXVpcmVzIGV4cGVyaWVuY2VkIHdoZWVsZXJzIGluIGhpZ2hseSBtb2RpZmllZCB0cmFpbHMuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWluZXJhbCBDcmVla1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvbWluZXJhbGNyZWVrLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJEaWZmaWN1bHRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM3Ljk4ODY0LCAtMTA3LjY0OTUxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL21pbmVyYWwtY3JlZWsvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvbWFwL0AzNy45NzcyODIsLTEwNy42Mzg2MzQsMTMuNDN6L2RldGFpbHNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJUaGlzIHRyYWlsIHByb3ZpZGVzIGFjY2VzcyB0byBFbmdpbmVlciBwYXNzIGFuZCB0aGUgQXBpbmUgTG9vcCBmcm9tIHRoZSBPdXJheSBzaWRlLiAgSXQgaGFzIGEgZmV3IGRpZmZpY3VsdCBvYnN0YWNsZXMgdGhhdCBjYW5ub3QgYmUgYnlwYXNzZWQgYnV0IGlzIHBhc3NhYmxlIGJ5IHN0b2NrIDR4NHMgd2l0aCBvZmYtcm9hZCB0aXJlcy4gIEdyb3VuZCBjbGVhcmFuY2UgaXMgYSBNVVNUIVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVuZ2luZWVyIFBhc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2VuZ2luZWVyLmpwZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIjogXCJNb2RlcmF0ZVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzcuOTU3NTIsIC0xMDcuNTc1NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy9lbmdpbmVlci1wYXNzL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3RyYWlsaGVhZHMvZW5naW5lZXItcGFzcy0yNzYwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiVGhpcyB0cmFpbCwgY29tYmluZWQgd2l0aCBDaW5uYW1vbiBQYXNzLCBjb25zdGl0dXRlcyBtb3N0IG9mIHRoZSBmYW1vdXMgQWxwaW5lIExvb3AuIEl0IGlzIGFuIGV4aGlsYXJhdGluZyB0cmlwIGZvciBkcml2ZXJzIG9mIGFsbCBleHBlcmllbmNlIGxldmVscy4gVGhlcmUgYXJlIG1hbnkgbWluZXMgYW5kIHBvaW50cyBvZiBoaXN0b3JpY2FsIGludGVyZXN0IGFsb25nIHRoZSByb3V0ZS5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDaW5uYW1vbiBQYXNzXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9jaW5uYW1vbi5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiTW9kZXJhdGVcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBcIjM3LjkwMzcyLCAtMTA3LjQxMTg3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL2Npbm5hbW9uLXBhc3Mtd2FnZXItZ3VsY2gvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3RyZXhcIjogXCJodHRwczovL3RyYWlscy5jb2xvcmFkby5nb3YvcGxhY2VzL25hfjE0NTY0NjVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJUaGlzIHRyYWlsLCBjb21iaW5lZCB3aXRoIEVuZ2luZWVyIFBhc3MsIGNvbnN0aXR1dGVzIG1vc3Qgb2YgdGhlIGZhbW91cyBBbHBpbmUgTG9vcC4gVGhlIHdlc3Rlcm4gaGFsZiBvZiB0aGUgdHJpcCBwYXNzZXMgbWFueSBoaXN0b3JpYyBwb2ludHMgYW5kIGNsaW1icyB0byBvdXRzdGFuZGluZyB2aWV3cy4gXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxhY2sgQmVhciBQYXNzXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9ibGFja2JlYXIuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzcuODA5MDYsIC0xMDcuODA5ODVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvYmxhY2stYmVhci1wYXNzL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3JvYWRzL2JsYWNrLWJlYXItOTY0NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY1wiOiBcIkluY3JlZGlibGUgdmlld3MgZnJvbSBoaWdoIGFib3ZlIFJlZCBNb3VudGFpbiBQYXNzIGFuZCBUZWxsdXJpZGUuIENsb3NlLXVwIHZpZXdzIG9mIGhpc3RvcmljIG1pbmVzIGFuZCBkcmFtYXRpYyB3YXRlcmZhbGxzLiBGZWVsIHRoZSBtaXN0IGZyb20gc3BlY3RhY3VsYXIgQnJpZGFsIFZlaWwgRmFsbHMuIFJvYWQgaXMgY2xvc2VkIE5vdmVtYmVyIHRocm91Z2ggTWF5IDEuIFN3aXRjaGJhY2tzIGFyZSBkaWZmaWN1bHQgYW5kIG9uZS13YXkgZG93bmhpbGw7IG5vIHJldHVybiB0byBzdGFydC5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJJbW9nZW5lIFBhc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL2ltb2dlbmUuanBnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiOiBcIkRpZmZpY3VsdFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFwiMzcuOTM5OTcsIC0xMDcuODA5ODVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZ1bnRyZXhcIjogXCJodHRwczovL2Z1bnRyZWtzLmNvbS9vZmYtcm9hZC10cmFpbHMvaW1vZ2VuZS1wYXNzL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3BsYWNlcy9uYX4xNDU2NjI2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiSW1vZ2VuZSBQYXNzIGlzIHRoZSBzZWNvbmQgaGlnaGVzdCBkcml2YWJsZSBwYXNzIGluIENvbG9yYWRvLiBUaGUgZHJpdmUgaXMgb25lIG9mIHRoZSBtb3N0IHRocmlsbGluZyBpbiB0aGUgc3RhdGUuIEF0IFNhdmFnZSBCYXNpbiwgeW914oCZbGwgcGFzcyB0aHJvdWdoIFRvbWJveSBUb3duc2l0ZSwgb25jZSBvbmUgb2YgdGhlIG1vc3QgYWN0aXZlIG1pbmluZyB0b3ducyBpbiBDb2xvcmFkby5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQb3VnaGtlZXBzaWUgR3VsY2hcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3BvdWdoa2VlcHNpZS5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzNy45ODgzMiwtMTA3LjY0OTU0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmdW50cmV4XCI6IFwiaHR0cHM6Ly9mdW50cmVrcy5jb20vb2ZmLXJvYWQtdHJhaWxzL3BvdWdoa2VlcHNpZS1ndWxjaC9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvdHJleFwiOiBcImh0dHBzOi8vdHJhaWxzLmNvbG9yYWRvLmdvdi9yb2Fkcy9wb3VnaGtlZXBzaWUtZ3VsY2gtMTgzMDdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIjogXCJTY2VuaWMsIHJlbW90ZSB2YWxsZXkgb2ZmZXJzIHZhcmlldHkgb2YgY2hhbGxlbmdlcyBmb3IgaGFyZC1jb3JlIGVudGh1c2lhc3QuIE1vc3QgY29tZSB0byB0cnkgdGhlaXIgbHVjayBhdCB0aGUgbWFpbiBvYnN0YWNsZSBzaG93biBoZXJlIG9yIGp1c3QgdG8gd2F0Y2ggb3RoZXJzLiBTbm93IGlzIHVzdWFsbHkgbm90IHBsb3dlZCwgc28gdHJhaWwgb3BlbnMgbGF0ZXIgaW4gdGhlIHNlYXNvbi4gU3RheSBvZmYgdHJhaWwgZHVyaW5nIHdldCBwZXJpb2RzLiBTY2VuaWMsIHJlbW90ZSB2YWxsZXkgb2ZmZXJzIHZhcmlldHkgb2YgY2hhbGxlbmdlcyBmb3IgaGFyZC1jb3JlIGVudGh1c2lhc3QuIFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIllhbmtlZSBCb3kgQmFzaW5cIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL3lhbmtlZWJveS5qcGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IFwiRGlmZmljdWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogXCIzOC4wMTc2MSwgLTEwNy42NzQ2M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZnVudHJleFwiOiBcImh0dHBzOi8vZnVudHJla3MuY29tL29mZi1yb2FkLXRyYWlscy95YW5rZWUtYm95LWJhc2luL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY290cmV4XCI6IFwiaHR0cHM6Ly90cmFpbHMuY29sb3JhZG8uZ292L3BsYWNlcy9uYX4xNDU2ODY4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCI6IFwiT25lIG9mIHRoZSBtb3N0IHBvcHVsYXIgZGVzdGluYXRpb25zIGluIHRoZSBPdXJheSBhcmVhIGR1ZSB0byBpdHMgc3R1bm5pbmcgbmF0dXJhbCBiZWF1dHksIHJpY2ggaGlzdG9yeSwgYW5kIGNvbG9yZnVsIHdpbGRmbG93ZXJzLlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgXVxyXG4qL1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgICAgIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gYXJncy52aWV3O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IHZpZXcucGFnZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcHBlZEl0ZW0gPSB2aWV3LmJpbmRpbmdDb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRyYWlsIHRhcHBlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChUcmFpbERldGFpbHMsIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB0YXBwZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblRyYWlsc1RhcCgpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoQWJvdXRUcmFpbHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgXHJcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBheGlvcyh7IG1ldGhvZDogXCJHRVRcIiwgXCJ1cmxcIjogXCJodHRwOi8vZGF0YS5jc2M0dy5jb20vdHJhaWxzLmpzb25cIiB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWlscyA9IHJlc3VsdC5kYXRhLnRyYWlscztcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzdWx0IGlzIFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEudHJhaWxzKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjYXVnaHQgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoTm9Db25uZWN0KTtcclxuICAgICAgICAgICAgfSksIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgXCIgKyBlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufSAgIFxyXG5cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC50cmFpbG5hbWUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgfVxyXG5cclxuICAgIC5waWMge1xyXG4gICAgICAgIHBhZGRpbmc6IDI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ldmVudCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICB9XHJcblxyXG4gICAgLmV2ZW50RGF0ZSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyYWlsLXBhbmVsIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIHBhZGRpbmc6IDI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1O1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWxhYmVsIHtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiMTkyMTtcclxuICAgICAgICBjb2xvcjogV2hpdGU7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hYm91dC1wYW5lbCB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBwYWRkaW5nOiAxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0Fib3V0RGlyZWN0b3JzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWJvdXQtcGFuZWwge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgcGFkZGluZzogMTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9BYm91dFNjaGVkdWxlLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWJvdXQtcGFuZWwge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIHBhZGRpbmc6IDE1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvQWJvdXRTcG9uc29ycy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFib3V0LXBhbmVsIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBwYWRkaW5nOiAxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0Fib3V0VHJhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWJvdXQtcGFuZWwge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgcGFkZGluZzogMTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9BYm91dFVzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZmFzIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgXFxcImZhLXNvbGlkLTkwMFxcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5mYXIge1xcbiAgICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBcXFwiZmEtcmVndWxhci00MDBcXFwiO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4udC0zNiB7XFxuICAgIGZvbnQtc2l6ZTogMzY7XFxufVxcblwiLCBcIlwiXSk7XG5cblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9BcHAudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi1hN2JhZGNlYV0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5iaW8tcGFuZWxbZGF0YS12LWE3YmFkY2VhXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDEwO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uZGlySW5mb1tkYXRhLXYtYTdiYWRjZWFdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLmRpckxlZnRbZGF0YS12LWE3YmFkY2VhXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLmRpcm5hbWVSaWdodFtkYXRhLXYtYTdiYWRjZWFdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5kaXJSaWdodFtkYXRhLXYtYTdiYWRjZWFdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvRGlyZWN0b3JEZXRhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWN0aW9uLWJhcltkYXRhLXYtOTIyZjJmYzhdIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDg7XFxuICAgIHBhZGRpbmc6IDg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5kaXJlY3RvcltkYXRhLXYtOTIyZjJmYzhdIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI1O1xcbn1cXG4ubGlzdC1wYW5lbFtkYXRhLXYtOTIyZjJmYzhdIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBtYXJnaW46IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWxbZGF0YS12LTkyMmYyZmM4XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG4uaGVhZGVyLWxhYmVsW2RhdGEtdi05MjJmMmZjOF0ge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjE5MjE7XFxuICAgIGNvbG9yOiBXaGl0ZTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcblwiLCBcIlwiXSk7XG5cblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9EaXJlY3RvcnMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lUGFuZWxbZGF0YS12LTY3NDEwZjNhXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uZGVzY3JpcHRpb25bZGF0YS12LTY3NDEwZjNhXSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNTtcXHJcXG4gIGZvbnQtc2l6ZTogMTU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvSG9tZS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFib3V0LXBhbmVsIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBwYWRkaW5nOiAxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL05vQ29ubmVjdC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBpY1tkYXRhLXYtMjFiYzkxMWNdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7IFxcbiAgICAgICAgbWFyZ2luOiAyO1xcbn1cXG4uZXZlbnRbZGF0YS12LTIxYmM5MTFjXSB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICAgICAgZm9udC1zaXplOiAyMDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7IFxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjtcXG59XFxuLmV2ZW50MVtkYXRhLXYtMjFiYzkxMWNdIHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgICAgICBmb250LXNpemU6IDIwO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTsgXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyO1xcbn1cXG4uZXZlbnQyW2RhdGEtdi0yMWJjOTExY10ge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlOyBcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI7XFxufVxcbi5ldmVudERhdGVbZGF0YS12LTIxYmM5MTFjXSB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6IDIwO1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWxbZGF0YS12LTIxYmM5MTFjXSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuLmV2ZW50LXBhbmVsW2RhdGEtdi0yMWJjOTExY10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDM7XFxufVxcblxcblxcblwiLCBcIlwiXSk7XG5cblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9TY2hlZHVsZS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmhvbWUtcGFuZWxbZGF0YS12LTAzM2IwZGEwXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLmFkZHItcGFuZWxbZGF0YS12LTAzM2IwZGEwXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uaW5mby1wYW5lbFtkYXRhLXYtMDMzYjBkYTBdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLmRlc2MtcGFuZWxbZGF0YS12LTAzM2IwZGEwXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMjA7XFxuICAgIGZvbnQtc2l6ZTogMTI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbn1cXG4uYmlvLXBhbmVsW2RhdGEtdi0wMzNiMGRhMF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxMDtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLnNwb25JdGVtW2RhdGEtdi0wMzNiMGRhMF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uc3BvbkxlZnRbZGF0YS12LTAzM2IwZGEwXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLnNwb25uYW1lUmlnaHRbZGF0YS12LTAzM2IwZGEwXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uc3BvblJpZ2h0W2RhdGEtdi0wMzNiMGRhMF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5zcG9uUmlnaHROb1VMW2RhdGEtdi0wMzNiMGRhMF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLm1vdGQtbGFiZWxbZGF0YS12LTAzM2IwZGEwXSB7XFxuZm9udC1zaXplOiAxNTtcXG5tYXJnaW4tdG9wOiA1O1xcbm1hcmdpbi1yaWdodDogNTtcXG5tYXJnaW4tYm90dG9tOiA1O1xcbm1hcmdpbi1sZWZ0OiA1O1xcbnBhZGRpbmc6IDU7XFxuaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZGIxOTIxO1xcbmNvbG9yOiB3aGl0ZTtcXG5mb250LXN0eWxlOiBpdGFsaWM7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9TY2hlZHVsZURldGFpbHMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hZGRyLXBhbmVsW2RhdGEtdi00YjI4ZWJlM10ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBtYXJnaW46IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLnNwb25QYW5lbFtkYXRhLXYtNGIyOGViZTNdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcblxcblxcblwiLCBcIlwiXSk7XG5cblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9TcG9uc29yRGV0YWlscy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmhvbWUtcGFuZWxbZGF0YS12LTE0ZGZmMzkyXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLmFkZHItcGFuZWxbZGF0YS12LTE0ZGZmMzkyXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uaW5mby1wYW5lbFtkYXRhLXYtMTRkZmYzOTJdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLmRlc2MtcGFuZWxbZGF0YS12LTE0ZGZmMzkyXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMjA7XFxuICAgIGZvbnQtc2l6ZTogMTI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbn1cXG4uYmlvLXBhbmVsW2RhdGEtdi0xNGRmZjM5Ml0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxMDtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLnNwb25JdGVtW2RhdGEtdi0xNGRmZjM5Ml0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uc3BvbkxlZnRbZGF0YS12LTE0ZGZmMzkyXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLnNwb25uYW1lUmlnaHRbZGF0YS12LTE0ZGZmMzkyXSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZDRlO1xcbn1cXG4uc3BvblJpZ2h0W2RhdGEtdi0xNGRmZjM5Ml0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxufVxcbi5zcG9uUmlnaHROb1VMW2RhdGEtdi0xNGRmZjM5Ml0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWQ0ZTtcXG59XFxuLm1vdGQtbGFiZWxbZGF0YS12LTE0ZGZmMzkyXSB7XFxuZm9udC1zaXplOiAxNTtcXG5tYXJnaW4tdG9wOiAxNTtcXG5tYXJnaW4tcmlnaHQ6IDU7XFxubWFyZ2luLWJvdHRvbTogNTtcXG5tYXJnaW4tbGVmdDogNTtcXG5wYWRkaW5nOiA1O1xcbmhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuYmFja2dyb3VuZC1jb2xvcjogI2RiMTkyMTtcXG5jb2xvcjogd2hpdGU7XFxuZm9udC1zdHlsZTogaXRhbGljO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvVHJhaWxEZXRhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udHJhaWxuYW1lW2RhdGEtdi0yYTA1Y2RjOF0ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjU7XFxufVxcbi5waWNbZGF0YS12LTJhMDVjZGM4XSB7XFxuICAgIHBhZGRpbmc6IDI7XFxufVxcbi5ldmVudFtkYXRhLXYtMmEwNWNkYzhdIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwO1xcbn1cXG4uZXZlbnREYXRlW2RhdGEtdi0yYTA1Y2RjOF0ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxufVxcbi50cmFpbC1wYW5lbFtkYXRhLXYtMmEwNWNkYzhdIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgcGFkZGluZzogMjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XFxuICAgIGJvcmRlcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWxbZGF0YS12LTJhMDVjZGM4XSB7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxufVxcbi5oZWFkZXItbGFiZWxbZGF0YS12LTJhMDVjZGM4XSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIxOTIxO1xcbiAgICBjb2xvcjogV2hpdGU7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvVHJhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkFib3V0IE91ciBEaXJlY3RvcnNcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmQ6IFwiIzEzMWQ0ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhYm91dC1wYW5lbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICBcIk91ciBEaXJlY3RvcnMgYXJlIHJlc3BvbnNpYmxlIGZvciBtYW5hZ2luZyB0aGUgY2x1Yiwgc2NoZWR1bGluZyBvdXIgdHJpcHMgYW5kIG1lZXRpbmdzIGFuZCBsZWFkaW5nIHRoZSB0cmFpbCBydW5zLiAgXFxuICAgICAgICAgICAgICAgICAgICBcXG5UaGVpciBwYXJ0aWNpcGF0aW9uIGlzIHZvbHVudGFyeSBhbmQgbm8gRGlyZWN0b3IgaXMgcGFpZC5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS4kbW9kYWwuY2xvc2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJBYm91dCBUaGUgU2NoZWR1bGVcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmQ6IFwiIzEzMWQ0ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhYm91dC1wYW5lbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICBcIlRoaXMgaXMgdGhlIHNjaGVkdWxlIGZvciB0cmlwcyBhcyBvZiBBcHJpbCAxNXRoLiAgSXQgaXMgcG9zc2libGUgdGhhdCBNYXkgOXRoIGV2ZW50cyB3aWxsIGNoYW5nZSBvciBjYW5jZWwgYWx0b2dldGhlciBkZXBlbmRpbmcgb24gcGFydGljaXBhdGlvbiBvZiBvdXIgc3BvbnNvcnMuXFxuICAgICAgICAgICAgICAgICAgICBcXG5XYXRjaCBmb3Igc3RhdHVzIHVwZGF0ZSBvbiBldmVudHMgYXMgdGhlIHNjaGVkdWxlIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGUgQ09WSUQtMTkgc2l0dWF0aW9uIGFuZCBhbHNvIGJlY2F1c2Ugb2YgdHJhaWwgY29uZGl0aW9ucy5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS4kbW9kYWwuY2xvc2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJBYm91dCBPdXIgU3BvbnNvcnNcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmQ6IFwiIzEzMWQ0ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhYm91dC1wYW5lbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICBcIk91ciBTcG9uc29ycyBoZWxwIHVzIHRvIGtlZXAgb3VyIG1lbWJlcnNoaXAgZHVlcyBsb3cuICBUaGV5IGRvbmF0ZSBwcml6ZXMgZm9yIG91ciBnaXZlYXdheSBhdCBraWNrIG9mZiwgdGhleSBwcm92aWRlIG1lYWxzIGZvciBzb21lIGV2ZW50cyBhbmQgaW4gc29tZSBjYXNlcyBwcm92aWRlIHVzIGRvbmF0aW9ucyB0byBwYXkgZm9yIGNsdWIgc3BvbnNvcmVkIGV2ZW50cy4gIFxcbiAgICAgICAgICAgICAgICAgICAgXFxuWW91IGNhbiBzaG93IHlvdXIgYXBwcmVjaWF0aW9uIGZvciB0aGVpciBzcG9uc29yaGlwIGJ5IG1lbnRpb25pbmcgdGhlIGNsdWIgd2hlbiB5b3UgdmlzaXQgdGhlbS5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS4kbW9kYWwuY2xvc2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJBYm91dCBUaGUgVHJhaWxzXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kOiBcIiMxMzFkNGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWJvdXQtcGFuZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgXCJUaGVzZSBhcmUgdGhlIHRyYWlscyB0aGF0IHdlIGhhdmUgdHJhdmVsZWQgaW4gdGhlIHBhc3Qgb3Igd2lsbCB0cmF2ZWwgdGhpcyBzZWFzb24uICBcXG4gICAgICAgICAgICAgICAgICAgIFxcblRyYWlscyB3aWxsIGJlIGFkZGVkIGhlcmUgYXMgd2UgcnVuIHRoZW0gaW4gdGhlIGZ1dHVyZS4gIFxcbiAgICAgICAgICAgICAgICAgICAgXFxuSW4gdGhlIGRldGFpbHMgZm9yIGVhY2ggdHJhaWwgdGhlcmUgaXMgYSBsaW5rIHRvIGluZm9ybWF0aW9uIGFib3V0IHRoZSB0cmFpbCBmcm9tIG91ciBzcG9uc29yIEZ1bnRyZWtzLiAgQWxzbywgd2UgaW5jbHVkZWQgYSBDT1RSRVggbGluayB0aGF0IHdpbGwgc2hvdyB5b3Ugd2hlcmUgdGhlIHRyYWlsIGlzLiAgVGhlIHRyYWlsaGVhZCBjb29yZGluYXRlcyBhcmUgZGVyaXZlZCBmcm9tIGdvb2dsZSBtYXBzIGJ1dCBzaG91bGQgYmUgZmFpcmx5IGFjY3VyYXRlLiAgVHJhaWwgcmF0aW5ncyBoZXJlIGFyZSBiYXNlZCBvbiBGdW5UcmVrcyByYXRpbmdzLlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2xvc2VcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLiRtb2RhbC5jbG9zZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkFib3V0IENTQzRXXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kOiBcIiMxMzFkNGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIn4vaW1hZ2VzL2xvZ28ucG5nXCIsIGhlaWdodDogXCIyMDBcIiwgd2lkdGg6IFwiMjAwXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWJvdXQtcGFuZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgXCJDb2xvcmFkbyBTcHJpbmdzIENocmlzdGlhbiA0IFdoZWVsZXJzLCBJbmMuLCBleGlzdHMgYXMgYSBjbHViIHRvIGFsbG93IGZvciB3b25kZXJmdWwgdGltZXMgdG9nZXRoZXIgaW4gb2ZmLXJvYWQgYWN0aXZpdGllcyB3aXRoIGZlbGxvdyBiZWxpZXZlcnMuIFRoZSBhc3NvY2lhdGlvbiBiZWdhbiBpbiB0aGUgc3ByaW5nIG9mIDE5OTMuIFxcblxcbk91ciBwaGlsb3NvcGh5IGluY2x1ZGVzIHRoZSBiZWxpZWYgdGhhdCB3ZSBhcmUgdG8gaW52aXRlIG91ciBuZWlnaGJvcnMgYW5kIGNvLXdvcmtlcnMgdG8gam9pbiB3aXRoIHVzIGluIGFueSBvZiBvdXIgZXZlbnRzIHNvIHRoYXQgd2UgYXJlIGludm9sdmVkIGludGVudGlvbmFsbHkgaW4gcmVhY2hpbmcgb3V0IHRvIG90aGVyIG1lbWJlcnMgb2Ygb3VyIGNvbW11bml0eS4gXFxuXFxuQXMgQ2hyaXN0aWFucyB3ZSBkZXNpcmUgdG8gYWx3YXlzIHVwaG9sZCB0aGUgbGF3IGluIHJlZ2FyZHMgdG8gc3VjaCB0aGluZ3MgYXM6IG9iZXlpbmcgdGhlIHNwZWVkIGxpbWl0LCBzdGF5aW5nIGNsZWFyIG9mIG5vIHRyZXNwYXNzaW5nIG9yIHBvc3RlZCBhcmVhcywgc3RheWluZyBvbiB0aGUgdHJhaWwgd2hlbiBzbyBtYXJrZWQsIHBhY2tpbmcgaXQgaW4gYW5kIHBhY2tpbmcgaXQgYWxsIG91dCwgYWRoZXJpbmcgdG8gdGhlIG5hdGlvbmFsIFRyZWFkIExpZ2h0bHkgcHJvZ3JhbSBhbmQgc3RhdGUgb3JnYW5pemF0aW9uIG9mIDRXRCBjbHVicywgZXRjLiBcXG5cXG5PdXIgZGVzaXJlIGlzIHRvIGhlbHAgZWFjaCBvdGhlciBhbmQgb3VyIGZlbGxvdyBtYW4gYXQgYWxsIHRpbWVzLiBXZSB3YW50IHRvIGJlIG1vZGVsIG9mZi1yb2FkZXJzLiBcXG5cXG5Hb2QgaGFzIGNyZWF0ZWQgYSBtaWdodHkgd29yayBvZiBhcnQgaW4gdGhlIFJvY2t5IE1vdW50YWlucy4gRXZlcnkgQ2hyaXN0aWFuIG5lZWRzIHRvIGJlIGJhbGFuY2VkIGluIGxpZmUgd2l0aCBoaXMgc3Bpcml0dWFsIHNlbGYsIGhpcyBmYW1pbHksIGhpcyB3b3JrLCBhbmQgaGlzIHJlY3JlYXRpb25hbCBhY3Rpdml0aWVzLiBcXG5cXG5NaWNhaCA0OjIgc2F5cywgQ29tZSwgbGV0IHVzIGdvIHVwIHRvIHRoZSBtb3VudGFpbnMuIFxcblxcbldlIGFsbCBuZWVkIHRpbWVzIG9mIHJlZnJlc2hpbmc7IHRoZSBtb3VudGFpbnMsIHN0cmVhbXMsIGFuZCB3b29kZWQgaGlsbHMgcmVtaW5kIHVzIG9mIHRoZSBwcm9taXNlcyBvZiBHb2QgYW5kIG9mIGhvdyBmYWl0aGZ1bGx5IEhlIHByb3ZpZGVzLiBMZXRzIGdvIHVwIC0tIGFuZCBzZWUgaXQsIGhlYXIgaXQsIGJyZWF0aGUgaXQgaW4sIGFuZCBtb3N0IG9mIGFsbCwgZmVlbCBpdCBhbmQgZXhwZXJpZW5jZSBpdC4gV2hvIGtub3dzPyBJdCBtYXkgaGVscCBjaGFuZ2UgeW91IGZvcmV2ZXIhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDbG9zZVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uJG1vZGFsLmNsb3NlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiQm90dG9tTmF2aWdhdGlvblwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlRhYlN0cmlwXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXZpZ2F0aW9uX19pdGVtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiSG9tZVwiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyB0LTM2XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJzcmMuZGVjb2RlXCI6IFwiZm9udDovLyYjeGYwMTU7XCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2aWdhdGlvbl9faXRlbVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIlNjaGVkdWxlXCIgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIHQtMzZcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcInNyYy5kZWNvZGVcIjogXCJmb250Oi8vJiN4ZjA3MztcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXZpZ2F0aW9uX19pdGVtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiU3BvbnNvcnNcIiB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgdC0zNlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwic3JjLmRlY29kZVwiOiBcImZvbnQ6Ly8mI3hmMmJiO1wiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdmlnYXRpb25fX2l0ZW1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJUcmFpbHNcIiB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgdC0zNlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwic3JjLmRlY29kZVwiOiBcImZvbnQ6Ly8mI3hmMjc5O1wiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdmlnYXRpb25fX2l0ZW1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJEaXJlY3RvcnNcIiB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgdC0zNlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwic3JjLmRlY29kZVwiOiBcImZvbnQ6Ly8mI3hmMDA3O1wiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXCJUYWJDb250ZW50SXRlbVwiLCBbX2MoXCJGcmFtZVwiLCBbX2MoXCJIb21lXCIpXSwgMSldLCAxKSxcbiAgICAgIF9jKFwiVGFiQ29udGVudEl0ZW1cIiwgW19jKFwiRnJhbWVcIiwgW19jKFwiU2NoZWR1bGVcIildLCAxKV0sIDEpLFxuICAgICAgX2MoXCJUYWJDb250ZW50SXRlbVwiLCBbX2MoXCJGcmFtZVwiLCBbX2MoXCJTcG9uc29yc1wiKV0sIDEpXSwgMSksXG4gICAgICBfYyhcIlRhYkNvbnRlbnRJdGVtXCIsIFtfYyhcIkZyYW1lXCIsIFtfYyhcIlRyYWlsc1wiKV0sIDEpXSwgMSksXG4gICAgICBfYyhcIlRhYkNvbnRlbnRJdGVtXCIsIFtfYyhcIkZyYW1lXCIsIFtfYyhcIkRpcmVjdG9yc1wiKV0sIDEpXSwgMSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhvbWUtcGFuZWxcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uZGlyZWN0b3IuaW1hZ2VzcmMgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkaXJJbmZvXCIsIGF0dHJzOiB7IGNvbHVtbnM6IFwiMTQwLDIwLCpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpckxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmRpcmVjdG9yLm5hbWUsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGlySXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIjpcIiwgY29sOiBcIjFcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkaXJuYW1lUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmRpcmVjdG9yLnRpdGxlLCBjb2w6IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGlySW5mb1wiLCBhdHRyczogeyBjb2x1bW5zOiBcIjYwLDIwLCpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpckxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJQaG9uZVwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpckl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCI6XCIsIGNvbDogXCIxXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGlyUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmRpcmVjdG9yLnBob25lMSwgY29sOiBcIjJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNhbGwoX3ZtLmRpcmVjdG9yLnBob25lMSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGlySW5mb1wiLCBhdHRyczogeyBjb2x1bW5zOiBcIjYwLDIwLCpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpckxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJFbWFpbFwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiOlwiLCBjb2w6IFwiMVwiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGlyUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmRpcmVjdG9yLmVtYWlsLCBjb2w6IFwiMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VuZChfdm0uZGlyZWN0b3IuZW1haWwpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiaW8tcGFuZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmRpcmVjdG9yLmJpbyxcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2xvc2VcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLiRtb2RhbC5jbG9zZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIixcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNC1XaGVlbGVyc1wiIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LXBhbmVsXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVhZGVyLWxhYmVsXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IFwiT3VyIERpcmVjdG9ycyBmb3IgVGhpcyBZZWFyXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBYm91dCBPdXIgRGlyZWN0b3JzXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uQWJvdXRUYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LXBhbmVsXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uZGlyZWN0b3JzLFxuICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwiZGlyZWN0b3JcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0b3IgPSByZWYuZGlyZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIxMDAsKlwiLCBcIixcIjogXCJcIiwgcm93czogXCIqXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBkaXJlY3Rvci5pbWFnZXNyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjcwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI3MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGlyZWN0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZGlyZWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdGl0bGU6IFwiQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNC1XaGVlbGVyc1wiLFxuICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJob21lUGFuZWxcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9pbWFnZXMvbG9nby5wbmdcIiwgaGVpZ2h0OiBcIjIwMFwiLCB3aWR0aDogXCIyMDBcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICBcIlRoaXMgQXBwIHdpbGwga2VlcCB5b3UgdXBkYXRlZCBvbiB0aGUgYWN0aXZpdGllcywgZGlyZWN0b3JzLCBzcG9uc29ycyBhbmQgdHJhaWxzIGZvciB0aGUgQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNC1XaGVlbGVycyBjbHViXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG9tZVBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBoZWlnaHQ6IFwiMTYwXCIsIGl0ZW1zOiBfdm0ubWlzYywgXCIrYWxpYXNcIjogXCJpdGVtXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVkLW1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBpdGVtLm1vdGQsIHRleHRXcmFwOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQWJvdXQgVXNcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uQWJvdXRVc1RhcCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIk5vIENvbm5lY3Rpdml0eVwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgYmFja2dyb3VuZDogXCIjMTMxZDRlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2ltYWdlcy9sb2dvLnBuZ1wiLCBoZWlnaHQ6IFwiMjAwXCIsIHdpZHRoOiBcIjIwMFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFib3V0LXBhbmVsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgIFwiVGhpcyBhcHBsaWNhdGlvbiByZXF1aXJlcyBjb25uZWN0aXZpdHkgdG8gdGhlIGludGVybmV0IGluIG9yZGVyIHRvIHNob3cgZGF0YSBvbiB0aGUgdGFicy4gIFBsZWFzZSBjb25uZWN0IHRvIHRoZSBpbnRlcm5ldCBhbmQgY2xvc2UgYW5kIHJlb3BlbiB0aGUgYXBwLlxcbiAgICAgICAgICAgICAgICAgICAgXFxuTm90ZSB0aGF0IGEgc21hbGwgb2YgZGF0YSB3aWxsIGJlIHRyYW5zbWl0dGVkIGFuZCBhIGRhdGEgY2hhcmdlIG1heSBhcHBseS5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS4kbW9kYWwuY2xvc2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyXCIsXG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIkNvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnNcIiB9XG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1wYW5lbFwiLCBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWFkZXItbGFiZWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogXCJPdXIgU2NoZWR1bGVcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFib3V0IFRoZSBTY2hlZHVsZVwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkFib3V0VGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1wYW5lbFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmV2ZW50cyxcbiAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcImV2ZW50XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gcmVmLmV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiYXV0bywqXCIsIHJvd3M6IFwiKiwqXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBldmVudC5pbWFnZVNyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYW46IFwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXZlbnQxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGV2ZW50LmV2ZW50RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXZlbnQyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGV2ZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJob21lLXBhbmVsXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmV2ZW50LmltYWdlU3JjIH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFkZCB0byBNeSBDYWxlbmRhclwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkVG9DYWxlbmRhcihfdm0uZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mby1wYW5lbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5ldmVudC5uYW1lIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImluZm8tcGFuZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uZXZlbnQuZ3JvdXAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5mby1wYW5lbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5ldmVudC5ldmVudERhdGUsIHRleHR3cmFwOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiOTAsICpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25MZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTWVldCBhdDogXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BvblJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmV2ZW50Lm1lZXRBdCxcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRhcEFkZHIoX3ZtLmV2ZW50Lm1lZXRBdClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCI5MCwgKlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BvbkxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJNZWV0IHRpbWU6IFwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25uYW1lUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uZXZlbnQubWVldFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIjkwLCAqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcG9uTGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlJhdGluZzogXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3Bvbm5hbWVSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5ldmVudC5yYXRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIjkwLCAqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcG9uTGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxlYWRlcnM6IFwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbDogXCIxXCIsIGNvbHVtbnM6IFwiKiwqLCpcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25SaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmV2ZW50LmxlYWRlcjEsIGNvbDogXCIwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYWxsKF92bS5ldmVudC5sZWFkZXIxUGhvbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25SaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmV2ZW50LmxlYWRlcjIsIGNvbDogXCIxXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYWxsKF92bS5ldmVudC5sZWFkZXIyUGhvbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25SaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmV2ZW50LmxlYWRlcjMsIGNvbDogXCIyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYWxsKF92bS5ldmVudC5sZWFkZXIzUGhvbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vdGQtbGFiZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmV2ZW50LmRlc2MsXG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2xvc2VcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLiRtb2RhbC5jbG9zZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3BvblBhbmVsXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLnNwb25zb3IuaW1hZ2VzcmMgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWRkci1wYW5lbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5zcG9uc29yLmFkZHJlc3MsIHRleHRXcmFwOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRhcEFkZHIoX3ZtLnNwb25zb3IuYWRkcmVzcylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiMTAwLCAqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsZWZ0Q29sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiICAgQ29udGFjdDogXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmlnaHRDb2xOb1VMXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnNwb25zb3IuY29udGFjdCxcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiMTAwLCAqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsZWZ0Q29sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUGhvbmU6IFwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJpZ2h0Q29sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnNwb25zb3IucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYWxsKF92bS5zcG9uc29yLnBob25lKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIjEwMCwgKlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGVmdENvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkVNYWlsOiBcIiwgY29sOiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyaWdodENvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5zcG9uc29yLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dHdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VuZChfdm0uc3BvbnNvci5lbWFpbClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIxMDAsICpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxlZnRDb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJXZWJTaXRlOiBcIiwgY29sOiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyaWdodENvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5zcG9uc29yLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5hdlRvKF92bS5zcG9uc29yLnVybClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJlZC1tZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNwb25zb3IuYmlvLCB0ZXh0V3JhcDogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2xvc2VcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLiRtb2RhbC5jbG9zZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIixcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiQ29sb3JhZG8gU3ByaW5ncyBDaHJpc3RpYW4gNC1XaGVlbGVyc1wiIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LXBhbmVsXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVhZGVyLWxhYmVsXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IFwiT3VyIFNwb25zb3JzXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBYm91dCBPdXIgU3BvbnNvcnNcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25BYm91dFRhcCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtcGFuZWxcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5zcG9uc29ycyxcbiAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcInNwb25zb3JcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BvbnNvciA9IHJlZi5zcG9uc29yXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiMjAwLCpcIiwgXCIsXCI6IFwiXCIsIHJvd3M6IFwiKiwqXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBzcG9uc29yLmltYWdlc3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTUwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3RSaWdodEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogc3BvbnNvci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaG9tZS1wYW5lbFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IF92bS50cmFpbC5pbWFnZXNyYyB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbmZvLXBhbmVsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnRyYWlsLm5hbWUgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIjkwLCAqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcG9uTGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlRyYWlsaGVhZDogXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BvblJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnRyYWlsLmNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udGFwQWRkcihfdm0udHJhaWwuY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiOTAsICpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25MZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRGlmZmljdWx0eTogXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3Bvbm5hbWVSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS50cmFpbC5kaWZmaWN1bHR5LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCI5MCwgKlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BvbkxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJGdW5UcmVrczogXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BvblJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnRyYWlsLmZ1bnRyZXgsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZUbyhfdm0udHJhaWwuZnVudHJleClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCI5MCwgKlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BvbkxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDb1RyZXg6IFwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwb25SaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS50cmFpbC5jb3RyZXgsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZUbyhfdm0udHJhaWwuY290cmV4KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW90ZC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0udHJhaWwuZGVzYyxcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDbG9zZVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uJG1vZGFsLmNsb3NlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiLFxuICAgICAgICBhdHRyczogeyB0aXRsZTogXCJDb2xvcmFkbyBTcHJpbmdzIENocmlzdGlhbiA0LVdoZWVsZXJzXCIgfVxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtcGFuZWxcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWFkZXItbGFiZWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogXCJUcmFpbHNcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFib3V0IFRoZSBUcmFpbHNcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25UcmFpbHNUYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LXBhbmVsXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udHJhaWxzLFxuICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwidHJhaWxcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhaWwgPSByZWYudHJhaWxcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIxNTAsKlwiLCBcIixcIjogXCJcIiwgcm93czogXCIqLCpcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHRyYWlsLmltYWdlc3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3RSaWdodEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdHJhaWwubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfGt0fCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFjdGlvbi1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMTMxZDRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmNkOTA1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaGVhZGVyLWxhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZGIxOTIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJXaGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc3R5bGVcIixcInZhbHVlXCI6XCJpdGFsaWNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucmVkLW1lc3NhZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNkYjE5MjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zdHlsZVwiLFwidmFsdWVcIjpcIml0YWxpY1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5saXN0LXBhbmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzEzMWQ0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5saW5lU2VwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5sZWZ0Q29sXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcInJpZ2h0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMTMxZDRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJpZ2h0Q29sXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWRlY29yYXRpb25cIixcInZhbHVlXCI6XCJ1bmRlcmxpbmVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxMzFkNGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucmlnaHRDb2xOb1VMXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxMzFkNGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubGlzdFJpZ2h0SXRlbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcblxuXG5uZXcgVnVlKHtcbiAgXG4gIHJlbmRlcjogaCA9PiBoKEFwcClcbn0pLiRzdGFydCgpXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fib3V0RGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMWMxOTMxNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BYm91dERpcmVjdG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Fib3V0RGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BYm91dERpcmVjdG9ycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcbmF0aXZlc2NyaXB0XFxcXGNzYzR3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzExYzE5MzE2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzExYzE5MzE2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzExYzE5MzE2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BYm91dERpcmVjdG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTFjMTkzMTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTFjMTkzMTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvQWJvdXREaXJlY3RvcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0RGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0RGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXREaXJlY3RvcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXREaXJlY3RvcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXREaXJlY3RvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTExYzE5MzE2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BYm91dFNjaGVkdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lM2M5OGMwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BYm91dFNjaGVkdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWJvdXRTY2hlZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQWJvdXRTY2hlZHVsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcbmF0aXZlc2NyaXB0XFxcXGNzYzR3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2UzYzk4YzBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2UzYzk4YzBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2UzYzk4YzBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BYm91dFNjaGVkdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lM2M5OGMwZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlM2M5OGMwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9BYm91dFNjaGVkdWxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFNjaGVkdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0U2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFNjaGVkdWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0U2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRTY2hlZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTNjOThjMGUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fib3V0U3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM0MWUzMjBhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fib3V0U3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BYm91dFNwb25zb3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BYm91dFNwb25zb3JzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzQxZTMyMGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzQxZTMyMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzQxZTMyMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fib3V0U3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM0MWUzMjBhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM0MWUzMjBhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0Fib3V0U3BvbnNvcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0U3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRTcG9uc29ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0U3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRTcG9uc29ycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFNwb25zb3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDFlMzIwYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWJvdXRUcmFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM2ODc3M2UyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fib3V0VHJhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWJvdXRUcmFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Fib3V0VHJhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzY4NzczZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzY4NzczZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzY4NzczZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fib3V0VHJhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNjg3NzNlMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjNjg3NzNlMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9BYm91dFRyYWlscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRUcmFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRUcmFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFRyYWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFRyYWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFRyYWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzY4NzczZTImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fib3V0VXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3MWJkYTAwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fib3V0VXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BYm91dFVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BYm91dFVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzcxYmRhMDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzcxYmRhMDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzcxYmRhMDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fib3V0VXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3MWJkYTAwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM3MWJkYTAwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0Fib3V0VXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0VXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRVcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0VXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRVcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dFVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzFiZGEwMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcbmF0aXZlc2NyaXB0XFxcXGNzYzR3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ1YmE1ZWQ0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ1YmE1ZWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ1YmE1ZWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ1YmE1ZWQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGlyZWN0b3JEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hN2JhZGNlYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EaXJlY3RvckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EaXJlY3RvckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0RpcmVjdG9yRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hN2JhZGNlYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTdiYWRjZWFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTdiYWRjZWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTdiYWRjZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTdiYWRjZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0RpcmVjdG9yRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTdiYWRjZWEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTdiYWRjZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvRGlyZWN0b3JEZXRhaWxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXJlY3RvckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlyZWN0b3JEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlyZWN0b3JEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3YmFkY2VhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RpcmVjdG9yRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hN2JhZGNlYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXJlY3RvckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3YmFkY2VhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EaXJlY3RvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkyMmYyZmM4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0RpcmVjdG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0RpcmVjdG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkyMmYyZmM4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5MjJmMmZjOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXG5hdGl2ZXNjcmlwdFxcXFxjc2M0d1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5MjJmMmZjOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5MjJmMmZjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5MjJmMmZjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MjJmMmZjOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MjJmMmZjOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9EaXJlY3RvcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RpcmVjdG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXJlY3RvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXJlY3RvcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTIyZjJmYzgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlyZWN0b3JzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkyMmYyZmM4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RpcmVjdG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTIyZjJmYzgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NzQxMGYzYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXG5hdGl2ZXNjcmlwdFxcXFxjc2M0d1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzQxMGYzYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2Emc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc0MTBmM2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzQxMGYzYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ob0Nvbm5lY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwMzJmMDllJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vQ29ubmVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vQ29ubmVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTm9Db25uZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzAzMmYwOWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzAzMmYwOWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzAzMmYwOWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vQ29ubmVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzAzMmYwOWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzAzMmYwOWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTm9Db25uZWN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob0Nvbm5lY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm9Db25uZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm9Db25uZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vQ29ubmVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob0Nvbm5lY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwMzJmMDllJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TY2hlZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjFiYzkxMWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TY2hlZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjFiYzkxMWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjIxYmM5MTFjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcbmF0aXZlc2NyaXB0XFxcXGNzYzR3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIxYmM5MTFjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIxYmM5MTFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIxYmM5MTFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TY2hlZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjFiYzkxMWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjFiYzkxMWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvU2NoZWR1bGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjFiYzkxMWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjFiYzkxMWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIxYmM5MTFjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TY2hlZHVsZURldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzM2IwZGEwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NjaGVkdWxlRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NjaGVkdWxlRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2NoZWR1bGVEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAzM2IwZGEwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwMzNiMGRhMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXG5hdGl2ZXNjcmlwdFxcXFxjc2M0d1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMzNiMGRhMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMzNiMGRhMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMzNiMGRhMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2NoZWR1bGVEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMzNiMGRhMCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMzNiMGRhMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9TY2hlZHVsZURldGFpbHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY2hlZHVsZURldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY2hlZHVsZURldGFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDMzYjBkYTAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGVEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAzM2IwZGEwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDMzYjBkYTAmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nwb25zb3JEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjI4ZWJlMyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TcG9uc29yRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nwb25zb3JEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TcG9uc29yRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YjI4ZWJlMyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGIyOGViZTNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGIyOGViZTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGIyOGViZTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGIyOGViZTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nwb25zb3JEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjI4ZWJlMyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YjI4ZWJlMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9TcG9uc29yRGV0YWlscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3BvbnNvckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3BvbnNvckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TcG9uc29yRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YjI4ZWJlMyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TcG9uc29yRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YjI4ZWJlMyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TcG9uc29yRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGIyOGViZTMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nwb25zb3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmY3NjQ3NCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TcG9uc29ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nwb25zb3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDZmNzY0NzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDZmNzY0NzQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDZmNzY0NzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDZmNzY0NzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nwb25zb3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmY3NjQ3NCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NmY3NjQ3NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9TcG9uc29ycy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3BvbnNvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nwb25zb3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmY3NjQ3NCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVHJhaWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGRmZjM5MiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UcmFpbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UcmFpbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RyYWlsRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGRmZjM5MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTRkZmYzOTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxuYXRpdmVzY3JpcHRcXFxcY3NjNHdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTRkZmYzOTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTRkZmYzOTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTRkZmYzOTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RyYWlsRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTRkZmYzOTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTRkZmYzOTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvVHJhaWxEZXRhaWxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UcmFpbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVHJhaWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVHJhaWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE0ZGZmMzkyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RyYWlsRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGRmZjM5MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UcmFpbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0ZGZmMzkyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UcmFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhMDVjZGM4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RyYWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RyYWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVHJhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJhMDVjZGM4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYTA1Y2RjOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXG5hdGl2ZXNjcmlwdFxcXFxjc2M0d1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyYTA1Y2RjOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYTA1Y2RjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYTA1Y2RjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVHJhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYTA1Y2RjOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyYTA1Y2RjOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9UcmFpbHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RyYWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UcmFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UcmFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmEwNWNkYzgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVHJhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJhMDVjZGM4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RyYWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmEwNWNkYzgmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9