webpackHotUpdate("bundle",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9EaXJlY3RvcnMudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFrSEEsR0FySEE7QUF1SEE7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FIQSxDQUlBOztBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLHdCQUZBO0FBR0E7QUFDQSwyQkFEQTtBQUVBLHlCQUZBO0FBR0E7QUFIQTtBQUhBO0FBREE7QUFXQSxLQWxCQTs7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7O0FBdEJBLEdBdkhBO0FBaUpBO0FBQ0E7QUFBQTtBQUFBO0FBQUEsT0FDQSxJQURBLENBQ0E7QUFDQSw2Q0FEQSxDQUVBO0FBQ0EsS0FKQSxFQUtBLEtBTEEsQ0FLQTtBQUNBO0FBQ0E7QUFDQSxLQVJBLEdBUUE7QUFDQTtBQUNBLEtBVkE7QUFXQTtBQTdKQSxHIiwiZmlsZSI6ImJ1bmRsZS4yYWU0ZTU2MDQ1ZGFkMDllMDBhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkNvbG9yYWRvIFNwcmluZ3MgQ2hyaXN0aWFuIDQtV2hlZWxlcnNcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImxpc3QtcGFuZWxcIj5cclxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwiaGVhZGVyLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJPdXIgRGlyZWN0b3JzIGZvciBUaGlzIFllYXJcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgdGV4dD1cIkFib3V0IE91ciBEaXJlY3RvcnNcIiBAdGFwPVwib25BYm91dFRhcFwiIC8+XHJcbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJkaXJlY3RvciBpbiBkaXJlY3RvcnNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiIGhlaWdodD1cIjEwMCVcIiBzZXBhcmF0b3JDb2xvcj1cIndoaXRlXCIgY2xhc3M9XCJsaXN0LXBhbmVsXCIgPlxyXG4gICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjEwMCwqXCIgLCByb3dzPVwiKlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cImRpcmVjdG9yLmltYWdlc3JjXCIgcm93PVwiMVwiIGNvbD1cIjBcIiBoZWlnaHQ9XCI3MFwiIHdpZHRoPVwiNzBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJkaXJlY3Rvci5uYW1lXCIgY2xhc3M9XCJkaXJlY3RvclwiIHRleHRXcmFwPVwidHJ1ZVwiIHJvdz1cIjFcIiBjb2w9XCIxXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+ICBcclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPiAgXHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IERpcmVjdG9yRGV0YWlscyBmcm9tIFwiLi9EaXJlY3RvckRldGFpbHNcIjtcclxuICAgIGltcG9ydCBBYm91dERpcmVjdG9ycyBmcm9tIFwiLi9BYm91dERpcmVjdG9yc1wiO1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBcclxuICAgICAgICBkYXRhOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3RvcnM6IFtdXHJcbi8qXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJLaXJrIEJvZGVcIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJQcmVzaWRlbnRcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9EaXJlY3RvcktpcmtTTS5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJrZWJvZGVAZ21haWwuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig3MTkpNjUwLTY2ODlcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiS2lyayBCb2RlIGJlZ2FuIGhpcyBKZWVwaW5nIGRheXMgbm90IHNvIGxvbmcgYWdvIGluIE5lYnJhc2thIG9mIGFsbCBwbGFjZXMgYWZ0ZXIgcHVyY2hhc2luZyBhIHJ1c3RlZCBvdXQsIGp1bmt5IENoZXJva2VlIGZyb20gc29tZW9uZSdzIHlhcmQuIFNvb24gYWZ0ZXIgaGUgcmVhbGl6ZWQgdGhhdCBpdCB3YXMgYSBwcmV0dHkgY2FwYWJsZSBvZmYgcm9hZCByaWcgYW5kIGJlZ2FuIHRpbmtlcmluZyBhbmQgaW1wcm92aW5nIGl0LiBBZnRlciBtb3ZpbmcgdG8gQ29sb3JhZG8gaW4gMjAwOCwgaGUgZm91bmQgb3V0IHdoYXQgcmVhbCBvZmYgcm9hZCB0cmFpbHMgYXJlIGxpa2UuIFRoZSBvbGQgcnVzdHkgQ2hlcm9rZWUgaGFzIGJlZW4gcmVwbGFjZWQgd2l0aCBhIG5ld2VyIG9uZSB0byB0YWtlIHRoZSBhYnVzZSBvZiBDb2xvcmFkbydzIHJvY2tzLiBLaXJrIGlzIGEgbGFuZCBzdXJ2ZXlvciBhbmQgd29ya3MgZm9yIEJhcnJvbiBMYW5kIGluIENvbG9yYWRvIFNwcmluZ3MuIEhlIGlzIG1hcnJpZWQgdG8gRXJpa2EgYW5kIHRoZXkgaGF2ZSAyIGNoaWxkcmVuLCBUeWxlciBhbmQgTWFyaWprZS4gVGhleSBhbGwgbG92ZSB0byBnZXQgb3V0IGluIEdvZCdzIGNyZWF0aW9uIG9mdGVuIGFuZCB0cnkgdG8gY2FtcCBpbiBuZXcgcGxhY2VzLiBIZSBob3BlcyB0byBzZWUgeW91IG9uIHRoZSB0cmFpbHMhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgICAgXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRhdmUgQ2hsYWRla1wiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yXCIsIFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvRGlyZWN0b3JEYXZlU00uanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZGNobGFkZWtAcS5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiKDcxOSk2MzQtNjAwNlwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJEYXZlIGNhbiBmcmVxdWVudGx5IGJlIHNlZW4gbGVhZGluZyBncm91cHMgaW4gTW9hYiBhbmQgd2lsbCBsZWFkIHNldmVyYWwgb2YgdGhlIG1vcmUgZGlmZmN1bHQgY2x1YiBydW5zIHRoaXMgeWVhci5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJXYXJkIFdpbGxpYW1zXCIsIFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9EaXJlY3RvcldhcmRTTS5wbmdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJ3YXJkd3dpbGxpYW1zQGdtYWlsLmNvbVwiLCBcclxuICAgICAgICAgICAgXCJwaG9uZTFcIjogXCIoNzE5KTIxMy01OTE1XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIllvdSB3aWxsIHNlZSBXYXJkIG9uIG1hbnkgb2Ygb3VyIHRyaXBzIHdpdGggaGlzIHZpbnRhZ2UgV2lsbHkncyBKZWVwLiAgSGUgYSBza2lsbGVkIHdoZWVsZXIgYW5kIGEgdmVyeSBnb29kIHNwb3R0ZXIuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmltIEplbmlzdGFcIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3RvclwiLCBcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL0RpcmVjdG9ySmVuaXN0YVNNLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImpqZW5pc3RhQGFvbC5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiKDcxOSkyMDAtNDc1N1wiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJKaW0gSmVuaXN0YSBhbmQgaGlzIHdpZmUgS2FyZW4gaGF2ZSBiZWVuIDQtd2hlZWxpbmcgc2luY2UgMjAwMyB3aGVuIHRoZXkgYm91Z2h0IGEgMjAwMiBMYW5kIFJvdmVyIEZyZWVsYW5kZXIgYW5kIHN0YXJ0ZWQgZXhwbG9yaW5nIHRoZSBlYXNpZXIgdHJhaWxzIG5lYXIgQ29sb3JhZG8gU3ByaW5ncy4gQml0dGVuIGJ5IHRoZSBvZmYtcm9hZGluZyBidWcgYW5kIHJlYWxpemluZyB0aGV5IG5lZWRlZCBtb3JlIHRoYW4gdGhlIEZyZWVsYW5kZXIncyA4LjEgaW5jaGVzIG9mIGNsZWFyYW5jZSwgdGhleSBub3cgZWFjaCBkcml2ZSBhbiBvcmFuZ2UgMjAwNCBMYW5kIFJvdmVyIERpc2NvdmVyeSBJSSBHNC4gSW4gYWRkaXRpb24gdG8gam9pbmluZyBhbmQgZXZlbnR1YWxseSBiZWNvbWluZyBhIERpcmVjdG9yIHdpdGggQ1NDNFcsIEppbSBpcyBvbiB0aGUgRXhlY3V0aXZlIENvbW1pdHRlZSBvZiB0aGUgU29saWh1bGwgU29jaWV0eSwgd2hpY2ggaXMgdGhlIExhbmQgUm92ZXIgQ2x1YiBvZiBDb2xvcmFkbywgd2hlcmUgaGUgY29vcmRpbmF0ZWQgdGhlIGxhc3QgNSBpdGVyYXRpb25zIG9mIHRoZSBMYW5kIFJvdmVyIE5hdGlvbmFsIFJhbGx5LiAgSmltIGlzIGEgam9pbnQgZXhlcmNpc2UgcGxhbm5lciB3aXRoIE5PUkFEIGFuZCBVU05PUlRIQ09NIGF0IFBldGVyc29uIEFGQiwgYW5kIEthcmVuIHdvcmtzIGF0IExpYnJhcnkgMjFjIHdpdGggdGhlIFBpa2VzIFBlYWsgTGlicmFyeSBEaXN0cmljdC4gVGhleSBoYXZlIDYgZ3Jvd24gY2hpbGRyZW4gKDMgb2Ygd2hvbSBhcmUgbWFycmllZCkgYW5kIDcgZ3JhbmRjaGlsZHJlbi4gVGhleSBsaXZlIGF0IHRoZSBzb3V0aGVybiBlZGdlIG9mIEJsYWNrIEZvcmVzdCBhbmQgYXR0ZW5kIGNodXJjaCBhdCBTYWludCBHYWJyaWVsIHRoZSBBcmNoYW5nZWwgaW4gdGhlIG5vcnRoZWFzdCBwYXJ0IG9mIHRvd24uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2xlbiBIb292ZXJcIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3RvclwiLCBcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL0RpcmVjdG9yR2xlblNNLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImNvcnViaTFAeWFob28uY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig3MTkpMzcxLTczNTdcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiSSBnb3QgaW50ZXJlc3RlZCBpbiBvZmYtcm9hZGluZyB3YXkgYmFjayBpbiB0aGUgNzAncyEgQW4gYXJ0aWNsZSBpbiBhIG1hZ2F6aW5lIGRldGFpbGluZyBDb2xvcmFkbyB0cmFpbHMgaW4gdGhlIFNhbiBKdWFuIE1vdW50YWlucyB0b3VjaGVkIGFuIGFkdmVudHVyb3VzIGNvcmQgaW4gbWUsIGFuZCBzaW5jZSBJIGFscmVhZHkgaGFkIGEgQ2hldnkgQmxhemVyLCBJIGhlYWRlZCBmb3IgQ29sb3JhZG8gdGhlIG5leHQgc3VtbWVyLiBBZnRlciBzZXZlcmFsIEJsYXplcnMgYW5kIGJlZ2lubmluZyBhIGZhbWlseSwgYW5kIHNvbWUgeWVhcnMgbm90IGFibGUgdG8gZ28gdG8gQ29sb3JhZG8gYXQgYWxsLCBJIGJvdWdodCBteSBmaXJzdCBKZWVwIGluIHRoZSBsYXRlIDgwJ3MuIEkndmUgc2luY2Ugb3duZWQgYSBZSiwgYSBDaGVyb2tlZSwgMyBUSidzLCBhbmQgYSBKSy4gSSBzdGlsbCBoYXZlIDIgVEoncywgaWRlbnRpY2FsIHJlZCAyMDAzIFJ1Ymljb24ncy4gV2VsbCwgYWxtb3N0IGlkZW50aWNhbCBleGNlcHQgZm9yIG1vZGlmaWNhdGlvbnMgbGlrZSBhIDQuNiBsaXRlciBzdHJva2VyLCBGb3JkIDkgaW5jaCwgYW5kIDUuNSBpbmNoIGxpZnQgb24gb25lLiBMaXZpbmcgaW4gTmVicmFza2Egd2FzIGZydXN0cmF0aW5nIHRvIHNheSB0aGUgbGVhc3QhIFVwb24gcmV0aXJlbWVudCBpbiAyMDExLCBJIGRpZG4ndCBoZXNpdGF0ZSB0byBtb3ZlIHRvIENvbG9yYWRvLiBQcmV2aW91cyB0byBtb3ZpbmcgdG8gQ29sb3JhZG8sIEkgZm91bmQgQ1NDNFcgb25saW5lIGFuZCBldmVuIHRhbGtlZCB3aXRoIERlbm55IEhhZ2Ugbm90IGtub3dpbmcgSSdkIG9uZSBkYXkgYmUgYSBDU0M0VyBkaXJlY3RvciEgSSdtIGhlcmUgYnkgbXlzZWxmIG5vdywgYW5kIGJlaW5nIHJldGlyZWQsIEkgaGF2ZSB0aW1lIHRvIHByZS1ydW4gdHJhaWxzIGFuZCB0byBiZSBzcG9udGFuZW91cyBhbmQgYWJsZSB0byBkbyB0cmFpbCBydW5zIGFsbW9zdCBhbnl0aW1lIHNvbWVvbmUgZmVlbHMgdGhlIHVyZ2UgdG8gZ28uIExpdmluZyB0aGUgZHJlYW0hIEp1c3QgcmVtZW1iZXIgSkVFUCBhY3JvbnltLCBKdXN0IEVtcHR5IEV2ZXJ5IFBvY2tldCEgTG9sXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGV0ZSBKb2huc1wiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yXCIsIFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMvRGlyZWN0b3JQZXRlU00uanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicGV0ZWphbWlqQE1zbi5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiKDMwMyk5MDktNjcxNVwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJQZXRlIEpvaG5zIGdyZXcgdXAgaW4gdGhlIG1vdW50YWlucyBvZiBCYWlsZXkgQ29sb3JhZG8uICBUaGUgbmVlZCBvZiA0eDQgd2FzIGEgd2F5IG9mIGxpZmUgbm90IGp1c3QgYSBob2JieS4gQ2FtcGluZyBhbmQgZm91ciB3aGVlbGluZyBiZWNhbWUgYSBmYXZvcml0ZSBwYXN0IHRpbWUgd2l0aCBoaXMgd2lmZSwgIEphbWkgYW5kIHRoZWlyIHR3byBjaGlsZHJlbiBaYWMgYW5kIEFseXNzYS4gVGhlIGRlc2lyZSB0byBqb2luIGEgNHg0IGNsdWIgYnJvdWdodCB1cyB0byBiZSBhY3RpdmUgd2l0aCBDU0M0Vy4gV2Ugc29vbiBtZXQgbWFueSB3b25kZXJmdWwgcGVvcGxlIHdpdGggc2ltaWxhciBpbnRlcmVzdHMuIFBldGUgaGFzIGJlZW4gd2l0aCBDU0M0VyBhcyBhIG1lbWJlciBzdGFydGluZyBpbiAyMDAyIGFuZCBhIGRpcmVjdG9yIGEgZmV3IHllYXJzIGFmdGVyd2FyZC4gUGV0ZSBsb3ZlcyBzaGFyaW5nIGhpcyBsb3ZlIGZvciB0aGUgb3V0ZG9vcnMgd2l0aCBvdGhlcnMgd2hpbGUgZW5qb3lpbmcgdGhlIGNoYWxsZW5nZSBvZiBmb3VyIHdoZWVsaW5nLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkdsZW5uIEhlc3NcIiwgXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3RvclwiLCBcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL0RpcmVjdG9yR2xlbm5TTS5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJnbGVubmhlc3M2NkBnbWFpbC5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiNzIwLTIxOS01Mzg0XCIsXHJcbiAgICAgICAgICAgIFwicGhvbmUyXCI6IFwiIFwiLFxyXG4gICAgICAgICAgICBcImJpb1wiOiBcIkdsZW5uIGlzIG5vdCBvbmx5IGFuIGF2aWQgd2hlZWxlciBhbmQgZ3JlYXQgdHJhaWwgbGVhZGVyLCBoZSBhbHNvIHNwZW5kcyBhIGxvdCBvZiB0aW1lIG9uIGhpcyBkaXJ0IGJpa2UgdG91cmluZyBhcm91bmQgdGhlIHN0YXRlLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkplcmVteSBSb3dhblwiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yL0ZhY2Vib29rIEFkbWluaXN0cmF0b3JcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9EaXJlY3RvckplcmVteVNNLmpwZ1wiLCBcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImpyb3dhbjE5NzlAZ21haWwuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig3MTkpMjA1LTI1NjVcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiSmVyZW15IGNhbiBiZSBzZWVuIGxlYWRpbmcgZ3JvdXBzIGFyb3VuZCBpbiBNb2FiLCBVdGFoLiAgSGUgaXMgYSBwYXJ0bmVyIGluIE91dGxhdyBKZWVwIEFkdmVudHVyZXMgYW5kIHNwZW5kcyBtb3N0IG9mIGhpcyB0aW1lIGluIE1vYWIuICBKZXJlbXkgaXMgdGhlIG1hbiB0byBzZWUgaWYgeW91IHdhbnQgdG8gaGF2ZSBhIGdvb2Qgd2hlZWxpbmcgZXhwZXJpZW5jZSB3aGVuIHlvdSB2aXNpdCBNb2FiIVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRhbiBNaXRjaGVsbFwiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yL1dlYm1hc3RlclwiLCBcclxuICAgICAgICAgICAgXCJpbWFnZXNyY1wiOiBcIn4vaW1hZ2VzL0RpcmVjdG9yRGFuU00uanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiY3NjNHdAY3NjNHcuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig3MTkpMjEwLTE2NDRcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiRGFuIGlzIGFuIGF2aWQgd2hlZWxlciBhbmQgeW91IHdpbGwgc2VlIGhpbSBhbmQgaGlzIHdpZmUgTWljaGVsbGUgb24gbWFueSB0cmlwcyB0aGlzIHllYXIuICBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJKYXNvbiBTZWxsZXJzXCIsIFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9qYXNvbi5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqYXNvbnNlbGxlcnM3M0B5YWhvby5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiKDk1NCk4MDUtMzY2MFwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJKYXNvbiBpcyBhIG5ldyBkaXJlY3RvciB0aGlzIHllYXIgc28gbWFrZSBzdXJlIHRvIGludHJvZHVjZSB5b3Vyc2VsZiB0byBoaW0gYXQgdGhlIG1lZXRpbmcgb3Igb24gdGhlIHRyYWlsLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pY2hlbGxlIE1pdGNoZWxsXCIsIFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VzcmNcIjogXCJ+L2ltYWdlcy9taWNoZWxsZS5qcGdcIiwgXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqZWVwaW5nNGpveUBnbWFpbC5jb21cIiwgXHJcbiAgICAgICAgICAgIFwicGhvbmUxXCI6IFwiKDcxOSkyMjktMTUzNVwiLFxyXG4gICAgICAgICAgICBcInBob25lMlwiOiBcIiBcIixcclxuICAgICAgICAgICAgXCJiaW9cIjogXCJNaWNoZWxsZSBpcyBhIG5ldyBkaXJlY3RvciB0aGlzIHllYXIuICBTaGUgaXMgdGhlIGZpcnN0IGZlbWFsZSBkaXJlY3RvciBpbiB0aGUgY2x1YidzIGhpc3Rvcnkgc28gbWFrZSBzdXJlIHRvIGludHJvZHVjZSB5b3Vyc2VsZiB0byBoZXIgYXQgdGhlIG1lZXRpbmcgb3Igb24gdGhlIHRyYWlsLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIktlaXRoIEJ1dGxlclwiLCBcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdG9yXCIsIFxyXG4gICAgICAgICAgICBcImltYWdlc3JjXCI6IFwifi9pbWFnZXMva2VpdGguanBnXCIsIFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwia2VpdGguYnV0bGVyNThAZ21haWwuY29tXCIsIFxyXG4gICAgICAgICAgICBcInBob25lMVwiOiBcIig4MTIpNDU1LTU0NzdcIixcclxuICAgICAgICAgICAgXCJwaG9uZTJcIjogXCIgXCIsXHJcbiAgICAgICAgICAgIFwiYmlvXCI6IFwiS2VpdGggaXMgYSBuZXcgZGlyZWN0b3IgdGhpcyB5ZWFyIHNvIG1ha2Ugc3VyZSB0byBpbnRyb2R1Y2UgeW91cnNlbGYgdG8gaGltIGFuZCBoaXMgd2lmZSBLZXJpIGF0IHRoZSBraWNrLW9mZiBtZWV0aW5nIG9yIG9uIHRoZSB0cmFpbC5cIlxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0gXHJcbiovXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBhcmdzLnZpZXc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlID0gdmlldy5wYWdlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFwcGVkSXRlbSA9IHZpZXcuYmluZGluZ0NvbnRleHQ7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlyZWN0b3IgdGFwcGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKERpcmVjdG9yRGV0YWlscywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRhcHBlZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQWJvdXRUYXAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKEFib3V0RGlyZWN0b3JzKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcInVybFwiOiBcImh0dHA6Ly9kYXRhLmNzYzR3LmNvbS9kaXJlY3RvcnMuanNvblwiIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdG9ycyA9IHJlc3VsdC5kYXRhLmRpcmVjdG9ycztcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXN1bHQgaXMgXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5kaXJlY3RvcnMpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjYXVnaHQgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoTm9Db25uZWN0KTtcclxuICAgICAgICAgICAgfSksIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgXCIgKyBlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxuXHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuYWN0aW9uLWJhciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODtcclxuICAgICAgICBwYWRkaW5nOiA4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpcmVjdG9yIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1wYW5lbCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgbWFyZ2luOiAxO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFkNGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIxOTIxO1xyXG4gICAgICAgIGNvbG9yOiBXaGl0ZTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG5cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9