<template>
    <Page>
        <ActionBar title="About The Trails" />
        <ScrollView background="#131d4e">
            <StackLayout>
                <Label class="about-panel" textWrap="true"
                    text="These are the trails that we have traveled in the past or will travel this season.  Trails will be added here as we run them in the future.  In the details for each trail there is a link to information about the trail from our sponsor Funtreks.  Also, we included a Cotrex link that will show you where the trail is.  The trailhead coordinates are derived from google maps but should be fairly accurate.  Trail ratings here are based on FunTreks ratings." />
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
        font-size: 15;
        padding: 15;
        background-color: #131d4e;
    }

</style>