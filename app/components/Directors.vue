<template>
    <Page>
        <ActionBar title="Colorado Springs Christian 4-Wheelers" class="action-bar" />
        <StackLayout class="list-panel">
            <Label textWrap="true" class="header-label"
                text="Our Directors for This Year" />
            <Button class="button" text="About Our Directors" @tap="onAboutTap" />
            <ListView for="director in directors" @itemTap="onItemTap" height="100%" separatorColor="white" class="list-panel" >
                <v-template>
                    <GridLayout columns="100,*" , rows="*">
                        <Image :src="director.imagesrc" row="1" col="0" height="70" width="70" />
                        <Label :text="director.name" class="director" textWrap="true" row="1" col="1"></Label>
                    </GridLayout>
                </v-template>
            </ListView>  
        </StackLayout>
    </Page>
</template>  

<script>
    import DirectorDetails from "./DirectorDetails";
    import AboutDirectors from "./AboutDirectors";
    import axios from "axios";

    export default {
        
/*        
        data: () => {
            return {
                directors: []
            };
        },
*/

        data: () => {
            return {
                directors: [] 
            };
        },

        methods: {

            onItemTap(args) {
                const view = args.view;
                const page = view.page;
                const tappedItem = view.bindingContext;
                //console.log("director tapped");
                this.$showModal(DirectorDetails, {
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
                this.$showModal(AboutDirectors);
            },

        },

    mounted: function() {

            axios({ method: "GET", "url": "http://data.csc4w.com/directors.json" })
            .then(result => {
                this.directors = result.data.directors;
                //console.log("result is " + JSON.stringify(result.data.directors));

            }, error => {
                console.error(error);
            })

        }

    }   


</script>

<style scoped>
    .action-bar {
        color: white;
        font-size: 8;
        padding: 8;
        background-color: #131d4e;
    }

    .director {
        color: white;
        font-size: 25;
    }

    .list-panel {
        color: white;
        font-size: 25;
        margin: 1;
        width: 100%;
        background-color: #131d4e;
    }

    .description-label {
        margin-bottom: 15;
    }

    .header-label {
        font-size: 20;
        text-align: center;
        background-color: #db1921;
        color: White;
        font-style: italic;
        font-weight: bold;
        width: 100%;
    }


</style>