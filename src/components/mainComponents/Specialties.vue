<script>
export default {
    name:"Specialties",
    props: {
        cardInfo: Array
    },
    methods: {
        getSvg(name,isSvg) {
            if(isSvg){
                return new URL(`../../assets/svg/${name}`, import.meta.url).href;
            }else{
                return new URL(`../../assets/img/${name}`, import.meta.url).href;
            }
        }
    }
}
</script>

<template>
    <div class="bkg_fafafa pb-5">
        <div class="my_container py-5">
            <!-- title -->
            <div class="my_title pb-5">
                <h1 class="text-center">Our specialties<span class="text-danger">.</span></h1>
                <p class="text-center text-body-tertiary">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <div class="my_separator"></div>
            </div>
            <!-- specialties cards -->
            <div class="row w-100">
                <div class="col-3 text-center" v-for="element in cardInfo">
                    <img class="mb-3" :src="getSvg(element.img,true)" alt="">
                    <h5>{{ element.title }}</h5>
                    <p class="text-body-tertiary">Lorem, ipsum dolor sit amet consect</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.my_container {
    background-color: #FFFFFF;
    margin:0 2rem;
    width:calc(100% - 4rem);
}

.bkg_fafafa {
    background-color: #FAFAFA;
    color: black;
    width:100%;
}

.my_separator {
    border: solid 0.08rem #FF4612;
    width: 5rem;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
}
</style>