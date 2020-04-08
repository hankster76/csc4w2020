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
                trails: []
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
                    console.log("result is " + JSON.stringify(result.data.trails));

                }, error => {
                    console.error(error);
                })
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