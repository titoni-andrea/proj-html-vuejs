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
        <div class="news">

            <h2 class="titolo">Latest news<span class="arancio">.</span></h2>
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

                <div v-for="element, index in blogImg" v-show="activeImg(index + 1)" class="card">

                    <img :src="getSvg(element, false)">
                    <p class="tag"><i class="fa-solid fa-tag"></i> Business Leading</p>
                    <p class="author"><i class="fa-regular fa-clock"></i> May 5, 2019 <i class="fa-regular fa-user"></i>
                        Amanda Doe</p>
                    <h2 class="titolo">Next investments</h2>
                    <p class="sottotitolo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                        eaque.</p>
                    <p class="readme">READ ME</p>

                </div>

                <div v-for="element, index in blogImg" v-show="activeImg(index + 2)" class="card">

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
}

.news {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0px;
    width: 1200px;
    margin: auto;
}

.titolo {
    color: #222;
    font-family: 'Times New Roman', Times, serif;
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
}

.author i {
    color: #FE4613;
}

.tag {
    background-color: #FE4613;
    width: 33%;
    color: rgb(209, 208, 208);
    padding: 5px 8px;
    font-size: 12px;
}
</style>