<template>
    <BottomNavigation>
        <TabStrip backgroundColor="white">
            <TabStripItem class="navigation__item">
                <Label text="Home"></Label>
                <Image src.decode="font://&#xf015;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem class="navigation__item">
                <Label text="Schedule"></Label>
                <Image src.decode="font://&#xf073;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem class="navigation__item">
                <Label text="Sponsors"></Label>
                <Image src.decode="font://&#xf2bb;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem class="navigation__item">
                <Label text="Trails"></Label>
                <Image src.decode="font://&#xf279;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem class="navigation__item">
                <Label text="Directors"></Label>
                <Image src.decode="font://&#xf007;" class="fas t-36"></Image>
            </TabStripItem>
        </TabStrip>  
        <TabContentItem>  
            <Frame>
                <Home />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Schedule /> 
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Sponsors />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Trails />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Directors />
            </Frame>
        </TabContentItem>

    </BottomNavigation>
</template>

<script>
import Home from "./Home.vue";  
import Schedule from "./Schedule.vue";
import Sponsors from "./Sponsors.vue";
import Trails from "./Trails.vue";
import Directors from "./Directors.vue";  

export default {
  components: {
    Home,
    Schedule,
    Sponsors,
    Trails,
    Directors
  }
};
</script>

<style>
    .fas {
        font-family: "Font Awesome 5 Free", "fa-solid-900";
        font-weight: 900;
    }

    .far {
        font-family: "Font Awesome 5 Free", "fa-regular-400";
        font-weight: 400;
    }

    .t-36 {
        font-size: 36;
    }
</style>
