<template>
  <Page >
    <ActionBar title="Colorado Springs Christian 4-Wheelers" class="action-bar" textWrap="true" />
    <ScrollView>
      <StackLayout class="homePanel">
        <Image src="~/images/logo.png" height="200" width="200" />
        <Label
          textWrap="true"
          text="(V1.93) This App will keep you updated on the activities, directors, sponsors and trails for the Colorado Springs Christian 4-Wheelers club"
          class="description"
        />
        <ListView for="item in misc" height="160" class = "homePanel">
          <v-template>
            <Label :text="item.motd" class="red-message" textWrap="true"></Label>
          </v-template>
        </ListView>
        <Button class="button" text="About Us" @tap="onAboutUsTap" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
    import AboutUs from "~/components/AboutUs";
    import NoConnect from "~/components/NoConnect";
    import dialogs from "tns-core-modules/ui/dialogs";
    import axios from "axios";
    
    export default {

        data: () => {
            return {
                misc: []

            };
        },

        components: { 
            AboutUs 
        },

        methods: {
            onAboutUsTap() {
                //console.log("Button was pressed");
                this.$showModal(AboutUs);
            },

        },

        mounted: function() {
            axios({ method: "GET", "url": "http://data.csc4w.com/misc.json" })
            .then(result => {
                //console.log("Result is " + result.statusText);
                this.misc = result.data.misc;
                //console.log("result is " + JSON.stringify(result.data.misc);
            })
            .catch((error) => {
                console.log("Error caught " + error);
                this.$showModal(NoConnect);
            }), error => {
                dialogs.alert("Error retrieving data is: " + error).then(function() {
                  console.log("Dialog closed!");
                });
            }
        }


    };
</script>

<style scoped>
.homePanel {
  background-color: #131d4e;
}

.description {
  margin-bottom: 15;
  font-size: 15;
  color: white;
  background-color: #131d4e;
  text-align: center;
}

</style>