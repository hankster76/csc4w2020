<template>
    <Page>
        <ActionBar title="Colorado Springs Christian 4-Wheelers" class="action-bar" />
        <StackLayout class="list-panel" width="100%">
            <Label textWrap="true" class="header-label" text="Our Schedule" />
            <Button class="button" text="About The Schedule" @tap="onAboutTap" />
            <ListView for="event in events" @itemTap="onItemTap" height="100%" separatorColor="white" class="list-panel">
                <v-template>
                    <GridLayout columns="auto,*" rows="*,*">
                        <Image :src="event.imageSrc" height="120" width="120" col="0" rowSpan="2" class="pic"/>
                        <Label :text="event.eventDate" textWrap="true" class="event1" row="0" col="1" />
                        <Label :text="event.name" class="event2" textWrap="true" row="1" col="1"></Label>
                    </GridLayout>
                </v-template>
            </ListView>   
        </StackLayout>
    </Page>
</template>  

<script>
    import ScheduleDetails from "./ScheduleDetails";
    import AboutSchedule from "./AboutSchedule";
    import axios from "axios";

    export default {
        
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
                const view = args.view;
                const page = view.page;
                const tappedItem = view.bindingContext;
                //console.log("event tapped");
                this.$showModal(ScheduleDetails, {
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
                this.$showModal(AboutSchedule);
            },


        },

        mounted: function() {
            axios({ method: "GET", "url": "http://data.csc4w.com/events.json" })
            .then(result => {
                this.events = result.data.events;
                //console.log("result is " + JSON.stringify(result.data.events));
            })
            .catch((error) => {
                //console.log("Error caught " + error);
                dialogs.alert("Error retrieving data is: " + error).then(function() {
                  console.log("Dialog closed!");
                });
            }), error => {
                dialogs.alert("Error retrieving data is: " + error).then(function() {
                  console.log("Dialog closed!");
                });
            }
        }
    }   


</script>

<style scoped>

    .pic {
        background-color: #131d4e; 
        margin: 2;
    }
    
    .event {
        color: white;
        vertical-align: top;
        font-size: 20;
        font-style: italic;
        background-color: #131d4e; 
        text-align: left;
        padding-left: 2;
    }

    .event1 {
        color: white;
        vertical-align: bottom;
        font-size: 20;
        font-style: italic;
        background-color: #131d4e; 
        text-align: left;
        padding-left: 2;
    }

    .event2 {
        color: white;
        vertical-align: top;
        font-size: 20;
        font-style: italic;
        background-color: #131d4e; 
        text-align: left;
        padding-left: 2;
    }

    .eventDate {
        color: white;
        font-size: 20;
    }

    .description-label {
        margin-bottom: 15;
    }

.event-panel {
  background-color: #131d4e;
  margin-bottom: 3;

}


</style>