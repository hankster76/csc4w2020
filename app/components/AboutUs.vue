<template>
    <Page>
        <ActionBar title="About CSC4W" />
        <ScrollView background="#131d4e">
            <StackLayout>
                <Image src="~/images/logo.png" height="200" width="200" />
                <Label class="about-panel" textWrap="true"
                    text="Colorado Springs Christian 4 Wheelers, Inc., exists as a club to allow for wonderful times together in off-road activities with fellow believers. The association began in the spring of 1993. 

Our philosophy includes the belief that we are to invite our neighbors and co-workers to join with us in any of our events so that we are involved intentionally in reaching out to other members of our community. 

As Christians we desire to always uphold the law in regards to such things as: obeying the speed limit, staying clear of no trespassing or posted areas, staying on the trail when so marked, packing it in and packing it all out, adhering to the national Tread Lightly program and state organization of 4WD clubs, etc. 

Our desire is to help each other and our fellow man at all times. We want to be model off-roaders. 

God has created a mighty work of art in the Rocky Mountains. Every Christian needs to be balanced in life with his spiritual self, his family, his work, and his recreational activities. 

Micah 4:2 says, Come, let us go up to the mountains. 

We all need times of refreshing; the mountains, streams, and wooded hills remind us of the promises of God and of how faithfully He provides. Lets go up -- and see it, hear it, breathe it in, and most of all, feel it and experience it. Who knows? It may help change you forever!" />
                <Button @tap="$modal.close" text="Close" class="button" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style>
    .about-panel {
        horizontal-align: center;
        color: white;
        font-size: 12;
        padding: 15;
        background-color: #131d4e;
    }

</style>