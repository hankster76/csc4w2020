<template>
    <Page>
        <ScrollView orientation="vertical">
          <StackLayout class="home-panel">
            <Image :src="trail.imagesrc" />               
            <Label :text="trail.name" class="info-panel"></Label>
            <GridLayout columns="90, *">
                <Label text="Trailhead: " col="0" class="sponLeft"></Label>
                <Label :text="trail.coordinates" col="1" textWrap="true" class="sponRight" @tap="tapAddr(trail.coordinates)"></Label>
            </GridLayout>
            <GridLayout columns="90, *">
                <Label text="Difficulty: " col="0" class="sponLeft"></Label>
                <Label :text="trail.difficulty" col="1" textWrap="true" class="sponnameRight" ></Label>
            </GridLayout>
            <GridLayout columns="90, *">
                <Label text="FunTreks: " col="0" class="sponLeft"></Label>
                <Label :text="trail.funtrex" col="1" textWrap="true" class="sponRight" @tap="navTo(trail.funtrex)"></Label>
            </GridLayout>
            <GridLayout columns="90, *">
                <Label text="CoTrex: " col="0" class="sponLeft"></Label>
                <Label :text="trail.cotrex" col="1" textWrap="true" class="sponRight" @tap="navTo(trail.cotrex)"></Label>
            </GridLayout>
            <Label :text="trail.desc" textWrap="true" class="motd-label" height="100%"></Label>
            <Button @tap="$modal.close" text="Close" class="button" />
          </StackLayout> 
        </ScrollView>
    </Page>
</template>  

<script>
    const utilsModule = require("tns-core-modules/utils/utils");
    var LocateAddress = require("nativescript-locate-address").LocateAddress;

    export default {
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
            navTo(args) {
                //console.log("touched navTo " + args);
                utilsModule.openUrl(args);                
            },

        }
    }
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
    margin-top: 15;
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