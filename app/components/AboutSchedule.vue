<template>
    <Page>
        <ActionBar title="About The Schedule" />
        <ScrollView background="#131d4e">
            <StackLayout>
                <Label class="about-panel" textWrap="true"
                    text="This is the current schedule for trips.  Watch for status update on events as the schedule will change depending on the COVID-19 situation and also because of trail conditions." />
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