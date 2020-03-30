<template>
    <Page>
        <ScrollView orientation="vertical">
          <StackLayout class="sponPanel">
            <Image :src="sponsor.imagesrc" />               
            <Label :text="sponsor.address" textWrap="true" @tap="tapAddr(sponsor.address)" class="addr-panel"></Label>
            <GridLayout columns="100, *" >
                <Label text="   Contact: " col="0" class="leftCol"></Label>
                <Label :text="sponsor.contact" col="1" textwrap="true" class="rightColNoUL"></Label>
            </GridLayout>  
            <GridLayout columns="100, *">
                <Label text="Phone: " col="0" class="leftCol"></Label>
                <Label :text="sponsor.phone" col="1" textwrap="true" class="rightCol" @tap="call(sponsor.phone)"></Label>
            </GridLayout>
            <GridLayout columns="100, *">
                <Label text="EMail: " col="0" class="leftCol"></Label>
                <Label :text="sponsor.email" col="1" textwrap="true" class="rightCol" @tap="send(sponsor.email)"></Label>
            </GridLayout>
            <GridLayout columns="100, *">
                <Label text="WebSite: " col="0" class="leftCol"></Label>
                <Label :text="sponsor.url" col="1" textwrap="true" class="rightCol" @tap="navTo(sponsor.url)"></Label>
            </GridLayout>
            <Label :text="sponsor.bio" textWrap="true" class="red-message"></Label>
            <Button @tap="$modal.close" text="Close" class="button" />
          </StackLayout> 
        </ScrollView>
    </Page>
</template>  



<script>
    import phone from "nativescript-phone";
    import email from "nativescript-email";
    var LocateAddress = require("nativescript-locate-address").LocateAddress;
    const utilsModule = require("tns-core-modules/utils/utils");

    export default {
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
            }
        }
    };
</script>

<style scoped>
  .addr-panel {
    color: white;
    horizontal-align: center;
    text-align: center;
    font-size: 15;
    margin: 1;
    width: 100%;
    background-color: #131d4e;
    text-decoration: underline;
  }

.sponPanel {
  background-color: #131d4e;
}


</style>