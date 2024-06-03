<script>
import store from "../data/store.js";
import Jumbotron from "./mainComponents/Jumbotron.vue";
import Achievements from "./mainComponents/Achievements.vue";
import Bigvideo from "./mainComponents/Bigvideo.vue";
import Contacts from "./mainComponents/Contacts.vue";
import Events from "./mainComponents/Events.vue";
import Founder from "./mainComponents/Founder.vue";
import News from "./mainComponents/News.vue";
import Plans from "./mainComponents/Plans.vue";
import Specialties from "./mainComponents/Specialties.vue";
import Staff from "./mainComponents/Staff.vue";
import Stats from "./mainComponents/Stats.vue";
import Testimonials from "./mainComponents/Testimonials.vue";
export default {
    name: "MyAppMain",
    components:{
        Jumbotron,
        Achievements,
        Bigvideo,
        Contacts,
        Events,
        Founder,
        News,
        Plans,
        Specialties,
        Staff,
        Stats,
        Testimonials
    },
        data() {
    return {
        store
    }
},
methods: {
},
mounted() {
}
}
</script>

<template>

    <h1>Questo è il main</h1>

    <Jumbotron />
    <Specialties />
    <Founder />
    <Events />
    <Stats />
    <News />
    <Testimonials />
    <Bigvideo />
    <Achievements />
    <Staff />
    <Contacts />
    <Plans />

</template>

<style scoped></style>
