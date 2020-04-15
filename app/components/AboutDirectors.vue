<template>
    <Page>
        <ActionBar title="About Our Directors" />
        <ScrollView background="#131d4e">
            <StackLayout>
                <Label class="about-panel" textWrap="true"
                    text="Our Directors are responsible for managing the club, scheduling our trips and meetings and leading the trail runs.  
                    
Their participation is voluntary and no Director is paid." />
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
        font-size: 20;
        padding: 15;
        background-color: #131d4e;
    }

</style>