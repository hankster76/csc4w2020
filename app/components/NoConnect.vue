<template>
    <Page>
        <ActionBar title="No Connectivity" />
        <ScrollView background="#131d4e">
            <StackLayout>
                <Image src="~/images/logo.png" height="200" width="200" />
                <Label class="about-panel" textWrap="true"
                    text="This application requires connectivity to the internet in order to show data on the tabs.  Please connect to the internet and close and reopen the app.
                    
Note that a small of data will be transmitted and a data charge may apply." />
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
        color: white;
        font-size: 18;
        padding: 15;
        background-color: #131d4e;
    }

</style>