<template>
    <Page>
        <ActionBar title="About The Schedule" />
        <ScrollView background="#131d4e">
            <StackLayout>
                <Label class="about-panel" textWrap="true"
                    text="This is the schedule for trips as of April 15th.  It is possible that May 9th events will change or cancel altogether depending on participation of our sponsors.
                    
Watch for status update on events as the schedule will change depending on the COVID-19 situation and also because of trail conditions." />
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