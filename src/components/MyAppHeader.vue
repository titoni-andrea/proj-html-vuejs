<script>
import CardJumbotron from './mainComponents/CardJumbotron.vue';
import NavBar from './mainComponents/NavBar.vue';


export default {
    name: "MyAppHeader",
    components: {
        CardJumbotron,
        NavBar
    },
    data() {
        return {
            class: [
                "bgHeader-1",
                "bgHeader-2",
                "bgHeader-3"
            ],
            bgActive: 0,
            timer: NaN
        }
    },
    methods: {
        nextImage() {
            clearInterval(this.timer)
            if (this.bgActive >= 2) {
                this.bgActive = 0

            } else {
                this.bgActive++;

            };
            this.timer = setInterval(this.nextImage, 2000);



        },

        prevImage() {
            clearInterval(this.timer);
            if (this.bgActive <= 0) {
                this.bgActive = 2
            } else {
                this.bgActive--;
            };
            this.timer = setInterval(this.nextImage, 2000);
        }

    },
    mounted() {
        this.timer = setInterval(this.nextImage, 2000);
    }
}
</script>

<template>
    <!-- CONTAINER PRINCIPALE CON SFONDO -->
    <div :class="this.class[bgActive]" class="fluid">
        <!-- NAVBAR -->
        <NavBar />
        <!-- NAVBAR -->


        <div class="container cardHeader">

            <a @click="prevImage()" class="text-dark btn fs-1 arrowLeft">⟵</a>
            <!-- CARD JUMBOTRON -->
            <CardJumbotron :active="bgActive" />
            <!-- CARD JUMBOTRON -->
            <a @click="nextImage()" class="text-dark btn fs-1 arrowRight">⟶</a>

        </div>
    </div>

</template>

<style scoped>
.bgHeader-1 {
    height: 100vh;
    background-image: url(../assets/img/h1-rev-img-01.jpg);
}

.bgHeader-2 {
    height: 100vh;
    background-image: url(../assets/img/rev-slider-main-home-img-02.png);
}

.bgHeader-3 {
    height: 100vh;
    background-image: url(../assets/img/rev-slider-main-home-img-03.jpg);
}



.cardHeader {
    color: black;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    height: calc(100% - 178px);
    align-items: center;
    margin-left: 10%;

}

.arrowLeft {
    position: absolute;
    left: 3%;
}

.arrowRight {
    position: absolute;
    right: 3%;
}
</style>
