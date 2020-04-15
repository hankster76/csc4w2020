<template>
    <Page>
        <ActionBar title="About Our Sponsors" />
        <ScrollView background="#131d4e">
            <StackLayout>
                <Label class="about-panel" textWrap="true"
                    text="Our Sponsors help us to keep our membership dues low.  They donate prizes for our giveaway at kick off, they provide meals for some events and in some cases provide us donations to pay for club sponsored events.  You can show your appreciation for their sponsorhip by mentioning the club when you visit them." />
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
        horizontal-align: left;
        color: white;
        font-size: 15;
        padding: 15;
        background-color: #131d4e;
    }

</style>