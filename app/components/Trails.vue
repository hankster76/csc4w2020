<template>
    <Page>
        <ActionBar title="Colorado Springs Christian 4-Wheelers" class="action-bar" />
        <StackLayout class="list-panel">
            <Label textWrap="true" class="header-label"
                text="Trails" />
            <Button class="button" text="About The Trails" @tap="onTrailsTap" />
            <ListView for="trail in trails" @itemTap="onItemTap" height="100%" separatorColor="white" class="list-panel">
                <v-template>
                    <GridLayout columns="150,*" , rows="*,*">
                        <Image :src="trail.imagesrc" row="0" col="0" height="100" width="100" />
                        <Label :text="trail.name" class="listRightItem" textWrap="true" row="0" col="1"></Label>
                    </GridLayout>

                </v-template>
            </ListView>   
        </StackLayout>
    </Page>
</template>  

<script>
    import AboutTrails from "./AboutTrails";
    import TrailDetails from "./TrailDetails";
    import axios from "axios";

    export default {
        
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
                const view = args.view;
                const page = view.page;
                const tappedItem = view.bindingContext;
                //console.log("trail tapped");
                this.$showModal(TrailDetails, {
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
                this.$showModal(AboutTrails);
            }

        },
     
        mounted: function() {
                axios({ method: "GET", "url": "http://data.csc4w.com/trails.json" })
                .then(result => {
                    this.trails = result.data.trails;
                    //console.log("result is " + JSON.stringify(result.data.trails));
                })
                .catch((error) => {
                console.log("Error caught " + error);
                this.$showModal(NoConnect);
            }), error => {
                console.log("Error " + error)
            }
        }
}   


</script>

<style scoped>
    .trailname {
        color: white;
        font-size: 25;
    }

    .pic {
        padding: 2;
    }
    
    .event {
        color: white;
        font-size: 20;
    }

    .eventDate {
        color: white;
        font-size: 20;
    }

    .trail-panel {
        color: white;
        text-align: center;
        font-size: 15;
        font-style: italic;
        padding: 2;
        width: 100%;
        background-color: #131d4e;
        border: white;
        border-style: solid;
        border-width: 5px;
    }

    .description-label {
        font-size: 15;
        margin-bottom: 15;
        horizontal-align: center;
    }

    .header-label {
        horizontal-align: center;
        font-size: 20;
        text-align: center;
        background-color: #db1921;
        color: White;
        font-style: italic;
        font-weight: bold;
        width: 100%;
    }

</style>