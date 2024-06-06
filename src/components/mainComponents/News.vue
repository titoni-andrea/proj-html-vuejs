<script>
export default {
    name: "News",
    props: {
        blogImg: Array,
    },
    data() {
        return {
            active: 0,
            nImage: [1, 2, 3]
        }
    },
    methods: {
        getSvg(name, isSvg) {
            if (isSvg) {
                return new URL(`../../assets/svg/${name}`, import.meta.url).href;
            } else {
                return new URL(`../../assets/img/${name}`, import.meta.url).href;
            }
        },
        nextImg() {

            if (this.active == 3) {
                this.active = 0;
            } else {
                this.active++;
            }

        },
        prevImg() {

            if (this.active == 0) {
                this.active = 3;
            } else {
                this.active--;
            }

        },
        activeImg(index) {
            if (index == this.active) {
                return true;
            } else {
                return false;
            }
        }
    },
}
</script>

<template>
    <div class="cont-flex">
        <img class="svg-sfondo" src="/src/assets/svg/svg-4.svg" alt="">
        <div class="news">

            <h2 class="titolo-principale">Latest news<span class="arancio">.</span></h2>
            <p class="sottotitolo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque.</p>
            <hr class="linea">

            <div class="carousel">

                <div @click="prevImg()" class=" text-dark freccia">
                    <i class="fa-solid fa-arrow-left-long"></i>
                </div>
                <div v-for="element, index in blogImg" v-show="activeImg(index)" class="card">

                    <img :src="getSvg(element, false)">
                    <p class="tag"><i class="fa-solid fa-tag"></i> Business Leading</p>
                    <p class="author"><i class="fa-regular fa-clock"></i> May 5, 2019 <i class="fa-regular fa-user"></i>
                        Amanda Doe</p>
                    <h2 class="titolo">Next investments</h2>
                    <p class="sottotitolo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                        eaque.</p>
                    <p class="readme">READ ME</p>

                </div>

                <div v-for="element, index in blogImg" v-show="activeImg((index + 1)%4)" class="card">

                    <img :src="getSvg(element, false)">
                    <p class="tag"><i class="fa-solid fa-tag"></i> Business Leading</p>
                    <p class="author"><i class="fa-regular fa-clock"></i> May 5, 2019 <i class="fa-regular fa-user"></i>
                        Amanda Doe</p>
                    <h2 class="titolo">Next investments</h2>
                    <p class="sottotitolo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                        eaque.</p>
                    <p class="readme">READ ME</p>

                </div>

                <div v-for="element, index in blogImg" v-show="activeImg((index + 2)%4)" class="card">

                    <img :src="getSvg(element, false)">
                    <p class="tag"><i class="fa-solid fa-tag"></i> Business Leading</p>
                    <p class="author"><i class="fa-regular fa-clock"></i> May 5, 2019 <i class="fa-regular fa-user"></i>
                        Amanda Doe</p>
                    <h2 class="titolo">Next investments</h2>
                    <p class="sottotitolo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                        eaque.</p>
                    <p class="readme">READ ME</p>

                </div>

                <div @click="nextImg()" class="text-dark freccia">
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.cont-flex {
    background-color: #FAFAFA;
    position: relative;
}

.svg-sfondo {
    position: absolute;
    top: -230px;
    width: 28%;
    left: 200px;
}


.news {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem 0px 4rem 0px;
    width: 1200px;
    margin: auto;
}

.titolo-principale {
    color: #222;
    font-family: 'Times New Roman', Times, serif;
    font-size: 48px;
}

.titolo {
    color: #222;
    font-family: 'Times New Roman', Times, serif;
    font-size: 28px;
}

.arancio {
    color: #FE4613;
}

.sottotitolo {
    color: rgb(183, 181, 181);
}

.linea {
    border: solid 1px #FE4613;
    width: 3rem;
    margin-top: 0.5rem;
}

.carousel {
    display: flex;
    gap: 1rem;
    width: 100%;
    align-items: center;
}

.freccia {
    font-size: 24px;
}

.card {
    width: calc((100% / 3) - 1rem);
    border: none;
    border-radius: 0px;
}

.readme {
    font-size: 14px;
    font-weight: bold;
}

.author {
    color: rgb(183, 181, 181);
    font-size: 12px;
    margin-bottom: 0px;
    margin-top: 20px;
}

.author i {
    color: #FE4613;
}

.tag {
    background-color: #FE4613;
    width: 38%;
    color: rgb(209, 208, 208);
    padding: 8px 10px;
    font-size: 12px;
    position: absolute;
    top: 52%;
    left: 60%;
}
</style>