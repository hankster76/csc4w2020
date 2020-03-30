<template>
    <Page>
        <ScrollView orientation="vertical">
          <StackLayout class="home-panel">
            <Image :src="event.imageSrc" /> 
            <Button @tap="addToCalendar(event)" text="Add to My Calendar" class="button" />
            <Label :text="event.name" class="info-panel"></Label>
            <Label :text="event.group" class="info-panel"></Label>
            <Label :text="event.eventDate" textwrap="true" class="info-panel"></Label>
            <GridLayout columns="90, *">
                <Label text="Meet at: " col="0" class="sponLeft"></Label>
                <Label :text="event.meetAt" col="1" textWrap="true" class="sponRight" @tap="tapAddr(event.meetAt)"></Label>
            </GridLayout>
            <GridLayout columns="90, *">
                <Label text="Meet time: " col="0" class="sponLeft"></Label>
                <Label :text="event.meetTime" col="1" textWrap="true" class="sponnameRight"></Label>
            </GridLayout>
            <GridLayout columns="90, *">
                <Label text="Rating: " col="0" class="sponLeft"></Label>
                <Label :text="event.rating" col="1" textwrap="true" class="sponnameRight"></Label>
            </GridLayout>
            <GridLayout columns="90, *" >
            <Label text="Leaders: " col="0" class="sponLeft"></Label>
            <GridLayout col="1" columns="*,*,*">
                <Label :text="event.leader1" col="0" class="sponRight" @tap="call(event.leader1Phone)"></Label>
                <Label :text="event.leader2" col="1" class="sponRight" @tap="call(event.leader2Phone)"></Label>
                <Label :text="event.leader3" col="2" class="sponRight" @tap="call(event.leader3Phone)"></Label>
            </GridLayout>
            </GridLayout>
            <Label :text="event.desc" textWrap="true" class="motd-label" height="100%"></Label>
            <Button @tap="$modal.close" text="Close" class="button" />
          </StackLayout> 
        </ScrollView>
    </Page>
</template>  

<script>
    import phone from "nativescript-phone";
    import email from "nativescript-email";
    var Calendar = require("nativescript-calendar");
    var LocateAddress = require("nativescript-locate-address").LocateAddress;
    const utilsModule = require("tns-core-modules/utils/utils");

    export default {
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
                    address: args,
                }).then(
                    function() {
                        //console.log("Maps app launched.");
                    },
                    function(error) {
                        console.log(error);
                    }
                )
            },

            call(args) { 
                //console.log("touched phone number " + args);
                phone.dial(args,true);
            },

            send(args) {
                var address = args;
                //console.log("email address is " + address);
                email.compose( {
                    subject: "Message from Mobile App",
                    to: [address],
                    body: ""
                }).then(
                    function() {
                        //console.log("Email composer closed");
                    }, function(err) {
                        //console.log("Error: " + err);
                    }
                );
            },

            addToCalendar(args) {
                //console.log("Args is " + JSON.stringify(args));
                var yr = Number(args.dateFld.substring(6,10));
                var dy = Number(args.dateFld.substring(3,5));
                var mth = Number(args.dateFld.substring(0,2) - 1);
                var hr = Number(args.startTimeFld);
                var dur = Number(args.duration);
                var stDt = new Date(yr, mth, dy, hr);
                var endTme = hr + args.duration;
                var endDt = new Date(yr,mth,dy,endTme);
                var startDt = new Date(yr)
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
                };

                //console.log("Options:" + JSON.stringify(options));
                confirm({
                    title: "Create Event",
                    message: "Create Event in your calendar?",
                    okButtonText: "YES",
                    cancelButtonText: "NO"
                }).then(function(result) {
                    if (result==true) {
                        Calendar.createEvent(options).then(
                            function(createdId) {
                            console.log("Created Event with ID: " + createdId);
                        }),
                        function(error) {
                            console.log("Error creating an Event: " + error);
                        }
                    } else if (result == false) {

                    }

                });
            }
        }
    };
</script>

<style scoped>
    .home-panel {
        horizontal-align: center;
        font-size: 35;
        background-color: #131d4e;
    }

    .addr-panel {
        horizontal-align: center;
        text-decoration: underline;
        text-align: center;
        color: white;
        font-size: 20;
        background-color: #131d4e;
    }

    .info-panel {
        horizontal-align: center;
        text-align: center;
        color: white;
        font-size: 20;
        background-color: #131d4e;
    }

    .desc-panel {
        horizontal-align: center;
        text-align: center;
        color: white;
        margin: 20;
        font-size: 12;
        background-color: #131d4e;
        border-style: solid;
        border-color: white;
        border-width: 5px;
    }

    .bio-panel {
        horizontal-align: center;
        color: white;
        margin: 10;
        font-size: 15;
        background-color: #131d4e;
    }

    .sponItem {
        horizontal-align: center;
        color: white;
        font-size: 15;
        margin: 0;
        background-color: #131d4e;
    }

    .sponLeft {
        horizontal-align: right;
        color: white;
        font-size: 15;
        margin: 0;
        background-color: #131d4e;
    }

    .sponnameRight {
        horizontal-align: left;
        color: white;
        font-size: 15;
        margin: 0;
        background-color: #131d4e;
    }

    .sponRight {
        horizontal-align: left;
        text-decoration: underline;
        color: white;
        font-size: 15;
        margin: 0;
        background-color: #131d4e;
    }

    .sponRightNoUL {
        horizontal-align: left;
        color: white;
        font-size: 15;
        margin: 0;
        background-color: #131d4e;
    }

    .motd-label {
    font-size: 15;
    margin-top: 5;
    margin-right: 5;
    margin-bottom: 5;
    margin-left: 5;
    padding: 5;
    horizontal-align: center;
    text-align: center;
    background-color: #db1921;
    color: white;
    font-style: italic;
    font-weight: bold;
    }

</style>