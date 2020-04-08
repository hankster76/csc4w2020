<template>
    <Page>
        <ActionBar title="Colorado Springs Christian 4-Wheelers" class="action-bar" />
        <StackLayout class="list-panel">
            <Label textWrap="true" class="header-label"
                text="Our Sponsors" />
            <Button class="button" text="About Our Sponsors" @tap="onAboutTap" />
            <ListView for="sponsor in sponsors" @itemTap="onItemTap" height="100%" separatorColor="white" class="list-panel" >
                <v-template>
                    <GridLayout columns="100,*" , rows="*,*">
                        <Image :src="sponsor.imagesrc" row="0" col="0" height="70" width="70" />
                        <Label :text="sponsor.name" class="listItemRight" textWrap="true" row="0" col="1"></Label>
                    </GridLayout>
                </v-template>
            </ListView>  
        </StackLayout>
    </Page>
</template>  

<script>
    import SponsorDetails from "./SponsorDetails";
    import AboutSponsors from "./AboutSponsors";
    import axios from "axios";

    export default {
        
        data: () => {
            return {
                sponsors: []
            };
        },

        methods: {

            onItemTap(args) {
                const view = args.view;
                const page = view.page;
                const tappedItem = view.bindingContext;
                //console.log("sponsor tapped");
                this.$showModal(SponsorDetails, {
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
                this.$showModal(AboutSponsors);
            },


        },

        mounted: function() {
            axios({ method: "GET", "url": "http://data.csc4w.com/sponsors.json" })
            .then(result => {
                this.sponsors = result.data.sponsors;
                //console.log("result is " + JSON.stringify(result.data.sponsors));

            }, error => {
                console.error(error);
            })
        }

}   


</script>
<style scoped>

</style>
