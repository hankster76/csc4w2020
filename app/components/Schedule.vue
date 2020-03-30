<template>
    <Page>
        <ActionBar title="Colorado Springs Christian 4-Wheelers" class="action-bar" />
        <StackLayout class="list-panel" width="100%">
            <Label textWrap="true" class="header-label" text="Our Schedule" />
            <ListView for="event in events" @itemTap="onItemTap" height="100%" separatorColor="white" class="list-panel">
                <v-template>
                    <GridLayout columns="auto,*" rows="*,*">
                        <Image :src="event.imageSrc" height="100" width="100" col="0" rowSpan="2" class="pic"/>
                        <Label :text="event.eventDate" textWrap="true" class="event" row="0" col="1" />
                        <Label :text="event.name" class="event" textWrap="true" row="1" col="1"></Label>
                    </GridLayout>
                </v-template>
            </ListView>   
        </StackLayout>
    </Page>
</template>  

<script>
    import ScheduleDetails from "./ScheduleDetails";
    import axios from "axios";

    export default {
        
        data: () => {
            return {
                events: []
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
            }
        },
        mounted: function() {
            axios({ method: "GET", "url": "https://api.myjson.com/bins/12l5h8" })
            .then(result => {
                this.events = result.data.events;
                //console.log("result is " + JSON.stringify(result.data.events));

            }, error => {
                console.error(error);
            })
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