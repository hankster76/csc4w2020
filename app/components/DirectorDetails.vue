<template>
    <Page>
        <ScrollView orientation="vertical">
            <StackLayout class="home-panel">
                <Image :src="director.imagesrc" /> 
                <GridLayout columns="140,20,*" class="dirInfo">
                    <Label :text="director.name" col="0" class="dirLeft" />
                    <Label text=":" col="1" class="dirItem" />
                    <Label :text="director.title" col="2" class="dirnameRight" />
                </GridLayout>
                <GridLayout columns="60,20,*" class="dirInfo">
                    <Label text="Phone" col="0" class="dirLeft" />
                    <Label text=":" col="1" class="dirItem" />
                    <Label :text="director.phone1" col="2" class="dirRight" @tap="call(director.phone1)" />
                </GridLayout>
                <GridLayout columns="60,20,*" class="dirInfo">
                    <Label text="Email" col="0" class="dirLeft" />
                    <Label text=":" col="1" />
                    <Label :text="director.email" col="2" class="dirRight" @tap="send(director.email)" />
                </GridLayout>
                <Label textWrap="true" class="bio-panel" :text="director.bio"
                    verticalAlignment="top"></Label>
                <Button @tap="$modal.close" text="Close" class="button" />
            </StackLayout> 
        </ScrollView>
    </Page>
</template>  

<script>
    import phone from "nativescript-phone";
    import email from "nativescript-email";

    export default {
        props: ["context"],
        computed: {
            director() {
                return this.context || {};
            }
        },
        methods: {

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
    .home-panel {
        horizontal-align: center;
        font-size: 35;
        background-color: #131d4e;
    }

    .bio-panel {
        horizontal-align: center;
        color: white;
        margin: 10;
        font-size: 15;
        background-color: #131d4e;
    }

    .dirInfo {
        horizontal-align: center;
        color: white;
        font-size: 15;
        margin: 0;
        background-color: #131d4e;
    }

    .dirLeft {
        horizontal-align: right;
        color: white;
        font-size: 15;
        margin: 0;
        background-color: #131d4e;
    }

    .dirnameRight {
        horizontal-align: left;
        color: white;
        font-size: 15;
        margin: 0;
        background-color: #131d4e;
    }

    .dirRight {
        horizontal-align: left;
        text-decoration: underline;
        color: white;
        font-size: 15;
        margin: 0;
        background-color: #131d4e;
    }

</style>